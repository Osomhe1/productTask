
export const filterApiData = (data, data2, searchTerm) => {

    const searchTermLower = searchTerm?.toLowerCase();
    /* const venueTermLower = venueTerm?.toLowerCase();
    const categoryTermLower = categoryTerm?.toLowerCase();
 */
    const filterEvent = (event) => {
      const { title, venue_name, category } = event;
      return (
        (title && title.toLowerCase().includes(searchTermLower)) /* ||
        (venue_name && venue_name.toLowerCase().includes(venueTermLower)) ||
        (category && category.toLowerCase().includes(categoryTermLower)) */
      );
    };

    const eventThisWeek = data?.event_this_week || [];
    const popularEvent =
      data?.popular_event.message === "No active events found."
        ? []
        : data?.popular_event;
    const promotedEvent =
      data?.promoted_event.message === "success"
        ? data?.promoted_event.data
        : [];
    const tickets = data2;

    const filteredPromotedEvents = promotedEvent?.filter(filterEvent);
    const filteredPopularEvents =
      popularEvent?.message === "No active events found."
        ? []
        : popularEvent?.filter(filterEvent);
    const filteredEventsThisWeek = eventThisWeek?.filter(filterEvent);
    const filteredTickets = tickets?.filter(filterEvent);

    return {
      promoted_events: filteredPromotedEvents,
      popular_events: filteredPopularEvents,
      events_this_week: filteredEventsThisWeek,
      all_events: filteredTickets,
    };
  };
