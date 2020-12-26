// src/components/AllPosts.js
import { Github, Telephone, Linkedin, Envelope } from 'react-bootstrap-icons';

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import sanityClient from "../client.js";


export default function HomePage() {
//   const [allPostsData, setAllPosts] = useState(null);

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "post"]{
//         title,
//         slug,
//         mainImage{
//         asset->{
//           _id,
//           url
//         }
//       }
//     }`
//       )
//       .then((data) => setAllPosts(data))
//       .catch(console.error);
//   }, []);

  return (
	  
    <div className="bg-blue-100 min-h-screen p-12">
		<div className="container mx-auto">
			<h2 className="text-5xl flex justify-center cursive">Samee Shahood</h2>
			<h3 className="text-lg text-gray-600 flex justify-center mb-12">
			Welcome to my website!   
				<a href="/blog" className="bloglink">
					Checkout my blog :)
				</a>
			</h3>
		</div>
		<div className="container mx-auto  shadow bg-blue-100 rounded-lg">
			<div className="relative">

				<div className="bg-red-100 bg-opacity-50 p-12">
					<div className="flex justify-center text-gray-800">
						<img
							src="https://i.imgur.com/2OjogEr.jpg"
							className="w-40 h-40 rounded-full"
						/>
						<h4 className="cursive flex items-center pl-2 text-xl" id="infobox">
							My name is Samee Shahood, a second year Computer Science student at Carleton University who believes in statistics a little too much.            
						</h4>
					</div>
				</div>

				<div className="bg-teal-100 bg-opacity-75 p-12">


					<h3 className="cursive flex items-left pl-2 text-4xl" id="infobox2">
								Education            
					</h3>


					
					<br/>
					<div className="flex justify-center text-gray-800">

						<div id="infobox2">
							
							<h4 className="cursive flex items-center pl-2 text-2xl">
								Bachelor of Computer Science         
							</h4>

							<div className="flex text-gray-800">

								<h4 className="cursive flex items-center pl-2 text-xl" id="rightside">
									Carleton University         
								</h4>

								<h4 className="cursive flex items-center pl-2 text-xl" >
									10.9/12 GPA         
								</h4>

							</div>
							<h4 className="cursive flex items-center pl-2 text-sm">
							‎
							</h4>
							<h4 className="cursive flex items-center pl-2">
								I am a second year Computer Science student in the Software Engineering stream, and also completing a minor in Statistics         
							</h4>
						</div>
						
						
						<img
							src="https://images-ext-1.discordapp.net/external/dbSShKC-QreFCvYEZZJAe3ztmrusO-JOa4BiZFccF90/https/www.sce.carleton.ca/dept/graduatestudies/lib/tpl/dokuwiki/images/logo.png"
							id="unilogo"
						/>

					</div>

					
				</div>


				<div className="bg-purple-100 bg-opacity-75 p-12">
					
					<div id="title">
						<h3 className="cursive pl-2 text-4xl">
							Work and Community Experience            
						</h3>
					</div>
					<br></br>
					<br/>

					<div className="flex justify-center text-gray-800 companycard2 shado">
							<img
								src="https://ccss.carleton.ca/images/clubs/blueprint.png"
								className="complogo"
								id="infobox"
							/>

						<h4 className="cursive flex items-center pl-2">

						</h4>

						<h4 className="cursive flex items-center pl-2">

						</h4>

						<h4 className="cursive flex items-center pl-2">

						</h4>

						<h4 className="cursive flex items-center pl-2">

						</h4>


							<h4 className="cursive flex items-center pl-2" id="infobox2">
								I am currently volunteering as a backend web developer for CU Blueprint. At CU Blueprint, my role involved participating in developing the backend for a CRM Dashboard for a not for profit loan lending organization known as Beneficient

							</h4>

						</div>

						<br/>

						<div className="flex justify-center text-gray-800 shadow companycard">
							
							<br/>
							<h4 className="cursive flex items-center pl-2" id="infobox">
								In the summer of 2020, I completed a 16 week internship with Ciena as a Modem Optical Engineer. While working with one of the module testing teams, I created a standalone application to simplify debugging DCO Modules, and helped analyze performance tests done on transimitters

							</h4>

							<h4 className="cursive flex items-center pl-2">

							</h4>

							<h4 className="cursive flex items-center pl-2">

							</h4>

							<h4 className="cursive flex items-center pl-2">

							</h4>

							<h4 className="cursive flex items-center pl-2">

							</h4>
							
							<img
								src="https://media.discordapp.net/attachments/378387868982444043/792153201100062770/ciena.png"
								className="complogo"
								id="infobox2"


							/>
						</div>
				</div>


				<div className="bg-teal-100 bg-opacity-75 p-12">
					

					<div className="flex justify-center text-gray-800" id="contact-info">
						<div className="bg-white shadow" id = "mid2">
							<h3 className="cursive pl-2 text-3xl">
								Contact Info            
							</h3>
							<h4 className="break">
							‎
							</h4>							
							<div className="flex justify-center text-gray-800">

								<Github color="teal" size={25}/>
								<a href="https://github.com/samee-shahood">
									<h4 className="cursive flex items-center pl-2 link">
										github.com/samee-shahood
									</h4>
								</a>
							</div>

							<h4 className="break">
							‎
							</h4>

							<div className="flex justify-center text-gray-800">

								<Linkedin color="teal" size={25}/>
								<a href="https://www.linkedin.com/in/samee-shahood/">
									<h4 className="cursive flex items-center pl-2 link">
										linkedin.com/in/samee-shahood
									</h4>
								</a>
							</div>

							<h4 className="break">
							‎
							</h4>

							<div className="flex justify-center text-gray-800">

								<Telephone color="teal" size={25}/>
								<h4 className="cursive flex items-center pl-2 link2">
								+1 613 601 2896
								</h4>
							</div>

							<h4 className="break">
							‎
							</h4>

							<div className="flex justify-center text-gray-800">

								<Envelope color="teal" size={25}/>
								<a href="mailto:sameeshahood11@gmail.com">

									<h4 className="cursive flex items-center pl-2 link">
									sameeshahood11@gmail.com
									</h4>
								</a>
							</div>

							

						</div>


						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4><h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>
						<h4 className="cursive flex items-center pl-2">

						</h4>

						<div className="bg-white shadow" id = "mid2">
							
						<h3 className="cursive pl-2 text-3xl">
								Want to know more?            
							</h3>
							<h4 className="break">
							‎
							</h4>							
							<div className="flex justify-center text-gray-800">
								<h4 className="cursive flex items-center pl-2 text-xl">
								Checkout my
								</h4>
							</div>

							<h4 className="break">
							‎
							</h4>

							<div className="flex justify-center text-gray-800">
							<a href="https://docs.google.com/presentation/d/1GqEoA95w5-p51Ft-iqkAfUET1GLbmHO6lxkr2FyiWsc/edit?usp=sharing">
								<h4 className="cursive flex items-center pl-2 text-2xl resume rounded">
								RESUME
								</h4>
								</a>
							</div>

							

						</div>
					</div>
				</div>

			</div>
		</div>
			  
    </div>
  );
}