import { createSlice } from "@reduxjs/toolkit";
import { FilesData } from "../data/files-data";


export const FileSlice = createSlice({
  name: "files",
  initialState: { value: FilesData },
  reducers: {
    addFile: (state, action) => {
      state.value.push(action.payload);
    },
 
    deleteFile: (state, action) => {
    const itemId = action.payload
      console.log(itemId)
    state.value = state.value.filter((project) => project.id !== itemId);
  },

    updateFile: (state, action) => {
    const itemId = action.payload.id
    state.value.map((project) => {
      if (project.id === itemId) {
        project.name = action.payload.newProjectName;
      }
    });
  },
},

});

export const {addFile, deleteFile,updateFile} = FileSlice.actions;
export default FileSlice.reducer;