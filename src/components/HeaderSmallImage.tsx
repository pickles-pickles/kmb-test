import React from 'react'

export const HeaderSmallImage = () => {
  return (
    <React.Fragment>
      <img
        src='https://www.treehugger.com/thmb/Y5reVpe2tn68Wqn4YQrO_e5vJQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__06__nature-phpoto-day-squirrel-6b50719b524c4ecbb3152a32baa38367.jpg'
        alt='small squirrel'
        width={150}
        height={150}
        style={{
          position: 'absolute',
          bottom: '-15px',
          left: 20,
          border: '8px solid white',
          outline: '1px solid gray',
          borderRadius: 4
        }}
      />
    </React.Fragment>
  )
}
