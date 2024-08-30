import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type TSpeciality = {
  id: string;
  title: string;
  icon: string;
};

const Specialist = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/specialties`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialists }: { data: TSpeciality[] } = await res.json();

  return (
    <Container>
      <Box
        sx={{
          textAlign: "center",
          my: 16,
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment across specialities
          </Typography>
          <Typography color={"secondary.main"} component={"p"} fontWeight={400}>
            Find experienced doctors all across specialities
          </Typography>
        </Box>
        <Stack direction={"row"} gap={5} mt={5}>
          {specialists?.map((specialty) => (
            <Box
              key={specialty.id}
              sx={{
                backgroundColor: "rgba(245,245,245,1)",
                width: "150px",
                borderRadius: "10px",
                border: "1px solid rgba(250,250,250,1)",
                padding: "40px 10px",
                textAlign: "center",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid #1586FD",
                  transition: "border 0.2s ease-in-out",
                },
              }}
            >
              <Image
                src={specialty?.icon as string}
                alt={specialty?.title}
                width={100}
                height={100}
              />
              <Box>
                <Typography
                  color={"secondary.main"}
                  component={"p"}
                  fontWeight={400}
                  mt={2}
                >
                  {specialty?.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Specialist;
