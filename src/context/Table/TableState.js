import React, {useReducer} from 'react'
import {TableContext} from './tableContext'
import {tableReducer} from './tableReducer'
import {
    ADD_ROW,
    CHANGE_PAGE,
    FETCH_DATA,
    FILTER_DATA,
    RESTART,
    SELECT_ROW,
    SELECT_TABLE,
    SHOW_LOADER,
    SORT_DATE
} from "../types";
import _ from 'lodash'

export const TableState = ({children}) => {
    const initialState = {
        data: [],
        loading: false,
        order: 'asc',
        selectField: 'id',
        selectRow: null,
        tableSelected: false,
        pageSize: 50,
        currentPage: 0,
        pageCount: 20,
        searchedData: [],
        sorted: false,
        restarted: false,
    }


    const [state, dispatch] = useReducer(tableReducer, initialState)
    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchData = async (url) => {
        try {
            showLoader()
            let response = await fetch(url)
            const payload = await response.json()
            dispatch({type: FETCH_DATA, payload})
        } catch (e) {
            console.log(e.message)
        }
    }

    function sortDate(field) {
        const clonedSearchedData = state.searchedData.concat()
        const clonedData = state.data.concat()
        let order = state.order === 'asc' ? 'desc' : 'asc'

        const orderedData = _.orderBy(clonedData, field, order)
        const searchedData = _.orderBy(clonedSearchedData, field, order)

        dispatch({type: SORT_DATE, payload: {orderedData, order, field, searchedData,}})
    }

    const onSelectRow = (item) => {
        dispatch({type: SELECT_ROW, payload: item})
    }

    const onTableSelected = async url => {
        dispatch({type: SELECT_TABLE})
        await fetchData(url)
    }

    const handlePageClick = ({selected}) => {
        dispatch({type: CHANGE_PAGE, payload: selected})
    }

    const handleSearch = (value) => {
        const searchedData = state.data.filter(item => {
            return item['firstName'].toLowerCase().includes(value.toLowerCase())
                || item['lastName'].toLowerCase().includes(value.toLowerCase())
                || item['email'].toLowerCase().includes(value.toLowerCase())
                || item['phone'].toLowerCase().includes(value.toLowerCase())
        })
        const pageCount = Math.ceil(searchedData.length / state.pageSize)
        dispatch({type: FILTER_DATA, payload: {searchedData, pageCount}})
    }
    const addRow = (event, form) => {
        event.preventDefault()
        dispatch({type: ADD_ROW, payload: form})
    }
    const restart = () => {
        dispatch({type: RESTART, payload: state.data})
    }

    return (
        <TableContext.Provider value={{
            fetchData, showLoader,
            sortDate: sortDate,
            onSelectRow, onTableSelected,
            handlePageClick,
            handleSearch,
            addRow, restart,
            data: state.data,
            loading: state.loading,
            selectField: state.selectField,
            order: state.order,
            cartDetail: state.cartDetail,
            selectRow: state.selectRow,
            tableSelected: state.tableSelected,
            pageSize: state.pageSize,
            currentPage: state.currentPage,
            pageCount: state.pageCount,
            searchedData: state.searchedData,
            sorted: state.sorted,
            restarted: state.restarted
        }}>
            {children}
        </TableContext.Provider>
    )
}