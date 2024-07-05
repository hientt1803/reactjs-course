import { useContext } from "react";
import styles from "../../styles/app.module.scss";
import { MyContext } from "../state/use-context/example1";

const ContactPage = () => {
  const exmapleValue = useContext(MyContext);
  return (
    <div className={styles.navigationItem}>
      <div className={styles.navigationItem}>This is contact page</div>
      {exmapleValue}
    </div>
  );
};

export default ContactPage;
