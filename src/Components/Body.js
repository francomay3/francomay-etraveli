import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieData from './MovieData';
import Movies from './Movies';

class Body extends Component{

    constructor(props){
        super(props);

        // movieData will be a piece of state that will initialize as an empty array,
        // and then populated with the data from the api once the fetch request is fulfilled.
        // this state will only change one time and the data stored until the page is refreshed,
        // so there is only one http request.
        // 
        // if the data on the server wasn't static like this one, of course, we should fetch new
        // data every time the user performs a search.
        this.state={
            statusOk:false,
            movieData:[]
        }
        const url="https://star-wars-api.herokuapp.com/films";
        fetch(url).then((resp)=>{
            resp.json().then((data)=>{
                this.setState({
                    statusOk: true,
                    movieData: data
                });
            });
        });
    }

    render(){
        var borderStyle="1px solid hsl(0deg 0% 88%)";
        if (this.state.statusOk){
            return (
                <div className="row" style={{display:"flex",alignItems: "stretch",borderBottom: borderStyle}}>
                    <div className="col s12 m6 grey lighten-5" style={{borderRight: borderStyle,padding: "0",}}>
                        {/* all props come from the redux store except
                        for movieData that was called from the api  */}
                        <Movies query={this.props.query} sort={this.props.sort} data={this.state.movieData}/>
                    </div>
                    <div className="col s12 m6 valign-wrapper" style={{justifyContent: "center",borderBottom:"1px solid rgb(224, 224, 224)"}}>
                        <MovieData movie={this.props.movie}/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="row">
                    <p className="center-align">Ups! something went wrong... Please try again later.</p>
                </div>
            )
        }
    }
}


function mapStateToProps(state){
    return{
        query: state.query,
        sort: state.sort,
        movie: state.selectMovie
    }
}

// the second argument for the connect function is null, because we don't need to update state from this
// component. we only want to read from the store.
export default connect(mapStateToProps,null)(Body);