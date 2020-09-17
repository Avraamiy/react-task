import React from 'react'
import {TableState} from './context/Table/TableState'
import {MainPage} from './pages/Main'
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {TableSelector} from "./components/TableSelctor";
import {About} from "./pages/About";

function App() {
    return (

        <TableState>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Switch>
                        <Route path={'/'} exact component={TableSelector}></Route>
                        <Route path={'/table'} exact component={MainPage}></Route>
                        <Route path={'/about'} exact component={About}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </TableState>
    );
}

export default App;
