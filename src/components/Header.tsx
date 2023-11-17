import React from 'react'
import { MenuAppBar } from './MenuAppBar'
import { useDispatch } from 'react-redux'
import {
  setUserInitials,
  setUserName
} from '../state-management/slices/appSlice'
import { Box } from '@mui/material'
import { HeaderBackgroundImage } from './HeaderBackgroundImage'

export const Header = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setUserInitials('AT'))
    dispatch(setUserName('Andreas Trantidis'))

    return () => {}
  }, [dispatch])

  return (
    <React.Fragment>
      <MenuAppBar />
      <Box component='div' m={1}>
        <HeaderBackgroundImage />
      </Box>
    </React.Fragment>
  )
}
