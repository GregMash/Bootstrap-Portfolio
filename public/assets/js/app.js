document.getElementById('submitter').onclick = doSomething;

function doSomething() {
    event.preventDefault;
    alert('Thanks for contacting me!');
    location.reload();
};