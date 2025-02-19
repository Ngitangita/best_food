import Boutton from "../Components/ui/Boutton";
import style from "../Components/css/acceuil.module.css"

export default function Acceuil() {
  return (
    <section id="#" className={style.Acceuils}>
      <div className={style.Acceuil}>
        <h3>Our New Menu</h3>
        <h1>AFRICAN CHICKEN</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sequi
          eveniet sed quidem reprehenderit libero officiis.
        </p>
        <Boutton className={style.boutton}> <a href="#">commander maintenant</a></Boutton>
      </div>
      <div className={style.images}>
        <img src="./images/img1.png" alt="img1.png" />
      </div>
    </section>
  );
}
