import logo from './logo.svg';
import 'fontsource-roboto';
import {Typography} from '@material-ui/core';
import {Provider} from 'react-redux';
import {store} from "redux/store";
import {BrowserRouter} from 'react-router-dom';
import {RouterConfig} from "navigation/RouterConfig";
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <>
    <div>
      <Header />
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Provider>
      <Footer />
    </div>
    </>
  );
}

export default App;
