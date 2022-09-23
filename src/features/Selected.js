import { createSlice } from "@reduxjs/toolkit";



export const SelectedSlice = createSlice({
  name: "selected",
  initialState:  { value: "" },
  reducers: {
  selectedProject: (state, action) => {
    const itemId = action.payload  
    state.value = itemId.ProjectId
  },
},

});

export const {selectedProject} = SelectedSlice.actions;
export default SelectedSlice.reducer;