'use strict'

let ctx = document.getElementById('mychart');

//x-y軸の数値を入力
let axisX = [0, 1, 2, 4, 5, 6, 7, 8, 10, 10, 11, 12, 14, 16, 17, 20, 22, 25, 27, 28, 30, 32, 33, 35, 37, 38, 39, 40, 41, 43, 49, 50, 53, 54, 55, 56, 57, 60, 64, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
let axisY = [5, 7, 8, 10, 11, 11, 12, 13, 14, 13, 14, 16, 18, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 22, 23, 24, 25, 25, 26, 26, 31, 34, 35, 36, 41, 45, 49, 50, 63, 62, 66, 70, 75, 79, 84, 87, 92, 95, 97, 99, 102, 106];

//2軸のグラフ作成に必要なプロパティを入力
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: axisX,
    datasets: [{
      label: '学習記録',
      data: axisY,
      borderColor: '#f88',
    },
    ],
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 120,
        title: {
          display: true,
          text: '学習時間 (h)',
          color: 'black',
          padding: { top: 20 },
        },
      },
      x: { // x軸の設定を追加
        title: {
          display: true,
          text: '経過日数 (day)', // x軸のタイトル
          color: 'black',
          padding: { bottom: 20 },
        },
      },
    },
  },
});



//トグル表示
//classの定型文　classの宣言は頭文字は大文字。引数"obj"でつなぐ。
//objにはhookNameとtagNameが入る
// classの中では関数宣言functionはいらない
class Accordion {

  //初期化  
  constructor(obj) {
    console.log('obj', obj.hookName);//エラーが無く進行しているかconsolelogで確認

    const $elm = document.querySelector(obj.hookName);

    //falseの場合の現象確認
    if (!$elm) {
      console.error(`Element not found: ${obj.hookName}`);//エラーが起きた場合の現象確認
      return;
    }
    const $trigger = $elm.getElementsByTagName(obj.tagName);//トリガーをつけたいtagNameを取得

    //clickeventをつけたいトリガーをloop作成  
    const triggerLen = $trigger.length;//トリガーの数を取得(loopまわすため)
    let index = 0; //初期値
    while (index < triggerLen) {
      $trigger[index].addEventListener('click', (e) => this.clickHandler(e));//classの中で関数を指示する場合にはthisをつける（クラスを参照する）
      index++;
    }
  }

  //clickevent(クリックされたら実行するイベント)
  clickHandler = (e) => {//アロー関数を使ってみた
    e.preventDefault(); //linkは消してイベントだけ使う

    const $target = e.currentTarget;//クリックされたその要素を取得（アンカーリンク）
    const $content = $target.nextElementSibling;//アンカーリンクの次の要素を取得

    if ($content.style.display === 'block') {//block(表示されていれば)
      $content.style.display = 'none';//none(非表示にする)
    } else {                             //else(非表示ならば)
      $content.style.display = 'block';//block(表示する)
    }
  }

}

//インスタンスの作成のため変数宣言
//コーディンングスキル用
const myAccordion = new Accordion({
  hookName: '#js-accordion',
  tagName: 'a'
});

//今後実現したいビジョン用
const nextAccordion = new Accordion({
  hookName: '#js-faq',
  tagName: 'p'
});
