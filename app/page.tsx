import { useState } from "react";
import Todo from "./table/todo";
import Done from "./table/done";

export default function Home() {

  return <div className="flex flex-col items-center">
    <div className="text-5xl font-bold my-10">X-TODO</div>
    <Todo />
      <Done/>
  </div>;
}
