import React, { memo } from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";
export const AddTodo = memo((props) => (
	<Paper style={{ margin: "32px 15rem", padding: 16 }}>
		<Grid container>
			<Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
				<TextField
					placeholder="Add Todo here"
					value={props.inputValue}
					onChange={props.onInputChange}
					onKeyPress={props.onInputKeyPress}
					style={{height: "50px"}}
                    fullWidth
				/>
			</Grid>
			<Grid xs={2} md={1} item>
				<Button
					fullWidth
					color="secondary"
					variant="outlined"
					onClick={props.onButtonClick}
                    style={{height:"50px"}}
				>
					Add
				</Button>
			</Grid>
		</Grid>
	</Paper>
));
export default AddTodo;
