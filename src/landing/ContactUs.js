import React from 'react'
import bg from "../assets/images/bg.png";
const ContactUs = () => {
  return (
    <>
     <div
        className="h-[50vh] lg:h-[calc(50vh - 2rem)] relative top-28 bg-cover bg-center lg:block hidden"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative lg:bottom-20 lg:ml-44 p-4">
        <div className="h-auto lg:h-[calc(100vh - 4rem)]">
          <section className="bg-white  h-full rounded-lg lg:w-full">
            <div className="py-8  px-4 mx-auto max-w-screen-md bg-white border border-gray-300 rounded-lg ">
              <h2 className="mb-4 text-2xl tracking-tight font-bold text-left text-gray-900">
                Request a Quote
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-left text-gray-500  sm:text-xl">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, but also the leap into essentially unchanged.
              </p>
              <form action="#" className="space-y-8 lg:h-80  mb-3 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="address"
                      className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="Address"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Message..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center bg-[#0060B8] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div className="bg-blue-500 p-8 rounded-lg h-auto lg:h-[calc(100vh - 4rem)] w-full lg:w-96 text-left">
          <h2 className="text-white font-bold text-2xl mb-4">Contact Info</h2>
          <p className="text-white mb-4 font-semibold">Our Location</p>
          <p className="text-[#C3C3C3]">
            Gokul road akshay park dollars colony hubli karnataka 580024
          </p>
          <p className="text-white mb-3 mt-3 font-semibold">Quick Contact</p>
          <p className="text-[#C3C3C3]">
            E-mail: fizainfo@gmail.com
            <br />
            Call us: 63630 78635
          </p>
          <p className="text-white mt-3 mb-3 font-semibold">Opening Hours</p>
          <p className="text-[#C3C3C3]">
            Monday to Friday
            <br />
            09:00am - 06:00pm
          </p>
          <p className="text-white mt-3 font-semibold">
            Do you have any questions, feel free to contact us!!
          </p>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-[#4499EA] text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 mt-5 w-full lg:w-48 lg:ml-16"
          >
            Contact us
          </button>
        </div>
      </div>
      
    </>
  )
}

export default ContactUs