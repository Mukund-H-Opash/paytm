"use client";

import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function HomePage() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(""); // State for search input

  useEffect(() => {
    // Router is available here
  }, []);

  const handleSearchClick = () => {
    router.push('/sitilink');
  };

  const handleBackClick = () => {
    router.push("/home");  
  };

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchValue.trim()) {
      router.push('/sitilink');
    }
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
            mr: 1,
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <SearchIcon sx={{ color: "#757575", mr: 1 }} />
          <TextField
            variant="standard"
            placeholder="Search For Details"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearchSubmit}
            sx={{ 
              flex: 1, 
              '& .MuiInputBase-input': { 
                color: "#757575", 
                fontSize: "0.875rem",
                padding: 0,
              },
              '& .MuiInput-underline:before': { borderBottom: 'none' },
              '& .MuiInput-underline:after': { borderBottom: 'none' },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
            }}
          />
          {/* Suggestion */}
          {searchValue.toLowerCase().includes("surat") && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                mt: 1,
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  p: 1,
                  color: "#757575",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                }}
                onClick={handleSearchClick}
              >
                Surat Sitilinc
              </Typography>
            </Box>
          )}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/help-support.png" alt="Help" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/paytm-guide.png" alt="Guide" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/recent-payments.png" alt="Payments" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/orders-booking.png" alt="Orders" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
          sx={{  
            color: "#333", 
            fontSize: "0.9rem", 
            mb: 1, 
            backgroundColor: "#e0f7fa",
            borderRadius: 1, 
          }}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/metro.png" alt="Metro" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/movie-tickets.png" alt="Movies" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/train-ticket.png" alt="Train" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/cradit-score.png" alt="Credit" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/referral-code.png" alt="Referral" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/fastag.png" alt="FASTag" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/flights.png" alt="Flights" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(2, 136, 209, 0.1)" },
              }}
              startIcon={<img src="/MF-SIP.png" alt="MF SIP" style={{ width: 24, height: 24, marginBottom: 10 }} />}
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
        <Box sx={{ display: "flex", flexWrap: "wrap" ,flexDirection: "column", justifyContent: "space-between" }}>
          <Typography 
            sx={{ 
              color: "#000000", 
              mb: 1, 
              fontSize: "0.875rem", 
              borderBottom: "1px solid #e0e0e0",
              display: "inline-block",
            }} 
            onClick={handleSearchClick}
          >
            Surat Sitilinc
          </Typography>
          <Typography 
            sx={{ 
              color: "#000000", 
              mb: 1, 
              fontSize: "0.875rem", 
              borderBottom: "1px solid #e0e0e0",
              display: "inline-block",
            }} 
            onClick={handleSearchClick}
          >
            Surat Sitilinc
          </Typography>
          <Typography 
            sx={{ 
              color: "#000000", 
              mb: 1, 
              fontSize: "0.875rem", 
              borderBottom: "1px solid #e0e0e0",
              display: "inline-block",
            }} 
            onClick={handleSearchClick}
          >
            Surat Sitilinc
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}