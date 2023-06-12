import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchallLessons = createAsyncThunk(
  'lesson/fetchLessonsByCourseId',
  async function (courseId) {
    const response = await fetch(
      `http://localhost:8010/proxy/api/get/lessons?id=${courseId}`
    );
    const data = await response.json();

    return data.lessons;
  }
);

const allLessonsSlice = createSlice({
  name: 'allLessons',
  initialState: {
    lessons: [],
    loading: false,
    error: false,
  },
  extraReducers: {
    [fetchallLessons.pending]: (state) => {
      state.loading = true;
    },
    [fetchallLessons.fulfilled]: (state, action) => {
      state.lessons = action.payload;
      state.loading = false;
    },
    [fetchallLessons.rejected]: () => {},
  },
});

export default allLessonsSlice.reducer;
