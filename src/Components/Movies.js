import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import selectMovieUpdate from '../actions/selectMovieUpdate';

class Movies extends Component {

    // update selected movie state in redux store. triggered by clicking a movie.
    // the value to store in the redux store is all the info about that movie.
    handleMovieSelection = (value)=>{
        this.props.selectMovieUpdate(value);
    }

    render() { 
    var data=this.props.data;

    // functions to be passed to array.sort method.
    function byEpisode(a, b) {
        a = a.fields.episode_id;
        b = b.fields.episode_id;
        return a<b ? -1 : 1
    }

    function byYear(a, b) {
        a = Date.parse(a.fields.release_date);
        b = Date.parse(b.fields.release_date);
        return a<b ? -1 : 1
    }
    
    // function to be passed to array.filter method.
    // it concatenates the title of the movie with the year released and checks
    // if the query is included in it. not case sensitive.
    function byInput(query) {
        var stringToFilter = query.fields.title+query.fields.release_date;
        stringToFilter=stringToFilter.toLowerCase();
        return stringToFilter.includes(this.props.query.toLowerCase());
      }

    if (this.props.sort==="episode"){
        data.sort(byEpisode);
    }
    else if (this.props.sort==="year"){
        data.sort(byYear);
    }

    // only filter the data if the query is not blank!
    if (this.props.query!==""){
        data = data.filter(byInput,this);
    }

    var movieList = data.map((movie,i)=>
        <tr key={i} onClick={()=>{this.handleMovieSelection(movie.fields)}}>
            <td className="center-align" style={{fontSize:".9rem"}}>
                EPISODE {movie.fields.episode_id}
            </td>
            <td>
                {movie.fields.title}
            </td>
            <td className="right-align">
                {movie.fields.release_date}
            </td>
        </tr>
    );

    return(
        <table className="highlight white">
            <tbody>
                {movieList}
            </tbody>
        </table>
    );
    }
}

// this component will update the store, but will not use the state,
// so we only need the second argument for the connect function

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectMovieUpdate: selectMovieUpdate
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(Movies);