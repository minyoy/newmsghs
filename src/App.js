import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Empty from './component/Empty';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/"/>
          <Route path="/week/:id" element={<Main />} />
          <Route element={<Empty/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
