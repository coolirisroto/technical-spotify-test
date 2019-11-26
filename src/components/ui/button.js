import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonC = (props)=>{
    return(
    <Button {...props}>
        {props.children}
    </Button>
      );
  }
  export default ButtonC;