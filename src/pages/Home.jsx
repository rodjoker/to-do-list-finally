import {  Container, Box} from '@chakra-ui/react'
import banner from '../image/banner.jpg'

export default function Home() {
  return (
    <div>
  <Box
    h="30vh"
    w="80vh"
    bg="gray"
    bgImage= { `url(${banner})`} 
    bgRepeat='no-repeat'
    bgSize='cover'
    ></Box>
  
  <Container>
  <div align="justify">
    Hoy es un día muy especial para mí. Después de mucho esfuerzo y dedicación,
    he terminado mi bootcamp de programación. Estoy muy orgulloso de lo que he 
    logrado y quiero compartir con ustedes la importancia de esforzarse y alcanzar 
    una meta.
  </div>
  </Container><br/>

<Container>
<div align="justify">
    El esfuerzo es la clave para el éxito. Sin esfuerzo, es imposible alcanzar nuestros objetivos.
    El esfuerzo nos ayuda a superar los obstáculos, a aprender de nuestros errores y a crecer como 
    personas.Cuando nos esforzamos por alcanzar una meta, desarrollamos una serie de habilidades y
    cualidades que nos serán muy útiles en la vida. Nos volvemos más resilientes, más disciplinados
    y más seguros de nosotros mismos.
</div>
</Container><br/>

<Container>
<div align="justify">
  Además, el esfuerzo nos da una gran satisfacción personal. Cuando alcanzamos una meta, nos sentimos
  orgullosos de lo que hemos logrado y nos sentimos capaces de lograr cualquier cosa que nos propongamos.
  En mi caso, el bootcamp de programación ha sido un reto muy exigente. He tenido que estudiar muchas 
  horas, practicar mucho y superar muchos obstáculos. Pero gracias al esfuerzo, he podido aprender a 
  programar y he adquirido las habilidades necesarias para empezar mi carrera como desarrollador.
</div>
</Container><br/>
<Container> 
<div align="justify">
  Estoy muy agradecido por esta oportunidad y por todas las personas que me han apoyado en este camino.
  Sé que el esfuerzo no termina aquí, pero estoy seguro de que, con trabajo duro, seguiré alcanzando mis metas.
</div>
</Container>
  

    </div>
  )
}
