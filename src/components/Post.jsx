import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Card sx={{
      margin:5
    }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">R</Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrip and Chorizo Paella"
          subheader="September 14, 2016"
          />
          <CardMedia 
            component="img"
            height="20%"
            image="https://media.istockphoto.com/id/1031600274/photo/spanish-seafood-paella-closeup-view.jpg?b=1&s=612x612&w=0&k=20&c=OApe0KVKc4KXr8g_SLutosVNL4qqmC3mNLVESMdJk-4="
            alt="Paella dish"
          />
          <CardContent>
            <Typography
            variant="body2" color="text.secondary"
            >
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />} 
                checkedIcon={<Favorite sx={{
                  color:"red"
                }} />}
                
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
      </Card>
  )
}

export default Post