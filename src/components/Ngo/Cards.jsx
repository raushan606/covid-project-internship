import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";

import styles from "./Cards.module.css";

const Info = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography variant="h5" color="textPrimary" gutterBottom>
              Rahat covid
            </Typography>
            <Typography component="h2" color="textSecondary">
              Address: GOONJ, J-93, Sarita Vihar, New Delhi- 110 076
            </Typography>
            <Typography>
              Contact: 011- 41401216, 26972351 Timings: 10 am to 5 pm, Sunday
              closed
            </Typography>
            <Typography variant="body2" component="p">
              Website: www.goonj.org
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography variant="h5" color="textPrimary" gutterBottom>
              Akshayapatra NGO
            </Typography>
            <Typography component="h2" color="textSecondary">
              Address: The Akshaya Patra Foundation #72, 3rd Floor, 3rd Main
              Road, 1st & 2nd Stage Yeshwantpur Industrial Suburb, Rajajinagar
              Ward No. 10 Bengaluru – 560022 India
            </Typography>
            <Typography>Contact: +91 80 3014 3400</Typography>
            <Typography variant="body2" component="p">
              Website: https://www.akshayapatra.org
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography variant="h5" color="textPrimary" gutterBottom>
              Action Against Thunder
            </Typography>
            <Typography>Contact: contact@actionagainsthunger.in</Typography>
            <Typography variant="body2" component="p">
              Website: https://www.actionagainsthunger.in
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
