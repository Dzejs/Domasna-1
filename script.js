let table = document.getElementById("table");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    $.ajax({
        url: " https://jsonplaceholder.typicode.com/users",
        method: "GET",
        success: data => {
            console.log(data);
            createTable(data);
        }
    })
})

let createTable = (data) => {

    let tr = document.createElement("tr");
    table.appendChild(tr);
    tr.innerHTML = `
    <th rowspan = "2">Name</th>
    <th rowspan = "2">Username</th>
    <th rowspan = "2">Email</th>
    <th colspan = "4">Address</th>
    <th colspan = "2">Geo</th>
    <th rowspan = "2">Phone</th>
    <th rowspan = "2">Website</th>
    <th colspan = "3">Company</th>
    `;
    let trbody = document.createElement("tr");
    table.appendChild(trbody);
    trbody.innerHTML = `
        <th>Street</th>
        <th>Suite</th>
        <th>City</th>
        <th>zipcode</th>
        <th>lat</th>
        <th>lng</th>
        <th>Name</th>
        <th>CatchPhrase</th>
        <th>Bs</th>
        `;
    for (let i = 0; i < data.length; i++) {
        let trbody = document.createElement("tr");
        table.appendChild(trbody);
        trbody.innerHTML = `
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        <td>${data[i].email}</td> 
        `;
        for (const key in data[i].address) {
            if (typeof data[i].address[key] != "object") {
                trbody.innerHTML += `<td>${data[i].address[key]}</td>`;
            }
        }
        for(const key in data[i].address.geo){
            trbody.innerHTML += `<td>${data[i].address.geo[key]}</td>`;
        }
        trbody.innerHTML += `
        <td>${data[i].phone}</td>
        <td>${data[i].website}</td>
        `; 
        for(const key in data[i].company){
            trbody.innerHTML += `<td>${data[i].company[key]}</td>`;
        }
    }

}
