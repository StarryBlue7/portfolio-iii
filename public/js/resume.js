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
    url: 'https://immense-lake-41636.herokuapp.com/api/employments',
    method: 'GET',
  }).then(function (response) {
    let employmentList = "";
    response.forEach(employment => {
        const dateFormat = { year: 'numeric', month: 'long' };
        const start = new Date(employment.start_date).toLocaleDateString('en-US', dateFormat);
        const end = new Date(employment.end_date).toLocaleDateString('en-US', dateFormat);
        employmentList += `<li>${employment.company}: <br>${employment.position} <br>${start}-${end}</li>`
    });
    $('#employments').html(employmentList);
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