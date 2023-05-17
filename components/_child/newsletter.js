import { useState } from 'react';
import { FaEnvelope } from "react-icons/fa"
import Image from 'next/image';

export default function Newsletter() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
      <section className="container mx-auto">
        <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '50%', backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.327),rgba(0, 0, 0, 0.3)), url("/images/newsletter-banner.webp")', height: '300px'}} />
        <div className="text-gray-800 px-4 md:px-12">
          <div className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6" style={{marginTop: '-100px', backdropFilter: 'blur(30px)'}}>
            <div className="flex flex-wrap justify-center text-center lg:text-left">
              <div className="grow-0 shrink-0 basis-auto w-full px-6">
                <div className="grid lg:grid-cols-2 gap-x-6 items-center">
                  <div className="mb-10 lg:mb-0">
                    <h2 className="dark:text-white text-2xl font-bold">
                      Do not miss any updates.
                      <br />
                      <span className="text-emerald-500 dark:text-emerald-400">Join our Gardening Community</span>
                    </h2>
                  </div>
                  <div className="mb-6 md:mb-0">
                  {isSubmitted ? (
                  <p className="mx-auto text-center max-w-2xl font-medium text-gray-500 sm:text-xl dark:text-gray-400">Thank you for subscribing!</p>
                  ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="md:flex flex-row">
                          <input type="text" required className="form-control block w-full px-4 py-2 mb-5 md:mb-0 md:mr-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none rounded-full" placeholder="Enter your email" />
                          <button type="submit" className="inline-block px-7 py-3 bg-emerald-600 text-white text-sm leading-snug rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 transition-colors active:shadow-lg transition duration-150 ease-in-out rounded-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            Subscribe
                          </button>
                        </div>
                        </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
