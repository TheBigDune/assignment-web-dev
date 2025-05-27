const colorButton = document.createElement('button');
colorButton.textContent = 'Change Heading Color';
colorButton.style.padding = '10px';
colorButton.style.backgroundColor = '#4CAF50';
colorButton.style.color = 'white';
colorButton.style.border = 'none';
colorButton.style.borderRadius = '5px';
colorButton.style.cursor = 'pointer';
colorButton.style.display = 'block';
colorButton.style.margin = '20px auto'; 
colorButton.style.fontSize = '16px';
document.body.appendChild(colorButton);

const heading = document.querySelector('h1'); 

colorButton.addEventListener('click', () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'blue';
    } else {
        heading.style.color = 'red';
    }
});