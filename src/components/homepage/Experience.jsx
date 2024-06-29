import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Experience = (props) => {
	const { title, description, date, company } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date" style={{fontSize: "16px"}}>
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{company} - {title}</div>
					<div className="homepage-article-description">
						{description.map((point,index)=>{
                            return(
                                <div style={{fontSize: "14px"}} key={index+1}>
                                    {index+1}. {point}
                                </div>
                            )
                        })}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
