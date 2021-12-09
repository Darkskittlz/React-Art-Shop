import { makeStyles } from "@material-ui/core/styles";
import "react-slideshow-image/dist/styles.css";

export default makeStyles(() => ({
  root: {
    maxWidth: 535,
    maxHeight: 720,
    marginLeft: 10,
    justifyContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
  },
  slideContainer: {
    justifyContent: "center",
  },
  image: {
    // height: 503,
  },
}));
