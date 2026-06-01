import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Celuna brand", () => {
  render(<App />);
  const linkElement = screen.getByText(/Celuna/i);
  expect(linkElement).toBeInTheDocument();
});
