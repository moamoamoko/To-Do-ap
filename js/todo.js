// ここにjavascriptを記載

// ダイアログテスト
const confirmDialog = () => {
  window.confirm("ダイアログテスト");
}

const fwjconfirmDialog = () => {
  let confirmAnswer = window.confirm("fwjのサイトに移動します。");
  if (confirmAnswer == true) {
    fwjMovement();
  }
}

const fwjMovement = () => {
  window.open('https://fwj.jp/', '_blank');
}