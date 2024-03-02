import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Admin/Auth';
import Dashboard from './pages/Admin/Dashboard';
import AdminLayout from './layout/AdminLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/admin/login" element={<Welcome />} />
          <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
