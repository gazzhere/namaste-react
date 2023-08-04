import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appstore";
import "@testing-library/jest-dom"
it("should load header componen with in login buttton ", () => {
  render(
    <BrowserRouter>
           <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
  // const loginButton=screen.getByRole("button")
  // expect(loginButton).toBeInTheDocument();
  const loginButton=screen.getByRole("button",{name:"login"})
  expect(loginButton).toBeInTheDocument();
});


it("should load header componen with cart items zero ", () => {
  render(
    <BrowserRouter>
           <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
  // const loginButton=screen.getByRole("button")
  // expect(loginButton).toBeInTheDocument();
  const cartItems=screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument();
});

it("should change login button to log to logout with click", () => {
  render(
    <BrowserRouter>
           <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
  const loginButton=screen.getByRole("button",{name:"login"})
  expect(loginButton).toBeInTheDocument();

  fireEvent.click(loginButton);
  const logoutButton=screen.getByRole("button",{name:"logout"})
  expect(logoutButton).toBeInTheDocument();

  expect(logoutButton).toBeInTheDocument();
});