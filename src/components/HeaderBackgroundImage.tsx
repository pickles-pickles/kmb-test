import Box from '@mui/material/Box'
import React from 'react'
import { HeaderSmallImage } from './HeaderSmallImage'

export const HeaderBackgroundImage = () => {
  return (
    <React.Fragment>
      <Box
        component='div'
        m={1}
        sx={{
          backgroundImage:
            "url('https://www.treehugger.com/thmb/Y5reVpe2tn68Wqn4YQrO_e5vJQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__06__nature-phpoto-day-squirrel-6b50719b524c4ecbb3152a32baa38367.jpg')",
          backgroundColor: '#cccccc',
          height: 400,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <HeaderSmallImage />
      </Box>
    </React.Fragment>
  )
}
