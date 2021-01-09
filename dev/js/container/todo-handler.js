import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/todo-action-handler'
import {bindActionCreators} from 'redux';

/**
 * To do handler for the list
 */
class TodoHandler extends Component {
    /**
     * generate the next ID for the next todo
     * @returns {number}
     */
    getNextToDoId() {
        // return Math.ceil(Math.random() * 10); //@todo this will give error when same id is generated
        return this.props.todos[this.props.todos.length - 1].id + 1; // this has solved the colliding issue but still only the last element is getting updated
    }

    /**
     * Get the next todo {}
     * @param todoText
     * @returns {null}
     */
    getNextToDoToBeAdded(todoText) {
        this.refs.todoInputBox.value = '';//clearing the input field
        return {
            id: this.getNextToDoId(),
            text: todoText
        }
    }

    render() {
        return (
            <div className="todo-handler">
                <input type="text" ref="todoInputBox" placeholder="Enter todo to add"/>
                <button onClick={() => {
                    this.props.addItem(this.getNextToDoToBeAdded(this.refs.todoInputBox.value))
                }}>add todo
                </button>
            </div>
        );
    }
}

/**
 * put the glue function for connecting data from store to the container
 * @todo: as we need to know what's the next ID in the list
 */
function mapPropsToState(state) {
    console.log('Inside to-do-handler: ', state);
    return {
        todos: state.workToDos,
    }

}

/**
 * glue for passing the action handler to the component
 */
function matchDispatchToProps(dispatch) {
    //this is just "bind" a synonym for connect
    return bindActionCreators({addItem: addItem}, dispatch);//
}

//connect the component and the actions
//@todo: matchDispatchToProps is always the second argument of the connect function
// export default connect(null, matchDispatchToProps)(TodoHandler);

//@todo now we need state to generate the next Item ID so passing mapPropsToState
export default connect(mapPropsToState, matchDispatchToProps)(TodoHandler);
