import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/songs/actions'
import * as SongsActions from '../../redux/likes/actions'
import SongsList from '../../components/songs/songsList'
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

  handleHearItem = (itemSelected)=>window.open(itemSelected.preview_url, '_blank');

  handleLikeItem = (itemSelected)=>this.props.likeSong(itemSelected);

  render() {
     
    const { loading, songs }= this.props;
    /* console.log(songs) */
    if(loading){
      return <Progress/> 
    }
    return (
      <div>
          <p>Songs</p>
          <SongsList data={songs} handleHearItem={this.handleHearItem} handleLikeItem={this.handleLikeItem} />
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
    likeSong: SongsActions.likeSong
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Artists);
