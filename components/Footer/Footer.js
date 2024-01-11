"use client"
import Image from 'next/image';
import FormOrder from '../Form/Form';

export default function Footer() {
	return (
		<footer
			className="bg-[#e8b846] pt-16"
			id='contacts'
		>
			<div className='container mx-auto flex justify-between pb-16 sd:flex-row xz:flex-col'>


				<div className='sd:-mr-10 xz:-mr-0 z-50'>

					<div className='flex sd:flex-row xz:flex-col items-center justify-center'>
						<div className='w-52 h-52 bg-[#292d33] py-5 px-4 text-white m-3 shadow-2xl'>
							<div className='flex justify-center items-center'>
								<Image src='/phone.svg' alt='Телефон для заказа ремонта' width={60} height={60} />
							</div>
							<div className='text-center mt-4'>
								<h6 className='uppercase font-semibold text-xl'>
									Телефон
								</h6>
								<div className='mt-2'>
									<a href='tel:8029' className=''>
										+375 29 000-00-00
									</a>
								</div>
							</div>
						</div>
						<div className='w-52 h-52 bg-[#292d33] py-5 px-4 text-white m-3  shadow-2xl'>
							<div className='flex justify-center items-center'>
								<Image src='/time.svg' alt='Режим работы для заказа ремонта' width={60} height={60} />
							</div>
							<div className='text-center mt-4'>
								<h6 className='uppercase font-semibold text-xl'>
									Режим работы
								</h6>
								<div className='mt-2'>
									<p className=''>
										8:00-20:00
									</p>
									<p className='uppercase  text-xs mt-2'>
										Вых: Воскресение
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex sd:flex-row xz:flex-col items-center justify-center'>
						<div className='w-52 h-52 bg-[#292d33] py-5 px-4 text-white m-3 shadow-2xl'>
							<div className='flex justify-center items-center'>
								<Image src='/viber.svg' alt='Мессенджер для заказа ремонта' width={60} height={60} />
							</div>
							<div className='text-center mt-4'>
								<h6 className='uppercase font-semibold text-xl'>
									Viber
								</h6>
								<div className='mt-2'>
									<a href='viber://chat?number=%2B375' className=''>
										+375 29 000-00-00
									</a>
								</div>
							</div>
						</div>
						<div className='w-52 h-52 bg-[#292d33] py-5 px-4 text-white m-3 shadow-2xl'>
							<div className='flex justify-center items-center'>
								<Image src='/instagram.svg' alt='Instagram для заказа ремонта' width={60} height={60} />
							</div>
							<div className='text-center mt-4'>
								<h6 className='uppercase font-semibold text-xl'>
									Instagram
								</h6>
								<div className='mt-2'>
									<a href='https://www.instagram.com/webproduct_developer' target='_blank'>
										@webproduct_developer
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>



				<div className='w-full bg-white z-0  shadow-2xl'>
					<FormOrder title btn='Отправить' />
				</div>

			</div>

			<aside className="h-20 pt-6 bg-[#333333]">
				<div className='container mx-auto text-center'>
					<p className='text-gray-200 xs:text-xs xz:text-[10px] font-light' >
						Copyright © 2024 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 underline'> VI:TECH</a>.
						{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
					</p>
				</div>
			</aside>
		</footer >
	)
}