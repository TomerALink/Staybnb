import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppHeader } from '../src/cmps/AppHeader'
import { AppFooter } from '../src/cmps/AppFooter'
import { store } from './store/store.js'
import './assets/scss/main.scss'
import { HomePage } from './pages/HomePage'
import { StayDetails } from './pages/StayDetails'
import { AddStay } from './pages/AddStay.jsx'
import { GoogleAuthenticator } from './cmps/GoogleAuthenticator.jsx'



export function App() {
  return (
    <>
     <Provider store={store}>

      <Router>
        <section className='main-layout app'>
          <AppHeader />
          
          <main>
            <Routes>
              <Route element={<HomePage />} path='/' />
              <Route element={<GoogleAuthenticator />} path='/authenticator' />
              <Route path='/stay/details/:stayId' element={<StayDetails />} />
              <Route path='/stay/add' element={<AddStay/>} />
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
