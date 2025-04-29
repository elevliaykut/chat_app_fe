"use client";
import { combineReducers } from 'redux';
import user from './user/reducers';
import definitions from './definitions/reducers';
import post from './post/reducers';
import member from './member/reducers';

export default combineReducers({
	user,
	definitions,
	post,
	member
});
// NOTE: WORK IN PROGRESS