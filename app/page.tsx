import { Link } from "react-router";
import Table from "./table/table";

export default function Home() {
  return <div className="flex justify-evenly items-center h-screen">
    <Table/>
    <Table/>
    <Table/>
    <Table/>
  </div>;
}
