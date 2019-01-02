import React, { Component } from 'react';


function RenderRoles({roles}) {
    if (roles != null)
        return(
            <React.Fragment>
                {roles.roles.roles.map((role) => {
                    return (
                        <li>
                            <a href="#">{role}</a>
                        </li>
                    );
                })}
            </React.Fragment>
        );
    else
        return(
            <React.Fragment/>
        );

}

const  Menu = (props) => {
    if (props.isLoading) {
        return(
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            VetApp Loading
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            VetApp
                        </a>
                    </li>
                    <li>{props.errMess}</li>
                </ul>
            </div>
        );
    }
    else if (props.roles != null)
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            Vet App
                        </a>
                    </li>
                    <RenderRoles roles={props.roles} />
                </ul>
            </div>
        );
}


export default Menu;