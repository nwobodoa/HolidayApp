import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import StarRating from './StarRating';
import useEvents from "./hooks/useEvents";


const EventDetails = () => {
    const {eventId} = useParams();
    const {events} = useEvents()
    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvent(events.find(e => e.id === eventId))
    }, [eventId, events])


    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className='event-detail-wrapper'>
            <h2>{event.title}</h2>
            <p>Location: {`${event.location},${event.city}`}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Price: ${event.price}</p>
            <p>{event.description}</p>
            <StarRating rating={event.rating}/>
        </div>

    );
};

export default EventDetails;
