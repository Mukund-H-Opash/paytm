"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { RootState } from "../../store/store";
import { setFrom, setTo, setPrice, setPassengers, setTicketId, setIssuedAt, setTransactionId } from "../../store/ticketSlice";
import Image from "next/image";
import Loader from "../components/Loader";
import "../../app/globals.css";

export default function UPIPaymentPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { from, to, price, passengers, ticketId, issuedAt, transactionId } = useSelector(
    (state: RootState) => state.ticket
  );
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("UPIPaymentPage Initial Redux State:", { from, to, price, passengers, ticketId, issuedAt, transactionId });

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
        console.log("Restored Ticket to Redux:", ticket);
      } else {
        console.log("No activeTicket, redirecting to /ticket-booking");
        router.push("/ticket-booking");
        return;
      }
    }

    if (!from || !to || !price || !passengers || !ticketId || !issuedAt) {
      console.log("Missing required fields after restoration, redirecting to /ticket-booking");
      router.push("/ticket-booking");
      return;
    }

    setIsLoading(false);
  }, [from, to, price, passengers, ticketId, issuedAt, transactionId, router, dispatch]);

  const handleBackClick = () => {
    router.push("/ticket-booking");
  };

  const handleKeyPress = () => {
    if (activeIndex >= 6) return;
    const newPin = [...pin];
    newPin[activeIndex] = "•";
    setPin(newPin);
    if (activeIndex < 5) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBackspace = () => {
    if (activeIndex <= 0) return;
    const newPin = [...pin];
    newPin[activeIndex - 1] = "";
    setPin(newPin);
    setActiveIndex(activeIndex - 1);
  };

  const handleConfirmPayment = () => {
    const newTransactionId = Math.floor(100000000000 + Math.random() * 900000000000);
    dispatch(setTransactionId(String(newTransactionId)));
    console.log("Confirm Payment - New Transaction ID:", newTransactionId);

    const newTicket = {
      from: from!.length > 10 ? `${from!.slice(0, 9)}...` : from!,
      to: to!.length > 10 ? `${to!.slice(0, 9)}...` : to!,
      via: "Via Adajan Gam Brts",
      price: price!,
      passengers,
      issuedAt: new Date(issuedAt).toISOString(),
      ticketId,
      transactionId: newTransactionId,
    };

    // Update activeTicket with all fields
    const updatedTicket = {
      from,
      to,
      via: "Via Adajan Gam Brts",
      price,
      passengers,
      issuedAt: new Date(issuedAt).toISOString(),
      ticketId,
      transactionId: newTransactionId,
    };
    localStorage.setItem("activeTicket", JSON.stringify(updatedTicket));

      dispatch(setFrom(newTicket.from));
      dispatch(setTo(newTicket.to));
      dispatch(setPrice(newTicket.price));
      dispatch(setPassengers(newTicket.passengers));
      dispatch(setTicketId(newTicket.ticketId));
      dispatch(setIssuedAt(issuedAt));
    console.log("Updated activeTicket in localStorage:", updatedTicket);

    router.push("/ticket-confirmation");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ p: 0, m: 0 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, p: 2 }}>
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "500" }}>SBI Bank</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/upi-logo.png" alt="UPI Logo" width={60} height={30} className="scl" />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#F5F5F5", p: 1, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>To:</Typography>
          <Typography sx={{ fontSize: "0.875rem" }}>Surat Sitilink</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0 }}>
          <Typography sx={{ fontSize: "0.875rem", color: "#757575" }}>Sending:</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "0.875rem", mr: 1 }}>₹{price}</Typography>
            <KeyboardArrowDownIcon sx={{ color: "gray" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 1, p: 1.5 }}>
        <Typography sx={{ fontSize: "0.9rem", fontWeight: "500", mb: 2, textAlign: "center" }}>
          ENTER 6-DIGIT UPI PIN
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4 }}>
          {pin.map((digit, index) => (
            <Box
              key={index}
              sx={{
                width: 70,
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "2px solid rgba(6, 68, 141, 0.3)",
                fontSize: "3rem",
              }}
            >
              {digit}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            backgroundColor: "#F5E690",
            borderRadius: 4,
            m: 4,
            mb: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.875rem", display: "flex", alignItems: "center" }}>
            <Image src="/error.png" alt="" width={50} height={30} className="mary" />
            You are SENDING ₹{price} from your account to SURAT SITILINK
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, mt: 3 }}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
          <Button
            key={num}
            onClick={handleKeyPress}
            sx={{ backgroundColor: "#f5f5f5", color: "#06448D", fontSize: "1.5rem", height: 60, borderRadius: 0 }}
          >
            {num}
          </Button>
        ))}
        <Button
          onClick={handleBackspace}
          sx={{ backgroundColor: "#f5f5f5", color: "#06448D", fontSize: "1.5rem", height: 60, borderRadius: 0 }}
        >
          <BackspaceIcon />
        </Button>
        <Button
          onClick={handleKeyPress}
          sx={{ backgroundColor: "#f5f5f5", color: "#06448D", fontSize: "1.5rem", height: 60, borderRadius: 0 }}
        >
          0
        </Button>
        <Button
          onClick={handleConfirmPayment}
          sx={{ backgroundColor: "#06448D", color: "#ffffff", fontSize: "1.5rem", height: 60, borderRadius: 2 }}
          disabled={pin.some((digit) => digit === "")}
        >
          <CheckIcon />
        </Button>
      </Box>
    </Box>
  );
}