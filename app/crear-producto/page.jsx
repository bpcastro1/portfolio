import Link from "next/link";
import { Typography, Container, Grid, Box, Card, CardMedia, Button } from "@mui/material";

export default function Component() {
  return (
    <div>
      <section style={{ paddingTop: "48px", paddingBottom: "40px" }}>
        <Container>
          <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
            <Typography variant="h3" gutterBottom style={{ color: 'blue', fontSize: '3rem', fontWeight: 'bold' }}>
             <span>Proyectos</span>
            </Typography>
          </Box>
        </Container>
      </section>
      <section style={{ paddingTop: "10px", paddingBottom: "48px" }}>
        <Container>
          <Grid container spacing={4}>
            <ProjectItem name="Registro de vacunas" description="Desarrollado en java registra las vacunas y sus respectivas dosis a personas y produce alertas para su aplicación." link="https://github.com/bpcastro1/G2.3594.MDSW.ResgistroVacunas" imageSrc ="/vacunas.jpg" />
            <ProjectItem name="Landing Libros" description="Página de inicio de una empresa de ventas de libros y la incentivación a la lectura en los jóvenes lectores." link="https://github.com/bpcastro1/10037-bpcastro1-Landing_Page" imageSrc="/libros.jpg" />
            <ProjectItem name="Scroll Libros" description="Desarrollo de la parte interna de la aplicación de una empresa de venta de libros." link="https://github.com/bpcastro1/scroll" imageSrc="/scroll.jpg" />
            <ProjectItem name="Ejemplos jQuery" description="Ejemplos de casos básicos de jQuery." link="https://github.com/bpcastro1/terminado" imageSrc="/jquery.jpg" />
            <ProjectItem name="Sensor Riego" description="Automatización de un sistema de riego en empresas dedicadas a la botánica." link="https://github.com/christopher-ramos/Arquitectura" imageSrc="/riego.jpg" />
            <ProjectItem name="Clínica Veris" description="Manejo interno y externo de la información de una clínica médica." link="https://github.com/bpcastro1/.net" imageSrc="/clinica.jpg" />
          </Grid>
        </Container>
      </section>
    </div>
  );
}

function ProjectItem({ name, description, link, imageSrc }) {
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <Box p={3}>
          <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            {name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <Link href={link} passHref>
            <Button variant="outlined" sx={{ bgcolor: "LightBlue", color: "black", border: "1px solid #ccc", boxShadow: "none", transition: "background-color 0.3s", "&:hover": { bgcolor: "#f3f3f3" } }}>Read More</Button>
          </Link>
        </Box>
        <CardMedia
          component="img"
          height="150" 
          image={imageSrc}
          alt={name}
          style={{ borderRadius: 10, border: "3px solid black" }} 
        />
      </Card>
    </Grid>
  );
}
