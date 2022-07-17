import { Outlet } from "react-router-dom";
import Footer from "../../templates/Footer/Footer";

function Default() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Default;
