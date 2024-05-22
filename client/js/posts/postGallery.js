import * as api from '../utils/api.js'
import setupCreatePostModal from '../../js/posts/createPostModal.js'

export default async function setupPostGallery() {
    const showMore = document.querySelector('.show-more')
    showMore.onclick = () => handleShowMore(5)

    const addPostBtn = document.querySelector('.add-post')
    addPostBtn.onclick = () => showCreatePostModal()
    
    getPosts()
    setupCreatePostModal()
}

function getPosts() {
    api.getPostList().then(response => handleResponse(response))
}

function showCreatePostModal() {
    const modal = document.querySelector('.create-post-wrapper')
    modal.style.display = 'grid'

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'
        }
    }
}

function handleResponse(response) {
    const wrapper = document.querySelector('.post-wrapper')
    wrapper.innerHTML = ''

    const showPosts = Number(wrapper.dataset.posts) + 5

    response.slice(0, showPosts).forEach(post => {
        api.getUser(post.userId)
            .then(user => drawPost(user, post))
    })
}

function drawPost(userData, postData) {
    const wrapper = document.querySelector('.post-wrapper')
    moment.locale('es')
    const postHTML = `
        <article class="post-card">
            <span class="post-date">${moment(postData.publishedAt, 'DD/MM/YYYY hh:mm:ss').fromNow()}</span>
            <div class="post-header">
                <img src="${postData.thumbnail}" alt="Foto de perfil del usuario" class="post-user-image">
                <span class="post-user-name">${userData.firstname} ${userData.lastname}</span>
                <span class="post-user-email">${userData.email}</span>
            </div>
            <div class="post-body">
                <span class="post-title">${postData.title}</span>
                <p class="post-content">${postData.content}</p>
            </div>
            <div class="post-actions">
                <div class="comments">
                    <span class="comment-icon material-symbols-outlined">chat_bubble</span>
                    16
                </div>
                <div class="likes">
                    <span class="like-icon material-symbols-outlined">favorite</span>
                    32
                </div>
                <span class="share-icon material-symbols-outlined">send</span>
                <span class="bookmark-icon material-symbols-outlined">bookmark</span>
            </div>
        </article>
    `

    wrapper.innerHTML += postHTML
}

function handleShowMore(qty) {
    const wrapper = document.querySelector('.post-wrapper')
    wrapper.dataset.posts = Number(wrapper.dataset.posts) + qty

    getPosts()
}