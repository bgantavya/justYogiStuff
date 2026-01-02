import { useState } from "react";

export default function Table(){
    const [num, updateNum] = useState(2)
    const update = () => updateNum(num + 1)
    return(
        <div>
        <button className="bg-indigo-600 p-4 rounded m-2" onClick={update}>Next</button>
        <TableItem num = {num}/>
        </div>
    )
}
type props = {
    num : number
}
function TableItem({num} : props){
    const table = Array.from({length: 10},(_,i) => (i+1))
    return(
        table.map((i) => {
            return (
                <div className="text-xl">
                {`${num} X ${i} = ${num*i}`}
            </div>
        )})
    )
}