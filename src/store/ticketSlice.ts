// ticketSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TicketOrder {
  from: string;
  to: string;
  price: number;
  passengers: number;
  orderId: string;
  ticketId: string;
  transactionId: string;
  issuedAt: number;
  validFor: number;
}

const initialState: TicketOrder = {
  from: "",
  to: "",
  price: 0,
  passengers: 1,
  orderId: "",
  ticketId: "",
  transactionId: "",
  issuedAt: 0,
  validFor: 7200, // Default 2 hours
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    setPassengers: (state, action: PayloadAction<number>) => {
      state.passengers = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
    setTicketId: (state, action: PayloadAction<string>) => {
      state.ticketId = action.payload;
    },
    setTransactionId: (state, action: PayloadAction<string>) => {
      state.transactionId = action.payload;
    },
    setIssuedAt: (state, action: PayloadAction<number>) => {
      state.issuedAt = action.payload;
    },
    resetTicket: () => initialState,
  },
});

export const {
  setFrom,
  setTo,
  setPassengers,
  setPrice,
  setOrderId,
  setTicketId,
  setTransactionId,
  setIssuedAt,
  resetTicket,
} = ticketSlice.actions;
export default ticketSlice.reducer;