import React from "react";
import {Jumbotron} from "react-bootstrap";
import {LoginForm} from "../../components/login/Login.comp"
import "./entry.style.css";

export const Entry = () => {
    return (
        <div className="entry-page bg-info">
            <Jumbotron>
                <LoginForm />
            </Jumbotron>
        </div>);
};