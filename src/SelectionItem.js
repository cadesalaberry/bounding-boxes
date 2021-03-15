import {
  Typography,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 345,
    backgroundColor: '#939599',
  },
  media: {
    height: 140,
  },
});

const SelectionItem = (props) => {
  const classes = useStyles();

  const { selectedItem, position } = props

  console.log(selectedItem)

  return (
    <Card className={classes.root}>
    <CardActionArea>
      {/* <CardMedia
        className={classes.media}
        image={selectedItem.dataUrl}
        // title="First item"
      /> */}
      <img src={selectedItem.dataUrl}></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Item {position + 1 }
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </CardActionArea>
    </Card>
  )
}


export default SelectionItem;
