import React from "react";

const eventsData = [
  {
    id: 1,
    title: "Youth Apologetics Conference",
    date: "October 15, 2025",
    venue: "TikTok Live",
    description:
      "A one-day intensive online conference equipping youths to defend their faith with confidence.",
    upcoming: true,
  },
  {
    id: 2,
    title: "Street Evangelism Outreach",
    date: "September 10, 2025",
    venue: "TikTok Live",
    description:
      "An engaging online outreach session sharing the gospel with thousands live on TikTok.",
    upcoming: false,
  },
  {
    id: 3,
    title: "Apologetics Bible Study",
    date: "August 25, 2025",
    venue: "TikTok Live",
    description:
      "An online study session covering the reliability of the New Testament manuscripts.",
    upcoming: false,
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">
            Ministry <span className="text-blue-600">Events</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            All our events are streamed live on{" "}
            <span className="font-semibold text-blue-600">TikTok</span>.  
            Stay tuned for upcoming sessions and revisit our past teachings.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-200 pl-8 space-y-12">
          {eventsData.map((event) => (
            <div key={event.id} className="relative">
              {/* Dot */}
              <span
                className={`absolute -left-5 top-2 w-4 h-4 rounded-full border-4 ${
                  event.upcoming
                    ? "bg-blue-600 border-blue-200"
                    : "bg-gray-400 border-gray-200"
                }`}
              ></span>

              {/* Event Content */}
              <div
                className={`p-6 rounded-xl shadow-sm ${
                  event.upcoming ? "bg-white" : "bg-gray-100"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold ${
                    event.upcoming ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {event.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    event.upcoming ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  📅 {event.date} | 📍 {event.venue}
                </p>
                <p
                  className={`mt-4 text-lg leading-relaxed ${
                    event.upcoming ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
