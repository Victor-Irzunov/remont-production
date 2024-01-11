"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='py-10 bg-white' id="otzyvy">
			<div className='container mx-auto'>

				<h4 className='text-center text-2xl sm:text-4xl font-bold mb-14 uppercase text-black'>
					Что говорят о нас клиенты
				</h4>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3 '>
								<p className='font-semibold mb-2'>
									Мигель Сергей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Сотрудничество с вашей компанией превзошло все ожидания. Ремонт нашей квартиры был выполнен профессионально и в срок. Каждый этап работ осуществлялся с высокой точностью, а результат превзошел наши ожидания. Благодарим за внимание к деталям и отличное качество!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Сацук Матвей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Ваша команда продемонстрировала высокий профессионализм при ремонте нашего офиса. Отличная координация работ, четкое соблюдение сроков и внимание к нашим корпоративным потребностям. Результат превзошел наши ожидания, и теперь наш офис — это пространство, которое вдохновляет на эффективную работу.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Деркач Алеся
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Благодарим за профессиональный и качественный ремонт нашего частного дома. Ваша команда проявила внимание к каждой детали, начиная от планировки и заканчивая отделкой. Мы оцениваем ваш индивидуальный подход и тщательное внимание к нашим пожеланиям.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Ломач Алексей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Отличный сервис по ремонту ванны! Все было сделано профессионально, с учетом всех наших предпочтений. Результат превзошел наши ожидания. Теперь ванная комната выглядит стильно и функционально. Спасибо за ваше терпение и внимание к деталям.
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 text-black">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Лукашевич Гена
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-[#e8b846]" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Наша новая кухня - просто великолепна! Спасибо вашей команде за отличный ремонт. Все было продумано до мелочей, начиная от дизайна и заканчивая установкой бытовой техники. Теперь наша кухня — это не просто место приготовления пищи, а уютное пространство для всей семьи.
								</p>
							</div>
						</div>
					</div>


				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp