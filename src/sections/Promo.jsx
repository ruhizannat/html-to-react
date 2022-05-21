import React, { useEffect } from 'react';
import { Fade } from 'react-reveal';
import Venobox from 'venobox';
export default function Promo() {
	useEffect(() => {
		new Venobox({
			autoplay: false,
			spinner: 'wave',
			width: '800px',
			height: '200px',
			border: '5px',
		});
	}, []);
	return (
		<Fade duration={1500} delay={500}>
			<section id='video-part' name='video-part'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-2 m-auto'>
							<div className='video-icon text-center'>
								<a
									className='venobox'
									data-vbtype='video'
									href='https://youtu.be/9KqUlIY2Aew'
								>
									<i className='fab fa-youtube video-i'></i>
								</a>

								<h3>WATCH OUR STORY</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
