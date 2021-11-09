// Sticky navbar behavior
const offset = $('#navbar').offset();
window.onscroll = function() {
    if (window.pageYOffset >= offset.top) {
        $('#navbar').addClass('sticky-nav');
    } else {
        $('#navbar').removeClass('sticky-nav');
    }
}

// Get & render skills data
$.ajax({
    url: 'https://immense-lake-41636.herokuapp.com/api/skills',
    method: 'GET',
  }).then(function (response) {
    let skillList = "";
    response.forEach(skill => {
        skillList =+ `<li>${skill.name}</li>`
    });
    $('#skill-list').html(skillList);
});

// Video background script
const frameNumber = 0;
const playbackConst = 1000;       
const vid = document.getElementById('v0'); 
function scrollPlay(){  
    let frameNumber = window.pageYOffset/playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);