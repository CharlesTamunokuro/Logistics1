import React from 'react'
import { FaCube, FaLayerGroup, FaClock } from 'react-icons/fa';

const SectionPage = () => {
  return (
    <>
     <div className="bg-white text-black py-16  px-6 md:px-20">
      {/* Heading */}
      <div className="text-start mb-20">
        <h2 className="text-3xl font-bold text-black">
          We take the <br/> <span className="text-red-600">burden of logistics</span> <br/> off you.
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 pb-20 gap-10">
        {/* Feature 1 */}
        <div className="text-start">
          <FaCube className="text-4xl text-black  mb-4" />
          <h3 className="text-xl mb-6 font-semibold">Latest Technology</h3>
          <p className="text-black mt-2">
            Technology and its application are fundamental at GIGL. We understand the role of
            technology in providing an exceptional customer experience. For this reason, our
            processes, products, and services are built around modern technology to help us deliver
            your shipments cheaper, safely, and at the speed of light.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-start">
          <FaLayerGroup className="text-4xl text-black mb-4" />
          <h3 className="text-xl mb-6 font-semibold">Social Commerce</h3>
          <p className="text-black mt-2">
            Pivotal to successful social commerce transactions is the ability for the end-user to
            receive items where and when needed. With an unmatched route network spanning urban and
            rural communities, GIGL is the solution to efficient last-mile delivery. As a merchant,
            you only have to think about selling your products while GIGL delivers to your customers
            worldwide.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-start">
          <FaClock className="text-4xl text-start text-black  mb-4" />
          <h3 className="text-xl mb-6 font-semibold">Guaranteed Delivery</h3>
          <p className="text-black mt-2">
            We are conscious of the relationship between time and money and utilize our resources
            optimally to meet your delivery needs. Our service commitment to you is hassle-free
            delivery. We are large enough to efficiently handle deliveries for large corporations,
            yet small enough to deploy innovative delivery solutions that help small businesses.
          </p>
        </div>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default SectionPage