import { memo, useState } from "react";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { happyClicked, sadClicked } from "./redux/action";


type HappyIncrementorProps = {};
const HappyIncrementorComponent: FC<HappyIncrementorProps> = () => {
  const [happyQ, setHappyQ] = useState(1);
  const dispatch = useDispatch()
  const happyButtonClicked = () => {
    dispatch(happyClicked(happyQ, new Date()))
  }
  return (
    <>
      <div>Are you Happy?</div>
      <input
        type='number'
        onChange={(e) => setHappyQ(+e.target.value)}
      />
      <button onClick={happyButtonClicked} className="rounded bg-orange-600 px-4 py-2">YES</button>
    </>
  );
};
export const HappyIncrementor = memo(HappyIncrementorComponent);

type SadIncrementorProps = {};
const SadIncrementorComponent: FC<SadIncrementorProps> = () => {
  const [sadQ, setSadQ] = useState(1);
  const dispatch = useDispatch()
  const sadButtonClicked = () => {
    dispatch(sadClicked(sadQ, new Date()))
  }

  return (
    <>
      <div>Are you Sad?</div>
      <input
        type='number'
        onChange={(e) => setSadQ(+e.target.value)}
      />
      <button onClick={sadButtonClicked} className="rounded bg-blue-600  px-4 py-2">YES</button>
    </>
  );
};
export const SadIncrementor = memo(SadIncrementorComponent);
