import Link from "next/link";
import { Typography, Container, Box, Button, Paper } from "@mui/material";

export default function Component() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "rgba(200, 200, 200, 0.5)" }}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} sx={{ backgroundColor: "#f5f5f5", p: 2, maxWidth: "fit-content" }}>
          <Box textAlign="center">
            <Typography variant="h3" component="h1" gutterBottom>Bryan Castro</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h3" component="h1" gutterBottom>Contador y Desarrollador Jr.</Typography>
          </Box>
          <Box maxWidth="sm" mx="auto" textAlign="center" mt={4} spacing={4}>
            <ContactInfo text="bryan_129905@hotmail.com" />
            <ContactInfo text="bpcastro1@espe.edu.ec" />
            <ContactInfo text="+593 985557178" />
            <ContactInfo text="+593 994768248" />
            <ContactInfo text="Quito - Ecuador" />
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
          <Button 
            variant="outlined" 
            href="https://www.linkedin.com/in/bryan-paul-castro-calvopi%EF%BF%BDa-1442362b5/" 
            target="_blank" 
            sx={{ 
              bgcolor: "LightBlue", 
              color: "black", 
              border: "1px solid #ccc", 
              boxShadow: "none", 
              transition: "background-color 0.3s", 
              "&:hover": { bgcolor: "#f3f3f3" } 
            }}
          >
            LinkedIn
          </Button>
        </Box>
        </Paper>
      </Container>
    </div>
  );
}

function ContactInfo({ text }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
}
