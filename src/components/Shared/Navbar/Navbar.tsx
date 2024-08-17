import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" component={"h1"} fontWeight={600}>
          H{" "}
          <Box component={"span"} color={"primary.main"}>
            C
          </Box>
          are
        </Typography>
        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography>Consultaiton</Typography>
          <Typography>Health Plan</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <Button>Login</Button>
      </Stack>
    </Container>
  );
}

export default Navbar;
