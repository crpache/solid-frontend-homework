import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store/store'
import Theme from './style/theme'

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>,
  document.getElementById('root')
)
