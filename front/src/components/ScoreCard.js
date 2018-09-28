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
    minWidth: 100,
  },
  title: {
    marginBottom: 4,
  },
};

function ScoreCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" component="h2" className={classes.title}>
          Workout
        </Typography>
        <Typography component="p">
          10
          <br />
          minutes
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">+</Button>
        <Button size="small">-</Button>
      </CardActions>
    </Card>
  );
}

ScoreCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScoreCard);
