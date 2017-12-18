export default function getRandomColor() {
    // let letters = '0123456789ABCDEF',
    //     color = '#';
    // for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    // let colorArray = ['#243752','#0A6187','#FFFFFF','#C7C7C7','#F25944'];
    let colorArray2 = ['#665743','#80BDA4','#F6F7BE','#E5AC27','#BF4E28'];
    return colorArray2[Math.floor(Math.random() * colorArray2.length)];
}
