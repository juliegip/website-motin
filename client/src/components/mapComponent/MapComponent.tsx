import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { bases } from "@/constants";
import { height } from "@mui/system";
import { useTheme, useMediaQuery } from "@mui/material";
import LocationBase from '../../assets/icons/location-base.svg';
import LocationAgent from '../../assets/icons/location-agent.svg';
import { MapComponentProps } from "@/types";

const MapComponent = ({ geoData, highlightedBase, onMarkerHover }: MapComponentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MapContainer
      center={[geoData.lat, geoData.lng]} 
      zoom={8}
      style={{width: isMobile ? "100%" : "45%"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bases.map((base, index) => {
        const isAgent = base.agent;
        return (
          <Marker
            key={index}
            position={[base.lat, base.lng]}
            icon={isAgent ? new Icon({ iconUrl: LocationAgent, iconSize: [25, 25] }) : new Icon({ iconUrl: LocationBase, iconSize: [45, 45] })}
            eventHandlers={{
              mouseover: () => onMarkerHover(index),
              mouseout: () => onMarkerHover(null),
            }}
          >
            <Tooltip>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                { !base.agent &&
                <img src={base.photo} alt={base.nom} style={{ width: "200px", height: "100%" }} />
                }
                <p style={{ fontWeight: "bold", margin: "5px 0" }}>{base.nom}</p>
                <p style={{ fontStyle: "italic", margin: "5px 0" }}>{base.adresse}</p>
                <p style={{ margin: "5px 0" }}>{base.tel}</p>
                <p style={{ margin: "5px 0" }}>{base.email}</p>
              </div>
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
