const create_form_data = document.querySelector("#form_data");
const update_post = document.querySelector(".show-post");


// show data form localStorage 

const showPost = () => {
        const postData = getDataLS('post');
        let content = "";

        if (postData.length > 0) {
            postData.forEach((item, index) => {
                        content += ` <div class="post-container">
            <!------- Post Header ------>
            <div class="post-header">
                <div class="author">
                    <div class="author-profile-img">
                        <img src="${item.Author_Photo}" alt="">
                    </div>
                    <div class="post-author-name">
                        <a href="#">${item.Author_name}</a>
                        <span><i class="fas fa-circle"></i> ${item.Post_time}</span>
                        <a href="#"></a>
                        <p>Costa Titch, Champuru Makhenzo</p>
                    </div>
                </div>
                <div class="three-dot">
                    <a href="#"><i class="fas fa-ellipsis-h"></i></a>
                </div>
            </div>
    
            <!------ Post Body ------>
            <div class="post-body">
            <div class="post-img">
            ${item.Post_photo ? `<img src="${item.Post_photo}">` : ""}
        </div>
        
                <div class="post-reaction">
                    <div class="p-reaction-left">
                        <div class="post-like post-icon">
                            <span><i class="far fa-heart"></i></span>
                        </div>
                        <div class="post-comment post-icon">
                            <span><i class="far fa-comment"></i></span>
                        </div>
                        <div class="post-share post-icon">
                            <span><i class="far fa-paper-plane"></i></span>
                        </div>
                    </div>
                    <div class="post-save post-icon">
                        <span><i class="far fa-bookmark"></i></span>
                    </div>
                </div>
                <div class="post-like-total">
                    <p>5,691,354 likes</p>
                </div>
                <div class="post-content">
                    <p> <a href="#">taylorswift</a>${item.Post_content ? item.Post_content:""}<a href="#" class="post-tag">@taylorehill / @gettyimages</a></p>
                </div>
                <div class="write-comment">
                    <p>View all 204 comments</p>
                    <form action="#">
                        <input type="text" name="" id="" placeholder="Add a comment…">
                    </form>
                    <span><i class="far fa-smile"></i></span>
                </div>
            </div>
    
        </div>
            
            `
        })

    } else {
        content = `<h2>NO POST FOUND</h2>`
    }
    update_post.innerHTML = content;

}
showPost();

form_data.onsubmit = (e) => {
    e.preventDefault();

    // get form data 
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);

    //  get previ data 
    const PrevtData = getDataLS("posts");
    PrevtData.push({
        Author_name: data.Author_name,
        Author_Photo: data.Author_Photo,
        Post_content: data.Post_content,
        Post_photo: data.Post_Photo,
        Post_time: Date.now(),
    });

    // set Data to loacalStroage
    sendDataLS("post", PrevtData);

    showPost();
    // reset form value 
    e.target.reset();
};