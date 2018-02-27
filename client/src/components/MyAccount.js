import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon, Table, Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize';
import { fetchUserLists, deleteList } from '../actions/index';
import { Link } from 'react-router-dom';

class MyAccount extends Component {

    handleClick = (id) => {
        this.props.history.push(`/lists/${id}/edit`);
    };

    componentDidMount() {
        this.props.fetchUserLists();
    }

    renderDeleteList(name, id) {
        return (
            <div>
                Are you sure you want to delete <strong>{name}</strong>?
                <br />   
                <Button waves='light' className="red" onClick={ () => this.props.deleteList(id)}>Delete<Icon right>delete</Icon></Button>             
            </div>
        );
    }

    renderMyLists() {

        const userLists = _.map(this.props.lists, list => {
            return (
                <tr key={list._id}>
                    <td>{list.listName}</td>
                    <td><Button waves='light' onClick={() => this.handleClick(list._id)} className="green">Edit<Icon right>edit</Icon></Button></td>
                    <td>     
                        <Modal
                            header='Delete List'
                            fixedFooter
                            trigger={
                                <Button waves='light' className="red">Delete<Icon right>delete</Icon></Button>                                
                            }>
                            
                            {this.renderDeleteList(list.listName, list._id)}
                        </Modal>
                    </td>
                </tr>
            );
        });

        return(
            <Table>
                <thead>
                    <tr>
                        <th data-field="list-name">List Name</th>
                        <th data-field="edit">Edit</th>
                        <th data-field="delete">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {userLists}
                </tbody>
            </Table>
        );
    }

    renderFollowingList() {

    }

    renderList(){
        return (
            <Collapsible accordion popout defaultActiveKey={0}>
                <CollapsibleItem header='Account Info' icon='assignment_ind'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                <CollapsibleItem header='My Lists' icon='library_books'>
                    <Tabs className='tab-demo z-depth-1'>
                        <Tab title="My Lists" tabWidth={6} active>
                            {this.renderMyLists()}
                        </Tab>
                        <Tab title="Following" tabWidth={6} >Following</Tab>
                    </Tabs>
                </CollapsibleItem>
                <CollapsibleItem header='Account Settings' icon='settings'>
                    Lorem ipsum dolor sit amet.
                </CollapsibleItem>
            </Collapsible>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderList()}
            </div>
        )
    }
    
}

function mapStateToProps({lists}) {
    return {lists};
}

export default connect(mapStateToProps, { fetchUserLists, deleteList })(MyAccount);