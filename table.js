const data = [
    {
        "firstName": "Ali",
        "lastName": "Agamaliyev",
        "age": 20,
        "mail": "ali@gmail.com",
       
    },
    {
        "firstName": "Ali2",
        "lastName": "Agamaliyev2",
        "age": 20,
        "mail": "ali2@gmail.com",
       
    },
    {
        "firstName": "Ali2",
        "lastName": "Agamaliyev2",
        "age": 20,
        "mail": "ali2@gmail.com",
       
    },
];

const table = document.createElement('table');
const root = document.getElementById('root');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

document.addEventListener("DOMContentLoaded", () => {
    
    const headers = ['First Name', 'Last Name', 'Age', 'Email'];
    table.classList.add('table', 'table-striped');
    
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach(person => {
        const row = document.createElement('tr');

        Object.values(person).forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    root.appendChild(table);
});
