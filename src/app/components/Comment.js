import React from "react";

export const Comment = (props) => {
    return (
    <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${props.id}`} aria-expanded="true" aria-controls={`collapse${props.id}`}>{props.comment.Username}</a>
            </h4>
        </div>
        <div id={`collapse${props.id}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
                <p> <i><b id="ReviewerName">{props.comment.Username}</b> said on <span id="ReviewDate"> {props.comment.CommentDate}</span>:</i></p>
                {props.comment.Comment}
            </div>
        </div>
    </div>
            /*<div style={{ borderBottom: "2px solid yellow"}}>
                <section>
                    <p> <i><b id="ReviewerName">{props.comment.Username}</b> said on <span id="ReviewDate"> {props.comment.CommentDate}</span>:</i></p>
                    <p id="Comment">{props.comment.Comment}</p>
                </section>   
            </div>*/
    );    
};