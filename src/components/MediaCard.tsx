import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function MediaCard ({ n }: any) {
  return (
    <a href={n.url} target='_blank' rel='noreferrer'>
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia sx={{ height: 140 }} image={n.urlToImage} title={n.title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {n.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {n.description}
          </Typography>
        </CardContent>
      </Card>
    </a>
  )
}
