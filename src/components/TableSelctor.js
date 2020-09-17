import React, {useContext} from 'react'
import {TableContext} from '../context/Table/tableContext'
import {withRouter} from 'react-router-dom'

export const TableSelector = withRouter(({history}) => {

    const url1 = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    const url2 = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    const {onTableSelected} = useContext(TableContext)

    return (
        <div className={'d-flex justify-content-center '}>
            <button type="button"
                    className="btn btn-secondary mr-1 "
                    onClick={() => {
                        onTableSelected(url1)
                        history.push('/table')
                    }
                    }>
                32 элемента
            </button>
            <button type="button"
                    className="btn btn-dark ml-1"
                    onClick={() => {
                        onTableSelected(url2)
                        history.push('/table')
                    }}>
                1000 элементов
            </button>
        </div>
    )
})