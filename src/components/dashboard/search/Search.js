import React, { Component } from "react";
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";

class Search extends Component {
    render() {
    return (
      <div className="container">
        <SearchField 
        />
        <br/>
        <SearchResult />
      </div>
  );
 }
}

export default Search;