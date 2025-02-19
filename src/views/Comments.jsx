
import style from "../Components/css/comments.module.css";

export default function Comments() {
  return (
    <section className={style.Comments}>
      <h4>Comments</h4>
      <h2>What People this about us</h2>
      <div className={style.CommentsArticle}>
        <div className={style.CommentsAside}>
          <div className={style.images}>
            <div className={style.image}>
            <img src="./images/img1.png" alt="img1.png" />
            </div>
            <h5>Smith Johnson</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi
            repellat. Velit, temporibus! Repellat velit delectus vero suscipit
            ut, consequatur atque molestias obcaecati tenetur dignissimos! Eius
            eos reprehenderit aspernatur molestiae?
          </p>
        </div>
        <div className={style.CommentsAside}>
          <div className={style.images}>
            <div className={style.image}>
            <img src="./images/img1.png" alt="img1.png" />
            </div>
            <h5>Smith Johnson</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi
            repellat. Velit, temporibus! Repellat velit delectus vero suscipit
            ut, consequatur atque molestias obcaecati tenetur dignissimos! Eius
            eos reprehenderit aspernatur molestiae?
          </p>
        </div>
        <div className={style.CommentsAside}>
          <div className={style.images}>
            <div className={style.image}>
            <img src="./images/img1.png" alt="img1.png" />
            </div>
            <h5>Smith Johnson</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi
            repellat. Velit, temporibus! Repellat velit delectus vero suscipit
            ut, consequatur atque molestias obcaecati tenetur dignissimos! Eius
            eos reprehenderit aspernatur molestiae?
          </p>
        </div>
      </div>
    </section>
  );
}
