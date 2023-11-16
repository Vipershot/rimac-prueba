import Navbar from './components/Navbar/Navbar'
import axios from "./axios";


function App() {

axios.get('/users').then(response => {
 console.log(response.data);
}).catch(error => {
 console.error(error);
});


  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
