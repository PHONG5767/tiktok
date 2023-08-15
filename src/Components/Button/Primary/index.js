import styles from "../button.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

function PrimaryButton({ to, href, onClick, children,minor,upload,small,large, ...passProp }) {
  let Comp = "button";
  const classButton = classNames({
    [styles.minor]: minor,
    [styles.upload]: upload,
    [styles.small]: small,
    [styles.large]: large,
    [styles.primary]: true,
  });
  const props = {
    onClick,
    passProp,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classButton}>
      <span>{children}</span>
    </Comp>
  );
}
export default PrimaryButton;
