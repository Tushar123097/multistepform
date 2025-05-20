function Step2({ formData, handleChange }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-500">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 2: Address</h2>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your address"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Address Type</label>
                <select
                    name="addressType"
                    value={formData.addressType || ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select type</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="hostel">Hostel</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    );
}

export default Step2;