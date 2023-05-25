function Footer({setPage}) {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="menu">
        <div className="about-btn button" onClick={() => setPage(1)}
        >
        About us
        </div>
        <div className="contact-btn button" onClick={() => setPage(2)}>
          Contact
        </div>
      </div>
        <div className="wimamitudbe">
        wimamitudbe © 2023
      </div>

      </div>
    </div>
  )
}

export default Footer
