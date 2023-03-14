import { useEffect, useState } from "react"

const initialForm={
    id:null,
    name:'',
    lastname:''
}

const CrudForm =({create, update, dataToEdit, setDataToEdit}) => {
    const[form,setForm]=useState(initialForm);
    useEffect(()=>{
        console.log("elementos " + dataToEdit)
        if(dataToEdit){
            setForm(dataToEdit)
        }
        else {
            setForm(initialForm)
        }
    },[dataToEdit])

    const handleChance=(e)=>{
        //console.log(e.target.name +" "+e.target.value)//
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.name || !form.lastname){
            alert('Datos Incompletos')
            return;
        }
        if(form.id===null){
            create(form)
        }
        else{
            update(form)
        }
        handleReset();
    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }
    return (
        <div>
            <h3>{dataToEdit? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Nombre' onChange={handleChance} value={form.name}/>
                <input type='text' name='lastname' placeholder='Apellido' onChange={handleChance} value={form.lastname}/>
                <button type='submit'>Enviar</button>
                <button type='reset' onClick={handleReset}>Limpiar</button>
            </form>
        </div>
    )
}
export default CrudForm