import React from 'react'

const FormPartner = ({buttonDesc}) => {
    return (
        <form>
            <div className="form-group">
                <label className="font-weight-bold">Username</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. user123" />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Email</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. examplemail@example.com" />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Primer Nombre</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Tomas" />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Apellido Paterno</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Wayne" />
            </div>

            <div className="form-group">
                <label className="font-weight-bold">Telefono</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. 811232323" />
            </div>

            <div className="form-group">
                <label className="font-weight-bold">Password</label>
                <input type="password" className="form-control border rounded shadow-sm p-1" placeholder="******" />
            </div>
            <button className="btn btn-primary w-100">{buttonDesc}</button>
        </form>
    )
}

export default FormPartner
