import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './context/useAuth'; // Updated import

import './App.css';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
    const [authUser,] = useAuth();
    console.log(authUser);
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/Books"
                    element={authUser ? <Books /> : <Navigate to="/Login" />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
