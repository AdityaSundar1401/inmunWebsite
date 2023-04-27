/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import '../App.css';
import vietnam from './Secretariat/Images/vietnam.png';
import bluestar from './Secretariat/Images/bluestar.jpeg';
import wwii from './Secretariat/Images/heil_hitler.jpeg';
import bangalore from './Secretariat/Images/bengaluru.jpeg';
import health from './Secretariat/Images/health.jpeg';
import refugees from './Secretariat/Images/refugees.jpeg';
import unep from './Secretariat/Images/unep.jpeg';
import Footer from '../layout/Footer';

const Committee = ({ match, dropDown, drop, height, name }) => {
	const [comm, setComm] = useState([]);

	const Down = (comms) => {
		dropDown(comms);
	};

	const heightfunc = (comms) => {
		height(comms);
	};

	const namefunc = (comms) => {
		name(comms);
	};

	useEffect(() => {
		const name = match.params.category;
		if (name === 'general-assemblies') {
			setComm(commGADetails);
		} else {
			if (name === 'regional-bodies') {
				setComm(commRBDetails);
			} else {
				if (name === 'crisis-committees') {
					setComm(commCRDetails);
				}
			}
		}
	}, []);

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

	const commGADetails = [
		{
			commName: 'UNHCR',
			agenda: 'Access to jobs and financial services',
			background: refugees,
			directors: ['Aditya Narayan'],
		},
		{
			commName: 'UNEP',
			agenda:
				'Addressing the problems that arise from land degradation and deforestation',
			background: unep,
			directors: ['Ali Oez'],
		},
	];

	const commRBDetails = [
		{
			commName: 'Lok Sabha',
			agenda: 'Achieving the 2030 goal of universal health coverage in India',
			background: health,
			directors: ['Aashna Kumar'],
		},
		{
			commName: 'Rajya Sabha',
			agenda: 'Deliberation over the reservation system in India',
			background: bangalore,
			directors: ['Ali Oez'],
		},
		{
			commName: 'BBMP',
			agenda: 'The impact of unplanned urbanisation in the whitefield area ',
			background: bangalore,
			directors: ['Ameya Mundkur'],
		},
	];
	const commCRDetails = [
		{
			commName: 'Committee X',
			agenda: 'The Vietnam War',
			background: vietnam,
			directors: ['Abhinav Vallur'],
		},
		{
			commName: 'Union Cabinet',
			agenda: 'Operation Bluestar',
			background: bluestar,
			directors: ['Gautam Chari'],
		},
		{
			commName: 'JCC',
			agenda: 'WWII',
			background: wwii,
			directors: ['Aditya Sundar', 'Vivin Anand'],
		},
	];

	return (
		<div>
			<Navbar
				dropDown={Down}
				drop={drop}
				height={heightfunc}
				name={namefunc}
				classname='navbarpage'
				show={show}
			/>
			<div className={`grid-${comm.length}  committee`}>
				{comm.map((comm, index) => (
					<Link
						to={`/committees/${comm.name}`}
						target='_blank'
						className='category-div'
						key={index}>
						<div className='overlay-category' />
						<img
							src={comm.background}
							alt='not working lmao'
							style={{
								position: 'absolute',
								objectFit: 'cover',
								height: '100%',
								zIndex: '-5',
								opacity: '0.6',
								margin: 'auto',
							}}
						/>
						<h1>{comm.commName}</h1>
					</Link>
				))}
			</div>
			<div style={{ position: 'relative', top: '110px' }}>
				<Footer />
			</div>
		</div>
	);
};

export default Committee;
