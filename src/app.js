import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import About from './components/About.jsx'
import MallMap from "./components/MallMap/mallmap.js";
import Store from "./components/Stores/Store.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Applayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
       
      },
      {
        path:"/mallmap",
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
            <MallMap/>
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/stores/:id",
        element: <Store />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
