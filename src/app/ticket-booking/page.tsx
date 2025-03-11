"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoIcon from "@mui/icons-material/Info";

export default function TicketBookingPage() {
  const router = useRouter();
  interface Order {
    from: string;
    to: string;
    via: string;
    price: number;
    passengers: number;
  }

  
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [passengers, setPassengers] = useState<number>(1);
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [ticketPrice, setTicketPrice] = useState<number>(); 

  // Load recent orders from localStorage on mount
  useEffect(() => {
    const storedOrders = localStorage.getItem("recentOrders");
    if (storedOrders) {
      setRecentOrders(JSON.parse(storedOrders));
    } else {
      
      setRecentOrders([
        {
          from: "Adaj...",
          to: "Sanjeev Ku...",
          via: "Via Adajan Gam Brts",
          price: 4,
          passengers: 1,
        },
      ]);
    }
  }, []);

  // Save orders to localStorage
  useEffect(() => {
    if (recentOrders.length > 0) {
      localStorage.setItem("recentOrders", JSON.stringify(recentOrders));
    }
  }, [recentOrders]);

  // Buy Ticket button enabled
  const isBuyButtonEnabled = from !== "" && to !== "";

  
  const handleBackClick = (): void => {
    router.push("/sitilink");
  };

  // Handle redirect to Select Stop page for both From and To fields
  const handleStopSelection = (field: "from" | "to"): void => {
    router.push(`/selectstop?field=${field}`);
  };

  // Load selected stops from query params (if redirected back from Select Stop page)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedFrom = urlParams.get("from");
    const selectedTo = urlParams.get("to");

    if (selectedFrom) setFrom(selectedFrom);
    if (selectedTo) setTo(selectedTo);

    // Calculate dynamic price based on selected stops (example logic)
    if (selectedFrom && selectedTo) {
      const distanceFactor = Math.abs(selectedFrom.length - selectedTo.length) + 10;
      setTicketPrice(1 + distanceFactor); // Dynamic price calculation
    }
  }, []);

  // Handle Buy Ticket button click
  const handleBuyTicket = (): void => {
    const newOrder: Order = {
      from: from.length > 5 ? `${from.slice(0, 5)}...` : from, // Truncate to 5 chars
      to: to.length > 5 ? `${to.slice(0, 5)}...` : to, // Truncate to 5 chars
      via: "Via Adajan Gam Brts", // Example via route
      price: ticketPrice ?? 12,
      passengers,
    };

    // Add new order to recent orders (limit to 3)
    const updatedOrders = [newOrder, ...recentOrders].slice(0, 3);
    setRecentOrders(updatedOrders);

    const paymentParams = new URLSearchParams({
      from: newOrder.from,
      to: newOrder.to,
      price: newOrder.price.toString(),
      passengers: newOrder.passengers.toString(),
    });
    router.push(`/payment?${paymentParams.toString()}`);
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
      {/* Header */}
      <Box
        sx={{
          display: { xs: "block", sm: "flex" }, // Stack on small screens
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          "& > *": { marginBottom: { xs: 1, sm: 0 } }, // Adjust spacing on small screens
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowBackIcon
            sx={{ color: "#000000", fontSize: "24px", cursor: "pointer" }}
            onClick={handleBackClick}
          />
          <Typography
            variant="h5"
            sx={{ color: "#000000", fontSize: { xs: "1rem", sm: "1.25rem" }, ml: 1 }}
          >
            Buy City Bus Ticket
          </Typography>
          <Typography
            sx={{ color: "#757575", fontSize: { xs: "0.875rem", sm: "1rem" }, ml: 1 }}
          >
            Surat ▼
          </Typography>
        </Box>
        <Button
          onClick={() => {}}
          sx={{ color: "#0288d1", textTransform: "none", fontSize: { xs: "0.875rem", sm: "1rem" } }}
        >
          Help
        </Button>
      </Box>

      {/* Recent Orders */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem" }}>
            Recent Orders
          </Typography>
          <Button
            onClick={() => {}}
            sx={{ color: "#0288d1", textTransform: "none" }}
          >
            View All
          </Button>
        </Box>
        {recentOrders.map((order, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: 1,
              padding: 1,
              mb: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>
                  {order.passengers} Adult Ticket
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  {order.from} <ArrowForwardIcon sx={{ fontSize: "16px" }} />{" "}
                  {order.to}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#757575" }}>
                  {order.via}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#0288d1",
                  borderColor: "#0288d1",
                  borderRadius: "20px",
                  textTransform: "none",
                }}
              >
                Buy ₹{order.price}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Buy New Ticket */}
      <Box>
        <Typography variant="h6" sx={{ fontSize: "1rem", mb: 1 }}>
          Buy New Ticket
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: 1,
            padding: 1,
            mb: 2,
          }}
        >
          {/* From Field */}
          <TextField
            label="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onClick={() => handleStopSelection("from")}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              readOnly: true,
            }}
          />

          {/* To Field */}
          <TextField
            label="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onClick={() => handleStopSelection("to")}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
              readOnly: true,
            }}
          />

          {/* Passenger Dropdown */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2,border: "1px solid #ADADAD",borderRadius: "5px"}}>
            <Typography sx={{ mr: 2, color: "#757575", p: 1 }}>Passenger</Typography>
            <Select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              sx={{ width: "150px" ,border: "none",}}
            >
              {[1, 2, 3, 4].map((num) => (
                <MenuItem key={num} value={num} >
                  {num} Adult
                </MenuItem>
              ))}
            </Select>
          </Box>

          {/* Buy Ticket Button */}
          <Button
            variant="contained"
            disabled={!isBuyButtonEnabled}
            onClick={handleBuyTicket}
            sx={{
              backgroundColor: isBuyButtonEnabled ? "#0288d1" : "#e0e0e0",
              color: "#ffffff",
              borderRadius: "20px",
              textTransform: "none",
              width: "100%",
              mb: 1,
              ...(isBuyButtonEnabled
                ? {
                    "&:disabled": {
                      display: "block",
                      padding: "6px 16px",
                    },
                  }
                : {
                    "&:disabled": {
                      display: "block",
                      padding: "6px 16px",
                      "& > *": { display: "none" }, // Hide extra text when disabled
                    },
                  }),
            }}
          >
            {isBuyButtonEnabled ? (
              <>
                Buy Ticket for ₹{ticketPrice}
                <Typography sx={{ fontSize: "0.75rem", ml: 1 }}>
                  20% discount only on Paytm
                </Typography>
              </>
            ) : (
              "Buy Ticket"
            )}
          </Button>

          {/* Info Text */}
          <Box sx={{ display: "flex", alignItems: "center", color: "#757575" }}>
            <InfoIcon sx={{ fontSize: "16px", mr: 1 }} />
            <Typography sx={{ fontSize: "0.75rem" }}>
              All bus tickets will be valid for 2 hours post booking
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

