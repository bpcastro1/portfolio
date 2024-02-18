import { Typography, Container, Grid, Box, Card, CardMedia } from "@mui/material";

export default function Component() {
  return (
    <div>
      <section style={{ paddingTop: "48px" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} align="center">
              <Typography variant="h3" component="h1" gutterBottom style={{ color: "black" }}>
                Bienvenido
              </Typography>
              <Typography variant="h3" component="h1" gutterBottom style={{ color: "black" }}>
                Portafolio Personal
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body1" gutterBottom style={{ color: "black" }}>
                  Soy estudiante de sexto semestre de Ingeniería en Tecnologías de la Información (TI) con experiencia profesional en soporte informático en Tao Tech. Además, tengo conocimientos en contabilidad, auditoría y una variedad de habilidades prácticas, incluyendo cocina, sastrería y albañilería. Actualmente, estoy cursando estudios en la Universidad de las Fuerzas Armadas ESPE y he realizado cursos que integran la tecnología de la información con la contabilidad. Mi enfoque futuro es convertirme en desarrollador full stack o especializarme en seguridad informática.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen 1"
                  height="200"
                  image="/clinica.jpg"
                  style={{borderRadius: "10px", border: "3px solid black"}}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen 2"
                  height="200"
                  image="/jquery.jpg"
                  style={{borderRadius: "10px", border: "3px solid black"}}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen 3"
                  height="200"
                  image="/libros.jpg"
                  style={{borderRadius: "10px", border: "3px solid black"}}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen 4"
                  height="200"
                  image="/riego.jpg"
                  style={{borderRadius: "10px", border: "3px solid black"}}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen 5"
                  height="200"
                  image="/scroll.jpg"
                  style={{borderRadius: "10px", border: "3px solid black"}}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Imagen 6"
                  height="200"
                  image="/vacunas.jpg"
                  style={{borderRadius: "10px", border: "3px solid black"}}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
