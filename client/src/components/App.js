import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from './Nav';
import * as actions from '../actions';

class App extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <NavBar />
                Hello World!
            </div>
        );
    }
}

export default connect(null, actions)(App);