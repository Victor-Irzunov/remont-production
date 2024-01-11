"use client"
import { BtnComp } from '@/components/btn/BtnComp'
import Modal from '@/components/modal/Modal'
import DelaemSection from '@/components/section/DelaemSection/DelaemSection'
import FifthSection from '@/components/section/FifthSection/FifthSection'
import FourthSection from '@/components/section/FourthSection/FourthSection'
import Preimushestva from '@/components/section/Preimushestva/Preimushestva'
import SecondSection from '@/components/section/SecondSection/SecondSection'
import ThirdSection from '@/components/section/ThirdSection/ThirdSection'
import SliderComp from '@/components/sliderComp/SliderComp'
import { useState } from 'react'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <main className="overflow-x-hidden" id='main'>
      <section className="sd:min-h-screen xz:h-auto xz:pb-36 xz:pt-12 sd:pb-0 sd:pt-0 xz: hero" style={{ backgroundImage: 'url("/background/fon.webp")' }}>
        <div className='container mx-auto'>
          <div className="flex sd:justify-end xz:justify-start flex-wrap">
            <div className='flex sd:w-1/3 xz:w-full'>
              <div className="sd:pt-8 xz:pt-0">
                <h1 className="sd:text-5xl xz:text-4xl text-white">
                  Ремонт под ключ в Минске
                </h1>
              </div>
              <div className='sd:w-8 xz:w-6 bg-[#e8b846] sd:h-[75vh] xz:h-auto sd:mr-8 xz:mr-0 ml-3' />
            </div>
            <div className='text-white/90 pt-8 sd:w-1/3 xz:w-full'>
              <p className="sd:mb-10 xz:mb-5 font-light leading-8 sd:text-lg xz:text-base sd:pr-0 xz:pr-3">
                Профессиональный ремонт под ключ в Минске от опытных мастеров. Мы предоставляем полный спектр услуг по обновлению и улучшению вашего жилья. От косметического ремонта до капитального строительства, мы заботимся о каждой детали, чтобы ваш дом стал идеальным местом для жизни. Доверьте нам свой проект, и мы сделаем все возможное для того, чтобы воплотить ваши идеи в реальность.
              </p>
              <BtnComp title='Нужна консультация' handleOrderClick={handleOrderClick} />
            </div>
          </div>
        </div>
      </section>

      <DelaemSection />

      <SecondSection handleOrderClick={handleOrderClick} />

      <Preimushestva />

      <ThirdSection  handleOrderClick={handleOrderClick} />

      <FourthSection handleOrderClick={handleOrderClick} />

      <SliderComp />

      <FifthSection handleOrderClick={handleOrderClick} />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  )
}
