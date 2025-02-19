import Boutton from "../Components/ui/Boutton";
import style from "../Components/css/menu.module.css";

export default function Menu() {
  return (
    <section id="menu" className={style.Menu}>
      <h4>Ours Menu</h4>
      <h2>Popular Menu</h2>
      <div className={style.MenuArticle}>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src="./images/img1.png" alt="img1.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <Boutton className={style.boutton}><a href="#">bUY</a></Boutton>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src="./images/img2.png" alt="img2.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <Boutton className={style.boutton}><a href="#">bUY</a></Boutton>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src="./images/img3.png" alt="img2.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <Boutton className={style.boutton}><a href="#">bUY</a></Boutton>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src="./images/img4.png" alt="img4.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <Boutton className={style.boutton}><a href="#">bUY</a></Boutton>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src="./images/img5.png" alt="img5.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <Boutton className={style.boutton}><a href="#">bUY</a></Boutton>
        </div>
        <div className={style.MenuAside}>
          <div className={style.images}>
            <img src="./images/img6.png" alt="img6.png" />
          </div>
          <p> Chicken Orido</p>
          <span><strong>$65.99</strong></span>
          <Boutton className={style.boutton}><a href="#">bUY</a></Boutton>
        </div>
      </div>
    </section>
  );
}
