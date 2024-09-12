import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import ProductPage from "./components/Pages/ProductPage";
import MensPage from "./components/Pages/MensPage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export const AppRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/collections/mens-overT-shirt",
        element: <MensPage />,
      },
      {
        path: "/productPage",
        element: <ProductPage />,
      },
    ],
  },
]);
export default App;
