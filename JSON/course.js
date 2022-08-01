function hideAllMenu(list) {
            document.querySelector('#junbi').style.display = 'none';
            document.querySelector('#taisaku').style.display = 'none';
            document.querySelector('#jikkou').style.display = 'none';
            document.querySelector('#content-junbi').classList.remove('active');
            document.querySelector('#content-taisaku').classList.remove('active');
            document.querySelector('#content-jikkou').classList.remove('active');

            list.style.display = 'block';
}
hideAllMenu(document.getElementById("junbi"));
document.querySelector("#content-junbi").classList.add("active");
//
document.getElementById("content-junbi").addEventListener("click", () => {
            hideAllMenu(document.getElementById("junbi"));
            document.querySelector("#content-junbi").classList.add("active");
});
//
document.getElementById("content-taisaku").addEventListener("click", () => {
            hideAllMenu(document.getElementById("taisaku"));
            document.querySelector("#content-taisaku").classList.add("active");
});
//
document.getElementById("content-jikkou").addEventListener("click", () => {
            hideAllMenu(document.getElementById("jikkou"));
            document.querySelector("#content-jikkou").classList.add("active");
});


function hideAllListJunbi(list) {
            document.querySelector('#junbi-kanji').style.display = 'none';
            document.querySelector('#junbi-goi').style.display = 'none';
            document.querySelector('#junbi-bunpou').style.display = 'none';
            document.querySelector('#content-junbi-kanji').classList.remove("active-item");
            document.querySelector('#content-junbi-goi').classList.remove("active-item");
            document.querySelector('#content-junbi-bunpou').classList.remove("active-item");

            list.style.display = 'block';
}
hideAllListJunbi(document.getElementById("junbi-kanji"));
document.querySelector("#content-junbi-kanji").classList.add("active-item");
//
document.getElementById("content-junbi-kanji").addEventListener("click", () => {
            hideAllListJunbi(document.getElementById("junbi-kanji"));
            document.querySelector("#content-junbi-kanji").classList.add("active-item");
});
//
document.getElementById("content-junbi-goi").addEventListener("click", () => {
            hideAllListJunbi(document.getElementById("junbi-goi"));
            document.querySelector("#content-junbi-goi").classList.add("active-item");
});
document.getElementById("content-junbi-bunpou").addEventListener("click", () => {
            hideAllListJunbi(document.getElementById("junbi-bunpou"));
            document.querySelector("#content-junbi-bunpou").classList.add("active-item");
});
var expand = document.querySelector('.expand');
var collapse = document.querySelector('.collapse');
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
collapse.style.display = "none";
function checkAll(myCheckbox) {
            if (myCheckbox.checked == true) {
                        checkboxes.forEach(function (checkbox) {
                                    checkbox.checked = true;
                        })
                        expand.style.display = "none";
                        collapse.style.display = "block";
            } else {
                        checkboxes.forEach(function (checkbox) {
                                    checkbox.checked = false;
                        })
                        collapse.style.display = "none";
                        expand.style.display = "block";
                        collapse.style.display = "none";
            }
}


let like = document.querySelector(".review-feedback--actions-thumb_up");
let unlike = document.querySelector(".review-feedback--actions-thumb_down");

like.addEventListener("click", function () {
            unlike.classList.remove("like");
            like.classList.toggle("like");
            
})
unlike.addEventListener("click", function () {
            like.classList.remove("like");
            unlike.classList.toggle("like");
})

