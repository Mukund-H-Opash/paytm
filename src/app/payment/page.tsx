'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import sbiLogo from "../../../public/sbi.png";
import rupayLogo from "../../../public/rupay.png";
import visaLogo from "../../../public/visa.png";
import mastercardLogo from "../../../public/mastercard.png";
import paytmLogo from "../../../public/paytm.png";
import checkcircle from "../../../public/ckeck.png";
import upiLogo from "../../../public/upi-1.png";
import card from "../../../public/cradit-card.png";
import plus from "../../../public/plus.png";
import netBankingLogo from "../../../public/net-banking.png";
import phonepeLogo from "../../../public/phone-pay.png";
import gpayLogo from "../../../public/g-pay.png";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Image from "next/image";


export default function PaymentPage() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<{ from: string; to: string; price: string; passengers: string }>({ from: '', to: '', price: '', passengers: '' });
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
    router.push(`/upi-payment?amount=${orderDetails?.price}`);
  };

  if (!orderDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5",  }}>
      {/* Header with Back Button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <IconButton >
          <ArrowBackIcon />
        </IconButton>
        <Box>
          <Typography variant="body2" sx={{ ml: 1 }}>
            Surat sitilink
          </Typography>
          <Typography variant="h6" sx={{ ml: 1 }}>
            Paying ₹{orderDetails.price}
          </Typography>
        </Box>
      </Box>

      {/* Main Content Box */}
      <Box sx={{ backgroundColor: "#fff", borderRadius: 2, padding: 2,paddingTop: 0 }}>
        {/* UPI Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography variant="h6" >Payment Options </Typography>
        </Box>

        {/* SBI Bank - Default Selected */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            mb: 1,
            backgroundColor: "#e3f2fd",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src={sbiLogo.src}
              alt="SBI Logo"
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
            <Typography variant="body1">SBI Bank - 0100</Typography>
          </Box>
          <Image
              src={checkcircle.src}
              alt="SBI Logo"
              style={{ width: 20, height: 20,}}
            />
        </Box>

        {/* Bank A/C or RuPay Credit Card */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            mb: 1,
          }}
        >
          <Image
            src={plus.src}
            alt="add"
            style={{ width: 30, height: 20, marginRight: 10 }}
          />
          <Typography sx={{color: '#00B8F6'}}>Bank A/C or Rupay Credit Card</Typography>
          
        </Box>

        {/* More Payment Options Section */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            More Payment Options
          </Typography>

          {/* Prepaid, Debit & Credit Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 2,
              alignItems: "center",
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              mb: 1,
            }}
          >
            <Box> <Image src={card.src} alt="card" style={{ width: 30, height: 20, marginRight: 10 }}/></Box>

            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

              <Typography variant="body1">Debit & Credit Cards</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Image
                  src={mastercardLogo.src}
                  alt="Mastercard Logo"
                  style={{ width: 25, height: 15, paddingTop:5}}
                  
                />
                <Image
                  src={rupayLogo.src}
                  alt="RuPay Logo"
                  style={{ width: 25, height: 18 , paddingTop:5}}
                />
                <Image
                  src={visaLogo.src}
                  alt="Visa Logo"
                  style={{ width: 25, height: 15 ,paddingTop:5}}
                />
                <Typography variant="body1">& more </Typography>
              </Box>
            </Box>
          </Box>

          {/* UPI Options */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={upiLogo.src}
                alt="UPI Logo"
                style={{ width: 30, height: 20, marginRight: 10 }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1">UPI Options</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Image
                  src={paytmLogo.src}
                  alt="paytm Logo"
                  style={{ width: 35, height: 20 }}
                />
                <Image
                  src={phonepeLogo.src}
                  alt="PhonePe Logo"
                  style={{ width: 20, height: 20 }}
                />
                <Image
                  src={gpayLogo.src}
                  alt="GPay Logo"
                  style={{ width: 20, height: 20 }}
                />
                <Typography variant="body1"> & more</Typography>
              </Box>
            </Box>
          </Box>

          {/* Net Banking */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 2,paddingBottom  : 0,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              mb: 0,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src={netBankingLogo.src}
                alt="Net Banking Logo"
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              <Box>
                <Typography variant="body1">Net Banking</Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  100+ Banks Supported
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>
        {/* Pay Securely Footer */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" , }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePaySecurely}
              sx={{
                mt: 2,
                py: 1.5,
                backgroundColor: "#00B8F6", 
                textTransform: "none", 
                display: "flex",
                alignItems: "center",
                gap: 1, 
                
                
              }}
              startIcon={<GppGoodIcon />}
            >
              Pay Securely ₹{orderDetails.price}
            </Button>
          </Box>
      
    </Box>
  );
};

