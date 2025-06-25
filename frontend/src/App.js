import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';

function Feature({ title, description }) {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
}

function Testimonial({ name, avatar, text }) {
  return (
    <Paper
      elevation={2}
      sx={{ p: 3, maxWidth: 400, margin: 'auto', textAlign: 'center' }}
    >
      <Avatar
        alt={name}
        src={avatar}
        sx={{ width: 64, height: 64, margin: 'auto', mb: 2 }}
      />
      <Typography variant="body1" fontStyle="italic" gutterBottom>
        "{text}"
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        — {name}
      </Typography>
    </Paper>
  );
}

function App() {
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setMensaje(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMensaje('Error al conectar con el servidor');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <ShoppingCartIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pichici Store
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Productos</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Bienvenido a Pichici Store
          </Typography>
          <Typography variant="h6" paragraph>
            {loading ? 'Cargando...' : mensaje}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            Comprar Ahora
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          ¿Por qué elegirnos?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Feature
            title="Calidad Garantizada"
            description="Productos de alta calidad con garantía extendida para tu tranquilidad."
          />
          <Feature
            title="Envío Rápido"
            description="Entregas en 24-48 horas en la mayoría de las zonas."
          />
          <Feature
            title="Soporte 24/7"
            description="Nuestro equipo está disponible todo el día para ayudarte."
          />
        </Grid>
      </Container>

      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Testimonios
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Testimonial
                name="Ing Edgar Zambrana"
                avatar="https://i.pravatar.cc/64?img=10"
                text="Excelente atención técnica y productos confiables que superan mis expectativas."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Testimonial
                name="Ing Misael Condo Rodriguez"
                avatar="https://i.pravatar.cc/64?img=20"
                text="Pichici Store ofrece soporte rápido y soluciones a la medida que me han ayudado mucho."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Testimonial
                name="Alex Jimenez Subieta"
                avatar="https://i.pravatar.cc/64?img=30"
                text="Muy recomendable, la experiencia de compra fue fluida y los productos de excelente calidad."
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 3,
          mt: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          © 2025 Pichici Store. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2">
          Hecho con ❤️ en React + Node.js
        </Typography>
      </Box>
    </>
  );
}

export default App;
