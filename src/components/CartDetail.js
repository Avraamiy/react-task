import React, {useContext} from 'react'
import {TableContext} from '../context/Table/tableContext'

export const CartDetail = () => {
    const {selectRow} = useContext(TableContext)

    if (!selectRow.description && !selectRow.address) {
        return (

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <p className="display-5">Выбран пользователь: <strong>
                        {selectRow.firstName + ' ' + selectRow.lastName}
                    </strong>
                    </p>
                    <p>Описание:</p>
                    <strong>Отсутствует</strong>
                </div>
            </div>

        )
    }

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <p>Выбран пользователь <b>{selectRow.firstName + ' ' + selectRow.lastName}</b></p>
                <p>Описание:</p>
                <textarea style={{minHeight: '125px'}} className="w-50 p-2" value={selectRow.description} readOnly={true}/>

                <p>Адрес проживания: <b>{selectRow.address.streetAddress}</b></p>
                <p>Город: <b>{selectRow.address.city}</b></p>
                <p>Провинция/штат: <b>{selectRow.address.state}</b></p>
                <p>Индекс: <b>{selectRow.address.zip}</b></p>
            </div>
        </div>
    )
}