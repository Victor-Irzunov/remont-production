import { BtnComp } from "@/components/btn/BtnComp"
import Modal from "@/components/modal/Modal"
import Image from "next/image"


const SecondSection = ({handleOrderClick}) => {
	return (
		<section className="bg-[#e8b846] py-28">
			<div className='container mx-auto'>
				<div className='relative min-h-screen'>
					<div className='w-48 h-48 z-10 rounded-full bg-white absolute sd:right-32 xz:-right-2 -top-20' />

					<div className='absolute z-20 t-1/2 left-0'>
						<Image src='/secondSection/fon-second.webp' alt='Изображение на сайте по ремонту'
							width={950} height={650} style={{ zIndex: 20 }}
						/>
					</div>

					<div className='absolute sd:-left-10 xz:left-0 sd:bottom-28  xz:bottom-96 xy:bottom-[29rem] z-10'>
						<Image src='/lines.svg' alt='Линии' width={150} height={150} className="" />
					</div>

					<div className='absolute right-0 sd:bottom-20 xz:-bottom-16 xy:-bottom-0 z-30'>
						<div className="card sd:w-96 xz:w-auto rounded-none shadow-xl bg-white">
							<div className="card-body text-black">
								<h2 className="card-title">
									Профессиональная консультация
								</h2>
								<p>
									Получите профессиональную консультацию по всем вопросам, связанным с ремонтом. Наши эксперты с удовольствием поделятся опытом и предоставят вам необходимую информацию для успешного выполнения вашего проекта. Мы готовы ответить на ваши вопросы и помочь вам принять правильные решения.
								</p>
								<div className="card-actions justify-end mt-4">
								<BtnComp title='Заказать звонок' handleOrderClick={handleOrderClick} />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</section>
	)
}

export default SecondSection