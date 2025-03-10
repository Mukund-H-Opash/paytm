"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setLoading } from '../../store/loadingSlice';

const SplashScreen = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false)); // Update Redux state
      router.push('/home'); // Redirect to homepage
    }, 3000); // 5.5 seconds

    return () => clearTimeout(timer); // Cleanup
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
        padding: '20px',
      }}
      suppressHydrationWarning // Suppress hydration mismatch
    >
      {/* Paytm Logo */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Image src="/main-logo.svg" alt="Paytm Logo" width={200} height={100} />
      </Box>

      {/* Secure Badge */}
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <VerifiedUser sx={{ fontSize: 40, color: '#00baf2' }} />
        <Typography variant="body2" color="textSecondary">
          100% SECURE PAYMENTS
        </Typography>
      </Box>
    </Box>
  );
};

export default SplashScreen;