import { useSelector } from 'react-redux';
import { Paper, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

const TransactionDetails = () => {
  const searchResults = useSelector((state) => state.risk.searchResults);

  if (!searchResults) return null;

  const levelOneData = searchResults.level_vise_risk_analysis[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper 
        sx={{ 
          p: 3, 
          backgroundColor: 'rgba(19, 47, 76, 0.4)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Typography variant="h6" color="white" gutterBottom>
          Transaction Details
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="white" gutterBottom>
            Level 1
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography color="grey.400">Risk Percentage:</Typography>
              <Typography color="white" variant="h6">
                {levelOneData.risk_percentage}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography color="grey.400">Total CoinJoin:</Typography>
              <Typography color="white" variant="h6">
                {levelOneData.total_coinjoin}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography color="grey.400">Risky Entities:</Typography>
              <Typography color="white" variant="h6">
                {levelOneData.risky_entities_count}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography color="grey.400">Total Flagged:</Typography>
              <Typography color="white" variant="h6">
                {levelOneData.total_flagged}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="grey.400">Non-Risky Entities:</Typography>
              <Typography color="white" variant="h6">
                {levelOneData.non_risky_entities_count}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default TransactionDetails;