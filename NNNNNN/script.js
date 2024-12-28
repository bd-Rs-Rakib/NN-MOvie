document.addEventListener('DOMContentLoaded', function () {
    // Select the dropdown element
    const dropdown = document.querySelector('.dropdown');

    // Add click event listener to the dropdown
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the click event from propagating to the document

        // Toggle the 'active' class to show/hide the dropdown menu
        dropdown.classList.toggle('active');
    });

    // Close the dropdown when clicking anywhere outside of it
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            // If the click was outside of the dropdown, hide the menu
            dropdown.classList.remove('active');
        }
    });
});
