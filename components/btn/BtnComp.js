"use client"

export const BtnComp = ({ handleOrderClick, title }) => {


	return (
		<button
			className={`btn btn-primary border-none font-bold uppercase text-black`}
			onClick={() => handleOrderClick(title)}
		>
			{title}
		</button>
	)
}
