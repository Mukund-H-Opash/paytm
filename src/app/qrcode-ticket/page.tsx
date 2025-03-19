
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
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QRCode from "react-qr-code";
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
import Loader from "../components/Loader";
import Image from "next/image";

const QRTickets =() =>{
  const router = useRouter();
  const dispatch = useDispatch();
  const { from, to, price, passengers, ticketId, issuedAt, transactionId } = useSelector(
    (state: RootState) => state.ticket
  );
  const [countdown, setCountdown] = useState<string>("02:00:00");
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    console.log("Initial Redux State:", { from, to, price, passengers, ticketId, issuedAt, transactionId });

    // Restore from localStorage if Redux is empty
    if (!from && !to && !price && !passengers && !ticketId && !issuedAt) {
      const storedTicket = localStorage.getItem("activeTicket");
      console.log("Stored Ticket from localStorage:", storedTicket);

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

    // Set loading to false after restoration attempt
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

  // Show loading until restoration is complete
  if (isLoading) {
    return <Loader />;
  }

  // Redirect only if no data after restoration
  if (!from || !to || !price || !passengers || !ticketId || !issuedAt) {
    console.log("Redux still empty after restoration, redirecting to /ticket-booking");
    router.push("/ticket-booking");
    return null;
  }

  const issuedTime = new Date(issuedAt).toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const qrValue = JSON.stringify({
    ticketId,
    from,
    to,
    passengers,
    price,
    issuedAt,
    transactionId,
  });

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <IconButton onClick={() => router.push("/ticket-confirmation")} sx={{ color: "#000000" }}>
          <ArrowBackIcon />
        </IconButton>
        <Image src="/scan-pay.png" alt="Logo" height={24} width={24} />
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          {passengers} QR Ticket{passengers > 1 ? "s" : ""}
        </Typography>
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Help</Button>
      </Box>
      <Typography
        sx={{ fontSize: "1.5rem", mb: 1, fontWeight: "bold", p: 1, textAlign: "center" }}
      >
        {from.length > 10 ? `${from.slice(0, 10)}...` : from}{" "}
        <ArrowForward sx={{ fontSize: "16px", mx: 1 }} />{" "}
        {to.length > 10 ? `${to.slice(0, 10)}...` : to}
      </Typography>
      <Box sx={{ display: "flex", textAlign: "center", mb: 2, justifyContent: "center" }}>
        <Typography sx={{ fontSize: "0.9rem", mb: 2 }}>
          Scan this QR at entry & exit points
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <QRCode
          value={qrValue}
          size={250}
          fgColor="#000000"
          bgColor="#ffffff"
          level="H"
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 1,
          borderRadius: 4,
          mb: 2,
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.875rem", justifyItems: "center" }}>
          Your ticket is valid for
        </Typography>
        <Typography sx={{ fontSize: "2.25rem", justifyItems: "center", fontWeight: "bold" }}>
          {countdown}
        </Typography>
        <Typography sx={{ fontSize: "0.675rem", justifyItems: "center" }}>
          HOURS MINUTES SECONDS
        </Typography>
      </Box>
      <Box sx={{ mb: 2, border: "1px solid #e0e0e0", borderRadius: 2, padding: 1 }}>
        <Typography sx={{ fontSize: "0.85rem", mb: 1 }}>Ticket Details</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e0e0e0", p: 1 }}>
          <Typography sx={{ fontSize: "0.75rem" }}>Issued On:</Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>{issuedTime}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e0e0e0", p: 1 }}>
          <Typography sx={{ fontSize: "0.75rem" }}>Order ID:</Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>{ticketId}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #e0e0e0", p: 1 }}>
          <Typography sx={{ fontSize: "0.75rem" }}>Transaction ID:</Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>{transactionId}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, pb: 0 }}>
          <Typography sx={{ fontSize: "0.75rem" }}>Ticket Type:</Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>
            {passengers} Adult{passengers > 1 ? "s" : ""}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default QRTickets;