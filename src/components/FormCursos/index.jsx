import React from 'react'

const FormCursos = ({ categories, users, curso, handleChangeValues, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="font-weight-bold">Titulo</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Titulo del curso" name='title' value={curso.title || ''} onChange={handleChangeValues} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Descripcion</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. Esta es una descripcion..." name='description' value={curso.description || ''} onChange={handleChangeValues} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Categoria</label>
                <select className="form-control form-select w-100" name="categoryId" onChange={handleChangeValues}>
                    {
                        !curso.categoryId ? <option value={undefined}>---Asigna una categoria---</option> : null
                    }
                    {
                        categories.map((category, idx) => <option value={category._id} key={category._id} defaultValue={idx === 0 ? true : false}>{category.title}</option>)
                    }
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Partner para asignar</label>
                <select className="form-control form-select w-100" name="authorId" onChange={handleChangeValues}>
                    {
                        !curso.authorId ? <option value={undefined}>---Asigna un usuario---</option> : null
                    }
                    {
                        users.map((user, idx) => <option value={user._id} key={user._id} defaultValue={idx === 0 ? true : false}>{user.userName}</option>)
                    }
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Imagen del curso</label>
                <input type="text" className="form-control border rounded shadow-sm p-1" placeholder="E.g. https://image.com/123123" name="imgUrl" value={curso.imgUrl ? curso.imgUrl : ''} onChange={handleChangeValues} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Precio (MXN )</label>
                <input type="number" className="form-control border rounded shadow-sm p-1" placeholder="E.g. 250" name="price" value={curso.price ? curso.price : ''} onChange={handleChangeValues} />
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary w-100">Agregar curso</button>
            </div>
        </form>
    )
}

export default FormCursos;