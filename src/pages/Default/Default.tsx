import { Outlet } from "react-router-dom";
import Footer from "../../templates/Footer/Footer";
import Background from "../../templates/Background/Background";

function Default() {
  return (
    <>
      <Background />
      <Outlet />
      <Footer />
    </>
  );
}

export default Default;
