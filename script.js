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
    duration: 750
})
tl.add({
    targets: 'section div',
    backgroundColor: 'rgb(197, 197, 255)',
    
})