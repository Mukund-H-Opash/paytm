"use client";

import { Box, Typography, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store"; 
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import "../../app/globals.css";

export default function SearchPage() {
  const router = useRouter();
  const orderId = useSelector((state: RootState) => state.ticket.orderId); 
  const [searchValue, setSearchValue] = useState(""); 

  
  useEffect(() => {
    
    console.log("Current orderId:", orderId);
  }, [orderId]);

  const handleSearchClick = () => {
    if (searchValue.trim()) {
      router.push("/sitilink");
    }
    else{
      router.push("/sitilink");
    }
  };

  const handleBackClick = () => {
    router.push("/home");
  };

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchValue.trim()) {
      router.push("/sitilink");
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
          sx={{ color: "#757575", cursor: "pointer", mr: 2 }}
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
            position: "relative", // For dropdown positioning
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
              "& .MuiInputBase-input": {
                color: "#757575",
                fontSize: "0.875rem",
                padding: 0,
              },
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottom: "none" },
            }}
          />
          {/* Suggestion Dropdown */}
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
                Surat Sitilink {/* Fixed typo from "Sitilinc" to "Sitilink" */}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      {/* Get Help Section */}
      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 1, padding: 1, mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            fontSize: "0.9rem",
            mb: 1,
            backgroundColor: "#e0f7fa",
            borderRadius: 1,
            p: 1,
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
              startIcon={
                <Image
                  src="/help-support.png"
                  alt="Help Support"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image
                  src="/paytm-guide.png"
                  alt="Paytm Guide"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image
                  src="/recent-payments.png"
                  alt="Recent Payments"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image
                  src="/orders-booking.png"
                  alt="Orders & Bookings"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
            >
              Orders & Bookings
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Popular Services Section */}
      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 1, padding: 1, mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            fontSize: "0.9rem",
            mb: 1,
            backgroundColor: "#e0f7fa",
            borderRadius: 1,
            p: 1,
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
              startIcon={
                <Image src="/metro.png" alt="Metro" width={24} height={24} className="search-icon" />
              }
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
              startIcon={
                <Image
                  src="/movie-tickets.png"
                  alt="Movie"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image
                  src="/train-ticket.png"
                  alt="Train"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image
                  src="/cradit-score.png"
                  alt="credit"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image
                  src="/referral-code.png"
                  alt="referral"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image src="/fastag.png" alt="fastag" width={24} height={24} className="search-icon" />
              }
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
              startIcon={
                <Image
                  src="/flights.png"
                  alt="flights"
                  width={24}
                  height={24}
                  className="search-icon"
                />
              }
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
              startIcon={
                <Image src="/MF-SIP.png" alt="mf" width={24} height={24} className="search-icon" />
              }
            >
              Daily MF SIP
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Search History Section */}
      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 1, padding: 1, mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "#333",
            fontSize: "0.9rem",
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          SEARCH HISTORY
          <Typography sx={{ color: "#0288d1", fontSize: "0.875rem", cursor: "pointer" }}>
            Clear All
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              mb: 1,
              fontSize: "0.875rem",
              borderBottom: "1px solid #e0e0e0",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={handleSearchClick}
          >
            Surat Sitilink
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              mb: 1,
              fontSize: "0.875rem",
              borderBottom: "1px solid #e0e0e0",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={handleSearchClick}
          >
            Surat Sitilink
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              mb: 1,
              fontSize: "0.875rem",
              borderBottom: "1px solid #e0e0e0",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={handleSearchClick}
          >
            Surat Sitilink
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}