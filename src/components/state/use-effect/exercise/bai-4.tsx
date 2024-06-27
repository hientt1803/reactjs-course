import React, { useEffect, useState } from "react";

interface Location {
  lat: number | null;
  lon: number | null;
}

const UserLocation: React.FC = () => {
  const [location, setLocation] = useState<Location>({ lat: null, lon: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h1>User Location</h1>
      {location.lat !== null && location.lon !== null ? (
        <p>
          Latitude: {location.lat}, Longitude: {location.lon}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default UserLocation;
