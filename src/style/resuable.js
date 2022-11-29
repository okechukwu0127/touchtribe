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
  font-size: 3rem;

  margin-bottom: ${px2vw(30)};

  @media (min-width: 992px) {
    font-size: 1.5rem;
    margin-bottom: ${px2vw(10)};
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

const FixedData = styled.div`
  position: fixed;
  width: 64%;
  border: px solid black;

  @media (max-width: 992px) {
    width: 100%;
    position: static;
  }
`;

export {
  BoxText,
  BoxTitle,
  Column,
  Row,
  Grid,
  Container,
  BoxShadow,
  FixedData,
};
