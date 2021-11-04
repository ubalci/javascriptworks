let dizi= []
for (let i=1; i<=10000;i++) dizi.push(i)

console.log("1'den 10000'e kadar olan mükemmel sayılar: ")
dizi.forEach(number => {
    let mukemmelMi=false
    let total=0
    for (let i=1; i<number;i++){
       if (number%i==0) total=total+i
    }
    if (total==number) mukemmelMi=true
    if (mukemmelMi) console.log(number)
})