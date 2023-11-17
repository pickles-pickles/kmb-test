import Grid from '@mui/material/Grid'
import React from 'react'
import { useSelector } from 'react-redux'
import { newsListSelector } from '../state-management/slices/newsSlice'
import MediaCard from './MediaCard'

export const CardsContainer = () => {
  const newsList = useSelector(newsListSelector)
  return (
    <Grid container spacing={2}>
      {newsList.map(n => (
        <Grid sm={12} lg={4}>
          <MediaCard n={n} />
        </Grid>
      ))}
    </Grid>
  )
}
