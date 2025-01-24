document.addEventListener('DOMContentLoaded', function() {
    const archiveCards = document.getElementById('archive-cards');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');

    // Sample data for archive
    const archiveItems = [
        {
            title: "Laporan Akhir Tahun 2023",
            subtitle: "Dokumen final untuk tahun 2023",
            type: "Arsip",
            link: "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9I/view"
        },
        {
            title: "Proyek Semester 1",
            subtitle: "Laporan proyek untuk semester pertama",
            type: "Lokal",
            link: "https://drive.google.com/file/d/2B3C4D5E6F7G8H9I0J/view"
        },
        {
            title: "Penelitian AI",
            subtitle: "Dokumen penelitian mengenai AI",
            type: "Research",
            link: "https://drive.google.com/file/d/3C4D5E6F7G8H9I0J1K/view"
        }
    ];

    // Function to get badge class
    function getBadgeClass(type) {
        switch(type) {
            case "Arsip":
                return "badge-arsip";
            case "Lokal":
                return "badge-lokal";
            case "Graphic Design":
                return "badge-design";
            case "Research":
                return "badge-research";
            case "WGM":
                return "badge-wgm";
            default:
                return "";
        }
    }

    // Function to get icon class
    function getIconClass(type) {
        switch(type) {
            case "Arsip":
                return "fas fa-folder";
            case "Lokal":
                return "fas fa-map-marker-alt";
            case "Graphic Design":
                return "fas fa-paint-brush";
            case "Research":
                return "fas fa-flask";
            case "WGM":
                return "fas fa-cogs";
            default:
                return "fas fa-file";
        }
    }

    // Function to display cards
    function displayCards(items) {
        archiveCards.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'col-lg-4 col-md-6 mb-4';

            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <span class="badge badge-pill ${getBadgeClass(item.type)}">${item.type}</span>
                        <h5 class="card-title"><i class="${getIconClass(item.type)}"></i> ${item.title}</h5>
                        <h6 class="card-subtitle mb-2">${item.subtitle}</h6>
                        <a href="${item.link}" class="btn btn-gdrive" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Open in Google Drive
                        </a>
                    </div>
                </div>
            `;

            archiveCards.appendChild(card);
        });
    }

    // Initial display of cards
    displayCards(archiveItems);

    // Search function
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredItems = archiveItems.filter(item => item.title.toLowerCase().includes(searchTerm));
        
        if (filteredItems.length > 0) {
            noResults.style.display = 'none';
            displayCards(filteredItems);
        } else {
            noResults.style.display = 'block';
            archiveCards.innerHTML = '';
        }
    });
});