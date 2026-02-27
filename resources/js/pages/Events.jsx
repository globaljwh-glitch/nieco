import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Events = () => {

    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        axios.get("/events-data")
            .then(response => {
                const data = Array.isArray(response.data)
                    ? response.data
                    : response.data.data || [];

                setEvents(data);
            })
            .catch(error => {
                console.error("Error fetching technical services:", error);
            });
    }, []);

    return (
        <>
            <TopBar />
            <Navbar />

            {/* Banner */}
            <section class="innerBanner p-0">
                <div class="bannerImage">
                    <img src="images/banner/events.jpg" class="imgHeightResponsive" />
                    <div class="overlay"></div>
                </div>
                <div class="bannerContentOuter">
                    <div class="container">
                    <div class="bannerContent text-center m-auto">
                        <h1>Media &amp; Trade Shows</h1>
                    </div>
                    </div>
                </div>
            </section>
            <section class="">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <h3 class="text-center mb-5">Trade shows we are participating in :</h3>
                        <div className="eventListBlock pt-4">
                            {events.length === 0 && (
                                <p className="text-center">No upcoming events available.</p>
                            )}

                            {events.map((event, index) => {

                                const startDate = event.event_date
                                    ? new Date(event.event_date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                    : null;

                                const endDate = event.event_end_date
                                    ? new Date(event.event_end_date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'short',
                                        year: 'numeric'
                                    })
                                    : null;

                                const dateDisplay = startDate && endDate
                                    ? `${startDate} – ${endDate}`
                                    : startDate || "Upcoming";

                                return (
                                    <div key={index} className="event shadowBlock">
                                        <div className="eventThumb">
                                            <img decoding="async"
                                                src={`${event.image}`}
                                                className="imgResponsive"
                                                alt={event.event_name}
                                            />
                                        </div>

                                        <div className="eventInfo">
                                            <h5 className="eventName text-green">
                                                {event.event_name}
                                            </h5>
                                            <div className="eventDate">
                                                {dateDisplay}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Events;