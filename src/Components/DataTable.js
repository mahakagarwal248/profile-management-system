import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import UserContext from '../context/UserContext';

function createData(id, movie,genre,rating,action) {
    return {id, movie,genre,rating,action};
  }
  
  const rows = [
    createData('1', 'Skyfall','action', '7.8'),
  ];

function DataTable() {

  // const userdata = useContext(UserContext);
  
  // useEffect(() =>{
  //   userdata.collectdata();
  // }, []);
  return (
    <div className='mt-3' style={{width:'50%',margin:'auto'}}>
        <TableContainer component={Paper} style={{borderRadius:'12px',boxShadow:'none'}}>
      <Table sx={{ minWidth: 450 }} style={{borderRadius:'50px'}} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:'#009999'}}>
            <TableCell align="center" style={{color:'white',fontSize:'16px'}}>ID</TableCell>
            <TableCell align="center" style={{color:'white',fontSize:'16px'}}>Movie</TableCell>
            <TableCell align="center" style={{color:'white',fontSize:'16px'}}>Genre</TableCell>
            <TableCell align="center" style={{color:'white',fontSize:'16px'}}>Rating</TableCell>
            <TableCell align="center" style={{color:'white',fontSize:'16px'}}>Action</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>

    <TableContainer component={Paper} style={{background:'transparent',boxShadow:'none',border:'none'}}>
      <Table sx={{ minWidth: 450 }} style={{borderRadius:'50px'}} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.movie}</TableCell>
              <TableCell align="center">{row.genre}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              <TableCell align="center">
                  <button>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DataTable