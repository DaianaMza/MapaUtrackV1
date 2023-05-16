import './App.css';
import Index from './views/login';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
     <Routes>
      <Route path="/" element={<Index />} />

    </Routes>
  );
}

export default App;
