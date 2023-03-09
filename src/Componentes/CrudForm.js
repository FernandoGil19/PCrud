import { useState } from "react"

const initialForm={
    id:null,
    name:'',
    lastname:''
}

const CrudForm =(create, update, dataToEdit, setDataToEdit) => {
    const[form,setForm]=useState(initialForm)

    const handleChance=(e)=>{
        //console.log(e.target.name +" "+e.target.value)//
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit=(e)=>{}
    const handleReset=(e)=>{}
    return (
        <div>
            <h3>Crear</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Nombre' onChange={handleChance} value={form.name}/>
                <input type='text' name='lastname' placeholder='Apellido' onChange={handleChance} value={form.lastname}/>
                <input type='submit' value='Enviar' />
                <input type='reset' value='Limpiar' onClick={handleReset}/>
            </form>
        </div>
    )
}
export default CrudForm