import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import '@testing-library/jest-dom/extend-expect';

describe("Testing Login Page", () => {
  it("checks if username element is present or not", async () => {
    render(<Login />);
    const userNameElement = screen.getByPlaceholderText(/Username/i);
    expect(userNameElement).toBeInTheDocument();
  });

  it("onchange event of username", async () => {
    render(<Login />);
    const userNameElement = screen.getByPlaceholderText(/Username/i);
    fireEvent.change(userNameElement, { target: { value: "Nikhil" } });

    expect(userNameElement.value).toBe("Nikhil");
 
  });

  it("checks if password element is present or not", async () => {
    render(<Login />);
    const passwordElement = screen.getByPlaceholderText(/Password/i);
    expect(passwordElement).toBeInTheDocument();
  });

  it("onchange event of Password", async () => {
    render(<Login />);
    const passwordElement = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordElement, { target: { value: "123" } });

    expect(passwordElement.value).toBe("123");

  });

  it("checks if login button is present or not", async() =>{
    render(<Login />);
    const loginButton = screen.getByRole("button", { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  })

  it("validate username and Password on clicking loginButton", async() =>{
    render(<Login />);
    const userNameElement = screen.getByPlaceholderText(/Username/i);
    const passwordElement = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(userNameElement, { target: { value: "Nikhil" } });
    fireEvent.change(passwordElement, { target: { value: "123" } });
    const loginButton = screen.getByRole("button", { name: /Login/i });
    fireEvent.click(loginButton);
    expect(userNameElement.value).toBe("Nikhil");
    expect(passwordElement.value).toBe("123");
   
  } )


  
});
