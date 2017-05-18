import React from "react";
export class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            value: ""
        };
    }

    processText (e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
           <div>
               <h1>This is the Home Component/Page!</h1>
               <div className="form-group">
                   <label htmlFor="comment">Comment:</label>
                   <textarea onChange={this.processText.bind(this)} className="form-control" value={this.state.value} rows="4"> </textarea>
               </div>
               <div className="jumbotron">
                   <p>{this.state.value}</p>
               </div>
           </div>
        );
    }
}
