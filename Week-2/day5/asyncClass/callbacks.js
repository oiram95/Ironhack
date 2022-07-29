// Vamos a hacer la mimica que estaremos pidiendo informacion a una base datos, que lo que contiene son "posts".

const posts = [
  { title: "Articulo 1", body: "I love the Wu Tang Clan" },
  { title: "Articulo 2", body: "I love to play guitar" },
];

// Usar Callbacks para llamar a esta variable que hace la mimica!!!

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

getPosts();

// Usar Callback para crear un articulo :)

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost(
  {
    title: "Articulo 3",
    body: "Even though i like surfing, i suck at it",
  },
  getPosts
);
