let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "First Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Last Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Course";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Alex";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "Michel";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "MERN";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "David";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Brigham";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "MERN";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Sadat";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "Baji";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "MERN";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Mai";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "Unknown";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "MERN";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
tbody.appendChild(row_5);