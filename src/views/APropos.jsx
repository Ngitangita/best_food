import Boutton from "../Components/ui/Boutton";
import style from "../Components/css/aPropos.module.css";
import Comments from "./Comments";
import imgAboutUs from "../../src/assets/img-about-us.png"

export default function APropos() {
  return (
    <div className={style.propos}>
      <section id="a_propos" className={style.propos}>
        <div className={style.h}>
          <h4>About Us</h4>
          <h2>Why choose us ?</h2>
        </div>
        <div className={style.a_propos}>
          <div className={style.images}>
            <img src={imgAboutUs} alt="img-about-us.png" />
          </div>
          <div className={style.APropos}>
            <h1>Best Food in The Word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est,
              iure culpa ipsa tempora explicabo ullam similique? Ipsum, est,
              beatae adipisci autem dolores, dolore eveniet mollitia quibusdam
              eius provident fugiat!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              ipsa non quis pariatur enim fugit ratione. Unde maiores veritatis
              eaque accusamus minus sunt, eligendi nisi officiis quis vitae
              dignissimos officia.
            </p>
            <a href="#"> <Boutton className={style.boutton}>
             Learn More
            </Boutton></a>
          </div>
        </div>
      </section>
      <Comments />
    </div>
  );
}
