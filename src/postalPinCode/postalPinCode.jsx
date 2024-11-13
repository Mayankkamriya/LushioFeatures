import React, { useState, useEffect } from "react";

const PanCodeLookup = () => {
  const [panCode, setPanCode] = useState("");
  const [locationInfo, setLocationInfo] = useState({ district: "", state: "" });
  const [customDistrict, setCustomDistrict] = useState(""); // State for custom district
  const [error, setError] = useState(""); // State for error messages
  const [cityOptions, setCityOptions] = useState([]); // State to hold cities from API
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city

  useEffect(() => {
    if (panCode.length === 6) {
      fetchDistrictAndState(panCode);
    } else {
      // Reset locationInfo, cityOptions, and error if the input is not 6 digits
      setLocationInfo({ district: "", state: "" });
      setCityOptions([]);
      setError("");
    }
  }, [panCode]);

  const fetchDistrictAndState = async (code) => {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${code}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data && data[0] && data[0].Status === "Success") {
        const postOffices = data[0].PostOffice || [];
        setCityOptions(postOffices); // Set city options from PostOffice array
        const district = postOffices[0]?.District || "";
        const state = postOffices[0]?.State || "";

        setLocationInfo({ district, state });

        // Check if district name exists in city options, and if so, set it as default
        const districtInCityOptions = postOffices.find(
          (city) => city.Name.toLowerCase() === district.toLowerCase()
        );

        if (districtInCityOptions) {
          setSelectedCity(districtInCityOptions.Name); // Set district as the default selected city
        } else {
          setSelectedCity(postOffices[0]?.Name || ""); // Default to the first city if district not found
        }

        setError(""); // Clear any previous error message
      } else {
        setLocationInfo({ district: "", state: "" });
        setCityOptions([]); // Reset city options if invalid PIN code
        setError("Invalid PIN code. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching district and state:", error.message);
      setError("Error fetching data. Please try again.");
    }
  };

  const handleCustomDistrictChange = (e) => {
    setCustomDistrict(e.target.value);
    setLocationInfo((prev) => ({ ...prev, district: e.target.value }));
  };

  return (
    <div>
      <h3>Enter 6-digit Postal PIN Code:</h3>
      <input
        type="text"
        value={panCode}
        onChange={(e) => setPanCode(e.target.value)}
        maxLength={6}
      />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}

      {panCode.length === 6 && !error && (
        <div>
          <label htmlFor="">District:</label>
          <input
            type="text"
            value={locationInfo.district}
            onChange={handleCustomDistrictChange}
          />
          <label htmlFor="">State:</label>
          <input
            type="text"
            value={locationInfo.state}
            onChange={(e) => setLocationInfo((prev) => ({ ...prev, state: e.target.value }))}
          />

          {/* Dropdown for selecting city */}
          <div>
            <label htmlFor="city">City:</label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cityOptions.map((city, index) => (
                <option key={index} value={city.Name}>
                  {city.Name}
                </option>
              ))}
            </select>
          </div>

          {/* Display the selected city */}
          {selectedCity && (
            <p>
              Selected City: <strong>{selectedCity}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PanCodeLookup;
