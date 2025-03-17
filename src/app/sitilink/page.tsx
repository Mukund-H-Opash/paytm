"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Keeping this for back arrow
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

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
      <ArrowBackIcon
          sx={{ color: "#000000", fontSize: "24px", cursor: "pointer" }}
          onClick={handleBackClick}
        />
      {/* Header with Back Arrow */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        
        <Typography
          variant="h5"
          sx={{ color: "#000000", fontSize: "1.5rem", ml: 1, fontWeight: 600 }}
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
          startIcon={<Image src="/ahmedabad.png" alt="Ahmedabad" style={{ width: 40, height: 40, }} />}
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
          startIcon={<Image src="/goa.png" alt="Goa" style={{ width: 40, height: 40 }} />}
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
          startIcon={<Image src="/nashik.png" alt="Nashik" style={{ width: 40, height: 40 }} />}
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
          startIcon={<Image src="/rajkot.png" alt="Rajkot" style={{ width: 40, height: 40 }} />}
        >
          Rajkot
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} /> 

        <Button
          fullWidth
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/surat.png" alt="Surat" style={{ width: 40, height: 40 }} />}
          onClick={handleSuratClick}
          endIcon={
            <Typography
              sx={{
                color: "#e8f5e9",
                backgroundColor: "#21C179",
                borderRadius: "4px",
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
          startIcon={<Image src="/mumbai.png" alt="Mumbai" style={{ width: 40, height: 40 }} />}
          endIcon={
            <Typography
              sx={{
                color: "#e8f5e9",
                backgroundColor: "#21C179",
                borderRadius: "4px",
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
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />
      </Box>
    </Box>
  );
}