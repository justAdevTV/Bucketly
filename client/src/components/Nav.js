import React, {Component} from 'react';
import {connect} from 'react-redux';

class Nav extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/facebook">Login</a></li>;
            default:
                return [
                    <li key="greeting">Welcome Back!</li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    render () {
        return (
            <nav className="blue">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo">Bucketly</a>
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