document.addEventListener('DOMContentLoaded', function() {
    const progressCards = document.getElementById('progress-cards');

    // Sample data for progress
    const progressItems = [
        {
            title: "Judul, Latar Belakang, Outline",
            subtitle: "Proposal Seminar DKV",
            type: "Proposal",
            link: "https://drive.google.com/drive/folders/1Z1PQ9RBtbWUUU8EZKd_qCxKQFIhxQgT3?usp=sharing"
        },
        {
            title: "Proposal BAB I",
            subtitle: "Seminar DKV",
            type: "Seminar DKV",
            link: "https://drive.google.com/drive/folders/1W7zQ1pFP599aIVktJrzmg4WhPMddtK_o?usp=sharing"
        },
        {
            title: "Proposal BAB I,II",
            subtitle: "Seminar DKV",
            type: "Karya Akhir",
            link: "https://drive.google.com/drive/folders/1Dj4vk611B1jX63UlDewzXTQxjyQ1H_Ji?usp=sharing"
        },
        {
            title: "Proposal BAB II",
            subtitle: "Seminar DKV",
            type: "Karya Akhir",
            link: "https://drive.google.com/drive/folders/1qxDkJI9UUbRB1m5M7E3714OejHZLqLKO?usp=sharing"
        }
    ];

    // Add progress items to the grid
    progressItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 mb-4';

        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <h6 class="card-subtitle mb-2">${item.subtitle}</h6>
                    <a href="${item.link}" class="btn btn-gdrive" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Open in Google Drive
                    </a>
                </div>
            </div>
        `;

        progressCards.appendChild(card);
    });
});