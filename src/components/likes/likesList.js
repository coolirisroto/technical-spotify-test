import React, {Component} from 'react';
import List from '@material-ui/core/List';
import SongBox from '../songs/songBox'

export default class LikesList extends Component{

   renderList = ()=>{
        const {data} = this.props;
        const listItems = data.map(item=>
        <SongBox 
         key={item.id} 
         item={item}
         handleHearClick={event=> this.props.handleHearItem(item)}
         handleLikeClick={event=> this.props.handleLikeItem(item)}
         showHearIcon={false}
        />)
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