import React,{useState,useEffect} from 'react'
import {countries} from '../api/api';
import {FormControl, NativeSelect} from '@material-ui/core';
import styles from './country.module.css'

const Country = ({handleChange}) => {
    const [fetchCountry, setCountry] = useState([])
    useEffect(() => {
        const fetchcountry=async()=>{
            setCountry(await countries())
        }
        fetchcountry()
        
    }, [])

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue='' onChange={(event)=>handleChange(event.target.value)}>
                <option value=''>Global</option>
                {fetchCountry.map((country,index)=>(
                    <option key={index} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default Country
