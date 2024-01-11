import Image from "next/image"

const DelaemSection = () => {
	return (
		<section className="bg-white relative sd:min-h-[60vh] xz:min-h-[220vh] xy:min-h-[170vh]">
			<div className='container mx-auto absolute -top-8 left-0 right-0'>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>

					<div className="card mb-16 transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4 text-black relative bg-white">
							<div className='p-6 rounded-full bg-[#e8b846] absolute -top-16'>
								<Image src='/delaem/house.svg' alt='Ремонт частных домов' width={80} height={80} className="" />
							</div>

							<h4 className="card-title mt-2 pt-10 font-bold">
								Ремонт частных домов
							</h4>
							<p className="text-sm base-content font-light text-gray-500">
								Наша команда специализируется на качественном ремонте частных домов. Мы предлагаем полный цикл услуг, включая строительство и отделку. Независимо от того, требуется ли вам косметический ремонт или капитальное обновление, мы гарантируем высокий профессионализм и внимание к деталям. Вместе мы сделаем ваш дом еще уютнее и функциональнее.
							</p>


						</div>
					</div>

					<div className="card  mb-16  transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4 text-black relative bg-white">
							<div className='p-6 rounded-full bg-[#e8b846] absolute -top-16'>
								<Image src='/delaem/flat.svg' alt='Ремонт квартир' width={80} height={80} className="" />
							</div>

							<h4 className="card-title mt-2 pt-10 font-bold">
								Ремонт квартир
							</h4>
							<p className="text-sm base-content font-light text-gray-500">
								Наша команда профессионалов готова предложить вам высококачественные услуги по ремонту квартир. Мы специализируемся на тщательной отделке, современном дизайне и индивидуальном подходе к каждому проекту. Независимо от того, нужен вам косметический ремонт или перепланировка пространства, мы гарантируем выполнение работ в срок и в соответствии с вашими ожиданиями.
							</p>
						</div>
					</div>

					<div className="card  mb-16  transform-gpu transition-all duration-300 hover:-translate-y-2 shadow-lg">
						<div className="card-body items-center text-center gap-4 text-black relative bg-white">
							<div className='p-6 rounded-full bg-[#e8b846] absolute -top-16'>
								<Image src='/delaem/office.svg' alt='Ремонт офисов' width={80} height={80} className="" />
							</div>

							<h4 className="card-title mt-2 pt-10 font-bold">
								Ремонт офисов
							</h4>
							<p className="text-sm base-content font-light text-gray-500">
								Наша компания предоставляет профессиональные услуги по ремонту офисных помещений. Мы понимаем, что ваш офис - визитная карточка бизнеса, и поэтому мы стремимся создать рабочую среду, которая соответствует вашим корпоративным ценностям. Мы заботимся о каждой детали, начиная от функциональной планировки до стильного дизайна, чтобы ваш офис стал эффективным и комфортным местом для работы.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DelaemSection