import React,{useState,useEffect} from 'react';
import styles from './App.module.css';
import Card from './components/cards/cards';
import {fetchCountry} from './components/api/api';
import Country from './components/countrySelect/country';
import Chart from './components/chart/chart';

const App = () => {

  const [state, setData] = useState({
    data:{},
    country:''
    })

  useEffect(() => {
    const mode=async()=>{
      const data= await fetchCountry();
      setData({data});
    }
    mode()
  }, [])
  console.log(state);

  const handleChange=async(country)=>{
    const data= await fetchCountry(country)
    setData({data,country:country})
  }

  const {data,country}=state;
  console.log(data)

  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://www.kabul.es/wp-content/uploads/2020/11/covid-19_-_teaser.jpg" 
      alt="covid Logo"/>
      <Card data={data}/>
      <Country handleChange={handleChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}

export default App
