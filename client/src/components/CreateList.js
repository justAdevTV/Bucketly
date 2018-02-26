import React, {Component} from 'react';
import { Form, Text } from 'react-form';

import CreateListForm from './createListForm';

class CreateList extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card grey lighten-4">
                            <div className="card-content white-text">
                                <span className="card-title black-text">Create List</span>
                                <CreateListForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }

}

export default CreateList;