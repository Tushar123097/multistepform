import { useState } from 'react';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Step4 from './components/step4';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    addressType: '',
    age: '',
    gender: '',
    hobby: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert('Form submitted!\n' + JSON.stringify(formData, null, 2));
    // You can also send formData to a server here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 flex items-center justify-center rounded-full 
                ${currentStep === step ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}
              `}
            >
              {step}
            </div>
          ))}
        </div>
        {/* Step Components */}
        {currentStep === 1 && (
          <Step1 formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 2 && (
          <Step2 formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <Step3 formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 4 && (
          <Step4 formData={formData} handleSubmit={handleSubmit} />
        )}
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
            >
              Back
            </button>
          )}
          {currentStep < 4 && (
            <button
              onClick={handleNext}
              className="ml-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
