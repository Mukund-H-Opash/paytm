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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircle from "../../../public/check.png"
import user from "../../../public/toon.png"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Image from "next/image"; 
import { Scale } from "@mui/icons-material";

export default function TicketConfirmationPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [countdown, setCountdown] = useState<string>("01:48:00");
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
    const from = urlParams.get("from");
    const to = urlParams.get("to");
    const price = urlParams.get("price");
    const passengers = urlParams.get("passengers");

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
          src="/paytm.png" 
          alt="Paytm Logo"
          width={100}
          height={50} 
          style={{ objectFit: "contain" }}
        />
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Help</Button>
      </Box>

      {/* Center Content */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",backgroundColor: "#96E9FF", borderRadius: 2, padding: 1 ,my:2 ,mb:0 }}>
        <Box sx={{ textAlign: "center", mb: 2 ,mt:2 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              
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
          <Typography sx={{ fontSize: "1.2rem", mb: 2 , fontWeight: "bold" }}>
            {orderDetails.from} <ArrowForwardIcon sx={{ fontSize: "16px", mx: 1 }} />{" "}
            {orderDetails.to}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", mr: 1  ,mb:2}}>1 Adult Ticket </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
            
            <Box
              sx={{
                width: "60px",
                height: "28px",
                borderRadius: 4,
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={user.src} width={20} height={27} style={{ overflow  : "hidden" }} ></img>
            <Typography sx={{ fontSize: "0.875rem", ml: 1, fontWeight: "bold" }}>
              {orderDetails.passengers} 
            </Typography>
            </Box>
          </Box>


          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
            <Typography sx={{ fontSize: "1.50rem", fontWeight: "bold", mr: 1 }}>
              ₹{orderDetails.price}
            </Typography>
           <img src={CheckCircle.src} width={20} height={20} style={{ scale: 1.5}}></img>
          </Box>
          <Typography sx={{ fontSize: "0.875rem",  mb: 2}}>
            TICKET BOOKED SUCCESSFULLY
          </Typography>
          <Typography sx={{ fontSize: "0.675rem",  mb: 1}}>
          {bookingTime}
          </Typography>
        </Box>

        {/* Horizontal Line */}
        <Box sx={{ borderBottom: "1px dotted #adadad", width: "90%", my: 2,  }} />

        {/* Sticky Countdown Box */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "#e3f2fd",
            padding: 1,
            borderRadius: 4,
            mb: 2,
            width: "90%",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.875rem", justifyItems: "center" }}>
            Your ticket is valid for 
          </Typography>
          <Typography sx={{ fontSize: "2.25rem", justifyItems: "center" ,fontWeight: "bold"}}>
          {countdown}
          </Typography>
          <Typography sx={{ fontSize: "0.675rem", justifyItems: "center" }}>
          HOURS  MINUTES  SECONDS
          </Typography>
          <Button
            variant="contained"
            onClick={handleViewTickets}
            sx={{ backgroundColor: "#0288d1", color: "#ffffff", borderRadius: 2, textTransform: "none" ,width: "95%" }}
          >
            View Your Tickets
          </Button>
        </Box>
        
      </Box>
      <Box sx={{ borderBottom: "5px solid #00B8F6",width: "100%",}} />
      <Box sx={{ borderBottom: "5px solid #2A50D9",width: "100%", }} />

      {/* Trip Details */}
      <Box sx={{ mb: 2  ,border: "1px solid #e0e0e0", borderRadius: 2, padding: 1 ,my:2 }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", py: 1 }}>Trip Details</Typography>
        <Typography sx={{ fontSize: "0.7rem"  ,color: "#757575",pt: 1  }}>OPERATOR</Typography>
        <Typography sx={{ fontSize: "0.775rem" ,pb:1}}>Surat Sitilink</Typography>
        <Box sx={{ borderBottom: "1px dashed #e0e0e0", my: 1 }} />
        
        <Box sx={{ display: "flex", alignItems: "center", }}>
        <Typography sx={{ fontSize: "0.775rem" ,}}>Order ID: {orderId}</Typography>
          <IconButton onClick={handleCopyOrderId} sx={{ ml: 1 }}>
            <Typography sx={{ fontSize: "0.65rem" }}>Copy</Typography>
          </IconButton>
        </Box>
        <Typography sx={{ fontSize: "0.75rem", mt: 1 }}>
          For any queries regarding your ticket, please contact Surat Sitilink with Order ID.
        </Typography>
      </Box>

      {/* Payment Details */}
      <Box sx={{ mb: 2  ,border: "1px solid #e0e0e0", borderRadius: 2, padding: 1 ,my:2 }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", py: 1 }}>Payment Details</Typography>
        <Typography sx={{ fontSize: "0.675rem" ,color: "#757575",py: 1  }}>FARE BREAKUP</Typography>
        <Typography sx={{ fontSize: "0.75rem",py: 1  ,borderBottom: "1px solid #e0e0e0"}}> 1x Adult</Typography>
        <Typography sx={{ fontSize: "0.775rem" ,py: 1,borderBottom:"1px dashed #e0e0e0"}}>Total: ₹{orderDetails.price}</Typography>
        <Typography sx={{ fontSize: "0.775rem" ,color: "#757575", py: 1}}>Payment Mode  </Typography>
        <Typography sx={{ fontSize: "0.775rem" ,py: 1}}>UPI Linked Bank Account</Typography>
        <Typography sx={{ fontSize: "0.775rem" }}>₹{orderDetails.price}</Typography>
        <Typography sx={{ fontSize: "0.775rem" ,py: 1}}>Transaction ID: {transactionId}</Typography>
      </Box>

  
    </Box>
  );
}