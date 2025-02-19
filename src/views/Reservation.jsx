import Boutton from "../Components/ui/Boutton";
import style from "../Components/css/reservation.module.css";

export default function Reservation() {
  return (
    <section id="reservation" className={style.Reservation}>
      <div className={style.h}>
        <h4>Reservation</h4>
        <h2>fill this form to make a reservation</h2>
      </div>
      <form action="">
        <label htmlFor="YourName">Your Name</label>
        <input type="text" id="YourName"/>
        <label htmlFor="YourEmail">Your Email</label>
        <input type="email" id="YourEmail"/>
        <label htmlFor="YourNumber">Your Number</label>
        <input type="text" id="YourNumber"/>
        <label htmlFor="ReservationDate">Reservation Date</label>
        <input type="date" id="ReservationDate"/>
        <Boutton className={style.boutton}>
          <a href="#">Make The Reservation</a>
        </Boutton>
      </form>
    </section>
  );
}
