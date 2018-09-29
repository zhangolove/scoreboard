import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 200,
    height: 220,
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
  },
  title: {
    marginBottom: 4,
  },
  cardGrid: {
    "border-color": "red",
    "border-style": "solid",
  },
  cardContent: {
    "border-color": "green",
    "border-style": "solid",
  },
  cardAction: {
    "display": "flex",
    "justify-content": "space-around",
  },
};

function ScoreCard(props) {
  const { classes, title, amount, unit } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="headline" component="h2" className={classes.title}>
          { title }
        </Typography>
        <Typography component="p">
          { amount }
          <br />
          { unit }
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button size="small">-</Button>
        <Button size="small">+</Button>
      </CardActions>
    </Card>
  );
}

ScoreCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default withStyles(styles)(ScoreCard);
