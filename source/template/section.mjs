export default (section) => /* html */ `
<section id="${section.id}">
    <article class="pageWidth">
        <h2>${section.name}</h2>

        <p>${section.description}</p>
        <p><a href="${section.links.fb}">Facebook</a></p>

        <dl>
            <dt>When?</dt>
            <dd>${section.schedule}</dd>
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

                <a href="https://www.google.com/maps?q=${section.location.address}"
                    target="_blank">View in maps</a>
            </dd>
        </dl>
    </article>
</section>
`;