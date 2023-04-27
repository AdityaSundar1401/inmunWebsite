/** @format */

import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';

const ConDet = ({ dropDown, drop, height, name }) => {
	// Drop Down Functions

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

			<div className={isMobile ? 'confMobile conf' : 'conf'}>
				<h1 className='pageTitle'>Conference Details</h1>
				<p>
					Dress code : Indian Formals for Parliamentary Committees, Western
					Formals for MUN Committees (Girls: Formal shirt/top, trousers.
					Comfortable shoes. (school shoes are fine) Boys: Formal
					shirt/trousers. Blazer optional. Tie compulsory. Formal shoes (school
					shoes are fine))
				</p>
				<p>Conference date : 28th to 30th August</p>
				<p>
					Venue : Inventure Academy, Whitefield, SH 35, Bengaluru Policy : Will
					Update Later Fees : Will update later
				</p>
				<p>Bengaluru Policy : Will Update Later </p>
				<p>Fees : Will update later</p>
				<div className='timeline'>
					<h1 className='timeline-heading'>Timeline of important events</h1>
					<div className='timeline-body'>
						<div className='vertical-line' />
						<div className='content-body'>
							<div className='date right'>
								<div className='content'>
									<h2>30th April</h2>
									<p>Registratins open</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>30th June</h2>
									<p>Background guides released</p>
								</div>
							</div>
							<div className='date right'>
								<div className='content'>
									<h2>2nd August </h2>
									<p>Registrations close</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>9th August </h2>
									<p>Final allocations and country matrices released</p>
								</div>
							</div>
							<div className='date right'>
								<div className='content'>
									<h2>22nd August </h2>
									<p>Final day for position paper submission</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>24th-26th August </h2>
									<p>Pre-conference training</p>
								</div>
							</div>
							<div className='date right'>
								<div className='content'>
									<h2>28th August </h2>
									<p>INMUN begins!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

// April 30th - Registrations open
// June 30th - Background Guide released
// 2nd August - Registrations close
// 9th August - Final allocations released / Country matrix released
// 22nd August - Final day for Position Paper Submission
// 24-26th August - Pre conference training
// 28th August- INMUN Begins!

export default ConDet;
