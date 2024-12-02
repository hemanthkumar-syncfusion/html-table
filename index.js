function createElementWithAttributes(tag, attributes) {
    const element = document.createElement(tag);
    return element;
}

function createDynamicTable() {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add('outer-container');

    const innerDiv = createElementWithAttributes("div", { class: "inner-container" });

    const table = createElementWithAttributes("table", { class: "dynamic-table", border: "1" });

    const thead = createElementWithAttributes("thead", { class: "table-header" });
    const headerRow = createElementWithAttributes("tr", { class: "header-row" });
    for (let i = 1; i <= 4; i++) {
        const th = createElementWithAttributes("th", { class: "header-cell", id: `header-${i}` });
        th.textContent = `Header ${i}`;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);

    const tbody = createElementWithAttributes("tbody", { class: "table-body" });

    for (let row = 1; row <= 4; row++) {
        const tr = createElementWithAttributes("tr", { class: `row-${row}` });
        for (let col = 1; col <= 4; col++) {
            const td = createElementWithAttributes("td", {
                class: `cell row-${row}-col-${col}`,
                id: `cell-${row}-${col}`
            });
            td.textContent = `R${row}C${col}`;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);

    innerDiv.appendChild(table);
    outerDiv.appendChild(innerDiv);

    document.body.appendChild(outerDiv);

    table = null;
    innerDiv = null;
    outerDiv = null
}

document.getElementById('create').addEventListener('click', () => {
    createDynamicTable();
});

document.getElementById('destroy').addEventListener('click', () => {
    document.querySelector('.outer-container').innerHTML = '';
});
