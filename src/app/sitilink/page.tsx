"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // Placeholder for city icons
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CitySelectionPage() {
  const router = useRouter();

  useEffect(() => {
    // Router is available here
  }, []);

  const handleBackClick = () => {
    router.push('/search'); // Redirect to search page
  };

  const handleSuratClick = () => {
    router.push('/ticket-booking'); // Redirect to ticket-booking page
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: 2,
        minHeight: "100vh",
      }}
    >
      {/* Header with Back Arrow */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <ArrowBackIcon
          sx={{ color: "#000000", fontSize: "24px", cursor: "pointer" }}
          onClick={handleBackClick}
        />
        <Typography
          variant="h5"
          sx={{ color: "#000000", fontSize: "1rem", ml: 1 }}
        >
          Select your City
        </Typography>
      </Box>

      {/* City List */}
      <Box>
        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<AccountBalanceIcon sx={{ color: "#0288d1" }} />}
        >
          Ahmedabad
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} /> {/* Horizontal line */}

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<AccountBalanceIcon sx={{ color: "#0288d1" }} />}
        >
          Goa
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} /> {/* Horizontal line */}

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<AccountBalanceIcon sx={{ color: "#0288d1" }} />}
        >
          Nashik
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} /> {/* Horizontal line */}

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<AccountBalanceIcon sx={{ color: "#0288d1" }} />}
        >
          Rajkot
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} /> {/* Horizontal line */}

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<AccountBalanceIcon sx={{ color: "#0288d1" }} />}
          onClick={handleSuratClick}
          endIcon={
            <Typography
              sx={{
                color: "#2e7d32",
                backgroundColor: "#e8f5e9",
                borderRadius: "8px",
                padding: "2px 6px",
                fontSize: "0.65rem !important",
              }}
            >
              Newly Added
            </Typography>
          }
        >
          Surat
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} /> {/* Horizontal line */}

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<AccountBalanceIcon sx={{ color: "#0288d1" }} />}
          endIcon={
            <Typography
              sx={{
                color: "#2e7d32",
                backgroundColor: "#e8f5e9",
                borderRadius: "8px",
                padding: "2px 6px",
                fontSize: "0.65rem !important",
              }}
            >
              Newly Added
            </Typography>
          }
        >
          Mumbai
        </Button>
      </Box>
    </Box>
  );
}