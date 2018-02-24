import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Nav';
import * as actions from '../actions';

const Landing = () => <h2>Home Page</h2>;
const Lists = () => <h2>Lists</h2>;
const ListNew = () => <h2>Create List</h2>;

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
                        <Route exact path="/lists/create" component={ListNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);