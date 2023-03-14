

let postBtn = document.getElementById("postBtn");
let getBtn = document.getElementById("getBtn");
let putBtn = document.getElementById("putBtn");
let deleteBtn = document.getElementById("deleteBtn");

let form = document.getElementById("methodtestForm");
let output = document.getElementById("response");

postBtn.addEventListener('click', () => {

    const formData = new FormData(form);
    formData.append("Date", new Date());

    const resp = Object.fromEntries(formData);
    const payload = JSON.stringify(resp);

    fetch('https://httpbin.org/post', {
        method: "POST",
        body: payload,
        
    })

        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let data = JSON.parse(payload);
            let text = "<table>";
            for (let key in data) {
                text += `<tr><td><b>${key}</b>: ${data[key]}</td></tr>`;
            }
            text += "</table>"
            output.innerHTML = text;
            })
        .catch(error => console.error(error))
})

getBtn.addEventListener('click', () => {

    const url = new URL('https://httpbin.org/get');
    const formData = new FormData(form);
    formData.append("Date", new Date());
    const params = new URLSearchParams(formData);
    url.search = params;

    fetch(url, {
        method: "GET",
    })

        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            output.innerHTML = `<table><tr><td><b>URL</b>: ${url}</td></tr></table>`;
        })
        .catch(error => console.error(error))
})

putBtn.addEventListener('click', () => {

    const formData = new FormData(form);
    formData.append("Date", new Date());

    const resp = Object.fromEntries(formData);
    const payload = JSON.stringify(resp);

    fetch('https://httpbin.org/put', {
        method: "PUT",
        body: payload, 
    })

        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let data = JSON.parse(payload);
            let text = "<table>";
            for (let key in data) {
                text += `<tr><td><b>${key}</b>: ${data[key]}</td></tr>`;
            }
            text += "</table>"
            output.innerHTML = text;
            })
        .catch(error => console.error(error))
})


deleteBtn.addEventListener('click', () => {

    const formData = new FormData(form);
    formData.append("Date", new Date());

    const resp = Object.fromEntries(formData);
    const payload = JSON.stringify(resp);

    fetch('https://httpbin.org/delete', {
        method: "DELETE",
        body: payload, 
    })

        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            let data = JSON.parse(payload);
            let text = "<table>";
            for (let key in data) {
                text += `<tr><td><b>${key}</b>: ${data[key]}</td></tr>`;
            }
            text += "</table>"
            output.innerHTML = text;
            })
        .catch(error => console.error(error))
})