import { createReducer } from "@reduxjs/toolkit";

export const profileReducer = createReducer(
  {},
  {
    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // change password

    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    changePasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update Profile Pic
    updateProfilePicRequest: (state) => {
      state.loading = true;
    },
    updateProfilePicSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfilePicFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // remove from playlist
    removeFromPlaylistRequest: (state) => {
      state.loading = true;
    },
    removeFromPlaylistSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    removeFromPlaylistFail: (state, action) => {
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
