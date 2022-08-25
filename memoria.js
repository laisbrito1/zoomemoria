

const section = document.querySelector('section');
const getData = () => [
    { nome: "aranha",
      img: "img/aranha.svg"
    },
    { nome: "aranha",
      img: "img/aranharesp.svg"
    },
    { nome: "aves",
      img:"img/aves.svg"
    },
    { nome: "aves",
      img:"img/avesresp.svg"
   },
    { nome:'baleia',
      img:'img/baleia.svg'
    },
    { nome:'baleia',
      img:'img/baleiaresp.svg'
    },
    
    { nome:'borboleta',
      img:'img/borboleta.svg'
    },
    { nome:'borboleta',
      img: 'img/borboletaresp.svg'
    },
    { nome:'cachorro',
      img:'img/cachorro.svg'
    },
    { nome:'cachorro',
      img:'img/cachorroresp.svg'
    },
    { nome: 'cavalo',
      img:'img/cavalo.svg'
    },
    {
      nome: 'cavalo',
      img:'img/cavaloresp.svg'
    },
    { nome: 'dinossauro',
      img:'img/dinossauro.svg'
    },
    { nome: 'dinossauro',
      img:'img/dinossauroresp.svg'
    },
    { nome:'lula',
      img:'img/lula.svg'
    },
    { nome:'lula',
      img:'img/lularesp.svg'
    },
    { nome:'primata',
      img:'img/primata.svg'
    },
    { nome:'primata',
      img:'img/primataresp.svg'
    },
    { nome:'tubarao',
      img:'img/tubarao.svg'
    },
    { nome:'tubarao',
      img:'img/tubaraoresp.svg',
    }
  
];
const data = getData();

//embraralha
const randomize=()=>{
  const cardData= getData();
  cardData.sort(()=>Math.random()-0.5);
  return cardData;
};


const cardGenerator =()=>{
  const cardData= randomize();
  
  //gera a grade 
  cardData.forEach((item, index)=>{  
    const card= document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList= "card";
    face.classList= "face";
    back.classList= "back";

    face.src= item.img;
    card.setAttribute('name', item.nome);


    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    
    card.addEventListener('click',(e)=>{
      card.classList.toggle('toggleCard');
      checkCards(e);
    })
  });
};

//match 
const checkCards = (e)=>{
  const clickedCard= e.target;
  clickedCard.classList.add('flipped');
  const flippedCards= document.querySelectorAll('.flipped')
  

  if (flippedCards.length === 2) {
    if(flippedCards[0].getAttribute('name')===
    flippedCards[1].getAttribute('name')
      ){
        flippedCards.forEach(card=>{
          card.classList.remove('flipped')
          card.style.pointerEvents="none"});
      } else{
        
        flippedCards.forEach(card=>{
          card.classList.remove('flipped')
          setTimeout(()=>card.classList.remove('toggleCard'),4000)
        });
      }
    }
}

cardGenerator()
