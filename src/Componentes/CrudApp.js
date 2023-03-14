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
    const createData=(data) =>{
        data.id=db.length;
        setDb([...db,data])
    };
    const updateData=(data) =>{
        let newData=db.map(item => item.id==data.id?data:item)
        setDb(newData)
    }
    const deleteData=(id) =>{};

    return (
        <div>
            <h1>CrudApp</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )
}
export default CrudApp