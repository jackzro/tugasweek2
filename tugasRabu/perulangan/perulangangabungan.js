/* tugas loop pertama*/

var x=2
console.log("LOOPING PERTAMA")
while(x<=20)
{
    console.log(x +" "+'- I love coding')
    x+=2
}
x=20
console.log("LOOPING KEDUA")
while(x!=0)
{
    console.log(x +" "+ "- I will become fullstack developer")
    x-=2
}

/* tugas loop kedua*/

var x
console.log("LOOPING PERTAMA")
for(x=1;x<=20;x++)
{
    console.log(x+" "+"- I love coding")
}
console.log("LOOPING KEDUA")
for(x=20;x!=0;x--)
{
    console.log(x+" "+"- I will become fullstack developer")
}


/* tugas loop ketiga*/

var i
for (i=1;i<=100;i++)
{
    console.log(i)
        if(i%2==0){
            console.log('GENAP')
        }
        else {
            console.log('GANJIL')
        }    
}
console.log("Counter Pertambahan 2")

for(i=1;i<=100;i+=2)
{
    console.log(i)
    if(i%3==0)
    {
        console.log(i +' KELIPATAN '+ 3)
    }
    else {
        console.log("")
    }
}
console.log("Counter Pertambahan 5")


for(i=1;i<=100;i+=5)
{
    console.log(i)
    if(i%6==0)
    {
        console.log(i +' KELIPATAN '+ 6)
    }
    else {
        console.log("")
    }
}

console.log("Counter Pertambahan 9")

for(i=1;i<=100;i+=9)
{
    console.log(i)
    if(i%10==0)
    {
        console.log(i +' KELIPATAN '+ 10)
    }
    else {
        console.log("")
    }
}