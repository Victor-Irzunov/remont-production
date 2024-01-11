import { BtnComp } from "@/components/btn/BtnComp"


const FifthSection = ({handleOrderClick}) => {
	return (
		<section className="bg-[#d9d9d9] sd:py-28 xz:py-16 sd:min-h-[190vh] xz:min-h-[165vh]">
			<div className='container mx-auto relative z-40'>

				<div className='absolute left-0 top-0 z-10 shadow-2xl'>
					<img
						src='/fifthSection/6.webp'
						alt='Помощь в подборе материалов для ремонта'
						className="sd:w-[550px] xz:w-[250px]"
					/>
				</div>
				<div className='absolute sd:right-0 xz:-right-4 top-36 -z-10 shadow-2xl'>
					<img
						src='/fifthSection/7.webp'
						alt='Помощь в подборе материалов для ремонта'
						className="sd:w-[700px] xz:w-[300px]"
					/>
				</div>

				<div className='absolute sd:left-16 xz:left-0 sd:top-[35rem] xz:top-[22rem] z-30  shadow-2xl'>
					<div className="card sd:w-[40vw] xz:w-auto rounded-none shadow-xl bg-white">
						<div className="card-body text-black">
							<h2 className="card-title">
								Помощь в подборе материалов
							</h2>
							<p className="sd:text-base xz:text-sm">
								Мы не только предоставляем профессиональные услуги ремонта, но и оказываем помощь в выборе качественных материалов. Наша команда экспертов готова поделиться своим опытом, помочь в экономии бюджета, консультировать по местам, где можно приобрести материалы подешевле, и даже предоставлять информацию о текущих скидках и акциях. Мы стремимся обеспечить вас всесторонней поддержкой на каждом этапе вашего ремонта.
							</p>
							<div className="card-actions justify-end mt-4">
							
								<BtnComp title='Оформить заявку на ремонт' handleOrderClick={handleOrderClick} />
							</div>
						</div>
					</div>
				</div>

				<div className='absolute sd:left-40 xz:-left-4 top-[50rem] -z-10  shadow-2xl'>
					<img
						src='/fifthSection/8.webp'
						alt='Помощь в подборе материалов для ремонта'
						className="sd:w-[700px] xz:w-[300px]"
					/>
				</div>
			</div>
		</section>
	)
}

export default FifthSection