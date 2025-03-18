
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoIcon from "@mui/icons-material/Info";
import { RootState } from "../../store/store";
import { setFrom, setTo, setPassengers, setPrice, setIssuedAt, setTicketId } from "../../store/ticketSlice";
import Image from "next/image";
import "../../app/globals.css";

export default function TicketBookingPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { from, to, passengers, price } = useSelector((state: RootState) => state.ticket);

  interface Order {
    from: string;
    to: string;
    via: string;
    price: number;
    passengers: number;
    issuedAt?: string;
    ticketId?: string;
  }

  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [activeTicket, setActiveTicket] = useState<Order | null>(null);

  useEffect(() => {
    const storedOrders = localStorage.getItem("recentOrders");
    const storedActiveTicket = localStorage.getItem("activeTicket");
    
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

    if (storedActiveTicket) {
      const ticket = JSON.parse(storedActiveTicket);
      const issuedAt = new Date(ticket.issuedAt);
      const now = new Date();
      const expiresAt = new Date(issuedAt.getTime() + 2 * 60 * 60 * 1000);
      if (now < expiresAt) {
        setActiveTicket(ticket);
      } else {
        localStorage.removeItem("activeTicket");
      }
    }
  }, []);

  useEffect(() => {
    if (recentOrders.length > 0) {
      localStorage.setItem("recentOrders", JSON.stringify(recentOrders));
    }
  }, [recentOrders]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedFrom = urlParams.get("from");
    const selectedTo = urlParams.get("to");
    const selectedPrice = urlParams.get("price");

    if (selectedFrom && selectedFrom !== from) {
      
      dispatch(setFrom(selectedFrom));
    }
    if (selectedTo && selectedTo !== to) {
      
      dispatch(setTo(selectedTo));
    }
    if (selectedPrice && Number(selectedPrice) !== price) {
      dispatch(setPrice(Number(selectedPrice)));
    }
  }, [dispatch,from, to, price]);

  const handleBackClick = (): void => {
    router.push("/sitilink");
  };

  const handleStopSelection = (field: "from" | "to"): void => {
    router.push(`/selectstop?field=${field}`);
  };

  const handleBuyTicket = (): void => {
    const ticketId = `T${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const issuedAt = Date.now();

    const newOrder: Order = {
      from: from.length > 5 ? `${from.slice(0, 5)}...` : from,
      to: to.length > 5 ? `${to.slice(0, 5)}...` : to,
      via: "Via Adajan Gam Brts",
      price: price || 1,
      passengers,
      issuedAt:new Date(issuedAt).toISOString(),
      ticketId,
    };

    const updatedOrders = [newOrder, ...recentOrders].slice(0, 3);
    setRecentOrders(updatedOrders);
    setActiveTicket(newOrder);
    localStorage.setItem("activeTicket", JSON.stringify(newOrder));
    dispatch(setFrom(newOrder.from));
    dispatch(setTo(newOrder.to));
    dispatch(setPrice(newOrder.price));
    dispatch(setPassengers(newOrder.passengers));
    dispatch(setTicketId(ticketId));
    dispatch(setIssuedAt(issuedAt));
   
      // setFrom("");
      // setTo("");

    const paymentParams = new URLSearchParams({
      from: newOrder.from,
      to: newOrder.to,
      price: newOrder.price.toString(),
      passengers: newOrder.passengers.toString(),
    });
    router.push(`/payment?${paymentParams.toString()}`);
  };

  const handleBuyRecent = (order: Order): void => {
    dispatch(setFrom(order.from));
    dispatch(setTo(order.to));
    dispatch(setPassengers(order.passengers));
    dispatch(setPrice(order.price));
    router.push(`/payment?from=${order.from}&to=${order.to}&price=${order.price}&passengers=${order.passengers}`);
  };

  const isBuyButtonEnabled = from !== "" && to !== "";

  const getTimeRemaining = (issuedAt: string): string => {
    const now = new Date();
    const expiresAt = new Date(new Date(issuedAt).getTime() + 2 * 60 * 60 * 1000);
    const diffMs = expiresAt.getTime() - now.getTime();
    if (diffMs <= 0) return "Expired";
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const getExpiryTime = (issuedAt: string): string => {
    const expiryDate = new Date(new Date(issuedAt).getTime() + 2 * 60 * 60 * 1000);
    return expiryDate.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 2, minHeight: "100vh" }}>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowBackIcon
            sx={{ color: "#000000", fontSize: "24px", cursor: "pointer" }}
            onClick={handleBackClick}
          />
          <Typography
            variant="h5"
            sx={{ color: "#000000", fontSize: { xs: "1rem", sm: "1.5rem" }, ml: 1, fontWeight: 800 }}
          >
            Buy City Bus Ticket
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#757575", fontSize: { xs: "0.875rem", sm: "1rem" }, ml: 4  }}>
            Surat ▼
          </Typography>
          <Button sx={{ color: "#0288d1", textTransform: "none" }}>Help</Button>
        </Box>
      </Box>

      
      {activeTicket && (
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: 8,
            padding: 2,
            mb: 2,
            borderTop : "2px solid #e0e0e0",
            borderLeft: "2px solid #e0e0e0",
            borderRight: "2px solid #e0e0e0",
            borderBottom: "5px solid #FFD700", 

            position: "relative",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)", // Notched corner
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Ticket Info */}
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 0 }}>
          <Typography sx={{ fontSize: "0.875rem", color: "#757575", mb: 1, justifyContent: "left", textAlign: "left" }}>
            {activeTicket.passengers} Adult Ticket
          </Typography>
          </Box>

          {/* Route and QR Code */}
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Box sx={{ display: "flex", alignItems: "center" ,p:2 ,pb:1}}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#757575",
                    mr: 1,
                  }}
                />
                <Typography sx={{ fontSize: "1rem" }}>
                  {activeTicket.from}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", p:2,pt:1 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#757575",
                    mr: 1,
                  }}
                />
                <Typography sx={{ fontSize: "1rem" }}>
                  {activeTicket.to}
                </Typography>
              </Box>
              
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image src="/dummy-qr.png" alt="Logo" height={50 } width={50}/>
              <Button
                sx={{ color: "#0288D1", textTransform: "none", fontSize: "0.875rem", mt: 0.1 }}
                onClick={() => router.push("/qr-tickets")}
              >
                tap to view
              </Button>
            </Box>
          </Box>

          {/* Expiry Info */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#FFD700",
                mr: 1,
              }}
            />
            <Typography sx={{ fontSize: "0.75rem", color: "#757575" }}>
              ticket will expire at {getExpiryTime(activeTicket.issuedAt!)}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 800 }}>
            Recent Orders
          </Typography>
          <Button sx={{ color: "#0288d1", textTransform: "none" }}>View All</Button>
        </Box>
        {recentOrders.map((order, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: 1,
              border: "1px solid #e0e0e0",
              padding: 1,
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <Typography sx={{ fontSize: "0.875rem", color: "#757575", mb: 1 }}>
                  {order.passengers} Adult Ticket
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  {order.from} <ArrowForwardIcon sx={{ fontSize: "16px" }} /> {order.to}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", color: "#757575" }}>{order.via}</Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#0288d1",
                  borderColor: "#0288d1",
                  borderRadius: "20px",
                  textTransform: "none",
                }}
                onClick={() => handleBuyRecent(order)}
              >
                Buy ₹{order.price}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontSize: "1rem", mb: 1, fontWeight: 800 }}>
          Buy New Ticket
        </Typography>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            opacity: 0.61,
            borderRadius: 1,
            padding: 1,
            mb: 2,
          }}
        >
          <TextField
            label="From"
            value={from}
            onClick={() => handleStopSelection("from")}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="To"
            value={to}
            onClick={() => handleStopSelection("to")}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{ readOnly: true }}
          />
          <Box sx={{ display: "flex", alignItems: "center", mb: 2, border: "1px solid #ADADAD", borderRadius: "5px" }}>
            <Typography sx={{ mr: 2, color: "#757575", p: 1 }}>Passenger</Typography>
            <Select
              value={passengers}
              onChange={(e) => {
                const newPassengers = Number(e.target.value);
                setPassengers(newPassengers);
                dispatch(setPassengers(newPassengers));
              }}
              sx={{ width: "150px", border: "none" }}
            >
              {[1, 2, 3, 4].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} Adult
                </MenuItem>
              ))}
            </Select>
          </Box>
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
            }}
          >
            {isBuyButtonEnabled ? (
              <>
                Buy Ticket for ₹{price || 12}
                <Typography sx={{ fontSize: "0.75rem", ml: 1 }}>
                  20% discount only on Paytm
                </Typography>
              </>
            ) : (
              "Buy Ticket"
            )}
          </Button>
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