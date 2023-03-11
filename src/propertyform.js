import React from 'react'

export default function Propertyform() {
  return (
      <>
     
        
 
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                post property 
              </h2>
              <form>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Catagory   </label>
                <select className="form-control mb-2">

                            <option> Select catagory </option>
                          </select>
    
                  
                </div>
                <div className="form-outline mb-2">
                  <label className =" form-outline mb-2" > Subcatagory   </label>
                <select className="form-control mb-2">
                            <option> Select  subcatagory </option>
                          </select>
    
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" font-aria-setsize={4} > City   </label>
                  <input
                    type="text"
                    name="city"
                    id="inputCity3"
                    className="form-control form-control-lg"
                    placeholder="city"
                    
                  />
                  
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Address   </label>
                  <input
                    type="text"
                    name="address"
                    id="inputAddress4"
                    className="form-control form-control-lg"
                    placeholder="address"
                    
                  />
                  
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Area   </label>
                  <input
                    type="text"
                    name="area"
                    id="inputarea4"
                    className="form-control form-control-lg"
                    placeholder="area"
                    
                  />
                 
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > No.of Bedroom   </label>
                  <input
                    type="number"
                    name="bedroom"
                    id="inputbedroom4"
                    className="form-control form-control-lg"
                    placeholder="bedroom"
                    
                  />
                 
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > No.of Bathroom   </label>
                  <input
                    type="number"
                    name="bathroom"
                    id="inputbathroom4"
                    className="form-control form-control-lg"
                    placeholder="bathroom"
                    
                  />
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > No.of Bedroom   </label>
                  <input
                    type="number"
                    name="bedroom"
                    id="inputbedroom4"
                    className="form-control form-control-lg"
                    placeholder="bedroom"
                    
                  />
                  </div>
                 <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > No.of Balcony   </label>
                  <input
                    type="number"
                    name="balcony"
                    id="inputbedroom4"
                    className="form-control form-control-lg"
                    placeholder="balcony"
                    
                  />
                 <div className="form-group">
                            <label className =" form-outline mb-2" > property photo : </label>
                         <input type="file" className="form-control" id="customFile" />
                          </div>


                </div>
                <fieldset className="form-group">
                            <div className="row">
                              <legend className="col-form-label col-sm-5 pt-0">
                                Parking :
                              </legend>
                              <div className="col-sm-9">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio1"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio1"
                                  >
                                   Covered
                                  </label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio2"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio2"
                                  >
                                   Open
                                  </label>
                                </div>
                              </div>
                            </div>
                          </fieldset>

                  <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Property on floor   </label>
                  <input
                    type="number"
                    name="floor"
                    id="inputfloor4"
                    className="form-control form-control-lg"
                    placeholder="property on floor"
                    
                  />
                 
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Age Of Property   </label>
                  <input
                    type="number"
                    name="age"
                    id="inputage4"
                    className="form-control form-control-lg"
                    placeholder="age of property"
                    
                  />
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Rent   </label>
                  <input
                    type="number"
                    name="rent"
                    id="inputrent4"
                    className="form-control form-control-lg"
                    placeholder="rent"
                    
                  />
                 
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Deposit   </label>
                  <input
                    type="number"
                    name="deposit"
                    id="inputdeposit4"
                    className="form-control form-control-lg"
                    placeholder="deposit"
                    
                  />
                 
                </div>
                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Duration Of Agreement   </label>
                  <input
                    type="number"
                    name="agreement"
                    id="inputagreement4"
                    className="form-control form-control-lg"
                    placeholder="duration Of Agreement"
                    
                  />
                 
                </div>

                <fieldset className="form-group">
                            <div className="row">
                              <legend className="col-form-label col-sm-5 pt-0">
                                Rent for
                              </legend>
                              <div className="col-sm-9">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio1"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio1"
                                  >
                                   Family
                                  </label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio2"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio2"
                                  >
                                   Single men
                                  </label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    id="customRadio2"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio2"
                                  >
                                   Single women
                                  </label>
                                </div>
                              </div>
                            </div>
                          </fieldset>

                <div className="form-outline mb-2">
                <label className =" form-outline mb-2" > Description   </label>
                  <input
                    type="text"
                    name="description"
                    id="inputfloor4"
                    className="form-control form-control-lg"
                    placeholder="description"
                    cols="30"
                    rows="5"
                    
                  />
                 
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-5"
                    
                  >
                    Register
                  </button>
                </div>
                
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
        

      </>
    
  


    
  );
}
