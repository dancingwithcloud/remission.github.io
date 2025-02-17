document.getElementById("yes").addEventListener("click", function() {
    var nextPage = getNextPage();
    window.location.href = nextPage;  // Redirect to the next page
});

document.getElementById("no").addEventListener("click", function() {
    var nextPage = getNextPage();
    window.location.href = nextPage;  // Redirect to the next page
});

function getNextPage() {
    var currentPage = window.location.href;
    if (currentPage.includes("index.html")) {
        return "IP2.html";
    } else if (currentPage.includes("IP2.html")) {
        return "IP3.html";
    } else if (currentPage.includes("IP3.html")) {
        return "IP4.html";
    } else if (currentPage.includes("IP4.html")) {
        return "IP5.html";
    } else if (currentPage.includes("IP5.html")) {
        return "IP6.html";
    } else if (currentPage.includes("IP6.html")) {
        return "IP7.html";
    } else {
        return "index.html";  // loop back to the first question (optional)
    }
}
