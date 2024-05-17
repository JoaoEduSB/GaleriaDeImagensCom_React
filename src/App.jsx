import React, { useState } from 'react'; 

  

function GaleriaDeImagens() { 

  const [imagens, setImagens] = useState([ 

    'https://via.placeholder.com/150', 

    'https://via.placeholder.com/150', 

    'https://via.placeholder.com/150' 

  ]); 

  

  const adicionarImagem = () => { 

    setImagens([...imagens, 'https://via.placeholder.com/150']); 

  }; 

  

  return ( 

    <div> 

      <h2>Galeria de Imagens</h2> 

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}> 

        {imagens.map((imagem, index) => ( 

          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} /> 

        ))} 

      </div> 

        <div className="buttonClass">
      <button className="buttonOficial" onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button> 
      </div>
    </div> 

  ); 

} 

  

export default GaleriaDeImagens; 