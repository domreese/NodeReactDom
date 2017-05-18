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
               <div className="page-header">
                   <h1>This is the Home Component/Page!</h1>
               </div>
               <div style={{"backgroundColor":"purple", "color":"white", "float":"none"}} className="row jumbotron center-block col-lg-6">
                   <p>{this.state.value}</p>
               </div>
               <div style={{"float":"none"}} className="row form-group col-lg-6 center-block">
                   <label htmlFor="comment">Comment:</label>
                   <textarea onChange={this.processText.bind(this)} className="form-control" value={this.state.value} rows="6" > </textarea>
               </div>
               {/*<Comments/>          */}
           </div>
        );
    }
}
