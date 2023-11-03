import axios from "axios";
import { server } from "../store.js";

export const updateProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });
    const { data } = await axios.put(
      `${server}/updateprofile`,
      {
        name,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "updateProfileSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateProfileFail",
      payload: error.response.data.message,
    });
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });
      const { data } = await axios.put(
        `${server}/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "changePasswordSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "changePasswordFail",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfilePic = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfilePicRequest" });
    const { data } = await axios.put(`${server}/updateprofilepic`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "updateProfilePicSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "updateProfilePicFail",
      payload: error.response.data.message,
    });
  }
};

export const removeFromPlaylist = (id) => async (dispatch) => {
  try {
    dispatch({ type: "removeFromPlaylistRequest" });
    const { data } = await axios.delete(
      `${server}/removefromplaylist?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "removeFromPlaylistSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "removeFromPlaylistFail",
      payload: error.response.data.message,
    });
  }
};
