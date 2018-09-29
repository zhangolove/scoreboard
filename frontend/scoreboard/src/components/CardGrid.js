import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import ScoreCard from './ScoreCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class CardGrid extends React.Component {
  state = {
    spacing: '16',
  };

  defaultCards = [
    {
      title: 'Reading 10K',
      amount: 0,
      unit: 'page',
    },
    {
      title: 'Doing pushups',
      amount: 0,
      unit: 'time',
    },
    {
      title: 'Doing situps',
      amount: 0,
      unit: 'time',
    },
    {
      title: 'Practicing American Accent',
      amount: 0,
      unit: 'chapter',
    },
    {
      title: 'Reading Computer Networks',
      amount: 0,
      unit: 'page',
    },
    {
      title: 'Reading finanical books',
      amount: 0,
      unit: 'page',
    },
  ];

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container
            className={classes.demo}
            justify="center"
            spacing={Number(spacing)}
          >
            {this.defaultCards.map(({ title, amount, unit },k) => (
              <Grid key={k} item>
                <ScoreCard
                  className={classes.paper}
                  title={title}
                  amount={amount}
                  unit={unit}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);
