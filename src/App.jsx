import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import toast, { Toaster } from "react-hot-toast";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Courses from "./components/courses/Courses";
import Profile from "./components/profile/Profile";
import DashBoard from "./components/admin/dashboard/DashBoard";
import CreateCourse from "./components/admin/CreateCourse/CreateCourse";
import AdminCourses from "./components/admin/AdminCourses/AdminCourses";
import Users from "./components/admin/Users/Users";
import CourseDetails from "./components/course Details/CourseDetails";
import Subscribe from "./components/Paymnets/Subscribe";
import NotFound from "./components/layout/NotFound";
import PaymentSuccess from "./components/Paymnets/PaymentSuccess";
import PaymentFail from "./components/Paymnets/PaymentFail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "./components/layout/Loader";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";

function App() {
  const { loading, isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  // right click ko disable kar denge
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect={"/profile"}
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect={"/profile"}
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CourseDetails user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />

            {/* admin routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                  redirect={"/admin/dashboard"}
                >
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                  redirect={"/admin/createcourse"}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                  redirect={"/admin/courses"}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === "admin"}
                  redirect={"/admin/users"}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster />
        </Router>
      )}
    </>
  );
}

export default App;
