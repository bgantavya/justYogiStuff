import { memo } from "react";
import type { FC } from "react";
import { useSelector } from "react-redux";
import { happyCountSelector, sadCountSelector } from "./redux/selectors";


type HappyTrackerProps = {};

const HappyTrackerComponent: FC<HappyTrackerProps> = () => {
  const happyCount = useSelector(happyCountSelector)
  return <div className="bg-orange-600">{`You were Happy times.`}
    {happyCount.map(
      moment => <div>
        Happy {moment.intensity} at {String(moment.at.toLocaleTimeString())}
      </div>
    )}
  </div>

};

// HappyTrackerComponent.defaultProps = {}
export const HappyTracker = memo(HappyTrackerComponent);

type SadTrackerProps = {};

const SadTrackerComponent: FC<SadTrackerProps> = () => {
  const sadCount = useSelector(sadCountSelector)
  return <div className="bg-blue-600">{`You were Sad times.`}
    {sadCount.map(
      moment => <div>
        Happy {moment.intensity} at {String(moment.at.toLocaleTimeString())}
      </div>
    )}
  </div>
};

// SadTrackerComponent.defaultProps = {}
export const SadTracker = memo(SadTrackerComponent);
