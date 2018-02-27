import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList } from '../actions';

class List extends Component {
    componentDidMount() {
        const url = this.props.match.params.id;
        this.props.fetchList(url);
    }

    render () {
        const list = this.props.lists;

        if (!list.data) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                   <h2>{list.data.listName}</h2>
                </div>
            );
        }

    };
}

function mapStateToProps({lists}) {
    return {lists};
}

export default connect(mapStateToProps, { fetchList })(List);