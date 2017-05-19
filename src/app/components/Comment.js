import React from "react";

export const Comment = (props) => {
    return (
            <div style={{ borderBottom: "2px solid yellow"}}>
                <section>
                    <p> <i><b id="ReviewerName">{props.comment.Username}</b> said on <span id="ReviewDate"> {props.comment.CommentDate}</span>:</i></p>
                    <p id="Comment">{props.comment.Comment}</p>
                </section>   
            </div>
    );    
};