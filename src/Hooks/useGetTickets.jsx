import { useQuery } from "@tanstack/react-query";
import {
  getAllEvents,
  getAllTickets,
  getEventDetail,
  getMyEvents,
  getOverview,
  getTicketReport,
  getTicketSummary,
} from "api/services/ticket";

const useGetTickets = (ticketID) => {
  const {
    isLoading: isAllTicketsLoading,
    error: allTicketsError,
    data: allTickets,
    refetch: allTicketsRefetch,
    isFetching: isAllTicketsFetching
  } = useQuery({
    queryKey: ["allTickets"],
    queryFn: () => getAllTickets(),
  });
 
  const {
    isLoading: isAllEventsLoading,
    error: allEventsError,
    data: allEvents,
    refetch: allEventsRefetch,
    isFetching: isAllEventsFetching,
    status: allEventsStatus,
  } = useQuery({
    queryKey: ["events"],
    queryFn: () => getAllEvents(),
  });

  const {
    isLoading: isOverviewLoading,
    error: overviewError,
    data: allOverview,
    refetch: overviewRefetch,
    isFetching: isOverviewRefetching,
  } = useQuery({
    queryKey: ["overview"],
    queryFn: () => getOverview(),
  });

  const {
    isLoading: isSummaryLoading,
    error: summaryError,
    data: summary,
    fetching: isSummaryFetching,
    refetch: summaryRefetch,
  } = useQuery({
    enabled: !!ticketID,
    queryKey: ["summary"],
    queryFn: () => getTicketSummary(ticketID),
  });

  const {
    isLoading: isEventDetailLoading,
    error: eventDetailError,
    data: eventDetails,
    refetch: eventDetailRefetch,
    isFetching: isEventDetailFetching,
  } = useQuery({
    enabled: !!ticketID,
    queryKey: ["eventDetail"],
    queryFn: () => getEventDetail(ticketID),
  });

  const {
    isLoading: isMyEventsLoading,
    refetch: myEventRefetch,
    isFetching: isMyEventFetching,
    error: myEventsError,
    data: myEvents,
  } = useQuery({
    queryKey: ["my-events"],
    queryFn: () => getMyEvents(),
    
  });

  const {
    isLoading: isTicketReportLoading,
    error: ticketReportError,
    data: ticketReportData,
  } = useQuery({
    queryKey: ["ticket-report"],
    queryFn: () => getTicketReport(),
  });

  const overview = allOverview;

  return {
    isOverviewLoading,
    overviewError,
    isAllEventsLoading,
    allEventsError,
    allEventsStatus,
    overview,
    isOverviewRefetching,
    overviewRefetch,
    allEvents,
    summary,
    isSummaryLoading,
    isSummaryFetching,
    summaryError,
    summaryRefetch,

    myEvents,
    myEventsError,
    isMyEventsLoading,
    getMyEvents,
    eventDetails,
    isEventDetailLoading,
    eventDetailRefetch,
    isMyEventFetching,
    myEventRefetch,
    isEventDetailFetching,
    eventDetailError,
    isAllTicketsLoading,
    allTickets,
    allTicketsError,
    isAllEventsFetching,
    allEventsRefetch,
    allTicketsRefetch,
    isAllTicketsFetching,

    //Ticket Report

    ticketReportData,
    ticketReportError,
    isTicketReportLoading,
  };
};

export default useGetTickets;
