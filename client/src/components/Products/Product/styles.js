import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    maxHeight: 720,
    zIndex: 999,
  },
  media: {
    zIndex: 999,
    height: 400,  
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    zIndex: 999,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    zIndex: 999,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
