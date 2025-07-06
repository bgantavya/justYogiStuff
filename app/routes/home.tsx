import type { Route } from "./+types/home";
import Table from "~/table/table";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return( 
    <div className="flex w-screen items-center h-screen justify-evenly mx-auto gap-10">
  <Table />
  <Table />
  <Table />
  <Table />
    </div>

  );
}
