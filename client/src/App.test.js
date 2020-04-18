import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "@testing-library/react";
import Title from "./components/Title";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Proper title rendering", () => {
  const {getByText} = render(<Title />);
  getByText(/Woman Soccer Players/i);
});

test("is darkmode working", () => {
  const {getByTestId} = render(<Title />);
  getByTestId(/darkmode/i);
});