const video_player = document.querySelector('.video_player');
let mainVideo = video_player.querySelector('#main-video');
let progressAreaTime = video_player.querySelector('.progress-area-time');
let controls = video_player.querySelector('.control');
let progressArea = video_player.querySelector('.progress-area');
let progressBar = video_player.querySelector('.progress-bar');
let fastRewind = video_player.querySelector('.fast-rewind');
let play_pause = video_player.querySelector('.play');
let current = video_player.querySelector('.current-time');
let totalDuration = video_player.querySelector('.duration-time');
let fastForward = video_player.querySelector('.fast-forward');
let volume = video_player.querySelector('.volume');
let volumeRange = video_player.querySelector('#volume_range');
settingsBtn = video_player.querySelector(".setttings-btn"),
            settings = video_player.querySelector("#settings"),
            settingHome = video_player.querySelectorAll("#settings [data-label='settingHome'] > ul > li"),
            picture_in_picutre = video_player.querySelector(".picture-in-picture"),
            fullscreen = video_player.querySelector(".fullscreen"),
            playspeed = video_player.querySelectorAll(".playspeed li"),
            tracks = video_player.querySelectorAll("track"),
            loader = video_player.querySelector(".loader");
//Play and Pause video
function playVideo() {
            play_pause.innerHTML = "pause";
            play_pause.title = "pause";
            video_player.classList.add("paused");
            mainVideo.play();
}

// Pause video function
function pauseVideo() {
            play_pause.innerHTML = "play_arrow";
            play_pause.title = "play";
            video_player.classList.remove("paused");
            mainVideo.pause();
}

play_pause.addEventListener("click", () => {
            const isVideoPaused = video_player.classList.contains("paused");
            isVideoPaused ? pauseVideo() : playVideo();
});

mainVideo.addEventListener("play", () => {
            playVideo();
});

mainVideo.addEventListener("pause", () => {
            pauseVideo();
});

//Fast forward/Rewind video
fastRewind.addEventListener("click", () => {
            mainVideo.currentTime -= 10;
})
fastForward.addEventListener("click", () => {
            mainVideo.currentTime += 10;
})

//Load video duration
mainVideo.addEventListener("loadeddata", (e) => {
            let videoDuration = e.target.duration;
            let totalMin = Math.floor(videoDuration / 60);
            let totalSec = Math.floor(videoDuration % 60);

            if (totalSec < 10) {
                        totalSec = "0" + totalSec;
            }
            totalDuration.innerHTML = `${totalMin}: ${totalSec}`;
})
mainVideo.addEventListener('timeupdate', (e) => {
            let videoCurrent = e.target.currentTime;
            let currentMin = Math.floor(videoCurrent / 60);
            let currentSec = Math.floor(videoCurrent % 60);

            if (currentSec < 10) {
                        currentSec = "0" + currentSec;
            }

            current.innerHTML = `${currentMin} : ${currentSec}`;

            //Progress bar change width
            let videoDuration = e.target.duration;

            let progressWidth = (videoCurrent / videoDuration) * 100;
            progressBar.style.width = `${progressWidth}%`;
})

progressArea.addEventListener("click", (e) => {
            let videoDuration = mainVideo.duration;
            let progressWidthval = progressArea.clientWidth;
            let clickOffsetX = e.offsetX;

            mainVideo.currentTime = (clickOffsetX / progressWidthval) * videoDuration;

})

// Change volume
function changeVolume() {
            mainVideo.volume = volumeRange.value / 100;
            if (volumeRange.value == 0) {
                        volume.innerHTML = "volume_off";
            } else if (volumeRange.value <= 40) {
                        volume.innerHTML = "volume_down";
            } else {
                        volume.innerHTML = "volume_up";
            }
}

volumeRange.addEventListener("change", changeVolume);

function muteVolume() {
            if (volumeRange.value == 0) {
                        volumeRange.value = 80;
            } else {
                        volumeRange.value = 0;
            }
            changeVolume();
}
volume.addEventListener('click', muteVolume)

//Show time when move mouse
progressArea.addEventListener("mousemove", (e) => {
            let progressWidthval = progressArea.clientWidth + 2;
            let x = e.offsetX;
            if (x >= 670) {
                        progressAreaTime.style.setProperty("--x", `${665}px`);
            } else if (x <= 75) {
                        progressAreaTime.style.setProperty("--x", `${45}px`);
            } else {
                        progressAreaTime.style.setProperty("--x", `${x}px`);
            }
            let videoDuration = mainVideo.duration;
            let progressTime = Math.floor((x / progressWidthval) * videoDuration);
            let currentMin = Math.floor(progressTime / 60);
            let currentSec = Math.floor(progressTime % 60);

            progressAreaTime.style.display = "block";

            currentSec < 10 ? (currentSec = "0" + currentSec) : currentSec;
            progressAreaTime.innerHTML = `${currentMin} : ${currentSec}`;

})
progressArea.addEventListener("mouseleave", (e) => {
            progressAreaTime.style.display = 'none';
})

// Picture in picture

picture_in_picutre.addEventListener("click", () => {
            mainVideo.requestPictureInPicture();
});

// Full screen function

fullscreen.addEventListener("click", () => {
            if (!video_player.classList.contains("openFullScreen")) {
                        video_player.classList.add("openFullScreen");
                        fullscreen.innerHTML = "fullscreen_exit";
                        video_player.requestFullscreen();
            } else {
                        video_player.classList.remove("openFullScreen");
                        fullscreen.innerHTML = "fullscreen";
                        document.exitFullscreen();
            }
});

// Open settings
settingsBtn.addEventListener("click", () => {
            settings.classList.toggle("open");
            settingsBtn.classList.toggle("open");
});
// Playspeed Rate

playspeed.forEach((event) => {
            event.addEventListener("click", () => {
                        removeActiveClasses(playspeed);
                        event.classList.add("active");
                        let speed = event.getAttribute("data-speed");
                        mainVideo.playbackRate = speed;
            });
});

function removeActiveClasses(e) {
            e.forEach((event) => {
                        event.classList.remove("active");
            });
}


let listVideo = document.querySelectorAll('.video-list .video-list--item');
let title = document.querySelector('.video-title');

listVideo.forEach(video => {
            video.addEventListener('click', () => {
                        listVideo.forEach(vid => {
                                    vid.classList.remove('active');
                                    video.classList.add('active');

                                    if (video.classList.contains('active')) {
                                                let src = video.children[0].getAttribute('src');
                                                mainVideo.src = src;
                                                let text = video.children[1].innerHTML;
                                                title.innerHTML = text;
;
                                                

                                    }
                        })
            })
})


//------------------------TEST CONTAINER------------------------
let question1 = [
            {
            numb: 1,
            question: "7時に（起きる)。",
            answer: "おきる",
            options: [
              "あきる",
              "ききる",
              "おきる",
              "いきる"
            ]
          },
            {
            numb: 2,
            question: "寝ているライオンを(起こす)な。",
            answer: "おこす",
            options: [
              "あこす",
              "おこす",
              "きこす",
              "いこす"
            ]
          },
            {
            numb: 3,
            question: "その(起源)は不明である。",
            answer: "きげん",
            options: [
              "きげん",
              "きがん",
              "きけん",
              "きかん"
            ]
          },
            {
            numb: 4,
            question: "ほとんど(熱湯)で料理する。",
            answer: "ねっとう",
            options: [
              "しんとう",
              "ねつとう",
              "ねっとう",
              "ねっと"
            ]
          },
            {
            numb: 5,
            question: "水を(浴びせる)。",
            answer: "あびせる",
            options: [
              "おびせる",
              "あびせる",
              "よびせる",
              "えびせる"
            ]
          },
]
let question2 = [
            {
            numb: 1,
            question: "8時に（起きる)。",
            answer: "おきる",
            options: [
              "あきる",
              "ききる",
              "おきる",
              "いきる"
            ]
          },
            {
            numb: 2,
            question: "寝ているライオンを(起こす)な。",
            answer: "おこす",
            options: [
              "あこす",
              "おこす",
              "きこす",
              "いこす"
            ]
          },
            {
            numb: 3,
            question: "その(起源)は不明である。",
            answer: "きげん",
            options: [
              "きげん",
              "きがん",
              "きけん",
              "きかん"
            ]
          },
            {
            numb: 4,
            question: "ほとんど(熱湯)で料理する。",
            answer: "ねっとう",
            options: [
              "しんとう",
              "ねつとう",
              "ねっとう",
              "ねっと"
            ]
          },
            {
            numb: 5,
            question: "水を(浴びせる)。",
            answer: "あびせる",
            options: [
              "おびせる",
              "あびせる",
              "よびせる",
              "えびせる"
            ]
          },
]
let videoTitle = document.querySelector('.main-video--title');
let temp = videoTitle.innerHTML.split(' ');
let num = temp.slice(temp.length - 1, temp.length);
let ques = `question` + num[0];

let questions = eval('({' + ques + '})')
console.log(question1[1])
console.log(ques)
console.log(questions[0]);
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

// if startQuiz button clicked

// if continueQuiz button clicked
start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
restart_quiz.onclick = ()=>{
            quiz_box.classList.add("activeQuiz"); //show quiz box
            result_box.classList.remove("activeResult"); //hide result box
            timeValue = 15; 
            que_count = 0;
            que_numb = 1;
            userScore = 0;
            widthValue = 0;
            showQuetions(que_count); //calling showQestions function
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the text of timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        }
const next_btn = document.querySelector(".footer-quiz .next_btn");
const bottom_ques_counter = document.querySelector(".footer-quiz .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//if timer is less than 0
            clearInterval(counter); //clear counter
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> trên <p>'+ questions.length +'</p> Câu hỏi</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}