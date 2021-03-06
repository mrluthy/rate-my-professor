import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Professor extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<NavLink to="/professor">
					<a className="professor" href="#">
						<div className="icon">
							{" "}
							<img src="\assets\hat.png" />
						</div>
						<div className="professor-name">
							Professor: {this.props.professor.name}
						</div>
						<div className="school-name">
							School: {this.props.professor.school}
						</div>
						<div className="subject-name">
							Class: {this.props.professor.class}
						</div>
						<div className="rating">Rating: {this.props.professor.rating}</div>
					</a>
				</NavLink>
			</div>
		);
	}
}
