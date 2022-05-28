import React from "react";
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedNavigation } from './Navigation';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import { ConnectedDashboard } from './Dashboard';
import { ConnectTaskDetail } from './TaskDetail';
import { Redirect } from "react-router-dom";
import { ConnectedLogin } from "./Login";

// function inside a funciton -- component is an argument  and match(property) is also an arg  

const RouteGuard = Component => ({match})=>{
    console.info("Route gaurd", match);
    if(!store.getState().session.authenticated){
        //reroute
        return <Redirect to='/' /> 
    }{
        return <Component match={match} />
    }
    
}

export const Main = () =>(
    <Router history={history}>
    <Provider store={store}>
        <div>
            <ConnectedNavigation />
            <Route exact path="/" component={ConnectedLogin} />
            <Route 
            exact
            path="/dashboard"
            render={RouteGuard(ConnectedDashboard)}
            />
            <Route
            exact
            path="/task/:id"
            render={RouteGuard(ConnectTaskDetail)} /> 
        </div>
    </Provider>
    </Router>
)