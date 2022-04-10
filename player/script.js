const data = [

];

const text = document.querySelector("h1")


const search = document.querySelector("#btnSearch")
const inpSearch = document.querySelector("#search")

inpSearch.addEventListener('keydown', srch)



function srch() {
    var searchValue = inpSearch.value
    let out = []
    
    for (i = 0; i < data.length; i++) {
        if (data[i].song.toLowerCase().includes(searchValue.toLowerCase()) || 
        data[i].song.toLowerCase().includes(searchValue.toLowerCase())) {
            out.push(data[i])
        }
    }

    render(out)

}


const audio = document.querySelector("audio")
const content = document.querySelector("section")

const blocked = document.querySelector("#blocked")







const open = document.querySelector("#open").onclick = function() {
    blocked.style.display = "flex"
}
const close = document.querySelector("#close").onclick = function() {
    blocked.style.display = "none"
}



const art = document.getElementById("art")
const song = document.getElementById("song")
const file = document.getElementById("file")
const btn = document.getElementById("btn").onclick = function() {
    var img = prompt("URL картинки")
    var inpArt = art.value
    var inpSong = song.value
    var inpFile = file.files[0].name
    var randId = Math.random() * 10000;

    var mus = new Music(img,inpArt,inpSong,inpFile, randId)
    data.push(mus)
    render(data)
}



class Music {
    constructor(img, artist, song, src, id) {
        this.img = img,
        this.artist = artist,
        this.song = song,
        this.src = src,
        this.id = id
    }
}

var m = new Music(
    "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    "ssshhhiiittt!",
    "Домой",
    "./music/название.mp3",
    1
)

data.push(m)


function play(id) {
    for (i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            audio.src = data[i].src
            text.innerHTML = `${data[i]. artist} - ${data[i].song}`
        }
    }    
}


function render(arr) {
        content.innerHTML = ``
        for (i = 0; i < arr.length; i++) {
            content.innerHTML += `
        <div class="elem" onclick=play(${arr[i].id})>
            <img width = "180px" src=${arr[i].img} alt="">
            <h3>${arr[i].artist}</h3>
            <h4>${arr[i].song}</h4>
        </div>
            `
        }
}
render(data)




