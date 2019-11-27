import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import MySnackbarContentWrapper from '../../components/ui/snackbarContentWrapper'
import SnackBar from '../../components/ui/snackbar'
import * as actions from '../../redux/auth/actions'
import * as queryString from 'query-string';
class Home extends Component {

  constructor(props){
    super(props);
    this.state ={
      search:'',
      showAlert: false,
    }

  }
  handleChangeText = search =>this.setState({search})

  handleClick = event=>{
    const { search } = this.state;
    if(!search){
      this.setState({showAlert:true})
    }
    else{
      const queryString = `q=${search}`
      this.props.history.push(`/artists?${queryString}`);
    }
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({showAlert:false})
  };

  componentDidMount(){
    const {location}  =this.props;
    if(location.hash){
      const parsed = queryString.parse(location.hash);
      if(parsed){
        this.props.saveAccessToken(parsed)
      }
    }
    else
    {
      this.props.redirectAuthUrl()
    }
  }

  render() {

    return (
      <>
      <div>
      <SnackBar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.showAlert}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={this.handleClose}
          variant="warning"
          message="Ingresa un artista!"
        />
      </SnackBar>
        <p>Search artists</p>
        <Input
        id="standard-search"
        label="Search field"
        type="search"
        margin="normal"
        onChange={event=>this.handleChangeText(event.target.value)}
        defaultValue={this.state.search}
        />
        <Button variant="outlined" color="primary" onClick={this.handleClick} >
          Search
        </Button>   
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={e=>this.props.history.push(`/likes`)} >
          Likes
        </Button>             
      </div>
      </>
    );
  }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    redirectAuthUrl: actions.redirectAuthUrl,
    saveAccessToken: actions.saveAccessToken
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
