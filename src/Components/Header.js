import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryUpdate from '../actions/queryUpdate';
import sortbyUpdate from '../actions/sortbyUpdate';

class Header extends Component{

    // updating the store when the user writes in the searchbox or chooses sorting method,
    // triggered by an "onChange" event in the searchBox.
    // value is what the user just typed, no need to press enter.
    handleQuery = (e)=>{
        this.props.queryUpdate(e.target.value);
    }
    // handleSort is triggered by the "sort by" dropdown select.
    handleSort = (e)=>{
        this.props.sortbyUpdate(e.target.value);
    }

    render(){
        return(
            <div className="row" style={{
                marginBottom: "0",
                borderBottom: "1px solid hsl(0deg 0% 88%)",
                marginTop: "1rem"
            }}>
                <div className="input-field col s12 m4 l3">
                    <select defaultValue="none" onChange={this.handleSort}>
                        <option value="none" disabled>none</option>
                        <option value="year">Year</option>
                        <option value="episode">Episode</option>
                    </select>
                    <label>Sort By</label>
                </div>
                <div className="input-field col s12 m8 l9">
                    <input onChange={this.handleQuery} placeholder="Type to search..." type="text"></input>
                    <label>Search</label>
                </div>
            </div>
        )
    }
}

// redux stuff..
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        queryUpdate: queryUpdate,
        sortbyUpdate: sortbyUpdate
    }, dispatch)
}

export default connect(null,mapDispatchToProps)(Header);