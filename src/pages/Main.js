import React, {useContext} from 'react'
import {Loader} from '../components/Loader'
import {Table} from '../components/Table'
import {TableContext} from '../context/Table/tableContext'
import {CartDetail} from '../components/CartDetail'
import {TableSelector} from '../components/TableSelctor'
import ReactPaginate from 'react-paginate'
import {Search} from '../components/Search'
import {AddForm} from '../components/AddForm'

export const MainPage = () => {

    const {
        loading,
        selectRow,
        tableSelected,
        data,
        pageSize,
        handlePageClick,
        pageCount,
        restarted
    } = useContext(TableContext)



    if (!tableSelected) {
        return (
            <div className="container pt-3">
                <TableSelector/>
            </div>
        )
    }
        return (
            <>
                {loading
                    ? <Loader/>
                    : <> <AddForm/> <Search/> <Table/> </>}

                {!restarted && data.length > pageSize
                    ? <ReactPaginate
                        previousLabel={'Назад'}
                        nextLabel={'Вперед'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                    />
                    : null
                }

                { !restarted && selectRow
                    ? <CartDetail/>
                    : null}
            </>
        )

}