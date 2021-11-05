function butotnClick(){
  //console.log('選択されているのは ' + classSelect.value + ' です');  //console log に表示
  //alert('選択されているのは ' + classSelect.value + ' です');        //アラートに表示
  if(classSelect.value == "0") ;
  else window.location.assign("class_" + classSelect.value + ".html");  //classSelect.value の中身によりウィンドウ遷移
}

let classSelect = document.getElementById('class');                //プルダウン(class)の中身を取得 (3cs or 4cs or 5cs)

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);                //OK! ボタンにクリック時の動作を追加

if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
  document.getElementById('class').className = 'select_mobile';
  document.getElementById('checkButton').className = 'button_mobile';
}
else {
}
