(() => {
    const config = window.gamePortalConfig;
    const downloadLink = document.querySelector("#download-link");
    const downloadNote = document.querySelector("#download-note");

    document.querySelectorAll("[data-game-name]").forEach((element) => {
        element.textContent = config.gameName;
    });
    document.querySelectorAll("[data-file-size]").forEach((element) => {
        element.textContent = config.fileSize;
    });
    document.title = `${config.gameName} Download and Setup`;

    if (config.downloadUrl) {
        downloadLink.href = config.downloadUrl;
        downloadLink.target = "_blank";
        downloadLink.rel = "noopener noreferrer";
        downloadLink.removeAttribute("aria-disabled");
        downloadLink.querySelector(".download-button-label").textContent = `Download ${config.gameName} files`;
        downloadNote.textContent = "The download will open on its file hosting site.";
    }
})();
