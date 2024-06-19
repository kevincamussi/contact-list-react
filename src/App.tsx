import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import Home from './Pages/Home'
import RegisterPage from './Pages/Register'
import GlobalStyle, { MainContainer } from './styles/styles'
import lightTheme from './themes/light'
import { store, persistor } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Register',
    element: <RegisterPage />
  }
])

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <MainContainer>
            <RouterProvider router={rotas} />
          </MainContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
