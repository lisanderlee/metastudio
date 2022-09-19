import { createSlice } from "@reduxjs/toolkit";
import { ProjectsData } from '../data/projects-data';


export const ProjectSlice = createSlice({
  name: "projects",
  initialState: { value: ProjectsData },
  reducers: {
    addProject: (state, action) => {
      state.value.push(action.payload);
    }
  },

  deleteUser: (state, action) => {
    state.value = state.value.filter((user) => user.id !== action.payload.id);
  },


});

export const {addProject, deleteUser} = ProjectSlice.actions;
export default ProjectSlice.reducer;