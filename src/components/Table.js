import React, {useContext, useEffect, useState} from 'react'
import {TableContext} from '../context/Table/tableContext'
import _ from 'lodash'

export const Table = () => {
    const {
        data,
        sortDate,
        selectField,
        order,
        onSelectRow,
        pageSize,
        currentPage,
        searchedData,
        sorted,

    } = useContext(TableContext)

    const [displayData, setDisplayData] = useState([])

    useEffect(() => {
        searchedData.length > 0
            ? setDisplayData(_.chunk(searchedData, pageSize)[currentPage])
            : setDisplayData(_.chunk(data, pageSize)[currentPage])
    }, [searchedData.length, searchedData, pageSize, currentPage, data,])

    return (
        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th onClick={() => sortDate('id')}>ID
                    {
                        sorted && selectField === 'id'
                            ? <span className="material-icons">
                                {order === 'asc' ? 'arrow_circle_up' : 'arrow_circle_down'}</span>
                            : null
                    }
                </th>
                <th onClick={() => sortDate('firstName')}>
                    firstName
                    {
                        sorted && selectField === 'firstName'
                            ? <span className="material-icons">
                                {order === 'asc' ? 'arrow_circle_up' : 'arrow_circle_down'}</span>
                            : null
                    }
                </th>
                <th onClick={() => sortDate('lastName')}>
                    lastName
                    {
                        sorted && selectField === 'lastName'
                            ? <span className="material-icons">
                                {order === 'asc' ? 'arrow_circle_up' : 'arrow_circle_down'}</span>
                            : null
                    }
                </th>
                <th onClick={() => sortDate('email')}>
                    email
                    {
                        sorted && selectField === 'email'
                            ? <span className="material-icons">
                                {order === 'asc' ? 'arrow_circle_up' : 'arrow_circle_down'}</span>
                            : null
                    }
                </th>
                <th onClick={() => sortDate('phone')}>
                    phone
                    {
                        sorted && selectField === 'phone'
                            ? <span className="material-icons">
                                {order === 'asc' ? 'arrow_circle_up' : 'arrow_circle_down'}</span>
                            : null
                    }
                </th>
            </tr>
            </thead>
            <tbody>
            {displayData.map(item => {
                return (<tr key={item.id + item.phone} onClick={() => onSelectRow(item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>)
            })}

            </tbody>
        </table>


    )
}