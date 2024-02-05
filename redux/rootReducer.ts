import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counterSlice';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export default rootReducer;