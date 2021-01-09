import AppConstants from '../constants';

/**
 * Action that will be called from the button while adding the todo in the list
 * this will be sent to all the reducers but only runtime reducer should revert
 * as this is meaning ful to this guy.
 * @param todo
 * @returns {{type: string, payload: *}}
 */
export const addItem = function (todo) {
    console.log('You have entered:', todo);
    return {
        type: AppConstants.ADD_TODO,
        payload: todo
    }
};
/**
 * function to cater to the need of the updating the item
 * just pass on the information for the item that's to be updated
 * @param todo when you just selected the item for the update
 */
export const updateItem = function (todo) {
    console.log('You opted for updating :', todo);
    return {
        type: AppConstants.UPDATE_TODO,
        payload: todo
    }
};
/**
 * when user entered the value and updated the item
 * @param todo
 * @returns {{type: string, payload: *}}
 */
export const updatedItem = function (todo) {
    console.log('You have updated :', todo);
    return {
        type: AppConstants.UPDATED_TODO,
        payload: todo
    }
};

/**
 * Item to be removed from the list of Todos
 * @param todo
 * @returns {{type: string, payload: *}}
 */
export const removeItem = function (todo) {
    console.log('You have removed:', todo);
    return {
        type: AppConstants.REMOVE_TODO,
        payload: todo
    }
};