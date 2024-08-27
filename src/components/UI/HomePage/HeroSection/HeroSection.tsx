import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import assets from "@/assets";

function HeroSection() {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-90px",
            left: "-120px",
            width: "700px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component={"h1"} fontWeight={600}>
          Helthier Herts
        </Typography>
        <Typography variant="h3" component={"h1"} fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h3"
          component={"h1"}
          color={"primary.main"}
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component={"p"}
          sx={{
            my: 4,
          }}
          fontWeight={400}
          color={"secondary.main"}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ad.
          Rerum quidem minus inventore odio, repellat quisquam vel officia nisi.
          amet consectetur amet consectetur.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          p: 1,
          position: "relative",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "200px",
            top: "-30px",
            zIndex: -1,
          }}
        >
          <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={240}
            height={240}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "0px",
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default HeroSection;
