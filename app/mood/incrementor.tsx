import { memo } from "react";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { happyClicked, sadClicked } from "./action";


type HappyIncrementorProps = {};

const HappyIncrementorComponent: FC<HappyIncrementorProps> = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>Are you Happy?</div>
      <button onClick={()=>dispatch(happyClicked)} className="rounded bg-orange-600 px-4 py-2">YES</button>
    </>
  );
};

export const HappyIncrementor = memo(HappyIncrementorComponent);

type SadIncrementorProps = {};

const SadIncrementorComponent: FC<SadIncrementorProps> = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>Are you Sad?</div>
      <button onClick={()=>dispatch(sadClicked)} className="rounded bg-blue-600  px-4 py-2">YES</button>
    </>
  );
};

export const SadIncrementor = memo(SadIncrementorComponent);
