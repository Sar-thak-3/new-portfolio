import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, points, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						
						<div style={{ fontSize: "12px" }} className="project-description">
							{description}
						</div>

						{/* Render bullet points if they exist */}
						{points && points.length > 0 && (
							<ul className="project-points" style={{ fontSize: "11px", paddingLeft: "15px", margin: "8px 0", color: "#666" }}>
								{points.map((point, index) => (
									<li key={index} style={{ marginBottom: "4px" }}>
										{point}
									</li>
								))}
							</ul>
						)}

						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;