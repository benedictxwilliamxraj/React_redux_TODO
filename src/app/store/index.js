import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState'; 
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as mutations from './mutations'

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock';

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action){
            switch(action.type){
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
        comments(comments = defaultState.comments){
            return comments;
        },
        groups(groups = defaultState.groups){
            return groups;
        },
        comments(users = defaultState.users){
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}