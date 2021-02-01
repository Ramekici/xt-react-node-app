import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../redux/textSlice';

export default configureStore({
  reducer: {
    texts: textReducer,
  },
});
