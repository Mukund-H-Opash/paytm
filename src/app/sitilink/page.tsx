

"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CitySelectionPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/search");
  };

  const handleCityClick = () => {
    router.push("/ticket-booking"); // Redirect to ticket-booking for any city
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
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <ArrowBackIcon
          sx={{ color: "#000000", fontSize: "24px", cursor: "pointer" }}
          onClick={handleBackClick}
        />
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
          onClick={handleCityClick} // Updated to redirect for Ahmedabad
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/ahmedabad.png" alt="Ahmedabad" width={40} height={40} />}
        >
          Ahmedabad
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />

        <Button
          fullWidth
          onClick={handleCityClick} // Updated to redirect for Goa
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/goa.png" alt="Goa" width={40} height={40} />}
        >
          Goa
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />

        <Button
          fullWidth
          onClick={handleCityClick} // Updated to redirect for Nashik
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/nashik.png" alt="Nashik" width={40} height={40} />}
        >
          Nashik
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />

        <Button
          fullWidth
          onClick={handleCityClick} // Updated to redirect for Rajkot
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/rajkot.png" alt="Rajkot" width={40} height={40} />}
        >
          Rajkot
        </Button>
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />

        <Button
          fullWidth
          onClick={handleCityClick} // Already redirects for Surat
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/surat.png" alt="Surat" width={40} height={40} />}
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
        <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />

        <Button
          fullWidth
          onClick={handleCityClick} // Updated to redirect for Mumbai
          sx={{
            justifyContent: "flex-start",
            color: "#000000",
            textTransform: "none",
            padding: 1,
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
          startIcon={<Image src="/mumbai.png" alt="Mumbai" width={40} height={40} />}
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