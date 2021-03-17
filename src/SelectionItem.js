import React, { useState } from 'react';
import {
  Typography,
  makeStyles,
  Card,
  Chip,
  CardContent,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  media: {
    height: 140,
    width: '30%',
    objectFit: 'contain',
    display: 'inline-block',
  },
  textContent: {
    width: '70%',
    paddingLeft: theme.spacing(1),
    display: 'inline-block',
  },
  chipList: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));

const SelectionItem = (props) => {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');

  const addTag = (event) => {
    event.preventDefault();

    // Handle duplicates later
    setTags((prevTags) => prevTags.concat(currentTag.trim()));
    setCurrentTag('');
  };

  const textFieldOnChange = (event) => {
    setCurrentTag(event.target.value);
  }

  const removeTag = (tag) => () => {
    setTags((prevTags) => prevTags.filter(t => t.trim().toLowerCase() !== tag.trim().toLowerCase()));
  };

  const { selectedItem, position } = props;
  const { left, top, height, width } = selectedItem.previewWindow;

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={selectedItem.dataUrl} className={classes.media} alt="preview"></img>
        <div className={classes.textContent}>
          <Typography variant="h5" component="h2">
            Item {position + 1 }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            left: {left.toFixed(2)} top: {top.toFixed(2)}<br/>
            width: {width.toFixed(2)} height: {height.toFixed(2)}<br/><br/>
          </Typography>
          <div className={classes.chipList}>
            {tags.map((value, i) => {
              return (
                <Chip variant="outlined" size="small"
                  key={`${i}-${value}`}
                  label={value}
                  onDelete={removeTag(value)}/>
                )
            })}
          </div>
          <form className={classes.root} noValidate onSubmit={addTag}>
            <TextField label="New Tag" value={currentTag} onChange={textFieldOnChange}></TextField>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}


export default SelectionItem;
