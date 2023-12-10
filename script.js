// TypeWriter
const txtAnim = document.querySelector('h3');

new Typewriter(txtAnim, {
    loop:true,
    deleteSpeed: 40
})
.changeDelay(40)

.typeString('L\'art de la Pizza ')
.pauseFor(300)
.typeString('authentique !')
.pauseFor(1000)
.deleteChars(13)
.typeString('délicieuse !')
.pauseFor(1000)
.deleteChars(12)
.typeString('faite avec amour !')
.pauseFor(1500)
.start()

