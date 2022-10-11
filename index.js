const argument = process.argv.slice(2);

function circleCalcArea(r) {
    const circleArea = Math.PI * Math.pow(r,2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${circleArea}`);
}

circleCalcArea(argument[0] * 1);