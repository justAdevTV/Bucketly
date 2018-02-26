import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Nav';
import * as actions from '../actions';

import CreateList from './CreateList';
import Lists from './Lists';
import List from './List';

const Landing = () => <h2>Home Page</h2>;

class App extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <NavBar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/lists" component={Lists} />
                        <Route exact path="/lists/create" component={CreateList} />
                        <Route exact path="/lists/:id" component={List}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);