// let grids = document.querySelectorAll('div');
// let num = 0;
// const delay = time => new Promise(resolve => setTimeout(resolve, time));

// grids.forEach(grid => {
//     delay(0).then(() => {
//         setTimeout(() => {
//             grid.style.backgroundColor = 'lightblue';
//         }, num += 100)
//     })
//     delay(500).then(() => {
//         setTimeout(() => {
//             grid.style.backgroundColor = 'rgb(228, 242, 255)';
//             grid.style.width = '90%';
//         }, num += 100)
//     })        
// })

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
})
tl.add({
    targets: 'section div',
    width: '100%',
    backgroundColor: 'rgb(197, 197, 255)',
    delay: anime.stagger(100),
})
tl.add({
    targets: 'section div',
    width: '90%',
    backgroundColor: 'rgb(235, 235, 255)',
})
tl.add({
    targets: 'h1',
    top: '20%',
    opacity: 1,
    dureation: 4000
}, '-=1600')

let rotateMe = anime({
    targets: 'section',
    scaleY: '2',
    scaleX: '2',
    translateX: '40%',
    rotate: '45deg',
    duration: 5000,
    autoplay: false
})

document.querySelector('h1').addEventListener('mouseover', () => {
    rotateMe.play();
})