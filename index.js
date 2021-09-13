// 少し書いたら試す、を、繰り返す
'use strict'
{//ここから

// タスクのタイトル
const showThema = () => {
    console.log('====================');
    console.log('現在の持っているタスク一覧');
    console.log('====================');
  };


// デフォルトで持っているタスクとジャンル
const tasks = [
  {task: '机を片付ける', genre: '掃除'},
  {task: '牛乳を買う', genre: '買い物'},
  {task: '散歩する', genre: '運動'},
];

  // タイトルとタスクとジャンルをまとめて表示、アクセス時に表示
const haveTasks = () => {
    showThema();
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i}：[内容]${tasks[i].task}、[ジャンル]${tasks[i].genre}`)
    }
  };

// タスクを表示させる関数
const showTasks = () => {
  // すでにもっているタスクを表示
  haveTasks();

  //入力画面を表示
  let inputTask = window.prompt('タスクを入力してください');
  let inputGenre = window.prompt('ジャンルを入力してください');
  window.alert('新しいタスクを追加しました。');

  // 新しいタスクをtasks配列に追加
  // 配列にオブジェクトを追加
  tasks.push({task: inputTask, genre: inputGenre});

  // 追加したタスクも表示
  haveTasks();

  // 入力２
  let optionPrompt = window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');

}//ここまで、showTasks関数

showTasks();

}//ここまで