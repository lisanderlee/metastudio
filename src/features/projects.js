import { createSlice } from "@reduxjs/toolkit";

import { ProjectsData } from '../data/ProjectsData.json';


export const ProjectSlice = createSlice({
  name: "projects",
  initialState: { value: ProjectsData },
  reducers: {
    addProject: (state, action) => {
      state.value.push(action.payload);
    }
  },
});

export default ProjectSlice.reducer;