document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamically loading blog data
    const blogData = [
        {
            title: 'Laporan Research KA DKV',
            description: 'Laporan kegiatan penelitian.',
            link: 'https://windu.art.blog/',
            image: 'assets/images/1.png',
            icon: 'fas fa-calendar-alt' // Icon for January
        },
        {
            title: 'Windu art blog',
            description: 'Web App untuk blog.',
            link: 'https://windu.art.blog/february-report/',
            image: 'assets/images/2.png',
            icon: 'fas fa-calendar-alt' // Icon for February
        },
        {
            title: 'Laporan Bulanan Maret',
            description: 'Laporan kegiatan selama bulan Maret.',
            link: 'https://windu.art.blog/march-report/',
            image: 'https://via.placeholder.com/320x220',
            icon: 'fas fa-calendar-alt' // Icon for March
        }
        // Add more data as needed
    ];

    const cardGrid = document.querySelector('.card-grid');

    blogData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardLink = document.createElement('a');
        cardLink.href = item.link;
        cardLink.target = '_blank';

        const cardImage = document.createElement('img');
        cardImage.src = item.image;
        cardImage.alt = item.title;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        
        // Create icon element
        const cardIcon = document.createElement('i');
        cardIcon.className = item.icon;
        
        // Append icon and title text to card title
        cardTitle.appendChild(cardIcon);
        cardTitle.appendChild(document.createTextNode(item.title));

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = item.description;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        cardLink.appendChild(cardImage);
        cardLink.appendChild(cardBody);

        card.appendChild(cardLink);
        cardGrid.appendChild(card);
    });
});