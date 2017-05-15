import React from "react";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            //initial age
            age: props.age,
            status: 0
        };
    }

    onMakeOlder(){
        this.setState(
            {
                age: this.state.age + 1
            }
        );
        // this.age +=1;
        // console.log(this.age);
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