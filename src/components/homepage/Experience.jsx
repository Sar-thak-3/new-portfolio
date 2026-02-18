import React from "react";

import "./styles/article.css";

const Experience = (props) => {
	const { title, description, date, company } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date" style={{fontSize: "18px"}}>
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{company} - {title}</div>
					<div className="homepage-article-description">
					    {description.map((item, index) => {
					        if (item.type === "header") {
					            return (
					                <div key={index} style={{ fontSize: "16px", fontWeight: "bold", marginTop: "12px", marginBottom: "4px", color: "#333" }}>
					                    {item.text}
					                </div>
					            );
					        }
					        return (
					            <div key={index} style={{ fontSize: "14px", marginLeft: "8px", marginBottom: "4px", lineHeight: "1.4" }}>
					                • {item.text}
					            </div>
					        );
					    })}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
