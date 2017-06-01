const Nightmare = require('nightmare');
const imageDiff = require('image-diff');

const nightmare = new Nightmare ({
    show: true,
    frame: false
});

nightmare
    .goto('https://egghead.io')
    .viewport(640, 480)
    .wait(1000)
    .screenshot('./screenshots/640x480.png')
    .viewport(1280, 720)
    .wait(1000)
    .screenshot('./screenshots/1280x720.png')
    // .then(() => console.log('done'));

    .goto('https://google.com')
    .viewport(640, 480)
    .wait(1000)
    .screenshot('./screenshots/google640x480.png')
    .goto('https://google.es')
    .viewport(640, 480)
    .wait(1000)
    .screenshot('./screenshots/google640x4802.png')
    .end()

    .then(() => console.log('done'));

//Provide image diff information on expected .png output//

imageDiff.getRawResult({
    actualImage: './screenshots/640x480.png',
    expectedImage: './screenshots/640x4802.png',
    diffImage: './screenshots/difference.png',
}, function (err, result) {
    var diffInfo = result;
    console.log(diffInfo);
});

