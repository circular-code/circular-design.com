(function () {
    "use strict";

    const navLinks = {};
    let timestamp = 0;
    let lastActive;

    let navElements = document.querySelectorAll('nav a');
    if (!navElements)
        return;

    navElements = Array.prototype.slice.call(navElements);

    navElements.forEach(link => {
        var target = document.getElementById(link.hash.slice(1));
        if (target)
            navLinks[link.hash.slice(1)] = {link: link, target};
    });

    document.onscroll = e => {

        if (timestamp + 200 > e.timeStamp)
            return;

        timestamp = e.timeStamp;

        for (var key in navLinks) {

            const target = navLinks[key].target;

            if (target.offsetTop < (window.scrollY + 400) &&
                (target.offsetTop + target.offsetHeight) > (window.scrollY + 400) &&
                lastActive !== navLinks[key].link) {

                if (lastActive)
                    lastActive.dataset.highlight = false;

                navLinks[key].link.dataset.highlight = true;
                lastActive = navLinks[key].link;
                break;
            }
        }
    }
})();