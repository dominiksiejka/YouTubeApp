import React, { Component } from "react";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import youtube from "./youtube";
import DisplayedVideo from "./DisplayedVideo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }
  state = {
    fetchedData: [],
    selectedVideo: "",
  };
  handleFormSubmit = async (inputVal) => {
    const response = await youtube.get("/search", {
      params: {
        q: inputVal,
      },
    });
    if (response) {
      this.setState({
        fetchedData: response.data.items,
        selectedVideo: "",
      });
    } else return;
  };
  componentDidMount = () => {
    this.handleFormSubmit("sia");
  };
  handleSelectedVideo = (currentVideo) => {
    const clickedItem = [...this.state.fetchedData][currentVideo];
    this.setState({
      selectedVideo: clickedItem,
    });
    setTimeout(() => {
      const item = this.divRef.current;
      item.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };
  render() {
    const ifSelectedVideo = this.state.selectedVideo && (
      <DisplayedVideo video={this.state.selectedVideo} refe={this.divRef} />
    );
    return (
      <div className='container'>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        {ifSelectedVideo}
        <VideoList
          data={this.state.fetchedData}
          handleSelectedVideo={this.handleSelectedVideo}
        />
      </div>
    );
  }
}

export default App;
