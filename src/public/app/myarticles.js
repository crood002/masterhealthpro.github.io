function loadMyArticles() {
    let id = currentuser.id
    $.get(`/api/articles/${id}`, (posts) => {
        for (let p of posts) {
            // console.log(p)
            $('#Article-container').append(
                $(`
            <div class="col-4">
                <div class="card m-2" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">by-${currentuser.username}</h6>
                    <p class="card-text">${p.body.substring(0, 100)}
                    <a href="#">....Readmore</a>
                    </p>
                    <a href="#" class="card-link">Comments</a>
                    <a href="#" class="card-link">Like</a>
                 </div>
                </div>        
            </div>
        
        `)
            )


        }
    })
}