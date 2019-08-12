import React, { Component } from "react";

class SearchResult extends Component {
    render() {
    return (
      <div className="container">
        {this.props.searchData}
      </div>
    )
 }
}

export default SearchResult;