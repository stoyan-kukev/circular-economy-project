import { useState } from "react";

const data = [
	{
		question: "Какво всъщност изучава биол. наука екология?",
		answers: [
			"устройството на организмите",
			"климата на земята",
			"взаимотношенията м/у организмите",
		],
	},

	{
		question:
			"Кое от изброените се ползва като синоним за думата ,,рециклиране”?",
		answers: ["цикълът на боклука", "сметообработване", "сметопреработване"],
	},

	{
		question: "Рециклирал ли си някога?",
		answers: ["Да", "Не", "Не помня"],
	},

	{
		question:
			"Кога за първи път научи значението на думата ,,рециклиране” и за нейната необходимост?",
		answers: [
			"в начален етап",
			"в прогимназиален етап",
			"все още нищо не знам по темата",
		],
	},

	{
		question:
			"Бил ли си и искаш ли да бъдеш част от така наречените ,,Еко кампании” или ,,Еко проекти”?",
		answers: [
			"Бил съм част.",
			"Не съм бил и не искам да бъда.",
			"Не съм бил, но искам да бъда.",
		],
	},

	{
		question: "Смяташ ли, че знаеш достатъчно на тема ,,Екология”?",
		answers: ["Да", "Не", "Не ме интересува"],
	},

	{
		question:
			"Смяташ ли, че в училище трябва да се обръща по-специално внимание на рециклирането?",
		answers: ["Да", "Не", "Не ме интересува"],
	},

	{
		question: "Сподели своя опит:",
		answers: [],
	},
];

interface AnswerCardProps {
	name: string;
}

const AnswerCard = ({ name }: AnswerCardProps) => (
	<div className="form-control">
		<label className="label cursor-pointer">
			<span className="label-text">{name}</span>
			<input
				//
				readOnly
				type="radio"
				name="radio-10"
				className="radio checked:bg-green-500"
				checked
			/>
		</label>
	</div>
);

interface CardProps {
	answers: string[];
	question: string;
}

const Card = () => {
	const [questionIndex, setQuestionIndex] = useState(0);

	const handleNext = () => {
		if (questionIndex < data.length - 1)
			setQuestionIndex((prevState) => prevState + 1);
		else window.location.replace("/");
	};

	const handlePrev = () => {
		// use this for a prev button
	};

	const handleChange = () => {
		// do something meaningful with the data in here
	};

	return (
		<div className="card w-96 bg-base-100 shadow-xl mb-5 py-2">
			<div className="card-body">
				<h2 className="card-title">{data[questionIndex].question}</h2>

				<form onChange={handleChange}>
					{/* No bueno bellow */}
					{data[questionIndex].answers.length ? (
						data[questionIndex].answers.map((answer) => (
							<AnswerCard key={answer} name={answer} />
						))
					) : (
						<textarea
							className="textarea textarea-primary w-full"
							placeholder="Green go brrrrr"
						></textarea>
					)}
				</form>
				<div className="card-actions justify-end mt-4">
					{/* <button className="btn btn-primary" onClick={handlePrev}>
						Назад
					</button> */}
					<button className="btn btn-primary" onClick={handleNext}>
						{data[questionIndex].answers.length ? "Напред" : "Готов"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
