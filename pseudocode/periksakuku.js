var kuku
for(var anak=1;anak<=40;anak++)
{
    const readline = require('readline-sync');

    var kuku = readline.question("masukkan kondisi kuku murid:  ");
    
    if (kuku=="panjang")
    {
        console.log("murid ke " + anak + " dihukum")
    }
    else if(kuku=="pendek")
    {
        console.log ("murid ke " + anak + " dipuji")
    }
}