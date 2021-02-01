import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
  name: 'texts',
  initialState: {
    texts: [],
    textItem: { title: '', text: '' },
    error: {},
    message: ''
  },
  reducers: {
    setInitial: (state) => {
      state.error = {};
      state.textItem = { title: '', text: '' };
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setText: (state, action) => {
      state.texts = action.payload;
    },
    setTextItem: (state, action) => {
      state.textItem = action.payload;
    },
    dataFailed: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const { setText, setTextItem, dataFailed, setInitial, setMessage } = textSlice.actions;

export const sendTextNode = data => async dispatch => {

  try {
    const resp = await fetch('http://localhost:5000/text/create',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
      });
    dispatch(setInitial());
    //dispatch(setMessage(resp.data.message))
    dispatch(fetchNode());
  } catch (err) {
    dispatch(dataFailed(err.response));
  }

};

export const fetchNode = () => async dispatch => {

  try {
    const response = await fetch('http://localhost:5000/text');
    const data = await response.json();
    dispatch(setText(data));
  } catch (err) {
    dispatch(dataFailed(err.response));
  }
};



export const fetchTextItem = (name) => async dispatch => {

  try {
    const response = await fetch(`http://localhost:5000/text/${name}`);
    const data = await response.json();
    dispatch(setTextItem(data));
  } catch (err) {
    dispatch(dataFailed(err.response));
  }

};


export const selectText = state => state.texts;

export default textSlice.reducer;
