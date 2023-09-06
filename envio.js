let form = document.getElementById('envio');

form.addEventListener("submit", sub);


async function sub(e) {
    e.preventDefault();
    const nombre = document.getElementById('name');
    const ape = document.getElementById('lastname');
    const date = document.getElementById('date');
    const URL = "https://jsonplaceholder.typicode.com/users";
    const user = {
        firstName: nombre.value,
        lastName: ape.value,
        bornDate: date.value
    }
    const Post = {
        method: "POST",
        body: JSON.stringify(user),
        Headers: {
            "Content-type": "application/json; charset=UTF-8" //tipo de contenido
        }
    }
    const response = await fetch(URL, Post);
    if (!response.ok) throw new Error('Error', response.status)
    const data = await response.json()
    console.log('Todo exitoso', data, response.status)


}