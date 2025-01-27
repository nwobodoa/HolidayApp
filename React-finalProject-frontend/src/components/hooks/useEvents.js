import {useEffect, useState} from "react";

const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [searchBy, setSearchBy] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://events-server-uka4.onrender.com/api/events')
            .then((response) => response.json())
            .then((data) => {
                setFilteredEvents(data)
                setEvents(data)
            })
            .catch((error) => console.error('Error fetching events:', error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if (searchTerm === "" || searchBy === "") {
            setFilteredEvents(events)
            return
        }
        setFilteredEvents(
            events.filter(event => event[searchBy]?.toLowerCase().includes(searchTerm?.toLowerCase()))
        );
    }, [searchBy, searchTerm, events]);

    return {events, setSearchBy, setSearchTerm, filteredEvents, searchBy, searchTerm, loading}
}

export default useEvents;