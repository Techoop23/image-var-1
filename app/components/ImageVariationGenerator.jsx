"use client";

import React, { useState, useRef } from 'react';
import { Camera, Download, Loader, Moon, Sun, Upload } from 'lucide-react';

const ImageVariationGenerator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [image, setImage] = useState(null);
  const [variations, setVariations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const generateVariations = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/generate-variations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      });
      if (!response.ok) throw new Error('Failed to generate variations');
      const data = await response.json();
      setVariations(data.variations);
    } catch (err) {
      setError('Failed to generate variations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = (imageUrl, index) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `variation-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'dark bg-gray-950 text-white' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between mt-20 items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-red-500 to-purple-600 text-transparent bg-clip-text">
            Image Variation Generator
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-500 dark:bg-gray-700"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => fileInputRef.current.click()}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Image
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
            <button
              onClick={() => cameraInputRef.current.click()}
              className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <Camera className="w-5 h-5 mr-2" />
              Take Photo
            </button>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleCameraCapture}
              ref={cameraInputRef}
              className="hidden"
            />
          </div>
          {!image && (
            <div
              className="w-full mt-10 h-80 bg-gradient-to-r from-red-400 via-green-400 to-purple-500 flex items-center justify-center rounded-lg text-gray-200 mb-6"
              onClick={() => fileInputRef.current.click()}
              style={{ cursor: 'pointer' }}
            >
              Click to Upload Image
            </div>
          )}
          {image && (
            <div className="mb-4">
              <img src={image} alt="Uploaded" className="max-w-full h-auto rounded" />
            </div>
          )}
          <button
            onClick={generateVariations}
            disabled={!image || loading}
            className=" px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-400"
          >
            {loading ? (
              <Loader className="w-5 h-5 animate-spin mx-auto" />
            ) : (
              'Generate Variations'
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {variations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {variations.map((variation, index) => (
              <div key={index} className="relative group">
                <img
                  src={variation}
                  alt={`Variation ${index + 1}`}
                  className="w-full h-auto rounded"
                />
                <button
                  onClick={() => downloadImage(variation, index)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Download className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageVariationGenerator;
