import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";

function Footer() {
  return (
    <Box bgcolor={"rgb(17,26,36)"}>
      <Container>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Typography color={"#fff"} component={Link} href="/consultation">
            Consultaiton
          </Typography>
          <Typography color={"#fff"} component={Link} href="/helth-plan">
            Health Plan
          </Typography>
          <Typography color={"#fff"} component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color={"#fff"} component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color={"#fff"} component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
