import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/artists/actions'
import * as queryString from 'query-string';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



class Artists extends Component {

  constructor(props){
    super(props);
    this.state ={
    }

  }


  componentDidMount(){
    const {location}  =this.props;
    if(location.search){
      const parsed = queryString.parse(location.search);
      if(parsed.q){
        this.props.artistsSearch(parsed.q)
      }
    }
    else{
        this.props.history.push('/');
    }
  }

  render() {
      const { artists }= this.props;
      const listItems = artists.map(artist=>{
          return (
            <ListItem button>
                <ListItemText primary={artist.name} />
            </ListItem>
          )
      })
      console.log(artists)
    return (
      <div>
          <p>Artists</p>
            <List component="nav" aria-label="contacts">
                {listItems}
            </List>          
      </div>
    );
  }
}
const mapStateToProps = state => ({
    artists: state.Artists.result
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    artistsSearch: actions.artistsSearch,
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Artists);
