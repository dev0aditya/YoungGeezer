import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import ProductPage from "./components/Pages/ProductPage";
import MensPage from "./components/Pages/MensPage";
import BagPage from "./components/Pages/BagPage";
import TermsAndCondition from "./components/Pages/TermsAndCondition";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import ReturnPolicy from "./components/Pages/ReturnPolicy";
import ShippingPolicy from "./components/Pages/ShippingPolicy";
import FAQPage from "./components/Pages/FAQPage";
import ProfilePage from "./components/Pages/ProfilePage";
import ContactPage from "./components/Pages/ContactPage";
import { Toaster } from "react-hot-toast";
import OrderDetails from "./components/Sections/OrderDetails";
import LoginYup from "./components/Sections/RegisterUser";
import RegisterUser from "./components/Sections/RegisterUser";
import OtpVerificationPage from "./components/Pages/OtpVerificationPage";
import InProgressOrder from "./components/Sections/InProgressOrder";
import ProgressOrderDetails from "./components/Sections/ProgressOrderDetails";

function App() {
  return (
    <>
      <Header />
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "mt-16",
          }}
        />
      </div>

      <Outlet></Outlet>
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
      {
        path: "/bag",
        element: <BagPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/profile/orders/orderId",
        element: <OrderDetails />,
      },
      {
        path: "/profile/inprogress/orderId",
        element: <ProgressOrderDetails />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registeruser",
        element: <RegisterUser />,
      },
      {
        path: "/registeruser/otp",
        element: <OtpVerificationPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/termsandcondition",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/returnPolicy",
        element: <ReturnPolicy />,
      },
      {
        path: "/shippingPolicy",
        element: <ShippingPolicy />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
    ],
  },
]);
export default App;
