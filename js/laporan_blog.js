document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blog-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Simpan blog ke Google Sheets
        saveBlogToSheet(title, content);
    });

    function saveBlogToSheet(title, content) {
        // Ganti URL berikut dengan URL Web App dari Google Apps Script Anda
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzQzAm4-ju4A9eceQm4SAsAjwLZqqI6-u-Vbm7CgxAddph6mciaF1TQxpc6dUWAWFJe/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                messageDiv.innerHTML = '<div class="alert alert-success">Blog berhasil disimpan!</div>';
                form.reset();
            } else {
                messageDiv.innerHTML = '<div class="alert alert-danger">Gagal menyimpan blog. Coba lagi.</div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messageDiv.innerHTML = '<div class="alert alert-danger">Terjadi kesalahan. Coba lagi.</div>';
        });
    }
});