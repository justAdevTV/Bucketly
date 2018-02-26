import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Text } from 'react-form';

class CreateListForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Form onSubmit={submittedValues => {
                this.setState({ submittedValues });
                console.log(this.state.submittedValues);
            }}>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="text-input-form">
                        <label htmlFor="text-input-listName">List Name</label>
                        <Text className="black-text" field="listName" id="text-input-listName" />
                        <h5 className="black-text">List Items</h5>
                        {/* Dynamic Items */}
                        { formApi.values.lists && formApi.values.lists.map( ( item, i ) => (
                            <div key={`item${i}`}>
                            {/* Item Name */}
                                <label htmlFor={`item-name-${i}`}>Item Name</label>
                                <Text field={['lists', i, 'title']} id={`item-name-${i}`} />
                            {/* Item Description */}
                                {/* <label htmlFor={`item-description-${i}`}>Item Description</label> */}
                                <textarea field={['lists', i, 'description']} className="materialize-textarea" data-length="120" id={`item-description-${i}`} />
                                {/* Add List Item Button */}
                                <button
                                    onClick={() => formApi.removeValue('lists', i)}
                                    type="button"
                                    className="red waves-effect waves-light btn">
                                    <i className="material-icons right">trash</i>button
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => formApi.addValue('lists', '')}
                            type="button"
                            className="waves-effect waves-light btn">
                            <i className="material-icons right">add</i>Add Item
                        </button>
                        <br/>
                        <button className="blue btn waves-effect waves-light right" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>      
                        <br />
                    </form>
                )}
            </Form>
        )
    }
}

export default CreateListForm;