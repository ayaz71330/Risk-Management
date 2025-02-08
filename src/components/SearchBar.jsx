import { useDispatch, useSelector } from 'react-redux';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import { setSearchTerm, searchAddress } from '../store/store';

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.risk.searchTerm); 
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAddress()); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          },
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'white' }}
          placeholder="Enter BTC Address"
          value={searchTerm} 
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'white' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </motion.div>
  );
};

export default SearchBar;
