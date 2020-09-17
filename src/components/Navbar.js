import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {TableContext} from '../context/Table/tableContext'

export const Navbar = () => {

    const {restart} = useContext(TableContext)
    return (
        <nav>
            <div className={'navbar navbar-dark navbar-expand-lg bg-secondary'}>
                <div className="navbar-brand">Table app</div>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/"
                            exact
                            onClick={() => {
                                restart()
                            }}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/about"
                            onClick={() => {
                                restart()
                            }}
                        >
                            Информация
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}