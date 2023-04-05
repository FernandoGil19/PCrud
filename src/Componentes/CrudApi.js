import { useEffect, useState } from "react"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import { helpHttp } from "../helper/helpHttp";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
    //Variables
    let api = helpHttp();
    let url = 'http://localhost:5000/users'

    useEffect(() => {
        setLoading(true)
        api.get(url).then(response => {
            //console.log(response)
            if (!response.err) {
                setDb(response)
            }
            else {
                setDb(null)
            }
            setLoading(false)
        })
    }, [])

    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const createData = (data) => {
        data.id = db.length;
        setDb([...db, data])
    };
    const updateData = (data) => {
        let newData = db.map(item => item.id == data.id ? data : item)
        setDb(newData)
    }
    const deleteData = (id) => {
        let eliminar = db.filter(item => item.id !== id)
        setDb(eliminar)
    };

    return (
        <div>
            <h1>CrudApi</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />

            {loading && <Loader />}
            {error && <Message />}
            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
        </div>
    )
}
export default CrudApi