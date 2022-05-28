import React from "react";
import { connect } from "react-redux";
import * as mutations from '../store/mutations';

const LoginComponent = ({authenticateUser, authenticated})=>{
    return (
    <div>
        <h1>Login here!!</h1>
        <form onSubmit={authenticateUser}>
            <input type="text" placeholder="username" name="username" defaultValue="Dev" />
            <input type="password" placeholder="password" name="password" defaultValue="TUPLES" />
            {authenticated === mutations.NOT_AUTHENTICATED ? <p>Login incorrect</p>: null}
            <button type="submit">Login</button>
        </form>

    </div>
    )
};

const mapStatetoProps = ({session}) =>({
    authenticated:session.authenticated
});

const mapDispatchtoProps = (disptach)=>({
    authenticateUser(e){
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;
        disptach(mutations.requestAuthenticateUser(username,password));
    }
});

export const ConnectedLogin =connect(mapStatetoProps, mapDispatchtoProps)(LoginComponent);