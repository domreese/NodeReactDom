import React from "react";
import {
    Link
}   from 'react-router-dom';
//Gets passed props
export const Header = (props) =>{
    return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand">My Nav</a>
                    </div>
                    <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="">
                                <Link to ="/">HOME</Link>
                                {/*<a href="#">HOME <span className="sr-only">(current)</span></a>*/}
                            </li>
                            <li><Link to = "/about">ABOUT ME</Link></li>
                            {/*<li><a href="#">ABOUT ME</a></li>*/}
                            {/*<li><a href="#">{props.homeLink}</a></li>*/}
                            <li><Link to = "/profile">PROFILE</Link></li>
                        </ul>
                        <form action="" className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                            <button style={{"marginLeft": "7px"}} type = "submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </nav>
    );
};
