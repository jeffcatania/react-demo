import React from 'react';

export default class SearchBox extends React.Component {

  handleChange() {
    this.props.onUserInput(this.searchbox.value)
  }

  render() {
    const { reports, onSelection } = this.props;
    return (
      <input
        type="text"
        placeholder="Filter..."
        value={this.props.searchText}
        ref={(ref) => this.searchbox = ref}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}


SearchBox.defaultProps = {
  searchText: "This is only a test",
  onUserInput: function(searchText) { console.log("the searchtext has changed to:", searchText)}
}