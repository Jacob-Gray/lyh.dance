import { DateTime, Duration } from "luxon";

export default section => {
    let date = DateTime.fromObject(
        section.schedule.start
    );
    let duration = Duration.fromObject(section.schedule.duration);

    date = date.setZone('America/New_York');

    if(date.plus(duration) < DateTime.now()) {
        date = date.plus(Duration.fromObject({week: 1}))
    }


    return /* html */ `
    <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "DanceEvent",
    "name": "${section.name} weekly dance",
    "startDate": "${date.toISO()}",
    "endDate": "${date.plus(duration).toISO()}",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
        "@type": "Place",
        "name": "${section.location.name}"
    },
    "description": "${section.schedule.description}",
    "organizer": {
        "@type": "Organization",
        "name": "${section.name}",
    }
    }
    </script>
`;
}