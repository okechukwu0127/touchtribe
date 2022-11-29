import styled from "styled-components";
import px2vw from "../utils/px2vw";

const ImageBox = styled.div`
  border: 0px solid red;
  box-shadow: 0px 1px 6px rgba(25, 50, 47, 0.08),
    0px 0px 0px rgba(18, 71, 52, 0.02), 1px 0px 0px rgba(18, 71, 52, 0.03);
  width: 300px;
  text-align: center;
`;

const VideoPlayerStyle = styled.div`
  width: 100%;
  height: ${px2vw(500)};
  border: 0px solid red;
  
  

  @media (max-width: 992px) {
    width: 100%;
    height: ${px2vw(850)};
    border: 0px solid red;
    
  }
`;

const LoadingMore = styled.div`
  text-align: center;
`;

const ImgResponsive = styled.img`
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 0px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  cursor: pointer;

  height: 250px;
  margin-left: 0px;
  margin-right: 0px;

  @media (min-width: 992px) {
    height: ${px2vw(180)};
  }
`;

const SideVideoTitle = styled.div`
  margin-top: ${px2vw(0)};
  margin-bottom: ${px2vw(15)};
  font-weight: 400;
  color: #666;
  font-size: 2.8rem;
  height: 250px;
  border: 0px solid red;
  cursor: pointer;

  width: auto;
  padding: 10px;

  @media (min-width: 992px) {
    margin-top: ${px2vw(-20)};
    height: auto;
    font-size: 1rem;
    width: 300px;
    text-align: center;

    margin-bottom: ${px2vw(25)};
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),
      0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  }
`;

const UpNext = styled.div`
  color: #ccc;
  font-size: 1rem;
  padding: ${px2vw(10)};
  padding-left: ${px2vw(20)};

  margin-top: -20px;

  @media (max-width: 992px) {
    color: #ccc;
    font-size: 2.3rem;
    padding: ${px2vw(10)};
    padding-left: ${px2vw(20)};
  }
`;

const LoaderImage = styled.img`
  width: 50px;
  align-self: center;
`;

export {
  UpNext,
  ImgResponsive,
  SideVideoTitle,
  ImageBox,
  VideoPlayerStyle,
  LoadingMore,
  LoaderImage,
};
