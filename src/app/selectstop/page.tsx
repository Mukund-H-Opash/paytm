"use client";

import { Box, Typography, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { setFrom, setTo, setPrice } from "../../store/ticketSlice";

const SelectStopPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fromSearch, setFromSearch] = useState<string>("");
  const [toSearch, setToSearch] = useState<string>("");
  const [fromStop, setFromStop] = useState<string | null>(null);
  const [toStop, setToStop] = useState<string | null>(null);
  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);

  const stops: string[] = useMemo(() => {
    // Combine all stops from all routes and remove duplicates
    const allStops = [
      // Route 17
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
      // Route 12
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
      // Route 403
      "SMC Ward Office Limbayat",
      "Sanjay Nagar Circle",
      "Sanjay Nagar Limbayat",
      "Sahajanand Society Limbayat",
      "Silicon Flats Parvat",
      "Parvat Gam",
      "Vidhata Township Parvat",
      "Neminath Nagar Dumbhal",
      "Model Town Dumbhal",
      "Sitanagar BRTS",
      "Sita Nagar",
      "Puna Gam Sarkari Mandli",
      "Puna Talav",
      "Shaarda Vidhya Mandir",
      "Kargil Chowk Puna",
      "Thakordwar Society",
      "Bhagwati Society",
      "Anupam Business Hub",
      "Yogi Chowk",
      "City Centre Complex",
      "Mahavir Chowk",
      "Ganga Jamana Society",
      "Tapovan Circle",
      "Anmol Park Society",
      "Sankalp Residency",
      // Route 410
      "DGVCL Mota Varachha",
      "Santosa Heights",
      "Opera City",
      "Slok Residency",
      "Maharaja Krushnakumar School",
      "Royal Square",
      "Utran Power House",
      "Samata Nagar",
      "Mota Varachha Pumping Station",
      "Apple Heights",
      "Sudama Chowk",
      "Mota Varachha Fire Station",
      "Mota Varachha Ward Office",
      "Mota Varachha Prathmik School",
      "Mota Varachha Lake",
      "Sewage Pumping Mota Varachha",
      "Rajhans Tower",
      "Lajamani Chowk",
      "Savjikorat Bridge Simada Varigruh",
      "Sarathana nature park",
      "Vraj Chowk",
      "Vrajvilla Society Shyamnagar",
      "Simada Gam",
      "Patel Park",
      "Raghukul Residency",
      "Radhe Park",
      "Savaliya Circle",
      "Vrundavan Society Puna",
      "Pramukhchhaya",
      "Balaji Residency",
      "Laxminagar Chowk",
      "BSNL Office Mamta Park",
      "Sagar Society",
      "Gopal Chowk",
      "Rachana Society",
      "Rachana Circle",
      "Shree Swami Dayanand Saraswati Bridge",
      "Silver Palace",
      "Community Hall Utran",
      "Omkar Row House",
      // Route 903
      "Shree Gyanjyot Vidhyalay",
      "Pasodara Gaam",
      "Chehar Mata Temple",
      "Shukan Valley Residency",
      "Kathodara Gaam",
      "S K Park Society Kathodara",
      "Khadsad Gaam",
      "Godhpur Township",
      "N C Thakkar School",
      "Diva Farm",
      "V T Nagar Road",
      "Bapa Sitaram Chowk Yogi Nagar",
      "Yogi Nagar Society",
      "Yodi Darshan Society",
      "City Centre Puna Gaam",
      "Shiv Dhara Heights",
      // Route 213
      "Simada Varigruh",
      "Bhagwan Nagar Sarthana",
      "Shyam Sundar Apartment",
      "Shyam Dham Chowk Simada",
      "Mamta Park Society",
      "Sky Lark Complex Kapodara",
      "Rashmi Kiran Apartment",
      "Nilkanth Society Kapodara",
      "Sainath Society Kapodara",
      "Sardar Chowk",
      "Sardar Smruti Bhavan",
      "Ramnagar Society",
      "Bhavani Circle",
      "Alkapuri Circle",
      "Kiran Hospital",
      "Bal Ashram",
      "Katargam Fire Station",
      "Katargam",
      "Sneh Nagar Society",
      "J K P Nagar Society",
      "Aashirwad Doctor House",
      "Singanpore Circle",
      "Singanpore Vegetable Market",
      "SMC Hall Singanpore",
      "Raj Laxmi Heights",
      "Kanthariya Hanuman Temple",
      "Kanthariya Hanuman Chowk",
      "Sarjan Avenue Apartment",
      "Silver Stone Homes Dabholi",
      "Pramukh Yog Apartment Dabholi",
      "Dr. Shyamaprasad Mukharji Bridge BRTS",
    ];

    // Remove duplicates using Set and sort alphabetically for better UX
    return Array.from(new Set(allStops)).sort();
  }, []);

  // Define routes internally (not exposed to the user)
  const route17 = [
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
  ];

  const route12 = [
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
    "Sarthana Nature Park",
  ];

  const route403 = [
    "SMC Ward Office Limbayat",
    "Sanjay Nagar Circle",
    "Sanjay Nagar Limbayat",
    "Sahajanand Society Limbayat",
    "Silicon Flats Parvat",
    "Parvat Gam",
    "Vidhata Township Parvat",
    "Neminath Nagar Dumbhal",
    "Model Town Dumbhal",
    "Parvat Patiya Junction BRTS",
    "Amazia Amusement Park BRTS",
    "Sitanagar BRTS",
    "Sita Nagar",
    "Puna Gam Sarkari Mandli",
    "Puna Talav",
    "Shaarda Vidhya Mandir",
    "Kargil Chowk Puna",
    "Thakordwar Society",
    "Bhagwati Society",
    "Anupam Business Hub",
    "Yogi Chowk",
    "City Centre Complex",
    "Mahavir Chowk",
    "Ganga Jamana Society",
    "Tapovan Circle",
    "Nana Varachha Vari Gruh BRTS",
    "Maharana Pratap Garden (Chowpati) BRTS",
    "Nana Varachha Police Station BRTS",
    "Simada Naka",
    "Sarthana Nature Park",
    "Anmol Park Society",
    "Sankalp Residency",
  ];

  const route410 = [
    "DGVCL Mota Varachha",
    "Santosa Heights",
    "Opera City",
    "Slok Residency",
    "Maharaja Krushnakumar School",
    "Royal Square",
    "Utran Power House",
    "Samata Nagar",
    "Mota Varachha Pumping Station",
    "Apple Heights",
    "Sudama Chowk",
    "Mota Varachha Fire Station",
    "Mota Varachha Ward Office",
    "Mota Varachha Prathmik School",
    "Mota Varachha Lake",
    "Sewage Pumping Mota Varachha",
    "Rajhans Tower",
    "Lajamani Chowk",
    "Savjikorat Bridge Simada Varigruh",
    "Sarathana nature park",
    "Vraj Chowk",
    "Vrajvilla Society Shyamnagar",
    "Simada Gam",
    "Patel Park",
    "Yogi Nagar BRTS",
    "Raghukul Residency",
    "Radhe Park",
    "Savaliya Circle",
    "Vrundavan Society Puna",
    "Pramukhchhaya",
    "Balaji Residency",
    "Bhagwati Society",
    "Laxminagar Chowk",
    "BSNL Office Mamta Park",
    "Sagar Society",
    "Gopal Chowk",
    "Rachana Society",
    "Rachana Circle",
    "Shree Swami Dayanand Saraswati Bridge",
    "Silver Palace",
    "Community Hall Utran",
    "Omkar Row House",
  ];

  const route903 = [
    "Shree Gyanjyot Vidhyalay",
    "Pasodara Gaam",
    "Chehar Mata Temple",
    "Shukan Valley Residency",
    "Kathodara Gaam",
    "S K Park Society Kathodara",
    "Khadsad Gaam",
    "Godhpur Township",
    "N C Thakkar School",
    "Diva Farm",
    "V T Nagar Road",
    "Purushottam Nagar BRTS",
    "Sarthana Nature Park",
    "S.M.V.S. Swaminarayan Temple BRTS",
    "Swagat Society BRTS",
    "Bapa Sitaram Chowk Yogi Nagar",
    "Yogi Nagar Society",
    "Yodi Darshan Society",
    "City Centre Puna Gaam",
    "Shiv Dhara Heights",
  ];

  const route213 = [
    "Purushottam Nagar BRTS",
    "Sarthana nature park",
    "Simada Varigruh",
    "Bhagwan Nagar Sarthana",
    "Swagat Society BRTS",
    "Shyam Sundar Apartment",
    "Shyam Dham Chowk Simada",
    "Mahavir Chowk",
    "City Centre Complex",
    "Yogi Chowk",
    "Anupam Business Hub",
    "Bhagwati Society",
    "Laxminagar Chowk",
    "Mamta Park Society",
    "Sky Lark Complex Kapodara",
    "Rashmi Kiran Apartment",
    "Nilkanth Society Kapodara",
    "Sainath Society Kapodara",
    "D.G.V.C.L Urja Sadan Kapodara BRTS",
    "Shrimad Vallabhacharya Chowk / Hirabaug BRTS",
    "Baroda Pristage BRTS",
    "Mini Hira Bazaar / Maangadh Chowk BRTS",
    "Sardar Chowk",
    "Sardar Smruti Bhavan",
    "Ramnagar Society",
    "Bhavani Circle",
    "Alkapuri Circle",
    "Kiran Hospital",
    "Bal Ashram",
    "Katargam Fire Station",
    "Katargam",
    "Sneh Nagar Society",
    "J K P Nagar Society",
    "Aashirwad Doctor House",
    "Singanpore Circle",
    "Singanpore Vegetable Market",
    "SMC Hall Singanpore",
    "Raj Laxmi Heights",
    "Kanthariya Hanuman Temple",
    "Kanthariya Hanuman Chowk",
    "Sarjan Avenue Apartment",
    "Silver Stone Homes Dabholi",
    "Pramukh Yog Apartment Dabholi",
    "Dr. Shyamaprasad Mukharji Bridge BRTS",
  ];

  // All routes for price calculation
  const routes = [
    { name: "Route 17", stops: route17 },
    { name: "Route 12", stops: route12 },
    { name: "Route 403", stops: route403 },
    { name: "Route 410", stops: route410 },
    { name: "Route 903", stops: route903 },
    { name: "Route 213", stops: route213 },
  ];

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
      // Default price if stops are not on any route
      let calculatedPrice = 4; // Minimum discounted fare

      // Find routes containing the "from" and "to" stops
      const fromRoutes = routes.filter((route) => route.stops.includes(fromStop));
      const toRoutes = routes.filter((route) => route.stops.includes(toStop));

      // Pricing tiers (before discount)
      const pricingTiers = [
        { stops: 2, price: 5 }, // 0-2 stops: ₹5
        { stops: 5, price: 10 }, // 3-5 stops: ₹10
        { stops: 10, price: 15 }, // 6-10 stops: ₹15
        { stops: 15, price: 20 }, // 11-15 stops: ₹20
        { stops: Infinity, price: 25 }, // 16+ stops: ₹25
      ];

      // Special pricing for Route 17 starting from "Pal R.T.O. BRTS"
      const route17SpecialPricing = [
        { stop: "Sanjeev Kumar Auditorium BRTS", price: 5 },
        { stop: "Adajan Gam", price: 5 },
        { stop: "Anand Mahal Road BRTS", price: 10 },
        { stop: "Swaminarayan Chowk", price: 10 },
        { stop: "Adajan Patiya", price: 10 },
        { stop: "Chandra Shekhar Azad Bridge Approach Katargam", price: 15 },
        { stop: "Katargam Darwaja BRT", price: 15 },
        { stop: "Gotalawadi", price: 15 },
        { stop: "Kabir Mandir Rampura", price: 15 },
        { stop: "Railway Station Bus Terminal Stop", price: 15 },
        { stop: "S.M.C. Varachha Health Centre Podar Arcade BRTS", price: 15 },
        { stop: "Central Ware House", price: 15 },
        { stop: "Mini Hira Bazaar / Maangadh Chowk BRTS", price: 15 },
        { stop: "Baroda Pristage BRTS", price: 15 },
        { stop: "Shrimad Vallabhacharya Chowk / Hirabaug BRTS", price: 15 },
        { stop: "D.G.V.C.L Urja Sadan Kapodara BRTS", price: 20 },
        { stop: "S.M.C. Kapodara Ward Office BRTS", price: 20 },
        { stop: "Kapodara Fire Station BRTS", price: 20 },
        { stop: "Nana Varachha Vari Gruh BRTS", price: 20 },
        { stop: "Maharana Pratap Garden (Chowpati) BRTS", price: 20 },
        { stop: "Nana Varachha Police Station BRTS", price: 20 },
        { stop: "Simada Naka", price: 25 },
        { stop: "Sarthana Nature Park", price: 25 },
        { stop: "Purushottam Nagar BRTS", price: 25 },
        { stop: "Shyamdham Mandir BRTS", price: 25 },
        { stop: "Sagwadi BRTS", price: 25 },
        { stop: "Swami Narayan Mission - Valak Gam BRTS", price: 25 },
        { stop: "Raghuvir Row House Valak Patiya BRTS", price: 25 },
        { stop: "Laskana Gam BRTS", price: 25 },
        { stop: "DGVCL Laskana BRTS", price: 25 },
        { stop: "Diamond Nagar BRTS", price: 25 },
        { stop: "Diamond Vidhya Sankul BRTS", price: 25 },
        { stop: "Pasodara Gam Char Rasta BRTS", price: 25 },
        { stop: "Shyam Nagar BRTS", price: 25 },
        { stop: "Kamrej Terminal BRTS", price: 25 },
      ];

      // If both stops are on the same route
      const commonRoutes = fromRoutes.filter((route) => toRoutes.includes(route));
      if (commonRoutes.length > 0) {
        // Choose the first common route (simplest path)
        const route = commonRoutes[0];
        const fromIndex = route.stops.indexOf(fromStop);
        const toIndex = route.stops.indexOf(toStop);
        const stopsTraveled = Math.abs(toIndex - fromIndex);

        // Special pricing for Route 17 starting from "Pal R.T.O. BRTS"
        if (route.name === "Route 17" && fromStop === "Pal R.T.O. BRTS") {
          const specialPrice = route17SpecialPricing.find((entry) => entry.stop === toStop)?.price || 25;
          calculatedPrice = specialPrice * 0.8; // Apply 20% discount
        } else {
          // Use general pricing tiers
          const mainFare = pricingTiers.find((tier) => stopsTraveled <= tier.stops)?.price || 25;
          calculatedPrice = mainFare * 0.8; // Apply 20% discount
        }
      } else {
        // Inter-route travel: Use "Sarthana Nature Park" as the connecting stop
        const connectingStop = "Sarthana Nature Park";
        const fromRoute = fromRoutes[0]; // Choose the first route containing "fromStop"
        const toRoute = toRoutes[0]; // Choose the first route containing "toStop"

        let totalMainFare = 0;

        // If "fromStop" and "toStop" are on different routes
        if (fromRoute && toRoute && fromRoute.stops.includes(connectingStop) && toRoute.stops.includes(connectingStop)) {
          // Segment 1: From "fromStop" to "Sarthana Nature Park"
          const fromIndex = fromRoute.stops.indexOf(fromStop);
          const connectingIndexFrom = fromRoute.stops.indexOf(connectingStop);
          const stopsSegment1 = Math.abs(connectingIndexFrom - fromIndex);

          let segment1Price = 0;
          if (fromRoute.name === "Route 17" && fromStop === "Pal R.T.O. BRTS") {
            segment1Price = route17SpecialPricing.find((entry) => entry.stop === connectingStop)?.price || 25;
          } else {
            segment1Price = pricingTiers.find((tier) => stopsSegment1 <= tier.stops)?.price || 25;
          }

          // Segment 2: From "Sarthana Nature Park" to "toStop"
          const toIndex = toRoute.stops.indexOf(toStop);
          const connectingIndexTo = toRoute.stops.indexOf(connectingStop);
          const stopsSegment2 = Math.abs(toIndex - connectingIndexTo);

          let segment2Price = 0;
          if (toRoute.name === "Route 17") {
            segment2Price = route17SpecialPricing.find((entry) => entry.stop === toStop)?.price || 25;
          } else {
            segment2Price = pricingTiers.find((tier) => stopsSegment2 <= tier.stops)?.price || 25;
          }

          totalMainFare = segment1Price + segment2Price;
          // Cap the total main fare at ₹25 (maximum before discount)
          totalMainFare = Math.min(totalMainFare, 25);
          calculatedPrice = totalMainFare * 0.8; // Apply 20% discount
        }
      }

      // Edge case: Same stop (shouldn't happen due to UI, but handle anyway)
      if (fromStop === toStop) {
        calculatedPrice = 4; // Minimum fare
      }

      // Ensure the price is at least the minimum fare
      calculatedPrice = Math.max(calculatedPrice, 4);

      dispatch(setPrice(calculatedPrice));

      const params = new URLSearchParams({
        from: fromStop,
        to: toStop,
        price: calculatedPrice.toString(),
      });
      router.push(`/ticket-booking?${params.toString()}`);
    }
  }, [fromStop, toStop, router, dispatch]);

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
};

export default SelectStopPage;