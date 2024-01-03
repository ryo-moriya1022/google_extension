function rescheck(psw,classname){
    const responsecheck=document.getElementById("resizeTarget").querySelector("important");

    if(responsecheck==null){
        console.log("not get");
        chrome.runtime.sendMessage({text1:psw,text2:classname});
    }
    else{
        console.log("get");
    }
}

const s_buttons = document.querySelectorAll(".btn.btn-info");
s_buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        // ボタンがクリックされたときに関連するinputの値を取得
        try{
        const psw = button.closest("form").querySelector("input[type=password]").value;
        // ボタンがクリックされたときにresizeTargetのテキストとinputの値を表示
        const resizeTarget = document.getElementById('resizeTarget').querySelector('.mainttl2 span');
        console.log("resizeTarget:", resizeTarget.textContent);
        console.log("classname:", psw);
        setTimeout(rescheck, 100,psw,resizeTarget.textContent);
        }catch(e){
            console.log("error:", e);
        }
    });
});

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    console.log(response);
});

// chrome.runtime.sendMessage({ action: "getText" }, function(response) {
//     // background.jsからのレスポンスを受け取り、必要な処理を行う
//     console.log(response);
// });
