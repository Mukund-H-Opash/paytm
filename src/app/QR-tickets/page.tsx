"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QRCode from "react-qr-code"; 

export default function QRTicketsPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [countdown, setCountdown] = useState<string>("01:40:00"); 
  const [ticketId, setTicketId] = useState<string>(generateRandomTicketId(10)); 
  const [orderId, setOrderId] = useState<string>(generateRandomOrderId(11));
  const [orderItemId, setOrderItemId] = useState<string>(generateRandomOrderId(8));
  const [ticketType, setTicketType] = useState<string>("Adult");

  // Generate random 10-digit ticket ID
  function generateRandomTicketId(length: number): string {
    return Math.floor(Math.random() * 9e9 + 1e9).toString().slice(0, length);
  }

  // Generate random 11-digit order ID
  function generateRandomOrderId(length: number): string {
    return Math.floor(Math.random() * 9e10 + 1e10).toString().slice(0, length);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get("from") || "Adajan";
    const to = urlParams.get("to") || "Sanjeev Ku";
    const price = urlParams.get("price") || "4";

    setOrderDetails({ from, to, price });

    // Start countdown timer (1 hour 30 minutes = 5400 seconds)
    let timeLeft = 5400;
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1;
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        setCountdown(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBackClick = () => {
    router.push("/ticket");
  };

  if (!orderDetails) {
    return <Typography>Loading...</Typography>;
  }

  const issuedTime = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 2, minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <IconButton onClick={handleBackClick} sx={{ color: "#000000" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          1 QR Ticket
        </Typography>
        <IconButton sx={{ color: "#0288d1" }}>
          <HelpOutlineIcon />
        </IconButton>
      </Box>

      {/* From and To */}
      <Typography sx={{ fontSize: "1rem", mb: 2 }}>
        {orderDetails.from} <ArrowBackIcon sx={{ fontSize: "16px", mx: 1 }} /> {orderDetails.to}
      </Typography>

      {/* QR Code */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <QRCode
          value={ticketId} // Use the random ticket ID for the QR code
          size={200}
          fgColor="#000000"
          bgColor="#ffffff"
          level="H"
        />
      </Box>

      {/* Countdown */}
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          padding: 1,
          borderRadius: 4,
          mb: 2,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.875rem" }}>
          Your ticket is valid for {countdown}
        </Typography>
      </Box>

      {/* Ticket Details */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "0.875rem", mb: 1 }}>Ticket Details On</Typography>
        <Typography sx={{ fontSize: "0.75rem" }}>Issued On: {issuedTime}</Typography>
        <Typography sx={{ fontSize: "0.75rem" }}>Order ID: {orderId}</Typography>
        <Typography sx={{ fontSize: "0.75rem" }}>Order Item ID: {orderItemId}</Typography>
        <Typography sx={{ fontSize: "0.75rem" }}>Ticket Type: {ticketType}</Typography>
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Help</Button>
      </Box>
    </Box>
  );
}