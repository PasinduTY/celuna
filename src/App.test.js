import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Celuna brand text", () => {
  render(<App />);
  const linkElement = screen.getByText(/celuna/i);
  expect(linkElement).toBeInTheDocument();
});
