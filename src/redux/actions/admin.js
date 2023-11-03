import axios from "axios";
import { server } from "../store.js";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });
    const { data } = await axios.get(`${server}/getallusers`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "getAllUsersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const changeUserRole = (id) => async (dispatch) => {
  try {
    dispatch({ type: "changeUserRoleRequest" });
    const { data } = await axios.put(
      `${server}/users/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "changeUserRoleSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "changeUserRoleFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const { data } = await axios.delete(`${server}/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "deleteUserSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: error.response.data.message,
    });
  }
};

export const createCourse = (FormData) => async (dispatch) => {
  try {
    dispatch({ type: "createCourseRequest" });
    const { data } = await axios.post(`${server}/createcourse`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "createCourseSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCourseRequest" });
    const { data } = await axios.delete(`${server}/course/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "deleteCourseSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: error.response.data.message,
    });
  }
};

export const getCourseLectures = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getCourseLecturesRequest" });
    const { data } = await axios.get(`${server}/course/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "getCourseLecturesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getCourseLecturesFail",
      payload: error.response.data.message,
    });
  }
};

export const addLecture = (id, FormData) => async (dispatch) => {
  try {
    dispatch({ type: "addLectureRequest" });
    const { data } = await axios.post(`${server}/course/${id}`, FormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "addLectureSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addLectureFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteCourseLecture =
  (courseId, lectureId) => async (dispatch) => {
    try {
      dispatch({ type: "deleteCourseLectureRequest" });
      const { data } = await axios.delete(
        `${server}/deletecourselecture?courseId=${courseId}&lectureId=${lectureId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch({ type: "deleteCourseLectureSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "deleteCourseLectureFail",
        payload: error.response.data.message,
      });
    }
  };

export const getDashBoardStats = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminStatsRequest" });
    const { data } = await axios.get(`${server}/admin/stats`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "getAdminStatsSuccess", payload: data });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: "getAdminStatsFail",
      payload: error.response.data.message,
    });
  }
};
