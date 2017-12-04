import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import API from "../../utils/API"

class AddTask extends Component {
	state = {
		description: "",
		time_due: "",
		points: ""
	}

	handleInputChange = event => {
    const { name, value } = event.target;
    	this.setState({
      		[name]: value
    	})
    }

    handleFormSubmit = event => {
    	event.preventDefault();
    	if (this.state.description && this.state.time_due && this.state.points) {
    		API.saveTasks({
    			description: this.state.description,
    			time_due: this.state.time_due,
    			points: this.state.points
    		})
    		.then(res => console.log(res))
    		.catch(err => console.log(err))
    	}
    }

	render() {
		return (
			<div className="container">
				<label className="label">Description</label>
					<Input 
					value={this.state.description}
					name="description"
					onChange={this.handleInputChange} />
				<label className="label">Time Due</label>
					<Input
					type="date"
					value={this.state.time_due}
					name="date_due"
					onChange={this.handleInputChange}/>
				<label className="label">Points</label>
					<Input 
					type="tel"
					value={this.state.points}
					name="points"
					onChange={this.handleInputChange}/>
				<FormBtn
				disabled={!(this.state.description && this.state.time_due && this.state.points)}
				onClick={this.handleFormSubmit}>
					Submit
				</FormBtn>
			</div>
		)
	}
}

export default AddTask