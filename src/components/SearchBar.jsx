import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  return (
   <Paper component="form"
   
   sx={{borderRadius:20, border: '1px solid #e3e3e3', pl:2, boxShadow:'none', mr:{sm: 5}}}
   >
    <input className='search-bar' placeholder='Search...' value=""  />
    <IconButton type="submit" sx={{p:0.5, color: 'red'}}>
        <Search />
    </IconButton>
   </Paper>
  )
}

export default SearchBar