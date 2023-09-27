let paragraph = document.querySelector('p')
paragraph.textContent = 'Labas'
paragraph.innerHTML = 'Labas <span class="test" style="color: red;">vakaras</span>'

let spanElement = document.createElement('span')
spanElement.textContent = '!'

paragraph.append(spanElement)

paragraph.prepend(spanElement)

paragraph.after(spanElement)

paragraph.before(spanElement)

spanElement.remove()


let newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum quaerat nemo accusantium numquam atque optio ad dicta itaque praesentium ex, porro eveniet consequatur illo velit nulla magni cumque repellendus.'

paragraph.after(newParagraph) 

newParagraph.className = 'pirma-klase antra-klase'
newParagraph.className = 'trecia-klase'

//newParagraph.className = newParagraph.className + ' ketvirta-klase'
newParagraph.className += ' ketvirta-klase'

console.dir(newParagraph.className)

newParagraph.classList.add('penkta-klase')
newParagraph.classList.add('sesta-klase', 'septinta-klase')

newParagraph.classList.remove('trecia-klase')
newParagraph.classList.remove('ketvirta-klase', 'sesta-klase')

newParagraph.classList.toggle('toggle-klase') //prideda
newParagraph.classList.toggle('toggle-klase') //pašalina
newParagraph.classList.toggle('toggle-klase') //prideda

//Pakeičia klasę HTML elemente
newParagraph.classList.replace('penkta-klase', 'pirma-klase')

//Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('penkta-klase'))
console.log(newParagraph.classList.contains('pirma-klase'))

newParagraph.id = 'paragrafo-id'

let link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)

//link.href = 'https.//www.google.com'
//link.target = '_blank'

link.setAttribute('href', 'https.//www.google.com')
link.setAttribute('target', '_blank')
link.setAttribute('title', 'nuoroda į google')
link.setAttribute('class', 'nuorodos-klase')
link.setAttribute('class', 'nauja-klase')
link.setAttribute('id', 'nuorodos-id')

link.removeAttribute('class')
link.removeAttribute('title')

link.style.border = '2px solid black'
link.style.padding = '5px 10px'
link.style.fontSize = '25px'
link.style.display = 'inline-block'

link.style = `color: red; 
             background-color: green;
             border: 2px solid black;
             padding: 5px 10px
             font-size: 25px
             display: inline-block;
             text-decoration: none
             text-transform: upper case;
             `