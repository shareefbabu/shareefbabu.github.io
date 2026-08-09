document.addEventListener("DOMContentLoaded", function () {

    const newsContainer = document.getElementById("latest-news-list");

    if (!newsContainer || typeof newsItems === "undefined") {
        return;
    }

    const latestNews = newsItems.slice(0, 4);

    latestNews.forEach(function (item, index) {

        const newsItem = document.createElement("div");
        newsItem.className = "news-item";

        const date = document.createElement("span");
        date.className = "news-date";

        if (index === 0) {
            date.classList.add("news-date-latest");
        }

        date.textContent = item.date;

        const text = document.createElement("span");
        text.className = "news-text";
        text.textContent = item.text;

        newsItem.appendChild(date);
        newsItem.appendChild(text);

        newsContainer.appendChild(newsItem);
    });

});