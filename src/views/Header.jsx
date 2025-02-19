import style from "../Components/css/header.module.css";

function Header() {
  return (
    <div className={style.Header}>
        <h2>
          Your<span>Dish</span>
        </h2>
        <ul>
          <li>
            <a href="#">Acceuil</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#a_propos">A Propos</a>
          </li>
          <li>
            <a href="#reservation">Réservation</a>
          </li>
        </ul>
    </div>
  );
}

export default Header;
