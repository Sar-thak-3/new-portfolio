import React from "react";

function article_1() {
	return {
		date: "12 Jan 2024",
		title: "Unlabeled NLP Data Sentiment Classfication",
		description:
			"This is an innovative approach to NLP data classification that effectively utilizes basic machine learning algorithms, such as K-means clustering and cosine similarities, to handle scenarios with very few labeled data available.",
		keywords: [
			"NLP",
			"Sarthak",
			"Data Classification",
			"Blog",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
		link: "https://medium.com/@shibugarg0303/unlabeled-nlp-data-sentiment-classification-0dc3eb91342f"
	};
}

function article_2() {
	return {
		date: "22 Oct 2023",
		title: "Running your complete Python project in Google Colab",
		description:
			"Here is a blog tutorial on how to run your Python project in Google Colab, allowing you to avoid running large Python projects locally by setting up an environment similar to Conda.",
		style: ``,
		keywords: [
			"Google Colab",
			"Python project",
			"Environment",
			"Sarthak G.",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
		link: "https://medium.com/@shibugarg0303/run-entire-python-project-on-google-colab-10de1871c9a5"
	};
}

function article_3() {
	return {
		date: "21 Jun 2025",
		title: "Unlocking Tabular Data: A Novel Approach to Accurate Table Edge Detection in Images",
		description: "This project introduces a fast, rule-based method to accurately detect table grids in images before applying OCR. It focuses on identifying clear and faint table edges using geometric techniques, ensuring structured data extraction. The approach is lightweight, highly accurate, and deployable locally without relying on LLMs or heavy computation.",
		style: ``,
		keywords: ["CNN", "Computer Vision", "OCR", "Filters", "Hough Transform"],
		body: (
			<React.Fragment>
				<h1>Content of article 3</h1>
			</React.Fragment>
		),
		link: "https://medium.com/@shibugarg0303/unlocking-tabular-data-a-novel-approach-to-accurate-table-edge-detection-in-images-6438df502879"
	};
}

const myArticles = [article_3, article_1, article_2 ];

export default myArticles;
