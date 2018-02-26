import React, {Component} from 'react';
import { Col, Card } from 'react-materialize';

import CreateListForm from './createListForm';

class CreateList extends Component {

    render() {
        return (
            <div className="container">
                <Card 
                    className='grey lighten-4' 
                    textClassName='white-text' 
                    title='Create List'>
                    <br/>
                    <CreateListForm />
                </Card>
            </div>
        );
    }

}

export default CreateList;