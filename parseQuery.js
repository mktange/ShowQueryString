window.onload = function () {
    var regex = /[\&\?]content=([^\&]+)/;
    var match = regex.exec(window.location.search);
    if (match && match[1]) {
        document.getElementById("content").textContent = decodeURI(match[1]);
    }
};
