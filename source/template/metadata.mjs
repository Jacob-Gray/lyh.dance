import { DateTime, Duration } from "luxon";

export default section => {
    let date = DateTime.fromObject(
        section.schedule.start
    );
    let duration = Duration.fromObject(section.schedule.duration);

    date = date.setZone('America/New_York');

    if (date.plus(duration) < DateTime.now()) {
        date = date.plus(Duration.fromObject({ week: 1 }))
    }

    const metadata = {
        "@context": "https://schema.org",
        "@type": "DanceEvent",
        "name": `${section.name} weekly dance`,
        "startDate": date.toISO(),
        "endDate": date.plus(duration).toISO(),
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": section.location.name,
            "address": {
                "@type": "PostalAddress",
                "name": "section.location.address"
            },
        },
        "offers": {
            "@type": "Offer",
            "price": 5,
            "priceCurrency": "USD"
        },
        "description": section.schedule.description,
        "organizer": {
            "@type": "Organization",
            "name": section.name,
            "url": 'https://lyh.dance'
        }
    };


    return /* html */ `
    <script type="application/ld+json">
        ${JSON.stringify(metadata)}
    </script>
`;
}