import { useSelector } from 'react-redux';
import { Box, Typography, CircularProgress, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const RiskScore = () => {
  const searchResults = useSelector((state) => state.risk.searchResults);

  if (!searchResults) return null;

  const getColor = (score) => {
    if (score < 30) return '#2e7d32';
    if (score < 70) return '#ed6c02';
    return '#ff1744';
  };

  const score = parseInt(searchResults.risk_score);
  const color = getColor(score);

  return (
    <Paper 
      sx={{ 
        p: 3, 
        backgroundColor: 'rgba(19, 47, 76, 0.4)',
        backdropFilter: 'blur(10px)',
        height: '100%'
      }}
    >
      <Typography variant="h6" color="white" gutterBottom>
        Risk Assessment
      </Typography>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 3
          }}
        >
          <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
            <CircularProgress
              variant="determinate"
              value={100}
              size={160}
              thickness={4}
              sx={{ color: 'rgba(255,255,255,0.1)' }}
            />
            <CircularProgress
              variant="determinate"
              value={score}
              size={160}
              thickness={4}
              sx={{
                color: color,
                position: 'absolute',
                left: 0,
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3" color="white">
                {score}%
              </Typography>
            </Box>
          </Box>
          <Typography 
            variant="h6" 
            color={color}
            sx={{ fontWeight: 'bold' }}
          >
            {searchResults.risk}
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography color="grey.400">Risk Score:</Typography>
            <Typography color={color} variant="h6">{score}%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="grey.400">Risk Level:</Typography>
            <Typography color={color} variant="h6">{searchResults.risk}</Typography>
          </Grid>
        </Grid>
      </motion.div>
    </Paper>
  );
};

export default RiskScore;