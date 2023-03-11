import React from 'react'

export default function Property() {
  return (
    <div>
       <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <a href="">
                    <img
                      className="img-fluid"
                      src="assest/img/property-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                    For Rent
                  </div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                    Villa
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <a className="d-block h5 mb-2" href="">
                    Golden Urban House For Sell
                  </a>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                  <div className="d-flex border-top">
             <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2" />
                 1000 Sqft
             </small>
             <small className="flex-fill text-center border-end py-2">
             <i className="fa fa-bed text-primary me-2" />3 Bed
             </small>
             <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2" />2 Bath
             </small>
             <small className="flex-fill text-center py-2">
            <i className="fa fa-sofa text-primary me-2" />2 Bath
             </small> 
            </div>

                </div>
                
              </div>
            </div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                contact with owner 
              </h2>
              <form>
                
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="inputEmail4"
                    className="form-control form-control-lg"
                    placeholder="email"
                    
                  />
                  
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="number"
                    name="number"
                    id="inputnumber4"
                    className="form-control form-control-lg"
                    placeholder="mono"
                    
                  />
                  
                </div>
                
                
                <div className="d-flex justify-content-center">
                  <button
                    // type="submit"
                    className="btn btn-primary mb-5"
                    
                  >
                    contact
                  </button>
                  
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

           
    </div>
  )
}
