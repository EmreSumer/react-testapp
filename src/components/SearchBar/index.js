import React, {Component} from 'react';
import { StyleBut } from './inputStyle'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            val: ""
        }
    }
    onChange(e){
        this.setState({val: e.target.value})
    }
    render() {
      return (
        <div>
          <form onSubmit={this.props.onSubmit}>
              <input  type="text" name="search" placeholder="Enter a movie name" value={this.state.val} onChange={(e) => this.onChange(e)} />
              <StyleBut type="submit">Submit</StyleBut>
           </form>
        </div>    
      );
    }
  }
  export default SearchBar;