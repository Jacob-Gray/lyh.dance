const weekdayToSchema = (weekday) => {
    // Luxon uses 1=Monday, 7=Sunday by default for weekday in fromObject
    const map = {
        1: "https://schema.org/Monday",
        2: "https://schema.org/Tuesday",
        3: "https://schema.org/Wednesday",
        4: "https://schema.org/Thursday",
        5: "https://schema.org/Friday",
        6: "https://schema.org/Saturday",
        7: "https://schema.org/Sunday",
    };
    return map[weekday];
};

export default section => {
    // Build recurring schedule based on provided start (weekday, hour, minute) and duration
    const startObj = section.schedule.start || {};
    const durationObj = section.schedule.duration || {};

    // Compute times without external libs
    const pad2 = (n) => String(n).padStart(2, '0');
    const startMinutes = (startObj.hour ?? 0) * 60 + (startObj.minute ?? 0);
    const durationMinutes = (durationObj.hour ?? 0) * 60 + (durationObj.minute ?? 0);
    const endMinutes = (startMinutes + durationMinutes) % (24 * 60);

    const startTimeStr = `${pad2(Math.floor(startMinutes / 60))}:${pad2(startMinutes % 60)}`;
    const endTimeStr = `${pad2(Math.floor(endMinutes / 60))}:${pad2(endMinutes % 60)}`;

    // Use a past date indicating when this weekly series started
    // Google will understand it's ongoing based on the eventSchedule
    const seriesStartDate = new Date('2024-01-01T00:00:00.000Z');

    const metadata = {
        "@context": "https://schema.org",
        "@type": "DanceEvent",
        name: `${section.name} weekly dance`,
        startDate: seriesStartDate.toISOString(),
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
            "@type": "Place",
            name: section.location?.name,
            address: {
                "@type": "PostalAddress",
                name: section.location?.address
            },
        },
        // Use numeric cost if provided for the offer
        offers: (typeof section.cost === 'number') ? {
            "@type": "Offer",
            price: section.cost,
            priceCurrency: "USD"
        } : undefined,
        description: section.schedule.description || section.description,
        organizer: {
            "@type": "Organization",
            name: section.name,
            url: 'https://lyh.dance'
        },
        eventSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: [weekdayToSchema(startObj.weekday)],
            startTime: startTimeStr,
            endTime: endTimeStr,
            scheduleTimezone: 'America/New_York'
        }
    };

    // Remove undefined keys for cleanliness
    Object.keys(metadata).forEach(k => metadata[k] === undefined && delete metadata[k]);

    return /* html */ `
    <script type="application/ld+json">
        ${JSON.stringify(metadata)}
    </script>
`;
}