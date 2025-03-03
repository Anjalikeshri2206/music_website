let music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Shayama Aan Baso <br>
        <div class="subtitle">Sachet and Parampara Tondon</div>`,
        poster: "poster/1.jpg"
    },
    {
        id: 2,
        songName: `Ram Siya Ram <br>
        <div class="subtitle">Sachet and Parampara Tondon</div>`,
        poster: "poster/2.jpg"
    },
    {
        id: 3,
        songName: `Aaj Sajeya<br>
        <div class="subtitle">Goldie Sohel</div>`,
        poster: "poster/3.jpg"
    },
    {
        id: 4,
        songName: `Dheere Dheere se<br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "poster/4.jpg"
    },
    {
        id: 5,
        songName: `Hangover<br>
        <div class="subtitle">Salman Khan, Shreya Ghoshal</div>`,
        poster: "poster/5.jpg"
    },
    {
        id: 6,
        songName: `Hey Minnale<br>
        <div class="subtitle">Karthik Netha</div>`,
        poster: "poster/6.jpg"
    },
    {
        id: 7,
        songName: `Ishq Karu<br>
        <div class="subtitle">Shashwat Singh</div>`,
        poster: "poster/7.jpg"
    },
    {
        id: 8,
        songName: `Kal Ho Na Ho<br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: "poster/8.jpg"
    },
    {
        id: 9,
        songName: `Dheere Dheere Tumse Pyaar Ho Gya<br>
        <div class="subtitle">Stebin Ben</div>`,
        poster: "poster/9.jpg"
    },
    {
        id: 10,
        songName: `Ho Gya Hai Tujhko To Pyaar Sajana<br>
        <div class="subtitle">Lata Mangeshkar,Udit Narayan</div>`,
        poster: "poster/10.jpg"
    },
    {
        id: 11,
        songName: `Ordinary Person<br>
        <div class="subtitle">Anirudh Ravichander</div>`,
        poster: "poster/11.jpg"
    },
    {
        id: 12,
        songName: `Tu Mera Nahi<br>
        <div class="subtitle">Amaal Malik</div>`,
        poster: "poster/12.jpg"
    },
    {
        id: 13,
        songName: `Broken Angel<br>
        <div class="subtitle">Parampara</div>`,
        poster: "poster/13.jpg"
    },
    {
        id: 14,
        songName: `Ajab Si<br>
        <div class="subtitle">KK</div>`,
        poster: "poster/14.jpg"
    },
    {
        id: 15,
        songName: `Bulleya<br>
        <div class="subtitle">Vishal-Shekhar</div>`,
        poster: "poster/15.jpg"
    },
    {
        id: 16,
        songName: `O Re Piya<br>
        <div class="subtitle">Rahat Fateh Ali</div>`,
        poster: "poster/16.jpg"
    },
    {
        id: 17,
        songName: `Ruaan<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "poster/17.jpg"
    },
    {
        id: 18,
        songName: `Saiyaara<br>
        <div class="subtitle">Mohit Chauhan</div>`,
        poster: "poster/18.jpg"
    },
    {
        id: 19,
        songName: `Jahuriya<br>
        <div class="subtitle">Rishiraj Pandey and Anshika Pandey</div>`,
        poster: "poster/19.jpg"
    },
    {
        id: 20,
        songName: `Jis Din Tum Aaoge<br>
        <div class="subtitle">Soham Naik </div>`,
        poster: "poster/20.jpg"
    },
    {
        id: 21,
        songName: `Hawaa Banke<br>
        <div class="subtitle">Armaan Malik</div>`,
        poster: "poster/21.jpg"
    },
    {
        id: 22,
        songName: `Main Hoon Na Tere Saath<br>
        <div class="subtitle">Armaan Malik</div>`,
        poster: "poster/22.jpg"
    },
   
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

// search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    // console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">${songName}
    </div>`;
    search_results.appendChild(card);

    
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for(let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0]
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
           items[index].style.display = "flex"; 

        } else {
            items[index].style.display = "none"; 
        }

        if(input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
})

// search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
       music.play();
       wave.classList.add('active1');
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
       
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
       masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
       index = el.target.id;
        // console.log(index);

       music.src=`audio/${index}.mp3`;
       poster_master_play.src = `poster/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill')
       masterPlay.classList.add('bi-pause-fill')
       download_music.href = `audio/${index}.mp3`;

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);

       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
       makeAllplay();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');

    });

    
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);

    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
});

// Volume 


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }
    if (vol.value >50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

// Next Song

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;

    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src = `poster/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(els =>{
        let { songName } = els;
        title.innerHTML = songName;

    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;

    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src = `poster/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(els =>{
        let { songName } = els;
        title.innerHTML = songName;

    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

})

let pop_song_left = document.getElementById('pop_song_left')
let pop_song_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 390;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 390;
});

let pop_art_left = document.getElementById('pop_art_left')
let pop_art_right = document.getElementById('pop_art_right')
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () =>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_music = () =>{
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src=`audio/${index}.mp3`;
       poster_master_play.src = `poster/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill')
       masterPlay.classList.add('bi-pause-fill')
       download_music.href = `audio/${index}.mp3`;

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);

       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
       makeAllplay();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
}
    
const repeat_music = () =>{
    index;
    music.src=`audio/${index}.mp3`;
       poster_master_play.src = `poster/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill')
       masterPlay.classList.add('bi-pause-fill')
       download_music.href = `audio/${index}.mp3`;

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);

       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
       makeAllplay();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
}

const random_music = () =>{
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src=`audio/${index}.mp3`;
       poster_master_play.src = `poster/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bi-play-fill')
       masterPlay.classList.add('bi-pause-fill')
       download_music.href = `audio/${index}.mp3`;

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);

       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
       makeAllplay();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
}

music.addEventListener('ended', () =>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;

        case 'next':
            next_music();
            break;

        case 'random':
            random_music();
            break;
    }


})
