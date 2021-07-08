import React from 'react'

const FormPartner = ({ buttonDesc, handleChangeValues, handleSubmit, user, disableButton }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="font-weight-bold">Username</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. user123" name="userName" onChange={handleChangeValues} value={user.userName ? user.userName: ''} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Email</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. examplemail@example.com" name="email" onChange={handleChangeValues} value={user.email ? user.email: ''} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Primer Nombre</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Tomas" name="name" onChange={handleChangeValues} value={user.name ? user.name: ''} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Apellido Paterno</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Wayne" name="lastName" onChange={handleChangeValues} value={user.lastName ? user.lastName: ''} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Telefono</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. 811232323" name="cellphone" onChange={handleChangeValues} value={user.cellphone ? user.cellphone: ''} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Password</label>
                <input type="password" className="form-control border rounded shadow-sm p-1" placeholder="******" name="password" onChange={handleChangeValues}  />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={disableButton}>{buttonDesc}</button>
        </form>
    )
}

export default FormPartner
