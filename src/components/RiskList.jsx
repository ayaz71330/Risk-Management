import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/store';
import { List, ListItem, ListItemText, IconButton, Paper, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { riskData } from '../data/mockData';
import { motion } from 'framer-motion';

const RiskList = () => {
  const dispatch = useDispatch();

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    dispatch(setSearchTerm(address));
  };

  return (
    <motion.div style={{display: 'flex',
        alignItems: 'center',
        justifyContent:"center",
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
        },}}>
    <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 ,pt:5,mt:5,width:'50%',}}
    >
      <Typography variant="subtitle1" color="white" sx={{ mb: 1 }}>
        Source Addresses
      </Typography>
      <List>
        {riskData.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton onClick={() => handleCopy(item.source_address)} color="primary">
                <ContentCopyIcon />
              </IconButton>
            }
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}
          >
            <ListItemText primary={item.source_address} sx={{ color: 'white', wordBreak: 'break-word', '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
        }, }} />
          </ListItem>
        ))}
      </List>
    </Paper>
    </motion.div>
  );
};

export default RiskList;
