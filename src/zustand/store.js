import { create } from "zustand";

export const useTicketStore = create((set) => ({
  editDetail: null,
  isSummaryOpen: false,
  summaryDetail: null,
  isEditing: false,
  newTicketID: null,
  isSuccessModal: false,
  isPurchaseTicketSuccessOpen: false,

  sellTicketOne: null,
  sellTicketTwo: null,

  buyTicketOne: null,

  openSuccessModal: () => set({ isSuccessModal: true }),
  closeSuccessModal: () => set({ isSuccessModal: false }),

  handleSummaryOpen: (payload) =>
    set({ isSummaryOpen: true, summaryDetail: payload }),

  handleSummaryClose: () => set({ isSummaryOpen: false, summaryDetail: null }),

  handleBuyTicketOpen: () => set({}),
  handleBuyTicketOne: (payload) => set({ buyTicketOne: payload }),

  handleSetSellTicketOne: (payload) => set({ sellTicketOne: payload }),
  handleSetSellTicketTwo: (payload) => set({ sellTicketTwo: payload }),

  handleBuyTicketClose: () =>
    set({
      buyTicketOne: null,
    }),

  handleEditTicketOpen: (payload) =>
    set({
      isEditing: true,
      editDetail: payload,
    }),

  handleEditTicketClose: () =>
    set({
      isEditing: false,
      editDetail: null,
      sellTicketOne: null,
      sellTicketTwo: null,
    }),

  handleCreateTicketClose: () =>
    set({
      sellTicketOne: null,
      sellTicketTwo: null,
      isEditing: false,
      editDetail: null,
    }),

  handleSetNewTicketID: (payload) =>
    set({
      newTicketID: payload,
    }),

  handleRemoveNewTicketID: () =>
    set({
      newTicketID: null,
    }),
}));
