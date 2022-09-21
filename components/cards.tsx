
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from './Button';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider  } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    warning: {
      main: '#ffc107',
    },
    success: {
      main: '#69f16e',
    },
  },
});

interface Props {
  image: string;
  title: string;
  description: string;
  GHlink?: string;
  blog?: string;
  youtube?: string;
}
const imgStyle = {
  minWidth: '60px',
  minHeight: '100px',
};
const cardStyle= {
  maxWidth: '260px',
  maxHeight: '400px',
  boxShadow: "5px 5px #a2b2c9",
  backgroundColor: "#203655",
}
const contentStyle = {
  maxHigh: '200px',
}
const ActionStyle={
  display: 'flex',
}

export default function MediaCard( {image, title, description, GHlink, blog, youtube}: Props ) {
  return (
    <Card style={cardStyle} >
      <CardMedia
        style={imgStyle}
        component="img"
        image={image}
      />
      <CardContent >
        <Typography gutterBottom variant="h6" component="div" color="white">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={ActionStyle} >
        <ThemeProvider theme={theme}>
          
          {
            GHlink? <Button label='Github' href={GHlink} className='text-green-500 hover:bg-green-700/20 px-2'/>: null
          }
          {
            blog? <Button label='Blog' href={blog}  className='text-yellow-500 hover:bg-yellow-700/20 px-2'/>: null
          }
          {
            youtube? <Button label='Youtube' href={youtube}  className='text-red-500 hover:bg-red-700/20 px-2'/> : null
          }
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}
