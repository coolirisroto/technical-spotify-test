import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HearingIcon from '@material-ui/icons/Hearing';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class SongBox extends Component {

    render() {
    /* console.log(props.item) */
    const {name, album, liked} = this.props.item;
    const image = album.images.length>0 ? album.images[0].url: "";
    const _liked = liked ? <FavoriteIcon />: <FavoriteBorderIcon onClick={this.props.handleLikeClick}/>;
    return(
    <>
    <ListItem alignItems="flex-start"  >
        <ListItemAvatar>
            <Avatar alt={name} src={image}/>
        </ListItemAvatar>
        <ListItemText primary={name}
            secondary={
            <React.Fragment>
                {album.name}
            </React.Fragment>
        }/>
        {this.props.showHearIcon && <HearingIcon onClick={this.props.handleHearClick}/>}
        {_liked}
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
    );
    }
}

SongBox.defaultProps = {
    showHearIcon: true
};
  