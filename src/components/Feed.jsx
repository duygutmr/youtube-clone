import { Stack, Box, Typography } from "@mui/material";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" } }}></Box>
    </Stack>
  );
};

export default Feed;