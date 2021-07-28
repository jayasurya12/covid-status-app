import axios from 'axios'
const url='https://covid19.mathdro.id/api'

/////////////---------------country----data---------//////////////////////
export const fetchCountry=async(country)=>{
    let countryUrl=url;
    if(country){
        countryUrl=`${url}/countries/${country}`
    }
    try {
        const {data:{confirmed,deaths,recovered,lastUpdate}}=await axios.get(countryUrl)
        const modifiedData={confirmed,deaths,recovered,lastUpdate};
        return modifiedData;
        
    } catch (error) {
        console.log(error);
    }
}


//////////////-----------modified---data-----used to where is chart---////////////
export const fetchDailyData=async()=>{
    try {
        const {data}= await axios.get(`${url}/daily`)
        const modified=data.map((data)=>{
            return{
                confirmed:data.confirmed.total,
                recovered:data.recovered.total,
                deaths:data.deaths.total,
                date:data.reportDate
            }
        })
        return modified;
    } catch (error) {
        console.log(error);
    }
}
///////////////---------total countries Array------////////////////////////

export const countries=async()=>{
    try {
        const {data:{countries}}=await axios.get(`${url}/countries`);
        return countries.map((data)=>data.name)
    } catch (error) {
        console.log(error);
    }
}