document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("publications-list");

    if (!container || typeof publications === "undefined") {
        return;
    }

    // Group publications by year
    const grouped = {};

    publications.forEach(function (publication) {

        if (!grouped[publication.year]) {
            grouped[publication.year] = [];
        }

        grouped[publication.year].push(publication);
    });


    // Sort years from newest to oldest
    const years = Object.keys(grouped).sort(function (a, b) {
        return Number(b) - Number(a);
    });


    years.forEach(function (year) {

        // Year heading
        const yearHeading =
            document.createElement("h4");

        yearHeading.textContent = year;

        container.appendChild(yearHeading);


        // Publication list
        const list =
            document.createElement("ul");

        list.className =
            "u-align-justify u-text u-text-default u-text-2";


        grouped[year].forEach(function (publication) {

            const item =
                document.createElement("li");


            // Authors
            const authors =
                document.createElement("span");

            authors.textContent =
                publication.authors + ", ";

            item.appendChild(authors);


            // Title
            const title =
                document.createElement("i");

            title.textContent =
                "“" + publication.title + "”";

            item.appendChild(title);


            // Venue
            const venue =
                document.createElement("span");

            venue.textContent =
                ", " + publication.venue;

            item.appendChild(venue);


            // Paper link
            if (publication.link) {

                const link =
                    document.createElement("a");

                link.href =
                    publication.link;

                link.textContent =
                    "Click here";

                link.target =
                    "_blank";

                link.className =
                    "u-active-none u-border-none u-btn u-button-style u-hover-none u-none u-text-palette-1-base publication-link";

                item.appendChild(link);
            }


            list.appendChild(item);
        });


        container.appendChild(list);
    });

});