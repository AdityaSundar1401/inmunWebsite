/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../layout/Navbar';
import abhi from '../Secretariat/Images/abhi.jpg';
import omu from '../Secretariat/Images/omu.jpeg';
import adi from '../Secretariat/Images/adi.jpeg';
import ullu from '../Secretariat/Images/ullu.jpeg';
import vivin from '../Secretariat/Images/vivin.png';
import aashna from '../Secretariat/Images/aashna.jpeg';
import narayan from '../Secretariat/Images/narayan.jpeg';
import tommy from '../Secretariat/Images/tommy.jpeg';
import samu from '../Secretariat/Images/samu.jpeg';
import arnav from '../Secretariat/Images/arnav.webp';
import dafoe from '../Secretariat/Images/dafoe.webp';
import ameya from '../Secretariat/Images/ameya.jpeg';
import lasya from '../Secretariat/Images/lasya.jpeg';
import abbay from '../Secretariat/Images/abbay.jpeg';
import barman from '../Secretariat/Images/barman.jpeg';
import hari from '../Secretariat/Images/hari.jpeg';
import sud from '../Secretariat/Images/sud.webp';
import ananya from '../Secretariat/Images/ananya.jpeg';
import ali from '../Secretariat/Images/ali.jpeg';
import bbmp from '../icons/IBBMP.png';
import lok from '../icons/ILOK.png';
import rajya from '../icons/IRAJYA.png';
import unep from '../icons/IUNEP.png';
import unhcr from '../icons/IUNHCR.png';
import union from '../icons/IUNION.png';
import jcc from '../icons/IJCC.png';
import x from '../icons/IX.png';

// background images
import vietnam from '../Secretariat/Images/vietnam.png';
import bluestar from '../Secretariat/Images/bluestar.jpeg';
import wwii from '../Secretariat/Images/heil_hitler.jpeg';
import bangalore from '../Secretariat/Images/bengaluru.jpeg';
import health from '../Secretariat/Images/health.jpeg';
import refugees from '../Secretariat/Images/refugees.jpeg';
import env from '../Secretariat/Images/unep.jpeg';
import Footer from '../../layout/Footer';

const DetComm = ({ match, dropDown, drop, height, name }) => {
	const Down = (comms) => {
		dropDown(comms);
	};

	const heightfunc = (comms) => {
		height(comms);
	};

	const namefunc = (comms) => {
		name(comms);
	};

	// Scrolling Navbar
	const [show, setShow] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const controlNavbar = () => {
		if (window.scrollY > lastScrollY && window.scrollY > 300) {
			setShow(false);
		} else {
			setShow(true);
		}

		setLastScrollY(window.scrollY);
	};
	useEffect(() => {
		setShow(true);
	}, []);
	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const comm = {
		commName: 'UNEP',
		icon: unep,
		agenda:
			'Addressing the problems that arise from land degradation and deforestation',
		background: env,
		commDesc:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
		directors: [
			{
				name: 'Ali Oez',
				image: ali,
				post: 'Chairperson',
				des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			},
		],
		ads: [
			{
				name: 'Ananya Jain',
				image: ananya,
				des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			},
			{
				name: 'Tom Thomas',
				image: tommy,
				des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			},
		],
	};

	return (
		<Fragment>
			<Navbar
				dropDown={Down}
				drop={drop}
				height={heightfunc}
				name={namefunc}
				classname='navbarpage'
				show={show}
			/>{' '}
			<div style={{ position: 'relative', top: '120px' }}>
				<div style={{ backgroundColor: 'white' }}>
					<div
						className='container text-center '
						style={p1}>
						<img
							className='img round-img stylea center'
							src={comm.icon}
							alt='Alt...'></img>
						<div className='large text-center headfont'>{comm.commName}</div>
						<h1
							className='headfont'
							style={{ fontWeight: 'normal', fontSize: '30px' }}>
							{comm.agenda}
						</h1>
						<br />
						<h2
							className='generalfont2'
							style={mainbody}>
							{comm.commDesc}
						</h2>
						<div
							style={{
								margin: 'auto',
							}}>
							<div
								className='btn btn-primary '
								style={{
									width: '200px',
									height: '50px',
									borderRadius: '20px',
								}}>
								<a>
									<h3>Background Guide</h3>
								</a>
							</div>
							<div
								className='btn btn-secondary '
								style={{
									width: '200px',
									height: '50px',
									borderRadius: '20px',
								}}>
								<a>
									<h3>Country Matrix</h3>
								</a>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />

				<div
					style={{ position: 'relative' }}
					className='comm-div'>
					<div className='overlay-comm' />
					<img
						src={comm.background}
						alt='not working lmao'
						style={{
							position: 'absolute',
							height: '100%',
							zIndex: '-5',
							opacity: '0.3',
							margin: 'auto',
						}}
					/>
					<div style={{ zIndex: '100', positve: 'relative' }}>
						<div className='eb-title'>
							<h1>Executive Board</h1>
						</div>
						<div
							className={`grid-${comm.directors.length} all-center directorBox`}
							style={{ gridGap: '3rem' }}>
							{comm.directors.map((director, idx) => (
								<div key={idx}>
									<img
										src={director.image}
										className='directorImage'
									/>
									<h1 style={{ color: 'white' }}>{director.name}</h1>
									<h3>{director.post}</h3>
									<p style={{ color: 'white' }}>{director.des}</p>
								</div>
							))}
						</div>
						<div
							className={`grid-${comm.ads.length} all-center directorBox`}
							style={{ gridGap: '3rem' }}>
							{comm.ads.map((ad, ind) => (
								<div key={ind}>
									<img
										src={ad.image}
										className='directorImage'
									/>
									<h1 style={{ color: 'white' }}>{ad.name}</h1>
									<h3 style={{ color: 'white' }}>Assistant Director</h3>
									<p style={{ color: 'white' }}>{ad.des}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div style={p3}>
					<div
						className='container text-center'
						style={{ backgroundColor: 'white' }}>
						<br />
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

const p1 = {
	fontFamily: 'Times New Roman, Times, serif',
	backgroundColor: '#white',
};

const mainbody = {
	fontSize: '20px',
	fontWeight: 'lighter',
	textAlign: 'justify',
	textJustify: 'inter-word',
	color: 'black',
};

const p2 = {
	height: '1305px',
	width: '100%',
	fontFamily: 'Times New Roman, Times, serif',
};

const p3 = {
	fontFamily: 'Times New Roman, Times, serif',
	backgroundColor: 'white',
};

const bgimage = {
	position: 'absolute',
	width: '100%',
	height: '1305px',
	opacity: '0.2',
	objectFit: 'cover',
};

export default DetComm;

// <div
// 					className='tint'
// 					style={p2}>
// 					<img
// 						className='imgForOverlay'
// 						src={inventure}
// 						alt=''
// 						style={bgimage}
// 					/>
// 					<br />
// 					<br />
// 					<div className='container text-center'>
// 						<div className='x-large text-center headfont'>EXECUTIVE BOARD</div>
// 						<br />
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.dirIcon.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.dirIcon.map((icon) => (
// 								<img
// 									className='img round-img center stylez'
// 									src={icon}
// 									alt='lmao ded'
// 								/>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.commDir.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commDir.map((director) => (
// 								<h1 style={{ paddingTop: '15px' }}>{director}</h1>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(${currState.commDir.length}, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commDir.map((director) => (
// 								<h1
// 									style={{
// 										fontWeight: 'normal',
// 										color: '#000b3a',
// 									}}>
// 									Director
// 								</h1>
// 							))}
// 							<br />
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.ADIcons.map((icon) => (
// 								<img
// 									className='img round-img center stylez'
// 									src={icon}
// 									alt=''
// 								/>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commAD.map((assistantlmao) => (
// 								<h1 style={{ paddingTop: '15px' }}>{assistantlmao}</h1>
// 							))}
// 						</div>
// 						<div
// 							style={{
// 								display: 'grid',
// 								gridTemplateColumns: `repeat(2, 1fr)`,
// 								gridGap: '1rem',
// 							}}>
// 							{currState.commAD.map((assistantlmao) => (
// 								<h1 style={{ fontWeight: 'normal', color: '#000b3a' }}>
// 									Assistant Director
// 								</h1>
// 							))}
// 						</div>
// 						<br />
// 						<br />
// 					</div>
// 				</div>
