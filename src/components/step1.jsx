function Step1({ formData, handleChange }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-500">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 1: Personal Information</h2>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Mobile No</label>
                <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your mobile number"
                />
            </div>
        </div>
    );
}

export default Step1;