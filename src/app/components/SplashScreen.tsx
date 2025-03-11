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
        height: '100vh',
        backgroundColor: '#fff',
        padding: '10px',
      }}
      suppressHydrationWarning // Suppress hydration mismatch
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
            borderBottom: '5px solid #0A207A' 
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
              p:1,

            }}
          >
            Top Rated <br/>
            UPI App in India
          </Typography>
        </Box>

    </Box>
  );
};

export default SplashScreen;