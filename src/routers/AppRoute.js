import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import TasksContextProvider from '../contexts/tasksContext';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <TasksContextProvider>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" component={Home} />
                </Switch>
            </TasksContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

