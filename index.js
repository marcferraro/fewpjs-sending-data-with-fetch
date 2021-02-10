function submitData(name, email){
    const user = {name: name, email: email}

    const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(resp => {
        // const div = document.createElement('div')
        const body = document.querySelector('body')
        // const pName = document.createElement('p')
        // const pEmail = document.createElement('p')
        // const pId = document.createElement('p')

        // pName.innerText = resp.name
        // pEmail.innerText = resp.email
        // pId.innerText = resp.id

        // div.append(pName, pEmail, pId)
        // body.append(div)
        body.innerHTML = resp.id
    })
    .catch(error => {
        console.log(error.message)
        const body = document.querySelector('body')
        body.innerHTML = error.message
    })
}