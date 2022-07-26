import { Outlet } from "react-router-dom";
import Footer from "../../templates/Footer/Footer";
import Background from "../../templates/Background/Background";
import Header from "../../templates/Header/Header";

function Default() {
  return (
    <>
      <Header />
      <Background />
      <Outlet />
      <Footer />
    </>
  );
}

export default Default;
