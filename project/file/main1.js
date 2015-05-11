var sop = document.getElementById ('stop')
var low = document.getElementById ('slow')
var goo = document.getElementById ('go')
var reed = document.getElementById ('red')
var greeen = document.getElementById ('green')
var yeellow = document.getElementById ('yellow')

	sop.addEventListener('click', changeColor1)
	low.addEventListener('click', changeColor2)
	goo.addEventListener('click', changeColor3)

function changeColor1() {
	turnBlack()
	reed.classList.add('red')
	yeellow.classList.add('black')
	greeen.classList.add('black')
}
function changeColor2() {
	turnBlack()
	reed.classList.add('black')
	yeellow.classList.add('yellow')
	greeen.classList.add('black')
}
function changeColor3() {
	turnBlack()
	reed.classList.add('black')
	yeellow.classList.add('black')
	greeen.classList.add('green')
}

function turnBlack() {
	reed.className = ""
	yeellow.className = ""
	greeen.className = ""
}
