import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Task';



class Home extends Component {

    componentWillMount() {
        this.props.requestTasks();
    };


    render() {
        return (
            <div>test</div>
        );
    }
};


export default connect(
    state => state.tasks,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);