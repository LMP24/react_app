import Card from "./Kleinkram/Card";
import classes from "./Welcome.module.css";

export default function Welcome() {
  return (
    <Card className={classes.welcome}>
      <div className={classes.hello}>
        Hello and welcome to Basti's Sandwich Shop!
      </div>
      <p>
        We at Basti's work with the best ingedients and farmers, to provide you
        with the highest quality food possible. We bake our bread freshly every
        morning, which makes it limited each day. So come down and get yourself
        a sandwich before they are sold out for the day !{" "}
      </p>
    </Card>
  );
}
