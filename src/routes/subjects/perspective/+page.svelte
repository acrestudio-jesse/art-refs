<script>
	let openOne = false;
	let openTwo = false;

	const hovered =
		'transition transform hover:bg-amber-300  mx-10 rounded-lg p-1 bg-white  flex flex-col gap-2 px-4';
	const normal = 'mx-10 rounded-lg p-1 bg-white  flex flex-col gap-2 px-4';
</script>

<main class="mx-20 my-10 flex flex-col gap-3">
	<post class="flex flex-col gap-3 p-3 bg-emerald-100 rounded-lg">
		<h2 class="text-2xl">1. What is perspective?</h2>

		<p>
			Perspective is how we create 3-D space in a piece of art. We basically do this by using
			different methods to imitate human visual perception.
			<br />
			<br />
			There are several types of perspective, but the two main ones we implement are
			<strong>Linear Perspective</strong>
			and <strong> Atmospheric Perspective.</strong>
		</p>
	</post>
	<post class="flex flex-col gap-3 p-3 bg-emerald-100 rounded-lg">
		<h2 class="text-2xl">2. Linear Perspective</h2>

		<p>
			<strong>Linear Perspective</strong> is implemented by measuring out a precise geomentrical
			grid into which we can map shapes in a way which makes them appear 3-D. This grid is
			implemented by declaring a horizon line and 1 or several points to be the reference locations
			for the lines in the grid.
			<br />
			<br />
			In this post, I would like to explore linear perspective using the 1-point and 2-points.
		</p>
		<br />
		<br />
		<div class={openOne ? normal : hovered}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => {
					openOne = !openOne;
				}}
			>
				<h3>A. 1-Point Perspective</h3>
			</div>
			{#if openOne}
				<div class="flex flex-col justify-items-center items-center">
					<p class="max-w-screen-md">
						1. We will start by constructing a cube. Begin by declaring a horizon line.
					</p>
					<img
						src="/images/1point/step1.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						2. Next, using a small dot, mark a point on your horizon line. This will be your
						vanishing point.
					</p>
					<img
						src="/images/1point/step2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						3. Draw a square anywhere on the page. Tip: If you square is drawn above the horizon,
						your final 3-D cube will appear to be floating above you, if your square is below or on
						the horizon line, the cube will appear to be sitting on the ground.
					</p>
					<img
						src="/images/1point/step3.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						4. From your from each corner of your square, draw a light line back toward your horizon
						line. Each of these lines is called a perspective line.
					</p>
					<img
						src="/images/1point/step4.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						5. Now, draw one line parallel to the side of your square between two of your
						perspective lines.
					</p>
					<img
						src="/images/1point/step5.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						6. Now, using the points of intersection between our parallel line and the perspective
						line, we can draw parallel lines to the other sides of your square. There result should
						look similar to a wire frame of a cube.
					</p>
					<img
						src="/images/1point/step6.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						7. You can now choose to erase some of your construction lines in order to leave
						yourself with the illusion of a complete cube.
					</p>
					<img
						src="/images/1point/step7.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						8. Using the same horizon and vanishing point, it is possible to construct many of these
						cubes which will appear together in this faux 3-D space.
					</p>
					<img
						src="/images/1point/step8.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/1point/step8-2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
				</div>
			{/if}
		</div>
		<br />
		<br />
		<p>
			Next, let's try to construct another cube, this time in 2-point perspective. For this, I would
			start on a fresh piece of paper.
		</p>
		<br />
		<br />
		<div class={openTwo ? normal : hovered}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => {
					openTwo = !openTwo;
				}}
			>
				<h3>B. 2-Point Perspective</h3>
			</div>
			{#if openTwo}
				<div class="flex flex-col justify-items-center items-center">
					<p class="max-w-screen-md">1. Again, begin by declaring a horizon line.</p>
					<img
						src="/images/2point/step1.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						2. This time, we will be adding two vanishing points to our horizon line. For the most
						realistic result, try to place the far apart.
					</p>
					<img
						src="/images/2point/step2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						3. Now, instead of drawing square, we will simply draw a vertical line any place between
						the vanishing points. A vertical line above the horizon line will still construct on
						object that appears to be floating in the air, while a line below or on the horizon will
						still construct a grounded object.
					</p>
					<img
						src="/images/2point/step3.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						4. Our next step is similar to 1-point perspective. Simply draw a light perspective line
						back to each vanishing point from each end of the line. This should result in drawing 4
						lines.
					</p>
					<img
						src="/images/2point/step4.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						5. Now, on each side of out original line, draw parallel lines linking our sets of
						perspective lines.
					</p>
					<img
						src="/images/2point/step5.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						6. You should have something that resembles the two walls meeting at a corner. The next
						step is to find the points where the new parallel lines intersect with your perspective
						lines. Each of these already travels back to one of your vanishing points. What you need
						to do is draw another perspective line from these intersection points back to the other
						vanishing point.
					</p>
					<img
						src="/images/2point/step6-1.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step6-2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step6-3.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						7. If all is measured well, you should also be able to draw one more vertical line
						between the two new intersection toward the "back" of your cube.
					</p>
					<img
						src="/images/2point/step7-1.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step7-2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						8. You can now choose to erase some of your construction lines in order to leave
						yourself with the illusion of a complete cube.
					</p>
					<img
						src="/images/2point/step8-1.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step8-2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step8-3.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<p class="max-w-screen-md">
						9. Using the same horizon and vanishing points, it is possible to construct many of
						these cubes which will appear together in this faux 3-D space.
					</p>
					<img
						src="/images/2point/step9-1.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step9-2.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step9-3.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
					<img
						src="/images/2point/step9-4.webp"
						alt="1 point perspective step 1."
						class="max-w-screen-sm"
					/>
				</div>
			{/if}
		</div>
	</post>
</main>
