import { DIRECTION_ANGLES, Direction, FeetState, Position, Side } from "../data/types.ts";

export function getOtherSide(side: Side): Side {
  return side === "left" ? "right" : "left";
}

export function diff(p1: Position, p2: Position): Position {
  return {
    x: p2.x - p1.x,
    y: p2.y - p1.y,
  };
}

export function add(p1: Position, p2: Position): Position {
  return {
    x: p1.x + p2.x,
    y: p1.y + p2.y,
  };
}

export function rotate(point: Position, center: Position, angle: number): Position {
  const d = diff(center, point);
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return {
    x: center.x + (d.x * cos - d.y * sin),
    y: center.y + (d.x * sin + d.y * cos),
  };
}

export function mirrorAngle(angle: number): number {
  return Math.PI - angle;
}

export function mirrorPosition({ x, y }: Position): Position {
  return {
    x: -x,
    y,
  };
}

export function mirrorFeetState({ left, right }: FeetState): FeetState {
  return {
    left: {
      angle: mirrorAngle(right.angle),
      heel: mirrorPosition(right.heel),
    },
    right: {
      angle: mirrorAngle(left.angle),
      heel: mirrorPosition(left.heel),
    },
  };
}

export function transformFeetState(
  feetState: FeetState,
  anchor: { side: Side; position: Position; direction: Direction },
): FeetState {
  const translationVector: Position = diff(feetState[anchor.side].heel, anchor.position);

  const angle = DIRECTION_ANGLES[anchor.direction];
  const otherSide = getOtherSide(anchor.side);

  // Translate:
  const res: FeetState = {
    left: {
      heel: add(feetState.left.heel, translationVector),
      angle: feetState.left.angle,
    },
    right: {
      heel: add(feetState.right.heel, translationVector),
      angle: feetState.right.angle,
    },
  };

  // Rotate:
  res[otherSide].heel = rotate(res[otherSide].heel, res[anchor.side].heel, angle);
  res[anchor.side].angle += angle;
  res[otherSide].angle += angle;

  return res;
}
