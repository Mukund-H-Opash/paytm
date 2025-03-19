"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setLoading } from '../../store/loadingSlice';

const SplashScreen = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false)); 
      router.push('/home'); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [dispatch, router]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '88vh',
        backgroundColor: '#fff',
        padding: '10px', 

      }}
      suppressHydrationWarning 
    >
      {/* Paytm Logo */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Image src="/paytm-home-logo.webp" alt="Paytm Logo" width={200} height={200} />
      </Box>

      {/* Secure Badge */}
        <Box
  sx={{
    textAlign: 'center',
    marginBottom: '20px',
    borderBottom: '5px solid #00B8F6', 
    position: 'relative', 
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px', 
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      height: '4px',
      backgroundColor: '#022A72', 
    },
  }}
>
  <Typography
    variant="body2"
    color="textSecondary"
    sx={{
      fontSize: 25,
      color: '#0A207A',
      fontWeight: 700,
      fontStyle: 'italic',
      p: 1,
      backgroundColor: '#fff', 
      display: 'inline-block', 
    }}
  >
    Top Rated <br />
    UPI App in India
  </Typography>
</Box>

    </Box>
  );
};

export default SplashScreen;