import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateBlog from "../pages/dashboard/CreateBlog";
import EditBlog from "../pages/dashboard/EditBlog";
import ProtectedRoute from "../component/routes/ProtectedRoute";
import Setting from "../pages/dashboard/Setting";
import Contact from "../pages/Contact";
import BlogDetails from "../pages/BlogDetails";
import ScrollToTop from "../component/ScrollToTop";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="settings" element={<Setting />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<div>404 Not Found</div>} />

          {/* Dashboard Protected Routes */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/create"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/edit/:id"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;