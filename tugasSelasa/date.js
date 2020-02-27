var tanggal=30
var tahun=1900
var bulan=11

switch (bulan){
    case 1:
        bulan='Januari'
        if (tanggal>=1&&tanggal<=31&&tahun>=1900&&tahun<=2200&&bulan=='Januari')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 2:
        bulan='Februari'
        if (tanggal>=1&&tanggal<=28&&tahun>=1900&&tahun<=2200&&bulan=='Februari')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else if (tanggal==29&&tahun>=1900&&tahun<=2200&&bulan=='Februari')
        {
            if ((tahun%4==0&&tahun%100!=0)||(tahun%4==0&&tahun%100==0&&tahun%400==0))
            {
                console.log(tanggal+ ' ' + bulan + ' ' + tahun)
                console.log('tahun kabisat')
            }else
            {
                console.log('bukan tahun kabisat')
            }
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 3:
        bulan='Maret'
        if (tanggal>=1&&tanggal<=31&&tahun>=1900&&tahun<=2200&&bulan=='Maret')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 4:
        bulan='April'
        if (tanggal>=1&&tanggal<=30&&tahun>=1900&&tahun<=2200&&bulan=='April')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 5:
        bulan='Mei'
        if (tanggal>=1&&tanggal<=30&&tahun>=1900&&tahun<=2200&&bulan=='Mei')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 6:
        bulan='Juni'
        if (tanggal>=1&&tanggal<=31&&tahun>=1900&&tahun<=2200&&bulan=='Juni')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 7:
        bulan='Juli'
        if (tanggal>=1&&tanggal<=30&&tahun>=1900&&tahun<=2200&&bulan=='Juli')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 8:
        bulan='Agustus'
        if (tanggal>=1&&tanggal<=31&&tahun>=1900&&tahun<=2200&&bulan=='Agustus')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 9:
        bulan='September'
        if (tanggal>=1&&tanggal<=30&&tahun>=1900&&tahun<=2200&&bulan=='September')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 10:
        bulan='Oktober'
        if (tanggal>=1&&tanggal<=31&&tahun>=1900&&tahun<=2200&&bulan=='Oktober')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 11:
        bulan='November'
        if (tanggal>=1&&tanggal<=30&&tahun>=1900&&tahun<=2200&&bulan=='November')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
    case 12:
        bulan='Desember'
        if (tanggal>=1&&tanggal<=31&&tahun>=1900&&tahun<=2200&&bulan=='Desember')
        {
            console.log(tanggal + ' ' + bulan + ' ' +tahun)
        }
        else {
            console.log("tanggal invalid")
        }
        break
}

