export default [
    {
        id: "llh",
        name: "Lynchburg Lindy Hop",
        header: "llh2.jpeg",
        description: "East Coast Swing and Lindy Hop dance scene focused around a weekly lesson and social dance. High energy, partnered dance to the swing of the mid 1900s.",
        links: {
            Facebook: "https://www.facebook.com/lynchburglindyhop/",
            "Facebook Group": "https://www.facebook.com/groups/lyhlindy/",
        },
        schedule: {
            text: "Every <b>Tuesday night</b> at <b>7pm</b>. Lesson from 7pm-8pm, social dance until 9:30pm.",
            description: "Weekly lindy hop social dance. Lesson from 7pm-8pm, social dance until 9:30pm",
            start: {
                weekday: 2,
                hour: 19,
            },
            duration: {
                hour: 2,
                minute: 30,
            }
        },
        cost: 5,
        costText: "$5, first week of the month is free!",
        location: {
            name: "RiverView Vinyl",
            address: "409 Fifth St, Lynchburg, VA 24504"
        }
    },
    {
        id: "lw",
        name: "Lynchburg Westies",
        description: "West Coast Swing dance scene with a bi-weekly lesson and social dance. A smooth, versatile partnered dance style that works with a wide range of contemporary music.",
        links: {
            Facebook: "https://www.facebook.com/hillcityswing/",
            "Facebook Group": "https://www.facebook.com/groups/944710179511530/",
        },
        schedule: {
            text: "Bi-weekly <b>Thursday night</b> at <b>8:40pm</b>. Beginner lesson 8:40-9:30pm, social dance 9:30-10:30pm.",
            start: {
                weekday: 4,
                hour: 20,
                minute: 40,
            },
            duration: {
                hour: 1,
                minute: 50,
            }
        },
        cost: 8,
        costText: "$8 General Entry, $5 with valid student ID.",
        location: {
            name: "Live Move Be Fitness",
            address: "22273 Timberlake Rd Lynchburg, VA 24502"
        }
    }
]
