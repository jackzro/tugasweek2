var name = 'Maikel'
var  peran = 'Penyihir'
if (name==='')

{
    console.log("Nama harus diisi!")
}
else if (peran==='')

{
    console.log("Halo " + name +", Pilih peranmu untuk memulai game!")
}

else if (peran==='Ksatria')
{
    console.log("Selamat datang di Dunia Proxytia, "+ name)
    console.log("Halo "+ peran + " " + name + ", kamu dapat menyerang dengan senjatamu!")
}
else if (peran==='Tabib')
{
    console.log("Selamat datang di Dunia Proxytia, "+ name)
    console.log("Halo "+ peran + " " + name + ", kamu akan membantu temanmu yang terluka.")

}
else if (peran==='Penyihir')
{
    console.log("Selamat datang di Dunia Proxytia, "+ name)
    console.log("Halo " + peran + " " + name + ", ciptakan keajaiban yang membantu kemenanganmu!")
}

