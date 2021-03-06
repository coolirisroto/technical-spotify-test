import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/artists/actions'
import * as queryString from 'query-string';
import ArtistList from '../../components/artists/artistList'
import Progress from '../../components/ui/progress'
class Artists extends Component {

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

  handleItemSelected = (itemSelected)=>this.props.history.push(`/artists/${itemSelected.id}/songs`);

  render() {
    const { loading, artists }= this.props;
    if(loading){
      return <Progress/> 
    }
    return (
      <div>
          <p>Artists</p>
          <ArtistList data={artists} handleItem={this.handleItemSelected} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
    artists: state.Artists.result,
    loading: state.Artists.loading
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    artistsSearch: actions.artistsSearch,
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Artists);
