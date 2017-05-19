import React from "react";
import {Comment} from "./Comment";
export class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            value: "",
            userComments: []
        };
    }

    processText (e) {
        this.setState({
            value: e.target.value
        });
    }

    handlePost (e){
        e.preventDefault();
        let name = document.getElementById("userName").value;
        let cDate = document.getElementById("commentDate").value;
        this.setState({userComments:[...this.state.userComments,
            {
                Username: name ,
                CommentDate: cDate,
                Comment: this.state.value
            }],
            value: ""});

        document.getElementById("userName").value ="";
        document.getElementById("commentDate").value = null;       
    }
   

    render() {    
        return (
           <div>
               <div className="page-header">
                   <h1>This is the Home Component/Page!</h1>
               </div>
               <div style={{ "float":"none"}} className="row well center-block col-lg-6">
                   <p>{this.state.value}</p>
               </div>
               <form style={{"float":"none"}} className=" row col-lg-6 center-block form-horizontal">
                   <div className="form-group">
                       <label className="control-label col-lg-2" htmlFor="userName">Name:</label>
                       <div className= "col-lg-10">
                            <input id="userName" type="text" className="form-control" placeholder="Name"/>
                       </div>
                   </div>
                   <div className="form-group">
                       <label className="control-label col-lg-2" htmlFor="userName">Date:</label>
                       <div className= "col-lg-10">
                           <input id="commentDate" type="date" className="form-control"/>
                       </div>
                   </div>
                   <div className="form-group">
                       <label className="control-label col-lg-2" htmlFor="userName">Comment:</label>
                       <div className= "col-lg-10">
                           <textarea onChange={this.processText.bind(this)} className="form-control" value={this.state.value} rows="6"></textarea>
                       </div>
                   </div>
                    <button style={{float:"none", backgroundColor:"rgba(119, 9, 206, 0.57)",borderColor:"rgba(119, 9, 206, 0.57)"}} className="btn btn-primary col-lg-4 center-block" onClick={this.handlePost.bind(this)}>Post Comment</button>
               </form>
               <hr/>
               <div className="col-lg-6">
                   <h3>Comments:</h3>
                   <div style={{position:"relative",  borderTop:"2px solid yellow"}}>
                       {this.state.userComments.map((obj, i)=> <Comment key={i} comment = {obj}/>)}
                    </div>
               </div>
           </div>
        );
    }
}
