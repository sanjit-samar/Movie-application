import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     Movie App
    </div>
    </Provider>
  );
}

export default App;
