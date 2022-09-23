import { createSlice } from "@reduxjs/toolkit";
import { ProjectsData } from '../data/projects-data';


export const ProjectSlice = createSlice({
  name: "projects",
  initialState: { value: ProjectsData },
  reducers: {
    addProject: (state, action) => {
      state.value.push(action.payload);
    },
 
    deleteProject: (state, action) => {
    const itemId = action.payload

    state.value = state.value.filter((project) => project.id !== itemId);
  },

    updateProject: (state, action) => {
    const itemId = action.payload.id
    state.value.map((project) => {
      if (project.id === itemId) {
        project.name = action.payload.newProjectName;
      }
    });
  },
},

});

export const {addProject, deleteProject,updateProject} = ProjectSlice.actions;
export default ProjectSlice.reducer;