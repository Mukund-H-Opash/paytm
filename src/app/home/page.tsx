"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch ,useSelector } from "react-redux";
import { setOrderId } from "../../store/ticketSlice";
import { setLoading } from "../../store/loadingSlice";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Image from "next/image";
import "../../app/globals.css"; 
import { RootState } from "../../store/store";
import Loader from "../components/Loader";

export default function HomePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  const getRandomDelay = () => {
    return Math.floor(Math.random() * 4000) + 1000; // 1000ms to 5000ms
  };

  const generateRandomOrderId = (length: number): string => {
    return Math.floor(Math.random() * 9e10 + 1e10).toString().slice(0, length);
  };

  const handleScanPayClick = () => {
    const orderId = generateRandomOrderId(11);
    dispatch(setOrderId(orderId));
    router.push("/search");
  };

  const handleSearchClick = async () => {
    dispatch(setLoading(true));
    const delay = getRandomDelay();
    await new Promise((resolve) => setTimeout(resolve, delay));
    router.push("/search");
    dispatch(setLoading(false));
  };



  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ backgroundColor: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#AADDFC",
          padding: { xs: 1, sm: 2 },
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius:"5px",
          borderBottomRightRadius: "5px",
          mb: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: { xs: 25, sm: 30 },
              height: { xs: 25, sm: 30 },
              backgroundColor: "#EB5757",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              padding: 0,
            }}
          >
            PS
          </Box>
          <Image
            src="/paytm-home-logo-1.svg"
            alt="Paytm Logo"  
            width={120}
            height={40}
            className="paytm-logo"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, scale: 1 }}>
          <SearchIcon
            sx={{ color: "#20336B", fontSize: { xs: 20, sm: 24, scale: 1.4 } }}
            onClick={handleSearchClick}
          />
          <NotificationsIcon sx={{ color: "#20336B", fontSize: { xs: 20, sm: 24 ,scale: 1.4} }} />
        </Box>
      </Box>

      {/* UPI ID Display */}
      <Box
        sx={{
          mb: 2,
          textAlign: "left",
          backgroundColor: "#F2F6F9",
          padding: 0.8,
          m: 2,
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          UPI ID: 9978073873@paytm
        </Typography>
      </Box>

      {/* Payment Options */}
      <Grid container spacing={1} sx={{ mb: 2, justifyContent: "center" }}>
        <Grid item xs={3}>
          <Button
            fullWidth
            onClick={handleScanPayClick}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72",
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ mb: 0 }}>
              <Image
                src="/scan-pay.png"
                alt="Scan & Pay"
                width={40}
                height={40}
                className="icon-img"
              />
            </Box>
            Scan & Pay
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72",
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ mb: 0 }}>
              <Image
                src="/to-mobile-connect.png"
                alt="To Mobile or Contact"
                width={40}
                height={40}
                className="icon-img"
              />
            </Box>
            To Mobile Contact
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72",
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ mb: 0 }}>
              <Image
                src="/to-bank-ac.png"
                alt="To Bank A/c"
                width={40}
                height={40}
                className="icon-img"
              />
            </Box>
            To Bank A/c or UPI ID
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              color: "#022A72",
              borderColor: "#022A72",
              "&:hover": {
                borderColor: "#022A72",
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ mb: 0 }}>
              <Image
                src="/to-self-ac.png"
                alt="To Self A/c"
                width={40}
                height={40}
                className="icon-img"
              />
            </Box>
            To Self A/c
          </Button>
        </Grid>
      </Grid>

      {/* Balance & QR */}
      <Grid container spacing={1} sx={{ mb: 2, backgroundColor: "#f2f6f9", p: 1 }}>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button fullWidth sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}>
            <Image
              src="/balance-history.png"
              alt="Balance & History"
              width={22}
              height={28}
              className="button-icon"
            />
            Check Balance & History
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button fullWidth sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}>
            <Image
              src="/Recive money.png"
              alt="Receive Money"
              width={22}
              height={28}
              className="button-icon"
            />
            Receive money QR
          </Button>
        </Grid>
      </Grid>

      {/* Recharges & Bill Payments */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#333", fontSize: { xs: "0.9rem", sm: "1.25rem", paddingLeft: 15 } }}
      >
        RECHARGES & BILL PAYMENTS{" "}
        <span style={{ color: "#022A72", fontSize: "0.9em", marginLeft: "20px" }}>
          View all
        </span>
      </Typography>
      <Grid container spacing={1} sx={{ mb: 2, justifyContent: "center", padding: 1 }}>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", backgroundColor: "white" }}>
              <Image
                src="/mobile-recharge.png"
                alt="Mobile Recharge"
                width={24}
                height={28}
                className="icon-img"
              />
            </Box>
            Mobile Recharge
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", backgroundColor: "white", pb: 0.8 }}>
              <Image
                src="/cradit-card.png"
                alt="Credit Card"
                width={32}
                height={22}
                className="icon-img credit-card"
              />
            </Box>
            Credit Card
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", backgroundColor: "white", pb: 0.3 }}>
              <Image
                src="/Electricity-bill.png"
                alt="Electricity"
                width={26}
                height={26}
                className="icon-img"
              />
            </Box>
            Electricity
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", backgroundColor: "white", pb: 0.2 }}>
              <Image
                src="/fastag.png"
                alt="FASTag"
                width={32}
                height={26}
                className="icon-img"
              />
            </Box>
            FASTag Recharge
          </Button>
        </Grid>
      </Grid>

      {/* Do More with Paytm */}
      <Box sx={{ mb: 2, backgroundColor: "#e0f7fa", p: 2, borderRadius: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "#333", fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
        >
          DO MORE WITH PAYTM
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textTransform: "none",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/ploan.png"
                  alt="Personal Loan"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              Personal Loan
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/cradit-card-2.png"
                  alt="Credit Card"
                  width={32}
                  height={22}
                  className="icon-img credit-card"
                />
              </Box>
              Credit Card
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/paytm-money.png"
                  alt="Paytm Money"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              Paytm Money
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/sip.png"
                  alt="SIP"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              SIP @ ₹250
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textTransform: "none",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }} onClick={handleSearchClick}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/flight-bus.png"
                  alt="Travel"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              Travel
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textTransform: "none",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/24k.png"
                  alt="Buy Gold"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              Buy Gold
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textTransform: "none",
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/movies.png"
                  alt="Movies"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              Movies
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
                padding: 0,
              }} onClick={handleSearchClick}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
                <Image
                  src="/all-services.png"
                  alt="All Services"
                  width={24}
                  height={24}
                  className="icon-img"
                />
              </Box>
              All Services
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Free Tools */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#333", fontSize: { xs: "1rem", sm: "1.25rem", paddingLeft: 15 } }}
      >
        FREE TOOLS
      </Typography>
      <Grid container spacing={1} sx={{ mb: 2 }}>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textTransform: "none",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
              <Image
                src="/check-credit.png"
                alt="Credit Score"
                width={24}
                height={24}
                className="icon-img"
              />
            </Box>
            Credit Score
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
              <Image
                src="/sip.png"
                alt="Mutual Fund"
                width={24}
                height={24}
                className="icon-img"
              />
            </Box>
            Mutual Fund
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textTransform: "none",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
              <Image
                src="/ask-ai.png"
                alt="Ask AI"
                width={24}
                height={24}
                className="icon-img"
              />
            </Box>
            Ask AI
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textTransform: "none",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": { backgroundColor: "rgba(2, 42, 114, 0.1)" },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 0 }}>
              <Image
                src="/insurance.png"
                alt="Insurance"
                width={25}
                height={24}
                className="icon-img"
              />
            </Box>
            Insurance
          </Button>
        </Grid>
      </Grid>

      {/* Cashback & Ad */}
      <Grid container spacing={1} sx={{ mb: 2, backgroundColor: "#f2f6f9", p: 1 }}>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button
            fullWidth
            startIcon={<AccountBalanceWalletIcon />}
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" }, textTransform: "none" }}
          >
            Cashback & Offers
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button
            fullWidth
            startIcon={
              <Image
                src="/points&gift.png"
                alt="Points"
                width={20}
                height={25}
                className="button-icon"
              />
            }
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" }, textTransform: "none" }}
          >
            Points & Gift Cards
          </Button>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        sx={{
          mb: 2,
          backgroundColor: "#022A72",
          p: 2,
          borderRadius: "2rem",
          width: "auto",
          maxWidth: "150px",
          textAlign: "center",
          color: "white",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Image
            src="/scan-pay.png"
            alt="Scan Any QR"
            width={20}
            height={20}
            className="footer-icon"
          />
          Scan Any QR
        </Typography>
      </Box>
    </Box>
  );
}