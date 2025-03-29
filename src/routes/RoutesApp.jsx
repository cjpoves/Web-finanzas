import { Route, Routes } from "react-router"
import {LogInPage} from "../auth/pages/LogInPage"
import {IncomePage} from "../pages/IncomePage"
import {ExpensesPage} from "../pages/ExpensesPage"
import { RegisterPage } from "../auth/pages/RegisterPage"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { Inicio } from "../pages/Inicio"




export const RoutesApp = () => {

    return(
        <Routes>
            <Route path="/logIn" element= {<LogInPage/>}/>
            <Route path="/registerPage" element= {<RegisterPage/>}/>
            <Route path="/" element= {<Inicio/>}/>
            <Route path="/home" element= {<Home/>}/>
            <Route path="/dashboard" element= {<Dashboard/>}/> 
            <Route path="/incomePage" element= { <IncomePage/> }/>
            <Route path="/expensesPage" element= { <ExpensesPage/> }/>
        </Routes>
    )
}