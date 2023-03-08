const CrudTable =() => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chumpapi</td>
                        <td>Jr</td>
                        <td><button>Editar</button><button>Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable