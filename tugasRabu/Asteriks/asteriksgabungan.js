/* tugas asteriks 1 */

var rows1=5;
for(var i=1;i<=rows1;i++)
{
    console.log("*")
}

/* tugas asteriks 2 */

var rows2=5;
var char='';
for(var i=1;i<=rows2;i++)
{
    
    for (var j=1;j<=rows2;j++){
        char = char + ('*')
    }
    console.log(char)
    char=''
}

/* tugas asteriks 3 */

var rows2=5;
var char='';
for(var i=1;i<=rows2;i++)
{
    
    for (var j=1;j<=i;j++){
        char = char + ('*')
    }
    console.log(char)
    char=''
}