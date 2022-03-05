import { makeStyles } from "@material-ui/core/styles";
import "react-slideshow-image/dist/styles.css";

export default makeStyles(() => ({
  root: {
    zIndex: 999,
    maxWidth: 515,
    maxHeight: 740,
    marginLeft: 5,
    justifyContent: "center",
    marginBottom: 10,
  },
  media: {
    zIndex: 999,
    height: 200,
    width: '15vw',
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    zIndex: 999,
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    zIndex: 999,
    display: "flex",
    width: '100%',
    height: '70px',
    justifyContent: "center",
  },
  slideContainer: {
    zIndex: 999,
    height: 400,
    justifyContent: "center",
  },
  image: {
    zIndex: 999,
    // height: 503,
  },
}));
