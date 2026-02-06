let queue = [];

const queueBox = document.getElementById("queueBox");

function renderQueue(){
  queueBox.innerHTML = "";
  queue.forEach(item => {
    const div = document.createElement("div");
    div.className = "queue-item";
    div.textContent = item;
    queueBox.appendChild(div);
  });
}

function addToQueue(){
  const input = document.getElementById("queueInput");
  if(input.value !== ""){
    queue.push(Number(input.value));
    input.value = "";
    renderQueue();
  }
}

function sortQueue(){
  queue.sort((a,b) => a - b);
  renderQueue();
}

function clearQueue(){
  queue = [];
  renderQueue();
}

function scrollToDemo(){
  document.querySelector(".demo").scrollIntoView({behavior:"smooth"});
}
