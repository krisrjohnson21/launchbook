// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
let topNav = document.getElementsByTagName('nav')[0]

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left')

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
let pages = document.getElementsByClassName('pages')[0]
let groups = document.getElementsByClassName('groups')[0]

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let harshCritic = document.getElementsByClassName('favorites')[0]
.getElementsByTagName('h5')[0].innerHTML = "Least favs"

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let hideAd = document.getElementById('sidebar-right')
.getElementsByClassName('ad-slot')[0].style.visbility = 'hidden'

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
let showAd = document.getElementById('sidebar-right')
.getElementsByClassName('ad-slot')[0].style.visbility = 'visible'

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let newAd = document.getElementById('sidebar-right')
.getElementsByTagName('img')[0].setAttribute('src', 'http://placebear.com/200/300')

// Exercise 8): Find Sam's post and change its text to something incredible.
let posts = document.getElementById('list-of-posts')
posts.getElementsByTagName('p')[4].innerText = "Tom Brady is the real GOAT!"

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
posts.getElementsByTagName('li')[0].className += 'post-liked'

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
posts.getElementsByTagName('li')[7].className += 'post-shared'
