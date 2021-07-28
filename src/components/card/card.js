import React from 'react'
import CountUp from 'react-countup'
import {Grid, Card, CardContent,Typography} from '@material-ui/core'

const CustomCard = ({className,value,title,description,date}) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={className}>
        <CardContent>
            <Typography color="textSecondary">{title}</Typography>
            <Typography variant="h5">
                <CountUp start={0} end={value} duration={4} separator=","/>
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2">{description}</Typography>
        </CardContent>
    </Grid>
    )
}

export default CustomCard
