import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe.skip('Test App', () => {
  test('renders the component', () => {
    render(<App />);
    const h1 = screen.getByText(/hello, world!/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(h1).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('doesn\'t render a non-existent component', () => {
    render(<App />);
    const h1 = screen.queryByText(/hello, world!!!/i);
    expect(h1).toBeNull();
  })

  test('conditionally renders a component', async () => {
    render(<App />);
    const div = await screen.findByText(/data/i);
    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({ color: 'red' });
  })

  test('toggle button should control if the element is in the document', () => {
    render(<App />);
    const toggleButton = screen.getByTestId('toggle-button');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  })

  test('input change should update the value of the element', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value.../i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // only input event
    // fireEvent.input(input, {
    //   target: { value: 'hello' }
    // });
    //input, keydown, keyup, etc. events 
    userEvent.type(input, 'hello');
    expect(screen.queryByTestId('value-elem')).toContainHTML('hello');
  })
})