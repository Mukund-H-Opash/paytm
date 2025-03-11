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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Image from "next/image"; // Import the Next.js Image component

export default function TicketConfirmationPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [countdown, setCountdown] = useState<string>("02:00:00");
  const [orderId, setOrderId] = useState<string>(generateRandomOrderId(11));
  const [transactionId, setTransactionId] = useState<string>(generateRandomTransactionId(12));

  // Generate random 11-digit order ID
  function generateRandomOrderId(length: number): string {
    return Math.floor(Math.random() * 9e10 + 1e10).toString().slice(0, length);
  }

  // Generate random 12-digit transaction ID
  function generateRandomTransactionId(length: number): string {
    return Math.floor(Math.random() * 9e11 + 1e11).toString().slice(0, length);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get("from") || "Adajan G...";
    const to = urlParams.get("to") || "Sanjeev Ku...";
    const price = urlParams.get("price") || "4";
    const passengers = urlParams.get("passengers") || "1";

    setOrderDetails({ from, to, price, passengers });

    // Start countdown timer (2 hours = 7200 seconds)
    let timeLeft = 7200;
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
    router.push("/ticket-booking");
  };

  const handleViewTickets = () => {
    router.push("/QR-tickets");
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    alert("Order ID copied to clipboard!");
  };

  if (!orderDetails) {
    return <Typography>Loading...</Typography>;
  }

  const bookingTime = new Date().toLocaleString("en-US", {
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
        <Image
          src="/paytm.png" // Path relative to the public folder
          alt="Paytm Logo"
          width={100}
          height={50} // Adjust height as needed
          style={{ objectFit: "contain" }}
        />
        <IconButton sx={{ color: "#0288d1" }}>
          <HelpOutlineIcon />
        </IconButton>
      </Box>

      {/* Center Content */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            border: "2px solid #0288d1",
            mb: 2,
          }}
        >
          <Image
            src="/sitilink.png" 
            alt="Sitilink Logo"
            width={60}
            height={60} 
            style={{ objectFit: "contain",scale:1.5 }}
          />
        </Box>
        <Typography sx={{ fontSize: "1rem", mb: 1 }}>
          {orderDetails.from} <ArrowBackIcon sx={{ fontSize: "16px", mx: 1 }} />{" "}
          {orderDetails.to}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <Typography sx={{ fontSize: "0.875rem", mr: 1 }}>1 Adult Ticket</Typography>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.75rem" }}>👤</Typography>
          </Box>
          <Typography sx={{ fontSize: "0.875rem", ml: 1 }}>
            {orderDetails.passengers} Adult
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold", mr: 1 }}>
            ₹{orderDetails.price}
          </Typography>
          <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "24px" }} />
        </Box>
        <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>
          Ticket Booked Successfully - {bookingTime}
        </Typography>
      </Box>

      {/* Horizontal Line */}
      <Box sx={{ borderBottom: "1px dashed #e0e0e0", my: 2 }} />

      {/* Sticky Countdown Box */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#e3f2fd",
          padding: 1,
          borderRadius: 4,
          mb: 2,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.875rem" }}>
          Your ticket is valid for {countdown}
        </Typography>
        <Button
          variant="contained"
          onClick={handleViewTickets}
          sx={{ backgroundColor: "#0288d1", color: "#ffffff", borderRadius: "20px", textTransform: "none" }}
        >
          View Your Tickets
        </Button>
      </Box>

      {/* Horizontal Line */}
      <Box sx={{ borderBottom: "1px dashed #e0e0e0", my: 2 }} />

      {/* Trip Details */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", mb: 1 }}>Trip Details</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Operator: Surat Sitilink</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Order ID: {orderId}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Typography sx={{ fontSize: "0.875rem" }}>{orderId}</Typography>
          <IconButton onClick={handleCopyOrderId} sx={{ ml: 1 }}>
            <Typography sx={{ fontSize: "0.75rem" }}>Copy</Typography>
          </IconButton>
        </Box>
        <Typography sx={{ fontSize: "0.75rem", color: "#757575", mt: 1 }}>
          For any queries regarding your ticket, please contact Surat Sitilink with Order ID.
        </Typography>
      </Box>

      {/* Payment Details */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", mb: 1 }}>Payment Details</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Fare Breakup: 1x Adult</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Total: ₹{orderDetails.price}</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Payment Mode: UPI Linked Bank Account</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Amount: ₹{orderDetails.price}</Typography>
        <Typography sx={{ fontSize: "0.875rem" }}>Transaction ID: {transactionId}</Typography>
      </Box>

      {/* Blue Line (Decorative) */}
      <Box sx={{ borderBottom: "4px solid #0288d1", mb: 2 }} />

      {/* Bottom Navigation */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Cashback</Button>
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Home</Button>
        <IconButton sx={{ color: "#0288d1" }}>
          <HelpOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
}