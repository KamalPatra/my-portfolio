import React from 'react';
import Form from '../Form/Form';
import '../../css/main.css';
import banner from '../../images/coding.jpg';
import amazon from '../../images/amazon-clone.jpg';
import avatar from '../../images/avatar.jpg';
import covid from '../../images/covid19.jpg';
import messenger from '../../images/messenger_clone.jpg';
import { Link } from 'react-scroll';
// npm install --save-dev @iconify/react @iconify-icons/simple-icons
import { Icon } from '@iconify/react';
import codewarsIcon from '@iconify-icons/simple-icons/codewars';




function Main(props) {
    return (
		
        //Header
        <div>
            <section id="header">
				<header>
					<span className="image avatar"><img src={avatar} alt="Avatar" /></span>
					<h1 id="logo">Kamal Patra</h1>
					<p>I am a Web Developer<br />
						with enthusiasm and focus on Frontend Development and Scripting.</p>
				</header>
				<nav id="nav">
					<ul>
						<li><Link to="one" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
						<li><Link to="two" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>Things I Can Do</Link></li>
						<li><Link to="three" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>Projects I made</Link></li>
						<li><Link to="four" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
					</ul>
				</nav>
				<footer>
					<ul className="icons">
						<li><a href="https://www.linkedin.com/in/kamal-patra-601756b7/" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
						{/* <li><a href="https://www.facebook.com/kamal.patra.58" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li> */}
						<li><a href="https://www.instagram.com/kamal_patra/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="https://github.com/KamalPatra" className="icon brands fa-github"><span className="label">Github</span></a></li>
						<li><a href="https://www.codewars.com/users/kpatra" className="icon"><Icon className="code" icon={codewarsIcon} /></a></li>
					</ul>
				</footer>
			</section>
			<div id="wrapper">				
					<div id="main">
							<section id="one">
								<div className="image main" data-position="center">
									<img src={banner} alt="Banner" />
									<div className="overlay"></div>
								</div>
							 	<div className="container">
									<header className="major">
										<h2>Hi, My name is Kamal Patra</h2>
										<p>I am a Web Developer. <br /> 
										 I like to make beautiful frontend web and mobile app designs.</p>
									</header>
									<p>I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field. I have been making frontend designs for mobile and web app from 3 years. I have good knowledge in ReactJS, HTML and CSS. I have also made cross-platform mobile app using Flutter and Dart i.e. for iOS and Android..</p>
								</div>
							</section>
							<section id="two">
								<div className="container">
									<h3>Things I Can Do</h3>
									<p>Following are the skills I have and well versed with.</p>
									<ul className="feature-icons">
										<li className="">
											<i className="icon solid fab fa-node-js"></i> Javascript
										</li>
										<li>
											<i className="icon solid fab fa-react"></i>React
										</li> 
										<li>
											<i className="icon fab fa-html5"></i>HTML
										</li>
										<li>
											<i className="icon solid fa fa-hashtag"></i>CSS
										</li>
										<li>
											<i className="icon solid fa fa-laptop-code"></i>Flutter
										</li>
										<li>
											<i className="icon solid fa fa-code"></i>Dart
										</li>
									</ul>
								</div>
							</section>
							<section id="three">
								<div className="container">
									<h3>Projects I made</h3>
									<p>These are the projects that I have made with the help of React and JS.</p>
									<div className="features">
										<article>
										
										<article>
											<a href="https://covid-app-568aa.web.app/" class="image"><img src={covid} alt="Covid-19" /></a>
											<div className="inner">
												<h4>COVID-19 Tracker</h4>
												<p>It is a live COVID-19 tracker, with which we can see the live status of COVID patient across the globe. Used React and JS to build the design and functionality. </p>
											</div>
										</article>
										<article>
											<a href="https://clone-1a448.web.app" class="image"><img src={amazon} alt="Amazon" /></a>
											<div className="inner">
												<h4>Amazon Clone</h4>
												<p>Online e-commerce app. It is a responsive app, replication of Amazon e-store. It has user authentication feature using Firebase, can add or remove product from basket and a checkout page with payment gateway as Stripe.</p>
											</div>
										</article>
									</div>
								</div>
							</section>
							<section id="four">
								<Form />
							</section>
					</div>
					<section id="footer">
						<div className="container">
							<ul className="copyright">
								{/* <li>&copy; Untitled. All rights reserved.</li> */}
                                <li>&copy; Designed by Kamal Patra</li>
							</ul>
						</div>
					</section>
			</div>
			<div id="titleBar">
				<span className="title">
					{/* <a className="toggle"></a> */}
					Kamal Patra
				</span>
			</div>
        </div>
		

    );
}

export default Main;