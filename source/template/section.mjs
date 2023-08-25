export default (section) => {
    const url = new URLSearchParams();

    url.set('q', section.location.name);
    return /* html */ `
<section id="${section.id}">
    <article class="pageWidth block">
        ${section.header ? `<div class="block-heading">
            <img src="./images/${section.header}.jpg" />
        </div>` : '' }

        <div class="block-body">
            <h2>${section.name}</h2>

            <p>${section.description}</p>
            <p>${Object.keys(section.links).map(
                name => /* html */ `<a href="${section.links[name]}" class="button">${name}</a>`
            ).join('')}</p>

            <dl>
                <dt>When?</dt>
                <dd>${section.schedule.text}</dd>
            </dl>

            <dl>
                <dt>How much?</dt>
                <dd>${section.cost}</dd>
            </dl>

            <dl>
                <dt>Where?</dt>
                <dd>
                    <address>
                        ${section.location.name}<br>
                        ${section.location.address}
                    </address>

                    <a href="https://www.google.com/maps?${url.toString()}"
                        target="_blank">View in maps</a>
                </dd>
            </dl>
        </div>
    </article>
</section>
`};