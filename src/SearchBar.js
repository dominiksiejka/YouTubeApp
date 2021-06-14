import React, { Component } from "react";
import logo from "./images/logo.jpg";
class SearchBar extends Component {
  state = {
    inputVal: "sia",
  };

  handleChangeInput = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleFormSubmit(this.state.inputVal);
    // this.setState({
    //   inputVal: "",
    // });
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        inputVal: "",
      });
    }, 2000);
  };
  render() {
    return (
      <div className='main-header'>
        <img className='logo' src={logo} alt='youTube app logo' />
        <form
          onSubmit={this.handleSubmitForm}
          action=''
          autoCorrect='off'
          autoComplete='off'
        >
          <input
            value={this.state.inputVal}
            onChange={this.handleChangeInput}
            type='text'
          />
          <button className='search-for-video' type='submit'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
