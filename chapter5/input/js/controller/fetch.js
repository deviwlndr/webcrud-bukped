
const url = "https://reqres.in/api/users/2";

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    if (data && data.data){
        var user = data.data;
        var tableBody = document.querySelector('#dataTable tbody');
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + user.id + '</td>'  +
                        '<td>' + user.first_name + ' ' + user.last_name + '</td>' + 
                        '<td>' + user.email + '</td>' +
                        '<td>' + user.judul + '</td>' +
                        '<td>' + user.cover + '</td>' +
                        '<td>' + user.delete + '</td>' +
                        '<td>' + user.update +
                        '<td>' ;
        tableBody.appendChild(row);
   
}else{
    console.error("Data is not expected format")
}
})
.catch(error => {
    console.error("Error pastikan dicek dengan benar", error)
});