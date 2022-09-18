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
});

export const {addProject} = ProjectSlice.actions;
export default ProjectSlice.reducer;