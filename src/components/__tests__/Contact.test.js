import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  // Assertion
  expect(heading).toBeInTheDocument();
});
test("Should load button inside my component", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  // Assertion
  expect(button).toBeInTheDocument();
});
// test("Should load button inside my component", () => {
//   render(<Contact />);
//   const button = screen.getByRole("Submit");
//   // Assertion
//   expect(button).toBeInTheDocument();
// });
test("Should load input name  inside my conatct component", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("name");
  // Assertion
  expect(inputName).toBeInTheDocument();
});
test("should load 2 input boxes on the cotact component",()=>{
    render(<Contact/>);
    const inputBoxes=screen.getAllByRole("textbox");
    // querring
    console.log(inputBoxes.length)
    expect(inputBoxes.length).toBe(2);

})
