"use client";

import { Box, Typography, Button, Grid, TextField, InputAdornment } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ContactsIcon from '@mui/icons-material/Contacts';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FlightIcon from "@mui/icons-material/Flight";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SearchIcon from "@mui/icons-material/Search"; // Import SearchIcon for the search button
import { useAppDispatch, useAppSelector } from "../../store/store";
import { incrementAttempt, setUpiId } from "../../store/upiSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { attemptCount, upiId } = useAppSelector((state) => state.upi);

  const handleCreateUpiId = () => {
    dispatch(incrementAttempt());
    const newUpiId = `987${Math.floor(Math.random() * 1000000)}@paytm`;
    dispatch(setUpiId(newUpiId));
  };

  return (
    <Box
      sx={{
        // padding: { xs: 1, sm: 2 },
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >

  {/* Header Section */}
  <Box
    sx={{
      backgroundColor: "#022A72",
      padding: { xs: 1, sm: 2 },
      borderRadius: 1,
      mb: 2,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 1,
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          width: { xs: 25, sm: 30 },
          height: { xs: 25, sm: 30 },
          backgroundColor: "#EB5757", 
          borderRadius: "50%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: { xs: "0.8rem", sm: "1rem" },
          padding:0,
        }}
      >
        MH 
      </Box>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #f3f3f3, #f3f3f3)", 
          border: `2px solid #9DAE6C`, 
          color: "#007bff",
          fontSize: { xs: "0.8rem", sm: "1rem" },

          borderRadius: "50px",
          padding: { xs: "6px 12px", sm: "8px 16px" },
         
        }}
       
      >
        Create New UPI ID 
      </Button>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      
      <SearchIcon sx={{ color: "white", fontSize: { xs: 20, sm: 24 } }} /> 
      <NotificationsIcon sx={{ color: "white", fontSize: { xs: 20, sm: 24 } }} /> 
    </Box>
  </Box>

      
      {/* UPI ID Display */}
      <Box 
      sx={{ mb: 2,
         textAlign: "left", 
         backgroundColor: "#F2F6F9",
          padding: 0.8, 
         m: 2, borderRadius: 2,
         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",}}>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>UPI ID:9978073872@paytm</Typography>
      </Box>

      {/* Payment Options */}
      <Grid container spacing={1} sx={{ mb: 2, justifyContent: "center" }}>
        {/* Button 1 */}
        <Grid item xs={3}>
          <Button
            fullWidth
            
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72", // Removed outline as per your request
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0, // Removing padding around button to fit content perfectly
            }}
          >
            <Box
              sx={{
                backgroundColor: "#022A72",
                color: "white",
                borderRadius: "10%", // Changed border-radius to 10%
                p: 1,
                mb: 1, // Margin at the bottom for spacing
              }}
            >
              <QrCodeScannerIcon />
            </Box>
            Scan & Pay
          </Button>
        </Grid>

        {/* Button 2 */}
        <Grid item xs={3}>
          <Button
            fullWidth
           
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72", // Removed outline
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0, // Removed padding
            }}
          >
            <Box
              sx={{
                backgroundColor: "#022A72",
                color: "white",
                borderRadius: "10%", // Changed border-radius to 10%
                p: 1,
                mb: 1,
              }}
            >
              <AssuredWorkloadIcon />
            </Box>
            To Mobile or Contact
          </Button>
        </Grid>

        {/* Button 3 */}
        <Grid item xs={3}>
          <Button
            fullWidth
           
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72", // Removed outline
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0, // Removed padding
            }}
          >
            <Box
              sx={{
                backgroundColor: "#022A72",
                color: "white",
                borderRadius: "10%", // Changed border-radius to 10%
                p: 1,
                mb: 1,
              }}
            >
              <HomeWorkIcon />
            </Box>
            To Bank A/c or UPI ID
          </Button>
        </Grid>

        {/* Button 4 */}
        <Grid item xs={3}>
          <Button
            fullWidth
            
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72", // Removed outline
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0, // Removed padding
            }}
          >
            <Box
              sx={{
                backgroundColor: "#022A72",
                color: "white",
                borderRadius: "10%", // Changed border-radius to 10%
                p: 1,
                mb: 1,
              }}
            >
              <ContactsIcon />
            </Box>
            To Self A/c
          </Button>
        </Grid>
      </Grid>

      {/* Balance & QR */}
      <Grid container spacing={1} 
      sx={{ mb: 2
            ,backgroundColor: "#f2f6f9",p: 1, 
            
       }}>
        <Grid item xs={6}
        sx={{ backgroundColor: "#ffffff",borderRadius: 2 }}>
          <Button
            fullWidth
            startIcon={<AccountBalanceWalletIcon />}
            
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            Check Balance & History
          </Button>
        </Grid>
        <Grid item xs={6}
        sx={{ backgroundColor: "#ffffff",borderRadius: 2, }}>
          <Button
            fullWidth
            startIcon={<SystemUpdateAltIcon/>}
            
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            Receive money QR
          </Button>
        </Grid>
      </Grid>

      {/* Recharges & Bill Payments */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#333", fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
      >
        RECHARGES & BILL PAYMENTS{" "}
        <span style={{ color: "#022A72", fontSize: "0.9em", textAlign: "right",marginLeft: "20px"}}>View all </span>
        {/* <ArrowCircleRightIcon sx={{backgroundColor: "#f3f3f3", color: "#060606" ,}}/>  */}
      </Typography>
      
      <Grid container spacing={1} sx={{ mb: 2, justifyContent: "center",padding: 1 }}>
        {/* Mobile Recharge Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)", // Background hover effect
              },
              padding: 0, // Removed padding
            }}
          >
            <Box
              sx={{
                color: "#022A72", // Set icon color to #022A72
                backgroundColor: "white", // Keep icon background white
              }}
            >
              <PhoneAndroidIcon />
            </Box>
            Mobile Recharge
          </Button>
        </Grid>

        {/* Credit Card Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)", // Background hover effect
              },
              padding: 0, // Removed padding
            }}
          >
            <Box
              sx={{
                color: "#022A72", // Set icon color to #022A72
                backgroundColor: "white", // Keep icon background white
              }}
            >
              <CreditCardIcon />
            </Box>
            Credit Card Home
          </Button>
        </Grid>

        {/* Electricity Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)", // Background hover effect
              },
              padding: 0, // Removed padding
            }}
          >
            <Box
              sx={{
                color: "#022A72",
                backgroundColor: "white", 
              }}
            >
              <LightbulbIcon />
            </Box>
            Electricity
          </Button>
        </Grid>

          {/* FASTag Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)", // Background hover effect
                },
                padding: 0, // Removed padding
              }}
            >
              <Box
                sx={{
                  color: "#022A72", // Set icon color to #022A72
                  backgroundColor: "white", // Keep icon background white
                }}
              >
                <CreditCardIcon />
              </Box>
              FASTag Recharge
            </Button>
          </Grid>
      </Grid>


      {/* Do More With Paytm */}
      
      {/* <Box sx={{ mb: 2, backgroundColor: "#e0f7fa", p: 2, borderRadius: 1 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#333", fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
      >
        DO MORE WITH PAYTM
      </Typography>

        <Grid container spacing={1}>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<AccountBalanceWalletIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Personal Loan
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<CreditCardIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Credit Card
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<PaymentIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Paytm Money
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<ShowChartIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              SIP @ ₹250
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<FlightIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Travel
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<LocalMoviesIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              Movies
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              
              sx={{
                backgroundColor: "#00baf2",
                color: "white",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                "&:hover": { backgroundColor: "#007bff" },
              }}
              startIcon={<QrCodeScannerIcon />}
            >
              Scan Any QR
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              fullWidth
              startIcon={<PaymentIcon />}
              
              sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
            >
              All Services
            </Button>
          </Grid>
        </Grid>
      </Box> */}
      <Box sx={{ mb: 2, backgroundColor: "#e0f7fa", p: 2, borderRadius: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "#333", fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
        >
          DO MORE WITH PAYTM
        </Typography>

        <Grid container spacing={1}>
          {/* Personal Loan Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0, // Removing padding around button to fit content perfectly
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%", // Rounded corners for the icon box
                  p: 1,
                  mb: 1, // Space between icon and text
                }}
              >
                <AccountBalanceWalletIcon />
              </Box>
              Personal Loan
            </Button>
          </Grid>

          {/* Credit Card Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <CreditCardIcon />
              </Box>
              Credit Card
            </Button>
          </Grid>

          {/* Paytm Money Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <PaymentIcon />
              </Box>
              Paytm Money
            </Button>
          </Grid>

          {/* SIP @ ₹250 Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <ShowChartIcon />
              </Box>
              SIP @ ₹250
            </Button>
          </Grid>

          {/* Travel Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <FlightIcon />
              </Box>
              Travel
            </Button>
          </Grid>

          {/* Movies Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <LocalMoviesIcon />
              </Box>
              Movies
            </Button>
          </Grid>

          {/* Scan Any QR Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <QrCodeScannerIcon />
              </Box>
              Scan QR
            </Button>
          </Grid>

          {/* All Services Button */}
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box
                sx={{
                   
                  color: "#022A72",
                  borderRadius: "10%",
                  p: 1,
                  mb: 1,
                }}
              >
                <PaymentIcon />
              </Box>
              All Services
            </Button>
          </Grid>
        </Grid>

      </Box>


      {/* Free Tools */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#333", fontSize: { xs: "1rem", sm: "1.25rem" } }}
      >
        FREE TOOLS
      </Typography>
      <Grid container spacing={1} sx={{ mb: 2 }}>
        {/* Credit Score Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0, // Removed padding around button to fit content perfectly
            }}
          >
            <Box
              sx={{
                // backgroundColor: "#022A72",
                color: "#022A72",
                borderRadius: "10%",
                p: 1,
                mb: 1, // Space between icon and text
              }}
            >
              <ShowChartIcon />
            </Box>
            Credit Score
          </Button>
        </Grid>

        {/* Mutual Fund Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                // backgroundColor: "#022A72",
                color: "#022A72",
                borderRadius: "10%",
                p: 1,
                mb: 1,
              }}
            >
              <ShowChartIcon />
            </Box>
            Mutual Fund
          </Button>
        </Grid>

        {/* Ask AI Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                // backgroundColor: "#022A72",
                color: "#022A72",
                borderRadius: "10%",
                p: 1,
                mb: 1,
              }}
            >
              <PaymentIcon />
            </Box>
            Ask AI
          </Button>
        </Grid>

        {/* Insurance Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                // backgroundColor: "#022A72",
                color: "#022A72",
                borderRadius: "10%",
                p: 1,
                mb: 1,
              }}
            >
              <AccountBalanceWalletIcon />
            </Box>
            Insurance
          </Button>
        </Grid>
      </Grid>

      

      {/* Cashback & Ad */}
      <Grid container spacing={1} 
      sx={{ mb: 2
            ,backgroundColor: "#f2f6f9",p: 1, 
            
       }}>
        <Grid item xs={6}
        sx={{ backgroundColor: "#ffffff",borderRadius: 2 }}>
          <Button
            fullWidth
            startIcon={<AccountBalanceWalletIcon />}
            
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            cashback & Offers 
          </Button>
        </Grid>
        <Grid item xs={6}
        sx={{ backgroundColor: "#ffffff",borderRadius: 2, }}>
          <Button
            fullWidth
            startIcon={<SystemUpdateAltIcon/>}
            
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            Points & gift Cards 
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          mb: 2,
          backgroundColor: "#022A72", 
          p: 2,
          borderRadius: "2rem", 
          width: "auto", 
          maxWidth: "150px",
          textAlign: "center",
          color: "white",
          margin: "0 auto", 
        }}
        >
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
          }}
        >
          <QrCodeScannerIcon sx={{ marginRight: 1 }} /> 
          Scan Any QR
        </Typography>
      </Box>

    </Box>
  );
}