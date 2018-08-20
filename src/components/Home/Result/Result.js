import React, { Component } from 'react';
import './Result.css';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

class Result extends Component {

  render() {
    return (
       <Card className='Card' raised={true}>
        <Typography className='Title' color='textSecondary'>
          {this.props.title}
        </Typography>
        <CardContent className='Value'>
          {`${Math.round(this.props.value * 10) / 10}${this.props.variant}`}
        </CardContent>
      </Card>
    );
  }

}

export default Result;
