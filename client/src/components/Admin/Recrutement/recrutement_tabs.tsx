import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RecrutementList from "./recrutement_list";
import { RecrutementListProps } from "@/types";

const RecrutementTabs = ({ recrutements, onRecrutementDeleted }: RecrutementListProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "1rem",
            }}
            className="recrutement"
        >
            <RecrutementList recrutements={recrutements} onRecrutementDeleted={onRecrutementDeleted} />
            <Fab
                color="primary"
                aria-label="add"
                href="/admin/recrutement"
            >
                <AddIcon />
            </Fab>
        </Box>
    );
}

export default RecrutementTabs;