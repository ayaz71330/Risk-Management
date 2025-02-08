import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { Box, Typography, Paper } from '@mui/material';

const RiskRadar = () => {
  const searchResults = useSelector((state) => state.risk.searchResults);
  const levelData = searchResults?.level_vise_risk_analysis || [];

  const radarData = useMemo(() => {
    return levelData.length >= 2
      ? [
          { subject: 'Risky Entities', key: 'risky_entities_count' },
          { subject: 'CoinJoin', key: 'total_coinjoin' },
          { subject: 'Flagged', key: 'total_flagged' },
        ].map(({ subject, key }) => ({
          subject,
          Level1: levelData[0]?.[key] || 0,
          Level2: levelData[1]?.[key] || 0,
        }))
      : [];
  }, [levelData]);
  if (radarData.length === 0) return null;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{height:"100%"}}>
      <Paper
        sx={{
          p: 3,
          bgcolor: 'rgba(19, 47, 76, 0.4)',
          backdropFilter: 'blur(10px)',
          height: '100%',
        }}
      >
        <Typography variant="h6" color="white" gutterBottom>
          Risk Analysis Radar
        </Typography>
        <Box sx={{ height: 300, width: '100%', color: 'white' }}>
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.2)" />
              <PolarAngleAxis dataKey="subject" stroke="white" tick={{ fill: 'white', fontSize: 12 }} />
              <Radar name="Level 1" dataKey="Level1" stroke="#4caf50" fill="#4caf50" fillOpacity={0.6} />
              <Radar name="Level 2" dataKey="Level2" stroke="#ff9800" fill="#ff9800" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </motion.div>
  );
};

export default RiskRadar;
