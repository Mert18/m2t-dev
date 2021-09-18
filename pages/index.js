import classes from "../styles/Home.module.css";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div className={classes.homehero}>
        <h1>Mert UYĞUR</h1>
        <p>Frontend Developer</p>
      </div>
      <div className={classes.blogposthome}>
        <ul></ul>
      </div>
    </Container>
  );
}
