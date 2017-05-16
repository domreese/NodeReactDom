import 'jquery';
import React from 'react';
import { render} from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            homeLink : "HOME"
        };
    }

    onGreet(){
        alert("Hello");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink : newName
        });
    }
    
    render() {
        let user = {
            name: "Dom",
            skills: ["C#", ".NET", "Nodejs", "Javascript","CSS", "HTML5"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink = {this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name = {"Dom"} age = {22} userObj = {user} greet={this.onGreet} changeLinkText ={this.onChangeLinkName.bind(this)}>
                            <b>This is a child paragraph, accessed using "props.children"</b>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App />,window.document.getElementById("app"));