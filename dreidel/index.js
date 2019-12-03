module.exports = async function (context, req) {
    // Nun, Gimmel, He, Shin
    const alphabets = ['&#1504;', '&#1490;', '&#1492;', '&#1513;'];
    context.log('Spinning the dreidel....');
    let dreidelNumber = getRandom(0,3);
    context.log(dreidelNumber);
    // context.res.type('text/html');
    context.res = {
        headers: { "Content-Type": "text/html" },
        body : `<p style="font-size:900%; text-align:center; color:blue;">${alphabets[dreidelNumber]}</p>`
    };
};

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}