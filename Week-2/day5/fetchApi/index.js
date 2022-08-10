document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getJson").addEventListener("click", getJson);
document.getElementById("getHere").addEventListener("click", getHere);
document.getElementById("addPost").addEventListener("submit", addPost);

// Usar nomenclatura de funcion viejaEscuela, a esta funcion vamos a pasarle el metod .fetch "EL METODO FETCH EN PRINCIPIO ES UNA PROMESA, RECUERDEN QUE AL TENER ACCESSO A LAS PROMESAS, PODEMOS ACCEDER A LOS METODOS RELACIONADOS DE LAS PROMESAS QUE SERIAM: .THEN() - .CATCH() - Promise.all()"
// METODO = FUNCION NATIVA DE JS QUE CONTIENE SUS PROPIAS REGLAS :)

// Calling an internal TXT document
function getText() {
  fetch("sample.txt")
    .then((response) => response.text())
    .then((theInfoFromText) => {
      document.getElementById("output").innerHTML = theInfoFromText;
    })
    .catch((error) => console.log(error));
}

// Calling an internal JSON document
function getJson() {
  fetch("users.json")
    .then((response) => response.json())
    .then((res) => {
      let userData = "";
      res.forEach((user) => {
        userData += `
              <ul>
              <li>${user.name}</li>    
              <li>${user.email}</li>
              <li>${user.id}</li>
              </ul>
              `;
      });
      document.getElementById("output").innerHTML = userData;
    });
}

// Calling an external API
function getHere() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let apiData = "";
      res.forEach((articulo) => {
        apiData += `
            <div class="card" style="width: 18rem">
              <img
                  class="card-img-top"
                  src="https://pyxis.nymag.com/v1/imgs/b3e/0da/d915ff145503c90d125f34d6ce865d4771-11-dave-chappelle-rick-james.2x.h473.w710.jpg"
                  alt="Card image cap"
              />
              <div class="card-body">
                  <h5 class="card-title">${articulo.title}</h5>
                  <p class="card-text">
                      ${articulo.body}
                  </p>
                  <p class="card-text">
                      ${articulo.userId}
                  </p>
                  <p class="card-text">
                      ${articulo.id}
                  </p>
              </div>
              </div>
              `;
      });
      document.getElementById("output").innerHTML = apiData;
    });
}

// Enviar mediante el fetch method un post usando un objeto dentro del fetch como segundo parametro que dentro del mismo pasaremos cierta informacion, esta informacion es asociada con los HTTP methods, [CREATE, READ, UPDATE, DELETE]. Vamos a enviar la informacion del formulario al API falso y veremos como se registra el ID correspondiente a la sequencia de objetos que nos presenta el API.
function addPost(preventForm) {
  preventForm.preventDefault(); // Omite que se envie la info del formulario

  // Nos traemos la informacion que esta dentro del Input Tag para el titulo y el textArea para el body del post
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  // Using fetch to push to API
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: {
      Accept: "text/plain, application/json, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((dataDeFormulario) => {
      console.log(dataDeFormulario);
    });
  body.value = "";
}
