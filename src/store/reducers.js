"use client";
import { combineReducers } from 'redux';
import user from './user/reducers';
import definitions from './definitions/reducers';
import post from './post/reducers';

export default combineReducers({
	user,
	definitions,
	post
});
// NOTE: WORK IN PROGRESS