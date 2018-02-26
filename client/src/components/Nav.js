import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <li key="login"><a href="/auth/facebook">Login</a></li>,
                    <li key="lists"><Link to="/lists">Lists</Link></li>
                ];
            default:
                return [
                    <li key="lists"><Link to="/lists">Lists</Link></li>,
                    <li key="createList"><Link to="lists/create">Create List</Link></li>,
                    <li key="myAccount"><Link to="myAccount">My Account</Link></li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render () {
        return (
            <nav className="blue">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Bucketly</Link>
                        <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>    
            </nav>        
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Nav);