let img = document.getElementById('logo');
let title = document.getElementById('title');

function PlayAnimation(element, path, name) {
    bodymovin.destroy(element);
    return bodymovin.loadAnimation({
        container: element, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: path, // the path to the animation json
        name: name
    });
}
function reverseAnim(anim) {
    console.log(anim.wrapper);
    $(anim.wrapper).hover(function () {
        anim.setSpeed(2);
        anim.setDirection(-1);
        bodymovin.play(anim.name);
    }, function () {
        anim.setSpeed(1);
        anim.setDirection(1);
        bodymovin.play(anim.name);
    });
}

let anim_logo = PlayAnimation(img, 'json/data.json', "logo");
let anim_title = PlayAnimation(title, 'json/Typewriter_Name.json', "title");

reverseAnim(anim_logo);
