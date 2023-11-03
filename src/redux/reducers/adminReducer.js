import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { users: [], lectures: [] },
  {
    // Admin stats

    getAdminStatsRequest: (state) => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload.stats;
      state.usersCount = action.payload.usersCount;
      state.subscriptionsCount = action.payload.subscriptionsCount;
      state.viewsCount = action.payload.viewsCount;
      state.usersPercentage = action.payload.usersPercentage;
      state.viewsPercentage = action.payload.viewsPercentage;
      state.subscriptionsPercentage = action.payload.subscriptionsPercentage;
      state.subscriptionsProfit = action.payload.subscriptionsProfit;
      state.viewsProfit = action.payload.viewsProfit;
      state.usersProfit = action.payload.usersProfit;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllUsersRequest: (state) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },
    getAllUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // change user Role
    changeUserRoleRequest: (state) => {
      state.loading = true;
    },
    changeUserRoleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    changeUserRoleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete user
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // create course
    createCourseRequest: (state) => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete course
    deleteCourseRequest: (state) => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get course lectures
    getCourseLecturesRequest: (state) => {
      state.loading = true;
    },
    getCourseLecturesSuccess: (state, action) => {
      state.loading = false;
      state.lectures = action.payload.lectures;
    },
    getCourseLecturesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // add lecture to Course
    addLectureRequest: (state) => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete Course Lecture
    deleteCourseLectureRequest: (state) => {
      state.loading = true;
    },
    deleteCourseLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteCourseLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
