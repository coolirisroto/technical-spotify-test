import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const SongBox = (props)=>{
    console.log(props.item)
    const {name, album, preview_url} = props.item;
    const image = album.images[0].url
  return(
    <>
    <ListItem alignItems="flex-start" onClick={props.handleClick}  href={preview_url}>
        <ListItemAvatar>
            <Avatar alt={name} src={image}/>
        </ListItemAvatar>
        <ListItemText primary={name}
            secondary={
            <React.Fragment>
                {album.name}
            </React.Fragment>
        }/>
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
    );
}
export default SongBox;
