document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    let isPlaying = false;

    // Tarayıcılar genellikle otomatik oynatmayı engeller.
    // Kullanıcı sayfada herhangi bir yere tıkladığında başlatmak daha güvenlidir.
    
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            musicBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            music.play();
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Otomatik oynatma denemesi
    window.addEventListener('load', () => {
        music.volume = 0.4; // %40 ses seviyesi idealdir
        const playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                isPlaying = true;
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }).catch(error => {
                console.log("Otomatik oynatma engellendi, kullanıcı etkileşimi bekleniyor.");
            });
        }
    });
});