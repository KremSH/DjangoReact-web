
import React, {Component , Fragment} from 'react';
import {Route , Switch} from "react-router-dom";
import ReactDOM from 'react-dom';

//Album list template
export class Base extends Component {
    render() {
        return (
            <div class="GFont">
                <a href="/Song"><h1> Song List </h1></a>
                <br/>
                <a href="/Artist"><h1> Artist List </h1></a>
                <br/>
                <a href="/Album"><h1> Album List </h1></a>
                 <br/>

            </div>
        );
    }
}

export default Base