import React, { useState } from 'react'

const NewsletterForm = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState('')

  const FORM_URL = `https://app.convertkit.com/forms/2054842/subscriptions`

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      })

      const json = await response.json()

      if (json.status === 'success') {
        setStatus('SUCCESS')
        return
      }
    } catch (err) {
      setStatus('ERROR')
      console.log(err)
    }
  }

  const handleInputChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <>
      <hr />
      <pre className="newsletter p-4 rounded">
        <h3>Join the Newsletter</h3>
        <p className="mb-4">Subscribe to get latest content by email.</p>
        {status === 'SUCCESS' && <p>Please go confirm your subscription!</p>}
        {status === 'ERROR' && <p>Oops, Something went wrong! try again.</p>}
        <form action={FORM_URL} method="post" onSubmit={handleSubmit}>
          <input
            type="email"
            aria-label="Your email"
            name="email_address"
            placeholder="Your email address"
            className="appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:ring w-full mb-4"
            onChange={handleInputChange}
            value={email}
            required
          />
          <button
            type="submit"
            className="rounded py-2 px-3 leading-tight focus:outline-none focus:ring text-white mb-4"
          >
            Subscribe
          </button>
        </form>
        <small className="text-gray-600">
          I won't send you spam. Unsubscribe at any time.
        </small>
      </pre>
      <style jsx>{`
        .newsletter {
          text-align: center;
          max-width: 32rem;
          margin: 2rem auto 0;
          font-family: 'Inter';
        }

        input {
          display: block;
          //background-color:transparent;
        }

        p {
          margin-top: 0;
        }

        button {
          background-color: rgba(66, 153, 225);
        }

        button:hover,
        button:focus {
          background-color: rgba(49, 130, 206);
        }
      `}</style>
    </>
  )
}

export default NewsletterForm
