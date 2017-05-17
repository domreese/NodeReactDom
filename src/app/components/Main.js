import React from 'react';
import { Header } from "./Header";
import { App } from "./App";

export class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div>
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <App/>                  
                    </div>
                </div>
            </div>
        );
    }
}