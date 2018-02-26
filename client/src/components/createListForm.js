import React, {Component} from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { createList } from '../actions';

class CreateListForm extends Component {
    
    renderInput(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
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
                <textarea 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
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
                    <button
                        type="button"
                        title="Remove Item"
                        onClick={() => fields.remove(index)}/>
                    <h4>Item #{index + 1}</h4>

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
                </li>
            )}
            <li>
                <button type="button" onClick={() => fields.push({})}>Add Item</button>
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
                <button type="submit" className="btn btn-primary">Submit</button>       
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