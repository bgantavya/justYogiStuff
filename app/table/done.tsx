
export default function Done(){
    const done = JSON.parse(localStorage.getItem("done") || '["submit task for CodeYogi"]')

    return(<>
                <h1 className="mt-8 text-3xl">Tasks Completed:</h1>
<div className="flex-col flex justify-start items-start">

            {done.length >0 ? done.map(
                (task:string)=> <div className="text-xl line-through">{task}</div>
            )
            : <div>nothing here</div>}
            </div>
    </>
    )
}