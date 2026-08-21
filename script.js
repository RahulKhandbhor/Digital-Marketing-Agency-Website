// Mobile navigation

function toggleMenu() {
    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.classList.toggle("active");
    }
}


// Current year

document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});


// Contact form

function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your inquiry has been submitted successfully."
    );

    event.target.reset();
}


// Blog search

function searchBlogs() {

    const input = document
        .getElementById("blogSearch")
        .value
        .toLowerCase();

    const blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(function (blog) {

        const text = blog.textContent.toLowerCase();

        if (text.includes(input)) {
            blog.style.display = "block";
        } else {
            blog.style.display = "none";
        }

    });
}


// Blog article button

function readBlog(article) {

    alert(
        article +
        " will open here. You can later connect this button to a separate article page."
    );

}