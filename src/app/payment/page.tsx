"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// SVG logos (you can replace these with actual SVG imports or URLs from your assets)
const UPILogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#5F6368"/>
    <path d="M12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 8.24 14.76 6 12 6ZM12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14Z" fill="#5F6368"/>
  </svg>
);

const SBILogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="#0288d1"/>
    <path d="M12 6C9.24 6 7 8.24 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 8.24 14.76 6 12 6ZM12 14C10.34 14 9 12.66 9 11C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 12.66 13.66 14 12 14Z" fill="#ffffff"/>
  </svg>
);

export default function PaymentPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("sbi");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get("from");
    const to = urlParams.get("to");
    const price = urlParams.get("price");
    const passengers = urlParams.get("passengers");

    if (from && to && price && passengers) {
      setOrderDetails({ from, to, price, passengers });
    } else {
      // Redirect back if no order details are found
      router.push("/ticket-booking");
    }
  }, [router]);

  const handleBackClick = () => {
    router.push("/ticket-booking");
  };

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePaySecurely = () => {
    // Redirect to UPI page (you can create a new page for UPI payment)
    // For now, we'll redirect to a placeholder UPI page
    router.push(`/upi-payment?amount=${orderDetails?.price}`);
  };

  if (!orderDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#ffffff", padding: 2, minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <ArrowBackIcon
          sx={{ color: "#000000", fontSize: "24px", cursor: "pointer", mr: 1 }}
          onClick={handleBackClick}
        />
        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
          Surat Sitilink
        </Typography>
      </Box>

      {/* Payment Amount */}
      <Typography variant="h6" sx={{ fontSize: "1.25rem", mb: 2 }}>
        Paying ₹{orderDetails.price}
      </Typography>

      {/* Payment Methods */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <UPILogo />
          <Typography sx={{ ml: 1, fontSize: "1rem", fontWeight: "bold" }}>
            UPI
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "0.875rem", color: "#757575", mb: 2 }}>
          Pay via UPI apps like Paytm, Google Pay, PhonePe, etc.
        </Typography>

        <Typography sx={{ fontSize: "1rem", fontWeight: "bold", mb: 1 }}>
          Payment Options
        </Typography>

        <FormControl component="fieldset" sx={{ width: "100%" }}>
          <RadioGroup
            value={selectedPaymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <FormControlLabel
              value="sbi"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SBILogo />
                  <Typography sx={{ ml: 1, fontSize: "0.875rem" }}>
                    SBI Bank - 0100
                  </Typography>
                  <Typography sx={{ ml: 1, fontSize: "0.75rem", color: "#757575" }}>
                    Check Bank Balance
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="bankcard"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Bank Card or Credit, Debit, VISA & more
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="prepaid"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Prepaid - RuPay, Visa, MasterCard & more
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="upi"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    UPI - BHIM, Google Pay, PhonePe & more
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              value="netbanking"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    Net Banking - 100+ Banks Supported
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Security Logos */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Typography sx={{ fontSize: "0.75rem", color: "#757575" }}>
          Secured by Paytm | PCI DSS Certified | Norton Secured
        </Typography>
      </Box>

      {/* Pay Securely Button */}
      <Button
        variant="contained"
        onClick={handlePaySecurely}
        sx={{
          backgroundColor: "#0288d1",
          color: "#ffffff",
          borderRadius: "20px",
          textTransform: "none",
          width: "100%",
          padding: "10px",
        }}
      >
        Pay Securely ₹{orderDetails.price}
      </Button>
    </Box>
  );
}