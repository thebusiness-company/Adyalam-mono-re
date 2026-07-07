import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import OurStoryPage from "../Pages/OurStoryPage";
import Layout2 from "../Layout/Layout2";
import Home3 from "../Pages/Home3";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ServicesPage from "../Pages/ServicesPage";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import AdminBlog from "../Pages/AdminBlog";
import AdminContacts from "../Pages/AdminContacts";
import Login from "../Pages/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import TermsandConditions from "../Pages/TermsandConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2></Layout2>,
    children: [
      {
        path: "/ourstory",
        element: <OurStoryPage />,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },
      {
        path: "/admin/blogs",
        element: <ProtectedRoute><AdminBlog></AdminBlog></ProtectedRoute>,
      },
      {
        path: "/admin/contacts",
        element: <ProtectedRoute><AdminContacts></AdminContacts></ProtectedRoute>,
      },
      {
        path: "/admin/login",
        element: <Login></Login>,
      },
      {
        path: "/terms",
        element: <TermsandConditions></TermsandConditions>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "home3",
    element: <Layout2></Layout2>,
    children: [
      {
        index: true,
        element: <Home3></Home3>,
      },
    ],
  },
]);