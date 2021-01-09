/*
* Index file for combining all the reducers
* static : static data
* dynamic : user will be entering those reducers
*/
import workToDo from './work-todo-reducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    workToDos: workToDo
});

export default allReducers;