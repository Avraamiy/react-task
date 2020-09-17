import React, {useContext, useState} from 'react'
import {TableContext} from '../context/Table/tableContext'

export const Search = () => {
    const {handleSearch} = useContext(TableContext)
    const [value, setValue] = useState('')
    const inputChangeHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={'input-group'}>
            <div className="form-group mx-sm-5 mb-2">
                <input onChange={(e) => inputChangeHandler(e)} type="text"
                       className="form-control"
                       placeholder="Поиск по совпадению ..."
                       value={value}
                />
            </div>
            <button

                className="btn btn-secondary mb-2"
                onClick={() => handleSearch(value.trim())}
            >Найти
            </button>
        </div>

    )
}