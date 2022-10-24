import { Routes, Route } from 'react-router-dom';
import './App.css'
import TestApp from "./pages/TestApp";
import IndexApp from "./pages/IndexApp";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<IndexApp/>}></Route>
        <Route path='/TestApp' element={<TestApp/>}></Route>
      </Routes>
    </>
  );
}

export default App
