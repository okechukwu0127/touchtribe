import styled from "styled-components";
import px2vw from "../utils/px2vw";
import getWidthString from "../utils/getWidthString";

const Container = styled.div`
  justify-content: flex-start;
  margin: ${px2vw(5)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Grid = styled.div``;

const Row = styled.div`
  &:after {
    content: "";
    clear: both;
    display: table;
  }
  padding: 10px;
`;

const Column = styled.div`
  float: left;
  border: 0px solid #ccc;
  padding: ${px2vw(10)};
  ${({ xs }) => (xs ? getWidthString(xs) : "width:100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
const BoxShadow = styled.div`
  box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),
    0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
`;
const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const ImageBox = styled.div`
  border: 0px solid red;
  box-shadow: 0px 1px 6px rgba(25, 50, 47, 0.08),
    0px 0px 0px rgba(18, 71, 52, 0.02), 1px 0px 0px rgba(18, 71, 52, 0.03);
  width: 300px;
  text-align: center;
`;

const FixedData = styled.div`
  position: fixed;
  width: 64%;
  border: 2px solid black;

  @media (max-width: 992px) {
    width: 100%;
    position: static;
  }
`;

const VideoPlayer = styled.div`
  width: 100%;
  height: ${px2vw(500)};
  border: 1px solid red;

  @media (max-width: 992px) {
    width: 100%;
    height: ${px2vw(1100)};
    border: 1px solid red;
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
  font-size: 1.2rem;
  padding: ${px2vw(10)};
  margin-top: -20px;
`;


const LoaderImage = styled.img`
  width: 50px;
  align-self: center;
`;



export {
  BoxText,
  BoxTitle,
  Column,
  Row,
  Grid,
  Container,
  UpNext,
  ImgResponsive,
  SideVideoTitle,
  ImageBox,
  BoxShadow,
  VideoPlayer,
  LoadingMore,
  FixedData,
  LoaderImage,
};
