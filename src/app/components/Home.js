import React from "react";
export class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            status: 0
        };
    }

    render() {
        return (
           <div>
               <h1>This is the Home Component/Page!</h1>
           </div>
        );
    }
}
