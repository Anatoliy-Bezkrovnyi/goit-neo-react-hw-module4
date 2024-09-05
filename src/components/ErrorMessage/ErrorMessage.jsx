import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "Upss! Something went wrong." }) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;