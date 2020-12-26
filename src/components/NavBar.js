import React from 'react';
import './navbar.css';


const NavBar = () => {
    return(
		<div className="bg-blue-100">

		<div className="container mx-auto">
				<div className="relative">
						<div class="navbar">
							<a href="/">Samee Shahood</a>
							<a href="/blog" class ="right">Blog</a>
							<a href="https://docs.google.com/presentation/d/1GqEoA95w5-p51Ft-iqkAfUET1GLbmHO6lxkr2FyiWsc/edit?usp=sharing" class ="right">Resume</a>
							<a href="/#contact-info" class ="right">Contact Info</a>
						</div>
				</div>
			</div>


		</div>
    )
}

export default NavBar;