import React from "react";

class FilterField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.searchText,
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.onChangeBound = this.onChangeBound.bind(this);
  }

  onChangeBound(event) {
    this.setState({
      value: event.target.value,
    });
  }

  onSearchClick() {
    this.props.onSearchClick(this.state.value);
  }

  render() {
    const { placeholder, tooltip } = this.props;

    return (
      <div className="ui action input">
        <input
          onChange={this.onChangeBound}
          placeholder={placeholder}
          type="text"
          value={this.state.value}
        />
        <button
          data-tooltip={tooltip}
          className="ui icon button"
          onClick={this.onSearchClick}
        >
          <i className="filter link icon"></i>
        </button>
      </div>
    );
  }
}

export default FilterField;
