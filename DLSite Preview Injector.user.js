// ==UserScript==
// @name        DLSite Preview Injector
// @namespace   loli_be_free
// @match       *://www.dlsite.com/*
// @grant       none
// @version     1.0
// @description Inserts image previews into the page for restricted works on dlsite
// @icon        data:image/png;base64,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
// @downloadURL 
// @updateURL
// @run-at      document-idle
// ==/UserScript==

function css() {
  const css = (`
    .error_box_work {
      margin-right: 0;
    }

    .inject-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 12px;
      row-gap: 12px;
    }

    .inject-image {
      display: block;
      width: 100%;
    }

    .inject-header {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
    }

    .inject-full {
      display: none;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat no-repeat;
      background-color: black;
    }

  `);
  const style = document.createElement('style');
  document.body.append(style);
  style.append(css);
}

function generateURL (type, code, group, count = 0) {
  const typePrefix = type == 'ana' ? '_ana' : '';
  const countSuffix = count == 0 ? 'main' : 'smp' + count.toString();
  return `https://img.dlsite.jp/modpub/images2/${type}/doujin/${group}/${code}${typePrefix}_img_${countSuffix}.webp`;
}

function invertType (type) {
  if (type == 'ana')
    return 'work';
  else
    return 'ana';
}

function redirect () {
  var newURL;
  if (window.location.href.includes('announce'))
    newURL = window.location.href.replace('announce', 'work');
  else
    newURL = window.location.href.replace('work', 'announce');
  window.location.replace(newURL);
}

async function checkExists (url) {
  const response = await fetch(url, { method: 'HEAD' });
  return response.ok;
}

async function insertImages (errorBox, type, code, group) {
  css();
  const message = errorBox.querySelector('.title_text').textContent;
  var restrict_message;
  if (message.includes('現在販売されていません'))
    restrict_message = 'Work not available for sale';
  else if (message.includes('お住いの国'))
    restrict_message = 'Work not avalible in your country or region';
  else
    restrict_message = 'Unknown reason';

  const full = document.createElement('div');
  document.body.append(full);
  full.classList.add('inject-full');
  full.addEventListener('click', () => full.style.display='none');
  errorBox.innerHTML = (`
    <p class="title_text inject-header">
      Restricted Work: ${restrict_message}<br>Loading Preview Images
    </p>
    <div class="inject-grid">
  `);

  const grid = errorBox.querySelector('.inject-grid');
  var count = 0;
  var loop = true;
  while (loop) {
    loop = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        img.classList.add('inject-image');
        img.addEventListener('click', () => {
          full.style.backgroundImage = ('url(' + img.src + ')');
          full.style.display = 'block';
        });
        grid.append(img);
        resolve(true);
      }
      img.onerror = () => resolve(false);
      img.src = generateURL(type, code, group, count);
    })
    count++;
  }
  errorBox.querySelector('.inject-header').innerText = `Restricted Work: ${restrict_message}\nPreview Images Loaded`;
}

function displayNotFount(errorBox) {
  css();
  const notFound = errorBox.querySelector('.title_text').textContent == "該当作品がありません";
  const html =`
    <img class="inject-header" src="/images/web/common/txt_error_01.png">
    <p class="title_text inject-header">
      No preview images to display.${notFound ? " Work not found." : ''}
    </p>
    <img class="illust inject-header" src="/images/web/home/pic_not_found_01.png">`
  errorBox.innerHTML = html;
}

async function run (errorBox) {
  const releaseType = window.location.href.includes('announce') ? 'ana' : 'work';
  const code = window.location.href.match(/rj\d+/i)[0].toUpperCase();
  const grouping = code.substring(0, 2) + ((code[2] !== "0") ? "": "0") + (Math.floor(((parseInt(code.substring(2)) / 1000) + 1))*1000).toString();

  var exists = await checkExists( generateURL(releaseType, code, grouping));
  if (exists) {
    insertImages(errorBox, releaseType, code, grouping);
  } else {
    exists = await checkExists( generateURL( invertType(releaseType), code, grouping));
    if (exists)
      redirect();
    else {
      displayNotFount(errorBox);
    }
  }
}

const errorBox = document.querySelector('.error_box_work');
if (errorBox)
  run(errorBox);