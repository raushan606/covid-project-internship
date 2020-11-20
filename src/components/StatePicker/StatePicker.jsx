import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CountUp from 'react-countup'
import "../../api";
import axios from "axios";

const url = "https://api.covid19india.org/data.json";

const res = [];

function createData(statename, confirmed, recovered, deaths) {
  return { statename, confirmed, recovered, deaths };
}

const fetchData = async () => {
  try {
    const data = await axios.get(url);
    var i;
    for (i = 1; i <= 37; i++) {
      res.push(
        createData(
          data.data.statewise[i].state,
          data.data.statewise[i].confirmed,
          data.data.statewise[i].recovered,
          data.data.statewise[i].deaths
        )
      );
    }
  } catch (e) {}
};

fetchData();
console.log(res);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={9} component={Card}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>State</StyledTableCell>
                <StyledTableCell align="right">Confirmed</StyledTableCell>
                <StyledTableCell align="right">Recovered</StyledTableCell>
                <StyledTableCell align="right">Deaths</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {res.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.statename}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <CountUp start={0} end={row.confirmed} duration={2.75} separator="," />  
                  </StyledTableCell>
                  <StyledTableCell align="right">
                  <CountUp start={0} end={row.recovered} duration={2.75} separator="," />
                  </StyledTableCell>
                  <StyledTableCell align="right">  <CountUp start={0} end={row.deaths} duration={2.75} separator="," /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
