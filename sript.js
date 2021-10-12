window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded")

    // slowMath.add(1, 1)
    //     .then((whatevz) => { ///'sum' is prettier than 'whatevz' but instructive arguments can confuse me
    //         console.log(whatevz);    //semicolon heresy begins
    //         return slowMath.multiply(whatevz, 2) //red meat of this function
    //     }).then((poot) => {
    //         console.log(poot)
    //         return slowMath.divide(poot, 4)  //divides poot by 4
    //     }).then((quotient) => {          //drops quotient of poot and 4 in .then argument. result is named "quotient"
    //         console.log(quotient)
    //         return slowMath.subtract(quotient, 3)
    //     }).then((remainder) => {
    //         console.log(remainder)
    //         return slowMath.add(remainder, 98)
    //     }).then((sum) => {
    //         console.log(sum)
    //         return slowMath.divide(sum, 2)
    //     }).then((quotient2) => {
    //         console.log(quotient2)
    //         return slowMath.multiply(quotient2, 50)
    //     }).then((product) => {
    //         console.log(product)
    //         return slowMath.divide(product, 40)
    //     }).then((quotient3) => {
    //         console.log(quotient3)
    //         return slowMath.add(quotient3, 32)
    //     }).then((sum2) => {
    //         console.log("The final result is ", sum2)
    //     }).catch((errawr) => {       //names the error 'errawr'
    //         console.log("oops!")     //some string
    //         console.log(errawr)      //log the error information
    //     })

    async function doMath() {  //a function has to be declared to assign async right? or is there another way?
        try {
            let val = await slowMath.add(1, 1) //uuuhhhh invokes slowMath.add() after await
            console.log(val)
            let val2 = await slowMath.multiply(val, 2)
            console.log(val2)
            let val3 = await slowMath.divide(val2, 4)
            console.log(val3)
            let val4 = await slowMath.subtract(val3, 3)
            console.log(val4)
            let val5 = await slowMath.add(val4, 98)
            console.log(val5)
            let val6 = await slowMath.divide(val5, 2)
            console.log(val6)
            let val7 = await slowMath.multiply(val6, 50)
            console.log(val7)
            let val8 = await slowMath.divide(val7, 40)
            console.log(val8)
            let val9 = await slowMath.add(val8, 32)
            console.log("The final answer is ", val9) //async/await rawks this code looks better than ^^^^
        } catch (err) {             //why is this catch syntax different than .then/.catch?
            console.log("oops")
            console.log(err)
        }
    }
    doMath()




});
