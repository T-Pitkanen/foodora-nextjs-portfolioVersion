'use client';

import Accordion from './accordion';
import { useEffect, useState } from 'react';
import styles from './accordions.module.css';
import questionsData from '../../data/questions.json';

const Faqs = () => {
	const [questions, setQuestionsData] = useState([]);

	useEffect(() => {
		const getQuestions = async () => {
			setQuestionsData(questionsData);
		};

		getQuestions();
	}, []);

	/* ORIGINAL
	useEffect(() => {
		const getQuestions = async () => {
			const response = await fetch('api/faqs');
			const data = await response.json();
			setQuestionsData(data);
		};

		getQuestions();
	}, []); */

	return (
		<div className={styles.accordionsContainer} id='faq'>
			<h3>Frequently Asked Questions</h3>
			<div className={styles.accordions}>
				{' '}
				{questionsData.map((question, index) => {
					return (
						<Accordion
							key={index}
							header={question.question}
							body={question.answer}
						></Accordion>
					);
				})}
			</div>
		</div>
	);
};

export default Faqs;
