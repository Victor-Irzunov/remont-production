"use client"
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';

export default function Header() {

	return (
		<header className='bg-base-100 sticky top-0 z-50 w-full'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<Image src='/logo/logo.webp' alt='логотип' width={80} height={40} />
					</div>
					<div className="navbar-end">
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-circle mr-1">
								<Image src='/menu.svg' alt='Кнопка меню' width={60} height={60} />
							</label>
							<ul
								tabIndex={0}
								className="text-black dropdown-content mt-1 w-52 menu   p-2 bg-white shadow rounded-box"
							>
								<li>
									<LinkScroll
										to="main"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
										
									>
										Главная
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="catalog"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										Услуги
									</LinkScroll>
								</li>

								<li>
									<LinkScroll
										to="preimushestva"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										Преимущества
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="contacts"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer hover:bg-slate-300"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}