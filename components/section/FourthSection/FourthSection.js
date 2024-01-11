import { BtnComp } from "@/components/btn/BtnComp"
import Image from "next/image"


const FourthSection = ({handleOrderClick}) => {
	return (
		<section className="bg-[#e8b846] py-28">
			<div className='container mx-auto'>
				<div className='relative sd:min-h-screen xz:min-h-[150vh]'>
					<div className='w-48 h-48 z-10 rounded-full bg-white absolute sd:right-32 xz:right-0 -top-20' />

					<div className='absolute z-20 t-1/2 sd:left-52 xz:left-0  shadow-2xl'>
						<img src='/fourthSection/5.webp' alt='Изображение на сайте по ремонту квартир'
							 style={{ zIndex: 20 }} className="sd:w-[450px] xz:w-[300px]"
						/>
					</div>

					<div className='absolute -left-30 sd:bottom-28 xz:bottom-[33rem] z-10'>
						<Image src='/lines.svg' alt='Линии' width={150} height={150} className="" />
					</div>

					<div className='h-80 w-[40rem] z-10 sd:block xz:hidden bg-white absolute sd:right-0 xz:right-0 bottom-0' />

					<div className='absolute sd:right-48 xz:right-0 sd:bottom-40 xz:-bottom-0 z-30'>
						<div className="card sd:w-96 xz:w-auto rounded-none shadow-xl bg-white">
							<div className="card-body text-black">
								<h2 className="card-title">
									Расчёт стоимости ремонта
								</h2>
								<p>
									Узнайте точную стоимость вашего будущего ремонта с нашим профессиональным расчётом. Мы предоставляем прозрачные и честные цены, учитывая каждый этап работ и ваши индивидуальные потребности. Наши специалисты готовы ответить на ваши вопросы и подробно проконсультировать вас по всем аспектам предстоящего ремонта.
								</p>
								<div className="card-actions justify-end mt-4">
								<BtnComp title='Получить расчёт' handleOrderClick={handleOrderClick} />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default FourthSection