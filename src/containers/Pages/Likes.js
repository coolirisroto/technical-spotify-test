import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/songs/actions'
import LikesList from '../../components/likes/likesList'
import Progress from '../../components/ui/progress'

class Likes extends Component {


  render() {
     
    const { loading, likes }= this.props;
    if(loading){
      return <Progress/> 
    }
    return (
      <div>
          <p>Likes</p>
          <LikesList data={likes} handleItem={this.handleItemSelected} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
    likes: state.Likes.result,
    loading: state.Likes.loading
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    songsSearch: actions.songsSearch,
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Likes);
