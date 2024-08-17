import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { skillService } from '../service/skill.service';

export const getAllSkillApi = createAsyncThunk('skill/getAllSkillApi', async (_,thunkAPI) => {
    const reponse = await skillService.getAllSkill();
    return reponse.data.content
})
const initialState = {
    listSkill: [],
}

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSkillApi.fulfilled, (state, action) => {
        state.listSkill = action.payload
    })
  }
});

export const {} = skillSlice.actions

export default skillSlice.reducer