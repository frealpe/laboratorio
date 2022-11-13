import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AdminApp } from './AdminApp'
import { store } from './store'
import 'bootstrap/scss/bootstrap.scss'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
      <Provider store={store}>

          <BrowserRouter>    
            <AdminApp />
          </BrowserRouter>

      </Provider>

//  </React.StrictMode>
)
