var i
for (i=1;i<=100;i++)
{
    console.log(i)
        if(i%2==0){
            console.log('genap')
        }
        else {
            console.log('ganjil')
        }    
    //console.log("counter sekarang: "+ i)
}
console.log("counter pertambahan 2")

for(i=1;i<=100;i+=2)
{
    console.log(i)
    if(i%3==0)
    {
        console.log(i +'KELIPATAN'+ 3)
    }
    else {
        console.log(" ")
    }
    //console.log("counter sekarang: "+i)


}
console.log("counter pertambahan 5")


for(i=1;i<=100;i+=5)
{
    console.log(i)
    if(i%6==0)
    {
        console.log(i +'KELIPATAN'+ 6)
    }
    else {
        console.log(" ")
    }
    //console.log("counter sekarang: "+i)
}

console.log("counter pertambahan 9")

for(i=1;i<=100;i+=9)
{
    console.log(i)
    if(i%10==0)
    {
        console.log(i +'KELIPATAN'+ 10)
    }
    else {
        console.log(" ")
    }
    //console.log("counter sekarang: "+i)
}