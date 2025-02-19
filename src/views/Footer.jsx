import style from "../Components/css/footer.module.css";
import clock from "../../src/assets/clock.png"
import pin from "../../src/assets/pin.png"
import email from "../../src/assets/email.png"
import call from "../../src/assets/call.png"

function Footer() {
  return (
    <section className={style.section}>
      <div className={style.footer}>
        <div className={style.media}>
          <div className={style.image}>
            <img src={clock} alt="clock.png" />
          </div>
          <div className={style.info}>
            <strong>Ouverture</strong>
            <p>
              10h30 à 23h45 <br />
              23h45 à 9h30
            </p>
          </div>
        </div>
        <div className={style.media}>
          <div className={style.image}>
            <img src={pin} alt="pin.png" />
          </div>
          <div className={style.info}>
            <strong>Adresses</strong>
            <p>
              France-Paris <br />
              Bénin-Cotonou
            </p>
          </div>
        </div>
        <div className={style.media}>
          <div className={style.image}>
            <img src={email} alt="email.png" />
          </div>
          <div className={style.info}>
            <strong>Emails</strong>
            <p>
              email@gmail.com <br />
              your.dish@gmail.com
            </p>
          </div>
        </div>
        <div className={style.media}>
          <div className={style.image}>
            <img src={call} alt="call.png" />
          </div>
          <div className={style.info}>
            <strong>Numbers</strong>
            <p>
              +33 54454544 <br />
              +33 45687515
            </p>
          </div>
        </div>
      </div>
      <div className={style.foote}>
        <p>
          Réalisé par <span>Faiz Dev</span> | Tous les droits sont réservés.
        </p>
      </div>
    </section>
  );
}

export default Footer;
