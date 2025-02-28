function warning(txt) {
  let error = alert(txt);
  return error;
}

function getId(url) {
  const regex = /(?:v=|\/)([0-9A-Za-z_-]{11})(?:[^\w]|\?|$)/;
  const video = url.match(regex);

  if (!video) {
    warning("INGRESE UNA URL VALIDA");
    return 0;
  }
  return video[1];
}

function btn(text, link) {
  let btns = document.getElementById('btns');
  btns.innerHTML = `<a style="color: white; background-color: red;" target="_blank" href="${link}">${text}</a>`

  return btns;
}

async function main() {
  let input = document.getElementById('input').value;
  let res = document.getElementById('res');
  let res2 = document.getElementById('res2');

  const videoId = getId(input);

  if (videoId) {
    let audioLink = `https://www.y2mate.com/youtube/${videoId}`;
    res.innerHTML = `<img src="https://i.ytimg.com/vi/${videoId}/0.jpg" >`
    res2.innerHTML = "pending...";
    setTimeout(() => {
      res2.style.display = "none";
      btn("DESCARGAR", audioLink);
    }, 2000);
    document.getElementById('input').value = "";
    //window.open(audioLink, '_blank');
  }
}
