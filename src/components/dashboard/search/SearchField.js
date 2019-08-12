import React, { Component } from "react";

import SearchResult from "./SearchResult";

class SearchField extends Component {
    state={
      searchData: ''
    }

    onSubmit = (e) => {
      e.preventDefault();
        fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${this.state.searchData}`)
        .then(res=> res.json())
        .then(data=> this.setState({searchData: data[1]}));
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    render() {
    return (
      <div className="container">
        <div className="col-md-10">
          <form onSubmit={this.onSubmit} className="navbar-form" role="search">
            <div className="input-group add-on">
              <input 
                className="form-control" 
                placeholder="Search any Word" 
                name="searchData"
                id="srch-term" 
                type="text"
                onChange={this.onChange}
              />
              <div className="input-group-btn">
                <button 
                  className="btn btn-primary" 
                  type="submit">
                    Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <SearchResult searchData={this.state.searchData}/>
      </div>
  );
 }
}

export default SearchField;