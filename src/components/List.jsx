import React, { memo } from "react";
import { List, Paper, Grid } from "@mui/material";
import ListItem from "./ListItem";
export const TodoList = memo((props) => (
	<>
		{props?.items?.length > 0 && (
			<Paper style={{ margin: "32px 15rem", }}>
				<List style={{ overflow: "scroll", backgroundColor:"#FAEAB1"}}>
					{props.items.map((todo) => (
						<ListItem
							{...todo}
							key={`TodoItem.${todo?.id}`}
							divider={todo.id !== props.items.length - 1}
							onButtonClick={() => props.onItemRemove(todo?.id)}
							onCheckBoxToggle={() =>
								props.onItemCheck(todo?.id, todo.completed)
							}
						/>
					))}
				</List>
			</Paper>
		)}
	</>
));
export default TodoList;
