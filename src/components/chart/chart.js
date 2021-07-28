import React,{useEffect,useState} from 'react'
import {fetchDailyData} from '../api/api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './chart.module.css'

const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchApi=async()=>{
            const fetchData=await fetchDailyData()
            console.log(fetchData)
            setDailyData(fetchData)
        }
        fetchApi();
    }, [])

    const LineChart=dailyData.length ?(
        <Line data={{
            labels:dailyData.map(({date})=>date),
            datasets:[
                {
                    data:dailyData.map(({confirmed})=>confirmed),    
                    label:'Infected',
                    borderColor:'blue',
                    fill:true,
                },
                {
                    data:dailyData.map(({deaths})=>deaths),
                    label:"Deaths",
                    borderColor:"red",
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }
            ]
    
        }}
    />
    ):null;
        console.log(confirmed);
        const barChart=(confirmed?(
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[
                {
                    label:'People',
                    backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }
            ]
        }}
        
        />
        ):null);
    return (
        <div className={styles.container}>
            {country?barChart:LineChart}
        </div>
    )
}

export default Chart
