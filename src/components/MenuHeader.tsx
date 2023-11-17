import React from 'react'
import {
  userInitialsSelector,
  userNameSelector
} from '../state-management/slices/appSlice'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'

export const MenuHeader = () => {
  const userInitials = useSelector(userInitialsSelector)
  const userName = useSelector(userNameSelector)
  return (
    <React.Fragment>
      <Box
        component='span'
        m='{1}'
        sx={{
          color: 'white',
          /* background: '#4B90E1', */
          border: '4px solid #A0C4EF',
          borderRadius: '50%',
          textAlign: 'center',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 24,
          height: 24,
          fontSize: 18,
          position: 'relative'
        }}
      >
        <span style={{ position: 'relative' }}>{userInitials}</span>
      </Box>
      <Box component='span' m={1} sx={{ fontSize: 14 }}>
        Hi {userName.split(' ')[0]}
      </Box>
    </React.Fragment>
  )
}
