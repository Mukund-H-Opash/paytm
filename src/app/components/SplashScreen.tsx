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
        justifyContent: 'space-between',
        alignItems: 'center',
        minheight: '100%',
        backgroundColor: '#fff',
        padding: '10px', 

      }}
      suppressHydrationWarning 
    >
      {/* Paytm Logo */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Image src="/paytm-home-logo.svg" alt="Paytm Logo" width={200} height={200} />
      </Box>

      <Box sx={{p:20}}/>

      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' ,flexDirection: 'column'}}>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Image src="/cirtificets.png" alt="cirtificets" width={300} height={70} />
        </Box>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              fontSize: '1rem',
              color: '#0A207A',
              fontWeight: 700,
              p: 1,
              backgroundColor: '#fff', 
              display: 'inline-block',
              justifyContent: 'center', 
              width: '95%',
            }}
          >
            100% SECURE MOBILE PAYMENTS
          </Typography>
        
      </Box>
    </Box>
  );
};

export default SplashScreen;