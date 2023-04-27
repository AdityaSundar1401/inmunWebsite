/** @format */

import React, { Fragment } from 'react';
import inv from '../invLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons/faGooglePlusG';
import '../App.css';

const Footer = () => {
	return (
		<Fragment>
			<div style={footStyle}>
				<br />
				<img
					style={imgStyle}
					src={inv}
					alt=''
				/>
				<div style={addressStyle}>
					<div style={{ maxWidth: '300px' }}>
						<p>Inventure Academy, Whitefield</p>
						<p>SH 35, Near Dommasandra Circle,</p>
						<p>Kachamaranahalli, Bengaluru,</p>
						<p>Karnataka 562125</p>
					</div>
					<div style={{ maxWidth: '300px' }}>
						<b>MUN Coordinators</b>
						<p>Aparajita Bannerjee</p>
						<p>aparajita@inventureacademy.com</p>
						<p>Om's teacher chick</p>
						<p>teacher@inventureacademy.com</p>
					</div>
					<div style={{ maxWidth: '300px' }}>
						<b>Secretariat</b>
						<p>Om Mehta</p>
						<p>omrsmehta@gmail.com</p>
						<p>Hot man</p>
						<p>writetovivin@gmail.com</p>
					</div>
				</div>
				<ul
					className='socials'
					style={socialsStyle}>
					<li>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
					<li>
						<a
							href='https://youtube.com'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
					<li>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li>
						<a
							href='https://google.com'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faGooglePlusG} />
						</a>
					</li>
				</ul>
			</div>
			<div style={footStyle2}>
				<a
					style={footerBottom}
					href='https://www.youtube.com/watch?v=tyJPrZzpwcU'
					target='_blank'
					rel='noopener noreferrer'>
					Designed and Coded by Aditya Sundar and Vivin Anand
				</a>
			</div>
		</Fragment>
	);
};

const footStyle = {
	backgroundColor: '#101010',
	height: '180px',
	position: 'relative',
	top: '100%',
};

const footerBottom = {
	paddingTop: '4px',
	fontSize: '14px',
	color: 'white',
	fontFamily: 'Arial, Helvetica, sans-serif',
};

const footStyle2 = {
	backgroundColor: '#000000',
	paddingTop: '12px',
	paddingLeft: '20px',
	height: '60px',
};

const imgStyle = {
	height: '250px',
	objectFit: 'contain',
	position: 'relative',
	top: '-70px',
	right: '510px',
};

const socialsStyle = {
	position: 'relative',
	left: '0%',
	top: '-118%',
};

const addressStyle = {
	color: 'white',
	position: 'relative',
	top: '-250px',
	display: 'grid',
	left: '30%',
	gridTemplateColumns: 'repeat(3, 1fr)',
	maxWidth: '70%',
};

export default Footer;
