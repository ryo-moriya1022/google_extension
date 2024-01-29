function output(){
    var url = "https://script.google.com/macros/s/AKfycbyQ27jkvr_Qqfkj4VovK__ZRNWva8rKzbDXfM_9rhxgATlbZHko8gSwyTbYBI34dMY9_g/exec"
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("取得したデータ:", data);
      // ここで取得したデータを処理する
    })
    .catch(error => {
      console.error("データの取得に失敗しました:", error);
    });
}

function input(classname, psw){
    var url="https://script.google.com/macros/s/AKfycbwr6mjpxo8DddJHlFKuripwGSOoa3qa5deW7jMYvVFKb7dSkLsbXCG21S7hYS5dWsrVcw/exec";
    fetch(url+"?key1="+classname+"&key2="+psw,
        {
        //method: 'HEAD',
        mode: 'cors',
        redirect: 'follow' 
        },
        )
        .then(response=>{
            console.log("fetchが実行されました");
            console.log("Response Status: " + response.status);
        })
        }

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
    psw=message.text1;
    classname=message.text2;
    input(classname,psw);
    sendResponse({res:"success"});
});
