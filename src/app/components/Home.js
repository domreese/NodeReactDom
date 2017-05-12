import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>{"Name: " + this.props.name }</p>
                <p>Age: {this.props.age}</p>
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
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    userObj: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};