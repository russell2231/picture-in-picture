const videoEl = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to slect media stream, pass to video element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoEl.srcObject = mediaStream;
		videoEl.onloadedmetadata = () => {
			videoEl.play();
		};
	} catch (error) {
		console.log('Whoops, error here', error);
	}
}

button.addEventListener('click', async () => {
	// Disable button
	button.disabled = true;
	// Start Picture in Picture
	await videoEl.requestPictureInPicture();
	// Reset Button
	button.disabled = false;
});

// On Load
selectMediaStream();
