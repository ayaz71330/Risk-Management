import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';

const RiskLevelGraph = () => {
  const searchResults = useSelector((state) => state.risk.searchResults);

  if (!searchResults) return null;

  const graphData = searchResults.level_vise_risk_analysis.map(level => ({
    name: `Level ${level.level}`,
    'Risk Percentage': parseFloat(level.risk_percentage),
    'Risky Entities': level.risky_entities_count,
    'Non-Risky Entities': level.non_risky_entities_count,
  }));

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
          backdropFilter: 'blur(10px)',
          height: '100%'
        }}
      >
        <Typography variant="h6" color="white" gutterBottom>
          Risk Analysis by Level
        </Typography>
        <Box sx={{ height: 300, width: '100%', color: 'white' }}>
          <ResponsiveContainer>
            <BarChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="white"
                tick={{ fill: 'white' }}
              />
              <YAxis 
                stroke="white"
                tick={{ fill: 'white' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(19, 47, 76, 0.9)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white'
                }}
              />
              <Legend />
              <Bar dataKey="Risk Percentage" fill="#4caf50" />
              <Bar dataKey="Risky Entities" fill="#ff9800" />
              <Bar dataKey="Non-Risky Entities" fill="#2196f3" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default RiskLevelGraph;