document.addEventListener('DOMContentLoaded', function() {
    // Sample data for total uploads
    const totalUploads = {
        home: 5,
        progress: 10,
        archive: 7
    };

    // Update total uploads in the DOM
    document.getElementById('total-uploads-home').textContent = totalUploads.home;
    document.getElementById('total-uploads-progress').textContent = totalUploads.progress;
    document.getElementById('total-uploads-archive').textContent = totalUploads.archive;
});