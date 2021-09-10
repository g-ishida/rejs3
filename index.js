// 少し書いたら試す、を、繰り返す
'use strict'

{//ここから

// タスクのタイトル
let showThema = () => {
    console.log('====================');
    console.log('現在の持っているタスク一覧');
    console.log('====================');
  };

// デフォルトで持っているタスク
  const tasks = ['掃除', '買い物', '散歩'];

  // タイトルとタスクをまとめて表示
  let myTasks = () => {
    showThema();
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i}：${tasks[i]}`);
    }
  };




// タスクを表示させる関数
let showTasks = () => {
  // すでにもっているタスクを表示
  myTasks();

  //入力画面を表示
  let inputPrompt = window.prompt('タスクを入力してください');//aは、入力した値
  window.alert('新しいタスクを追加しました。');

  // 新しいタスクをtasks配列に追加
  tasks.push(inputPrompt);
  // 追加したタスクも表示
  myTasks();

  // 入力２
  let optionPrompt = window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');

}//ここまで、showTasks関数

showTasks();

}//ここから