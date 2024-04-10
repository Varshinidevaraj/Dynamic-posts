fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response =>{
    if(!response.ok) {
    throw new Error("Network response is not ok");
    }
    return response.json();
})
.then(data => {
    console.log(data);
    let apiData = data
    let apiDataLength = data.length
    let outerbox = document.querySelector("#outbox")
    for(let i=0; i<apiDataLength;i++)
    {
    let posts = document.createElement("div")
    posts.className = "posts"
    let headId = document.createElement("h1")
    let headTitle = document.createElement("h1")
    let headBody = document. createElement("h1")
    let spanId = document.createElement("span")
    spanId. innerHTML = apiData[i].id
    let spanTitle = document.createElement("span")
    spanTitle. innerHTML = apiData[i].title
    let spanBody = document.createElement("span")
    spanBody. innerHTML = apiData[i].Body
    headId.innerHTML = "ID:"
    headId.appendChild(spanId)
    headTitle. innerHTML = "Title:"
    headTitle.appendChild(spanTitle)
    headBody. innerHTML = "Body: "
    headBody.appendChild(spanBody)
    posts.appendChild(headId)
    posts.appendChild(headTitle)
    posts.appendChild(headBody)
    outerbox.appendChild(posts)
    }
})