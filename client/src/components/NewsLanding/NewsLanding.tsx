import { Box, Link, Typography } from "@mui/material";
import { CarouselSlick } from "..";
import content from "@/constants/content.json";

type Props = {};

const NewsLanding = (props: Props) => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={5}
      id="newslanding"
    >
      <Typography variant="h2" gutterBottom textAlign="center">
        {content.sections.actualites}
      </Typography>
      <Box my={4}>
        <CarouselSlick />
      </Box>
      <Box sx={{ alignSelf: { xs: "center", sm: "flex-end" } }} mt={4}>
        <Link href="/actualites" underline="hover">
          <Typography fontSize="0.8rem" color={"secondary"} gutterBottom>
            {content.homepage.actualites_link}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default NewsLanding;
