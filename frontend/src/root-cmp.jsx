import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppHeader } from '../src/cmps/AppHeader'
import { AppFooter } from '../src/cmps/AppFooter'
import { store } from './store/store.js'
import './assets/scss/main.scss'

// import { store } from './store/store'
import { HomePage } from './pages/HomePage'
import { StayDetails } from './pages/StayDetails'


export function App() {
  return (
    <>

     <Provider store={store}>

      <Router>
        <section className="main-layout app">
          <AppHeader />
          <main>
            <Routes>
              <Route element={<HomePage />} path="/" />
              {/* <Route element={<StayDetails />} path="/" /> */}

            </Routes>
          </main>
          <AppFooter />
        </section>
      </Router>
      {/* <UserMsg /> */}

     </Provider>

    </>
  )
}
