import React from 'react'
import styles from './cards.module.css';
import {Grid, recomposeColor} from '@material-ui/core'
import Card from '../card/card'
import cn from 'classnames'

const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
    if(!confirmed){
        return <h1>Loading....</h1>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent='center'>
               <Card
                title="Infected"
                description=''
                value={confirmed.value}
                date={new Date(lastUpdate).toDateString()}
                className={cn(styles.card,styles.infected)} 
                description="Number of Active Case of COVID-19"
                />
               <Card
                title="Recovered"
                description=''
                value={recovered.value}
                date={new Date(lastUpdate).toDateString()}
                className={cn(styles.card,styles.recover)}
                description="Number of Recoveries from COVID-19"
                />
               <Card
                title="Deaths"
                description=''
                value={deaths.value}
                date={new Date(lastUpdate).toDateString()}
                className={cn(styles.card,styles.deaths)}
                description="Number of Deaths Caused by COVID-19"
                />
            </Grid>
        </div>
    )
}

export default Cards
