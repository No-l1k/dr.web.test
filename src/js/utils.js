document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollToDetails').addEventListener('click', function() {
        document.getElementById('detailsSection').scrollIntoView({ behavior: 'smooth' });
    });
});