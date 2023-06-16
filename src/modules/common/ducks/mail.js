import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import componentEnums from "../constants/componentEnums";

const initialState = {
  list: [],
  ui: {
    menuOpen: false,
  }
}

// Async Actions
export const fetchMail = createAsyncThunk(
    'mail/fetchMail', 
    (async () => {
      const API_URL = 'https://run.mocky.io/v3/b908bc99-69bf-4965-a994-8875b80dbc90';

      const request = new Request(API_URL);

      try {
        const response =  await fetch(request);
        const responseData = response.json();

        return responseData;
      }
      catch {
        console.error('==ERROR Fetching Mail==')
      }
    })
)


// Action Handlers
function onFetchMailSuccess(state, action ) {
  const list = action.payload || [];
  state.list = list;
}

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    toggleHambergerMenu(state) {
      state.ui.menuOpen = !state.ui.menuOpen
    }
  },
  extraReducers: {
    [fetchMail.fulfilled]: onFetchMailSuccess
  }
})


// Selectors
export function selectMailList(state) {
  return state.mail.list;
}

export function selectIsMenuOpen(state) {
  return state.mail.ui.menuOpen
}

export function selectMailInfoById(mailId) {
  return function(state) {
    return state.mail.list.find(({id}) => mailId === id)
  }
}

export const { toggleHambergerMenu } = mailSlice.actions

export default mailSlice.reducer