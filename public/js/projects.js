// Sticky navbar behavior
const offset = $('#navbar').offset();
window.onscroll = function() {
    if (window.pageYOffset >= offset.top) {
        $('#navbar').addClass('sticky-nav');
    } else {
        $('#navbar').removeClass('sticky-nav');
    }
}

// Get & render projects data
$.ajax({
    url: 'https://immense-lake-41636.herokuapp.com/api/projects',
    method: 'GET',
  }).then(function (response) {
    let projectList = "";
    response.forEach(project => {
        projectList += `<summary>
        <h4>
            <a target=_blank href="${project.deployed_url}">${project.title}</a>
            <a target=_blank href="${project.github_url}">Repo</a>
        </h4>
        <a target=_blank href="${project.deployed_url}">
            <img class="screenshot" src="${project.img_url}" />
        </a>
    </summary>`
    });
    $('#projects').html(projectList);
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