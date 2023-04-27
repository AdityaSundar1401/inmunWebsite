/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import amber from '../galleryImages/amber.webp';
import alba from '../galleryImages/alba.jpeg';
import portman from '../galleryImages/portman.jpeg';
import maddie from '../galleryImages/maddie.jpeg';
import emma from '../galleryImages/emma.jpeg';

const Gallery = () => {
	const [index, setIndex] = useState(0);

	const images = [amber, alba, portman, maddie, emma];
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(() => {
			setIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3500);

		return () => {
			resetTimeout();
		};
	}, [index]);

	if (isMobile) {
		return (
			<div className='galleryBackground'>
				<h1 className='gallery'>Gallery</h1>
				<div className='slideshow'>
					<div
						className='slides'
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
						{images.map((image, index) => (
							<img
								src={image}
								alt="doesn't work"
								key={index}
								className='slide slideShowMobile'
							/>
						))}
					</div>
					<div className='slideFrame frameMobile'></div>

					<div className='slideShowDots'>
						{images.map((_, idx) => (
							<div
								key={idx}
								className={`slideShowDot${index === idx ? ' active' : ''}`}
								onClick={() => {
									setIndex(idx);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='galleryBackground'>
				<h1 className='gallery'>Gallery</h1>
				<div className='slideshow'>
					<div
						className='slides'
						style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
						{images.map((image, index) => (
							<img
								src={image}
								alt="doesn't work"
								key={index}
								className='slide'
							/>
						))}
					</div>
					<div className='slideFrame'></div>

					<div className='slideShowDots'>
						{images.map((_, idx) => (
							<div
								key={idx}
								className={`slideShowDot${index === idx ? ' active' : ''}`}
								onClick={() => {
									setIndex(idx);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default Gallery;
