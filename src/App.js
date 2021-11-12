
import './App.css';
import React , {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayWeater from './components/DisplayWeater';

function App() {
  const dogApi = '82e55546-412b-4c3a-a5d1-ca4a51d2e2f9'
  const [cityname,setCityname] = useState('chennai')
  const [data,setData] = useState([])
  const [loading, setloading] = useState(true)
  

  const apiKey = '7588a14d7c4f998bd853a166300f81e5'
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`


useEffect(() => {

  const fetchItems = async() => {
    try {
      
      const result = await axios(api)
      // console.log(result.data.main.temp)
      
      setData(result.data)
      setloading(false)
    } catch (error) {
      console.log(error);
    }


  
  }
  fetchItems()
}, [cityname])



  return (
    
      <div className="container">
        <DisplayWeater data = {data} cityname = {cityname}  loading = {loading} getQuery = {(q) => setCityname(q)} />
      </div>
    
  );
}

export default App;
