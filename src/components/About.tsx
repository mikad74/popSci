import wimamitudbe from "/public/wimamitudbe.jpg"

function About() {
  return (
  <div className="about">
      <h2>About Us</h2>
      <p>Wimamitudbe is a online magazine focused on linguistic aspects of the queer community. We are a group of linguistics students at the University of Amsterdam. We got inspired to start this magazine as a result of a sociolinguistics course by Dr. E. J. Daussà we took.</p>
      <div className="who">
      <div className="names">
      <h3>Who are we</h3>
      <h5>William Bordonaro</h5>
      <p>21 year old Italian-Finnish Language Genius</p>
      <h5>Marta Sarić</h5>
      <p>?? year old Balkan badass</p>
      <h5>Mika Doorenbosch</h5>
      <p>23 year old Dutch rocket scientist turned linguist</p>
      <h5>Tudora Rada</h5>
       <p>19 year old Romanian-Canadian ray of sunshine</p>
      <h5>Ben Chan</h5>
          <p>21 year old Hong Kong-British polymath</p>
        </div>
        <div className="img-container">
        <img src={wimamitudbe} alt="group  photo"></img>
        </div>

      </div>
    </div>
  )
}

export default About
