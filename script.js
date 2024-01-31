let posts = [
    {
        "author": "brutal_brutalist",
        "authorImg": "content/pic3.jpg",
        "img": "content/pic4.jpg",
        "likes": 82,
        "liked": false,
        "description": "Wohnbauserie 70 (WBS 70)",
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
    content.innerHTML += '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += renderHTML(post, i);
        renderComments();
        save();
    }
}

function renderHTML(post, i) {
    return /* HTML */ `
    <div class="card">
        <div class="author-area">
            <img class="author-img" src="${post["authorImg"]}" alt="Profil Picture">
            <span class="author"><b>${post["author"]}</b></span>
        </div>
        <img class="post-img" src="${post["img"]}" alt="Image">
        <div>
            <div class="like-comment">
                <div class="like-comment-flex">
                <div>
                    <img src="img/heart.png" alt="Like">   
                    <img src="img/comment.png" alt="Comment">
                    <img src="img/paper-plane.png" alt="Message">
                </div>
                <div>
                    <img class="bookmark" src="img/bookmark.png" alt="Bookmark">
                </div>
                </div>

                <p><b>Gefällt ${post["likes"]} mal</b></p>
                <p>${post["description"]}<p>
            </div>
            <div>
                <div id="commentContent${i}" ></div>
                <div class="comment-box">
                    <input class="input-comment" id="input${i}" placeholder="Kommentieren..." type="text">
                    <button class="button-comment" onclick=""><b>Posten</b></button>
                </div>
            </div>
        </div>
    </div>
    `;
}

function renderComments(i) {
    let commentContent = document.getElementById(`commentContent${i}`);

        for (let j = 0; j < posts['comments'].length; j++) {
            const comment = posts['comments'][j];
            commentContent.innerHTML += /* HTML */ `<div>${comment}</div>`;
        }
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