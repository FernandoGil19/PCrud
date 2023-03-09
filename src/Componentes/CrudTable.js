const CrudTable =({data}) => {
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
                    {
                        data.length === 0 ? (
                            <tr>
                                <td colSpan="3">No existen datos</td>
                            </tr>
                        ) : (
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td><button>Editar</button><button>Eliminar</button></td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable