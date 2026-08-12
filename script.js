var tracksData = {
    foryou: [
        { id: 1, title: "Velvet Horizon", artist: "Kavya Rao", duration: "3:42", seed: "velvet-hz" },
        { id: 2, title: "Concrete Bloom", artist: "Parth Sharma", duration: "4:15", seed: "concrete-blm" },
        { id: 3, title: "Lunar Drift", artist: "Nocturne", duration: "3:58", seed: "lunar-drft" },
        { id: 4, title: "Amber Cascades", artist: "Diya Mehta", duration: "5:01", seed: "amber-csc" },
        { id: 5, title: "Still Waters", artist: "Echo Chamber", duration: "4:33", seed: "still-wtr" },
        { id: 6, title: "Paper Planes", artist: "Rohan Kulkarni", duration: "3:20", seed: "paper-pln" },
        { id: 7, title: "Neon Folklore", artist: "Tara Desai", duration: "4:47", seed: "neon-flk" },
        { id: 8, title: "Glass Empire", artist: "Bhole Baba", duration: "3:55", seed: "glass-emp" }
    ],
    trending: [
        { id: 9, title: "Heatwave", artist: "MC Kashmir", duration: "3:12", seed: "heatwv-mc" },
        { id: 10, title: "Chai & Chaos", artist: "Prateek Kuhad", duration: "4:05", seed: "chai-chs" },
        { id: 11, title: "Bass Mandir", artist: "Seedhe Maut", duration: "3:38", seed: "bass-mndr" },
        { id: 12, title: "Monsoon Lover", artist: "Anuv Jain", duration: "4:22", seed: "monsoon-lv" },
        { id: 13, title: "Supernova", artist: "The Local Train", duration: "5:11", seed: "suprnova-tlt" },
        { id: 14, title: "Rooftop Stories", artist: "Osho Jain", duration: "3:49", seed: "rooftop-st" },
        { id: 15, title: "Digital Sadhu", artist: "Raja Kumari", duration: "3:33", seed: "digi-sadhu" },
        { id: 16, title: "Pune to Paris", artist: "Siddharth Basrur", duration: "4:18", seed: "pune-paris" }
    ],
    new: [
        { id: 17, title: "First Light", artist: "Ishani Nair", duration: "3:45", seed: "first-lt" },
        { id: 18, title: "Quicksand", artist: "Aryan Sharma", duration: "4:02", seed: "quicksnd" },
        { id: 19, title: "Mumbai Dreams", artist: "Zoya Akhtar", duration: "3:58", seed: "mumbai-drm" },
        { id: 20, title: "Ozone Layer", artist: "Skyrabbit", duration: "4:30", seed: "ozone-lyr" },
        { id: 21, title: "Henna Hands", artist: "Mali", duration: "3:27", seed: "henna-hnd" },
        { id: 22, title: "Binary Sunset", artist: "Dot.", duration: "5:15", seed: "binary-ss" },
        { id: 23, title: "Temple Step", artist: "Kar Kundi", duration: "3:44", seed: "templ-stp" },
        { id: 24, title: "Cloud Archive", artist: "Fuzzy Logic", duration: "4:51", seed: "cloud-arch" }
    ],
    indie: [
        { id: 25, title: "Wallflower", artist: "When Chai Met Toast", duration: "4:08", seed: "wallflwr" },
        { id: 26, title: "Blue Funk", artist: "Parvaaz", duration: "5:22", seed: "blue-fnk" },
        { id: 27, title: "Skeleton Key", artist: "Lagori", duration: "3:56", seed: "skel-key" },
        { id: 28, title: "Dawn Patrol", artist: "Thaikudam Bridge", duration: "4:41", seed: "dawn-ptrl" },
        { id: 29, title: "Rust & Gold", artist: "Mohan Kannan", duration: "3:33", seed: "rust-gld" },
        { id: 30, title: "Paper Boats", artist: "Vishal Dadlani", duration: "4:16", seed: "paper-bt" },
        { id: 31, title: "Electric Sadhu", artist: "Indian Ocean", duration: "6:02", seed: "elec-sadhu" },
        { id: 32, title: "Lotus Position", artist: "Ritviz", duration: "3:48", seed: "lotus-pos" }
    ]
};

var moodsData = [
    { emoji: "\uD83C\uDFB8", label: "High Energy", count: "340+ tracks" },
    { emoji: "\uD83C\uDF19", label: "Late Night", count: "280+ tracks" },
    { emoji: "\u2600\uFE0F", label: "Morning Chill", count: "195+ tracks" },
    { emoji: "\uD83D\uDC94", label: "Heartbreak", count: "260+ tracks" },
    { emoji: "\uD83E\uDDD8", label: "Focus Flow", count: "150+ tracks" },
    { emoji: "\uD83C\uDF89", label: "Party Mode", count: "310+ tracks" }
];

var cursorGlow = document.getElementById('cursorGlow');
var mouseX = -500;
var mouseY = -500;

document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
});

var scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', function () {
    var docEl = document.documentElement;
    var scrollPercent = (docEl.scrollTop / (docEl.scrollHeight - docEl.clientHeight)) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

var heroCanvas = document.getElementById('heroCanvas');
var ctx = heroCanvas.getContext('2d');
var particles = [];
var canvasW, canvasH;

function resizeCanvas() {
    var hero = document.querySelector('.hero');
    canvasW = heroCanvas.width = hero.offsetWidth;
    canvasH = heroCanvas.height = hero.offsetHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function Particle() {
    this.reset();
}
Particle.prototype.reset = function () {
    this.x = Math.random() * canvasW;
    this.y = Math.random() * canvasH;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.hue = Math.random() > 0.5 ? 350 : 30; // Red or warm gold
    this.currentSize = this.size;
};

Particle.prototype.update = function (time) {
    var dx = mouseX - this.x;
    var dy = (mouseY + window.scrollY) - this.y;
    var dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 200) {
        var force = (200 - dist) / 200 * 0.015;
        this.speedX += dx * force * 0.01;
        this.speedY += dy * force * 0.01;
    }

    var pulse = Math.sin(time * 0.002 + this.x * 0.005) * 0.3 + 0.7;
    this.currentSize = this.size * pulse;

    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= 0.99; 
    this.speedY *= 0.99;

    if (this.x < -10 || this.x > canvasW + 10 || this.y < -10 || this.y > canvasH + 10) {
        this.reset();
    }
};

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.currentSize), 0, Math.PI * 2);
    ctx.fillStyle = 'hsla(' + this.hue + ', 80%, 60%, ' + this.opacity + ')';
    ctx.fill();
};

for (var i = 0; i < 120; i++) {
    particles.push(new Particle());
}

function drawConnections() {
    for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
            var dx = particles[i].x - particles[j].x;
            var dy = particles[i].y - particles[j].y;
            var dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
                var alpha = (1 - dist / 100) * 0.08;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = 'rgba(232, 54, 78, ' + alpha + ')';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

function animateCanvas(time) {
    ctx.clearRect(0, 0, canvasW, canvasH);
    
    for (var i = 0; i < particles.length; i++) {
        particles[i].update(time);
        particles[i].draw();
    }
    
    drawConnections();
    requestAnimationFrame(animateCanvas);
}

requestAnimationFrame(animateCanvas);

var statsCounted = false;

var statsObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && !statsCounted) {
        statsCounted = true;
        var statNums = document.querySelectorAll('.stat-num');
        
        statNums.forEach(function (el) {
            var target = parseInt(el.dataset.target);
            var current = 0;
            var step = target / 60;
            
            var interval = setInterval(function () {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                el.textContent = Math.floor(current).toLocaleString() + '+';
            }, 25);
        });
    }
}, { threshold: 0.5 });

statsObserver.observe(document.querySelector('.hero-stats'));

var miniWave1 = document.getElementById('miniWave1');
for (var i = 0; i < 40; i++) {
    var bar = document.createElement('div');
    bar.className = 'mini-bar';
    bar.style.animationDelay = (i * 0.06) + 's';
    bar.style.background = 'hsl(' + (350 + i * 0.5) + ', 75%, ' + (50 + Math.random() * 20) + '%)';
    miniWave1.appendChild(bar);
}

var miniEq = document.getElementById('miniEq');
for (var i = 0; i < 16; i++) {
    var bar = document.createElement('div');
    bar.className = 'eq-bar';
    bar.style.animationDelay = (i * 0.08) + 's';
    bar.style.background = 'hsl(' + (30 + i * 8) + ', 80%, ' + (50 + Math.random() * 15) + '%)';
    miniEq.appendChild(bar);
}

var miniNodes = document.getElementById('miniNodes');
var nodePositions = [
    { x: 30, y: 40 }, { x: 60, y: 70 }, { x: 85, y: 30 },
    { x: 50, y: 85 }, { x: 75, y: 60 }, { x: 20, y: 65 },
    { x: 90, y: 75 }, { x: 40, y: 25 }
];
var nodeColors = ['var(--accent)', 'var(--warm)', 'var(--cool)', '#a259ff'];

nodePositions.forEach(function (pos, i) {
    var nextPos = nodePositions[(i + 1) % nodePositions.length];
    var line = document.createElement('div');
    line.className = 'node-line';
    
    var dx = nextPos.x - pos.x;
    var dy = nextPos.y - pos.y;
    var length = Math.sqrt(dx * dx + dy * dy);
    var angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    line.style.left = pos.x + '%';
    line.style.top = pos.y + '%';
    line.style.width = length + '%';
    line.style.transform = 'rotate(' + angle + 'deg)';
    
    miniNodes.appendChild(line);
});

nodePositions.forEach(function (pos, i) {
    var dot = document.createElement('div');
    dot.className = 'node-dot';
    dot.style.left = pos.x + '%';
    dot.style.top = pos.y + '%';
    dot.style.animationDelay = (i * 0.4) + 's';
    dot.style.background = nodeColors[i % nodeColors.length];
    miniNodes.appendChild(dot);
});

var tracksGrid = document.getElementById('tracksGrid');
var currentTab = 'foryou';
var currentlyPlaying = null;
var isPlaying = false;

function makeWaveBars() {
    var html = '';
    for (var i = 0; i < 30; i++) {
        html += '<div class="twp-bar" style="height:' + (Math.random() * 70 + 20) + '%"></div>';
    }
    return html;
}

function renderTracks(tab) {
    var tracks = tracksData[tab];
    tracksGrid.innerHTML = '';
    
    tracks.forEach(function (track, index) {
        var card = document.createElement('div');
        card.className = 'track-card';
        card.style.animationDelay = (index * 0.05) + 's';
        
        card.innerHTML = 
            '<div class="track-img-wrap">' +
                '<img class="track-img" src="https://picsum.photos/seed/' + track.seed + '/400/400.jpg" alt="' + track.title + '" loading="lazy">' +
                '<div class="track-play-overlay">' +
                    '<button class="track-play-btn" data-id="' + track.id + '" aria-label="Play ' + track.title + '">' +
                        '<i class="fas fa-play"></i>' +
                    '</button>' +
                '</div>' +
                '<div class="track-wave-preview">' + makeWaveBars() + '</div>' +
            '</div>' +
            '<div class="track-details">' +
                '<div class="track-name">' + track.title + '</div>' +
                '<div class="track-artist-name">' + track.artist + '</div>' +
            '</div>' +
            '<div class="track-meta">' +
                '<span class="track-duration">' + track.duration + '</span>' +
                '<div class="track-actions">' +
                    '<button class="t-action like-btn" data-id="' + track.id + '" aria-label="Like"><i class="far fa-heart"></i></button>' +
                    '<button class="t-action" aria-label="Add to playlist"><i class="fas fa-plus"></i></button>' +
                    '<button class="t-action" aria-label="Share"><i class="fas fa-share"></i></button>' +
                '</div>' +
            '</div>';
            
        tracksGrid.appendChild(card);
    });
}

// Initial render
renderTracks('foryou');

var npWaveform = document.getElementById('npWaveform');

for (var i = 0; i < 40; i++) {
    var bar = document.createElement('div');
    bar.className = 'np-bar';
    bar.style.height = (Math.random() * 70 + 15) + '%';
    npWaveform.appendChild(bar);
}

function updateNPWaveform(progress) {
    var bars = npWaveform.querySelectorAll('.np-bar');
    bars.forEach(function (bar, i) {
        if ((i / bars.length) * 100 < progress) {
            bar.classList.add('played');
        } else {
            bar.classList.remove('played');
        }
    });
}

var npInterval = null;
var npProgress = 0;

function findTrack(id) {
    var tabs = Object.values(tracksData);
    for (var t = 0; t < tabs.length; t++) {
        for (var i = 0; i < tabs[t].length; i++) {
            if (tabs[t][i].id === id) return tabs[t][i];
        }
    }
    return null;
}

function playTrack(id) {
    var track = findTrack(id);
    if (!track) return;
    
    currentlyPlaying = id;
    isPlaying = true;
    npProgress = 0;
    
    document.getElementById('npTitle').textContent = track.title;
    document.getElementById('npArtist').textContent = track.artist;
    
    var art = document.getElementById('npArt');
    art.src = 'https://picsum.photos/seed/' + track.seed + '/112/112.jpg';
    art.classList.add('playing');
    
    document.querySelector('#npPlayBtn i').className = 'fas fa-pause';
    
    document.querySelectorAll('.track-play-btn i').forEach(function (icon) {
        icon.className = 'fas fa-play';
    });
    var activeBtn = document.querySelector('.track-play-btn[data-id="' + id + '"] i');
    if (activeBtn) activeBtn.className = 'fas fa-pause';
    
    clearInterval(npInterval);
    npInterval = setInterval(function () {
        npProgress += 0.5;
        if (npProgress > 100) npProgress = 0;
        updateNPWaveform(npProgress);
    }, 150);
}

function togglePlay() {
    if (!currentlyPlaying) return;
    isPlaying = !isPlaying;
    
    var art = document.getElementById('npArt');
    var icon = document.querySelector('#npPlayBtn i');
    
    if (isPlaying) {
        art.classList.add('playing');
        icon.className = 'fas fa-pause';
        npInterval = setInterval(function () {
            npProgress += 0.5;
            if (npProgress > 100) npProgress = 0;
            updateNPWaveform(npProgress);
        }, 150);
    } else {
        art.classList.remove('playing');
        icon.className = 'fas fa-play';
        clearInterval(npInterval);
    }
}

document.addEventListener('click', function (e) {
    // Check if a play button was clicked
    var playBtn = e.target.closest('.track-play-btn');
    if (playBtn) {
        var id = parseInt(playBtn.dataset.id);
        if (currentlyPlaying === id && isPlaying) {
            togglePlay();
        } else {
            playTrack(id);
        }
        return;
    }
    
    var likeBtn = e.target.closest('.like-btn');
    if (likeBtn) {
        likeBtn.classList.toggle('liked');
        var icon = likeBtn.querySelector('i');
        
        if (likeBtn.classList.contains('liked')) {
            icon.className = 'fas fa-heart';
            likeBtn.style.transform = 'scale(1.3)';
            setTimeout(function () { likeBtn.style.transform = ''; }, 200);
        } else {
            icon.className = 'far fa-heart';
        }
    }
});

document.getElementById('npPlayBtn').addEventListener('click', togglePlay);
document.getElementById('heroPlayBtn').addEventListener('click', function () {
    playTrack(tracksData.foryou[0].id);
    document.getElementById('feed').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('feedTabs').addEventListener('click', function (e) {
    var tab = e.target.closest('.feed-tab');
    if (!tab) return;
    
    document.querySelectorAll('.feed-tab').forEach(function (t) {
        t.classList.remove('active');
    });
    tab.classList.add('active');
    
    currentTab = tab.dataset.tab;
    renderTracks(currentTab);
});

document.getElementById('closeAnno').addEventListener('click', function () {
    document.getElementById('annoBar').style.display = 'none';
});

var moodGrid = document.getElementById('moodGrid');

moodsData.forEach(function (mood) {
    var card = document.createElement('div');
    card.className = 'mood-card';
    
    var particleHTML = '';
    for (var i = 0; i < 6; i++) {
        var px = Math.random() * 80 + 10;
        var py = Math.random() * 60 + 10;
        var pdx = (Math.random() - 0.5) * 30;
        var pdy = (Math.random() - 0.5) * 30;
        particleHTML += '<div class="mood-particle" style="left:' + px + '%;top:' + py + '%;--dx:' + pdx + 'px;--dy:' + pdy + 'px;animation-delay:' + (i * 0.5) + 's"></div>';
    }
    
    card.innerHTML = particleHTML + 
        '<div class="mood-emoji">' + mood.emoji + '</div>' +
        '<div class="mood-label">' + mood.label + '</div>' +
        '<div class="mood-count">' + mood.count + '</div>';
    
    card.addEventListener('click', function () {
        document.querySelectorAll('.feed-tab').forEach(function (t) {
            t.classList.remove('active');
        });
        document.querySelector('[data-tab="trending"]').classList.add('active');
        renderTracks('trending');
        document.getElementById('feed').scrollIntoView({ behavior: 'smooth' });
    });
    
    moodGrid.appendChild(card);
});

var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .mood-card, .now-playing').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

var featuresTrack = document.getElementById('featuresTrack');
var isDragging = false;
var dragStartX, dragScrollLeft;

featuresTrack.addEventListener('mousedown', function (e) {
    isDragging = true;
    featuresTrack.style.cursor = 'grabbing';
    dragStartX = e.pageX - featuresTrack.offsetLeft;
    dragScrollLeft = featuresTrack.scrollLeft;
});

featuresTrack.addEventListener('mouseleave', function () {
    isDragging = false;
    featuresTrack.style.cursor = '';
});

featuresTrack.addEventListener('mouseup', function () {
    isDragging = false;
    featuresTrack.style.cursor = '';
});

featuresTrack.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    e.preventDefault();
    var x = e.pageX - featuresTrack.offsetLeft;
    featuresTrack.scrollLeft = dragScrollLeft - (x - dragStartX) * 1.5;
});