document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("research-records");

    if (!container || typeof researchRecords === "undefined") {
        return;
    }

    researchRecords.forEach(function (record) {

        const row = document.createElement("tr");
        row.className = "record_row";


        // =========================
        // DURATION
        // =========================

        const durationCell = document.createElement("td");

        durationCell.className = "left_col";
        durationCell.textContent = record.duration;


        // =========================
        // MAIN CONTENT
        // =========================

        const contentCell = document.createElement("td");

        contentCell.className = "right_col";


        const table = document.createElement("table");

        table.style.width = "100%";


        // Title
        const titleRow = document.createElement("tr");

        const titleLabel = document.createElement("th");
        titleLabel.className = "left_col";
        titleLabel.textContent = "Title";

        const titleValue = document.createElement("th");
        titleValue.className = "right_col";
        titleValue.textContent = record.title;

        titleRow.appendChild(titleLabel);
        titleRow.appendChild(titleValue);


        // Supervisor
        const supervisorRow = document.createElement("tr");

        const supervisorLabel = document.createElement("td");
        supervisorLabel.className = "left_col";
        supervisorLabel.textContent = "Supervisor";

        const supervisorValue = document.createElement("td");
        supervisorValue.className = "right_col";
        supervisorValue.textContent = record.supervisor;

        supervisorRow.appendChild(supervisorLabel);
        supervisorRow.appendChild(supervisorValue);


        // Funding
        const fundingRow = document.createElement("tr");

        const fundingLabel = document.createElement("td");
        fundingLabel.className = "left_col";
        fundingLabel.textContent = "Funding Agency";

        const fundingValue = document.createElement("td");
        fundingValue.className = "right_col";
        fundingValue.textContent = record.funding;

        fundingRow.appendChild(fundingLabel);
        fundingRow.appendChild(fundingValue);


        // Description
        const descriptionRow = document.createElement("tr");

        const description =
            document.createElement("td");

        description.colSpan = 2;
        description.style.textAlign = "justify";
        description.style.paddingTop = "10px";
        description.style.lineHeight = "1.6";
        description.textContent = record.description;

        descriptionRow.appendChild(description);


        // Add everything
        table.appendChild(titleRow);
        table.appendChild(supervisorRow);

        if (record.funding) {
            table.appendChild(fundingRow);
        }

        table.appendChild(descriptionRow);

        contentCell.appendChild(table);

        row.appendChild(durationCell);
        row.appendChild(contentCell);

        container.appendChild(row);
    });

});