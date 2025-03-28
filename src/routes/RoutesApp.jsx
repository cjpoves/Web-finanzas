import { Route, Routes } from "react-router"
import {LogInPage} from "../auth/pages/LogInPage"
import {IncomePage} from "../pages/IncomePage"
import {ExpensesPage} from "../pages/ExpensesPage"
import { RegisterPage } from "../auth/pages/RegisterPage"
import { Dashboard } from "../pages/Dashboard"




export const RoutesApp = () => {

    return(
        <Routes>
            <Route path="/" element= {<LogInPage/>}/>
            <Route path="/registerPage" element= {<RegisterPage/>}/>
            <Route path="/dashboard" element= {<Dashboard/>}/> 
            <Route path="/incomePage" element= { <IncomePage/> }/>
            <Route path="/expensesPage" element= { <ExpensesPage/> }/>
        </Routes>
    )
}