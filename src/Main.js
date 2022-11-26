import React from "react";
import NewVideoList from "./components/NewVideoList";
import {
  Container,
  BoxTitle,
  BoxText,
  Row,
  Column,
  UpNext,
  VideoPlayer,
  FixedData,
} from "./style";

export default function Main() {
  return (
    <Container>
      <Row>
        <Column xs="12" sm="12" md="8" lg="8">
          <FixedData>
           
              <BoxTitle>Video Title</BoxTitle>
              <BoxText>video player</BoxText>
              <VideoPlayer>[][][]</VideoPlayer>
          
          </FixedData>
        </Column>
        <Column xs="12" sm="12" md="4" lg="4">
          <UpNext> Up Next</UpNext>
          <NewVideoList />
        </Column>
      </Row>
    </Container>
  );
}
