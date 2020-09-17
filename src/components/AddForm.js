import React, {useCallback, useContext, useEffect, useState} from 'react'
import {TableContext} from '../context/Table/tableContext'


export const AddForm = () => {
    const {addRow} = useContext(TableContext)
    const [completed, setCompleted] = useState(false)
    const [form, setForm] = useState({
        id: '', firstName: '', lastName: '', phone: '', email: ''
    })
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const checkCompleted = useCallback(() => {
        const completed = form.email !== '' && form.id !== '' && form.firstName !== '' && form.lastName !== '' && form.email !== '' && form.phone !== ''
        setCompleted(!completed)
    }, [form])
    useEffect(() => {
        checkCompleted()
    }, [form, checkCompleted])
    return (
        <form className={'mb-3'}>
            <div className="form-row">
                <div className="col">
                    <input type="text"
                           className="form-control"
                           placeholder="ID"
                           name="id"
                           onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div className="col">
                    <input type="text"
                           className="form-control"
                           placeholder="Last Name"
                           name="lastName"
                           onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="phone"
                        name="phone"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <button
                    className={`btn btn-dark`}
                    disabled={completed}
                    onClick={(e)=> addRow(e,form)}
                >Добавить
                </button>
            </div>
        </form>
    )
}