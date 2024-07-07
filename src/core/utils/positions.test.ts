import { expect, test } from "vitest";

import { add, diff, getOtherSide, mirrorAngle, mirrorFeetState, rotate, transformFeetState } from "./positions.ts";

test("positions#getOtherSide", () => {
  expect(getOtherSide("left")).to.equal("right");
  expect(getOtherSide("right")).to.equal("left");
});

test("positions#diff", () => {
  expect(diff({ x: 10, y: 10 }, { x: 30, y: 30 })).to.eql({ x: 20, y: 20 });
});

test("positions#add", () => {
  expect(add({ x: 10, y: 10 }, { x: 20, y: 20 })).to.eql({ x: 30, y: 30 });
});

test("positions#rotate", () => {
  expect(rotate({ x: 10, y: 10 }, { x: 20, y: 20 }, Math.PI)).to.eql({ x: 30, y: 30 });
  expect(rotate({ x: 10, y: 10 }, { x: 20, y: 20 }, Math.PI / 2)).to.eql({ x: 30, y: 10 });
  expect(rotate({ x: 10, y: 10 }, { x: 20, y: 20 }, -Math.PI / 2)).to.eql({ x: 10, y: 30 });
});

test("positions#mirrorAngle", () => {
  expect(mirrorAngle(Math.PI / 2)).to.equal(Math.PI / 2);
  expect(mirrorAngle(0)).to.equal(Math.PI);
  expect(mirrorAngle(Math.PI)).to.equal(0);
  expect(mirrorAngle(Math.PI / 4)).to.equal((3 * Math.PI) / 4);
  expect(mirrorAngle(-Math.PI / 4)).to.equal((5 * Math.PI) / 4);
});

test("positions#mirrorFeetState", () => {
  expect(
    mirrorFeetState({
      left: {
        heel: { x: -10, y: -30 },
        angle: (Math.PI * 3) / 4,
      },
      right: {
        heel: { x: 10, y: 30 },
        angle: Math.PI / 2,
      },
    }),
  ).to.eql({
    left: {
      heel: { x: -10, y: 30 },
      angle: Math.PI / 2,
    },
    right: {
      heel: { x: 10, y: -30 },
      angle: Math.PI / 4,
    },
  });
});

test("positions#transformFeetState", () => {
  expect(
    transformFeetState(
      {
        left: {
          heel: { x: -10, y: -30 },
          angle: (Math.PI * 2) / 3,
        },
        right: {
          heel: { x: 10, y: 30 },
          angle: Math.PI / 2,
        },
      },
      {
        side: "right",
        direction: "west",
        position: {
          x: -50,
          y: 10,
        },
      },
    ),
  ).to.eql({
    left: {
      heel: {
        x: 10,
        y: -10,
      },
      angle: (Math.PI * 7) / 6,
    },
    right: {
      heel: {
        x: -50,
        y: 10,
      },
      angle: Math.PI,
    },
  });
});
