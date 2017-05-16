import 'jquery';
import React from 'react';
import { render} from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor(){
        super();
        this.state ={
            homeLink : "HOME",
            homeMounted : false
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
    onChangeHomeMounted(e){
        if(!this.state.homeMounted)
        {
            e.target.textContent = "Hide goodies!";
            e.target.classList.remove("btn-success");
            e.target.classList.add("btn-warning");
        }
        else
        {
            e.target.textContent = "Show goodies!";
            e.target.classList.remove("btn-warning");
            e.target.classList.add("btn-success");
        }
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    
    render() {
        let user = {
            name: "Dom",
            skills: ["C#", ".NET", "Nodejs", "Javascript","CSS", "HTML5"]
        };
        
        let homeCmp = "";

        if(this.state.homeMounted){
            homeCmp = 
                <div className="col-xs-10 col-xs-offset-1">
                   <Home name = {"Dom"} age = {22} userObj = {user} greet={this.onGreet} changeLinkText ={this.onChangeLinkName.bind(this)}>
                       <b>This is a child paragraph, accessed using "props.children"</b>
                    </Home>
                </div>;}
                
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink = {this.state.homeLink} />
                    </div>
                </div>
                <div className="row" style={{"textAlign": "center"}}>
                    <button onClick={(e) => this.onChangeHomeMounted(e)} className="btn btn-success">Show goodies!</button>
                </div>
                <div className="row">
                    {homeCmp}                   
                </div>
            </div>
        );
    }
}
render(<App />,window.document.getElementById("app"));