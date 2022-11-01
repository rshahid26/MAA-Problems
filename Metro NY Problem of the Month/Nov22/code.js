//test for (k, m) integer solutions up to 100_000
for (let m = 1; m < 100_000; m++) {

    let k = Math.sqrt((Math.pow(m, 2) + m) / 2.0);

    //log the results if k is an integer (accounting for floating point imprecision)
    if (Math.abs(k - Math.round(k)) < 0.000001)
        console.log(k + ", " + m);

    //linear approximation using (6, 8)
    let kApprox = (1 / Math.sqrt(2)) * m + (6 - 8 * (1 / Math.sqrt(2)));

    if (Math.abs(kApprox - k) < 0.00001)
        console.log("fits");
}