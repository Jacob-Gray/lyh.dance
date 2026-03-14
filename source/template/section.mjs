const icons = {
    schedule: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path fill="currentColor" d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>',
    payments: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path fill="currentColor" d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>',
    location_on: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path fill="currentColor" d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>',
    map: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path fill="currentColor" d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z"/></svg>',
};

export default (section) => {
    const url = new URLSearchParams();

    url.set('q', section.location.name);
    return /* html */ `
<section id="${section.id}">
    <article class="pageWidth block">
        ${section.header ? `<div class="block-heading">
            <img src="./images/${section.header}" />
        </div>` : '' }

        <div class="block-body">
            <h2><a href="#${section.id}">${section.name}</a></h2>

            <p>${section.description}</p>
            <div class="buttons">${Object.keys(section.links).map(
                name => /* html */ `<a href="${section.links[name]}" class="button">${name}</a>`
            ).join('')}</div>

            <dl>
                <dt>${icons.schedule} When?</dt>
                <dd>${section.schedule.text}</dd>
            </dl>

            <dl>
                <dt>${icons.payments} How much?</dt>
                <dd>${section.costText ?? (typeof section.cost === 'number' ? `$${section.cost}` : section.cost)}</dd>
            </dl>

            <dl>
                <dt>${icons.location_on} Where?</dt>
                <dd>
                    <address>
                        ${section.location.name}<br>
                        ${section.location.address}
                    </address>

                    <a href="https://www.google.com/maps?${url.toString()}"
                        target="_blank">${icons.map} View in maps</a>
                </dd>
            </dl>
        </div>
    </article>
</section>
`};
