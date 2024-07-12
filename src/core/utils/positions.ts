import {
  type AngledPosition,
  type BodyState,
  DIRECTION_ANGLES,
  type Direction,
  type FeetState,
  HAND_MOVES_META,
  type HandGesture,
  type Position,
  type Side,
  type Step,
} from "../data";
import { DEFAULT_HAND_MOVE, DEFAULT_PALM_DIRECTION } from "../data/moves/hand.tsx";

export function getOtherSide(side: Side): Side {
  return side === "left" ? "right" : "left";
}

export function diff(p1: Position, p2: Position): Position {
  return {
    x: p2.x - p1.x,
    y: p2.y - p1.y,
  };
}

export function add<T extends Position | AngledPosition>(point: T, vector: Position): T {
  return {
    ...point,
    x: point.x + vector.x,
    y: point.y + vector.y,
  };
}

export function rotate(point: AngledPosition, center: Position, angle: number): AngledPosition {
  const d = diff(center, point);
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return {
    angle: point.angle + angle,
    x: center.x + (d.x * cos - d.y * sin),
    y: center.y + (d.x * sin + d.y * cos),
  };
}

export function mirrorAngle(angle: number): number {
  return -angle;
}

export function mirrorPosition<T extends AngledPosition>(position: T): T {
  return {
    ...position,
    x: -position.x,
    y: position.y,
    angle: mirrorAngle(position.angle),
  };
}

export function mirrorPositions<T extends FeetState>(state: T): T {
  return {
    ...state,
    left: mirrorPosition(state.right),
    right: mirrorPosition(state.left),
  };
}

export function mirrorBodyState({ head, pelvis, feet, hands }: BodyState): BodyState {
  return {
    head: { angle: mirrorAngle(head.angle) },
    pelvis: mirrorPosition(pelvis),
    feet: mirrorPositions(feet),
    hands: mirrorPositions(hands),
  };
}

export function moveBodyState(
  bodyState: BodyState,
  anchor: { side: Side; position: Position; direction: Direction },
): BodyState {
  const translationVector: Position = diff(bodyState.feet[anchor.side], anchor.position);

  const angle = DIRECTION_ANGLES[anchor.direction];
  const otherSide = getOtherSide(anchor.side);

  // Translate:
  const res: BodyState = {
    head: bodyState.head,
    hands: bodyState.hands,
    pelvis: add(bodyState.pelvis, translationVector),
    feet: {
      left: add(bodyState.feet.left, translationVector),
      right: add(bodyState.feet.right, translationVector),
    },
  };

  // Rotate feet:
  const targetPosition = res.feet[anchor.side];
  res.feet[otherSide] = rotate(res.feet[otherSide], targetPosition, angle);
  res.feet[anchor.side].angle += angle;
  res.pelvis = rotate(res.pelvis, targetPosition, angle);
  res.head.angle += angle;

  return res;
}

export function getHandsState(
  pelvis: BodyState["pelvis"],
  { leftHand, rightHand }: Pick<Step, "leftHand" | "rightHand">,
): BodyState["hands"] {
  const handsCount: number = +!!leftHand + +!!rightHand;

  switch (handsCount) {
    case 2: {
      const leftHandMoveMeta = HAND_MOVES_META[leftHand!.move];
      const rightHandMoveMeta = HAND_MOVES_META[rightHand!.move];

      return {
        left: {
          ...rotate(
            mirrorPosition(leftHandMoveMeta.rightHandPosition),
            { x: 0, y: 0 },
            DIRECTION_ANGLES[leftHand!.direction],
          ),
          closedFist: !!leftHandMoveMeta.isClosedFist,
          palm: leftHandMoveMeta.palmDirection || DEFAULT_PALM_DIRECTION,
        },
        right: {
          ...rotate(rightHandMoveMeta.rightHandPosition, { x: 0, y: 0 }, DIRECTION_ANGLES[rightHand!.direction]),
          closedFist: !!rightHandMoveMeta.isClosedFist,
          palm: rightHandMoveMeta.palmDirection || DEFAULT_PALM_DIRECTION,
        },
      };
    }
    case 1: {
      const mainSide: Side = leftHand ? "left" : "right";
      const mainHand = (leftHand || rightHand) as HandGesture;
      const mainHandMove = mainHand.move;
      const mainHandMoveMeta = HAND_MOVES_META[mainHandMove];

      const otherSide = getOtherSide(mainSide);
      const otherHandMove = mainHandMoveMeta.defaultOtherHandMove || DEFAULT_HAND_MOVE;
      const otherHandMoveMeta = HAND_MOVES_META[otherHandMove];

      const mainHandPosition = rotate(
        mainSide === "right" ? mainHandMoveMeta.rightHandPosition : mirrorPosition(mainHandMoveMeta.rightHandPosition),
        { x: 0, y: 0 },
        DIRECTION_ANGLES[mainHand.direction],
      );
      const otherHandPosition = rotate(
        otherSide === "right"
          ? otherHandMoveMeta.rightHandPosition
          : mirrorPosition(otherHandMoveMeta.rightHandPosition),
        { x: 0, y: 0 },
        pelvis.angle,
      );

      return {
        [mainSide]: {
          ...mainHandPosition,
          closedFist: !!mainHandMoveMeta.isClosedFist,
          palm: mainHandMoveMeta.palmDirection || DEFAULT_PALM_DIRECTION,
        },
        [otherSide]: {
          ...otherHandPosition,
          closedFist: !!otherHandMoveMeta.isClosedFist,
          palm: otherHandMoveMeta.palmDirection || DEFAULT_PALM_DIRECTION,
        },
      } as BodyState["hands"];
    }
    case 0:
    default: {
      const leftHandMoveMeta = HAND_MOVES_META[DEFAULT_HAND_MOVE];
      const rightHandMoveMeta = HAND_MOVES_META[DEFAULT_HAND_MOVE];

      return {
        left: {
          ...rotate(mirrorPosition(leftHandMoveMeta.rightHandPosition), { x: 0, y: 0 }, pelvis.angle),
          closedFist: !!leftHandMoveMeta.isClosedFist,
          palm: leftHandMoveMeta.palmDirection || DEFAULT_PALM_DIRECTION,
        },
        right: {
          ...rotate(rightHandMoveMeta.rightHandPosition, { x: 0, y: 0 }, pelvis.angle),
          closedFist: !!rightHandMoveMeta.isClosedFist,
          palm: rightHandMoveMeta.palmDirection || DEFAULT_PALM_DIRECTION,
        },
      };
    }
  }
}
