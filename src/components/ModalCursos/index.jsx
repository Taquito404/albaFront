import React from 'react'

const ModalCursos = ({ visibilityClass, handleCloseModal }) => {
    return (
        <div className={`modal ${visibilityClass}`}>
            <div className="modal-dialog" role="document">
                <div className="modal-content p-4">
                    <form>
                        <h4 className="font-weight-bold mb-4">Agregar leccion</h4>
                        <div className="form-group">
                            <label className="font-weight-bold">Titulo de la leccion</label>
                            <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. user123" />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Descripcion</label>
                            <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Esta es una descripcion..." />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">URL</label>
                            <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. https://play.vimeo.com/video-1212" />
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary w-50">Agregar leccion</button>
                            <button type="button" className="btn btn-secondary w-25" onClick={handleCloseModal}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalCursos
