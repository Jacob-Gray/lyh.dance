import sectionTemplate from './section.mjs';

/**
 * @param {Array} sections
 */
export default (sections, updatedOn) => /* html */ `
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preload" href="https://use.typekit.net/upg5mvd.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="https://use.typekit.net/upg5mvd.css" />
    </noscript>

    <link rel="stylesheet" href="./site.css" />

    <title>Dancing in Lynchburg, VA</title>

    <link rel="shortcut icon" type="image/png" href="/favicon.png">
    <link rel="shortcut icon" sizes="192x192" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="https://www.lyh.dance" />
    <meta charset="UTF-8" />
    <meta name="description" content="Looking to find a place to dance? Need to get off campus for a bit? Here's a handy list of the local
    scenes, no partner required. 🤗" />
</head>

<body>
    <header id="top">
        <section class="pageWidth">
            <h1>Dancing in Lynchburg, VA</h1>
            <p>Looking to find a place to dance? Need to get off campus for a bit? Here's a handy list of the local
                scenes, no partner required. 🤗</p>
        </section>
    </header>

    <nav>
        <div class="pageWidth">
            <div class="scrollContainer overflowing">
                <div class="scrollChild">
                    <ul>
                        ${sections.map(section => `<li><a href="#${section.id}" class="button">${section.name}</a></li>`).join('\n')}
                    </ul>
                </div>
            </div>

            <a href="#top" class="button iconic">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                </svg>
            </a>
        </div>
    </nav>

    <main>
        ${sections.map(section => sectionTemplate(section)).join('\n')}
    </main>

    <footer>
        <div class="pageWidth">
            <p>Info incorrect? Want your group listed here? <a
                    href="https://github.com/Jacob-Gray/lyh.dance/issues">Submit an issue!</a></p>

            <p class="updateWrapper"><a class="update" href="https://github.com/Jacob-Gray/lyh.dance/commits">Last updated on ${updatedOn}</a> 💖</p>
        </div>
    </footer>

    <script src="./website.js"></script>
</body>

</html>
`;