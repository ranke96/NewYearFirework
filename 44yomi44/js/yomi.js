    function playSound() {
      const audio = new Audio('https://fireworks.js.org/sounds/explosion2.mp3');
      audio.play();
    }

    // 烟火效果函数
    function showFirework(element) {
      element.style.width = '303px'; // 放大宽度
      element.style.height = '485px'; // 放大高度
      element.style.opacity = '1'; // 变为不透明

      setTimeout(() => {
        element.style.opacity = '0'; // 变为透明
        setTimeout(() => {
          element.style.width = '151px'; // 恢复初始宽度
          element.style.height = '242px'; // 恢复初始高度
        }, 1000); // 1秒后恢复初始尺寸
      }, 2000); // 2秒后消失
    }

    // 触发烟火效果
    function startYomi() {
      setTimeout(() => {
        showFirework(document.getElementById('firework-left'));
        playSound();
      }, 1000); // 1秒后触发左边烟火

      setTimeout(() => {
        showFirework(document.getElementById('firework-right'));
        playSound();
      }, 3000); // 3秒后触发右边烟火
    }