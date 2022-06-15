import React from "react";
import { TodoType } from "./types/todos";

export const Todo: FC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
