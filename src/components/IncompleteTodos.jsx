import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* ループ処理 */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* index引数を渡すためには() => で新しく関数を生成する記述に変更する */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
