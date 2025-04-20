"use client";
import { combineReducers } from 'redux';
import user from './user/reducers';
import definitions from './definitions/reducers';

export default combineReducers({
	user,
	definitions
});
// NOTE: WORK IN PROGRESS