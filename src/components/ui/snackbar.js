import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function CustomizedSnackbars(props) {
    return (
      <div>
        <Snackbar {...props}
        >
        {props.children}
        </Snackbar>
      </div>
    );

}