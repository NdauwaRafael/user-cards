/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';
import axios from 'axios';
 class SearchUser extends Component {
     state = {
         userName: ''
     };
     handleSubmit =  (event)=> {
         event.preventDefault();
         axios.get(`https://api.github.com/users/${this.state.userName}`)
             .then(response => {
                    this.props.onFormSubmit(response.data);
                    this.setState({
                        userName: ''
                    });
             })
     };
     handleChange = (event)=>{
         this.setState({
             userName: event.target.value
         });
     };
     render(){
         return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                     <input type="text" placeholder="Github Username" value={this.state.userName} onChange={this.handleChange} required/>
                     <button type="submit">Add card</button>
                 </form>
             </div>
         )
     }
 };

 export default SearchUser;