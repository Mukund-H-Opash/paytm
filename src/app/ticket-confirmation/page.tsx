
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { RootState } from "../../store/store";
import {
  setFrom,
  setTo,
  setPrice,
  setPassengers,
  setTicketId,
  setIssuedAt,
  setTransactionId,
} from "../../store/ticketSlice";
import Image from "next/image";

export default function TicketConfirmationPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { from, to, price, passengers, ticketId, issuedAt, transactionId } = useSelector(
    (state: RootState) => state.ticket
  );
  const [countdown, setCountdown] = useState<string>("02:00:00");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!from && !to && !price && !passengers && !ticketId && !issuedAt) {
      const storedTicket = localStorage.getItem("activeTicket");
     

      if (storedTicket) {
        const ticket = JSON.parse(storedTicket);
        dispatch(setFrom(ticket.from || ""));
        dispatch(setTo(ticket.to || ""));
        dispatch(setPrice(ticket.price || 0));
        dispatch(setPassengers(ticket.passengers || 0));
        dispatch(setTicketId(ticket.ticketId || ""));
        dispatch(setIssuedAt(new Date(ticket.issuedAt).getTime() || 0));
        dispatch(setTransactionId(ticket.transactionId || ""));
        console.log("Dispatched Ticket to Redux:", ticket);
      } else {
        console.log("No activeTicket found, redirecting to /ticket-booking");
        router.push("/ticket-booking");
        return;
      }
    }

    // Save to localStorage
    const activeTicket = {
      from: from.length > 5 ? `${from.slice(0, 5)}...` : from,
      to: to.length > 5 ? `${to.slice(0, 5)}...` : to,
      via: "Via Adajan Gam Brts",
      price,
      passengers,
      issuedAt: new Date(issuedAt).toISOString(),
      ticketId,
      transactionId,
    };
    localStorage.setItem("activeTicket", JSON.stringify(activeTicket));

    // Set loading to false after restoration
    setIsLoading(false);

    const effectiveIssuedAt = issuedAt || Date.now();
    const expiresAt = effectiveIssuedAt + 7200 * 1000;
    const updateCountdown = () => {
      const now = Date.now();
      const timeLeft = Math.max(0, Math.floor((expiresAt - now) / 1000));
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      setCountdown(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
      if (timeLeft <= 0) clearInterval(timer);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [from, to, price, passengers, ticketId, issuedAt, transactionId, router, dispatch]);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!from || !to || !price || !passengers || !ticketId || !issuedAt) {
    console.log("Redux still empty after restoration, redirecting to /ticket-booking");
    console.log({ from, to, price, passengers, ticketId, issuedAt });
    router.push("/ticket-booking");

    return null;
  }

  const bookingTime = new Date(issuedAt).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 2, minHeight: "100vh" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <IconButton onClick={() => router.push("/ticket-booking")} sx={{ color: "#000000" }}>
          <ArrowBackIcon />
        </IconButton>
        <Image src="/paytm.png" alt="Paytm Logo" width={100} height={50} style={{ objectFit: "contain" }} />
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Help</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#96E9FF",
          borderRadius: 2,
          padding: 1,
          my: 2,
          mb: 0,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 2, mt: 2 }}>
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
              className="scl"
              style={{ objectFit: "contain", scale: 1.5 }}
            />
          </Box>
          <Typography sx={{ fontSize: "1.2rem", mb: 2, fontWeight: "bold" }}>
            {from} <ArrowForwardIcon sx={{ fontSize: "16px", mx: 1 }} /> {to}
          </Typography>
          <Typography sx={{ fontSize: "0.875rem", mr: 1, mb: 2 }}>
            {passengers} Adult Ticket{passengers > 1 ? "s" : ""}
          </Typography>
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
              <Image
                src="/toon.png"
                alt="User icon"
                width={20}
                height={27}
                style={{ overflow: "hidden", width: 20, height: 27 }}
              />
              <Typography sx={{ fontSize: "0.875rem", ml: 1, fontWeight: "bold" }}>{passengers}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
            <Typography sx={{ fontSize: "1.50rem", fontWeight: "bold", mr: 1 }}>₹{price}</Typography>
            <Image src="/check.png" width={20} height={20} style={{ scale: 1.5 }} alt="Check" />
          </Box>
          <Typography sx={{ fontSize: "0.875rem", mb: 2 }}>TICKET BOOKED SUCCESSFULLY</Typography>
          <Typography sx={{ fontSize: "0.675rem", mb: 1 }}>{bookingTime}</Typography>
        </Box>
        <Box sx={{ borderBottom: "1px dotted #adadad", width: "90%", my: 2 }} />
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
          <Typography sx={{ fontSize: "0.875rem", justifyItems: "center" }}>Your ticket is valid for</Typography>
          <Typography sx={{ fontSize: "2.25rem", justifyItems: "center", fontWeight: "bold" }}>{countdown}</Typography>
          <Typography sx={{ fontSize: "0.675rem", justifyItems: "center" }}>HOURS MINUTES SECONDS</Typography>
          <Button
            variant="contained"
            onClick={() => router.push("/qr-tickets")}
            sx={{ backgroundColor: "#0288d1", color: "#ffffff", borderRadius: 2, textTransform: "none", width: "95%" }}
          >
            View Your Tickets
          </Button>
        </Box>
      </Box>
      <Box sx={{ borderBottom: "5px solid #00B8F6", width: "100%" }} />
      <Box sx={{ borderBottom: "5px solid #2A50D9", width: "100%" }} />
      <Box sx={{ mb: 2, border: "1px solid #e0e0e0", borderRadius: 2, padding: 1, my: 2 }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", py: 1 }}>Trip Details</Typography>
        <Typography sx={{ fontSize: "0.7rem", color: "#757575", pt: 1 }}>OPERATOR</Typography>
        <Typography sx={{ fontSize: "0.775rem", pb: 1 }}>Surat Sitilink</Typography>
        <Box sx={{ borderBottom: "1px dashed #e0e0e0", my: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "0.775rem" }}>Order ID: {ticketId}</Typography>
          <IconButton onClick={() => { navigator.clipboard.writeText(ticketId); alert("Order ID copied!"); }} sx={{ ml: 1 }}>
            <Typography sx={{ fontSize: "0.65rem" }}>Copy</Typography>
          </IconButton>
        </Box>
        <Typography sx={{ fontSize: "0.75rem", mt: 1 }}>
          For any queries regarding your ticket, please contact Surat Sitilink with Order ID.
        </Typography>
      </Box>
      <Box sx={{ mb: 2, border: "1px solid #e0e0e0", borderRadius: 2, padding: 1, my: 2 }}>
        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", py: 1 }}>Payment Details</Typography>
        <Typography sx={{ fontSize: "0.675rem", color: "#757575", py: 1 }}>FARE BREAKUP</Typography>
        <Typography sx={{ fontSize: "0.75rem", py: 1, borderBottom: "1px solid #e0e0e0" }}>
          {passengers}x Adult
        </Typography>
        <Typography sx={{ fontSize: "0.775rem", py: 1, borderBottom: "1px dashed #e0e0e0" }}>
          Total: ₹{price}
        </Typography>
        <Typography sx={{ fontSize: "0.775rem", color: "#757575", py: 1 }}>Payment Mode</Typography>
        <Typography sx={{ fontSize: "0.775rem", py: 1 }}>UPI Linked Bank Account</Typography>
        <Typography sx={{ fontSize: "0.775rem" }}>₹{price}</Typography>
        <Typography sx={{ fontSize: "0.775rem", py: 1 }}>Transaction ID: {transactionId}</Typography>
      </Box>
    </Box>
  );
}