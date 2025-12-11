// Ambil elemen dari HTML
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');
const countLabel = document.getElementById('count');

// Fungsi untuk menampilkan kartu (Render)
function renderCards(data) {
    resultsContainer.innerHTML = ''; // Kosongkan hasil sebelumnya
    countLabel.innerText = `Menampilkan ${data.length} hasil`;

    if (data.length === 0) {
        resultsContainer.innerHTML = `
            <div style="text-align:center; padding:40px; color:#888;">
                <i class="fa-solid fa-circle-question" style="font-size:3rem; margin-bottom:10px;"></i>
                <p>Tidak ditemukan hasil untuk kata kunci tersebut.</p>
            </div>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Buat konten kartu
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">${item.title}</div>
                <div class="badges">
                    <span class="badge badge-model">${item.model}</span>
                    <span class="badge badge-cat">${item.category}</span>
                </div>
            </div>
            <div class="content-box">${item.content}</div>
            <button class="btn-copy" onclick="copyText(this)">
                📋 Copy Jawaban
            </button>
        `;
        resultsContainer.appendChild(card);
    });
}

// Fungsi Pencarian
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    const filteredData = kbData.filter(item => {
        return (
            item.title.toLowerCase().includes(query) || 
            item.content.toLowerCase().includes(query) ||
            item.model.toLowerCase().includes(query) ||
            item.tags.toLowerCase().includes(query)
        );
    });

    renderCards(filteredData);
});

// Fungsi Copy Text
function copyText(btn) {
    const contentBox = btn.previousElementSibling; // Ambil div di atas tombol
    const textToCopy = contentBox.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast();
    }).catch(err => {
        alert("Gagal menyalin: " + err);
    });
}

// Fungsi Toast Notifikasi
function showToast() {
    const x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Tampilkan semua data saat pertama kali buka
renderCards(kbData);