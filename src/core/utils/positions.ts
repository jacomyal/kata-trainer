import {
  type AngledPosition,
  type BodyState,
  DIRECTION_ANGLES,
  type Direction,
  type FeetState,
  type Position,
  type Side,
} from "../data";

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

export function mirrorBodyState({ pelvis, feet, hands }: BodyState): BodyState {
  return {
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

  return res;
}
