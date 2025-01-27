import React from 'react';
import { Link } from 'react-router-dom';
import * as styled from './styled';
import StarRating from '../StarRating';
import SearchComponent from '../SearchComponent';
import '../../css/style.css';
import useEvents from '../hooks/useEvents';

const compareDates = (event1, event2) => {
  const date1 = new Date(event1.date);
  const date2 = new Date(event2.date);
  return date1 - date2;
};

const EventCard = ({ event }) => {
  const isGoodDeal = event.price < 20;

  return (
    <styled.CardBody>
      <div style={{ position: 'relative' }}>
        {isGoodDeal && (
          <styled.GoodDealLabelWrapper>
            Good Deal!
          </styled.GoodDealLabelWrapper>
        )}
        <styled.EventImage src={event.image} alt={event.title} />
      </div>
      <div>
        <span className="event-cat">{event.category}</span>
      </div>
      <div>
        <h4>{event.title}</h4>
        <p>Location: {`${event.location}, ${event.city}`}</p>
        <p>Date: {event.date}</p>
        <p>Price: ${event.price}</p>
      </div>
      <StarRating rating={event.rating} />
      <styled.MoreBtnWrapper>
        <Link to={`/event/${event.id}`} className="more-btn">
          More
        </Link>
      </styled.MoreBtnWrapper>
    </styled.CardBody>
  );
};

const EventPage = () => {
  const { searchBy, searchTerm, setSearchBy, setSearchTerm, filteredEvents, loading } = useEvents();

  const sortedEvents = filteredEvents.sort(compareDates);

  return (
    <styled.EventPage>
      <SearchComponent
        searchBy={searchBy}
        searchTerm={searchTerm}
        setSearchBy={setSearchBy}
        setSearchTerm={setSearchTerm}
      />
      <h2 style={{ textAlign: 'center' }}>Events</h2>
      {loading ? (
        <div>loading...</div>
      ) : (
        <styled.EventCards>
          {sortedEvents.length === 0 ? (
            <div>No Events to show</div>
          ) : (
            sortedEvents.map((event) => <EventCard key={event.id} event={event} />)
          )}
        </styled.EventCards>
      )}
    </styled.EventPage>
  );
};

export default EventPage;
