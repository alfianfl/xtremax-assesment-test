import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Map from './components/Map';
import DetailModal from './components/Modal/DetailModal';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="relative flex">
      <Provider store={store}>
        <Sidebar />
        <Header />
        <Map />
        <DetailModal />
      </Provider>
    </div>
  );
}

export default App;
