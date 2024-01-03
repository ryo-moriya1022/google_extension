function start() {
    var valueToSend = 'Hello, Spreadsheet!';  // 送りたい値を設定
  
    // Google Apps Script の URLを設定
    var scriptUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=XpWTjYuX7lPIW1N0JBuOlZF3SOKPvAX5Y4oOKnDk9Nj8sfYw4NYnldj_pW5hhme8F9bE7V0d7qxW8AvjYJH8DtTlpRaHwgDSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLenWruPuI6Fq9M_e4dKrjFnHr-8va_tG69ckmLOFliZB6P7hp4XTj9K_9gNStaYmFk0UKyDp3KQ6Miwga_-twhB__TK9m4yvQ&lib=MsG3AGtVCcTTNj5ph7t4I37rXAowgogKf';  // 公開後に生成されたURLを使います
  
    // Google Apps Script に引数を渡して呼び出す
    console.log('test');
    fetch(scriptUrl + '?value=' + encodeURIComponent(valueToSend))
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };
start();
  