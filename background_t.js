function output(){
    var url = "https://script.google.com/macros/s/AKfycbzRks9HFUK7eJ_pCgd8-FHocaLcuyNLIW1hgcWHHuwVn5mrtl73Rqo8I3TPJDT0k9YY8g/exec"
    fetch(url)
        .then(function (res) {
            return res.json(); // フェッチしたデータを JSON 形式に変換
        })
        .then(function (jsonData) {
                console.log(jsonData); // JSON へ変換されたデータをコンソールに表示
            })
    .catch(error=>{
        console.error('通信に失敗しました', error);
    });}

function input(classname, psw){
    var url="https://script.google.com/macros/s/AKfycbyevKgZORmzvkQHELCknBNfXRxNY2lq8CAf035RSxIstK7kDOcv9-Tc64ejsGpzJ7NWfw/exec";
    fetch(url+"?key1="+classname+"&key2="+psw,
        {
        //method: 'HEAD',
        mode: 'no-cors'
        })
        .then(response=>{
            console.log(response);
            return response.text();
        })
        }

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
    psw=message.text1;
    classname=message.text2;
    response=input(classname,psw);
    sendResponse({res:response},function(response){
        console.log(response);
    });
});
