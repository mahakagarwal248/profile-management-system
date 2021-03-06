import React, { useContext, useState } from 'react';
import DataTable from './DataTable';
import UserContext from '../context/UserContext';

function Profile() {
  const [movie, setMovie] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  // const [rows,setRow] = useState([])
  const rows =[]
  const userdata = useContext(UserContext);
  
  function handleonsubmit(){
    rows.push({
      movie: movie,
      genre:genre,
      rating:rating
    })
    console.log(rows)
    userdata.setRow(rows)
    // setRow([...rows],{
    //   movie: movie,
    //   genre: genre,
    //   rating: rating,
    // })
    // localStorage.setItem("moviedata",JSON.stringify(rows))
    // userdata.setMovies(movie);
    // userdata.setGenres(genre);
    // userdata.setRatings(rating);
    
  }
  return (
    <div className= 'm-auto text-center pt-5 px-3'>
        <div style={{display:'flex'}}>
            <div style={{flex:'0.65'}}>
                <h2 className='w-80 text-center ml-auto text-2xl text-white h-14 pt-1' style={{background: '#000033',borderRadius:'50px'}}>User Management System</h2>
            </div>
            <button className='text-white py-3 px-4 ml-auto' style={{ background:'#ff0000',borderRadius:'15px'}}>Logout</button>
        </div>
        <p className='mt-5 mb-3 text-xl'>Hey AyushSoni1121 !</p>
        <h4 className='text-white py-2 text-xl px-3 w-64 m-auto mt-2 mb-3' style={{background:'#007acc',borderRadius:'15px'}}>Your Watchlist</h4>
        <DataTable/>
        <h3 className='w-64 text-center m-auto mt-5 mb-2 text-xl text-white py-1.5' style={{background: '#004d4d',borderRadius:'10px'}}>Add movie in Watchlist</h3>
        <div style={{width:'50%',margin:'auto'}}>
            <input value={movie} onInput={e => setMovie(e.target.value)} type="text" placeholder='Enter Name' className="mr-6 w-48 mt-3 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
            <input value={genre} onInput={e => setGenre(e.target.value)} type="text" placeholder='Enter Genre' className="mr-6 w-48 mt-3 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
            <input value={rating} onInput={e => setRating(e.target.value)} type="text" placeholder='Enter Rating' className="mr-6 w-48 mt-3 h-12 px-3 text-lg input1" style={{background:'#b3b3b3',borderRadius:'8px'}} />
            <button onClick={handleonsubmit} className='py-1.5 px-4 text-white text-2xl' style={{background:'#00001a',borderRadius:'8px'}}>Add</button>
        </div>
    </div>
  )
}

export default Profile;