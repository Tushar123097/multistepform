function Step3({ formData, handleChange }) {
    return (
        <div className="p-8 bg-white rounded-lg shadow-lg transition-all duration-500">
            <h2 className="text-2xl font-bold mb-6 text-center">Step 3: Details</h2>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Age</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your age"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-semibold">Hobby</label>
                <select
                    name="hobby"
                    value={formData.hobby || ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select hobby</option>
                    <option value="reading">Reading</option>
                    <option value="sports">Sports</option>
                    <option value="music">Music</option>
                    <option value="travel">Travel</option>
                </select>
            </div>
        </div>
    );
}

export default Step3;