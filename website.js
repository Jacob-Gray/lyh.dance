(function () {
    const scrollChild = document.querySelector('.scrollChild');
    const scrollContainer = scrollChild.parentElement;
    const nav = document.querySelector('nav');

    const commitHook = 'https://api.github.com/repos/Jacob-Gray/lyh.dance/commits?path=index.html';

    fetch(commitHook)
        .then(r => r.json())
        .then(d => {
            const mostRecent = d[0];

            if (!mostRecent) {
                return;
            }

            const updateDate = new Date(
                mostRecent.commit.author.date
            );

            document.querySelector('.update').innerHTML = `Last updated on ${updateDate.toLocaleDateString()}.`;
        });


    function calculateScrollContainerOverflow() {
        scrollContainer.classList.toggle('overflow-left', !!scrollChild.scrollLeft);
        scrollContainer.classList.toggle('overflow-right',
            scrollChild.getBoundingClientRect().width + scrollChild.scrollLeft < scrollChild.scrollWidth
        );
    }

    window.addEventListener('load', () => {
        document.documentElement.style.scrollPaddingTop = nav.getBoundingClientRect().height + 'px';

        calculateScrollContainerOverflow();
    });
    scrollChild.addEventListener('scroll', calculateScrollContainerOverflow);
    window.addEventListener('resize', calculateScrollContainerOverflow, {
        passive: true
    });

    (new IntersectionObserver(
        ([e]) => {
            e.target.classList.toggle('scrolling', e.isIntersecting);
            calculateScrollContainerOverflow();
        },
        {
            rootMargin: '0px 0px -100% 0px',
            threshold: [0, 1]
        }
    )).observe(nav);
})();
