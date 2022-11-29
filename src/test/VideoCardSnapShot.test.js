import * as renderer from "react-test-renderer";
import VideoCard from "../components/player/VideoCard";

it("get VideoCard snapshot", () => {
  const poster =
    "https://fed-dss-challenge-qa.s3.amazonaws.com/assets/vid/2/living-stereo-thumb.jpg";
  const videoList = {
    name: "Living Stereo",
    path: "https://fed-dss-challenge-qa.s3.amazonaws.com/assets/vid/2/LivingSt1958.m3u8",
    thumbnail:
      "https://fed-dss-challenge-qa.s3.amazonaws.com/assets/vid/2/living-stereo-thumb.jpg",
  };

  const tree = renderer
    .create(<VideoCard videoList={videoList} poster={poster} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
