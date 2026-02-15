function openSite(site) {
  const urls = {
    amazon: "https://www.amazon.in",
    flipkart: "https://www.flipkart.com",
    myntra: "https://www.myntra.com",
    meesho: "https://www.meesho.com",
    ajio: "https://www.ajio.com"
  };

  if (urls[site]) {
    window.open(urls[site], "_blank");
  }
}

function searchAll() {
  const q = document.getElementById("query").value.trim();

  if (q === "") {
    alert("Please enter a product name");
    return;
  }

  const links = [
    "https://www.amazon.in/s?k=" + encodeURIComponent(q),
    "https://www.flipkart.com/search?q=" + encodeURIComponent(q),
    "https://www.myntra.com/" + encodeURIComponent(q),
    "https://www.meesho.com/search?q=" + encodeURIComponent(q),
    "https://www.ajio.com/search/?text=" + encodeURIComponent(q)
  ];

  links.forEach(link => window.open(link, "_blank"));
}
