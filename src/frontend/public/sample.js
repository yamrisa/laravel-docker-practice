// // nodeコンテナ上で確認
// // 値を返さない（void）関数
// function logMessage(message: string): void {
//     console.log("logMessage:", message);
// }
// 配列の用意、配列には型定義がされている
let todos = [];
// 配列へのtodos追加関数の作成、表示させない処理
function addTodo(title) {
    const newTodo = {
        id: todos.length + 1, //現在の配列の長さ + 1 をIDとして使う（簡易的な採番）
        title: title, //引数で受け取る
        status: "todo", //初期値のステータス
    };
    todos.push(newTodo); // todos配列に newTodo（1件のTodoオブジェクト）が追加される
}
// 指定したid以外のTodoだけを残して、新しい配列を作り直す
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // filter は「引数のidと一致しないTodoを集めた新しい配列」を返し、それを todos に代入している
}
// Todoを1件、idから取得する
function findTodoById(id) {
    return todos.find(todo => todo.id === id); //todo は findTodoByIdで取得した「1件のTodo」
}
// statusの変更関数の作成
function changeStatus(id, status) {
    // const todo: Todo | undefined = todos.find(...)
    const todo = findTodoById(id);
    if (!todo) {
        console.error("Todoが見つかりません");
        return;
    }
    todo.status = status; // 見つかったTodoオブジェクトのstatusプロパティを書き換える
}
// UIにToDoを表示する処理
// todos配列の中身をliタグに反映させる関数、画面に表示するだけなので戻り値は不要（void）
// function renderTodos(): void {
//     // HTML側の <ul id="todo-list"> を取得
//     // document = ブラウザ全体
//     // getElementById = idで要素を1つ探す
//     const list = document.getElementById("todo-list")
//     // 要素が見つからなかった場合の保険
//     // （HTML側にid="todo-list"が無いとここに入る）
//     if (!list) {
//       console.error("todo-list が見つかりません")
//       return
//     }
//     // 既存の表示を一旦すべて消す
//     // → 再描画時に二重表示されるのを防ぐ
//     list.innerHTML = ""
//     // todos配列を1件ずつ取り出す
//     // todo = Todo型のオブジェクト1つ分
//     todos.forEach(todo => {
//       // <li> 要素を新しく作成
//       const li = document.createElement("li")
//       // 表示する文字列を設定
//       // ${} はテンプレートリテラル（値を埋め込める）
//       li.textContent = `${todo.title} [${todo.status}]`
//       // 作成した <li> を <ul> の中に追加
//       list.appendChild(li)
//     })
//   }
//   描画専用の関数を追加　div
function renderTodos() {
    const listElement = document.getElementById("todo-list");
    if (!listElement)
        return;
    // 再描画のために一旦空にする
    listElement.innerHTML = "";
    todos.forEach(todo => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        const button = document.createElement("button");
        span.textContent = `${todo.id}: ${todo.title} [${todo.status}]`;
        button.textContent = "削除";
        button.addEventListener("click", () => {
            deleteTodo(todo.id);
            renderTodos();
        });
        div.appendChild(span);
        div.appendChild(button);
        listElement.appendChild(div);
    });
}
// 動かす
addTodo("やること１");
addTodo("やること２");
changeStatus(1, "doing");
changeStatus(2, "done");
renderTodos();
export {};
//# sourceMappingURL=sample.js.map