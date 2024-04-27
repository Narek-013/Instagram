import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const LayoutUserPage = () => {
    return (
      <div>
        <Outlet />
        <div className="footerWith">
          <Footer />
        </div>
      </div>
    );
}

export default LayoutUserPage;
