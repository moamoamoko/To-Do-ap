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

document.querySelector('.add_task_button').addEventListener('click', () => {
  const newForm = document.createElement('input');
  newForm.type = 'text';

  const newLabel = document.createElement('label');
  newLabel.textContent = 'タスク名';

  newLabel.appendChild(newForm);
  document.querySelector('.add_task').appendChild(newLabel);
});