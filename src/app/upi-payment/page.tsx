"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Placeholder UPI logo (replace with actual SVG or image URL)
const UPILogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#5F6368"/>
    <path d="M12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 8.24 14.76 6 12 6ZM12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14Z" fill="#5F6368"/>
  </svg>
);

export default function UPIPaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState<string | null>(null);
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentAmount = urlParams.get("amount");
    setAmount(paymentAmount);
  }, []);

  const handleBackClick = () => {
    router.push("/payment");
  };

  const handlePinChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.slice(-1); // Take only the last character
    if (/^\d$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Show number briefly, then convert to dot
      setTimeout(() => {
        const updatedPin = [...newPin];
        updatedPin[index] = "•";
        setPin(updatedPin);
      }, 100);

      // Move to next input
      if (index < 5 && value) {
        pinRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleConfirmPayment = () => {
    
    router.push("/ticket");
  };

  if (!amount) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 2, minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          SBI Bank
        </Typography>
        <UPILogo />
      </Box>

      {/* To Field */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>To:</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Surat Sitilink</Typography>
      </Box>

      {/* Sending Field */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, backgroundColor: "#f5f5f5", padding: 1, borderRadius: 4 }}>
        <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>Sending:</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "0.875rem", mr: 1 }}>₹{amount}</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>

      {/* UPI PIN Input */}
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold", mb: 2 }}>
        ENTER 6-DIGIT UPI PIN
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        {pin.map((digit, index) => (
          <TextField
            key={index}
            inputRef={(el) => (pinRefs.current[index] = el)}
            value={digit}
            onChange={handlePinChange(index)}
            inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "1rem" } }}
            sx={{ width: 40, "& .MuiInputBase-input": { padding: 1 } }}
          />
        ))}
      </Box>

      {/* Confirmation Message */}
      <Box sx={{ backgroundColor: "#fff3e0", padding: 1, borderRadius: 4, mb: 2 }}>
        <Typography sx={{ fontSize: "0.875rem", color: "#f57c00" }}>
          ! You are SENDING ₹{amount} from your account to SURAT SITILINK
        </Typography>
      </Box>

      {/* Pay Button */}
      <Button
        variant="contained"
        onClick={handleConfirmPayment}
        sx={{
          backgroundColor: "#0288d1",
          color: "#ffffff",
          borderRadius: "50%",
          width: 48,
          height: 48,
          minWidth: 0,
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <CheckIcon />
      </Button>
    </Box>
  );
}

