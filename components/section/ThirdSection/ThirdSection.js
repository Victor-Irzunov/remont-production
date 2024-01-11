import { BtnComp } from "@/components/btn/BtnComp"

const ThirdSection = ({handleOrderClick}) => {
	return (
		<section className="sd:min-h-[220vh] xz:min-h-[240vh] relative py-20 bg-[#d9d9d9] w-full">
			<div className=''>

				<div className='absolute left-1/2 transform -translate-x-1/2 top-0 z-30 shadow-2xl'>
					<div className="card sd:w-[40vw] xz:w-[80vw] rounded-none shadow-xl bg-white">
						<div className="card-body text-black">
							<h2 className="card-title sd:text-4xl xz:text-3xl font-bold">
								Ремонт любой сложности
							</h2>
							<p className="sd:text-lg xz:text-sm sd:mt-4 xz:mt-1 sd:pl-3 sd:pr-8 xz:pl-0 pr-0">
								Мы специализируемся на ремонте любой сложности, от косметических обновлений до полного реконструкции помещений. Независимо от масштаба вашего проекта, наша команда готова принять вызов и реализовать ваши идеи в жизнь. Мы обеспечиваем высокое качество работ, внимание к деталям и индивидуальный подход к каждому клиенту.
							</p>
							<div className="card-actions justify-end sd:mt-6 xz:mt-2">
							<BtnComp title='Заказать ремонт' handleOrderClick={handleOrderClick} />
							</div>
						</div>


						<div className='absolute -z-10 sd:top-52 xz:top-[26rem] sd:-left-72 xz:-left-4 shadow-2xl'>
							<img src='/thirdSection/1.webp' alt='Ремонт квартир' className="sd:w-[350px] xz:w-[250px]" />
						</div>

						<div className='absolute sd:-z-10 xz:-z-20 sd:top-80 xz:top-[100vh] sd:-right-72 xz:-right-4 shadow-2xl'>
							<img src='/thirdSection/2.webp' alt='Ремонт дома' className="sd:w-[700px] xz:w-[300px]" />
						</div>

						<div className='absolute z-10 sd:top-[95vh] xz:top-[125vh] sd:left-0 xz:left-12 shadow-2xl'>
							<img src='/thirdSection/3.webp' alt='Ремонт офиса' className="sd:w-[400px] xz:w-[250px]" />
						</div>

						<div className='absolute sd:z-10 xz:-z-10 sd:-bottom-[140vh] xz:-bottom-[50rem] sd:-right-72 xz:right-10 shadow-2xl'>
							<img src='/thirdSection/4.webp' alt='Ремонт под ключ' className="sd:w-[700px] xz:w-[300px]" />
						</div>




						<div className='absolute z-10 sd:-bottom-[160vh] xz:-bottom-[165vh] sd:-left-60 xz:-left-0 border-l-8 border-gray-600 pl-5'>
							<p className='text-gray-500 font-bold italic sd:text-base xz:text-sm'>
								Мы не просто осуществляем ремонт помещений, мы предоставляем полный спектр услуг для вашего комфорта. Наша команда занимается не только ремонтом, но и сборкой и расстановкой мебели, уборкой после завершения работ, а также подключением бытовой и электронной техники. Мы стремимся обеспечить клиентам беззаботный опыт, позволяя им наслаждаться обновленным пространством без лишних хлопот.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ThirdSection