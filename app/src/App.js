import Home from "./Components/Home";
import AddedNotes from "./Components/AddedNotes";
import {Provider}from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import store from "./store";
import 'material-icons/iconfont/material-icons.scss';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addedNotes' element={<AddedNotes/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
   
    </>
  );
}

export default App;
