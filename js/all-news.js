document.addEventListener("DOMContentLoaded", function () {

    const newsContainer = document.getElementById("all-news-list");

    if (!newsContainer || typeof newsItems === "undefined") {
        return;
    }

    newsItems.forEach(function (item, index) {

        const newsItem = document.createElement("div");
        newsItem.className = "all-news-item";

        const date = document.createElement("span");
        date.className = "all-news-date";

        // Highlight the newest news item
        if (index === 0) {
            date.classList.add("news-date-latest");
        }

        date.textContent = item.date;

        const text = document.createElement("span");
        text.className = "all-news-text";
        text.textContent = item.text;

        newsItem.appendChild(date);
        newsItem.appendChild(text);

        newsContainer.appendChild(newsItem);
    });

});