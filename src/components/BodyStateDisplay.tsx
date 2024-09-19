import cx from "classnames";
import { FC } from "react";

import type { BodyState, Palm } from "../core/data";

const PALM_CLASSES: Record<Palm, string> = {
  back: "side",
  front: "side",
  ground: "ground",
  side: "side",
  sky: "sky",
};

const ANGLE_OFFSET = -Math.PI / 2;

export const BodyStateDisplay: FC<{ state: BodyState }> = ({ state: { feet, hands, pelvis, head } }) => {
  return (
    <>
      <div className="feet">
        <div
          className="foot foot-left"
          style={{
            top: -feet.left.y + "cm",
            left: feet.left.x + "cm",
            transform: `rotate(${-feet.left.angle + ANGLE_OFFSET}rad)`,
          }}
        />
        <div
          className="foot foot-right"
          style={{
            top: -feet.right.y + "cm",
            left: feet.right.x + "cm",
            transform: `rotate(${-feet.right.angle + ANGLE_OFFSET}rad)`,
          }}
        />
      </div>

      <div>
        <div
          className="body-wrapper"
          style={{
            top: -pelvis.y + "cm",
            left: pelvis.x + "cm",
          }}
        >
          <div className="hands">
            <div
              className={cx(
                "hand hand-left",
                hands.left.closedFist ? "closed" : "opened",
                PALM_CLASSES[hands.left.palm],
              )}
              style={{
                top: -hands.left.y + "cm",
                left: hands.left.x + "cm",
                transform: `rotate(${-hands.left.angle + ANGLE_OFFSET}rad)`,
              }}
            />
            <div
              className={cx(
                "hand hand-right",
                hands.right.closedFist ? "closed" : "opened",
                PALM_CLASSES[hands.right.palm],
              )}
              style={{
                top: -hands.right.y + "cm",
                left: hands.right.x + "cm",
                transform: `rotate(${-hands.right.angle + ANGLE_OFFSET}rad)`,
              }}
            />
          </div>

          <div
            className="body"
            style={{
              transform: `rotate(${-pelvis.angle + ANGLE_OFFSET}rad)`,
            }}
          />

          <div
            className="head"
            style={{
              transform: `rotate(${-head.angle + ANGLE_OFFSET}rad)`,
            }}
          />
        </div>
      </div>
    </>
  );
};
