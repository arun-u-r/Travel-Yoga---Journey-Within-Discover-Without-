import './App.css';
import Layout from './components/Layout/Layout.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
    <Layout />
    <ToastContainer />
    </div>
  );
}

export default App;
