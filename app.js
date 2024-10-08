// will push in github on 10/07/2024
const containerE1 = document.querySelector('.container');

for (let i=0; i<15; i++) {
	const colorContainerE1 = document.createElement('div');
	colorContainerE1.classList.add('color-container');

	const colorCodeE1 = document.createElement('span');
	colorCodeE1.classList.add('color-code');
	colorContainerE1.appendChild(colorCodeE1);

	const copyButtonE1 = document.createElement('button');
	copyButtonE1.innerText = 'Copy';
	colorContainerE1.appendChild(copyButtonE1);

	containerE1.appendChild(colorContainerE1);
}

function randomColor() {
	const chars = '0123456789ABCDEF';
	const colorcodeLength = 6;
	let colorCode = '';

	for (let i=0; i< colorcodeLength;i++) {
		const randomNum = Math.floor(Math.random() * chars.length);
		colorCode += chars.substring(randomNum, randomNum + 1);
	}
	return colorCode;//returning only colorCode.
}


const mainColorContainerEls = document.querySelectorAll('.color-container');

generateColor();

function generateColor() { 

	for(let i=0;i<mainColorContainerEls.length;i++) {
//returning color code for the page is generating page. 
		const colorContainerEl= mainColorContainerEls[i];
		const newColorCode = randomColor();
		const colorCodeEl = colorContainerEl.querySelector('.color-code');
// getting color-code class to create node.
		colorContainerEl.style.backgroundColor = "#" + newColorCode;
		colorCodeEl.innerText = "#" + newColorCode;

	}
}

mainColorContainerEls.forEach((colorContainerE1)=> {
	const copyButtonE1 = colorContainerE1.querySelector('button');
	const colorCodeE1= colorContainerE1.querySelector('.color-code');

	copyButtonE1.addEventListener('click', ()=> {
		const colorCode = colorCodeE1.innerText;
		copyClipboard(colorCode);
	})
});

function copyClipboard(text) { 
	navigator.clipboard.writeText(text)
	.then(()=> {
		alert("copied to clipboard :"+text);
		document.innerHTML = `<p>succcess copied</p>`
	})
	.catch((err)=> {
		console.log('failed o copy,' + err);
	})
}