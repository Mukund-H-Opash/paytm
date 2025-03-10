import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const popularServices = [
  { name: 'Flight Tickets', icon: '✈️' },
  { name: 'Bus Tickets', icon: '🚌' },
  { name: 'Train Tickets', icon: '🚆' },
  { name: 'Movie Tickets', icon: '🎬' },
  { name: 'Event Tickets', icon: '🎟️' },
  { name: 'Metro Tickets', icon: '🚇' },
];

const search = () => {
  return (
    <Box className="p-4">
      <Typography variant="h6" className="mb-4">Popular Services</Typography>
      <Box className="grid grid-cols-2 gap-4">
        {popularServices.map((service, index) => (
          <Box key={index} className="flex flex-col items-center p-4 border rounded-lg">
            <span className="text-3xl">{service.icon}</span>
            <Typography className="mt-2">{service.name}</Typography>
          </Box>
        ))}
        <Button variant="outlined" color="primary" className="flex items-center justify-center border rounded-lg p-4">
          View More ➡️
        </Button>
      </Box>
    </Box>
  );
};

export default search;