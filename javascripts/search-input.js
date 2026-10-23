/* 网站的搜索框只在按键抬起时读取输入框里的内容。用鼠标右键粘贴、把文字拖进搜索框时没有按键，
   要再随便按一下键才出结果。这里在内容变化时补发一次按键抬起，这些输入方式也能直接出结果。 */
document.addEventListener("input", function (event) {
  var box = event.target
  if (box.classList && box.classList.contains("md-search__input")) {
    box.dispatchEvent(new KeyboardEvent("keyup"))
  }
})
