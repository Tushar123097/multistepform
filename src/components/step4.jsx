function Step4({ formData, handleSubmit }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-500">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 4: Confirmation</h2>
            <div className="mb-4">
                <p><span className="font-semibold">Name:</span> {formData.name}</p>
                <p><span className="font-semibold">Email:</span> {formData.email}</p>
                <p><span className="font-semibold">Mobile No:</span> {formData.mobile}</p>
                <p><span className="font-semibold">Address:</span> {formData.address}</p>
                <p><span className="font-semibold">Address Type:</span> {formData.addressType}</p>
                <p><span className="font-semibold">Age:</span> {formData.age}</p>
                <p><span className="font-semibold">Gender:</span> {formData.gender}</p>
                <p><span className="font-semibold">Hobby:</span> {formData.hobby}</p>
            </div>
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                Submit
            </button>
        </div>
    );
}

export default Step4;