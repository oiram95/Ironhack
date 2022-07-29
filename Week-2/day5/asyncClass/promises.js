// Vamos a hacer la mimica que estaremos pidiendo informacion a una base datos, que lo que contiene son "posts".

const posts = [
  { title: "Articulo 1", body: "I love the Wu Tang Clan" },
  { title: "Articulo 2", body: "I love to play guitar" },
];

const getPosts = () => {
  setTimeout(() => {
    let outPut = "";
    posts.forEach((post, index) => {
      outPut += `
              <ul>
              <li>${post.title}</li>
              <li>${post.body}</li>
              <li>${index}</li>
              </ul>
              `;
    });
    document.body.innerHTML = outPut;
  }, 1000);
};

//   getPosts();

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // Mimica de error
      const error = true;

      if (!error) {
        resolve();
      } else if (error) {
        reject("Oh uh there is a error with the call");
      }
    }, 2000);
  });
};

// usando un metodo relacionado al metodo Promise que se llama .then y otro metodo que se llama .catch

// createPost({
//   title: "Articulo 3",
//   body: "Even though i like surfing, i suck at it",
// })
//   .then(getPosts)
//   .catch((nuestroError) => {
//     console.log(nuestroError);
//   });

// Usando un metodo relacionado al metodo Promise que se llama .Promise.All
const diego1 = Promise.resolve("Wu Tang Clan");
const anyGivenNumber = 10;
const goodbye = new Promise(
  (resolviendoAPuntaDeReggeaton, rechazandoLasPatatasBravas) => {
    setTimeout(resolviendoAPuntaDeReggeaton, 3000, "Se marcho...");
  }
);

Promise.all([diego1, anyGivenNumber, goodbye]).then((niIdea) => {
  console.log(niIdea);
});
