import store from './Store/Store.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <>
  <Provider store={store}>
    <App />
    </Provider>
  </>,
)