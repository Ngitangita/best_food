import { Outlet } from "react-router-dom";
import Header from "../../views/header";
import Reservation from "../../views/Reservation";
import APropos from "../../views/APropos";
import Acceuil from "../../views/Acceuil";
import Menu from "../../views/Menu";
import Footer from "../../views/footer";

function Layout() {
  return (
    <div className="flex">
      <>
        <Header />
      </>
      <main>
        <Acceuil />
        <Menu />
        <APropos />
        <Reservation />
        <Footer />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
