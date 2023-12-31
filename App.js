import { Provider } from 'react-redux';
import { store } from './store';
import Home from './pages/home'

export default function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}


