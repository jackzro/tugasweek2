function xo(str) {
    // you can only write your code here!
    var countX=0
    var countY=0

    for (var x=0;x<=str.length;x++)
    {
        if(str[x]=='x')
        [
            countX++
        ]
        else if (str[x]=='o')
        {
            countY++
        }
    }
    if (countY==countX){
        return true
    }
    else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true