import express from "express";

const app = express();

//GETリクエストでルートにアクセスが会った時の動作
app.get('/', (req, res)=>{
  res.send('Hello express');
});

//3000番ポートを使ってサーバーを立ち上げ
app.listen(3000, ()=>{
  console.log('app listening on 3000');
});