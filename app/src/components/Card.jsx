import React from 'react'

const Card = () => {
  return (
    <>
    
    
    <section className="bg-gray-100 py-36 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Seamless delivery services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          
          <div className="bg-white p-6 rounded-lg hover:bg-black hover:text-white shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">📦</div> 
            <h3 className="text-xl font-semibold mb-2">Ship Now</h3>
            <p className="text-gray-600">Request Pick Up, Delivery or Xpress Drop Off</p>
          </div>
          
          
          <div className="bg-white p-6 rounded-lg hover:bg-black hover:text-white shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">🌍</div> 
            <h3 className="text-xl font-semibold mb-2">Overseas Shipping</h3>
            <p className="text-gray-600">Ship from UK, USA, Canada or China to Nigeria and Export to 230 locations worldwide</p>
          </div>
          
          
          <div className="bg-white p-6 rounded-lg hover:bg-black hover:text-white shadow-lg border border-gray-200">
            <div className="text-4xl mb-4">📄</div> 
            <h3 className="text-xl font-semibold mb-2">Get a Quick Quote</h3>
            <p className="text-gray-600">Calculate cost estimate for local & international shipments</p>
          </div>
          
          
          <div className="relative bg-white p-6 rounded-lg hover:bg-black  hover:text-white  shadow-lg border border-gray-200">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
              New
            </div>
            <div className="text-4xl mb-4">🛒</div> 
            <h3 className="text-xl font-semibold mb-2">Personal Shopper</h3>
            <p className="text-gray-600">We shop quality products for you & ship to your doorstep</p>
          </div>

        </div>
      </div>
    </section>
    
    
    </>
  )
}

export default Card