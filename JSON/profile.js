function hideAllMenu(list) {
            document.querySelector('.col-right-content #user-infor').style.display = 'none';
            document.querySelector('.col-right-content #course-studied').style.display = 'none';
            document.querySelector('.col-right-content #history-bill').style.display = 'none';
            //document.querySelector('.col-right-content #discount').style.display = 'none';
            document.querySelector('.information').classList.remove('current');
            document.querySelector('.notifications').classList.remove('current');
            document.querySelector('.courses').classList.remove('current');
            document.querySelector('.billing').classList.remove('current');

            list.style.display = 'block';
}

hideAllMenu(document.querySelector(".col-right-content #user-infor"));
document.querySelector(".information").classList.add("current");
//
document.querySelector(".information").addEventListener("click", () => {
            hideAllMenu(document.querySelector(".col-right-content #user-infor"));
document.querySelector(".information").classList.add("current");
})
document.querySelector(".courses").addEventListener("click", () => {
            hideAllMenu(document.querySelector(".col-right-content #course-studied"));
            document.querySelector(".courses").classList.add("current");
});
document.querySelector(".billing").addEventListener("click", () => {
            hideAllMenu(document.querySelector(".col-right-content #history-bill"));
            document.querySelector(".billing").classList.add("current");
});
// document.querySelector("menu-discount").addEventListener("click", () => {
//             hideAllMenu(document.querySelector(".col-right-content #user-infor"));
//             document.querySelector(".information").classList.add("current");
// });
// hideAllMenu(document.querySelector("top-course"));
// document.querySelector("#menu-top_course").classList.add("current");
// //
// document.querySelector("menu-top_course").addEventListener("click", () => {
//             hideAllMenu(document.querySelector("top-course"));
//             document.querySelector("#menu-top_course").classList.add("current");
// });