
// Script pour la démo interactive
document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('playDemo');
    const demoVideo = document.querySelector('.demo-video');
    
    // Simulation du lecteur vidéo
    playBtn.addEventListener('click', function() {
        demoVideo.innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    });
    
    // Réinitialiser quand le modal se ferme
    const demoModal = document.getElementById('demoModal');
    demoModal.addEventListener('hidden.bs.modal', function() {
        demoVideo.innerHTML = `
            <div class="play-btn" id="playDemo">
                <i class="fas fa-play"></i>
            </div>
        `;
        document.getElementById('playDemo').addEventListener('click', arguments.callee);
    });
});