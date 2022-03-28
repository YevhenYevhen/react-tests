import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import AppRouter from "../../router/AppRouter"
import { createReduxStore } from "../../store/store"

export const renderWithRouter = (component, initialRoute = '/') => {
    return render(
        <Provider store={createReduxStore()}>
            <MemoryRouter initialRoute={[initialRoute]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}