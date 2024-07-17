import { useTicketStore } from "../zustand/store";

const useGetEventDetails = () => {
  const editDetail = useTicketStore((state) => state.editDetail);
  const isEditing = useTicketStore((state) => state.isEditing);
  const handleEditTicketOpen = useTicketStore(
    (state) => state.handleEditTicketOpen
  );

  const handleEditTicketClose = useTicketStore(
    (state) => state.handleEditTicketClose
  );

  const handleCreateTicketClose = useTicketStore(
    (state) => state.handleCreateTicketClose
  );

  const sellTicketOne = useTicketStore((state) => state.sellTicketOne);
  const sellTicketTwo = useTicketStore((state) => state.sellTicketTwo);
  const handleSetSellTicketOne = useTicketStore(
    (state) => state.handleSetSellTicketOne
  );
  const handleSetSellTicketTwo = useTicketStore(
    (state) => state.handleSetSellTicketTwo
  );

  const buyTicketOne = useTicketStore((state) => state.buyTicketOne);
  const handleBuyTicketOne = useTicketStore(
    (state) => state.handleBuyTicketOne
  );
  const handleBuyTicketClose = useTicketStore(
    (state) => state.handleBuyTicketClose
  );

  const isSummaryOpen = useTicketStore((state) => state.isSummaryOpen);
  const summaryDetail = useTicketStore((state) => state.summaryDetail);
  const handleSummaryOpen = useTicketStore((state) => state.handleSummaryOpen);
  const handleSummaryClose = useTicketStore(
    (state) => state.handleSummaryClose
  );

  const isPurchaseTicketSuccessOpen = useTicketStore(
    (state) => state.isPurchaseTicketSuccessOpen
  );

  const handleSetNewTicketID = useTicketStore(
    (state) => state.handleSetNewTicketID
  );
  const handleRemoveNewTicketID = useTicketStore(
    (state) => state.handleSetNewTicketID
  );
  const newTicketID = useTicketStore((state) => state.newTicketID);

  return {
    editDetail,
    isEditing,
    handleEditTicketOpen,
    handleEditTicketClose,

    sellTicketOne,
    sellTicketTwo,
    handleSetSellTicketOne,
    handleSetSellTicketTwo,
    handleCreateTicketClose,

    buyTicketOne,
    handleBuyTicketOne,
    handleBuyTicketClose,

    isPurchaseTicketSuccessOpen,

    isSummaryOpen,
    summaryDetail,
    handleSummaryOpen,
    handleSummaryClose,

    handleSetNewTicketID,
    handleRemoveNewTicketID,
    newTicketID,
  };
};

export default useGetEventDetails;
