

import styles from "./Loader.module.css";
import { Grid } from "react-loader-spinner";

const Loader = ({ visible = true }) => (
  <Grid
    visible={visible}
    height="100"
    width="100"
    color="rgba(39, 1, 255, 0.5)"
    secondaryColor="rgb(39, 1, 255)"
    ariaLabel="grid-loading"
    wrapperClass={styles.loader}
    strokeWidth="4"
  />
);

export default Loader;