let posts = [
    {
        "author": "brutal_brutalist",
        "authorImg": "content/pic3.jpg",
        "img": "content/pic4.jpg",
        "likes": 82,
        "liked": false,
        "description": "#concrete #stairs",
        "comments": [],
        "commentAuthor": [],
    },
    {
        "author": "brutal_brutalist",
        "authorImg": "content/pic3.jpg",
        "img": "content/pic2.jpg",
        "likes": 93,
        "liked": false,
        "description": "Alexandra Road. Designed in a brutalist style by Neave Brown.<br> #London",
        "comments": [],
        "commentAuthor": [],
    },
    {
        "author": "natural_nature",
        "authorImg": "content/profil1.jpg",
        "img": "content/fox1.jpg",
        "likes": 165,
        "liked": false,
        "description": "Say hello to this little fox!",
        "comments": [],
        "commentAuthor": [],
    }
]

load();

/* SAVE AND LOAD >>>>>>>>>>>>>>>>>>>>>>>>>>> */
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

/* render >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += renderHTML(post, i);
        renderComments(i);
        save();
    }
}

function renderHTML(post, i) {
    return /* HTML */ `
    <div class="card">
        <div class="author-area">
            <img class="author-img" src="${post['authorImg']}" alt="Profil Picture">
            <span class="author"><b>${post['author']}</b></span>
        </div>
        <img class="post-img" src="${post['img']}" alt="Image">
        <div>
            <div class="like-comment">
                <div class="like-comment-flex">
                <div>
                    <img src="${heartLiked(i)}" onclick="addLike(${i})" alt="Like">   
                    <img src="img/comment.png" alt="Comment">
                    <img src="img/paper-plane.png" alt="Message">
                </div>
                <div>
                    <img class="bookmark" src="img/bookmark.png" alt="Bookmark">
                </div>
                </div>

                <p><b>Gefällt ${post['likes']} mal</b></p>
                <p>${post['description']}<p>
            </div>
            <div>
                <div class="comment" id="commentContent${i}"></div>
                <div class="input-box">
                    <input class="input-comment" id="inputComment${i}" placeholder="Kommentieren..." type="text">
                    <button class="button-comment" onclick="addComment(${i})"><b>Posten</b></button>
                </div>
            </div>
        </div>
    </div>
    `;
}

/* comments ----------------------------- */
function renderComments(i) {
    let commentContent = document.getElementById(`commentContent${i}`);

    for (let j = 0; j < posts[i]["comments"].length; j++) {
        const comment = posts[i]["comments"][j];
        commentContent.innerHTML += /* HTML */ `
            <div>${comment}</div>`;
    }
}

function addComment(i) {
    let input = document.getElementById(`inputComment${i}`);
    posts[i]['comments'].push(input.value);
    render();
    save();
    input.value = "";
}

/* likes ------------------------------ */
function addLike(index) {
    if (posts[index]["liked"]) {
        posts[index]["likes"]--;
    } else {
        posts[index]["likes"]++;
    }
    posts[index]["liked"] = !posts[index]["liked"];
    render();
    save();
}

function heartLiked(i) {
    if (posts[i]["liked"]) {
        return "./img/heart_red.png";
    } else {
        return "./img/heart.png";
    }
}