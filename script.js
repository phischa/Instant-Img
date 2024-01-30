let posts = [
    {
        "author": "brutal_brutalist",
        "authorImg": "content/pic3.jpg",
        "img": "content/pic1.jpg",
        "likes": 82,
        "liked": false,
        "description": "BlaBla",
        "comments": [],
        "commentAuthor": [],
    },
    {
        "author": "brutal_brutalist",
        "authorImg": "content/pic3.jpg",
        "img": "content/pic2.jpg",
        "likes": 93,
        "liked": false,
        "description": "BlaBla",
        "comments": [],
        "commentAuthor": [],
    },
    {
        "author": "natural_nature",
        "authorImg": "content/profil1.jpg",
        "img": "content/fox1",
        "likes": 165,
        "liked": false,
        "description": "BlaBla",
        "comments": [],
        "commentAuthor": [],
    }
]

load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += renderHTML(post, i)
        renderComments();
        save();
    }
}

function renderHTML(post, i) {
    return /* HTML */ `
    <div>
        <div>
            <img src="${post["authorImg"]}" alt="Profil Picture">
            <span>${post["author"]}</span>
        </div>
        <img src="${post["img"]}" alt="Image">
        <div>
            <div>
                <a href=""><img src="" alt=""></a>    
                <a href="#"></a>
                <a href="#"></a>
                <p><b>Gefällt ${post["likes"]} mal</b></p>
                <p>${post["description"]}<p>

            </div>
            <div></div>

        </div>
    </div>
    `;
}

function renderComments(i) {

}

function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]["comments"].push(input.value);
  
    render();
    save();
  }

/* SAVE AND LOAD */
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