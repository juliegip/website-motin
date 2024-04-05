import { Outlet, createBrowserRouter } from "react-router-dom";
import {
  Navbar,
  Footer,
  ActualiteEdit,
  ActusView,
  RecrutementEdit,
  Page404,
  RecrutementView,
} from "@/components";
import Homepage from "@/pages/homepage/Homepage";
import Occasions from "@/pages/occasions/OccasionsPage";
import Contact from "@/pages/contact/ContactPage";
import Recrutement from "@/pages/recrutement/RecrutementPage";
import Actualites from "@/pages/actualites/ActualitesPage";
import Admin from "@/pages/admin/AdminPage";
import TestTheme from "@/pages/testTheme";
import ExternalRedirect from "@/components/ExternalRedirect/ExternalRedirect";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/occasions",
        element: <ExternalRedirect to="https://www.agriaffaires.com/pros/list/140535-0/1/motin-normagri.html" />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recrutement",
        element: <Recrutement />,
      },
      {
        path: "actualites",
        element: <Actualites />,
      },
      {
        path: "/actualites/:id",
        element: <ActusView />,
      },
      {
        path: "admin/actus",
        element: <ActualiteEdit />,
      },
      {
        path: "admin/actus/:id",
        element: <ActualiteEdit />,
      },
      {
        path: "admin/recrutement",
        element: <RecrutementEdit />,
      },
      {
        path: "admin/recrutement/:id",
        element: <RecrutementEdit />,
      },
      {
        path: "recrutement/:id",
        element: <RecrutementView />,
      },
      {
        path: "test",
        element: <TestTheme />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);
