import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Home from './Pages/Home'
import RegisterPage from './Pages/Register'
import GlobalStyle, { MainContainer } from './styles/styles'
import lightTheme from './themes/light'

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
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <MainContainer>
        <RouterProvider router={rotas} />
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
