import React, { useState } from 'react';

const RegisterProduct = () => {
    const [userValues, setUserValues] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: ''
    });

    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setUserValues((prev) => ({
            ...prev,
            [name]: URL.createObjectURL(files[0]) // Store the first file selected

        }));
    };

    // Handle form submission
    async function handleSubmit(event){
        event.preventDefault();  // Prevent default form submission
        console.log(userValues);  // Log the user input data
       
        try {
            const response = await fetch('http://localhost:8086/saveProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userValues)
            });

            if (response.ok) {
                const data = await response.json();
                //alert(data.sname + " " +" user registered successfully!");
                alert("Product Added successfully!");
                console.log(data)
                //resetForm();
            } else {
                alert("Failed to Add Product");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
        }

       // alert('Form Submitted');
    };

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Product Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={userValues.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="price">Product Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        value={userValues.price}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="description">Product Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={userValues.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="category">Product Category</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={userValues.category}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="image">Upload Photo</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handleFileChange}  // File input should not have value set
                    />
                </div>

                <div className="button-group">
                    <button type="submit">Register</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterProduct;
