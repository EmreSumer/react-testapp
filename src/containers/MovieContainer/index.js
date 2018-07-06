import React, {Component} from 'react'
import SearchBar from '../../components/SearchBar';
import MovieItem from '../../components/MovieItem';

class MovieContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            data : [],
            description: "",
        }
    }
    handleSubmit(e){
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${e.target.search.value}&apikey=47fbc3aa`)
            .then(response => response.json())
            .then(val => val.Response === "True"  ? this.setState({data:val.Search}) : alert("Enter a valid input")) 
    }
    
    rowClicked(e, key) {
      e.preventDefault();
      fetch(`http://www.omdbapi.com/?i=${key}&apikey=47fbc3aa`)
        .then(response => response.json())
        .then((val) => this.setState({
          description: val.Plot
        })) 
    
    }
  
    
    render() {
      console.log(this.state.description)
      //Sort by year
      this.state.data.sort((a,b)=>{return a.Year.localeCompare(b.Year)})
      const movie_items =  this.state.data.length  ?  this.state.data.map((item) =>  <MovieItem rowClicked={(e) => this.rowClicked(e, item.imdbID)} name={item.Title} key={item.imdbID} image={item.Poster} year={item.Year} plot={item.Plot}/>) : null;
    
      return (
        <div className="App">
          <SearchBar onSubmit={(e) => this.handleSubmit(e)}/>
          <div className="container">
            <div className="left">
              <table>
                <tbody>
                  {movie_items}
                </tbody>
              </table>
            </div> 
            <div className="right">
              <h6>Movie Details</h6>
              {this.state.description}
            </div> 
          </div>
        </div>
      );
    }
  }
  export default MovieContainer;

  