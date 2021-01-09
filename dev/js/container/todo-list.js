/**
 * list of to-do's for the project
 * container will be reading the data for showing to user
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateItem, updatedItem, removeItem} from '../actions/todo-action-handler';
import {bindActionCreators} from 'redux';

/**
 * Individual To Do Item
 */
class ToDo extends Component {
    render() {
        /**
         * @todo name of the function has been updated to todoClick
         */
        if (this.props.todo.hasToBeUpdated) {
            /**
             * if you set the value of the input then it's issuing warning as the input is not mutable w/o declaring the onchange handler
             * to avoid the warning using empty onchange handler and declaring placeholder
             */
            return (
                <div>
                    <input type="text" ref="todoUpdateBox" placeholder={this.props.todo.text}/>
                    <button onClick={() => {
                        this.props.updatedItem({id: this.props.todo.id, text: this.refs.todoUpdateBox.value})
                    }} className="update-item">Update Item
                    </button>
                    <button onClick={() => {
                        this.props.removeItem(this.props.todo)
                    }} className="update-item">Remove Item
                    </button>
                </div>
            )
        }
        return (
            <li key={this.props.todo.id} onClick={() => {
                this.props.updateItem(this.props.todo)
            }}>{this.props.todo.text}</li>
        );
    }
}

/**
 * List of To do items
 */
class ToDoList extends Component {
    render() {
        //you have list generated and still you have to select the item for updation
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} updateItem={this.props.updateItem}
                          updatedItem={this.props.updatedItem} removeItem={this.props.removeItem}/>
                ))}
            </ul>
        );
    }
}

/**
 * put the glue function for connecting data from store to the container
 */
function mapPropsToState(state) {
    // console.log('called map props to state');
    console.log('Inside to-do-list', state);
    return {
        todos: state.workToDos
    }

}


/**
 * glue for passing the action handler to the component
 * @todo: we need to handle the click on <li> to show edit power
 */
function matchDispatchToProps(dispatch) {
    //this is just "bind" a synonym for connect
    return bindActionCreators({
        updateItem: updateItem,
        updatedItem: updatedItem,
        removeItem: removeItem
    }, dispatch);//
}


/**
 * connect the container and state data
 */
export default connect(mapPropsToState, matchDispatchToProps)(ToDoList);