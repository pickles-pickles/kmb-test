import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import React from 'react'

const StyledLink = styled.a(() => ({
  color: 'gray',
  textDecoration: 'none',
  marginRight: 8
}))

export const Footer = () => {
  let targetUrl = 'https://www.google.com'
  return (
    <React.Fragment>
      <Box component='div' m={1} sx={{ textAlign: 'center', color: 'gray' }}>
        <StyledLink href={targetUrl} target='_blank' rel='noreferrer'>
          Privacy ·
        </StyledLink>
        <StyledLink href={targetUrl} target='_blank' rel='noreferrer'>
          Terms ·
        </StyledLink>
        <StyledLink href={targetUrl} target='_blank' rel='noreferrer'>
          Cookies ·
        </StyledLink>
        <StyledLink href={targetUrl} target='_blank' rel='noreferrer'>
          More
        </StyledLink>
      </Box>
    </React.Fragment>
  )
}
