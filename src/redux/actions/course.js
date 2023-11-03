import axios from "axios";
import { server } from "../store.js";

export const getAllCourses =
  (category = "", keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "getAllCoursesRequest" });
      const { data } = await axios.get(
        `${server}/getallcourses?keyword=${keyword}&category=${category}`
      );
      dispatch({ type: "getAllCoursesSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "getAllCoursesFail",
        payload: error.response.data.message,
      });
    }
  };

export const addToPlaylist = (id) => async (dispatch) => {
  try {
    dispatch({ type: "addToPlaylistRequest" });
    const { data } = await axios.post(
      `${server}/addtoplaylist`,
      {
        id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "addToPlaylistSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addToPlaylistFail",
      payload: error.response.data.message,
    });
  }
};


