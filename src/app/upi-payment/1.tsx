"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BackspaceIcon from "@mui/icons-material/Backspace";


// Import UPI logo
import upiLogo from "../../../public/upi-logo.png";
import error from "../../../public/error.png";

export default function UPIPaymentPage() {
  const router = useRouter();
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Navigate back to payment page
  const handleBackClick = () => {
    router.push("/payment");
  };

  // Handle PIN input via keyboard
  const handleKeyPress = (value: string) => {
    if (activeIndex >= 6) return;

    const newPin = [...pin];
    newPin[activeIndex] = value;
    setPin(newPin);

    // Briefly show the number, then convert to dot
    setTimeout(() => {
      const updatedPin = [...newPin];
      updatedPin[activeIndex] = "•";
      setPin(updatedPin);
    }, 500);

    // Move to the next input
    if (activeIndex < 5) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Handle backspace
  const handleBackspace = () => {
    if (activeIndex <= 0) return;

    const newPin = [...pin];
    newPin[activeIndex - 1] = "";
    setPin(newPin);
    setActiveIndex(activeIndex - 1);
  };

  // Handle payment confirmation
  const handleConfirmPayment = () => {
    router.push("/ticket");
  };

  return (
    <Box sx={{ p: 0,m:0 }}>
    
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 ,p:2 }}>
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "500" }}>
          SBI Bank
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={upiLogo.src}
            alt="UPI Logo"
            style={{ width: 60, height: 30,scale: 1.5 }}
          />
          
        </Box>
      </Box>

      <Box  sx={{backgroundColor: "#F5F5F5", p:1 ,mb:4}}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>To:</Typography>
            <Typography sx={{ fontSize: "0.875rem" }}>Surat Sitilink</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0 }}>
        <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>Sending:</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "0.875rem", mr: 1 }}>₹15
            {/* {orderDetails.price} */}
            </Typography>
          <KeyboardArrowDownIcon sx={{ color: "gray" }} />
        </Box>
      </Box>
      </Box>

      {/* UPI PIN Input */}
      <Box sx={{ flex: 1 ,p:2 }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "500", mb: 2, textAlign: "center" }}>
          ENTER 6-DIGIT UPI PIN
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4 ,}}>
          {pin.map((digit, index) => (
            <Box
              key={index}
              sx={{
                width: 70,
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "2px solid #06448D opacity(0.3)",
                fontSize: "1.5rem",
              }}
            >
              {digit}
            </Box>
          ))}
        </Box>

        {/* Confirmation Message */}
        <Box sx={{ backgroundColor: "#F5E690", borderRadius: 4, m:4, mb: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "0.875rem", display: "flex", alignItems: "center" }}>
            <img 
            src={error.src}
            style={{ width: 50, height: 30, marginRight: 3 }}>
            </img>
            You are SENDING ₹15
            {/* {orderDetails.price}  */}
            from your account to SITILINK
          </Typography>
        </Box>
      </Box>

      {/* Keyboard */}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:0, mt: 2 }}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
          <Button
            key={num}
            onClick={() => handleKeyPress(num)}
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#06448D",
              fontSize: "1.5rem",
              height: 60,
              borderRadius: 0,
            }}
          >
            {num}
          </Button>
        ))}
        <Button
          onClick={handleBackspace}
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#06448D",
            fontSize: "1.5rem",
            height: 60,
            borderRadius: 0,
          }}
        >
          <BackspaceIcon />
        </Button>
        <Button
          onClick={() => handleKeyPress("0")}
          sx={{
            backgroundColor: "#f5f5f5",
            color: "#06448D",
            fontSize: "1.5rem",
            height: 60,
            borderRadius: 0,
          }}
        >
          0
        </Button>
        <Button
          onClick={handleConfirmPayment}
          sx={{
            backgroundColor: "#06448D",
            color: "#ffffff",
            fontSize: "1.5rem",
            height: 60,
            borderRadius: 2,
          }}
        >
          <CheckIcon />
        </Button>
      </Box>
      </Box>
   
    
  );
}