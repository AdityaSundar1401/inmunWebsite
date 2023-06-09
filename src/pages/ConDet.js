/** @format */

import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import handbook from './confHandbook.jpeg';
import pdfhandbook from './confHandbook2.pdf';
import comingSoon from './comingSoon.jpeg';

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
				<div
					className='grid-4 all-center'
					style={{
						margin: 'auto',
						width: '90%',
						placeItems: 'center',
						gridGap: '1rem',
					}}>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<a
							style={{
								width: '100%',
								height: '209px',
							}}
							className='detImages'
							href={pdfhandbook}
							target='_blank'>
							<img
								src={handbook}
								
								style={{
									border: 'solid',
									borderColor: 'black',
									borderWidth: 'auto',
								}}
							/>
						</a>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px auto',
							}}
							className='text-center'>
							Conference Handbook
						</h2>
					</div>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<img
							src={comingSoon}
							style={{
								border: 'solid',
								borderColor: '#ff8500',
								borderWidth: 'auto',
								height: '210.08px',
								width: '150px',
								objectFit: 'cover',
							}}
						/>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px auto',
							}}
							className='text-center'>
							Conference Policy
						</h2>
					</div>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<img
							src={comingSoon}
							style={{
								border: 'solid',
								borderColor: '#ff8500',
								borderWidth: 'auto',
								height: '210.08px',
								width: '150px',
								objectFit: 'cover',
							}}
						/>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px 2px',
							}}
							className='text-center'>
							Rules of Procedure
						</h2>
					</div>
					<div
						style={{
							width: '150px',
							height: 'auto',
						}}>
						<img
							src={comingSoon}
							style={{
								border: 'solid',
								borderColor: '#ff8500',
								borderWidth: 'auto',
								height: '210.08px',
								width: '150px',
								objectFit: 'cover',
							}}
						/>
						<h2
							style={{
								maxWidth: '150px',
								color: 'black',
								margin: '0px 2px',
							}}
							className='text-center'>
							Conference Schedule
						</h2>
					</div>
				</div>
				<div className='timeline'>
					<h1 className='timeline-heading'>Timeline of important events</h1>
					<div className='timeline-body'>
						<div
							className='vertical-line'
							style={isMobile ? { height: '1550px' } : {}}
						/>
						<div className='content-body'>
							<div className='date right'>
								<div className='content'>
									<h2>30th April</h2>
									<p>Registrations open</p>
								</div>
							</div>
							<div className='date left'>
								<div className='content'>
									<h2>20th July</h2>
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
			{!isMobile && (
				<div>
					<Footer />
				</div>
			)}
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
