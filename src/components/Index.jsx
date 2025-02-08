import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux';
import RiskScore from './RiskScore';
import RiskRadar from './RiskRadar';
import RiskLevelGraph from './RiskLevelGraph';
import TransactionDetails from './TransactionDetails';
import SearchBar from './SearchBar';
import { store } from '../store/store';
import RiskList from './RiskList';

const Index = () => {
  return (
    <Provider store={store}>
      <Box sx={{ 
        minHeight: '100vh',
        backgroundColor: '#0a1929',
        py: 4,
      }}>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" align="center"  sx={{ color: 'white', mb: 4 }}>
              Risk Analysis Dashboard
            </Typography>
          </motion.div>
 
          <SearchBar />
          <RiskList/>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <RiskScore />
            </Grid>
            <Grid item xs={12} md={6}>
              <RiskRadar />
            </Grid>
            <Grid item xs={12}>
              <RiskLevelGraph />
            </Grid>
            <Grid item xs={12}>
              <TransactionDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Provider>
  );
};

export default Index;