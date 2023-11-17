import React from 'react'
import { Header } from '../components/Header'
import { MainPageContent } from '../components/MainPageContent'
import { Footer } from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import {
  fetchAllNews,
  newsListErrorSelector,
  newsListIsLoadingSelector,
  newsListSuccessSelector
} from '../state-management/slices/newsSlice'
import LinearProgress from '@mui/material/LinearProgress'
import { CardsContainer } from '../components/CardsContainer'
import Box from '@mui/material/Box'

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(newsListIsLoadingSelector),
    error = useSelector(newsListErrorSelector),
    success = useSelector(newsListSuccessSelector)

  React.useEffect(() => {
    dispatch(fetchAllNews())
  }, [dispatch])
  return (
    <React.Fragment>
      <Header />
      {isLoading && (
        <>
          <LinearProgress color='secondary' />
          <LinearProgress color='success' />
          <LinearProgress color='inherit' />
        </>
      )}
      {success && (
        <Box component='div'>
          <CardsContainer />
        </Box>
      )}
      {error && 'Something went wrong'}
      <MainPageContent />
      <Footer />
    </React.Fragment>
  )
}
