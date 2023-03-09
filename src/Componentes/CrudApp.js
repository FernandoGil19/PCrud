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
    const [dataToEdit,setDataToEdit]=useState(null)
    const createData=(data) =>{};
    const updateData=(data) =>{}
    const deleteData=(id) =>{};

    return (
        <div>
            <h1>CrudApp</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} delete={deleteData}/>
        </div>
    )
}
export default CrudApp