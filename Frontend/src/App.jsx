import './App.css'
import Box from '@mui/material/Box';
import Home from './Pages/Home';
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_PORT;
axios.defaults.withCredentials = true;
function App() {


  return (
    <Box>
    <Home/>
    </Box>
  )
}

export default App
