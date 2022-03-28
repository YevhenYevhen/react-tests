import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { createReduxStore } from "./store/store";

describe('Router', () => {
    test('should render corresponding components after links are clicked', () => {
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-link')).toBeInTheDocument();
    })

    test('should render error page when the path is wrong', () => {
        render(
            <Provider store={createReduxStore()}>
                <MemoryRouter initialEntries={['/foo']}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    })
})