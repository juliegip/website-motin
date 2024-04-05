import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ActusList from "./actus_list";
import { ActusListProps } from "../../../types";

const ActusTabs = ({ actus, onActuDeleted }: ActusListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
      }}
      className="actus"
    >
      <ActusList actus={actus} onActuDeleted={onActuDeleted} />
      <Fab color="primary" aria-label="add" href="/admin/actus">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default ActusTabs;
