// import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react";

import {
  useAppDispatch,
  useAppSelector,
} from "../store/reducers/mocker/test-redux-hooks";

import { testAppSelector } from "../store/reducers/mocker/test-app-selector";

import App from "../App";

jest.mock("../store/reducers/mocker/test-redux-hooks");

describe("test attribute", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testAppSelector);
    useAppDispatch.mockImplementation(() => jest.fn);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("Video Title checker", async () => {
    setTimeout(() => {
      render(<App />);
      expect(
        screen.getByText("A Visit to Wurlitzer").getAttribute("data-title")
      ).toMatch(/videoTitle/);
    }, 1000);
  });
});
