import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/songs/actions'
import ArtistList from '../../components/artists/artistList'
import Progress from '../../components/ui/progress'

class Artists extends Component {

  componentDidMount(){
    const {match}  =this.props;
     if(match.params && match.params.artistId){
        this.props.songsSearch(match.params.artistId)
    }
    else{
        this.props.history.push('/');
    }
  }

  handleItemSelected = (itemSelected)=>this.props.history.push(`/artists/${itemSelected.id}/songs`);

  render() {
     
    const { loading, songs }= this.props;
    console.log(songs)
    if(loading){
      return <Progress/> 
    }
    return (
      <div>
          <p>Artists</p>
          
      </div>
    );
  }
}
const mapStateToProps = state => ({
    songs: state.Songs.result,
    loading: state.Songs.loading
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    songsSearch: actions.songsSearch,
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Artists);
