import React from "react";
import VideoList from "./components/list/VideoList";
import { Container, Row, Column, FixedData } from "./style/resuable";
import VideoPlayerCard from "./components/player/VideoContainer";

export default function Main() {
  return (
    <Container>
      <Row>
        <Column xs="12" sm="12" md="8" lg="8">
          <FixedData>
            <VideoPlayerCard />
          </FixedData>
        </Column>
        <Column xs="12" sm="12" md="4" lg="4">
         
          <VideoList />
        </Column>
      </Row>
    </Container>
  );
}
