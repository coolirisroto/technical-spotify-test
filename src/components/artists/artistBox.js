import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
  
const ArtistBox = (props)=>{
    const {name, images} = props.item;
    const image = images[0].url
  return(
    <>
    <ListItem alignItems="flex-start" onClick={props.handleClick}>
        <ListItemAvatar>
            <Avatar alt={name} src={image}/>
        </ListItemAvatar>
        <ListItemText primary={name}/>
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
    );
}
export default ArtistBox;
