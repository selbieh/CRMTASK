import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {styles} from './useStyle';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



class AllClients extends Component {
    state = { 
        clients:[]
     }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/Clients/')
        .then(res=>{
            this.setState({clients:res.data.results})
        })
    }
    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
            <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        this.props.history.push('/add-client')
                    }}
                    color='secondary'
                    >
                    ADD new Client
                    </Link>
            <Paper className={classes.root}>

            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">LAST NAME</TableCell>
                  <TableCell align="right">FIRST NAME</TableCell>
                  <TableCell align="right">COMPANY</TableCell>
                  <TableCell align="right">PHONE</TableCell>
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">Authorization_Forms</TableCell>
                  <TableCell align="right">Reseller</TableCell>
                  <TableCell align="right">Client_may_have_Private</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.clients.map(element => (
                  <TableRow key={element.id}>
                    <TableCell component="th" scope="row">
                      {element.id}
                    </TableCell>
                    <TableCell align="right">{element.Last_Name}</TableCell>
                    <TableCell align="right">{element.First_Name}</TableCell>
                    <TableCell align="right">{element.Company}</TableCell>
                    <TableCell align="right">{element.Phone}</TableCell>
                    <TableCell align="right">{element.Email}</TableCell>
                    <TableCell align="right">{element.Authorization_Forms}</TableCell>
                    <TableCell align="right">{element.Reseller}</TableCell>
                    <TableCell align="right">{element.Client_may_have_Private}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </React.Fragment>
        );
    }
}

export default withStyles(styles)(AllClients);