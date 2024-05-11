import { fireEvent, render,screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument();
});

it("should load header component with cart 0 items",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByText("Cart - (0 items)");
    expect(loginButton).toBeInTheDocument();
});

it("should load header component with cart",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
});

it("should convert from login to logout on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"logout"});
    expect(logoutButton).toBeInTheDocument();
});