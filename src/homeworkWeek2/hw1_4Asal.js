function findPrime(...numbers) {
    let primeNumbers =[]
    for (let i=0; i<numbers.length; i++){
        let prime=true
        for (let j=2; j<numbers[i];j++){
                if (numbers[i]%j==0) {prime=false}
            }
        if (numbers[i]==1) prime=false    
        if (prime) primeNumbers.push(numbers[i])
    }        
    console.log("Asal sayıar: ")
    console.log(primeNumbers)
}

let dizi =[]
for (let k=1; k<=1000;k++){
    dizi.push(k)
}
    
//console.log(dizi)
findPrime(...dizi)

findPrime(4,7,9,11,29)

