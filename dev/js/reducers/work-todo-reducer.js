/**
 * Simple reducer which will return hard-coded list of To-Dos
 */
import AppConstants from '../constants';

let defaultData = [
    {
        id: 1,
        text: 'create a sample react POC.'
    },
    {
        id: 2,
        text: 'think build system and process.'
    },
    {
        id: 3,
        text: 'replace JCMS.'
    }
];

/**
 * default value of the state can be the default data so assigning that
 * we must return state in the first call
 * @todo: pushing action payload inside the default data is not helping it
 * @todo: we have to push that in STATE not in any variable
 * @todo: only then the entire flow will be complete for the Redux
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = defaultData, action) {
    console.log('Inside the reducer ', state, action);
    switch (action.type) {
        case AppConstants.ADD_TODO:
            console.log('Inside reducer final data to be returned post Add actions:', [...state, action.payload]);

            //@todo functions should not modify the original data rather use a local variable
            // defaultData.push(action.payload);
            // return defaultData; //not working
            // return [...defaultData]; working why ???

            // action.payload.cls = 'newItem';
            var tmp = state;
            if (action.payload.text.trim().length > 0) {
                tmp.push(action.payload);
            }
            // return [...state, action.payload]; //@todo this has to be done because we cannot update the state
            return [...tmp];//@todo since tmp is a reference copy it has to be broken down and created new one
            break;
        case AppConstants.UPDATE_TODO:

            var tmp = state;
            tmp.forEach(function (todo) {
                if (todo.id == action.payload.id) {
                    todo.hasToBeUpdated = true;
                }
            });
            return [...tmp];//since we are getting the state reference directly we haveto create new variable
            break;

        case AppConstants.UPDATED_TODO:

            var tmp = state;
            tmp.forEach(function (todo) {
                if (todo.id == action.payload.id) {
                    console.log(todo);
                    if (action.payload.text.trim().length > 0) {
                        todo.text = action.payload.text;
                    }
                    delete todo.hasToBeUpdated;
                }
            });
            return [...tmp];//since we are getting the state reference directly we haveto create new variable
            break;

        case AppConstants.REMOVE_TODO:

            var tmp = state, tmp2 = [];

            for (var i = 0; i < tmp.length; i++) {
                if (tmp[i].id != action.payload.id) {
                    tmp2.push(tmp[i]);
                }
            }
            console.log('Final data to be returned:', tmp2);
            return tmp2;//here tmp2 is separate from that of state so no refererence
            break;

    }
    return state;
}