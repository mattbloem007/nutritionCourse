import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Five extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        submitDisabled: false
    };
  }

  handleSubmit(event) {
      event.preventDefault();
      if (!this.state.submitDisabled) {
          this.setState({
              submitDisabled: true
          });

          let email = encodeURI(this.dataEmail.value)

              console.log(this.dataEmail.value)

              addToMailchimp(email)
    .then(data => {
      console.log(data)
    })
    .catch(() => {
    })
      }
    }

  render() {
    return (
          <div className="container">
            <header>
              <h2>Signup to The Alchemy of Remembrance Newsletter</h2>
              <p>Receive Updates on Health & Spirituality Tips</p>
            </header>
            <form method="post" action="#" className="cta">
              <div className="row gtr-uniform gtr-50">
                <div className="col-8 col-12-xsmall">
                <input
                    type="email"
                    ref={c => (this.dataEmail = c)}
                    className="field-box"
                    name="email"
                    id="email"
                    required
                />
                </div>
                <div className="col-4 col-12-xsmall">
                  <input
                    aria-label="Submit the form"
                    onClick={e => {
                      e.preventDefault();
                      this.handleSubmit(e);
                    }}
                    ref={c => (this.btn = c)}
                    id="submitForm"
                    type="submit"
                    value="Get Started"
                    className="fit primary"
                  />
                </div>
              </div>
            </form>
          </div>
    )
  }


}
