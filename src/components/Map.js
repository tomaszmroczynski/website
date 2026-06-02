import React from "react";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Finnestadveien+371,+1880+Eidsberg,+Norway&hl=no&z=14&output=embed";

const SimpleMap = () => (
  <div className="map" style={{ height: "400px", width: "100%" }}>
    <iframe
      title="Limes Interiør – Finnestadveien 371, 1880 Eidsberg"
      src={MAP_EMBED_URL}
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default SimpleMap;
