import axios from "axios";
const key = "AIzaSyBvG4__ldN2fd7xx25lJggfcmG_WZVR7R4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: key,
  },
});
