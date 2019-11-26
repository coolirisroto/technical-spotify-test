import React, { Component } from 'react';

import { connect } from 'react-redux';
//import { logIn } from '../../redux/actions/loginAction';
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import MySnackbarContentWrapper from '../../components/ui/snackbarContentWrapper'
import SnackBar from '../../components/ui/snackbar'

class Home extends Component {

  constructor(props){
    super(props);
    this.state ={
      search:'',
      showAlert: false
    }
  }
  handleChangeText = search =>this.setState({search})

  handleClick = event=>{
    const { search } = this.state;
    if(!search){
      this.setState({showAlert:true})
    }
    else{

    }
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({showAlert:false})
  };  
  render() {
    return (
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
    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {  })(Home);
