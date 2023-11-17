import React from 'react'
import { Header } from '../components/Header'
import { MainPageContent } from '../components/MainPageContent'
import { Footer } from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import {
  fetchAllNews,
  fetchFilterdNews,
  newsListErrorSelector,
  newsListIsLoadingSelector,
  newsListSuccessSelector
} from '../state-management/slices/newsSlice'
import LinearProgress from '@mui/material/LinearProgress'
import { CardsContainer } from '../components/CardsContainer'
import Box from '@mui/material/Box'
import { useLocation } from 'react-router-dom'

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(newsListIsLoadingSelector),
    error = useSelector(newsListErrorSelector),
    success = useSelector(newsListSuccessSelector)

  const location = useLocation()
  React.useEffect(() => {
    console.log('params', location)
    if (location.search) {
      var locationToObj = JSON.parse(
        '{"' +
          decodeURI(location.search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      )
    } else {
      locationToObj = {}
    }

    if (
      (locationToObj.page || locationToObj['?page']) &&
      (locationToObj.pageSize || locationToObj['?pageSize'])
    ) {
      const page = locationToObj.page || locationToObj['?page']
      const pageSize = locationToObj.pageSize || locationToObj['?pageSize']
      const params = { page, pageSize }
      dispatch(fetchFilterdNews(params))
    } else {
      dispatch(fetchAllNews())
    }
  }, [dispatch, location])
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
