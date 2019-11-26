/* eslint-disable */
import React, { Component } from 'react';

import { connect } from 'react-redux';
//import { logIn } from '../../redux/actions/loginAction';

class Home extends Component {
  handleSubmit = user => {
    const { remember_me, name, password } = user;
    this.props.logIn(remember_me, name, password);
  }
  render() {
    return (
      <div className="account" >
          <p>Home</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({

});
export default connect(mapStateToProps, {  })(Home);

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
