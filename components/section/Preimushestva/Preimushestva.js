import Image from "next/image";


export default function Preimushestva() {
	return (
		<section className='py-20 bg-[#d9d9d9]' id="preimushestva">
			<div className='container mx-auto'>
				<div className='text-center text-black'>
					<h3 className='text-2xl sm:text-4xl font-bold mb-4 uppercase  shadow-text'>
						Наши преимущества
					</h3>
					<p className="mt-4 uppercase mb-5 sd:text-xl xz:text-sm">
						Мы предоставляем высококачественные услуги по ремонту с учетом индивидуальных потребностей клиентов
					</p>
				</div>

				<div className='flex flex-wrap justify-between'>

					<div className='flex sd:flex-row xz:flex-col mb-6'>

						<div className="rounded-none card lg:card-side bg-base-100 shadow-2xl px-3 sd:mb-0 xz:mb-6 sd:pt-0 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/2 xz:w-full">
							<figure><img src="/Preimushestva/quality2.svg" alt="Качество ремонта" /></figure>
							<div className="card-body text-black sd:w-8/12 xz:w-full">
								<h2 className="card-title">
									Качество работ
								</h2>
								<p className="text-slate-600 font-light sd:text-base xz:text-sm">
									Мы гарантируем высокое качество выполнения всех работ. Наши специалисты используют только проверенные материалы и современное оборудование, чтобы обеспечить долговечность и эстетичность каждого проекта. Мы придаем особое внимание деталям и стремимся превзойти ожидания клиентов. Ваш дом или офис будут отражать наше стремление к исключительному качеству.
								</p>
							</div>
						</div>

						<div className="rounded-none card lg:card-side bg-base-100 shadow-2xl px-3 sd:pt-0 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/2 xz:w-full">
							<figure><img src="/Preimushestva/piggy.svg" alt="Экономия ремонте" /></figure>
							<div className="card-body text-black  sd:w-8/12 xz:w-full">
								<h2 className="card-title">
									Экономия на ремонте
								</h2>
								<p className="text-slate-600 font-light sd:text-base xz:text-sm">
									Мы стремимся обеспечить нашим клиентам максимальную экономию ресурсов и средств. Наш опыт и эффективные методы работы позволяют нам оптимизировать бюджет проекта, не ущемляя при этом качества работ. Мы предоставляем прозрачную стоимость услуг и работаем с вами, чтобы найти наилучшие решения, соответствующие вашим требованиям и возможностям.
								</p>
							</div>
						</div>
					</div>


					<div className='flex sd:flex-row xz:flex-col'>

						<div className="rounded-none card lg:card-side bg-base-100 shadow-2xl px-3 sd:mb-0 xz:mb-6 sd:pt-0 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/2 xz:w-full">
							<figure><img src="/Preimushestva/time.svg" alt="Сроки ремонта" /></figure>
							<div className="card-body text-black  sd:w-8/12 xz:w-full">
								<h2 className="card-title">
									Сроки ремонта
								</h2>
								<p className="text-slate-600 font-light sd:text-base xz:text-sm">
									Мы понимаем, что для вас важны не только качество, но и сроки выполнения ремонта. Наша команда работает эффективно и ответственно, чтобы проект завершался в согласованные с вами сроки. Мы предоставляем реалистичные сроки выполнения работ, соблюдая их и гарантируя, что вы получите свое обновленное пространство вовремя. Надежность и точность в соблюдении сроков - наши важные принципы.
								</p>
							</div>
						</div>


						<div className="rounded-none card lg:card-side bg-base-100 shadow-2xl px-3 sd:pt-0 xz:pt-5 sd:mx-2 xz:mx-0 sd:w-1/2 xz:w-full">
							<figure><img src="/Preimushestva/suitcase.svg" alt="Опыт мастеров" /></figure>
							<div className="card-body text-black sd:w-8/12 xz:w-full">
								<h2 className="card-title">
									Опыт мастеров
								</h2>
								<p className="text-slate-600 font-light sd:text-base xz:text-sm">
									Наши мастера обладают богатым опытом в сфере ремонта и строительства. Мы гордимся квалификацией и профессионализмом наших специалистов, которые успешно реализовали множество проектов различной сложности. Опыт наших мастеров позволяет нам эффективно решать технические задачи, предвидеть потенциальные проблемы и предлагать наилучшие решения для каждого клиента. С нами ваш проект будет в надежных руках опытных профессионалов.
								</p>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>

	)
}