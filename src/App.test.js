import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Celuna brand", () => {
  render(<App />);
  const element = screen.getByText(Celuna);
  expect(element).toBeInTheDocument();
});
