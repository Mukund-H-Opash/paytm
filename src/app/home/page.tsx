"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
// Keep the MUI icons we still need
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaymentIcon from "@mui/icons-material/Payment";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FlightIcon from "@mui/icons-material/Flight";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/search");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#022A72",
          padding: { xs: 1, sm: 2 },
          borderRadius: 1,
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
            MH
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #f3f3f3, #f3f3f3)",
              border: `2px solid #9DAE6C`,
              color: "#000",
              fontSize: { xs: "0.8rem", sm: "1rem" },
              textTransform: "none",
              borderRadius: "50px",
              padding: { xs: "6px 12px", sm: "8px 16px" },
            }}
          >
            Create New UPI ID
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SearchIcon
            sx={{ color: "white", fontSize: { xs: 20, sm: 24 } }}
            onClick={handleClick}
          />
          <NotificationsIcon sx={{ color: "white", fontSize: { xs: 20, sm: 24 } }} />
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
          UPI ID: 9978073872@paytm
        </Typography>
      </Box>

      {/* Payment Options */}
      <Grid container spacing={1} sx={{ mb: 2, justifyContent: "center" }}>
        {/* Button 1: Scan & Pay */}
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
            <Box sx={{  mb: 0 }}>
          
              <img src="/scan-pay.png" alt="Scan & Pay" style={{ width: 40, height: 40 }} />
            </Box>
            Scan & Pay
          </Button>
        </Grid>

        {/* Button 2: To Mobile or Contact */}
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
            <Box sx={{  mb: 0 }}>
              <img
                src="/to-mobile-connect.png"
                alt="To Mobile or Contact"
                style={{ width: 40, height: 40 }}
              />
            </Box>
            To Mobile Contact
          </Button>
        </Grid>

        {/* Button 3: To Bank A/c or UPI ID */}
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
            <Box sx={{  mb: 0 }}>
              <img src="/to-bank-ac.png" alt="To Bank A/c" style={{ width: 40, height: 40 }} />
            </Box>
            To Bank A/c or UPI ID
          </Button>
        </Grid>

        {/* Button 4: To Self A/c */}
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
            <Box sx={{  mb: 0 }}>
              <img src="/to-self-ac.png" alt="To Self A/c" style={{ width: 40, height: 40 }} />
            </Box>
            To Self A/c
          </Button>
        </Grid>
      </Grid>

      {/* Balance & QR */}
      <Grid
        container
        spacing={1}
        sx={{ mb: 2, backgroundColor: "#f2f6f9", p: 1 }}
      >
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button
            fullWidth
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            <img
              src="/balance-history.png"
              alt="Balance & History"
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            Check Balance & History
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button
            fullWidth
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            <img
              src="/Recive money.png"
              alt="Receive Money"
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            Receive money QR
          </Button>
        </Grid>
      </Grid>

      {/* Recharges & Bill Payments */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#333", fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
      >
        RECHARGES & BILL PAYMENTS{" "}
        <span style={{ color: "#022A72", fontSize: "0.9em", marginLeft: "20px" }}>
          View all
        </span>
      </Typography>

      <Grid container spacing={1} sx={{ mb: 2, justifyContent: "center", padding: 1 }}>
        {/* Mobile Recharge Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                color: "#022A72",
                backgroundColor: "white",
              }}
            >
              <img
                src="/mobile-recharge.png"
                alt="Mobile Recharge"
                style={{ width: 24, height: 24 }}
              />
            </Box>
            Mobile Recharge
          </Button>
        </Grid>

        {/* Credit Card Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                color: "#022A72",
                backgroundColor: "white",
              }}
            >
              <img src="/cradit-card.png" alt="Credit Card" style={{ width: 24, height: 24 }} />
            </Box>
            Credit Card Home
          </Button>
        </Grid>

        {/* Electricity Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                color: "#022A72",
                backgroundColor: "white",
              }}
            >
              <img
                src="/Electricity-bill.png"
                alt="Electricity"
                style={{ width: 24, height: 24 }}
              />
            </Box>
            Electricity
          </Button>
        </Grid>

        {/* FASTag Button */}
        <Grid item xs={3}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box
              sx={{
                color: "#022A72",
                backgroundColor: "white",
              }}
            >
              <img src="/fastag.png" alt="FASTag" style={{ width: 24, height: 24 }} />
            </Box>
            FASTag Recharge
          </Button>
        </Grid>
      </Grid>

      {/* Do More With Paytm */}
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
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <AccountBalanceWalletIcon />
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
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <img src="/cradit-card.png" alt="Credit Card" style={{ width: 24, height: 24 }} />
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
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <PaymentIcon />
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
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <ShowChartIcon />
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
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <FlightIcon />
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
                justifyContent: "center",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <LocalMoviesIcon />
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
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <img src="/scan-pay.png" alt="Scan QR" style={{ width: 24, height: 24 }} />
              </Box>
              Scan QR
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
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                color: "#022A72",
                "&:hover": {
                  backgroundColor: "rgba(2, 42, 114, 0.1)",
                },
                padding: 0,
              }}
            >
              <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
                <PaymentIcon />
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
        sx={{ color: "#333", fontSize: { xs: "1rem", sm: "1.25rem" } }}
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
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
              <ShowChartIcon />
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
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
              <ShowChartIcon />
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
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
              <PaymentIcon />
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
              justifyContent: "center",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: "#022A72",
              "&:hover": {
                backgroundColor: "rgba(2, 42, 114, 0.1)",
              },
              padding: 0,
            }}
          >
            <Box sx={{ color: "#022A72", borderRadius: "10%", p: 1, mb: 1 }}>
              <AccountBalanceWalletIcon />
            </Box>
            Insurance
          </Button>
        </Grid>
      </Grid>

      {/* Cashback & Ad */}
      <Grid
        container
        spacing={1}
        sx={{ mb: 2, backgroundColor: "#f2f6f9", p: 1 }}
      >
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button
            fullWidth
            startIcon={<AccountBalanceWalletIcon />}
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            Cashback & Offers
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}>
          <Button
            fullWidth
            startIcon={<img src="/Recive money.png" alt="Points" style={{ width: 20, height: 20 }} />}
            sx={{ fontSize: { xs: "0.6rem", sm: "0.875rem" } }}
          >
            Points & Gift Cards
          </Button>
        </Grid>
      </Grid>

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
          }}
        >
          <img src="/scan-pay.png" alt="Scan Any QR" style={{ width: 20, height: 20, marginRight: 8 }} />
          Scan Any QR
        </Typography>
      </Box>
    </Box>
  );
}