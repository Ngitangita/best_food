import Boutton from "../Components/ui/Boutton";
import style from "../Components/css/menu.module.css";
import img1 from "../../src/assets/img1.png"
import img2 from "../../src/assets/img2.png"
import img3 from "../../src/assets/img3.png"
import img4 from "../../src/assets/img4.png"
import img5 from "../../src/assets/img5.png"
import img6 from "../../src/assets/img6.png"

export default function Menu() {
  return (
    <section id="menu" className={style.Menu}>
      <h4>Ours Menu</h4>
      <h2>Popular Menu</h2>
      <div className={style.MenuArticle}>
        <div className={style.MenuAside}>
          <div className={style.images}>
             <img src={img1} alt="img1.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <a href="#"> <Boutton className={style.boutton}>bUY</Boutton></a>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src={img2} alt="img2.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
             <a href="#"> <Boutton className={style.boutton}>bUY</Boutton></a>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
             <img src={img3} alt="img3.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
             <a href="#"> <Boutton className={style.boutton}>bUY</Boutton></a>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
             <img src={img4} alt="img4.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
             <a href="#"> <Boutton className={style.boutton}>bUY</Boutton></a>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src={img5} alt="img5.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
             <a href="#"> <Boutton className={style.boutton}>bUY</Boutton></a>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
             <img src={img6} alt="img6.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
             <a href="#"> <Boutton className={style.boutton}>bUY</Boutton></a>
        </div>
      </div>
    </section>
  );
}
