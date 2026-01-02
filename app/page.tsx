import Todo from "./table/todo";
import Done from "./table/done";
import { HappyTracker, SadTracker } from "./mood/tracker";
import { HappyIncrementor, SadIncrementor } from "./mood/incrementor";
export default function Home() {

  return <div className="flex flex-col items-center">
    <div className="text-5xl font-bold my-10">X-TODO</div>
    <HappyTracker/>
        <SadTracker/>
            <HappyIncrementor/>
        <SadIncrementor/>

  </div>;
}
