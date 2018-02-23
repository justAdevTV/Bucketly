import React, {Component} from 'react';

class Nav extends Component {
    render () {
        return (
            <nav className="blue">
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#!" class="brand-logo">Bucketly</a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="">Log In</a></li>
                            <li><a class="waves-effect waves-light btn">Sign Up</a></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a href="">Log In</a></li>
                            <li><a class="waves-effect waves-light btn">Sign Up</a></li>
                        </ul>
                    </div>
                </div>    
            </nav>        
        );
    }
}

export default Nav;