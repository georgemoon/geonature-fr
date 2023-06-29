import { LatLng, Layer, CircleMarker } from "leaflet";
import { Feature, Point, FeatureCollection } from "geojson";
import { GeoJSON } from "react-leaflet";

import BaseMap from "./BaseMap";
import User from "@/interfaces/User";

const featureStyle = {
  color: "#0000ff",
  weight: 2,
  opacity: 0.9,
  fillOpacity: 0.3,
};

const PartnersMap = ({ users }: { users: User[] }) => {
  const tooltipOnEachFeature = (feature: Feature, layer: Layer) => {
    layer.bindTooltip(
      `${feature?.properties?.name} (${feature?.properties?.type})`,
      { direction: "center" }
    );
  };

  const pointToLayer = (feature: Feature<Point>, latLng: LatLng) =>
    new CircleMarker(latLng);

  // Convert from Markdown-generated array to spec-compliant GeoJSON
  const usersAsFeatures: Feature[] = users.map(({ geometry, ...others }) =>
    Object.assign(
      {},
      {
        type: "Feature" as const,
        properties: {
          ...others,
        },
        geometry: JSON.parse(geometry),
      }
    )
  );

  const usersFeatureCollection: FeatureCollection = {
    type: "FeatureCollection" as const,
    features: usersAsFeatures,
  };

  console.log(usersFeatureCollection);

  return (
    <BaseMap>
      <GeoJSON
        data={usersFeatureCollection}
        style={featureStyle}
        onEachFeature={tooltipOnEachFeature}
        pointToLayer={pointToLayer}
      />
    </BaseMap>
  );
};

export default PartnersMap;
