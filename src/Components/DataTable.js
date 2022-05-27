import React,{useContext,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserContext from '../context/UserContext';

function createData(id, movie,genre,rating,action) {
    return {id, movie,genre,rating,action};
  }
  
 
function DataTable() {

  const userdata = useContext(UserContext);
  
  useEffect(() =>{
    userdata.collectdata();
  }, [userdata]);
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
          {userdata.row.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center' component="th" scope="row">
                0
              </TableCell>
              <TableCell align="center">{userdata.Movies}</TableCell>
              <TableCell align="center">{userdata.Genres}</TableCell>
              <TableCell align="center">{userdata.Ratings}</TableCell>
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