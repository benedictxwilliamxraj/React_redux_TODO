import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState'; 
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as mutations from './mutations'

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas';

export const store = createStore(
    combineReducers({
        session(userSession =defaultState.session || {}, action){
            let {type, authenticated, session} = action;
            switch(type){
                case mutations.SET_STATE:
                    return{...userSession, id:action.state.session.id}
                case mutations.REQUEST_AUTHENTICATE_USER:
                    return{...userSession, authenticated:mutations.AUTHENTICATING}
                case mutations.PROCESSING_AUTHENTICATE_USER:
                    return{...userSession, authenticated};
                default:
                    return userSession;
            }
            
        },

        tasks(tasks =[], action){
            switch(action.type){
                case mutations.SET_STATE:
                    return action.state.tasks
                case mutations.CREATE_TASK:
                    // console.log(action);
                    return [...tasks, {
                        id:action.taskID,
                        name: "New Task",
                        group:action.groupID,
                        owner:action.ownerID,
                        isComplete: false
                    }] 
            }
            return tasks;
        },
        comments(comments =[]){
            return comments;
        },
        groups(groups = [], action){
            switch(action.type){
                case mutations.SET_STATE:
                    return action.state.groups;
            }
            return groups;
        },
        comments(users = []){
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}