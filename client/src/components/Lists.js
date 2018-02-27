import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions'
import { Collection, CollectionItem } from 'react-materialize';

class Lists extends Component {

    componentDidMount() {
        this.props.fetchLists();
    }

    renderLists(){
        return _.map(this.props.lists, list => {
            const link = `/lists/${list._id}`;
            return (
                <CollectionItem
                    key={list._id}
                    href={link}>
                    {list.listName}
                </CollectionItem>
            );
        });
    }
    
    render(){
        return (
            <div className="container" >
                <Collection header='All Lists'>
                    {this.renderLists()}
                </Collection>    
            </div>  
        );
    };

}


function mapStateToProps(state) {
    return { lists: state.lists};
} 

export default connect(mapStateToProps, { fetchLists })(Lists);