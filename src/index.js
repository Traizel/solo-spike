import React from 'react';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchForumCategories() {
    try {
        const categoriesResponse = yield axios.get('/api/forum');
        yield put({ type: 'SET_CATEGORIES', payload: categoriesResponse.data});
    } catch (error) {
        console.log(`Error fetching categories`, error);
    }
}

function* fetchUsers() {
    try {
        const usersResponse = yield axios.get('/api/users');
        yield put({ type: 'SET_USERS', payload: usersResponse.data});
    } catch (error) {
        console.log(`Error fetching users`, error);
    }
}

function* fetchThreads(action) {
    try {
        console.log(action.payload);
        const threadsResponse = yield axios.post('/api/threads', {id: action.payload});
        yield put({ type: 'SET_THREADS', payload: threadsResponse.data});
    } catch (error) {
        console.log(`Error fetching threads`, error);
    }
}

function* fetchComments(action) {
    try {
        console.log(action.payload);
        const commentsResponse = yield axios.post('/api/comments', {id: action.payload});
        yield put({ type: 'SET_COMMENTS', payload: commentsResponse.data});
    } catch (error) {
        console.log(`Error fetching comments`, error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_CATEGORIES', fetchForumCategories);
    yield takeEvery('FETCH_USERS', fetchUsers);
    yield takeEvery('FETCH_THREADS', fetchThreads);
    yield takeEvery('FETCH_COMMENTS', fetchComments);
}

const ForumCategoriesReducer = (state = [], action) => {
   if (action.type === 'SET_CATEGORIES') {
        return action.payload;
    }
    return state;
};

const ForumThreadsReducer = (state = [], action) => {
   if (action.type === 'SET_THREADS') {
        return action.payload;
    }
    return state;
};

const GetUsersReducer = (state = [], action) => {
   if (action.type === 'SET_USERS') {
        return action.payload;
    }
    return state;
};

const ForumCommentsReducer = (state = [], action) => {
   if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
};

const CurrentCategoryReducer = (state = 0, action) => {
   if (action.type === 'SET_CURRENT_CATEGORY') {
        return action.payload;
    }
    return state;
};

const CurrentThreadReducer = (state = 0, action) => {
   if (action.type === 'SET_CURRENT_THREAD') {
        return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers(
        {
            ForumCategoriesReducer,
            GetUsersReducer,
            CurrentCategoryReducer,
            ForumThreadsReducer,
            CurrentThreadReducer,
            ForumCommentsReducer,
        }
    ),
    // Tell redux that we want to use our new logger
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));