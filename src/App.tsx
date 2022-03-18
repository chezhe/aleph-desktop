import Layout from './components/Layout'
import './App.css'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  )
}

export default App
