import React, {Component} from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { createList } from '../actions';

import {Button, Icon} from 'react-materialize';

class CreateListForm extends Component {
    
    componentDidMount() {

    }

    renderInput(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className="input-field">
                <label>{field.label}</label>
                <input 
                    className="black-text"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    renderTextBox(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label>{field.label}</label>
                <div className="input-field black-text">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="textarea-label" className="materialize-textarea" {...field.input}></textarea>
                    <label for="textarea-label">Item description</label>
                </div>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    renderItems = ({ fields }) => (
        <ul>
            {fields.map((item, index) =>
                <li key={index}>
                    <h5 className="black-text">Item #{index + 1}</h5>

                    <Field
                        label="Item Title"
                        name={`${item}.title`}
                        type="text"
                        component={this.renderInput}
                        placeholder="Item Title"/>
                    <Field
                        name={`${item}.description`}
                        type="text"
                        component={this.renderTextBox}
                        placeholder="Item description"/>
                    <br />
                    <Button
                        className="red"
                        onClick={() => fields.remove(index)}
                        waves='light'>Remove Item
                        <Icon right>delete</Icon>
                    </Button>
                </li>
            )}
            <li className="center">
                <Button 
                    className="green"
                    onClick={() => fields.push({})} 
                    waves='light'>Add Item
                    <Icon right>library_add</Icon>
                </Button>
            </li>
        </ul>
    )

    onSubmit(values) {
        this.props.createList(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="listName"
                    component={this.renderInput}
                />
                <FieldArray name="listItems" component={this.renderItems}/>
                <Button className="right blue" type="submit" waves='light'>
                    Submit
                </Button>  
                <br />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.listName) {
        errors.title = 'Cannot be empty.';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewList'
})(
    connect(null, { createList } )(CreateListForm)
);