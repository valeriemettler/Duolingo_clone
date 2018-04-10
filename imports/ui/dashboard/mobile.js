import React from 'react';

export default class MobileDashboard extends React.Component{
    render() {
        return(
        <div className="hide-on-med-and-up">
            <nav className="z-depth-3">
            <div className="nav-wrapper grey lighten-3">
                <a to="/" className="brand-logo center grey-text text-darken-1 ">Topic</a>
            </div>
            </nav>
            <footer className="page-footer" style={{position:'fixed',bottom:0,left:0,width:'100%'}}>
            <nav className="z-depth-3">
                <div className="nav-wrapper grey lighten-3">
                <a to="/" className="brand-logo center grey-text text-darken-1 ">footer here</a>
                </div>
            </nav>
                <div>

                </div>
            </footer>
        </div>
        );
    };
}