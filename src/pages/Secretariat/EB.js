/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import abhi from './Images/abhi1.jpg';
import om from './Images/om1.jpeg';
import adi from './Images/adi1.jpeg';
import johann from './Images/johann1.jpeg';
import vivin from './Images/vivin1.png';
import aashna from './Images/aashna1.jpeg';
import narayan from './Images/narayan1.jpeg';
import tommy from './Images/tommy.jpeg';
import chari from './Images/chari1.jpeg';
import arnav from './Images/arnav.webp';
import dafoe from './Images/dafoe.webp';
import ameya from './Images/ameya1.jpeg';
import lasya from './Images/lasya1.jpeg';
import abhimanyu from './Images/abhimanyu1.jpeg';
import ashutosh from './Images/ashutosh1.jpeg';
import hari from './Images/hari1.jpeg';
import sud from './Images/sud.webp';
import ananya from './Images/ananya1.jpeg';
import ali from './Images/ali.jpeg';
// background images
import vietnam from './Images/vietnam.png';
import bluestar from './Images/bluestar.jpeg';
import wwii from './Images/heil_hitler.jpeg';
import bangalore from './Images/bengaluru.jpeg';
import health from './Images/health.jpeg';
import refugees from './Images/refugees.jpeg';
import unep from './Images/unep.jpeg';
import { isMobile } from 'react-device-detect';

const Sec = ({ dropDown, drop, height, name }) => {
	const usgs = [
		{
			post: 'Entertainment',
			names: ['Abhinav Vallur', 'Vivin Anand'],
			imgs: [abhi, vivin],
		},
		{
			post: 'Communication',
			names: ['Aditya Sundar', 'Johann Ullatil (IHOP)'],
			imgs: [adi, johann],
		},
	];

	const finance = {
		post: 'Finance',
		names: ['Aditya Narayan', 'Aashna Kumar'],
		imgs: [narayan, aashna],
	};

	const commsEb = [
		{
			commName: 'UNHCR',
			agenda: 'Access to jobs and financial services',
			background: refugees,
			directors: [
				{
					name: 'Aditya Narayan',
					image: narayan,
					post: 'Chairperson',
					des: 'Greetings delegate, I’m Aditya Narayan from Grade 10 and I’ll be serving as your assistant director for the AIPPM. I only started MUNning a couple of years ago, but have made extravagant strides since. From winning at HMUN to international MUNs, I’ve experienced it all. In my free time I like to binge-watch sitcoms, play football and love to read science-fiction. I look forward to interacting with everyone soon! May the force be with you!',
				},
			],
			ads: [
				{
					name: 'Siddhanth Saravanan',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'UNEP',
			agenda:
				'Addressing the problems that arise from land degradation and deforestation',
			background: unep,
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
					des: "Hello delegates, I'm Ananya Jain and I'm going to be the assistant director (AD) for UNICEF this year. I thoroughly enjoy the debate that goes on during committee and am excited to be on the executive board for the very first time. Our agenda has immense importance especially right now, so I’m looking forward to good debate so that we as a committee come up with a comprehensive resolution to help better the lives of the children around the world.",
				},
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Lok Sabha',
			agenda: 'Achieving the 2030 goal of universal health coverage in India',
			background: health,
			directors: [
				{
					name: 'Aashna Kumar',
					image: aashna,
					post: 'Chairperson',
					des: 'My name Is Aashna Kumar and it is my absolute honour to be your Director for INYP’s Civil Society this year. MUNning has been a central part of my high school life. I’ve bagged placements at HMUN, DSMUN, CJCMUN etc. have even had the honour of being part of the EB at HMUN so I’m looking forward to bringing my experience to INYP this year! A bit about myself: I absolutely love playing the piano, becoming friends with every dog I see, reading books, and bingeing every possible show on Netflix! I hope to see you guys in October, and I’m so excited to hear your views and ideas!',
				},
			],
			ads: [
				{
					name: 'Abhimanyu Balagopal',
					image: abhimanyu,
					des: "Hi, I am Abhimanyu Balagopal from grade 11 and I will be your assistant director for the Rajya Sabha. I have been participating in MUNs for the past 4 years, this is my 7th MUN and first time as a part of the EB. I have had the opportunity to participate in conferences in the Middle East and at the United Nations in New York. I look forward to seeing a lot of enlightening conversations and productive discourse during committee and of course some fun outside of committee. I truly believe that this year's Youth Parliament format will open every delegate's eyes to the problems we face as a country and as a world, and how they can be solved democratically.",
				},
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Rajya Sabha',
			agenda: 'Deliberation over the reservation system in India',
			background: bangalore,
			directors: [
				{
					name: 'Coming soon...',
					image: ali,
					post: 'Chairperson',
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
			ads: [
				{
					name: 'Hari Sai Harish',
					image: hari,
					des: 'My name is Hari, and I am an 11th grader at Inventure. My hobbies range from sports to public speaking to coding and I do my work very passionately. In pre-covid times I was an active MUNer and I’m looking forward to getting back into MUN. I have attended 4 MUNs physically, across various committees and have won Best Delegate in two of them, and Honourable Mentions in the others. I have never been part of the Executive Board before, and being an Assistant Director will give me the opportunity I have always craved for. It will be a new experience and I am greatly looking forward to make the most of it. I hope to help with hosting an eventful, disciplined, successful committee and for it to arrive at a favorable end resolution which we can proudly present later on.',
				},
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'BBMP',
			agenda: 'The impact of unplanned urbanisation in the whitefield area ',
			background: bangalore,
			directors: [
				{
					name: 'Ameya Mundkur',
					image: ameya,
					post: 'Chairperson',
					des: 'Hi delegates! I’m Ameya Mundkur. Music is one of my biggest passions, I love animals. I also enjoy talking to people. I can have the most random conversations ranging from 60’s rock bands and Harry Styles to issues around the world to how Phil from Modern Family is the wisest character. I never really enjoyed debates, but as soon as I started MUNing, my opinion on that completely changed. I’ve been MUNing for 2 years now, it’s been one of the most life changing, educational and incredibly fun experiences I’ve had. I’m super excited to see unique, divergent views lined with interesting debates to get the most inclusive, holistic and productive outcome in committee.',
				},
			],
			ads: [
				{
					name: 'Lasya Verma',
					image: lasya,
					des: 'Hello delegates! I am Lasya M Varma from grade 9. As a freshman, I haven’t had many MUN experiences. As a student of theatre and an inquisitive individual, I found Model United Nations to be a window into the wider political world and a great way to hone my speaking skills. Throughout middle school, I had a keen interest in MUN and signed up for MUN clubs led by my seniors, that came my way, which drove me a lot closer to the group of avid MUNners at my school. I am absolutely thrilled to be part of Inventure Youth Parliament this year, although I never imagined myself being on the opposite side of the table. I hope this excitement extends to delegates and I’m looking forward to fierce',
				},
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Committee X',
			agenda: 'The Vietnam War',
			background: vietnam,
			directors: [
				{
					name: 'Abhinav Vallur',
					image: abhi,
					post: 'Chairperson',
					des: 'Greeting delegates, this is Abhinav Vallur from 11AS and I will be serving as your co-director for UNICEF this year. I first took up MUN in 8th grade, and over the last few years my interest and involvement with MUN and debate has grown rapidly, which has fetched me awards in various reputable MUNs such as Harvard MUN and DSMUN to name a few. Along the way, I’ve picked up a myriad of skills, which have helped me in my other hobbies such as sprinting and music. When I’m not on the track or preparing for my next MUN, I will probably be rewatching Star Wars or some other iconic movie. And with that in mind, May the Force be with you.',
				},
			],
			ads: [
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
				{
					name: 'Coming soon...',
					image: ali,
					des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dolorem esse at maiores fugit dicta saepe, et blanditiis nobis nisi dolore odit odio itaque beatae tempore suscipit dolorum fuga? Veniam quis magni, voluptates totam repellat voluptate harum consequuntur expedita blanditiis quod error corporis ipsa neque quisquam dolorum veritatis quaerat earum.',
				},
			],
		},
		{
			commName: 'Union Cabinet',
			agenda: 'Operation Bluestar',
			background: bluestar,
			directors: [
				{
					name: 'Gautam Chari',
					image: chari,
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
		},
		{
			commName: 'Joint Crisis Committee',
			agenda: 'World War II',
			background: wwii,
			directors: [
				{
					name: 'Aditya Sundar',
					image: adi,
					post: 'Director of the Allies',
					des: 'Greetings delegates, this is Aditya Sundar from 11AS and I will be serving as Director for the Allies. I have done a number of MUNs, from HMUN India to DSMUN and have developed a certain attitude towards Crisis Committees specifically, which is why I am looking forward to see how you delegates decide to move through one of the most significant events in history. Apart from doing MUNs, I am also a musician and a science student, so that’s 3 things I am really passionate about. Hope to see you in committee and may the force be with you!',
				},
				{
					name: 'Johann Ulatill',
					image: johann,
					post: 'Crisis Director',
					des: "Hey delegates! I'm Vivin Anand, co-director for INMUN's JCC this year. While I have MUNned for years, participating in many conferences across India, Youth Parliament - as it is for many of you - is completely new for me, as well! I am looking forward to seeing how every delegate uniquely attempts to solve the the challenges facing Indian education. Outside of MUN, I am a huge sports fan, especially Cricket and MMA. I am also a massive metalhead. See you in committee!",
				},
				{
					name: 'Vivin Anand',
					image: vivin,
					post: 'Director of the Axis',
					des: "Hey delegates! I'm Vivin Anand, co-director for INMUN's JCC this year. I am looking forward to seeing how each and every delegate uniquely attempts to tackle the greatest and arguably most consequential war in modern history, from both sides! Outside of MUN, I am a huge sports fan, especially Cricket and Mixed Martial Arts and I love listening to and playing music. See you in committee!",
				},
			],
			ads: [
				{
					name: 'Sudyotman Sudershan',
					image: ali,
					des: "Hello delegates, I am Sudyotman Sudershan. I have been part of the MUN community for half a decade. I am absolutely excited to see our Joint Crisis Committee in action. I am looking forward to seeing how our committee will progress, and how the changing situation of the war will impact your decisions in face of threats both external and internal. See you in the War Room",
				},
				{
					name: 'Ashutosh Barman',
					image: ashutosh,
					des: 'I’ve always enjoyed a good debate, and am known to everyone close to me as the guy who argues too much - but it comes from a place of love. I’m passionate about sports, music, and anything to do with physics, and have been cursed by being a Ferrari fan. I love movies and games and really any sort of entertainment. Although I’ve been told otherwise, I firmly believe I have a good sense of humour. So if I make a “bad” joke - just laugh for my sanity. I am really looking forward to being on the board for this JCC, and if it lives up to my expectations, I promise it will be an unforgettable experience.',
				},
			],
		},
	];

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

	// JSX

	if (isMobile) {
		return (
			<div style={{ position: 'relative' }}>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div className='sec-box'>
					<h1 className='sec'>Secretariat</h1>
					<div style={{ marginTop: '50px' }}>
						<div
							className='all-center sec-gen-sec'
							style={{ marginBottom: '50px' }}>
							<img
								className='usg-pic'
								src={om}
								alt=''
							/>
							<h1>Om Mehta</h1>
							<h3>Secretary General</h3>
						</div>
						<div
							className='all-center sec-gen-sec'
							style={{ marginBottom: '50px' }}>
							<img
								className='usg-pic'
								src={chari}
								alt=''
							/>
							<h1>Gautam Chari</h1>
							<h3>Director General</h3>
						</div>
						<h3 className={'usgMobile usg-title'}>Under Secretary Generals</h3>

						<div className='grid-2 usg-box all-center'>
							{usgs.map((usg, idx) => (
								<div
									className='usg-category '
									key={idx}>
									<h1 className='all-center usg-post'>{usg.post}</h1>
									<div className='grid-2 all-center pic-box'>
										{usg.imgs.map((pic, index) => (
											<div
												key={index}
												className='usg-pics'>
												<img
													className='usg-pic'
													src={pic}
													alt=''
												/>
												<h1 className='usg-name'>{usg.names[index]}</h1>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
						<div className='usg-box all-center usgBoxMobile'>
							<div className='usg-category'>
								<h1 className='all-center usg-post'>{finance.post}</h1>
								<div className='grid-2 all-center pic-box'>
									{finance.imgs.map((pic, index) => (
										<div
											key={index}
											className='usg-pics'>
											<img
												className='usg-pic'
												src={pic}
												alt=''
											/>
											<h1 className='usg-name'>{finance.names[index]}</h1>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='eb-box '>
					<h1 className='sec'>Executive Board</h1>
					<br />
					{commsEb.map((comm, index) => (
						<div
							key={index}
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
									objectFit: 'cover',
								}}
							/>
							<div style={{ zIndex: '100', positve: 'relative' }}>
								<div className='eb-title ebMobile'>
									<h1>{comm.commName} </h1>
									<h6>Agenda: {comm.agenda}</h6>
								</div>
								<div
									className={`grid-${comm.directors.length} all-center directorBox`}>
									{comm.directors.map((director, idx) => (
										<div key={idx}>
											<img
												src={director.image}
												className='directorImage'
											/>
											<h1>{director.name}</h1>
											<h3>{director.post}</h3>
											<p style={{ maxWidth: '90%' }}>{director.des}</p>
										</div>
									))}
								</div>
								<div
									className={`grid-${comm.ads.length} all-center directorBox`}>
									{comm.ads.map((ad, ind) => (
										<div key={ind}>
											<img
												src={ad.image}
												className='directorImage'
											/>
											<h1>{ad.name}</h1>
											<h3 style={{ color: 'white' }}>Assistant Director</h3>
											<p style={{ maxWidth: '90%' }}>{ad.des}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div style={{ position: 'relative' }}>
				<Navbar
					dropDown={Down}
					drop={drop}
					height={heightfunc}
					name={namefunc}
					classname='navbarpage'
					show={show}
				/>
				<div className='sec-box'>
					<h1 className='sec'>Secretariat</h1>
					<div style={{ marginTop: '50px' }}>
						<div
							className='grid-2'
							style={{ maxWidth: '900px', margin: 'auto' }}>
							<div
								className='all-center sec-gen-sec'
								style={{ marginBottom: '50px' }}>
								<img
									className='usg-pic'
									src={om}
									alt=''
								/>
								<h1>Om Mehta</h1>
								<h3>Secretary General</h3>
							</div>
							<div
								className='all-center sec-gen-sec'
								style={{ marginBottom: '50px' }}>
								<img
									className='usg-pic'
									src={chari}
									alt=''
								/>
								<h1>Gautam Chari</h1>
								<h3>Director General</h3>
							</div>
						</div>
						<h3 className={'usg-title'}>Under Secretary Generals</h3>

						<div className='grid-2 usg-box all-center'>
							{usgs.map((usg, idx) => (
								<div
									className='usg-category '
									key={idx}>
									<h1 className='all-center usg-post'>{usg.post}</h1>
									<div className='grid-2 all-center pic-box'>
										{usg.imgs.map((pic, index) => (
											<div
												key={index}
												className='usg-pics'>
												<img
													className='usg-pic'
													src={pic}
													alt=''
												/>
											</div>
										))}
										{usg.names.map((name, ind) => (
											<h1
												className='usg-name'
												key={ind}>
												{name}
											</h1>
										))}
									</div>
								</div>
							))}
						</div>
						<div className='usg-box all-center'>
							<div className='usg-category'>
								<h1 className='all-center usg-post'>{finance.post}</h1>
								<div className='grid-2 all-center pic-box'>
									{finance.imgs.map((pic, index) => (
										<div
											key={index}
											className='usg-pics'>
											<img
												className='usg-pic'
												src={pic}
												alt=''
											/>
										</div>
									))}
									{finance.names.map((name, ind) => (
										<h1
											className='usg-name'
											key={ind}>
											{name}
										</h1>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='eb-box'>
					<h1 className='sec'>Executive Board</h1>
					<br />
					{commsEb.map((comm, index) => (
						<div
							key={index}
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
									<h1>{comm.commName} </h1>
									<h6>Agenda: {comm.agenda}</h6>
								</div>
								<div
									className={`grid-${comm.directors.length} all-center directorBox`} style={{alignItems: 'start', margin: 'auto'}}>
									{comm.directors.map((director, idx) => (
										<div key={idx} style={{margin: '0px auto'}}>
											<img
												src={director.image}
												className='directorImage'
											/>
											<h1>{director.name}</h1>
											<h3>{director.post}</h3>
											<p>{director.des}</p>
										</div>
									))}
								</div>
								<div
									className={`grid-${comm.ads.length} all-center directorBox`} style={{alignItems: 'start', margin: 'auto'}}>
									{comm.ads.map((ad, ind) => (
										<div key={ind} style={{margin: '0px auto'}}>
											<img
												src={ad.image}
												className='directorImage'
											/>
											<h1>{ad.name}</h1>
											<h3 style={{ color: 'white' }}>Assistant Director</h3>
											<p>{ad.des}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</div>
		);
	}
};

export default Sec;
