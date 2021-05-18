import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro'

const listOfRoutes = [{
    path:'/cadastro',
    name:'cadastro',
    component: Cadastro,
},
{
    path:'/',
    name:'login',
    component: Login,
}
]

const routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                {listOfRoutes.map(route => (
                    <Route
                    path={route.path}
                    exact
                    component={route.component}
                    key={route.path}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default routes;