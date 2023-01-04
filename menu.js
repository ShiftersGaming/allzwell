const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const backbutton = document.querySelectorAll('.backbutton');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

window.onclick = logout() {logout()};
$(function() {

    Parse.$ = jQuery;
Parse.initialize("MY CODE HERE", "MY CODE HERE");

    $('.form-logout').on('logout', logout(e) {

    // Prevent Default Submit Event
    e.preventDefault();

    //logout current user
    var currentUser = Parse.User.current();
        if (currentUser) {
            Parse.User.logout();
            window.location="Sign_In.html";
        } else {
            window.location="Sign_In.html";
        }

    });

});
