/* eslint-disable testing-library/prefer-screen-queries */
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe('Counter', () => {
    test('counter', () => {
        const { getByTestId } = renderTestApp(null, {
            initialRoute: '/',
            initialState : {
                counter: {
                    value: 10
                }
            }
        });
        const incrementButton = getByTestId('increment-button');
        expect(getByTestId('value-title')).toHaveTextContent('0');
        userEvent.click(incrementButton);
        expect(getByTestId('value-title')).toHaveTextContent('1');
    })

})

