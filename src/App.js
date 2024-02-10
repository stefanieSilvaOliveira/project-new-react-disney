import React from 'react'
import { Container,Header,Image,ImageContainer,Overlay,Logo,ContainerItens,Button,P} from "./style";
import pequenaSereia from  './assets/pequena-sereia.png';
import logoDisney from './assets/icone-disney.png';
import imagePequenaSereia from './assets/image-pequena-sereia-h1.png';
import Slider from './Slider/slider';

function App() {

return(
<Container>
<Header> 
<Logo src={logoDisney} alt="Logo-Disney"></Logo>  
<ul>
<li><i class="fas fa-home"></i> Inicio</li>
<li><i class="fas fa-search"></i> Pesquisa</li>
<li><i class="fas fa-plus"></i> Minha Lista</li>
<li><i class="fas fa-star"></i> Originais</li>
<li><i class="fas fa-film"></i>Filmes</li>
<li><i class="fas fa-tv"></i>Séries</li>
</ul>  
</Header> 

<ImageContainer>
<Image src={pequenaSereia} alt="main-principal"/>
<Overlay />
</ImageContainer>

<ContainerItens>
<img src={imagePequenaSereia} alt="titulo-corpo"></img>  
</ContainerItens>
<Button><i class="fas fa-play"></i>Continuar</Button>
<P>Nesta versão repaginada da adorada história,a curiosa sereia Ariel
decide emegir das profundezas e conhecer a vida em terra firme,contrariando
os conselhos do seu pai. E em meio a novas e arriscadas aventuras,ela encontra
um principe,uma bruxa do mar,e mergulha em uma inesperada
jornada de autodescoberta.
</P>
<Slider/>
</Container>
)
};

export default App;
