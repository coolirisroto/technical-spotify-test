import React, {Component} from 'react';
import List from '@material-ui/core/List';
import SongBox from './songBox'

export default class SongsList extends Component{

   renderList = ()=>{
        const {data} = this.props;
        const listItems = data.map(item=><SongBox key={item.id} item={item} handleClick={event=> this.props.handleItem(item)}/>)
        return listItems
   }
   render(){
      return (
        <List component="nav" aria-label="contacts">
            {this.renderList()}
        </List>
      )
   }
}