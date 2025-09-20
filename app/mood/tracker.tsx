import { memo } from "react";
import type { FC } from "react";
import { useSelector } from "react-redux";
import { happyCountS, sadCountS } from "./selectors";


type HappyTrackerProps = {};

const HappyTrackerComponent: FC<HappyTrackerProps> = () => {
    const happyCount = useSelector(happyCountS)
  return <div className="bg-orange-600">{`You were Happy ${happyCount} times.`}</div>

};

// HappyTrackerComponent.defaultProps = {}
export const HappyTracker = memo(HappyTrackerComponent);

type SadTrackerProps = {};

const SadTrackerComponent: FC<SadTrackerProps> = () => {
    const sadCount = useSelector(sadCountS)
  return <div className="bg-blue-600">{`You were Sad ${sadCount} times.`}</div>
};

// SadTrackerComponent.defaultProps = {}
export const SadTracker = memo(SadTrackerComponent);
