"use client";

import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import ReceiptIcon from "@mui/icons-material/Receipt";
import EventIcon from "@mui/icons-material/Event";
import TrainIcon from "@mui/icons-material/Train";
import TheatersIcon from "@mui/icons-material/Theaters";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import FlightIcon from "@mui/icons-material/Flight";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Router is available here
  }, []);

  const handleSearchClick = () => {
    router.push('/sitilink');
  };
  const handleBackClick = () => {
    router.push("/home");  
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <ArrowBackIcon 
        sx={{ 
          color: "#757575", 
          cursor: "pointer", 
          mr: 2

        }} 
        onClick={handleBackClick} 
      />
      {/* Search Bar */}
      <Box

        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 1,
          border: "1px solid #e0e0e0",
          mb: 0,
          p: 1,
          display: "flex",
          alignItems: "center",
          flex: 1,
        }}
      >
      
        <SearchIcon sx={{ color: "#757575", mr: 1 }} />
        <Typography sx={{ color: "#757575", fontSize: "0.875rem" }}>
          Search For Details
        </Typography>
      </Box>
      </Box>

      {/* Get Help Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 1,
          padding: 1,
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ 
            color: "#333", 
            fontSize: "0.9rem", 
            mb: 1, 
            backgroundColor: "#e0f7fa",
            borderRadius: 1,
            
          }}
        >
          GET HELP
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<HelpIcon sx={{ color: "#0288d1" }} />}
            >
              Help & Support
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<InfoIcon sx={{ color: "#0288d1" }} />}
            >
              Paytm Guide
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<ReceiptIcon sx={{ color: "#0288d1" }} />}
            >
              Recent Payments
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<EventIcon sx={{ color: "#0288d1" }} />}
            >
              Orders & Bookings
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Popular Services Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 1,
          padding: 1,
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{  color: "#333", 
            fontSize: "0.9rem", 
            mb: 1, 
            backgroundColor: "#e0f7fa",
            borderRadius: 1, }}
        >
          POPULAR SERVICES
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<TrainIcon sx={{ color: "#0288d1" }} />}
            >
              Metro Tickets
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<TheatersIcon sx={{ color: "#0288d1" }} />}
            >
              Movie Tickets
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<TrainIcon sx={{ color: "#0288d1" }} />}
            >
              Train Tickets
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<CreditScoreIcon sx={{ color: "#0288d1" }} />}
            >
              Credit Score
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<VolumeUpIcon sx={{ color: "#0288d1" }} />}
            >
              Referral Code
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<LocalActivityIcon sx={{ color: "#0288d1" }} />}
            >
              FASTag Recharge
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<FlightIcon sx={{ color: "#0288d1" }} />}
            >
              Flights
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                flexDirection: "column",
                color: "#0288d1",
                 fontSize: "0.7rem",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<AccountBalanceWalletIcon sx={{ color: "#0288d1" }} />}
            >
              Daily MF SIP
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Search History Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 1,
          padding: 1,
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#333", fontSize: "0.9rem", mb: 1, display: "flex", justifyContent: "space-between" }}
        >
          SEARCH HISTORY
          <Typography
            sx={{ color: "#0288d1", fontSize: "0.875rem", cursor: "pointer" }}
          >
            Clear All
          </Typography>
        </Typography>
        <Box>
          <Typography sx={{ color: "#757575", mb: 0.5,fontSize: "0.875rem" 
          }} onClick={handleSearchClick}>Surat Sitilinc</Typography>
          <Typography sx={{ color: "#757575", mb: 0.5 ,fontSize: "0.875rem"}} onClick={handleSearchClick}>Surat Sitilinc </Typography>
          <Typography sx={{ color: "#757575", mb: 0.5 ,fontSize: "0.875rem"}} onClick={handleSearchClick}>Surat Sitilinc</Typography>
        </Box>
      </Box>
    </Box>
  );
}