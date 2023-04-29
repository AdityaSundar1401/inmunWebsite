/** @format */

import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../layout/Navbar';
import samu from '../Secretariat/Images/chari.jpeg';
import arnav from '../Secretariat/Images/arnav.webp';
import dafoe from '../Secretariat/Images/dafoe.webp';
import union from '../../icons/IUNION.png';
import ali from '../Secretariat/Images/ali.jpeg';

// background images

import bluestar from '../Secretariat/Images/bluestar.jpeg';
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
		commName: 'Union Cabinet',
		icon: union,
		agenda: 'Operation Bluestar',
		commDesc:
			'Human Nature Pursues Strife. And this was the case in 1984, when India experienced one of its darkest periods. Operation Blue Star resulted in the death of civilians and militants and was considered a breach of the sanctity of one of the holiest places on Earth. Delegates must take on historical roles and engage in dynamic crisis simulations to address the evolving crisis by responding to changing events and challenges, and consider the implications of the operation on regional and international security. Access to the Command Centre shows you are one of the most powerful people in India, but with great power comes great responsibility. Can you handle it?',
		background: bluestar,
		directors: [
			{
				name: 'Gautam Chari',
				image: samu,
				post: 'Prime Minister',
				des: 'Hi delegates, I am Gautam and am a student from grade 11 AS. It is my distinct honour to serve as the director of the Rajya Sabha this year. Through the years MUN has given me the opportunity to develop a unique set of skills, including public speaking, debating and most importantly the courage to think on my feet and be confident in what I say. As such, I hope to create an atmosphere that enhances your development and safeguards the legacy left behind by my very competent seniors. Cannot wait to see you all in committee and may the force be with you!',
			},
		],
		ads: [
			{
				name: 'Arnav Agarwal',
				image: ali,
				des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
			},
			{
				name: 'Coming soon...',
				image: ali,
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
								marginTop: '30px',
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

