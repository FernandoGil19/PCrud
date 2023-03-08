import { useState } from "react"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

const initialDB=[
    {
        id:15,
        name:'Carlos',
        lastname:'Briceño'
    },
    {
        id:19,
        name:'Fernando',
        lastname:'Gil'
    }
]

const CrudApp =() => {
    const [db, setDb] = useState(initialDB)
    return (
        <div>
            <h1>CrudApp</h1>
            <CrudForm/>
            <CrudTable data={db}/>
        </div>
    )
}
export default CrudApp