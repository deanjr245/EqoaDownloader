# EQOA Setup Page

The website is a small static page in `wwwroot`. No MVC views, database, or backend features are used.

## Edit the page

Open [`wwwroot/index.html`](wwwroot/index.html) to edit the page. Search for `Installation guide`; the numbered `<li>` entries directly below it are the steps your friends will follow. Edit a step, copy its `<li>` to add another, or remove one.

Edit [`wwwroot/js/site-config.js`](wwwroot/js/site-config.js) to change the game name, file size, or external download URL. Leave `downloadUrl` empty until the sharing link is ready; the button stays inactive until then.

## Deploy to GitHub Pages

Push this repository to GitHub with its default branch named `main`. In **Settings → Pages**, choose **GitHub Actions** as the deployment source. The workflow at `.github/workflows/pages.yml` publishes the static files from `wwwroot` when changes are pushed to `main`.

## Run locally

Run the `http` or `https` profile in VS Code (or run `dotnet run` from the project folder). The app serves `wwwroot/index.html` at the localhost address in [`Properties/launchSettings.json`](Properties/launchSettings.json).
