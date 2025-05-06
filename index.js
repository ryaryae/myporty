<script>
    const scrollBtn = document.getElementById("scrollTopBtn");

    // Show button when user scrolls down 100px
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    // Scroll to top on click
    scrollBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
</script>