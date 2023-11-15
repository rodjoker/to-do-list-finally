import { Link } from "react-router-dom";
import { useColorMode } from '@chakra-ui/react';

import { Button, Stack } from '@chakra-ui/react'
function Menu() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    
<div className="menu">

<Stack direction='row' spacing={4} align='center'>
  
    
    <Button colorScheme='teal' variant='outline'>
     <Link to={"/"}>
        menu
     </Link>
    </Button>
   
    <Button colorScheme='teal' variant='outline'>
    <Link to={"/aboutme"}>
        Sobre mi 
    </Link>

    </Button> 

    <Button colorScheme='teal' variant='outline'>
      <Link to={"/experiencia"}> 
          Mi experiencia         
      </Link>
    </Button>

    <Button colorScheme='teal' variant='outline'>
      <Link to={"/diary"}>
         Diary
      </Link>
    </Button>    

    <Button onClick={toggleColorMode} size='xs' >
        🔆 {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
  
</Stack>

</div>
    
  );
}

export { Menu };