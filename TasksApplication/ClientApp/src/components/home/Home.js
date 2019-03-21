import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/Task';


class Home extends Component {

    componentDidMount() {
        this.props.requestTasks();
    };



    render() {
        let tasks = [];

        if (!this.props.isLoading && this.props.tasks.length !== 0) {

            tasks = this.props.tasks.map(task => {
                return (
                    <li key={task.id} >{task.title}</li>
                );
            });

            return (
                <ul>{ tasks }</ul>
            );
        }

        else {
            return (
                <h3>loading..</h3>
            );
        }
    }
};


export default connect(
    state => state.tasks,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);