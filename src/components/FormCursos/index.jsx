import React from 'react'

const FormCursos = ({handleShowModal, handleCloseModal}) => {
    return (
        <form>
            <div className="form-group">
                <label className="font-weight-bold">Titulo</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. user123" />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Descripcion</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Esta es una descripcion..." />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Categoria</label>
                <select className="form-control form-select w-100">
                    <option>Primera categoria</option>
                    <option>Primera categoria</option>
                    <option>Primera categoria</option>
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Precio</label>
                <input type="number" className="form-control border rounded shadow-sm p-1" placeholder="E.g. 250" />
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary w-50">Agregar curso</button>
                <button type="button" className="btn btn-secondary w-25" onClick={handleShowModal}>Añadir leccion</button>
            </div>
        </form>
    )
}

export default FormCursos;
