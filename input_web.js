
const s_buttons = document.querySelectorAll("button");
s_buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        // ボタンがクリックされたときに関連するinputの値を取得
        const relatedInput = button.closest("form").querySelector("input[type=password]");
        const inputValue = relatedInput.value;
        // ボタンがクリックされたときにresizeTargetのテキストとinputの値を表示
        const resizeTarget = document.getElementById('resizeTarget').querySelector('.mainttl2 span');
        console.log("resizeTarget:", resizeTarget.textContent);
        console.log("inputValue:", inputValue);
        test();
    });
});

