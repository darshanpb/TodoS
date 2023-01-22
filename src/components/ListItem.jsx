import React, { memo } from "react";
import {
	List,
	ListItem,
	Checkbox,
	IconButton,
	ListItemText,
	ListItemSecondaryAction,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export const TodoListItem = memo((props) => (
	<ListItem divider={props.divider} style={{backgroundColor: "#FAEAB1", }}>
		<Checkbox
			onClick={props.onCheckBoxToggle}
			checked={props.completed}
			disableRipple
		/>
		<ListItemText primary={props.title} />
		<ListItemSecondaryAction>
			<IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
				<DeleteOutlineIcon style={{color:"red"}}/>
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
));
export default TodoListItem;
