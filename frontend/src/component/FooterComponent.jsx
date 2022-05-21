import React from 'react'

export default function FooterComponent() {
  return (
    <>
<footer className="text-center text-lg-start bg-light bg-dark text-success">
  <section
    className="d-flex justify-content-center  justify-content-lg-between p-4 border-bottom"
  >
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
    </div>
  </section>

  <div className="text-center p-4" style= {{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
    © 2022 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">TeachCareer.com</a>
  </div>
</footer>
    </>
  )
}
