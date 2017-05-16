import React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            //initial age
            age: props.age,
            status: 0,
            linkText: ""
        };
    }

    onMakeOlder(){
        this.setState(
            {
                age: this.state.age + 1
            }
        ); 
    }

    updateLinkText(e){
        this.setState({
            linkText: e.target.value
        });
    }

    processBtnClick(){
        if(this.state.linkText === "" || this.state.linkText === null)
            return false;
        this.props.changeLinkText(this.state.linkText);
        document.getElementById("newLinkText").value = "";
        this.setState({linkText:""});
    }

    render() {
        return (
            <div>
                <p>{"Name: " + this.props.name }</p>
                <p>Age: {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <div>
                    <h2>User Info</h2>
                    <h3>Name</h3>
                    <p>{this.props.userObj.name}</p>
                    <h3>Skills</h3>
                    <ul>
                        {this.props.userObj.skills.map((skill,index) => <li key={index}>{skill}</li> )}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className= " btn btn-primary ">Make me older</button>
                <hr/>
                <button onClick={ ()=>{this.props.greet();} } className= " btn btn-primary ">Greet</button>
                {/*Could have also used () => {this.onMakeOlder();}*/}
                <hr/>
                <p>Link Text preview:</p>
                <label>{this.state.linkText} </label>
                <div className="form-group">
                    <label htmlFor="newLinkText">Link Text:</label>
                    <input onChange={this.updateLinkText.bind(this)} className="form-control" id="newLinkText" placeholder="New Link Text"/>
                </div>
                <button onClick= {this.processBtnClick.bind(this)} className="btn btn-default">Change Link Text</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    userObj: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    greet: React.PropTypes.func
};