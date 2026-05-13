const fs = require('fs');

const html = fs.readFileSync('reference/rendered.html', 'utf8');

const rootStart = html.indexOf('<div id="root">');
let rootHtml = "";

if (rootStart !== -1) {
    const scriptStart = html.indexOf('<script', rootStart);
    if (scriptStart !== -1) {
        rootHtml = html.substring(rootStart, scriptStart);
    } else {
        rootHtml = html.substring(rootStart);
        // remove closing body/html
        rootHtml = rootHtml.replace('</body></html>', '');
    }
} else {
    console.log("Could not find #root");
}

fs.writeFileSync('reference/root.html', rootHtml);
console.log("Extracted root.html");
