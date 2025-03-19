
"use client";

import { Box, Typography, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef ,useMemo, use} from "react";
import { useDispatch } from "react-redux";
import { setFrom, setTo, setPrice } from "../../store/ticketSlice";

export function SelectStopPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fromSearch, setFromSearch] = useState<string>("");
  const [toSearch, setToSearch] = useState<string>("");
  const [fromStop, setFromStop] = useState<string | null>(null);
  const [toStop, setToStop] = useState<string | null>(null);
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  const stops: string[] =useMemo(() => [
    "Pal R.T.O. BRTS",
    "Sanjeev Kumar Auditorium BRTS",
    "Adajan Gam",
    "Anand Mahal Road BRTS",
    "Swaminarayan Chowk",
    "Adajan Patiya",
    "Chandra Shekhar Azad Bridge Approach Katargam",
    "Katargam Darwaja BRT",
    "Gotalawadi",
    "Kabir Mandir Rampura",
    "Railway Station Bus Terminal Stop",
    "S.M.C. Varachha Health Centre Podar Arcade BRTS",
    "Central Ware House",
    "Mini Hira Bazaar / Maangadh Chowk BRTS",
    "Baroda Pristage BRTS",
    "Shrimad Vallabhacharya Chowk / Hirabaug BRTS",
    "D.G.V.C.L Urja Sadan Kapodara BRTS",
    "S.M.C. Kapodara Ward Office BRTS",
    "Kapodara Fire Station BRTS",
    "Nana Varachha Vari Gruh BRTS",
    "Maharana Pratap Garden (Chowpati) BRTS",
    "Nana Varachha Police Station BRTS",
    "Simada Naka",
    "Sarthana Nature Park",
    "Purushottam Nagar BRTS",
    "Shyamdham Mandir BRTS",
    "Sagwadi BRTS",
    "Swami Narayan Mission - Valak Gam BRTS",
    "Raghuvir Row House Valak Patiya BRTS",
    "Laskana Gam BRTS",
    "DGVCL Laskana BRTS",
    "Diamond Nagar BRTS",
    "Diamond Vidhya Sankul BRTS",
    "Pasodara Gam Char Rasta BRTS",
    "Shyam Nagar BRTS",
    "Kamrej Terminal BRTS",
    "ONGC Colony BRTS",
    "Magdalla Gam BRTS",
    "'Y' Junction Dumas Road BRTS",
    "'Y' Junction Udhana Magdalla Road BRTS",
    "Maharana Pratap Junction BRTS",
    "S.D. Jain School BRTS",
    "J.H. Ambani School BRTS",
    "Someshwar Junction BRTS",
    "VNSG University",
    "V.N.S.G.U. Convention Hall BRTS",
    "Centre for Social Studies BRTS",
    "Anuvrat Dwar Junction (West) BRTS",
    "Anuvrat Dwar Junction (East) BRTS",
    "Panas Gam Junction BRTS",
    "Ishwar Farm Junction BRTS",
    "Jamna Nagar Junction BRTS",
    "Rupali Junction BRTS",
    "Prajapita Brahmakumari Marg ",
    "Civil Road Majurat Fire Station BRTS",
    "Unique Hospital Junction BRTS",
    "Khatodara GIDC BRTS",
    "Kharwarnagar BRTS",
    "Bhathena Junction BRTS",
    "Samrat Vidhyalaya BRTS",
    "Model Town Junction BRTS",
    "Parvat Patiya Junction BRTS",
    "Amazia Amusement Park BRTS",
    "Vishwakarma Junction BRTS",
    "Bhaiya Nagar BRTS",
    "Punagam Junction BRTS",
    "Puna Saroli Junction BRTS",
    "Vanmali Junction (West) BRTS",
    "Vanmali Junction BRTS",
    "Simada Naher Junction BRTS",
    "Simada Junction BRTS",
    "Yogi Nagar BRTS",
    "Swagat Society BRTS",
    "S.M.V.S. Swaminarayan Temple BRTS",
  ], []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const field = urlParams.get("field");
    if (!field || !["from", "to"].includes(field)) {
      router.push("/ticket-booking");
    }
  }, [router]);

  const handleBackClick = (): void => {
    router.push("/ticket-booking");
  };

  const handleStopClick = (stop: string): void => {
    if (!fromStop) {
      setFromStop(stop);
      dispatch(setFrom(stop));
      setFromSearch("");
      setTimeout(() => toInputRef.current?.focus(), 0);
    } else if (!toStop && stop !== fromStop) {
      setToStop(stop);
      dispatch(setTo(stop));
      setToSearch("");
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (fromStop && toStop) {
      // Calculate price based on stop index difference
      const fromIndex = stops.indexOf(fromStop);
      const toIndex = stops.indexOf(toStop);
      const distance = Math.abs(toIndex - fromIndex);
      const basePrice = 10; // Base fare
      const pricePerStop = 2; // ₹2 per stop difference
      const calculatedPrice = basePrice + distance * pricePerStop;

      dispatch(setPrice(calculatedPrice));

      const params = new URLSearchParams({
        from: fromStop,
        to: toStop,
        price: calculatedPrice.toString(),
      });
      router.push(`/ticket-booking?${params.toString()}`);
    }
  }, [fromStop, toStop, router, dispatch, stops]); // ESLint warning here might be suppressed

  const filteredStops = stops.filter(
    (stop) =>
      stop.toLowerCase().includes((fromStop ? toSearch : fromSearch).toLowerCase()) &&
      stop !== fromStop &&
      stop !== toStop
  );

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
          <Typography variant="h5" sx={{ color: "#000000", ml: 1 }}>
            Select a stop - Surat
          </Typography>
        </Box>
        <Button sx={{ color: "#0288d1", textTransform: "none" }}>Help</Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
        <TextField
          label="From"
          value={fromStop || fromSearch}
          onChange={(e) => setFromSearch(e.target.value)}
          inputRef={fromInputRef}
          fullWidth
          disabled={!!fromStop}
          InputProps={{
            endAdornment: fromSearch && !fromStop && (
              <InputAdornment position="end">
                <IconButton onClick={() => setFromSearch("")}>
                  <Typography>✖</Typography>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="To"
          value={toStop || toSearch}
          onChange={(e) => setToSearch(e.target.value)}
          inputRef={toInputRef}
          fullWidth
          disabled={!fromStop || !!toStop}
          InputProps={{
            endAdornment: toSearch && fromStop && !toStop && (
              <InputAdornment position="end">
                <IconButton onClick={() => setToSearch("")}>
                  <Typography>✖</Typography>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontSize: "1rem", mb: 1 }}>
          {(fromStop ? toSearch : fromSearch) ? "Suggested Stops" : "Popular Stops"}
        </Typography>
        {filteredStops.length > 0 ? (
          filteredStops.map((stop, index) => (
            <Box key={index}>
              <Button
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  color: "#000000",
                  textTransform: "none",
                  padding: 1,
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
                }}
                onClick={() => handleStopClick(stop)}
              >
                {stop}
              </Button>
              {index < filteredStops.length - 1 && (
                <Box sx={{ borderBottom: "1px solid #e0e0e0", my: 1 }} />
              )}
            </Box>
          ))
        ) : (
          <Typography>No stops found</Typography>
        )}
      </Box>
    </Box>
  );
}

export default SelectStopPage;