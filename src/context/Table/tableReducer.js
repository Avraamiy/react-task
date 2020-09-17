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
} from '../types'

const handlers = {
    DEFAULT: state => state,
    [FETCH_DATA]: (state, {payload}) => ({
        ...state,
        data: payload,
        loading: false,
        restarted: false,
        selectRow: null,

    }),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [SORT_DATE]: (state, {payload}) => ({
        ...state,
        data: payload.orderedData,
        order: payload.order,
        selectField: payload.field,
        searchedData: payload.searchedData,
        sorted: true
    }),
    [SELECT_ROW]: (state, {payload}) => ({...state, selectRow: payload}),
    [SELECT_TABLE]: state => ({...state, tableSelected: true,  }),
    [CHANGE_PAGE]: (state, {payload}) => ({...state, currentPage: payload}),
    [FILTER_DATA]: (state, {payload}) => ({
        ...state,
        searchedData: payload.searchedData,
        currentPage: 0,
        pageCount: payload.pageCount,
        fetched: true
    }),
    [ADD_ROW]: (state, {payload}) => ({...state, data: [payload, ...state.data]}),
    [RESTART]: (state, {payload}) => ({
        ...state,
        restarted: true,
        searchedData: [],
        pageCount: 20,
        sorted: false,
        data: payload
    })
}

export const tableReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}