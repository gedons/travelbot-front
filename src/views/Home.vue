<template>
	<div class="space-y-8 md:space-y-8 bg-gray-100 text-gray-800">

		<section class="bg-gray-200 text-gray-800">
			<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 class="text-5xl font-bold leading-none sm:text-6xl">Start
						<span class="text-[#85B8CB]">Chatting </span>Today
					</h1>
					<p class="mt-6 mb-8 text-lg sm:mb-12">Introducing our innovative travel agency chatbot,
						<br class="hidden md:inline lg:hidden"> your one-stop shop for planning your dream.
					</p>
					<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<router-link to="/chat" rel="noopener noreferrer" class="px-8 py-3 text-lg font-semibold rounded bg-[#85B8CB] hover:bg-[#7099a7] text-gray-800">Get Started</router-link>
						<!-- <a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a> -->
					</div>
				</div>
				<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img src="../assets/bott.jpg" alt="" class="object-contain   h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				</div>
			</div>
		</section>		 
 
		<section class="bg-gray-100 text-gray-800">
			<div class="container flex flex-col p-6 mx-auto">
				<h2 class="py-4 text-3xl font-bold text-center">About The Bot</h2>
				<div class="divide-y divide-gray-300">
					<div class="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
						<div class="flex items-center justify-center lg:col-span-1 col-span-full">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-16 h-16">
								<path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
								<path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
								<path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
							</svg>
						</div>
						<div class="flex flex-col justify-center max-w-3xl text-center  col-span-full lg:col-span-3 lg:text-left">							
							<span class="text-xs tracking-wider font-semibold uppercase text-[#85B8CB]">planning your next vacation has never been easier!</span>							
							<span class="mt-4 text-gray-700 text-left">This chatbot is designed to be your personal travel assistant, available 24/7 to guide you through every step of the journey. Whether you're seeking a relaxing beach getaway, an adventurous exploration, or a cultural immersion experience, our chatbot can tailor recommendations to your preferences and budget.</span>
						</div>
					</div>
  
				</div>
			</div>
		</section>
 
		<footer class="py-6 bg-gray-100 text-gray-900">
			<div class="container px-6 mx-auto space-y-6 divide-y divide-gray-600 md:space-y-12 divide-opacity-50">		 
				<div class="grid justify-center pt-6 lg:justify-between">
					<div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span>&copy;2024 All rights reserved</span>					
					</div>					 
				</div>
			</div>
		</footer>
	</div>
</template>