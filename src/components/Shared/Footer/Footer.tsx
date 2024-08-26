import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";
import x from "@/assets/landing_page/twitter.png";
import linkdin from "@/assets/landing_page/linkedin.png";
import instragram from "@/assets/landing_page/instagram.png";

function Footer() {
  return (
    <Box bgcolor={"rgb(17,26,36)"} py={5}>
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
        <Stack direction={"row"} gap={2} justifyContent={"center"} py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="Facebook" />
          <Image src={x} width={30} height={30} alt="Facebook" />
          <Image src={linkdin} width={30} height={30} alt="Facebook" />
          <Image src={instragram} width={30} height={30} alt="Facebook" />
        </Stack>

        <div className="border-b-[1px] border-dashed"></div>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={3}
        >
          <Typography component={"p"} color={"#fff"}>
            &copy; H-Care 2024, All Rights Reserve
          </Typography>
          <Typography
            color={"#fff"}
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            H{" "}
            <Box component={"span"} color={"primary.main"}>
              C
            </Box>
            are
          </Typography>
          <Typography component={Link} href={"/"} color={"#fff"}>
            Privacy Policy! Terms and Condition
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
