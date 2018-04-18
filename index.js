import 'babel-polyfill';
import { http } from './src/http';
import { ui } from './src/ui';

// Get posts on DOM
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.error(err))
}

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // Create Post
  http.post('http://localhost:3000/posts', data)
    .then(() => {
      ui.showAlert('Post added', 'alert p-4 mb-4 text-white bg-green border-green-darker');
      ui.clearFields();
      getPosts();
    })
    .catch(err => {
      console.error(err)
    });
}

// Delete post
function deletePost(e) {
  // console.log(e.target);
}

// Enable edit state
function enableEdit(e) {
  if(e.target.classList.contains('edit')) {
    const id = e.target.dataset.id;
    const body = e.target.previousElementSibling.textContent;
    const title = e.target.previousElementSibling.previousElementSibling.textContent;
    // console.log(e.target.previousElementSibling.previousElementSibling.textContent);
    // console.log(e.target.previousElementSibling.textContent);
    // console.log(e.target.dataset.id);
  }
  // console.log(e.target);
  e.preventDefault();
}