import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Link,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationBase from "../../assets/icons/location-base.svg";
import LocationAgent from "../../assets/icons/location-agent.svg";
import { BaseProps, BaseListProps } from "../../types";

const BaseList: React.FC<BaseListProps> = ({
  bases,
  onMarkerHover,
  highlightedBase,
}) => {
  const basesGrouped = bases.reduce(
    (acc, base, index) => {
      base.agent
        ? acc.agents.push({ ...base, index })
        : acc.bases.push({ ...base, index });
      return acc;
    },
    { bases: [], agents: [] }
  );

  const isMobile = useMediaQuery("(max-width:600px)");

  const renderList = (
    title: string,
    list: Array<any>,
    isAgent: boolean
    ): JSX.Element => (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <List>
        {list.map((base) => (
          <ListItem
            key={base.index}
            onMouseEnter={() => {
              onMarkerHover(base.index);
              onMarkerHover(base.index);
            }}
            onMouseLeave={() => {
              onMarkerHover(null);
              onMarkerHover(null);
            }}
            style={{
              backgroundColor: highlightedBase === base.index ? "#eee" : "#fff",
              padding: isAgent ? "8px 16px" : "16px 16px",
            }}
          >
            <ListItemAvatar>
              {base.agent ? (
                <Avatar>
                  <img
                    src={LocationAgent}
                    style={{ width: "20px", height: "20px" }}
                    alt="Agent location"
                  />
                </Avatar>
              ) : base.photo ? (
                <Avatar src={base.photo} />
              ) : (
                <Avatar>
                  <img
                    src={LocationAgent}
                    style={{ width: "45px", height: "45px" }}
                    alt="Base location"
                  />
                </Avatar>
              )}
            </ListItemAvatar>
            <ListItemText
              primary={base.nom}
              secondary={base.adresse}
              primaryTypographyProps={{
                style: { fontSize: isAgent ? "0.9rem" : "1.1rem" },
              }}
              secondaryTypographyProps={{
                style: { fontSize: isAgent ? "0.8rem" : "1rem" },
              }}
            />
            {!isAgent && (
              <Box display="flex" flexDirection="column" sx={{ mx: 5, width: "40%" }}>
                <Link href={`tel:${base.tel}`} style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "8px" }}>
                  <IconButton>
                    <PhoneIcon />
                  </IconButton>
                  <Typography variant="caption">{base.tel}</Typography>
                </Link>
                <Link href={`mailto:${base.email}`} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                  <Typography variant="caption">{base.email}</Typography>
                </Link>
              </Box>
            )}
            <Link
              href={base.GMapsURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isMobile ? (
                <IconButton>
                  <DirectionsIcon />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DirectionsIcon />}
                >
                  Itinéraire
                </Button>
              )}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div style={{ flex: 1 }}>
      {renderList("Nos Bases", basesGrouped.bases, false)}
      {renderList("Nos Agents", basesGrouped.agents, true)}
    </div>
  );
};

export default BaseList;
