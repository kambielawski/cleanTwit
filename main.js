let counts = document.getElementsByClassName('ProfileTweet-actionCount');
let others = document.getElementsByClassName('ProfileTweet-actionCountForPresentation')

const tick = 250  // .25 seconds

function update() {
  for(let i = 0; i < counts.length; i++) {
    counts[i].textContent = "";
  }

  for(let i = 0; i < others.length; i++) {
    others[i].textContent = "";
  }
}

function get_new() {
  counts = document.getElementsByClassName('ProfileTweet-actionCount');
  others = document.getElementsByClassName('ProfileTweet-actionCountForPresentation')
}

function run() {
  get_new();
  update();
  window.setTimeout(run, tick);
}

run();
