import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";

describe('Navbar', () => {
    test('should render main page after main link is clicked', () => {
        renderWithRouter(<Navbar />);
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })
    test('should render about page after about link is clicked', () => {
        renderWithRouter(<Navbar />);
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })
    test('should render users page after users link is clicked', () => {
        renderWithRouter(<Navbar />);
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })
})
