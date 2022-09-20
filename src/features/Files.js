import { createSlice } from "@reduxjs/toolkit";
import { FilesData } from '../data/files-data';


export const FileSlice = createSlice({
  name: "files",
  initialState: { value: FilesData },
  reducers: {
    addFile: (state, action) => {
      state.value.push(action.payload);
    }
  },

  deleteFile: (state, action) => {
    state.value = state.value.filter((user) => user.id !== action.payload.id);
  },


});

export const {addFile, deleteFile} = FileSlice.actions;
export default FileSlice.reducer;