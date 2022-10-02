import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Map from './components/Map';
import Modal from './components/Modal';
import { Provider } from 'redux';
import store from './redux/store';

function App() {
  return (
    <div className="relative flex">
      <Provider Provider={store}>
        <Sidebar />
        <Header />
        <Map />
        <Modal />
      </Provider>
    </div>
  );
}

export default App;
