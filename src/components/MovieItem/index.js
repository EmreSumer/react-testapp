import React, {Component} from 'react';
 import '../../App.css';

class MovieItem extends Component {
  
    render() {
      return (
        <tr onClick={(e) => this.props.rowClicked(e)}>
          <td>
            <img alt="Movie Poster" src={this.props.image === "N/A" ? "" : this.props.image} />
          </td>
          <td>
            <h6> {this.props.name}  ({this.props.year})</h6>
          </td>
        </tr>
  
           
         
      );
    }
  }
  export default MovieItem;
