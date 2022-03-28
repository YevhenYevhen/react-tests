/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/AppRouter";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import Users from "./Users";

jest.mock('axios');

describe('Users test', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                },
            ]
        };
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('renders', async () => {
        axios.get.mockReturnValue(response);
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        );
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    })

    test('should redirect to details page', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(<Users/>);
        const users = await screen.findAllByTestId('user-item');
        userEvent.click(users[0]);
        expect(screen.getByTestId('user-page')).toBeInTheDocument();

    })
})

