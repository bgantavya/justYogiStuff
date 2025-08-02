import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState(true);
    const [list, setList] = useState<string[]>(
        JSON.parse(localStorage.getItem("todo") || '["Get an PPO at DevsLane"]')
    );

    function add(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const input = (event.currentTarget.elements[0] as HTMLInputElement);
        const task = input.value.trim();

        if (task) {
            const newList = [...list, task];
            setList(newList);
            localStorage.setItem("todo", JSON.stringify(newList));
            input.value = "";
            setTodo(true);
        }
    }

    function remove(task: string) {
        const newList = list.filter(item => item !== task);
        setList(newList);
        localStorage.setItem("todo", JSON.stringify(newList));
        localStorage.setItem("done", JSON.stringify([...JSON.parse(localStorage.getItem("done") || '["submit task for CodeYogi"]'), task]));
        window.location.reload()
    }

    

    return (
        <>
            <h1 className="text-3xl mb-2">Tasks to do:</h1>
            <div className="flex flex-col">

            {list.map((num: string) => (
                <div key={num} className="flex text-xl items-start">
                    <label className="flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name={num}
                            id={num}
                            onClick={() => remove(num)}
                            className="peer hidden"
                        />
                        <span
                            className="w-6 h-6 border-2 border-yellow-500 rounded flex items-center justify-center 
               bg-yellow-500 transition-colors duration-200
               hover:bg-yellow-600 peer-checked:bg-yellow-600"
                        >
                            <svg
                                className="hidden w-4 h-4 text-white peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <div className="p-2 pb-4">{num}</div>
                    </label>
                </div>
            ))}
            </div>

            {todo ? (
                <button
                    onClick={() => setTodo(false)}
                    className="bg-yellow-500 px-6 py-1 rounded-xl text-white text-xl m-4 hover:bg-yellow-600"
                >
                    <span className="font-bold text-xl"></span>Add a TODO
                </button>
            ) : (
                <form
                    onSubmit={add}
                    className="border my-6 p-6 rounded-xl text-xl"
                >
                    <input
                        className="p-1 w-full rounded-xl focus:outline-yellow-500"
                        placeholder="Enter your task here: "
                    />

                    <div className="flex justify-between ml-2 mt-4  w-full">
                        <button
                            type="submit"
                            className="bg-yellow-500 px-6 py-1 rounded-xl text-white hover:bg-yellow-600"
                        >
                            Add
                        </button>
                        <button
                            type="button"
                            onClick={() => setTodo(true)}
                            className="px-6 py-1 rounded-xl"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

</>
    );
}
