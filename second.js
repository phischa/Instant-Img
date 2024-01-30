let posts = [
    {
      author_img: "img/img5.jpg",
      author: "visit_menorca",
      location: "Menorca",
      image: "img/img1.jpg",
      description:
        "Der Hafen von Maó gilt als der größte Naturhafen des Mittelmeers mit täglichen Fährverbindungen nach Barcelona, Palma und Valencia. Vom Hafen in Ciutadella bestehen Verbindungen nach Alcúdia auf Mallorca sowie Toulon in Frankreich.",
      comments_author: "Carlos",
      likes: 723,
      isLikedHeart: false,
      comments: [],
    },
  
    {
      author_img: "img/img5.jpg",
      author: "visit_menorca",
      location: "Menorca",
      image: "img/img2.jpg",
      description:
        "Ähnlich wie Mallorca besitzt Menorca eine Vielzahl von Stränden und Badebuchten.",
      comments_author: "Ana",
      likes: 614,
      isLikedHeart: false,
      comments: [],
    },
  
    {
      author_img: "img/img4.jpg",
      author: "lifestyle_mallorca",
      location: "Mallorca",
      image: "img/img3.jpg",
      description:
        "Mallorca besitzt ein gemäßigtes subtropisches Klima mit durchschnittlich 7,9 Sonnenstunden am Tag und durchschnittlichen Niederschlagsmengen (1400 Millimeter im Norden, 400 Millimeter im Süden).",
      comments_author: "Maya",
      likes: 574,
      isLikedHeart: false,
      comments: [],
    },
  ];
  
  load();
  
  function load() {
    let postsAsText = localStorage.getItem("posts");
    if (postsAsText) {
      posts = JSON.parse(postsAsText);
    }
  }
  
  function save() {
    let postsAsText = JSON.stringify(posts);
    localStorage.setItem("posts", postsAsText);
  }
  
  function render() {
    let content = document.getElementById("content");
    content.innerHTML = "";
  
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
  
      content.innerHTML += HTMLPosts(post, i);
      renderComment(i);
      save();
    }
  }
  
  function HTMLPosts(post, i) {
    return /*html*/ `
    <div class="cardDiv">
      <article class="card">
          <div class="authorPost">
              <img class="profilImage" src="${post["author_img"]}" alt="Profilbild">
              <span>${post["author"]}</span>
          </div>
          <div class="locationPost">
              <span>${post["location"]}</span>
          </div>
              <img class="postImg" src="${post["image"]}" alt="Image">
          <div class="cardIconsDiv">
              <img onclick="likedHeart(${i})" src="${heartChange(i)}" class="cardIcons" alt="">
              <a href="#"><img src="./img/plaudern.png" class="cardIcons" alt=""></a>
              <a href="#"><img src="./img/direktes-instagram.png" class="cardIcons" alt=""></a>
              <p>Gefällt <b>${post["likes"]}</b> mal</p>
              <p>${post["description"]}<p>
          </div>
          <div class="postComment" id="postcontent${i}"></div>
          <div class="postInput">
              <input id="input${i}" placeholder="Kommentar hinzufügen"><button onclick="addComment(${i})">Posten</button>
          </div>        
      </article>   
    </div>
  `;
  }
  
  function renderComment(i) {
    let postContent = document.getElementById(`postcontent${i}`);
  
    for (let j = 0; j < posts[i]["comments"].length; j++) {
      const comment = posts[i]["comments"][j];
      postContent.innerHTML += /*html*/ `<div><b>Julián</b> ${comment}</div>`;
    }
  }
  
  function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]["comments"].push(input.value);
  
    render();
    save();
  
    input.value = "";
  }
  
  function likedHeart(postIndex) {
    if (posts[postIndex]["isLikedHeart"]) {
      posts[postIndex]["likes"]--;
    } else {
      posts[postIndex]["likes"]++;
    }
    posts[postIndex]["isLikedHeart"] = !posts[postIndex]["isLikedHeart"];
    render();
    save();
  }
  
  function heartChange(i) {
    if (posts[i]["isLikedHeart"]) {
      return "./img/herz_red.png";
    } else {
      return "./img/herz.png";
    }
  }