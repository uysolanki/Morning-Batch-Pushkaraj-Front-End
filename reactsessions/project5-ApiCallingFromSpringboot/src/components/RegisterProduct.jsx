import React, { useState } from 'react'

const RegisterProduct = () => {
    const[userValues,setUserValues]=useState({})

    function handleSubmit()
    {

    }
  return (
    <div>
        <form className="form-container" onSubmit={handleSubmit}>
        
        

        <div>
                <label htmlFor="prodTitle">Product Title</label>
                <input 
                    type="text" 
                    name="prodTitle" 
                    id="prodTitle"
                    value={userValues.title} 
                />
        </div>

        <div>
                <label htmlFor="prodPrice">Product Price</label>
                <input 
                    type="text" 
                    name="prodPrice" 
                    id="prodPrice"
                    value={userValues.price} 
                />
        </div>

        <div>
                <label htmlFor="productDescription">Product Description</label>
                <input 
                    type="text" 
                    name="productDescription" 
                    id="productDescription"
                    value={userValues.description} 
                />
        </div>
        <div>
                <label htmlFor="productCategory">Product Category</label>
                <input 
                    type="text" 
                    name="productCategory" 
                    id="productCategory"
                    value={userValues.category} 
                />
        </div>

        <div>
                <label htmlFor="photo">Upload Photo</label>
                <input 
                    type="file" 
                    name="photo" 
                    id="photo" 
                    value={userValues.image} 
                />
            </div>
            <div className="button-group">
                <button type="submit">Register</button>
                <button type="button">Cancel</button>
            </div>
        </form>

    </div>
  )
}

export default RegisterProduct