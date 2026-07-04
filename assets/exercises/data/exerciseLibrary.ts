export type ExerciseLibraryItem = {
  id: string;
  name: string;
  bodyPart: string;
  equipment: string;
  target: string;
  instructions: string[];
};

export { getExerciseGifSource } from "./exerciseGifSources";

export const exerciseLibrary: ExerciseLibraryItem[] = [
  {
    "id": "0001",
    "name": "Abdominal 3/4",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos atrás da cabeça, mantendo os cotovelos apontados para os lados.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo, flexionando o tronco para a frente até atingir aproximadamente 45 graus.",
      "Faça uma breve pausa no ponto mais alto e, em seguida, retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0002",
    "name": "Flexão lateral a 45°",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros e os braços estendidos ao lado do corpo.",
      "Mantenha as costas retas e o abdômen contraído enquanto inclina lentamente o tronco para um dos lados, levando a mão em direção ao joelho.",
      "Faça uma breve pausa no ponto mais baixo e retorne lentamente à posição inicial.",
      "Repita para o outro lado."
    ]
  },
  {
    "id": "0003",
    "name": "Abdominal bicicleta",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com as mãos posicionadas atrás da cabeça.",
      "Eleve as pernas do chão e flexione os joelhos em um ângulo de 90 graus.",
      "Leve o cotovelo direito em direção ao joelho esquerdo enquanto estende simultaneamente a perna direita.",
      "Retorne à posição inicial e repita o movimento para o lado oposto, levando o cotovelo esquerdo em direção ao joelho direito enquanto estende perna esquerda."
    ]
  },
  {
    "id": "1512",
    "name": "Alongamento de quadríceps em quatro apoios",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Comece em quatro apoios, com as mãos alinhadas abaixo dos ombros e os joelhos abaixo dos quadris.",
      "Estenda uma perna para trás, mantendo o joelho flexionado e o pé em dorsiflexão.",
      "Abaixe lentamente os quadris em direção ao chão até sentir o alongamento do quadríceps.",
      "Mantenha a posição por 20 a 30 segundos."
    ]
  },
  {
    "id": "0006",
    "name": "Toque alternado nos calcanhares",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com os joelhos flexionados e os pés apoiados no chão.",
      "Estenda os braços ao lado do corpo, paralelos ao chão.",
      "Contraia o abdômen, eleve os ombros do chão e leve a mão direita em direção ao calcanhar direito.",
      "Retorne à posição inicial e repita para o lado esquerdo, levando a mão esquerda em direção ao calcanhar esquerdo."
    ]
  },
  {
    "id": "0007",
    "name": "Puxada lateral alternada",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Sente-se no aparelho de cabo, mantendo as costas retas e os pés apoiados no chão.",
      "Segure as alças com pegada pronada, um pouco mais aberta que a largura dos ombros.",
      "Incline o tronco levemente para trás e puxe as alças em direção ao peito, aproximando as escápulas.",
      "Faça uma breve pausa no ponto de maior contração e retorne lentamente as alças à posição inicial."
    ]
  },
  {
    "id": "1368",
    "name": "Círculos com o tornozelo",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à frente.",
      "Eleve uma das pernas e faça movimentos circulares com o tornozelo.",
      "Realize a quantidade desejada de círculos em um sentido e, depois, inverta o movimento.",
      "Repita com a outra perna."
    ]
  },
  {
    "id": "3293",
    "name": "Barra fixa arqueiro",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique suspenso em uma barra fixa com pegada pronada, um pouco mais aberta que a largura dos ombros.",
      "Contraia o abdômen e leve as escápulas para baixo e para trás.",
      "Ao elever o corpo, flexione um dos braços e leve o cotovelo em direção à lateral do tronco, mantendo o outro braço estendido.",
      "Continue a puxada até o queixo ultrapassar a barra e o braço em trabalho estar totalmente flexionado."
    ]
  },
  {
    "id": "3294",
    "name": "Flexão arqueiro",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece na posição de flexão, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Estenda um dos braços para o lado, paralelo ao chão.",
      "Abaixe o corpo flexionando os cotovelos, mantendo as costas retas e o abdômen contraído.",
      "Empurre o corpo para cima e retorne à posição inicial."
    ]
  },
  {
    "id": "2355",
    "name": "Elevação de joelhos na barra",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique suspenso em uma barra fixa, com os braços totalmente estendidos e os joelhos flexionados a 90 graus.",
      "Contraia o abdômen e eleve os joelhos em direção ao peito, aproximando-os dos cotovelos o máximo possível.",
      "Abaixe lentamente as pernas até retornar à posição inicial.",
      "Repita pelo número desejado de repetições."
    ]
  },
  {
    "id": "2333",
    "name": "Elevação de pernas estendidas na barra",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique suspenso em uma barra fixa, com os braços totalmente estendidos e as pernas estendidas para baixo.",
      "Contraia o abdômen e eleve as pernas à frente até que fiquem paralelas ao chão.",
      "Mantenha a posição por um instante no ponto mais alto e abaixe lentamente as pernas até retornar à posição inicial.",
      "Repita pelo número desejado de repetições."
    ]
  },
  {
    "id": "3214",
    "name": "Toque circular nos pés com braços abertos",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros e os braços estendidos para os lados.",
      "Mantendo as pernas estendidas, incline o tronco para a frente e leve a mão direita em direção aos pés.",
      "Enquanto leva a mão para baixo, eleve simultaneamente a perna esquerda estendida para trás, mantendo o equilíbrio.",
      "Retorne à posição inicial e repita o movimento com a mão esquerda em direção aos pés enquanto eleva a perna direita para trás."
    ]
  },
  {
    "id": "3204",
    "name": "Abdominal completo com braços acima da cabeça",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com os joelhos flexionados e os pés apoiados no chão.",
      "Estenda os braços acima da cabeça, mantendo-os retos.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo, flexionando o tronco para a frente até ficar sentado.",
      "Faça uma breve pausa no ponto mais alto e retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0009",
    "name": "Paralelas assistidas para peitoral (ajoelhado)",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste o aparelho na altura desejada e apoie firmemente os joelhos na plataforma.",
      "Segure as alças com as palmas voltadas para baixo e os braços totalmente estendidos.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Faça uma breve pausa e empurre o corpo para cima até retornar à posição inicial."
    ]
  },
  {
    "id": "0011",
    "name": "Elevação de joelhos suspenso assistida",
    "bodyPart": "abdômen",
    "equipment": "assistido",
    "target": "abdômen",
    "instructions": [
      "Fique suspenso em uma barra fixa, com os braços totalmente estendidos e as palmas voltadas para a frente.",
      "Contraia o abdômen e eleve os joelhos em direção ao peito, flexionando os quadris e os joelhos.",
      "Faça uma breve pausa no ponto mais alto do movimento, contraindo o abdômen.",
      "Abaixe lentamente as pernas até retornar à posição inicial."
    ]
  },
  {
    "id": "0010",
    "name": "Elevação de joelhos suspenso com arremesso para baixo assistido",
    "bodyPart": "abdômen",
    "equipment": "assistido",
    "target": "abdômen",
    "instructions": [
      "Fique suspenso em uma barra fixa, com os braços totalmente estendidos e as palmas voltadas para a frente.",
      "Contraia o abdômen e eleve os joelhos em direção ao peito, mantendo as pernas unidas.",
      "Quando os joelhos atingirna altura do peito, lance as pernas de forma explosiva em direção ao chão, estendendo-as completamente.",
      "Deixe as pernas subirem novamente com o balanço e repita o movimento pelo número desejado de repetições."
    ]
  },
  {
    "id": "1708",
    "name": "Alongamento assistido de panturrilha deitado",
    "bodyPart": "panturrilhas",
    "equipment": "assistido",
    "target": "panturrilhas",
    "instructions": [
      "Deite-se de costas com as pernas estendidas.",
      "Flexione um dos joelhos e apoie o pé no chão.",
      "Com as mãos ou uma toalha, puxe suavemente a ponta do pé em direção ao corpo até sentir o alongamento da panturrilha.",
      "Mantenha o alongamento por 20 a 30 segundos."
    ]
  },
  {
    "id": "1709",
    "name": "Alongamento assistido de glúteos deitado",
    "bodyPart": "pernas",
    "equipment": "assistido",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com as pernas estendidas.",
      "Flexione o joelho direito e apoie o tornozelo direito sobre a coxa esquerda, logo acima do joelho.",
      "Segure a coxa esquerda com as duas mãos e puxe-a suavemente em direção ao peito.",
      "Mantenha o alongamento por 20 a 30 segundos."
    ]
  },
  {
    "id": "1710",
    "name": "Alongamento assistido de glúteos e piriforme deitado",
    "bodyPart": "pernas",
    "equipment": "assistido",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com as pernas estendidas.",
      "Flexione o joelho direito e apoie o tornozelo direito sobre a coxa esquerda, logo acima do joelho.",
      "Segure a coxa esquerda com as duas mãos e puxe-a suavemente em direção ao peito.",
      "Mantenha o alongamento por 20 a 30 segundos."
    ]
  },
  {
    "id": "0012",
    "name": "Elevação de pernas deitado com arremesso lateral assistido",
    "bodyPart": "abdômen",
    "equipment": "assistido",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com as pernas estendidas e os braços ao lado do corpo.",
      "Coloque as mãos sob os glúteos para dar apoio.",
      "Contraia o abdômen e eleve as pernas do chão, mantendo-as estendidas.",
      "Mantendo as pernas unidas, abaixe-as para um dos lados até ficarna poucos centímetros do chão."
    ]
  },
  {
    "id": "0013",
    "name": "Elevação de pernas deitado com arremesso para baixo assistido",
    "bodyPart": "abdômen",
    "equipment": "assistido",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com as pernas estendidas e os braços ao lado do corpo.",
      "Coloque as mãos sob os glúteos para dar apoio.",
      "Contraia o abdômen e eleve as pernas do chão, mantendo-as estendidas.",
      "Eleve as pernas até que fiquem perpendiculares ao chão."
    ]
  },
  {
    "id": "0014",
    "name": "Rotação russa assistida com bola medicinal",
    "bodyPart": "abdômen",
    "equipment": "bola medicinal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão, com os joelhos flexionados e os pés apoiados.",
      "Segure a bola medicinal com as duas mãos à frente do peito.",
      "Incline o tronco levemente para trás, contraindo o abdômen e mantendo as costas retas.",
      "Gire lentamente o tronco para a direita, levando a bola medicinal em direção ao lado direito do corpo."
    ]
  },
  {
    "id": "0015",
    "name": "Barra fixa assistida com pegada neutra fechada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste o aparelho para a carga de assistência e a altura desejadas.",
      "Posicione as mãos nas barras paralelas com pegada fechada e as palmas voltadas uma para a outra.",
      "Fique suspenso nas barras, com os braços totalmente estendidos e os pés fora do chão.",
      "Contraia a musculatura das costas e puxe o corpo para cima, mantendo os cotovelos próximos em relação ao tronco."
    ]
  },
  {
    "id": "0016",
    "name": "Elevação assistida de pernas deitado de bruços",
    "bodyPart": "pernas",
    "equipment": "assistido",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de bruços em um colchonete ou banco, com as pernas totalmente estendidas.",
      "Peça a um parceiro para segurar seus tornozelos ou prenda-os com uma faixa elástica.",
      "Contraia os músculos posteriores das coxas e eleve as pernas em direção aos glúteos, mantendo os joelhos estendidos.",
      "Faça uma breve pausa no ponto mais alto e abaixe lentamente as pernas até retornar à posição inicial."
    ]
  },
  {
    "id": "1713",
    "name": "Alongamento assistido de quadríceps deitado de bruços",
    "bodyPart": "pernas",
    "equipment": "assistido",
    "target": "quadríceps",
    "instructions": [
      "Deite-se de bruços no chão, com as pernas estendidas.",
      "Flexione o joelho esquerdo e leve a mão esquerda para trás para segurar o pé ou o tornozelo esquerdo.",
      "Puxe suavemente o pé esquerdo em direção aos glúteos até sentir o alongamento do quadríceps esquerdo.",
      "Mantenha o alongamento por 20 a 30 segundos e, depois, solte."
    ]
  },
  {
    "id": "1714",
    "name": "Alongamento assistido do reto femoral deitado de bruços",
    "bodyPart": "abdômen",
    "equipment": "assistido",
    "target": "abdômen",
    "instructions": [
      "Deite-se de bruços no chão, com as pernas estendidas.",
      "Flexione o joelho direito e leve a mão direita para trás para segurar o pé ou o tornozelo direito.",
      "Puxe suavemente o pé ou o tornozelo direito em direção aos glúteos até sentir o alongamento na parte da frente da coxa direita.",
      "Mantenha o alongamento por 20 a 30 segundos."
    ]
  },
  {
    "id": "0017",
    "name": "Barra fixa assistida",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste o aparelho para a carga de assistência e a altura desejadas.",
      "Segure as alças com pegada pronada, um pouco mais aberta que a largura dos ombros.",
      "Fique suspenso, com os braços totalmente estendidos e os pés fora do chão.",
      "Contraia a musculatura das costas e puxe o corpo em direção às alças, mantendo os cotovelos próximos em relação ao tronco."
    ]
  },
  {
    "id": "1716",
    "name": "Alongamento assistido do peitoral maior sentado na bola suíça",
    "bodyPart": "peito",
    "equipment": "assistido",
    "target": "peitorais",
    "instructions": [
      "Sente-se em uma bola suíça, com os pés apoiados no chão e as costas retas.",
      "Segure a bola com as duas mãos e estenda os braços à frente do corpo.",
      "Aproxime lentamente a bola do peito até sentir o alongamento da musculatura peitoral.",
      "Mantenha o alongamento por alguns segundos e retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "1712",
    "name": "Alongamento assistido de adutores deitado de lado",
    "bodyPart": "pernas",
    "equipment": "assistido",
    "target": "adutores",
    "instructions": [
      "Deite-se de lado, com as pernas estendidas e posicionadas uma sobre a outra.",
      "Flexione levemente a perna que está por baixo para aumentar a estabilidade.",
      "Apoie o pé da perna de cima em uma superfície estável, como um banco ou degrau.",
      "Mantendo a perna de cima estendida, abaixe-a lentamente em direção ao chão até sentir o alongamento na parte interna da coxa."
    ]
  },
  {
    "id": "1758",
    "name": "Abdominal assistido",
    "bodyPart": "abdômen",
    "equipment": "assistido",
    "target": "abdômen",
    "instructions": [
      "Sente-se na borda de um banco ou peça para alguém manter seus pés apoiados no chão.",
      "Deite-se de costas, com os joelhos flexionados e os pés apoiados.",
      "Coloque as mãos atrás da cabeça, mantendo os cotovelos apontados para os lados.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo, flexionando o tronco para a frente até atingir aproximadamente 45 graus."
    ]
  },
  {
    "id": "1431",
    "name": "Barra fixa supinada assistida em pé",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste o aparelho para o nível de assistência desejado.",
      "Suba na plataforma e segure as alças com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha o peito erguido, os ombros para trás e o abdômen contraído, flexionando levemente os joelhos.",
      "Eleve o corpo flexionando os cotovelos e levando-os para baixo, junto às laterais do tronco."
    ]
  },
  {
    "id": "1432",
    "name": "Barra fixa pronada assistida em pé",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste o aparelho para a carga de assistência e a altura desejadas.",
      "Fique de frente para o aparelho, com os pés afastados na largura dos ombros.",
      "Segure as alças com pegada pronada, um pouco mais aberta que a largura dos ombros.",
      "Contraia os dorsais e os bíceps e puxe o corpo para cima em direção às alças."
    ]
  },
  {
    "id": "0018",
    "name": "Extensão de tríceps em pé assistida com toalha",
    "bodyPart": "braços",
    "equipment": "assistido",
    "target": "tríceps",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros, e segure uma toalha com as duas mãos atrás da cabeça.",
      "Mantenha os cotovelos próximos às orelhas e os braços imóveis.",
      "Estenda lentamente os antebraços para cima, contraindo os tríceps no final do movimento.",
      "Faça uma breve pausa e abaixe lentamente a toalha até retornar à posição inicial."
    ]
  },
  {
    "id": "0019",
    "name": "Mergulho de tríceps assistido (ajoelhado)",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "tríceps",
    "instructions": [
      "Ajuste o aparelho para a carga de assistência e a altura desejadas.",
      "Ajoelhe-se na plataforma de frente para o aparelho e segure as alças.",
      "Abaixe o corpo flexionando os cotovelos, mantendo as costas retas e próximas ao aparelho.",
      "Faça uma breve pausa no ponto mais baixo e empurre o corpo para cima até retornar à posição inicial."
    ]
  },
  {
    "id": "2364",
    "name": "Paralelas assistidas com pegada aberta para peitoral (ajoelhado)",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste o aparelho na altura desejada e apoie firmemente os joelhos na plataforma.",
      "Segure as alças com pegada aberta e mantenha os cotovelos levemente flexionados.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Estenda os braços para empurrar o corpo para cima e retornar à posição inicial."
    ]
  },
  {
    "id": "3220",
    "name": "Salto afastando as pernas",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo até a posição de agachamento.",
      "Salte de forma explosiva para cima, estendendo as pernas e os braços.",
      "Durante o salto, afaste as pernas e leve os braços para os lados."
    ]
  },
  {
    "id": "3672",
    "name": "Passo à frente e para trás",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros.",
      "Dê um passo à frente com o pé direito, flexionando o joelho e descendo o corpo até a posição de avanço.",
      "Impulsione o corpo com o pé direito e dê um passo para trás até retornar à posição inicial.",
      "Repita com o pé esquerdo, alternando as pernas a cada movimento."
    ]
  },
  {
    "id": "1314",
    "name": "Extensão lombar na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Coloque a bola suíça no chão e deite-se de bruços sobre ela, apoiando os quadris na bola e os pés em uma parede ou outra superfície estável.",
      "Posicione as mãos atrás da cabeça ou cruzedas sobre o peito.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo, estendendo a coluna até formar uma linha reta da cabeça aos calcanhares.",
      "Faça uma breve pausa no ponto mais alto e abaixe lentamente o tronco até retornar à posição inicial."
    ]
  },
  {
    "id": "3297",
    "name": "Alavanca dorsal",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique suspenso em uma barra fixa com pegada pronada, mantendo as mãos um pouco mais afastadas que a largura dos ombros.",
      "Contraia o abdômen e leve as escápulas para baixo e para trás.",
      "Flexione os joelhos e aproxime-os do peito.",
      "Eleve lentamente as pernas, estendendo-as, até que o corpo fique paralelo ao chão."
    ]
  },
  {
    "id": "1405",
    "name": "Alongamento de costas e peitoral",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique em pé, com a postura ereta e os pés afastados na largura dos ombros.",
      "Estenda os braços à frente do corpo, paralelos ao chão.",
      "Cruze os braços à frente do corpo, posicionando o braço direito sobre o esquerdo.",
      "Entrelace os dedos e gire as palmas das mãos para longe do corpo."
    ]
  },
  {
    "id": "1473",
    "name": "Salto para trás",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros.",
      "Flexione levemente os joelhos e salte para trás, impulsionando o corpo com os dois pés.",
      "Aterrisse suavemente sobre a parte da frente dos pés e flexione os joelhos para absorver o impacto.",
      "Repita pelo número desejado de repetições."
    ]
  },
  {
    "id": "0020",
    "name": "Prancha de equilíbrio",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Coloque a prancha de equilíbrio sobre uma superfície plana.",
      "Suba na prancha com um dos pés, certificando-se de posicioná-lo no centro.",
      "Transfira lentamente o peso do corpo para o pé apoiado na prancha, mantendo o abdômen contraído.",
      "Mantenha o equilíbrio e a estabilidade pelo tempo desejado."
    ]
  },
  {
    "id": "0968",
    "name": "Rosca bíceps alternada com faixa elástica",
    "bodyPart": "braços",
    "equipment": "faixa elástica",
    "target": "bíceps",
    "instructions": [
      "Fique em pé, com os pés afastados na largura dos ombros, e segure a faixa com pegada supinada, mantendo as palmas voltadas para cima.",
      "Mantenha os cotovelos próximos em relação ao tronco e flexione lentamente um dos braços em direção ao ombro, contraindo o bíceps no ponto mais alto.",
      "Abaixe o braço até a posição inicial e repita com o outro braço.",
      "Continue alternando os braços pelo número desejado de repetições."
    ]
  },
  {
    "id": "0969",
    "name": "Abdominal em V alternado com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com as pernas estendidas e os braços acima da cabeça, segurando a faixa.",
      "Contraia o abdômen e eleve simultaneamente as pernas e o tronco, levando as mãos em direção aos pés.",
      "Ao abaixar as pernas e o tronco, troque a posição das pernas, cruzando uma sobre a outra.",
      "Repita o movimento, alternando a posição das pernas em cada repetição."
    ]
  },
  {
    "id": "0970",
    "name": "Barra fixa assistida com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "dorsais",
    "instructions": [
      "Prenda a faixa elástica em uma barra fixa ou em outro ponto de ancoragem resistente.",
      "Apoie o pé na faixa e segure a barra com as palmas voltadas para a frente, mantendo as mãos um pouco mais afastadas que a largura dos ombros.",
      "Fique suspenso com os braços totalmente estendidos, mantendo o abdômen contraído e os ombros para baixo e para trás.",
      "Puxe o corpo em direção à barra, aproximando as escápulas e levando os cotovelos para baixo, em direção aos quadris."
    ]
  },
  {
    "id": "0971",
    "name": "Abdominal com roda assistido por faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Ajoelhe-se no chão e segure as alças com as duas mãos, mantendo as palmas voltadas para baixo.",
      "Posicione a roda à sua frente, com as mãos afastadas na largura dos ombros.",
      "Contraia o abdômen e deslize lentamente a roda para a frente, estendendo o corpo o máximo possível sem perder o controle.",
      "Faça uma breve pausa no ponto de maior extensão e puxe lentamente a roda de volta em direção aos joelhos até retornar à posição inicial."
    ]
  },
  {
    "id": "1254",
    "name": "Supino com faixa elástica",
    "bodyPart": "peito",
    "equipment": "faixa elástica",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco, com os pés apoiados no chão e as costas encostadas no banco.",
      "Segure as alças da faixa com pegada pronada, um pouco mais aberta que a largura dos ombros.",
      "Estenda completamente os braços, empurrando as faixas para longe do peito.",
      "Abaixe lentamente as faixas em direção ao peito, mantendo os cotovelos em um ângulo de 90 graus."
    ]
  },
  {
    "id": "0980",
    "name": "Extensão de quadril inclinada com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Prenda a faixa em um ponto de ancoragem resistente na altura dos tornozelos.",
      "Fique de costas para o ponto de ancoragem, com os pés afastados na largura dos ombros.",
      "Dê um passo para trás para criar tensão na faixa, mantendo os joelhos levemente flexionados.",
      "Incline o tronco à frente a partir dos quadris, mantendo a coluna em posição neutra."
    ]
  },
  {
    "id": "0972",
    "name": "Abdominal bicicleta com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas, com as mãos atrás da cabeça e os joelhos flexionados.",
      "Eleve os pés do chão e leve o joelho direito em direção ao peito enquanto gira o tronco para aproximar o cotovelo esquerdo do joelho direito.",
      "Estenda a perna direita enquanto leva o joelho esquerdo em direção ao peito e gira o tronco para aproximar o cotovelo direito do joelho esquerdo.",
      "Continue alternando o movimento, como se estivesse pedalando, mantendo o abdômen contraído durante toda a execução."
    ]
  },
  {
    "id": "0974",
    "name": "Puxada fechada com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "dorsais",
    "instructions": [
      "Prenda a faixa em um ponto alto, como uma barra fixa ou uma viga resistente.",
      "Fique de frente para o ponto de ancoragem e segure a faixa com pegada supinada, mantendo as mãos afastadas na largura dos ombros.",
      "Dê um passo para trás para criar tensão na faixa, mantendo os pés afastados na largura dos quadris.",
      "Contraia o abdômen e mantenha as costas retas enquanto puxa a faixa em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "0975",
    "name": "Flexão de braços com pegada fechada com faixa elástica",
    "bodyPart": "braços",
    "equipment": "faixa elástica",
    "target": "tríceps",
    "instructions": [
      "Coloque uma faixa elástica ao redor da parte superior dos braços, logo acima dos cotovelos.",
      "Adote uma posição de flexão de braços com as mãos diretamente abaixo dos ombros e o corpo alinhado da cabeça aos calcanhares.",
      "Flexione os cotovelos e abaixe o peito em direção ao chão, mantendo os cotovelos próximos em relação ao tronco.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "0976",
    "name": "Rosca concentrada com faixa elástica",
    "bodyPart": "braços",
    "equipment": "faixa elástica",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com as pernas separadas e os pés apoiados no chão.",
      "Segure um extremo da faixa elástica na mão e calca o outro extremo com o pé do mesmo lado.",
      "Incline-se ligeiramente para a frente apoie o cotovelo na parte interna da coxa, justo em cima do joelho.",
      "Com a palma voltada para cima, flexione lentamente a mão para o ombro, mantendo imóvel a parte superior do braço."
    ]
  },
  {
    "id": "3117",
    "name": "Puxada com pegada fechada com as costas apoiadas com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "dorsais",
    "instructions": [
      "Segure a faixa elástica a um ponto fixo acima de você, como uma barra fixa ou uma viga resistente.",
      "Sente-se em um banco ou em uma cadeira em frente à banda, com os pés apoiados no chão e os joelhos flexionados.",
      "Segure a faixa elástica com uma pegada fechada, com as palmas voltadas para você.",
      "Mantenha as costas retas e ative o core."
    ]
  },
  {
    "id": "3116",
    "name": "Puxada supinada com as costas apoiadas com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "dorsais",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente acima de sua cabeça.",
      "Fique de pé de frente para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure a faixa elástica com uma pegada supinada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Dê um passo atrás para gerar tensão na faixa elástica, mantendo os braços completamente estendidos."
    ]
  },
  {
    "id": "0977",
    "name": "Elevação lateral frontal com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a faixa elástica à frente das coxas com as palmas voltadas para baixo.",
      "Mantenha os braços retos e eleve a faixa elástica à sua frente até que os braços fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a faixa elástica de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0978",
    "name": "Elevação frontal com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a faixa elástica à frente das coxas com as palmas voltadas para baixo.",
      "Mantenha os braços retos e eleve-os lentamente para a frente até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1408",
    "name": "Elevação pélvica com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque uma faixa elástica logo acima dos joelhos.",
      "Ative os glúteos e os músculos do core.",
      "Pressione os calcanhares contra o solo e eleve os quadris do chão, contraindo os glúteos na parte superior."
    ]
  },
  {
    "id": "0979",
    "name": "Press Pallof horizontal com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente à altura da cintura.",
      "Fique de pé perpendicular no ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure a asa da faixa elástica com as duas mãos e afaste do ponto de ancoragem para gerar tensão na faixa elástica.",
      "Leve as mãos em direção ao peito, mantendo os cotovelos flexionados e próximos ao corpo."
    ]
  },
  {
    "id": "0981",
    "name": "Abdominal canivete com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas retas e os braços estendidos acima da cabeça, sustentando a faixa elástica.",
      "Ative o abdômen e eleve as pernas e a parte superior do corpo simultaneamente, levando as mãos para os pés.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas e a parte superior do corpo de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0983",
    "name": "Puxada ajoelhado unilateral com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "dorsais",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente acima de sua cabeça.",
      "Ajoelhe-se segure a faixa elástica com uma mão, com a palma voltada para baixo.",
      "Estenda o braço por completo acima da cabeça, mantendo o cotovelo levemente flexionado.",
      "Ative os dorsais e puxe a faixa elástica para o lado, levando o cotovelo para as costelas."
    ]
  },
  {
    "id": "0985",
    "name": "Abdominal com rotação ajoelhado com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente à altura da cintura.",
      "Ajoelhe-se de costas para o ponto de ancoragem e segure a faixa elástica com as duas mãos, mantendo os cotovelos flexionados e próximos em relação ao tronco.",
      "Ative o abdômen e gire lentamente o tronco para um lado, levando as mãos em direção ao quadril oposto.",
      "Faça uma pausa por alguns segundos, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0984",
    "name": "Rotação interna de quadril deitado com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com as pernas retas e uma faixa elástica enrollada ao redor dos pés.",
      "Flexione os joelhos e leve em direção ao peito, mantendo os pés juntos.",
      "Gire lentamente os joelhos para fora, separando-as entre si, mantendo os pés juntos.",
      "Faça uma pausa por alguns segundos ao final da rotação, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "1002",
    "name": "Elevação de pernas estendidas deitado com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas retas e os pés juntos.",
      "Coloque a faixa elástica ao redor dos arcos dos pés e segure os extremos da faixa elástica com as mãos.",
      "Contraia o abdômen e eleve ambas as pernas do chão até que fiquem perpendiculares ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0986",
    "name": "Rosca bíceps unilateral acima da cabeça com faixa elástica",
    "bodyPart": "braços",
    "equipment": "faixa elástica",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque um extremo da faixa elástica baixo o pé.",
      "Segure o outro extremo da faixa elástica com o braço completamente estendido acima da cabeça, com a palma voltada para a frente.",
      "Mantenha imóvel a parte superior do braço, flexione o antebraço para o ombro, contraindo o bíceps.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o antebraço de volta à posição inicial."
    ]
  },
  {
    "id": "0987",
    "name": "Agachamento unilateral com base dividida unilateral com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e coloque uma faixa elástica ao redor dos tornozelos.",
      "Estenda uma perna para a frente apoie a parte superior do pé sobre um banco ou degrau atrás do corpo.",
      "Segure de um apoio com uma mão para manter o equilíbrio.",
      "Flexione a perna de apoio e abaixe o corpo para uma posição de agachamento, mantendo o joelho alinhado com os dedos do pé."
    ]
  },
  {
    "id": "0988",
    "name": "Remada baixa unilateral em pé com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "parte superior das costas",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem estável à altura da cintura.",
      "Fique de pé de frente para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure a faixa elástica com uma mão, com a palma voltada para dentro, e dê um passo atrás para gerar tensão na faixa elástica.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas."
    ]
  },
  {
    "id": "0989",
    "name": "Supino unilateral com rotação com faixa elástica",
    "bodyPart": "peito",
    "equipment": "faixa elástica",
    "target": "peitorais",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente à altura do peito.",
      "Fique de pé com o lado para o ponto de ancoragem e segure a faixa elástica com uma mão.",
      "Afaste do ponto de ancoragem para gerar tensão na faixa elástica.",
      "Coloque os pés afastados na largura dos ombros e flexione ligeiramente os joelhos."
    ]
  },
  {
    "id": "0990",
    "name": "Remada sentada unilateral com rotação com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão e as costas retas.",
      "Segure a faixa elástica com uma mão e estenda o braço completamente à sua frente.",
      "Mantenha as costas retas, puxe a faixa elástica para o corpo flexionando o cotovelo e aproximando as escápulas.",
      "Ao mesmo tempo, gire o tronco para o lado do braço que arremesse."
    ]
  },
  {
    "id": "0991",
    "name": "Puxada entre as pernas com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Segure uma faixa elástica a um ponto de ancoragem resistente a nível do chão.",
      "Fique de pé de costas para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Dê um passo adiante para gerar tensão na faixa elástica, mantendo os joelhos levemente flexionados.",
      "Flexione os quadris e leve os glúteos para trás, mantendo uma leve flexão nos joelhos."
    ]
  },
  {
    "id": "0992",
    "name": "Abdominal empurrada com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Segure a faixa elástica de forma segure a um ponto de ancoragem estável.",
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Segure a faixa elástica com as duas mãos e estenda os braços retos para o teto.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus."
    ]
  },
  {
    "id": "0993",
    "name": "Crucifixo inverso com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Segure a faixa elástica a um objeto fixo à altura do peito.",
      "Fique de pé com os pés afastados na largura dos ombros e segure a faixa elástica com as duas mãos à sua frente.",
      "Mantenha os braços retos e levante para os lados até que fiquem paralelos ao chão.",
      "Aproxime as escápulas no ponto mais alto do movimento."
    ]
  },
  {
    "id": "0994",
    "name": "Extensão de punhos com faixa elástica",
    "bodyPart": "antebraços",
    "equipment": "faixa elástica",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão.",
      "Segure a faixa elástica com uma pegada pronada, com as palmas voltadas para baixo, e envolva-a ao redor dos dedos.",
      "Apoie os antebraços sobre as coxas, com os punhos para fora da borda.",
      "Flexione lentamente os punhos para cima, contraindo os antebraços."
    ]
  },
  {
    "id": "0996",
    "name": "Rotação interna de quadril sentado com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Sente-se em uma cadeira ou banco com as costas retas e os pés apoiados no chão.",
      "Coloque uma faixa elástica ao redor das coxas, logo acima dos joelhos.",
      "Mantenha os joelhos flexionados formando um ângulo de 90 graus e os pés afastados na largura dos ombros.",
      "Ative os glúteos e gire lentamente os joelhos para fora, empurrando contra a resistência da faixa elástica."
    ]
  },
  {
    "id": "1011",
    "name": "Rotação de tronco sentado com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente as costas retas.",
      "Envolva a faixa elástica ao redor da cintura e segure os extremos com as duas mãos.",
      "Ative o abdômen e gire lentamente o tronco para um lado, mantendo as costas retas e os pés no chão.",
      "Faça uma pausa por alguns segundos ao final da rotação, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0997",
    "name": "Desenvolvimento de ombros com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica embaixo dos pés.",
      "Segure a faixa elástica com as palmas voltadas para a frente eleve as mãos na altura dos ombros, com os cotovelos flexionados.",
      "Empurre a faixa elástica acima da cabeça, estendendo completamente os braços.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a faixa elástica de volta à altura dos ombros."
    ]
  },
  {
    "id": "1018",
    "name": "Encolhimento de ombros com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "trapézios",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica embaixo dos pés, sustentando os extremos com as mãos.",
      "Mantenha os braços retos e relaxados, e deixe que a faixa elástica pendure à frente das coxas.",
      "Ative os trapézios encolhendo os ombros para cima, levantando a faixa elástica o máximo possível.",
      "Mantenha a contração por alguns segundos, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "0998",
    "name": "Extensão de tríceps lateral com faixa elástica",
    "bodyPart": "braços",
    "equipment": "faixa elástica",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a faixa elástica com as duas mãos, com as palmas voltadas para baixo.",
      "Estenda os braços para os lados, mantendo-os paralelos ao chão.",
      "Flexione lentamente os cotovelos e leve as mãos para os ombros, mantendo imóvel a parte superior dos braços.",
      "Faça uma pausa por alguns segundos, depois estenda lentamente os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0999",
    "name": "Elevação de panturrilha unilateral com faixa elástica",
    "bodyPart": "panturrilhas",
    "equipment": "faixa elástica",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e coloque a faixa elástica ao redor da base dos dedos do pé esquerdo.",
      "Segure de um objeto estável para manter o equilíbrio se necessário.",
      "Eleve lentamente o calcanhar esquerdo do chão, levando o peso do corpo para a ponta do pé.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o calcanhar esquerdo de volta à posição inicial."
    ]
  },
  {
    "id": "1000",
    "name": "Elevação de ponta dos pés unilateral com faixa elástica",
    "bodyPart": "panturrilhas",
    "equipment": "faixa elástica",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e coloque a faixa elástica ao redor da base dos dedos do pé.",
      "Segure de um objeto estável para manter o equilíbrio.",
      "Eleve lentamente o calcanhar do chão, levando o peso do corpo para a ponta do pé.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o calcanhar de volta à posição inicial."
    ]
  },
  {
    "id": "1001",
    "name": "Agachamento unilateral com base dividida com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e coloque uma faixa elástica ao redor dos tornozelos.",
      "Dê um passo grande para a frente com o pé direito e um passo mais pequeno para trás com o pé esquerdo.",
      "Flexione os joelhos e abaixe o corpo até que a coxa direita fique paralelo ao chão, mantendo o joelho esquerdo ligeiramente acima do chão.",
      "Empurre com o calcanhar direito para regressar à posição inicial."
    ]
  },
  {
    "id": "1004",
    "name": "Agachamento com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com a faixa elástica colocada logo acima dos joelhos.",
      "Mantenha o peito erguido e o core ativado, leve os quadris para trás e flexione os joelhos para baixar a uma posição de agachamento.",
      "Assegure-se de que os joelhos se alinhem com os dedos dos pés e de que o peso recaiga nos calcanhares.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "1003",
    "name": "Agachamento com remada com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente à altura da cintura.",
      "Fique de pé de frente para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure as alças da faixa elástica com as palmas voltadas-se entre si e os braços estendidos à sua frente.",
      "Flexione os joelhos e abaixe a uma posição de agachamento, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "1005",
    "name": "Abdominal em pé com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem resistente à altura da cintura.",
      "Fique de pé de costas para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure a faixa elástica com as duas mãos e leve em direção ao peito, mantendo os cotovelos flexionados e próximos ao corpo.",
      "Ative o abdômen e flexione lentamente o tronco para a frente, levando o peito para os joelhos."
    ]
  },
  {
    "id": "1022",
    "name": "Remada para deltoide posterior em pé com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica embaixo dos pés.",
      "Segure as alças da faixa elástica com as palmas voltadas-se entre si e os braços estendidos à sua frente.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Puxe a faixa elástica em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "1007",
    "name": "Abdominal com rotação em pé com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica ao redor da parte superior das costas, cruzando à frente do peito.",
      "Segure os extremos da faixa elástica com as mãos, mantendo os cotovelos flexionados e próximos em relação ao tronco.",
      "Ative o abdômen e gire o tronco para um lado, levando o cotovelo para o joelho oposto.",
      "Faça uma pausa breve depois volte à posição inicial."
    ]
  },
  {
    "id": "1008",
    "name": "Subida no banco com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Coloque uma faixa elástica ao redor das coxas, logo acima dos joelhos.",
      "Fique de pé em frente a um degrau ou plataforma com os pés separados à altura dos quadris.",
      "Suba à plataforma com o pé direito, empurrando com o calcanhar.",
      "Estenda a perna esquerda para trás, mantendo-a reta."
    ]
  },
  {
    "id": "1009",
    "name": "Levantamento terra stiff com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica ao redor dos tornozelos.",
      "Segure a faixa elástica com as duas mãos à frente das coxas, com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e o core ativado, flexione os quadris e abaixe lentamente a parte superior do corpo em direção ao chão.",
      "Enquanto abaixa, empurre os quadris para trás e deixe que os joelhos se flexionem ligeiramente."
    ]
  },
  {
    "id": "1023",
    "name": "Levantamento terra stiff com costas retas e faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica ao redor da parte superior das pernas.",
      "Segure a faixa elástica com as duas mãos à frente das coxas, com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e os joelhos levemente flexionados, flexione os quadris e abaixe a faixa elástica em direção ao chão.",
      "Sente-se o alongamento nos posteriores das coxas enquanto abaixe a faixa elástica."
    ]
  },
  {
    "id": "1010",
    "name": "Levantamento terra com pernas estendidas com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "eretores da coluna",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica ao redor dos pés.",
      "Segure a faixa elástica com as duas mãos, com as palmas voltadas para o corpo, e mantenha os braços retos.",
      "Ative o core e mantenha uma leve flexão nos joelhos.",
      "Incline-se lentamente para a frente a partir dos quadris, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "1012",
    "name": "Desenvolvimento acima da cabeça com rotação com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque a faixa elástica embaixo dos pés.",
      "Segure as alças da faixa elástica à altura dos ombros com as palmas voltadas para a frente.",
      "Ative o core e empurre a faixa elástica acima da cabeça, estendendo completamente os braços.",
      "Enquanto empurre, gire o tronco para um lado, mantendo os quadris estáveis."
    ]
  },
  {
    "id": "1369",
    "name": "Elevação de panturrilhas com as duas pernas e faixa elástica — variação 2",
    "bodyPart": "panturrilhas",
    "equipment": "faixa elástica",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque uma faixa elástica baixo ambos pés.",
      "Segure os extremos da faixa elástica com as mãos para manter o equilíbrio.",
      "Eleve os calcanhares do chão o máximo possível, usando as panturrilhas.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "1013",
    "name": "Puxada supinada com faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "dorsais",
    "instructions": [
      "Prenda a faixa elástica a um ponto de ancoragem alta, como uma barra fixa ou uma viga resistente.",
      "Fique de pé de frente para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure a faixa elástica com uma pegada supinada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Estenda completamente os braços acima da cabeça, mantendo os cotovelos levemente flexionados."
    ]
  },
  {
    "id": "1014",
    "name": "Abdominal em V com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas retas e os braços estendidos acima da cabeça, sustentando a faixa elástica.",
      "Contraia o abdômen e eleve as pernas e a parte superior do corpo do chão simultaneamente, levando as mãos para os dedos dos pés.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas e a parte superior do corpo de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1015",
    "name": "Press Pallof vertical com faixa elástica",
    "bodyPart": "abdômen",
    "equipment": "faixa elástica",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e enrole a faixa elástica ao redor de um objeto firme à altura do peito.",
      "Segure a faixa elástica com as duas mãos e afaste do ponto de ancoragem, criando tensão na faixa elástica.",
      "Coloque-se perpendicular no ponto de ancoragem, com o lado voltadas para a faixa elástica.",
      "Estenda os braços retos para a frente, mantendo as mãos à altura do peito."
    ]
  },
  {
    "id": "1016",
    "name": "Flexão de punhos com faixa elástica",
    "bodyPart": "antebraços",
    "equipment": "faixa elástica",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão.",
      "Segure a faixa elástica com as duas mãos, com as palmas voltadas para cima, e apoie os antebraços sobre as coxas.",
      "Flexione lentamente os punhos para cima, contraindo os antebraços.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os punhos de volta à posição inicial."
    ]
  },
  {
    "id": "1017",
    "name": "Y elevação com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a faixa elástica à frente das coxas com as palmas voltadas para dentro.",
      "Mantenha os braços retos e levante-os para cima e para os lados, formando uma 'E' com o corpo.",
      "Aproxime as escápulas no ponto mais alto do movimento.",
      "Abaixe lentamente os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0023",
    "name": "Rosca alternada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para a frente.",
      "Mantenha os braços fixos e expire enquanto eleva o peso contraindo os bíceps.",
      "Continue elevando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam na altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0024",
    "name": "Agachamento frontal banco com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e a barra apoiada na parte superior do peito, diretamente abaixo da clavícula.",
      "Segure a barra com uma pegada pronada, mantendo os cotovelos elevados e os braços paralelos ao chão.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e os quadris, mantendo as costas retas e o peito erguido.",
      "Faça uma pausa breve na parte baixa da agachamento e depois empurre com os calcanhares para voltar à posição inicial."
    ]
  },
  {
    "id": "0025",
    "name": "Supino reto com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos.",
      "Abaixe a barra lentamente em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "0026",
    "name": "Agachamento banco com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Coloque uma barra em um suporte de sentadillas à altura do peito.",
      "Fique de pé de costas ao suporte, com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento, mantendo as costas retas e o peito erguido.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros."
    ]
  },
  {
    "id": "1316",
    "name": "Pullover com braços flexionados com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "dorsais",
    "instructions": [
      "Deite-se de costas em um banco com a cabeça em um extremo e os pés no chão.",
      "Segure uma barra com uma pegada à altura dos ombros e estenda os braços retos acima do peito.",
      "Abaixe a barra por trás da cabeça mantendo os braços levemente flexionados.",
      "Faça uma pausa breve depois eleve a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0027",
    "name": "Remada curvada com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Incline-se para a frente a partir dos quadris mantendo as costas retas e o peito erguido.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Puxe a barra para a parte inferior do peito retraindo as escápulas e contraindo os músculos das costas."
    ]
  },
  {
    "id": "2407",
    "name": "Rosca bíceps com braço blaster com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada supinada, com as palmas voltadas para cima.",
      "Coloque os braços contra o suporte para braços, mantendo os cotovelos próximos em relação ao tronco.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros."
    ]
  },
  {
    "id": "0028",
    "name": "Clean e desenvolvimento com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e a barra no chão à sua frente.",
      "Flexione os joelhos e os quadris para baixar e agarrar a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Empurre com os calcanhares e estenda os quadris e os joelhos para levantar a barra do chão, mantendo-os próximos ao corpo.",
      "Quando a barra chegue às coxas, estenda os quadris de forma explosiva, encolha os ombros e puxe a barra em direção ao peito."
    ]
  },
  {
    "id": "0029",
    "name": "Agachamento frontal com pegada de clean e barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e a barra apoiada na parte superior do peito, com os cotovelos apontando para a frente.",
      "Abaixe o corpo flexionando os joelhos e empurrando os quadris para trás, como se se sentasse em uma cadeira.",
      "Mantenha o peito erguido e as costas retas enquanto abaixa, certificando-se de que os joelhos não ultrapassem os dedos dos pés.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0030",
    "name": "Supino com pegada fechada com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada fechada, um pouco mais estreito que a largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos próximos ao corpo.",
      "Faça uma pausa breve quando a barra toque o peito."
    ]
  },
  {
    "id": "0031",
    "name": "Rosca Direta com Barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada supinada, com as palmas voltadas para a frente.",
      "Mantenha os cotovelos próximos em relação ao tronco e expire enquanto eleva o peso contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0032",
    "name": "Levantamento Terra com Barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e a barra no chão à sua frente.",
      "Flexione os joelhos e os quadris para baixar o tronco e segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e o peito erguido enquanto empurre com os calcanhares para levantar a barra do chão, estendendo os quadris e os joelhos.",
      "Ao ficar de pé, contraia os glúteos e mantenha o core ativado."
    ]
  },
  {
    "id": "0033",
    "name": "Supino declinado com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e a cabeça mais baixa que os quadris.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos colados ao corpo.",
      "Faça uma pausa breve na parte baixa depois empurre a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0034",
    "name": "Pullover declinado com braços flexionados com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "dorsais",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os quadris e os pés presos.",
      "Segure uma barra com uma pegada pronada (palmas voltadas para fora) e estenda os braços retos acima do peito.",
      "Abaixe a barra por trás da cabeça de forma controlada, mantendo os braços levemente flexionados.",
      "Faça uma pausa breve depois eleve a barra de volta à posição inicial contraindo os dorsais."
    ]
  },
  {
    "id": "0035",
    "name": "Supino declinado com pegada fechada para tríceps testa com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os pés e segure uma barra com uma pegada fechada.",
      "Abaixe a barra em direção à testa, flexionando os cotovelos, mantendo os braços fixos.",
      "Faça uma pausa breve depois estenda os braços para empurrar a barra de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1255",
    "name": "Pullover declinado com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os quadris e os pés presos.",
      "Segure a barra com uma pegada pronada (palmas voltadas para fora) e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Estenda os braços acima do peito, mantendo uma leve flexão nos cotovelos.",
      "Abaixe a barra descrevendo um arco por trás da cabeça, sentindo um alongamento no peito e os ombros."
    ]
  },
  {
    "id": "0036",
    "name": "Supino declinado com pegada aberta com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e a cabeça mais baixa que os quadris.",
      "Segure a barra com uma pegada amplo, um pouco além da largura dos ombros.",
      "Abaixe a barra em direção ao peito, mantendo os cotovelos para os lados.",
      "Empurre a barra de volta à posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "0037",
    "name": "Pullover declinado com pegada aberta com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "dorsais",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os quadris e os pés presos.",
      "Segure uma barra com uma pegada amplo e estenda os braços retos acima do peito.",
      "Abaixe a barra por trás da cabeça de forma controlada, mantendo os braços retos.",
      "Faça uma pausa breve depois eleve a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0038",
    "name": "Rosca arrastada com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada supinada, com as palmas voltadas para cima.",
      "Deixe que a barra pendure à longitude do braço à frente das coxas.",
      "Mantenha os braços fixos, eleve a barra em direção ao peito contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "1370",
    "name": "Elevação de panturrilhas chão com barra",
    "bodyPart": "panturrilhas",
    "equipment": "barra",
    "target": "panturrilhas",
    "instructions": [
      "Coloque uma barra no chão à sua frente.",
      "Fique de pé com a parte da frente dos pés sobre a borda da barra, deixando os calcanhares pendurando.",
      "Segure de um objeto estável para manter o equilíbrio se necessário.",
      "Eleve os calcanhares o máximo possível, usando as panturrilhas para elever o corpo."
    ]
  },
  {
    "id": "0039",
    "name": "Agachamento frontal peitoral com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure a barra à frente do peito com as mãos afastadas na largura dos ombros, os cotovelos apontando para a frente.",
      "Ative o core e mantenha o peito erguido enquanto abaixa o corpo para uma posição de agachamento, empurrando os quadris para trás e flexionando os joelhos.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0041",
    "name": "Elevação frontal com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra à frente das coxas com uma pegada pronada.",
      "Mantenha os braços retos e eleve a barra para a frente para cima até que atinja a altura dos ombros.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0040",
    "name": "Elevação frontal e pullover com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha os braços retos e eleve a barra à sua frente até que atinja a altura dos ombros.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial.",
      "A seguir, abaixe a barra por trás da cabeça, mantendo os braços retos."
    ]
  },
  {
    "id": "0042",
    "name": "Agachamento frontal com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure a barra em frente aos ombros, apoiando-a sobre a clavícula e os ombros.",
      "Ative o core e mantenha o peito erguido enquanto abaixa o corpo para uma posição de agachamento, empurrando os quadris para trás e flexionando os joelhos.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0043",
    "name": "Agachamento Livre com Barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios ou os deltoides posteriores.",
      "Ative o core e mantenha o peito erguido enquanto comece a baixar o corpo.",
      "Flexione os joelhos e os quadris, empurrando os quadris para trás e para baixo como se sentasse-se em uma cadeira."
    ]
  },
  {
    "id": "1461",
    "name": "Agachamento completo com barra — vista posterior",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios ou os deltoides posteriores.",
      "Ative o core e mantenha o peito erguido enquanto comece a baixar o corpo.",
      "Flexione os joelhos e os quadris, empurrando os quadris para trás e para baixo como se sentasse-se em uma cadeira."
    ]
  },
  {
    "id": "1462",
    "name": "Agachamento completo com barra — vista lateral",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios ou os deltoides posteriores.",
      "Ative o core e mantenha o peito erguido enquanto comece a baixar o corpo.",
      "Flexione os joelhos e os quadris, empurrando os quadris para trás e para baixo como se sentasse-se em uma cadeira."
    ]
  },
  {
    "id": "1545",
    "name": "Agachamento completo zercher com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure a barra na flexione dos cotovelos, agarrando com as mãos para manter a estabilidade.",
      "Ative o core e mantenha o peito erguido enquanto abaixe os quadris para trás e para baixo em uma posição de agachamento.",
      "Mantenha os joelhos alinhados com os dedos dos pés e o peso sobre os calcanhares."
    ]
  },
  {
    "id": "1409",
    "name": "Elevação de Quadril com Barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece deitado de costas no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque uma barra sobre os quadris, segurando-a com firmeza com as duas mãos.",
      "Ative os glúteos e o core, depois eleve os quadris do chão até que o corpo forme uma linha reta desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os glúteos."
    ]
  },
  {
    "id": "3562",
    "name": "Ponte de glúteos com duas pernas no banco com barra (masculino)",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece sentado na borda de um banco com a parte superior das costas apoiadas contra ele os pés apoiados no chão, separados à altura dos quadris.",
      "Coloque uma barra sobre os quadris, segurando-a com firmeza com as duas mãos.",
      "Ative os glúteos e o core, depois empurre com os calcanhares para levantar os quadris do banco, criando uma linha reta desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os glúteos."
    ]
  },
  {
    "id": "0044",
    "name": "Bom dia com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "posteriores das coxas",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e a barra apoiada sobre a parte superior das costas.",
      "Mantenha as costas retas e o core ativado, flexione os quadris para a frente, empurrando os glúteos para trás como se tentasse tocar a parede atrás do corpo com eles.",
      "Abaixe o tronco até que fique paralelo ao chão, sentindo um alongamento nos posteriores das coxas.",
      "Faça uma pausa breve depois volte à posição inicial contraindo os glúteos e empurrando os quadris para a frente."
    ]
  },
  {
    "id": "0045",
    "name": "Supino Guilhotina com Barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Abaixe a barra lentamente para o pescoço, mantendo os cotovelos apontando para fora.",
      "Faça uma pausa breve quando a barra esteja justo em cima do pescoço."
    ]
  },
  {
    "id": "0046",
    "name": "Agachamento Hack com Barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure a barra por trás das pernas, apoiando na parte superior das coxas.",
      "Abaixe o corpo flexionando os joelhos e os quadris, mantendo as costas retas e o peito erguido.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "1436",
    "name": "Agachamento alto barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Coloque a barra sobre a parte superior das costas, apoiando-a nos trapézios.",
      "Ative o core e mantenha o peito erguido enquanto comece a baixar em agachamento, empurrando os quadris para trás e flexionando os joelhos.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0047",
    "name": "Supino inclinado com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se no banco com os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos a um ângulo de 45 graus."
    ]
  },
  {
    "id": "1719",
    "name": "Supino com pegada fechada inclinado com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se no banco com os pés apoiados no chão.",
      "Segure a barra com uma pegada fechada, um pouco mais estreito que a largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "0048",
    "name": "Supino inclinado com pegada invertida com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se no banco e segure a barra com uma pegada invertida, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Retire a barra do suporte baixe para a parte superior do peito, mantendo os cotovelos colados ao corpo.",
      "Faça uma pausa breve na parte baixa depois empurre a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0049",
    "name": "Remada inclinado com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se de bruços no banco com o peito apoiado no encosto e os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "0050",
    "name": "Elevação de Ombros Inclinada com Barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "serrátil anterior",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure uma barra com uma pegada pronada, um pouco além da largura dos ombros.",
      "Eleve a barra até a altura dos ombros, mantendo os cotovelos levemente flexionados."
    ]
  },
  {
    "id": "0051",
    "name": "Agachamento jefferson com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure a barra com uma pegada pronada, apoiando na parte da frente do corpo, diretamente abaixo da cintura.",
      "Dê um passo com o pé esquerdo para a frente o pé direito para trás, mantendo os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "0052",
    "name": "Supino reto JM com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Abaixe a barra em direção ao peito, mantendo os cotovelos colados próximos ao corpo.",
      "Empurre a barra de volta à posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "0053",
    "name": "Agachamento com salto com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, segurando uma barra sobre a parte superior das costas.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Ao chegar à parte baixa da agachamento, impulsione-se para cima saltando desdo chão.",
      "Ao salter, estenda os quadris, os joelhos e os tornozelos, empurrando com a ponta dos pés."
    ]
  },
  {
    "id": "1410",
    "name": "Afundo lateral com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando uma barra sobre a parte superior das costas.",
      "Dê um passo grande para o lado com o pé direito, mantendo o pé esquerdo fixo no chão.",
      "Flexione o joelho direito e abaixe o corpo para uma posição de afundo, mantendo a perna esquerda reta.",
      "Empurre com o pé direito e volte à posição inicial."
    ]
  },
  {
    "id": "1435",
    "name": "Agachamento baixo barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e a barra apoiada sobre a parte superior das costas.",
      "Mantenha o peito erguido e o core ativado, abaixe lentamente o corpo flexionando os joelhos e empurrando os quadris para trás.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou um pouco por embaixo.",
      "Faça uma pausa breve depois empurre com os calcanhares para voltar à posição inicial."
    ]
  },
  {
    "id": "0054",
    "name": "Afundo com Barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e uma barra apoiada sobre a parte superior das costas.",
      "Dê um passo para a frente com o pé direito, mantendo o tronco ereto.",
      "Abaixe o corpo flexionando o joelho direito até que a coxa fique paralela ao chão.",
      "Empurre com o calcanhar direito para regressar à posição inicial."
    ]
  },
  {
    "id": "1720",
    "name": "Extensão de tríceps deitado atrás da cabeça com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure uma barra com uma pegada pronada, com as mãos afastadas na largura dos ombros, e estenda os braços retos acima do peito.",
      "Mantenha os braços fixos, abaixe lentamente a barra por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0055",
    "name": "Supino deitado com pegada fechada com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada fechada, mãos afastadas na largura dos ombros, com as palmas voltadas para os pés.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos.",
      "Abaixe a barra lentamente em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "0056",
    "name": "Extensão de tríceps deitado com pegada fechada com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure a barra com uma pegada fechada, mãos afastadas na largura dos ombros, com as palmas voltadas para cima.",
      "Estenda completamente os braços, levantando a barra acima do peito.",
      "Mantenha os braços fixos, abaixe lentamente a barra em direção à testa, flexionando os cotovelos."
    ]
  },
  {
    "id": "0057",
    "name": "Deitado extensão com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure uma barra com uma pegada pronada, com as mãos afastadas na largura dos ombros, e estenda os braços retos acima do peito.",
      "Mantenha os braços fixos, abaixe lentamente a barra em direção à testa, flexionando os cotovelos.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0058",
    "name": "Elevação de quadril deitado com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e os joelhos flexionados.",
      "Segure a barra com uma pegada pronada e coloque-a sobre os quadris.",
      "Ativando os glúteos, eleve os quadris do banco até que o corpo forme uma linha reta desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "0059",
    "name": "Rosca Scott deitado com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com o peito apoiado no encosto e os braços estendidos sobre a borda, segurando uma barra com uma pegada supinada.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0061",
    "name": "Tríceps testa deitado com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure uma barra com uma pegada pronada, com as mãos afastadas na largura dos ombros, e estenda os braços retos acima do peito.",
      "Mantenha os braços fixos, abaixe lentamente a barra em direção à testa, flexionando os cotovelos.",
      "Faça uma pausa breve na parte baixa depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0060",
    "name": "Tríceps testa deitado com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure uma barra com uma pegada pronada, com as mãos afastadas na largura dos ombros, e estenda os braços retos acima do peito.",
      "Mantenha os braços fixos, abaixe lentamente a barra em direção à testa, flexionando os cotovelos.",
      "Faça uma pausa breve quando a barra esteja justo em cima da frente depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0063",
    "name": "Agachamento com base fechada com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios ou os deltoides posteriores.",
      "Ative o core e mantenha o peito erguido enquanto abaixa lentamente o corpo flexionando os joelhos e empurrando os quadris para trás.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou um pouco por embaixo."
    ]
  },
  {
    "id": "0064",
    "name": "Remada curvada unilateral com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure uma barra com uma mão usando um pegada pronada.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e a cabeça em posição neutra.",
      "Puxe a barra em direção ao peito, mantendo o cotovelo próximo ao corpo e aproximando as escápulas.",
      "Abaixe a barra de volta à posição inicial de forma controlada."
    ]
  },
  {
    "id": "0065",
    "name": "Supino no chão unilateral com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Segure a barra com uma mão, com a palma voltada para cima, e estenda o braço reto acima do peito.",
      "Abaixe a barra lentamente em direção ao peito, mantendo o cotovelo próximo ao corpo.",
      "Faça uma pausa breve na parte baixa depois empurre a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0066",
    "name": "Levantamento terra unilateral lateral com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando uma barra em uma mão com uma pegada pronada.",
      "Mantenha as costas retas e o core ativado.",
      "Flexione os quadris e abaixe a barra para o exterior da perna, mantendo o braço reto e o peito erguido.",
      "Abaixe a barra o máximo que puder mantendo uma boa forma."
    ]
  },
  {
    "id": "0067",
    "name": "Snatch unilateral com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os dedos dos pés ligeiramente para fora.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Flexione os joelhos e abaixe os quadris para uma posição de agachamento, mantendo as costas retas e o peito erguido.",
      "Estenda os quadris, os joelhos e os tornozelos de forma explosiva, impulsionando a barra para cima."
    ]
  },
  {
    "id": "0068",
    "name": "Agachamento unilateral com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra sobre a parte superior das costas.",
      "Eleve um pé do chão e estenda-o para a frente, mantendo-o paralelo ao chão.",
      "Flexione a perna de apoio e abaixe o corpo como se se sentasse em uma cadeira, mantendo o peito erguido e as costas retas.",
      "Abaixe até que a coxa fique paralela ao chão, depois empurre com o calcanhar para voltar à posição inicial."
    ]
  },
  {
    "id": "0069",
    "name": "Agachamento acima da cabeça com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure a barra com uma pegada amplo, colocando acima da cabeça com os braços completamente estendidos.",
      "Ative o core abaixe o corpo para uma posição de agachamento, mantendo o peito erguido e os joelhos alinhados com os dedos dos pés.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "1411",
    "name": "Flexão de punhos com as palmas para baixo sobre o banco com barra",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e os antebraços apoiados sobre as coxas, com as palmas voltadas para baixo.",
      "Segure uma barra com uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Abaixe a barra em direção ao chão flexionando os punhos, mantendo os antebraços fixos.",
      "Faça uma pausa breve na parte baixa depois eleve lentamente a barra estendendo os punhos."
    ]
  },
  {
    "id": "1412",
    "name": "Flexão de punhos com as palmas para cima sobre o banco com barra",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure uma barra com uma pegada supinada, com as palmas voltadas para cima.",
      "Apoie os antebraços sobre o banco, deixando que os punhos pendurem da borda.",
      "Mantenha os antebraços fixos, expire e flexione os punhos para cima o máximo possível.",
      "Mantenha a posição contraída durante uma breve pausa, logo inspire abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "3017",
    "name": "Remada pendlay com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Incline-se para a frente a partir dos quadris mantendo as costas retas e o peito erguido.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Puxe a barra para a parte superior do abdômen, aproximando as escápulas."
    ]
  },
  {
    "id": "1751",
    "name": "Supino parcial com barra nos pinos",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Coloque uma barra em um rack de potência à altura do peito.",
      "Fique de pé em frente à barra e coloque-se embaixo dela, com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos."
    ]
  },
  {
    "id": "0070",
    "name": "Rosca Scott com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com os braços apoiados no almofada e o peito contra o suporte.",
      "Segure a barra com uma pegada supinada, um pouco além da largura dos ombros.",
      "Mantenha os braços fixos, expire e eleve a barra para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "0071",
    "name": "Abdominal com pressão da barra",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas em um colchonete com os joelhos flexionados e os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada, apoiando sobre o peito.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0072",
    "name": "Rosca de bruços inclinado com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se de bruços no banco com o peito e o abdômen apoiados contra ele.",
      "Segure uma barra com uma pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Estenda completamente os braços, deixando que a barra pendure em direção ao chão."
    ]
  },
  {
    "id": "0073",
    "name": "Pullover com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "dorsais",
    "instructions": [
      "Deite-se de costas em um banco com a cabeça em um extremo e os pés no chão.",
      "Segure uma barra com uma pegada à altura dos ombros e estenda os braços retos acima do peito.",
      "Mantenha os braços retos, abaixe a barra por trás da cabeça de forma controlada até sentir um alongamento nos dorsais.",
      "Faça uma pausa breve depois eleve a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0022",
    "name": "Pullover com desenvolvimento com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "dorsais",
    "instructions": [
      "Deite-se de costas em um banco com a cabeça em um extremo e os pés no chão.",
      "Segure uma barra com uma pegada pronada (palmas voltadas para fora) e estenda os braços retos acima do peito.",
      "Mantenha os braços retos, abaixe a barra por trás da cabeça com um movimento em forma de arco até sentir um alongamento nos dorsais.",
      "Faça uma pausa breve, depois inverta o movimento e empurre a barra de volta à posição inicial acima do peito."
    ]
  },
  {
    "id": "0074",
    "name": "Levantamento terra parcial no rack com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Coloque uma barra em um suporte à altura do joelho.",
      "Fique de pé com os pés afastados na largura dos ombros, os dedos dos pés ligeiramente para fora.",
      "Flexione os quadris e os joelhos para baixar e agarrar a barra com uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Ative o core e eleve a barra estendendo os quadris e os joelhos, levando os ombros para trás e contraindo os glúteos na parte alta."
    ]
  },
  {
    "id": "0075",
    "name": "Elevação para deltoide posterior com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada pronada, com as palmas voltadas para baixo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Eleve a barra para os lados, mantendo os braços retos, até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0076",
    "name": "Remada Alta para Deltóides Posteriores com Barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure uma barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Puxe a barra em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "0078",
    "name": "Afundo posterior com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e uma barra apoiada sobre a parte superior das costas.",
      "Dê um passo para trás com o pé direito, apoiando na ponta do pé.",
      "Flexione ambas joelhos para baixar o corpo até que a coxa esquerda fique paralelo ao chão.",
      "Empurre com o calcanhar esquerdo para voltar à posição inicial."
    ]
  },
  {
    "id": "0077",
    "name": "Afundo posterior com barra — variação 2",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra sobre a parte superior das costas.",
      "Dê um passo para trás com o pé direito, apoiando na ponta do pé.",
      "Flexione ambas joelhos para baixar o corpo até que a coxa esquerda fique paralelo ao chão.",
      "Empurre com o calcanhar esquerdo para voltar à posição inicial."
    ]
  },
  {
    "id": "0079",
    "name": "Flexão de punhos reversa com barra — variação 2",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e os joelhos flexionados.",
      "Segure uma barra com uma pegada pronada, palmas voltadas para baixo, e as mãos afastadas na largura dos ombros.",
      "Apoie os antebraços sobre as coxas, deixando que os punhos pendurem da borda.",
      "Mantenha os antebraços fixos, expire e flexione os punhos para cima o máximo possível."
    ]
  },
  {
    "id": "2187",
    "name": "Supino com pegada fechada reverso com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada invertida, mãos afastadas na largura dos ombros.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos.",
      "Abaixe a barra lentamente em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "0080",
    "name": "Rosca inversa com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha os braços fixos e expire enquanto eleva a barra para cima, contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0118",
    "name": "Remada curvada com pegada invertida com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure uma barra com uma pegada pronada, palmas voltadas para baixo, e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido, até que o tronco fique quase paralelo ao chão.",
      "Puxe a barra para a parte inferior do peito, aproximando as escápulas."
    ]
  },
  {
    "id": "1256",
    "name": "Supino declinado com pegada invertida com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e a cabeça mais baixa que os quadris.",
      "Segure a barra com uma pegada invertida, um pouco além da largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos colados ao corpo.",
      "Faça uma pausa breve na parte baixa depois empurre a barra de volta à posição inicial."
    ]
  },
  {
    "id": "1257",
    "name": "Supino inclinado com pegada invertida com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se no banco com os pés apoiados no chão.",
      "Segure a barra com uma pegada invertida, mãos um pouco mais afastadas que a largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "1317",
    "name": "Remada com pegada invertida inclinado banco com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco em frente ao encosto com o peito apoiado contra ele.",
      "Segure a barra com uma pegada invertida (palmas voltadas para baixo) e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "1721",
    "name": "Tríceps testa com pegada invertida e barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure a barra com uma pegada invertida, palmas voltadas para o rosto, e as mãos afastadas na largura dos ombros.",
      "Estenda os braços retos acima do peito, mantendo os cotovelos para dentro e os punhos retas.",
      "Abaixe lentamente a barra em direção à testa, flexionando os cotovelos, mantendo os braços fixos."
    ]
  },
  {
    "id": "0081",
    "name": "Rosca Scott inversa com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com o peito apoiado no almofada e os braços estendidos retos para baixo, segurando uma barra com uma pegada pronada.",
      "Mantenha os braços fixos, expire e eleve a barra para cima contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0082",
    "name": "Extensão de punhos com barra",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure uma barra com uma pegada pronada, com as palmas voltadas para baixo.",
      "Apoie os antebraços sobre as coxas, deixando que os punhos pendurem da borda.",
      "Flexione lentamente os punhos para cima, levando a barra para o corpo.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0084",
    "name": "Abdominal com barra",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Fique de joelhos no chão e segure uma barra com as duas mãos, afastadas na largura dos ombros.",
      "Gire a barra para a frente, estendendo os braços e mantendo o core ativado.",
      "Continue girando para a frente até que o corpo esteja completamente estendido e os braços acima da cabeça.",
      "Faça uma pausa breve depois gire lentamente a barra de volta para os joelhos, mantendo o controle."
    ]
  },
  {
    "id": "0083",
    "name": "Abdominal com barra a partir do banco",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Comece de joelhos no chão com uma barra colocada sobre um banco à sua frente.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Mantenha o core ativado e as costas retas, gire lentamente a barra para a frente, estendendo os braços à sua frente.",
      "Continue fazendo girar a barra para a frente até que o corpo esteja completamente estendido e os braços acima da cabeça."
    ]
  },
  {
    "id": "0085",
    "name": "Levantamento terra romeno com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e as pontas dos pés apontando para a frente.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Flexione os quadris, mantendo as costas retas e os joelhos levemente flexionados.",
      "Abaixe a barra em direção ao chão, mantendo-os próximos ao corpo."
    ]
  },
  {
    "id": "0086",
    "name": "Desenvolvimento militar sentado atrás da nuca com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada, um pouco além da largura dos ombros.",
      "Retire a barra do suporte e baixe-a à altura dos ombros, por trás da cabeça.",
      "Empurre a barra para cima até que os braços fiquem completamente estendidos."
    ]
  },
  {
    "id": "0087",
    "name": "Desenvolvimento Bradford sentado com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada, um pouco além da largura dos ombros.",
      "Eleve a barra até a altura dos ombros, mantendo os cotovelos levemente flexionados e apontando para a frente.",
      "Empurre a barra acima da cabeça, estendendo completamente os braços."
    ]
  },
  {
    "id": "0088",
    "name": "Elevação de Panturrilha Sentado com Barra",
    "bodyPart": "panturrilhas",
    "equipment": "barra",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e uma barra apoiada sobre as coxas.",
      "Coloque a parte da frente dos pés sobre uma plataforma elevada, como um bloco ou um degrau.",
      "Coloque a barra sobre as coxas e segure-a com firmeza com as mãos.",
      "Mantenha as costas retas e o core ativado, eleve os calcanhares do chão estendendo os tornozelos."
    ]
  },
  {
    "id": "1371",
    "name": "Elevação de Panturrilha Sentado com Barra",
    "bodyPart": "panturrilhas",
    "equipment": "barra",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e uma barra apoiada sobre as coxas.",
      "Coloque a parte da frente dos pés sobre uma plataforma elevada, como um bloco ou um degrau.",
      "Abaixe os calcanhares o máximo possível, sentindo um alongamento nas panturrilhas.",
      "Eleve os calcanhares o máximo possível, contraindo as panturrilhas."
    ]
  },
  {
    "id": "1718",
    "name": "Extensão de tríceps sentado com pegada fechada atrás da nuca com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure a barra com uma pegada fechada por trás do pescoço, com as palmas voltadas para a frente.",
      "Mantenha os cotovelos próxima à cabeça e abaixe lentamente a barra para a parte de atrás da cabeça.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0089",
    "name": "Rosca concentrada sentado com pegada fechada com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure uma barra com uma pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Apoie os braços contra o interior das coxas, logo acima dos joelhos, e deixe que a barra pendure à sua frente.",
      "Mantenha os braços fixos, expire e eleve a barra para os ombros, contraindo os bíceps.",
      "Mantenha a posição contraída durante uma breve pausa, logo inspire abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0090",
    "name": "Bom dia sentado com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e uma barra apoiada sobre a parte superior das costas.",
      "Mantenha as costas retas e o peito erguido.",
      "Incline-se lentamente para a frente a partir dos quadris, baixando o tronco em direção ao chão.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "0091",
    "name": "Desenvolvimento acima da cabeça sentado com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada, um pouco além da largura dos ombros.",
      "Eleve a barra do suporte leve à altura dos ombros, com os cotovelos flexionados e as palmas voltadas para a frente.",
      "Empurre a barra acima da cabeça estendendo completamente os braços."
    ]
  },
  {
    "id": "0092",
    "name": "Extensão de tríceps acima da cabeça sentado com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure uma barra com uma pegada pronada, com as mãos afastadas na largura dos ombros, e levante acima da cabeça.",
      "Abaixe a barra por trás da cabeça flexionando os cotovelos, mantendo os braços próxima à cabeça.",
      "Faça uma pausa breve depois estenda os braços para levantar a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0094",
    "name": "Rotação de tronco sentado com barra",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Sente-se em um banco plano com os pés apoiados no chão e os joelhos flexionados.",
      "Segure uma barra com as duas mãos à frente do peito, mantendo os cotovelos levemente flexionados.",
      "Ative o core e gire lentamente o tronco para um lado, mantendo as costas retas.",
      "Faça uma pausa breve ao final do giro e depois gire lentamente de volta à posição inicial."
    ]
  },
  {
    "id": "0095",
    "name": "Encolhimento de Ombros com Barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "trapézios",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra à sua frente com uma pegada pronada.",
      "Mantenha os braços retos e as costas retas durante todo o exercício.",
      "Eleve os ombros para as orelhas o máximo possível, contraindo os trapézios na parte alta.",
      "Mantenha a posição por alguns segundos e depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "0096",
    "name": "Flexão lateral com barra — variação 2",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com as duas mãos, com as palmas voltadas para baixo.",
      "Mantenha as costas retas e o core ativado durante todo o exercício.",
      "Incline lentamente o tronco para o lado direito, baixando a barra para seu joelho direito.",
      "Faça uma pausa breve depois volte à posição inicial."
    ]
  },
  {
    "id": "0098",
    "name": "Agachamento Lateral com Barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés ligeiramente para fora.",
      "Segure uma barra sobre a parte superior das costas, apoiando-a nos trapézios.",
      "Ative o core e mantenha o peito erguido enquanto abaixa o corpo para uma posição de agachamento, flexionando os joelhos e os quadris.",
      "Ao baixar, empurre os joelhos para os lados e mantenha o peso sobre os calcanhares."
    ]
  },
  {
    "id": "0097",
    "name": "Agachamento com base dividida lateral com barra — variação 2",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés ligeiramente para fora.",
      "Segure uma barra sobre a parte superior das costas, apoiando nos ombros.",
      "Dê um passo grande para o lado com o pé direito, mantendo o pé esquerdo fixo no chão.",
      "Flexione o joelho direito e abaixe o corpo para uma posição de agachamento, mantendo o peito erguido e as costas retas."
    ]
  },
  {
    "id": "1756",
    "name": "Levantamento terra unilateral com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris, segurando uma barra à frente das coxas com pegada pronada.",
      "Mova o peso para o pé esquerdo e eleve o pé direito ligeiramente do chão.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e a perna direita estendida atrás do corpo para o equilíbrio.",
      "Abaixe a barra em direção ao chão, mantendo-os próximos ao corpo e a perna esquerda levemente flexionada."
    ]
  },
  {
    "id": "0099",
    "name": "Agachamento unilateral com base dividida com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando uma barra sobre a parte superior das costas.",
      "Dê um passo grande para a frente com uma perna, mantendo o tronco ereto.",
      "Abaixe o corpo flexionando o joelho da frente o quadril, mantendo a perna posterior reta.",
      "Continue baixando até que a coxa atacante fique paralelo ao chão."
    ]
  },
  {
    "id": "2799",
    "name": "Elevação de pernas sentada alternada com barra",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Sente-se em um banco com as costas retas e segure uma barra sobre as coxas.",
      "Mantenha as pernas retas, eleve uma perna o máximo possível mantendo a outra perna no chão.",
      "Abaixe a perna elevada e repita com a outra perna.",
      "Continue alternando as pernas durante o número de repetições desejado."
    ]
  },
  {
    "id": "2800",
    "name": "Elevação de pernas sentada alternada com barra (feminino)",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Sente-se em um banco com as costas retas e segure uma barra sobre as coxas.",
      "Coloque as mãos aos lados do banco para se apoiar.",
      "Mantenha as pernas retas, eleve uma perna o máximo possível mantendo-a paralela ao chão.",
      "Abaixe a perna e repita com a outra perna."
    ]
  },
  {
    "id": "0100",
    "name": "Esquiador com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra à frente das coxas com uma pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Eleve simultaneamente a barra para os ombros enquanto salte ligeiramente do chão.",
      "Ao chegar à parte mais alta do movimento, inverta rapidamente o movimento e abaixe a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0101",
    "name": "Agachamento rápido com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios ou os deltoides posteriores.",
      "Ative o core e mantenha o peito erguido enquanto leve os quadris para trás e para baixo, como se se sentasse em uma cadeira.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "2810",
    "name": "Agachamento com base dividida com barra — variação 2",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, segurando uma barra sobre a parte superior das costas.",
      "Dê um passo grande para a frente com o pé direito, mantendo o tronco ereto.",
      "Abaixe o corpo flexionando os joelhos e os quadris até que a coxa direita fique paralelo ao chão.",
      "Faça uma pausa breve, depois empurre com o calcanhar direito para voltar à posição inicial."
    ]
  },
  {
    "id": "0102",
    "name": "Agachamento ajoelhado com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Comece ajoelhado no chão com os joelhos separados à altura dos quadris e as pontas dos pés apontando para a frente.",
      "Coloque uma barra sobre os ombros, segurando-a com pegada pronada e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Ative o core e mantenha o peito erguido enquanto abaixa lentamente o corpo flexionando os joelhos, mantendo as costas retas.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "2798",
    "name": "Agachamento com salto no step e afundo posterior com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, segurando uma barra sobre a parte superior das costas.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Impulsione-se de forma explosiva para cima, saltando do chão o mais alto que possa.",
      "Aterrisse suavemente sobre os pés e de imediato dê um passo para trás com uma perna para uma afundo inversa."
    ]
  },
  {
    "id": "0103",
    "name": "Abdominal em pé com barra",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra com as duas mãos à frente das coxas.",
      "Ative o core enrole lentamente a barra em direção ao chão, mantendo as costas retas e os braços estendidos.",
      "Continue enrollando a barra para a frente até que o corpo esteja completamente estendido e as mãos fiquem justo sobre a cabeça.",
      "Faça uma pausa breve, depois enrole lentamente a barra de volta para as coxas, mantendo o controle o core ativado."
    ]
  },
  {
    "id": "0104",
    "name": "Flexão de punhos em pé costas com barra",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada.",
      "Apoie a barra sobre o dorso das mãos com as palmas voltadas para baixo e os dedos apontando para o corpo.",
      "Mantenha os braços imóveis, expire e flexione os punhos para cima o mais possível.",
      "Mantenha a posição contraída durante uma breve pausa, logo inspire abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0105",
    "name": "Desenvolvimento Bradford em pé com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra em frente aos ombros com pegada pronada.",
      "Empurre a barra acima da cabeça, estendendo completamente os braços.",
      "Abaixe a barra de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1372",
    "name": "Elevação de panturrilha em pé com barra",
    "bodyPart": "panturrilhas",
    "equipment": "barra",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque uma barra sobre a parte superior das costas.",
      "Eleve os calcanhares do chão o máximo possível, mantendo o apoio apenas nas pontas dos pés.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0106",
    "name": "Rosca em pé com pegada fechada com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada supinada, com as mãos próximas.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o movimento.",
      "Expire ao flexionar o peso contraindo os bíceps. Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "1456",
    "name": "Desenvolvimento militar em pé com pegada fechada com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra com pegada pronada, com as mãos um pouco mais próximas que a largura dos ombros.",
      "Eleve a barra até a altura dos ombros, mantendo os cotovelos próximos ao corpo.",
      "Empurre a barra acima da cabeça, estendendo completamente os braços.",
      "Abaixe a barra de novo à altura dos ombros."
    ]
  },
  {
    "id": "2414",
    "name": "Rosca concentrada em pé com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma mão, com a palma voltada para cima.",
      "Apoie a outra mão sobre a coxa para ter mais estabilidade.",
      "Mantenha o braço superior imóvel, expire e flexione o peso para o ombro.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "0107",
    "name": "Elevação frontal em pé acima da cabeça com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando uma barra à frente das coxas com pegada pronada.",
      "Mantenha as costas retas e ative o core.",
      "Eleve lentamente a barra à sua frente, mantendo os braços retos e as palmas voltadas para baixo.",
      "Continue levantando até que a barra fique ligeiramente acima do nível dos ombros."
    ]
  },
  {
    "id": "0108",
    "name": "Elevação de panturrilhas em pé perna com barra",
    "bodyPart": "panturrilhas",
    "equipment": "barra",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e coloque uma barra sobre a parte superior das costas.",
      "Eleve os calcanhares do chão o máximo possível, usando as panturrilhas.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0109",
    "name": "Extensão de tríceps acima da cabeça em pé com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada.",
      "Eleve a barra acima da cabeça, estendendo completamente os braços.",
      "Mantenha os braços próxima à cabeça, abaixe lentamente a barra por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa breve, depois eleve a barra de volta à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0110",
    "name": "Rosca em pé com pegada invertida com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com uma pegada supinada, com as palmas voltadas para cima.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione o peso contraindo os bíceps, levando a barra o mais perto possível dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0111",
    "name": "Elevação de panturrilhas em pé com balanço de perna e barra",
    "bodyPart": "panturrilhas",
    "equipment": "barra",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra sobre a parte superior das costas.",
      "Eleve os calcanhares do chão o máximo possível, mantendo o equilíbrio sobre as pontas dos pés.",
      "Abaixe lentamente os calcanhares de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0112",
    "name": "Rotação de tronco em pé com barra",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra à frente do peito com as duas mãos, palmas voltadas para baixo.",
      "Ative o core e mantenha as costas retas durante todo o exercício.",
      "Gire lentamente o tronco para a direita, girando sobre os pés e os quadris, mantendo estável a parte inferior do corpo.",
      "Faça uma pausa por alguns segundos ao final da rotação, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "1629",
    "name": "Rosca bíceps em pé com pegada aberta com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada supinada, com as mãos mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e os cotovelos próximos em relação ao tronco.",
      "Expire e flexione a barra para os ombros, mantendo os braços imóveis.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "1457",
    "name": "Desenvolvimento militar em pé com pegada aberta e barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Eleve a barra até a altura dos ombros, mantendo os cotovelos ligeiramente por adiante da barra.",
      "Empurre a barra acima da cabeça, estendendo completamente os braços.",
      "Abaixe a barra de volta à altura dos ombros e repita o número de repetições desejado."
    ]
  },
  {
    "id": "0113",
    "name": "Rosca em pé com pegada aberta com barra",
    "bodyPart": "braços",
    "equipment": "barra",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada, com as mãos mais afastadas que a largura dos ombros.",
      "Deixe que a barra pendure à longitude do braço à frente das coxas, com as palmas voltadas para fora do corpo.",
      "Mantenha os braços imóveis, expire e flexione a barra para cima contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros."
    ]
  },
  {
    "id": "0114",
    "name": "Subida no step com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé de frente para um banco ou degrau com uma barra apoiada na parte superior das costas.",
      "Coloque um pé sobre o banco ou degrau, certificando-se de que todo o pé esteja em contato com a superfície.",
      "Empurre com o calcanhar e suba ao banco ou degrau, estendendo completamente o quadril e o joelho.",
      "Faça uma pausa breve na parte mais alta, depois abaixe de volta à posição inicial."
    ]
  },
  {
    "id": "0115",
    "name": "Bom dia stiff perna com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios.",
      "Mantenha as costas retas, incline-se para a frente a partir dos quadris, empurrando os glúteos para trás.",
      "Abaixe o tronco até que fique paralelo ao chão, sentindo um alongamento nos posteriores das coxas."
    ]
  },
  {
    "id": "0116",
    "name": "Levantamento terra com pernas estendidas com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "posteriores das coxas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e as pontas dos pés apontando para a frente.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Flexione os quadris e abaixe a barra em direção ao chão, mantendo as costas retas e os joelhos levemente flexionados.",
      "Abaixe a barra até que sinta um alongamento nos posteriores das coxas."
    ]
  },
  {
    "id": "0117",
    "name": "Levantamento terra sumô com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés para fora.",
      "Coloque uma barra no chão à sua frente, centrada entre os pés.",
      "Flexione os joelhos e abaixe os quadris, mantendo as costas retas e o peito erguido, para segurer a barra com pegada pronada.",
      "Ative o core e empurre com os calcanhares para levantar a barra do chão, estendendo os quadris e os joelhos simultaneamente."
    ]
  },
  {
    "id": "3305",
    "name": "Thruster com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, segurando uma barra na altura dos ombros com pegada pronada.",
      "Abaixe a uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Ao chegar à parte baixa da agachamento, empurre de forma explosiva com os calcanhares para ficar de pé, pressionando simultaneamente a barra acima da cabeça.",
      "Abaixe a barra de novo à altura dos ombros enquanto volte a baixar à posição de agachamento."
    ]
  },
  {
    "id": "0120",
    "name": "Remada alta com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Deixe que a barra pendure à frente das coxas, com os braços completamente estendidos.",
      "Mantenha as costas retas e o core ativado, expire e eleve a barra em linha reta para o queixo, guiando o movimento com os cotovelos.",
      "Faça uma pausa breve na parte mais alta, logo inspire abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0119",
    "name": "Remada alta com barra — variação 2",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Deixe que a barra pendure à frente das coxas, com os braços completamente estendidos.",
      "Mantenha as costas retas, expire e eleve a barra em linha reta para o queixo, guiando o movimento com os cotovelos.",
      "Faça uma pausa breve na parte mais alta, logo inspire abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0121",
    "name": "Remada alta com barra — variação 3",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Deixe que a barra pendure à frente das coxas, com os braços completamente estendidos.",
      "Mantenha o core ativado e as costas retas, expire enquanto eleva a barra em linha reta para o queixo, guiando o movimento com os cotovelos.",
      "Faça uma pausa breve na parte mais alta, depois inspire enquanto abaixa lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0122",
    "name": "Supino reto com pegada aberta e barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada amplo, um pouco além da largura dos ombros.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos.",
      "Abaixe a barra lentamente em direção ao peito, mantendo os cotovelos ligeiramente abertos para fora."
    ]
  },
  {
    "id": "1258",
    "name": "Supino reto com pegada aberta invertida e barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra com uma pegada supinada amplo, um pouco além da largura dos ombros.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos.",
      "Abaixe a barra lentamente em direção ao peito, mantendo os cotovelos colados ao corpo e os punhos retas."
    ]
  },
  {
    "id": "0124",
    "name": "Agachamento com base aberta e barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés ligeiramente para fora.",
      "Segure a barra sobre a parte superior das costas, apoiando-a nos trapézios ou os deltoides posteriores.",
      "Ative o core e mantenha o peito erguido enquanto abaixa o corpo para uma agachamento, empurrando os quadris para trás e flexionando os joelhos.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0123",
    "name": "Remada alta com pegada aberta com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra com pegada pronada, com as mãos mais afastadas que a largura dos ombros.",
      "Deixe que a barra pendure à frente das coxas, com os braços completamente estendidos.",
      "Mantenha as costas retas, expire e eleve a barra em linha reta para o queixo, guiando o movimento com os cotovelos.",
      "Faça uma pausa breve na parte mais alta, logo inspire abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0126",
    "name": "Flexão de punhos com barra",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e os antebraços apoiados sobre as coxas, segurando uma barra com pegada supinada.",
      "Deixe que a barra rode para as pontas dos dedos, mantendo os punhos retas.",
      "Enrole lentamente a barra para os antebraços flexionando os punhos.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0125",
    "name": "Flexão de punhos com barra — variação 2",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e os joelhos flexionados.",
      "Segure uma barra com pegada supinada, palmas voltadas para cima, e as mãos afastadas na largura dos ombros.",
      "Apoie os antebraços sobre as coxas, deixando que os punhos pendurem da borda.",
      "Flexione lentamente os punhos para cima, levando a barra para os antebraços."
    ]
  },
  {
    "id": "0127",
    "name": "Agachamento zercher com barra",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure a barra na flexione dos cotovelos, com as mãos agarrando a barra para ter mais estabilidade.",
      "Ative o core e mantenha o peito erguido enquanto abaixe os quadris para trás e para baixo em uma posição de agachamento.",
      "Mantenha os joelhos alinhados com os dedos dos pés e o peso sobre os calcanhares."
    ]
  },
  {
    "id": "3212",
    "name": "Toque nos pés básico (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços em relação ao tronco.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e os joelhos levemente flexionados.",
      "Estenda as mãos para as pontas dos pés, mantendo as pernas o mais retas possível.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0128",
    "name": "Cordas de Batalha",
    "bodyPart": "ombros",
    "equipment": "corda",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure um extremo da corda em cada mão, com as palmas voltadas-se entre si.",
      "Eleve os braços até a altura dos ombros, mantendo os cotovelos levemente flexionados.",
      "Comece a fazer ondas alternadas com as cordas, levantando e baixando rapidamente a cada braço."
    ]
  },
  {
    "id": "3360",
    "name": "Deslocamento do urso",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece apoiado sobre mãos e joelhos, com as mãos diretamente abaixo dos ombros e os joelhos diretamente abaixo dos quadris.",
      "Eleve os joelhos ligeiramente do chão, mantendo as costas planas e o core ativado.",
      "Mova a mão direita e o pé esquerdo para a frente simultaneamente, seguido da mão esquerda e o pé direito.",
      "Continue avançando a gatas, alternando os movimentos de mãos e pés."
    ]
  },
  {
    "id": "1259",
    "name": "Alongamento de Peito Atrás da Cabeça",
    "bodyPart": "peito",
    "equipment": "assistido",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Entrelace os dedos por trás da cabeça com os cotovelos apontando para fora.",
      "Aproxime lentamente as escápulas e empurre o peito para a frente.",
      "Mantenha o alongamento durante 15-30 segundos."
    ]
  },
  {
    "id": "0129",
    "name": "Mergulho no banco com joelhos flexionados",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco ou cadeira com as mãos segurando a borda aproxime às quadris.",
      "Deslize os glúteos fosse do banco e estenda as pernas à sua frente, mantendo os calcanhares no chão.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas cerca do banco.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1399",
    "name": "Mergulho no banco no chão",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco ou cadeira com as mãos segurando a borda, os dedos apontando para a frente.",
      "Deslize os glúteos fosse do banco, sustentando seu peso com as mãos.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Empurre-se de volta para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0130",
    "name": "Extensão de quadril banco",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Sente-se em um banco com as costas contra o banco e os pés apoiados no chão.",
      "Coloque as mãos sobre o banco para se apoiar.",
      "Ative os glúteos e os posteriores das coxas, depois eleve os quadris do banco até que o corpo forme uma linha reta desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "3019",
    "name": "Puxadas no banco",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Coloque embaixo de uma barra ou uma superfície horizontal resistente que esteja à altura do peito.",
      "Segure a barra ou a superfície com pegada pronada, um pouco além da largura dos ombros.",
      "Pendure com os braços completamente estendidos e o corpo reto.",
      "Leve o peito para a barra ou a superfície aproximando as escápulas e flexionando os cotovelos."
    ]
  },
  {
    "id": "3639",
    "name": "Rotação de tronco deitado com joelho flexionado (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Estenda os braços para os lados, perpendiculares ao corpo.",
      "Mantenha os joelhos juntos, baixe-as lentamente para um lado, tentando tocar o solo com os joelhos.",
      "Faça uma pausa breve, depois ative o core eleve lentamente os joelhos de volta à posição inicial."
    ]
  },
  {
    "id": "1770",
    "name": "Rosca concentrada bíceps perna",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com as pernas separadas e os pés apoiados no chão.",
      "Segure um halter com uma mão e coloque o cotovelo na parte interna da coxa, logo acima do joelho.",
      "Com a palma voltada para cima, flexione o halter para o ombro mantendo o braço superior imóvel.",
      "Contraia o bíceps na parte mais alta do movimento, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0139",
    "name": "Puxada com pegada fechada para bíceps",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "bíceps",
    "instructions": [
      "Pendure de uma barra fixa com as palmas voltadas para você e as mãos afastadas na largura dos ombros.",
      "Ative o core puxe o corpo para a barra, concentrando-se em usar os bíceps para levantar o corpo.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0140",
    "name": "Barra fixa pronada bíceps",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "bíceps",
    "instructions": [
      "Pendure de uma barra fixa com as palmas voltadas para fora e as mãos afastadas na largura dos ombros.",
      "Ative o core puxe o corpo para cima flexionando os cotovelos, levando o peito para a barra.",
      "Faça uma pausa na parte mais alta do movimento, depois abaixe lentamente de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0137",
    "name": "Elevação do corpo",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece colocando as mãos sobre uma superfície elevada, como um banco ou barras paralelas, com as palmas voltadas para baixo e os dedos apontando para a frente.",
      "Estenda as pernas à sua frente, mantendo os calcanhares no chão e o corpo reto.",
      "Abaixe o corpo flexionando os cotovelos, mantendo-os próximos ao corpo, até que os braços fiquem paralelos ao chão.",
      "Faça uma pausa breve, depois empurre com as palmas para estender os braços e levantar o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3543",
    "name": "Agachamento com salto e queda controlada",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Salte para cima de forma explosiva, estendendo os quadris, os joelhos e os tornozelos.",
      "Enquanto está no ar, aproxime rapidamente os pés."
    ]
  },
  {
    "id": "3544",
    "name": "Prancha lateral inclinado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece deitado de lado com as pernas estendidas e empilhadas uma sobre a outra.",
      "Coloque o antebraço no chão diretamente abaixo do ombro, com o cotovelo flexionado em um ângulo de 90 graus.",
      "Ative o core e eleve os quadris do chão, formando uma linha reta desde a cabeça até os pés.",
      "Mantenha esta posição durante o tempo desejado."
    ]
  },
  {
    "id": "1771",
    "name": "Extensão de tríceps ajoelhado",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Fique de joelhos no chão com os joelhos separados à altura dos quadris.",
      "Coloque as mãos no chão à sua frente, afastadas na largura dos ombros, com os dedos apontando para a frente.",
      "Estenda as pernas retas atrás do corpo, equilibrando sobre as pontas dos pés e as mãos, formando uma linha reta da cabeça aos calcanhares.",
      "Flexione os cotovelos e abaixe a parte superior do corpo em direção ao chão, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "1769",
    "name": "Rosca bíceps lateral deitado",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "bíceps",
    "instructions": [
      "Deite-se de lado com as pernas estendidas e a cabeça apoiada sobre o braço.",
      "Mantenha o braço superior junto ao corpo e flexione o cotovelo para levar o antebraço para o ombro.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o antebraço de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "3168",
    "name": "Remada em agachamento",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um objeto resistente ou um treinador de suspensão com os braços estendidos.",
      "Abaixe o corpo para uma posição de agachamento, mantendo as costas retas e os joelhos por trás das pontas dos pés.",
      "Desde a posição de agachamento, puxe o corpo para cima em direção ao objeto ou ao treinador de suspensão, aproximando as escápulas.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3167",
    "name": "Remada em agachamento com toalha",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando uma toalha à sua frente com as palmas voltadas para baixo.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento, mantendo as costas retas e o peito erguido.",
      "Enquanto abaixa no agachamento, puxe simultaneamente a toalha em direção ao peito, aproximando as escápulas.",
      "Faça uma pausa breve na parte baixa da agachamento, depois volte lentamente à posição inicial enquanto estende os braços."
    ]
  },
  {
    "id": "1373",
    "name": "Elevação de panturrilha em pé",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com as pontas dos pés apontando para a frente.",
      "Coloque as mãos sobre uma parede ou superfície estável para manter o equilíbrio.",
      "Eleve lentamente os calcanhares do chão, levando o peso do corpo para as pontas dos pés.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "3156",
    "name": "Remada em pé com pegada fechada unilateral",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure um halter em uma mão com pegada neutro.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Puxe o halter em direção ao peito, mantendo o cotovelo próximo ao corpo e aproximando as escápulas.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "3158",
    "name": "Remada em pé com pegada fechada",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e o core ativado.",
      "Estenda os braços retos à sua frente, segurando a barra ou as alças usando uma pegada fechada.",
      "Puxe a barra ou as alças para o corpo, aproximando as escápulas."
    ]
  },
  {
    "id": "3162",
    "name": "Remada em pé unilateral",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure um halter com uma mão.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Deixe que o halter pendure reta à sua frente, com o braço completamente estendido.",
      "Puxe o halter em direção ao peito, mantendo o cotovelo próximo ao corpo."
    ]
  },
  {
    "id": "3161",
    "name": "Remada em pé unilateral com toalha",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure uma toalha com uma mão.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Puxe a toalha em direção ao peito, aproximando as escápulas.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente a toalha de volta à posição inicial."
    ]
  },
  {
    "id": "3166",
    "name": "Remada em pé",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure uma barra ou as alças com pegada pronada, palmas voltadas para baixo.",
      "Mantenha as costas retas e o core ativado.",
      "Puxe a barra ou as alças para o corpo, aproximando as escápulas."
    ]
  },
  {
    "id": "3165",
    "name": "Remada em pé com toalha",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma toalha à sua frente com as duas mãos.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Puxe a toalha em direção ao peito, aproximando as escápulas.",
      "Faça uma breve pausa no ponto mais alto, depois solte lentamente a tensão e retorne à posição inicial."
    ]
  },
  {
    "id": "0138",
    "name": "Base para cima",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços aos lados.",
      "Flexione os joelhos e leve em direção ao peito, mantendo os pés fosse do chão.",
      "Contraia o abdômen e eleve os quadris do chão, levando os joelhos para a cabeça.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "1374",
    "name": "Salto na caixa com descida e estabilização unilateral",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé em frente a uma caixa ou plataforma com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e salte sobre a caixa, aterrissando suavemente com um pé sobre a caixa e o outro pé para fora da borda.",
      "Estabilize sobre a caixa com o pé que está sobre ela, mantendo o outro pé fosse do chão.",
      "Mantenha esta posição durante uns segundos, ativando os músculos da panturrilha para conservar o equilíbrio."
    ]
  },
  {
    "id": "2466",
    "name": "Ponte com escalador cruzado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos diretamente abaixo dos ombros e o corpo alinhado.",
      "Ative o core e eleve o pé direito do chão, levando o joelho direito para o cotovelo esquerdo.",
      "Volte a colocar o pé direito na posição inicial e repita o movimento levando o pé esquerdo para o cotovelo direito.",
      "Continue alternando os lados, movando a um ritmo controlado."
    ]
  },
  {
    "id": "1160",
    "name": "Burpee",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e colocando as mãos no chão à sua frente.",
      "Leve os pés para trás de uma chute até uma posição de flexão de braços.",
      "Realize uma flexão de braços, mantendo o corpo alinhado."
    ]
  },
  {
    "id": "0870",
    "name": "Elevação de Quadril",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos aos lados, com as palmas voltadas para baixo.",
      "Contraia o abdômen e eleve as pernas do chão, levando os joelhos em direção ao peito.",
      "Na parte mais alta do movimento, contraia o abdômen e faça uma pausa breve."
    ]
  },
  {
    "id": "1494",
    "name": "Postura da borboleta",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "adutores",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Flexione os joelhos e aproxime as plantas dos pés, deixando que os joelhos caiam para os lados.",
      "Segure-se os tornozelos ou os pés com as mãos.",
      "Sente-se ereto e alonga a coluna."
    ]
  },
  {
    "id": "0148",
    "name": "Desenvolvimento de ombros alternado na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure as alças da polia com pegada pronada.",
      "Coloque as mãos na altura dos ombros, com as palmas voltadas para a frente.",
      "Mantenha o core ativado e as costas retas.",
      "Empurre uma alça para cima e para a frente até que o braço fique completamente estendido."
    ]
  },
  {
    "id": "0149",
    "name": "Extensão de tríceps alternado na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com a mão direita e eleve o braço de maneira que o braço superior fique paralelo ao chão e o cotovelo flexionado em um ângulo de 90 graus.",
      "Mantenha o braço superior imóvel e estenda o antebraço para trás, estendendo completamente o braço.",
      "Faça uma pausa por alguns segundos, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "3235",
    "name": "Flexão nórdica assistida assistido na polia",
    "bodyPart": "pernas",
    "equipment": "polia",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a polia de maneira que o acessório para o tornozelo fique na posição baixa.",
      "Deite-se de bruços no banco com as pernas retas e o acessório para o tornozelo sujeito aos tornozelos.",
      "Segure das alças do banco para manter a estabilidade.",
      "Mantenha imóvel a parte superior do corpo, expire e flexione as pernas para os glúteos flexionando os joelhos."
    ]
  },
  {
    "id": "0150",
    "name": "Puxada lateral barra na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a polia do cabo a uma posição alta e coloque uma barra reta.",
      "Sente-se de frente para a polia com os pés apoiados no chão e os joelhos levemente flexionados.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Incline-se ligeiramente para trás e mantenha o peito erguido, conservando um ligeiro arco na zona lombar."
    ]
  },
  {
    "id": "0151",
    "name": "Supino reto na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a polia à altura do peito e coloque as alças.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure as alças com pegada pronada e dê um passo para a frente para criar tensão nos cabos.",
      "Coloque os pés firmemente no chão e ative o core."
    ]
  },
  {
    "id": "1630",
    "name": "Rosca com pegada fechada na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Prenda uma barra reta à polia baixa.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "1631",
    "name": "Rosca concentrada na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão e os joelhos levemente flexionados.",
      "Segure a asa do cabo com pegada supinada e apoie o cotovelo na parte interna da coxa.",
      "Mantenha o braço superior imóvel, expire e flexione a asa do cabo para o ombro contraindo o bíceps.",
      "Faça uma pausa breve na parte mais alta do movimento, logo inspire abaixe lentamente a asa do cabo de volta à posição inicial."
    ]
  },
  {
    "id": "0152",
    "name": "Extensão concentrada de joelho na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os joelhos flexionados e os pés apoiados no chão.",
      "Segure a asa do cabo com a mão direita e coloque o cotovelo na parte interna do joelho direito.",
      "Estenda completamente o braço, mantendo o cotovelo imóvel e próximo ao joelho.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o braço de volta à posição inicial."
    ]
  },
  {
    "id": "0153",
    "name": "Puxada lateral cruzada na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Coloque uma alça de cabo em cada lado de uma polia à altura dos ombros.",
      "Fique de pé no centro da máquina com os pés afastados na largura dos ombros.",
      "Segure as alças com pegada pronada e dê um passo para trás para criar tensão nos cabos.",
      "Incline-se ligeiramente para a frente a partir dos quadris, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "0154",
    "name": "Crucifixo cruzado inverso na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Coloque uma alça em D na cada cabo de polia baixa fique em pé no centro da polia cruzedo.",
      "Segure as alças com pegada pronada (palmas voltadas para baixo) e dê um passo para a frente, colocando os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir da cintura, mantendo as costas retas e o abdômen ativado.",
      "Com os braços estendidos para os lados e levemente flexionados nos cotovelos, expire e aproxime as escápulas enquanto puxe os cabos para trás e para cima em um movimento de abertura inversa."
    ]
  },
  {
    "id": "0155",
    "name": "Variação de crucifixo cruzado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste as polias do cabo à altura do peito.",
      "Fique de pé no centro da polia com um pé adiante do outro.",
      "Segure as alças com as palmas voltadas para baixo e os braços estendidos para os lados.",
      "Dê um passo para a frente, mantendo os braços levemente flexionados."
    ]
  },
  {
    "id": "0868",
    "name": "Rosca na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure o acessório do cabo com pegada supinada, palmas voltadas para cima.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione o acessório do cabo para os ombros, contraindo os bíceps."
    ]
  },
  {
    "id": "0157",
    "name": "Levantamento Terra na Polia",
    "bodyPart": "pernas",
    "equipment": "polia",
    "target": "glúteos",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Flexione os quadris e os joelhos, baixando o tronco até que as costas fiquem paralelas ao chão.",
      "Segure as alças do cabo com pegada pronada, mantendo os braços retos e os ombros para trás.",
      "Ative os glúteos e os posteriores das coxas para levantar as alças do cabo, estendendo os quadris e ficando de pé."
    ]
  },
  {
    "id": "0158",
    "name": "Crucifixo declinado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a polia a uma posição declinada.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure as alças com as palmas voltadas para a frente, com os braços estendidos retos à sua frente.",
      "Mantenha uma leve flexão nos cotovelos, abre os braços para os lados com um movimento controlado."
    ]
  },
  {
    "id": "1260",
    "name": "Supino declinado unilateral na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a polia a uma posição declinada.",
      "Fique de pé de costas à máquina e segure a asa com uma mão.",
      "Coloque com as costas contra o banco declinado e o braço estendido reto à sua frente.",
      "Flexione o cotovelo e abaixe a asa em direção ao peito, mantendo o braço superior imóvel."
    ]
  },
  {
    "id": "1261",
    "name": "Supino declinado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a polia a uma posição declinada.",
      "Sente-se no banco declinado de frente para a polia.",
      "Segure as alças com pegada pronada e coloque à altura do peito.",
      "Mantenha os pés apoiados no chão e as costas firmemente apoiadas no banco."
    ]
  },
  {
    "id": "0159",
    "name": "Remada declinado sentado com pegada aberta na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se no banco declinado de frente para a polia com os pés firmemente colocados nos reposapiés.",
      "Segure o acessório do cabo com uma pegada pronada ampla, palmas voltadas para baixo.",
      "Incline-se ligeiramente para trás, mantendo as costas retas e o core ativado.",
      "Puxe o cabo para a parte inferior do peito, aproximando as escápulas."
    ]
  },
  {
    "id": "1632",
    "name": "Rosca arrastada na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure o acessório do cabo com pegada supinada, palmas voltadas para cima, e os braços completamente estendidos.",
      "Mantenha os braços imóveis, expire e flexione o acessório do cabo para os ombros contraindo os bíceps.",
      "Faça uma pausa breve na parte mais alta do movimento, contraindo os bíceps."
    ]
  },
  {
    "id": "0160",
    "name": "Remada chão sentado com pegada aberta na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se no chão com as pernas estendidas e as costas retas.",
      "Coloque uma alça de cabo em uma polia baixa localiza a polia atrás do corpo.",
      "Segure a asa com uma pegada pronada ampla, palmas voltadas para baixo.",
      "Incline-se ligeiramente para trás, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "0161",
    "name": "Para a frente elevação na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a asa do cabo com pegada pronada, palmas voltadas para baixo, e os braços completamente estendidos à sua frente.",
      "Mantenha os braços retos, eleve a asa do cabo até a altura dos ombros.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente a asa do cabo de volta à posição inicial."
    ]
  },
  {
    "id": "0162",
    "name": "Elevação frontal na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a asa do cabo com pegada pronada.",
      "Mantenha as costas retas e o core ativado.",
      "Eleve a asa do cabo à sua frente, mantendo os braços retos e as palmas voltadas para baixo.",
      "Continue levantando até que os braços fiquem paralelos ao chão."
    ]
  },
  {
    "id": "0164",
    "name": "Frontal ombro elevação na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a asa do cabo com pegada pronada.",
      "Mantenha as costas retas e o core ativado.",
      "Eleve a asa do cabo à sua frente, mantendo os braços retos e as palmas voltadas para baixo.",
      "Continue levantando até que os braços fiquem paralelos ao chão."
    ]
  },
  {
    "id": "0165",
    "name": "Rosca martelo com corda na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e uma leve flexão nos joelhos.",
      "Segure o acessório de corda do cabo com pegada supinada, palmas voltadas-se entre si, e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando o acessório de corda do cabo até que os bíceps estejam completamente contraídos e a sensata esteja à altura dos ombros."
    ]
  },
  {
    "id": "1722",
    "name": "Extensão de tríceps acima da cabeça no pulley alto",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Coloque uma corda em uma polia alta e fique em pé de costas à máquina.",
      "Segure a corda com as duas mãos e estenda os braços acima da cabeça.",
      "Mantenha os cotovelos próxima à cabeça e a parte superior dos braços imóvel.",
      "Abaixe lentamente a corda por trás da cabeça flexionando os cotovelos."
    ]
  },
  {
    "id": "0167",
    "name": "Remada alta ajoelhado na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Segure uma barra reta a uma polia à altura do peito.",
      "Fique de joelhos de frente para a polia e segure a barra com uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Sente-se sobre os calcanhares, mantendo as costas retas e o core ativado.",
      "Puxe a barra para a parte superior do abdômen, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0168",
    "name": "Adução de Quadril na Polia",
    "bodyPart": "pernas",
    "equipment": "polia",
    "target": "adutores",
    "instructions": [
      "Segure a luva de tornozelo a seu tornozelo e fique em pé de frente para a polia.",
      "Coloque-se o suficientemente afastado da máquina para que tenha tensão no cabo.",
      "Coloque as mãos sobre a máquina para se apoiar.",
      "Mantenha a perna reta, mova lentamente a perna por adiante do corpo para a linha média."
    ]
  },
  {
    "id": "0169",
    "name": "Supino inclinado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco a uma inclinação de 45 graus.",
      "Segure as alças do cabo às polias altas.",
      "Sente-se no banco de frente para a polia com os pés apoiados planos no chão.",
      "Segure as alças usando uma pegada pronada e leve à altura dos ombros."
    ]
  },
  {
    "id": "1318",
    "name": "Remada inclinado banco na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus e segure uma alça de cabo à polia baixa.",
      "Sente-se no banco de frente para a polia com os pés apoiados planos no chão e os joelhos levemente flexionados.",
      "Segure a asa do cabo com uma pegada pronada e estenda os braços completamente à sua frente.",
      "Incline-se para a frente a partir dos quadris mantendo as costas retas e o core ativado."
    ]
  },
  {
    "id": "0171",
    "name": "Crucifixo inclinado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a polia a uma posição abaixe segure as alças.",
      "Sente-se em um banco inclinado com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e estenda os braços retos à sua frente.",
      "Mantenha uma leve flexão nos cotovelos, abre os braços para os lados com um movimento controlado."
    ]
  },
  {
    "id": "0170",
    "name": "Crucifixo inclinado na bola suíça na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Coloque uma bola suíça em um ângulo inclinado.",
      "Segure as alças do cabo às polias altas de uma polia.",
      "Sente-se sobre a bola suíça de costas à máquina, com os pés firmemente apoiados no chão.",
      "Segure as alças do cabo com uma pegada pronada, com as palmas voltadas para a frente."
    ]
  },
  {
    "id": "0172",
    "name": "Tríceps Pulley Inclinado",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure uma barra reta a uma polia com polia alta.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Incline-se ligeiramente para a frente mantenha as costas retas."
    ]
  },
  {
    "id": "0173",
    "name": "Extensão de Tríceps Inclinada na Polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Ajuste a polia a uma posição de polia baixa.",
      "Segure uma barra reta ao cabo.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada e estenda os braços retos acima da cabeça."
    ]
  },
  {
    "id": "0174",
    "name": "Giro de Judô na Polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com as duas mãos à altura do peito, com as palmas voltadas para baixo.",
      "Ative o core e gire o tronco para a direita, puxando o cabo cruzando o corpo.",
      "Enquanto gires, gire o pé de atrás e permite que os quadris rotacionem de forma natural."
    ]
  },
  {
    "id": "0860",
    "name": "Coice na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com a mão direita e dê um passo para trás um passo para criar tensão no cabo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Mantenha a parte superior do braço próximo ao corpo e o cotovelo flexionado em um ângulo de 90 graus."
    ]
  },
  {
    "id": "0175",
    "name": "Abdominal curto ajoelhado na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Segure uma alça de corda a uma polia alta e fique de joelhos de costas à máquina.",
      "Segure a asa de corda com as duas mãos e coloque por trás da cabeça, mantendo os cotovelos para fora aos lados.",
      "Mantenha os quadris imóveis, flexione a cintura e encolha o tronco para as coxas.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "3697",
    "name": "Remada para deltoide posterior ajoelhado com corda na polia (masculino)",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Segure uma alça de corda a uma polia baixa fique de joelhos de frente para a máquina.",
      "Segure a corda com uma pegada neutro (as palmas uma em frente à outra) e estenda os braços completamente à sua frente.",
      "Mantenha as costas retas e o core ativado, puxe a corda para o corpo retraindo as escápulas.",
      "Contraia as escápulas ao final do movimento e mantenha a posição por uma breve pausa."
    ]
  },
  {
    "id": "0176",
    "name": "Extensão de tríceps ajoelhado na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma alça de corda a uma polia alta e fique de joelhos de frente para a polia.",
      "Segure a corda com uma pegada neutro (as palmas uma em frente à outra) e leve as mãos aos lados da cabeça.",
      "Mantenha os cotovelos próxima à cabeça e a parte superior dos braços imóvel durante todo o exercício.",
      "Estenda os antebraços contraindo os tríceps até que os braços fiquem completamente estendidos."
    ]
  },
  {
    "id": "2330",
    "name": "Puxada alta com amplitude completa na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Sente-se na máquina de puxada ao peito com os joelhos colocados embaixo dos apoios acolchoados.",
      "Segure a barra do cabo com uma pegada pronada, um pouco além da largura dos ombros.",
      "Incline-se ligeiramente para trás e mantenha o peito erguido, conservando um ligeiro arco na zona lombar.",
      "Puxe a barra para a parte superior do peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0177",
    "name": "Puxada lateral com corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure um acessório de corda à polia em uma posição alta.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a corda com uma pegada pronada, com as palmas uma em frente à outra.",
      "Mantenha as costas retas e incline-se ligeiramente para trás."
    ]
  },
  {
    "id": "2616",
    "name": "Puxada lateral com v barra na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Sente-se na máquina de puxada de cabo e segure o acessório em V com uma pegada pronada.",
      "Ajuste o apoio acolchoado de joelhos para que suas coxas fiquem asseguradas embaixo dela.",
      "Mantenha as costas retas e incline-se ligeiramente para trás.",
      "Puxe o acessório em V para a parte superior do peito mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "0178",
    "name": "Elevação lateral na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure as alças do cabo com uma pegada pronada.",
      "Mantenha os braços retos e o core ativado.",
      "Eleve os braços para os lados até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0179",
    "name": "Crucifixo baixo na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Segure as alças nas polias baixas de uma polia e selecione um peso adequado.",
      "Fique de pé no centro da máquina com os pés afastados na largura dos ombros e uma leve flexão nos joelhos.",
      "Segure as alças usando uma pegada pronada e estenda os braços para os lados, mantendo uma leve flexão nos cotovelos.",
      "Mantenha o controle, leve lentamente os braços para a frente com um movimento amplo, cruzando à frente do corpo."
    ]
  },
  {
    "id": "0180",
    "name": "Remada sentada baixo na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se na máquina com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure as alças usando uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente, mantendo uma leve flexão nos cotovelos.",
      "Puxe as alças para o corpo, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1634",
    "name": "Rosca bíceps deitado na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Prenda uma barra reta à polia baixa.",
      "Deite-se de costas em um banco plano com os pés apoiados planos no chão.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Estenda os braços por completo, mantendo os cotovelos próximos em relação ao tronco."
    ]
  },
  {
    "id": "0182",
    "name": "Rosca deitado com pegada fechada na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Prenda uma barra reta à polia baixa.",
      "Deite-se de costas em um banco plano com os pés apoiados planos no chão.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Estenda os braços por completo, mantendo os cotovelos próximos em relação ao tronco."
    ]
  },
  {
    "id": "0184",
    "name": "Pullover deitado extensão com corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure uma corda a uma polia e coloque a polia na posição mais alta.",
      "Deite-se em um banco com a cabeça orientada para a polia.",
      "Segure a corda com as duas mãos e estenda os braços retos acima do peito.",
      "Mantenha os braços retos, abaixe lentamente a corda por trás da cabeça mantendo o controle."
    ]
  },
  {
    "id": "0185",
    "name": "Crucifixo deitado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Segure as alças aos cabos e deite-se de costas em um banco com os pés apoiados planos no chão.",
      "Segure as alças com as palmas uma em frente à outra e os braços estendidos retos acima do peito.",
      "Mantenha uma leve flexão nos cotovelos, abaixe os braços para os lados em um arco amplo até sentir um alongamento no peito.",
      "Faça uma pausa por alguns segundos e depois contraia os músculos do peito para regressar os braços à posição inicial."
    ]
  },
  {
    "id": "0186",
    "name": "Tríceps testa deitado na polia — variação 2",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma alça de corda a uma polia baixa.",
      "Deite-se de costas em um banco plano com a cabeça orientada para a polia.",
      "Segure a asa de corda com as duas mãos, com as palmas uma em frente à outra, e estenda os braços retos acima do peito.",
      "Mantenha a parte superior dos braços imóvel, abaixe lentamente a asa de corda em direção à testa, flexionando os cotovelos."
    ]
  },
  {
    "id": "0188",
    "name": "Crucifixo médio na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Segure os cabos a ambos lados de uma polia à altura do peito.",
      "Fique de pé no centro da máquina com um pé ligeiramente adiante do outro.",
      "Segure as alças usando uma pegada pronada e estenda os braços para os lados.",
      "Mantenha uma leve flexão nos cotovelos e conserva uma leve inclinação para a frente."
    ]
  },
  {
    "id": "0189",
    "name": "Remada curvada unilateral na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Segure a asa do cabo com uma mão, com a palma voltada para dentro, e estenda o braço por completo.",
      "Puxe a asa do cabo para o corpo, mantendo o cotovelo cerca do lado, até que a mão chegue à parte baixa do peito."
    ]
  },
  {
    "id": "0190",
    "name": "Rosca unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com uma pegada supinada, com a palma voltada para cima.",
      "Mantenha o cotovelo cerca do lado e flexione lentamente o antebraço para o ombro.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o antebraço de volta à posição inicial."
    ]
  },
  {
    "id": "1262",
    "name": "Crucifixo unilateral declinado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Segure uma alça em D a uma polia baixa coloque o banco em um ângulo declinado.",
      "Deite-se no banco com a cabeça orientada para a máquina e segure a asa com a mão direita.",
      "Estenda o braço reto acima do peito, mantendo uma leve flexão no cotovelo.",
      "Com um movimento controlado, abaixe o braço para o lado até que a mão fique alinhada com o ombro."
    ]
  },
  {
    "id": "1263",
    "name": "Crucifixo unilateral na bola suíça na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure uma alça do cabo com uma mão e estenda o braço para o lado, paralelo ao chão.",
      "Mantenha o cotovelo levemente flexionado e a palma voltada para a frente.",
      "Leve lentamente o braço cruzando o corpo, contraindo os músculos do peito."
    ]
  },
  {
    "id": "1264",
    "name": "Crucifixo unilateral inclinado na bola suíça na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas contra um banco inclinado.",
      "Segure uma alça do cabo com uma mão, com o braço estendido e a palma voltada para dentro.",
      "Mantenha uma leve flexão no cotovelo, abaixe lentamente o braço para o lado até que a mão fique alinhada com o ombro.",
      "Faça uma pausa por alguns segundos e depois contraia os músculos do peito para regressar o braço à posição inicial."
    ]
  },
  {
    "id": "1265",
    "name": "Supino inclinado unilateral na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a polia a uma posição de polia baixa.",
      "Sente-se em um banco inclinado de costas à polia.",
      "Segure a asa com uma mão e leve até a altura do ombro.",
      "Coloque os pés firmemente no chão e mantenha uma posição estável."
    ]
  },
  {
    "id": "1266",
    "name": "Supino inclinado unilateral na bola suíça com polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas contra um banco inclinado.",
      "Segure uma alça do cabo com uma mão e coloque o braço em um ângulo de 90 graus com o cotovelo flexionado.",
      "Empurre a asa do cabo para a frente para cima, estendendo o braço por completo.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente a asa do cabo de volta à posição inicial."
    ]
  },
  {
    "id": "0191",
    "name": "Unilateral lateral com o tronco inclinado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, em frente a uma polia.",
      "Segure a asa com uma mão e dê um passo para trás um passo para criar tensão no cabo.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e o core ativado.",
      "Estenda o braço para o lado, paralelo ao chão, com uma leve flexão no cotovelo."
    ]
  },
  {
    "id": "0192",
    "name": "Elevação lateral unilateral na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, de frente para a polia.",
      "Segure a asa do cabo com uma mão, com a palma voltada para baixo, e coloque-se o suficientemente afastado da máquina para que tenha tensão no cabo.",
      "Mantenha o braço reto e levante-o lentamente para o lado até que fique paralelo ao chão.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o braço de volta à posição inicial."
    ]
  },
  {
    "id": "1633",
    "name": "Rosca Scott unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Ajuste a polia de modo que o apoio acolchoado para rosca em banco Scott fique à altura do peito.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com uma pegada supinada e coloque a parte superior do braço contra o apoio acolchoado do banco Scott.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "1267",
    "name": "Supino unilateral na bola suíça com polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure uma alça do cabo com uma mão e coloque o braço à altura do peito, com o cotovelo flexionado.",
      "Coloque a outra mão no quadril para manter o equilíbrio.",
      "Empurre a asa do cabo para a frente, estendendo o braço por completo."
    ]
  },
  {
    "id": "3563",
    "name": "Puxada unilateral na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure uma alça individual a uma polia com polia alta.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a asa com uma pegada pronada e estenda o braço por completo.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "1635",
    "name": "Rosca Scott inversa unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Ajuste a polia de modo que a polia fique na posição baixa.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com uma pegada supinada e coloque a parte superior do braço contra o apoio acolchoado do banco Scott.",
      "Mantenha as costas retas e o core ativado durante todo o exercício."
    ]
  },
  {
    "id": "0193",
    "name": "Remada alta unilateral ajoelhada com costas retas na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Segure uma alça a uma polia à altura da cintura.",
      "Fique de joelhos de frente para a polia e segure a asa com uma mão.",
      "Mantenha as costas retas e o core ativado.",
      "Puxe a asa em direção ao peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1723",
    "name": "Tríceps na polia unilateral",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Fique de pé em frente a uma polia com um acessório de barra reta à altura do peito.",
      "Segure a barra com uma pegada pronada e dê um passo para trás um passo para criar tensão no cabo.",
      "Coloque os pés afastados na largura dos ombros e flexione ligeiramente os joelhos.",
      "Mantenha as costas retas e o core ativado durante todo o exercício."
    ]
  },
  {
    "id": "1636",
    "name": "Rosca acima da cabeça na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Segure uma barra reta a uma polia com polia alta.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis."
    ]
  },
  {
    "id": "1637",
    "name": "Rosca acima da cabeça na bola suíça na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça e segure a asa do cabo com uma pegada supinada.",
      "Estenda os braços completamente acima da cabeça, mantendo os cotovelos próximas às orelhas.",
      "Flexione lentamente o cabo para a frente, mantendo a parte superior dos braços imóvel.",
      "Faça uma pausa breve na parte baixa do movimento, depois volte lentamente à posição inicial."
    ]
  },
  {
    "id": "0194",
    "name": "Extensão de tríceps acima da cabeça com corda na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma corda a uma polia em uma posição alta.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure a corda com as duas mãos, com as palmas uma em frente à outra, e leve as mãos acima da cabeça.",
      "Mantenha a parte superior dos braços próxima à cabeça e os cotovelos apontando para a frente."
    ]
  },
  {
    "id": "1319",
    "name": "Remada com rotação da pegada na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Segure uma alça a uma polia à altura da cintura.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a asa com uma pegada pronada, com as palmas voltadas para baixo.",
      "Dê um passo para trás um passo para criar tensão no cabo, mantendo as costas retas e os joelhos levemente flexionados."
    ]
  },
  {
    "id": "0195",
    "name": "Rosca Scott na Polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Ajuste a polia de modo que o apoio acolchoado para rosca em banco Scott fique à altura do peito.",
      "Sente-se no banco Scott e coloque a parte superior dos braços sobre o apoio acolchoado, agarrando o acessório do cabo com uma pegada supinada.",
      "Mantenha as costas retas e os cotovelos colados em relação ao tronco.",
      "Flexione lentamente o acessório do cabo para os ombros, contraindo os bíceps na parte mais alta do movimento."
    ]
  },
  {
    "id": "1268",
    "name": "Supino na bola suíça com polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e os joelhos em um ângulo de 90 graus.",
      "Segure as alças do cabo à altura do peito com as palmas voltadas para baixo e os cotovelos flexionados.",
      "Ative o core e empurre as alças do cabo para a frente até que os braços fiquem completamente estendidos.",
      "Faça uma pausa por alguns segundos e depois liberta lentamente a tensão, regressando as alças do cabo à posição inicial."
    ]
  },
  {
    "id": "0196",
    "name": "Puxada entre as pernas com corda na polia",
    "bodyPart": "pernas",
    "equipment": "polia",
    "target": "glúteos",
    "instructions": [
      "Fique de pé de costas à polia com os pés afastados na largura dos ombros.",
      "Segure o acessório de corda com as duas mãos e dê um passo para a frente, criando tensão no cabo.",
      "Flexione os quadris e abaixe a parte superior do corpo até que fique paralela ao chão, mantendo as costas retas.",
      "Ative os glúteos e os posteriores das coxas para levar o corpo de volta para cima, à posição inicial."
    ]
  },
  {
    "id": "0198",
    "name": "Puxada na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a máquina de puxada de cabo de maneira que o assento fique a uma altura confortável e o apoio acolchoado de joelhos esteja assegurada.",
      "Sente-se com as costas reta e os pés apoiados planos no chão.",
      "Segure a barra do cabo com uma pegada pronada, um pouco além da largura dos ombros.",
      "Incline-se ligeiramente para trás e ative o core."
    ]
  },
  {
    "id": "0197",
    "name": "Puxada para dorsal com barra na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a altura do assento para que suas coxas fiquem paralelas ao chão e os pés fiquem apoiados planos no chão.",
      "Segure a barra de puxada com uma pegada pronada, um pouco além da largura dos ombros.",
      "Sente-se incline-se ligeiramente para trás, mantendo o peito erguido e as costas retas.",
      "Puxe a barra em direção ao peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1638",
    "name": "Rosca bíceps pulldown na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Segure uma barra reta à polia no ajuste mais alto.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis."
    ]
  },
  {
    "id": "0201",
    "name": "Tríceps na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma barra reta a uma polia com polia alta.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros e uma leve flexão nos joelhos.",
      "Segure a barra com uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis."
    ]
  },
  {
    "id": "0199",
    "name": "Tríceps na polia com braços estendidos — variação 2",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure uma barra reta a uma polia com polia alta.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros e uma leve flexão nos joelhos.",
      "Segure a barra com uma pegada pronada, mantendo os braços retos e as palmas voltadas para baixo.",
      "Ative o core e mantenha as costas retas enquanto expire e empurre a barra para baixo em direção às coxas."
    ]
  },
  {
    "id": "0200",
    "name": "Tríceps corda na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure um acessório de corda a uma polia alta em uma polia.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros e uma leve flexão nos joelhos.",
      "Segure a corda com uma pegada pronada, com as palmas uma em frente à outra.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "0202",
    "name": "Remada para deltoide posterior com alças na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Segure um alça de estribo a uma polia de cabo abaixe fique em pé de frente para a máquina.",
      "Segure o alça com a mão esquerda e dê um passo para trás um passo com o pé direito, colocando o corpo em um ligeiro ângulo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Com o braço esquerdo estendido e a palma voltada para baixo, puxe o alça em direção ao peito retraindo a escápula."
    ]
  },
  {
    "id": "0203",
    "name": "Remada para deltoide posterior com corda na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Segure uma alça de corda a uma polia baixa.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a asa de corda com uma pegada pronada, com as palmas uma em frente à outra.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas."
    ]
  },
  {
    "id": "0204",
    "name": "Puxada posterior na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma alça a uma polia baixa fique em pé de costas à máquina.",
      "Segure a asa com uma pegada pronada e estenda os braços retos à sua frente.",
      "Mantenha os cotovelos imóveis, puxe a asa de volta para o corpo, contraindo os tríceps ao final do movimento.",
      "Retorne lentamente a asa à posição inicial e repita o número de repetições desejado."
    ]
  },
  {
    "id": "0205",
    "name": "Puxada posterior na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a polia de modo que a polia fique na posição mais alta.",
      "Sente-se de frente para a máquina com os pés apoiados planos no chão e os joelhos levemente flexionados.",
      "Segure o acessório do cabo com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Incline-se ligeiramente para trás, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "0873",
    "name": "Abdominal Infra na Polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Segure um cabo a uma polia baixa deite-se de costas sobre um colchonete.",
      "Segure o cabo com as duas mãos e estenda os braços retos para o teto.",
      "Flexione os joelhos e eleve as pernas, levando as coxas em direção ao peito.",
      "Enquanto mantenha a parte superior do corpo estável, flexione a pelve em direção ao peito, levantando os quadris do colchonete."
    ]
  },
  {
    "id": "0206",
    "name": "Rosca inversa na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Prenda uma barra reta à polia baixa.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "2406",
    "name": "Tríceps na polia com pegada invertida sz barra com braço blaster",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma barra reta à polia no ajuste mais alto.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada supinada, com as palmas voltadas para cima e as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "1413",
    "name": "Rosca reverso unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure a asa do cabo com uma pegada supinada, com a palma voltada para baixo.",
      "Mantenha o cotovelo cerca do lado e flexione lentamente o antebraço para o ombro.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o antebraço de volta à posição inicial."
    ]
  },
  {
    "id": "0209",
    "name": "Rosca Scott inversa na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Ajuste a polia de modo que o apoio acolchoado para rosca em banco Scott fique à altura do peito.",
      "Sente-se no banco Scott e coloque a parte superior dos braços sobre o apoio acolchoado, com as palmas voltadas para baixo e os cotovelos completamente estendidos.",
      "Segure as alças do cabo com uma pegada supinada, afastadas na largura dos ombros.",
      "Mantenha a parte superior dos braços imóvel, expire e flexione as alças para os ombros, contraindo os bíceps."
    ]
  },
  {
    "id": "0210",
    "name": "Extensão de punhos na polia",
    "bodyPart": "antebraços",
    "equipment": "polia",
    "target": "antebraços",
    "instructions": [
      "Segure um cabo a uma polia baixa sente-se em um banco de frente para a polia.",
      "Segure a asa do cabo com uma pegada pronada, com as palmas voltadas para baixo.",
      "Apoie os antebraços sobre as coxas, com os punhos para fora da borda.",
      "Mantenha os antebraços fixos, expire e flexione os punhos para cima o máximo possível."
    ]
  },
  {
    "id": "0207",
    "name": "Tríceps na polia com pegada invertida",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma barra reta a uma polia com polia alta.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada supinada, com as palmas voltadas para cima e as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "0208",
    "name": "Remada alta sentada com pegada invertida e costas retas na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se de frente para a polia com os pés apoiados planos no chão.",
      "Segure o acessório do cabo com uma pegada supinada, com as palmas voltadas para cima e as mãos afastadas na largura dos ombros.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente a partir dos quadris.",
      "Puxe o cabo para o tronco retraindo as escápulas e contraindo os músculos das costas."
    ]
  },
  {
    "id": "1320",
    "name": "Remada sentada cruzada com corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se na máquina de remo com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure as cordas do cabo com uma pegada pronada, com as palmas uma em frente à outra.",
      "Incline-se ligeiramente para trás, mantendo as costas retas e o core ativado.",
      "Puxe as cordas do cabo em direção ao peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1321",
    "name": "Remada sentada elevada com corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se no assento elevado de frente para a polia.",
      "Segure as alças de corda com uma pegada pronada, com as palmas uma em frente à outra.",
      "Mantenha as costas retas e incline-se ligeiramente para trás, conservando uma leve flexão nos joelhos.",
      "Puxe o cabo para o corpo retraindo as escápulas e contraindo os músculos das costas."
    ]
  },
  {
    "id": "1322",
    "name": "Remada corda extensão inclinado banco na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus e segure uma polia à polia baixa.",
      "Segure uma alça de corda à polia e sente-se no banco inclinado de frente para a máquina.",
      "Segure a asa de corda com uma pegada pronada e incline-se para a frente, mantendo as costas retas.",
      "Estenda os braços por completo, puxando a corda para a parte superior do peito mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "1639",
    "name": "Rosca martelo no banco Scott corda na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Segure um acessório de corda a uma polia baixa.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a corda com uma pegada neutro (as palmas uma em frente à outra).",
      "Coloque a parte superior dos braços contra o apoio acolchoado do banco Scott, mantendo os cotovelos levemente flexionados."
    ]
  },
  {
    "id": "1724",
    "name": "Extensão de tríceps acima da cabeça com corda no pulley alto",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma corda a uma polia alta e ajuste o peso segundo corresponda.",
      "Fique de pé de costas à máquina de polias com os pés afastados na largura dos ombros.",
      "Segure a corda com as duas mãos, com as palmas voltadas para baixo, e leve as mãos acima da cabeça.",
      "Mantenha a parte superior dos braços próxima à cabeça e perpendicular ao chão."
    ]
  },
  {
    "id": "1725",
    "name": "Extensão de tríceps corda inclinado na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma corda a uma polia alta e ajuste o banco inclinado a um ângulo confortável.",
      "Fique de pé de costas à polia com os pés afastados na largura dos ombros.",
      "Segure a corda com uma pegada pronada e estenda os braços retos acima da cabeça.",
      "Mantenha os cotovelos próxima à cabeça e a parte superior dos braços imóvel durante todo o exercício."
    ]
  },
  {
    "id": "1726",
    "name": "Extensão de tríceps corda deitado no chão na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Segure uma corda a uma polia e coloque na posição baixa.",
      "Deite-se no chão de costas, com a cabeça orientada para a polia.",
      "Segure a corda com as duas mãos, com as palmas uma em frente à outra, e estenda os braços retos para o teto.",
      "Mantenha a parte superior dos braços imóvel e abaixe lentamente a corda para a frente, flexionando os cotovelos."
    ]
  },
  {
    "id": "1640",
    "name": "Rosca martelo no banco Scott corda unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Segure uma alça de corda a uma polia baixa.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a asa de corda com uma pegada supinada, com as palmas voltadas para cima.",
      "Coloque a parte superior do braço contra o apoio acolchoado do banco Scott, mantendo o cotovelo levemente flexionado."
    ]
  },
  {
    "id": "1323",
    "name": "Remada sentada corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se na máquina de remo com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure as cordas do cabo com uma pegada pronada, com as palmas uma em frente à outra.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente, mantendo uma leve flexão nos cotovelos.",
      "Puxe as cordas do cabo para o corpo, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0211",
    "name": "Rotações russas na bola suíça com polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure a asa do cabo com as duas mãos e estenda os braços retos à sua frente.",
      "Incline-se ligeiramente para trás mantendo as costas retas e o core ativado.",
      "Gire o tronco para a direita, levando a asa do cabo para o quadril direito."
    ]
  },
  {
    "id": "2144",
    "name": "Supino sentado na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e as alças do cabo a uma posição confortável.",
      "Sente-se no banco com as costas retas e os pés apoiados planos no chão.",
      "Segure as alças do cabo com uma pegada pronada à altura do ombro.",
      "Empurre as alças para a frente afastando do corpo, estendendo os braços por completo."
    ]
  },
  {
    "id": "0212",
    "name": "Abdominal Sentado na Polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Sente-se em uma polia com os pés apoiados planos no chão e os joelhos flexionados.",
      "Segure a asa do cabo com as duas mãos e coloque por trás da cabeça.",
      "Ative o abdômen e flexione lentamente a parte superior do corpo para a frente, levando o peito para os joelhos.",
      "Faça uma pausa por alguns segundos na parte alta e depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "1641",
    "name": "Rosca sentado na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Sente-se em uma polia com os pés apoiados planos no chão e as costas retas.",
      "Segure o acessório do cabo com uma pegada supinada, com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha a parte superior dos braços imóvel, expire e flexione o acessório do cabo para os ombros, contraindo os bíceps.",
      "Faça uma pausa breve na parte mais alta do movimento, contraindo os bíceps."
    ]
  },
  {
    "id": "0213",
    "name": "Remada alta sentado v barra na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Sente-se na polia com os pés apoiados planos no chão e os joelhos levemente flexionados.",
      "Segure o acessório em V com uma pegada pronada, com as palmas uma em frente à outra e as mãos afastadas na largura dos ombros.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente a partir dos quadris.",
      "Puxe o acessório em V para o tronco retraindo as escápulas e contraindo os músculos das costas."
    ]
  },
  {
    "id": "0214",
    "name": "Remada sentado unilateral alternado na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se em um banco em frente a uma polia com os pés apoiados planos no chão e os joelhos levemente flexionados.",
      "Segure a asa com uma mão e mantenha o braço completamente estendido à sua frente.",
      "Puxe a asa para o corpo, retraindo a escápula e mantendo o cotovelo cerca do lado.",
      "Faça uma pausa por alguns segundos na parte mais alta do movimento, contraindo os músculos das costas."
    ]
  },
  {
    "id": "1642",
    "name": "Rosca concentrada sentado unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados planos no chão e as costas retas.",
      "Segure uma alça do cabo com uma mão e coloque o cotovelo na parte interna da coxa, logo acima do joelho.",
      "Mantenha a parte superior do braço imóvel e flexione a asa do cabo para o ombro enquanto expire.",
      "Faça uma pausa breve na parte mais alta do movimento, contraindo os bíceps."
    ]
  },
  {
    "id": "1643",
    "name": "Rosca sentado acima da cabeça na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco de frente para a polia com os pés apoiados planos no chão.",
      "Segure o acessório do cabo com uma pegada supinada, com as palmas voltadas para cima e as mãos afastadas na largura dos ombros.",
      "Mantenha a parte superior dos braços imóvel e os cotovelos próximos em relação ao tronco.",
      "Expire e flexione o acessório do cabo para os ombros, contraindo os bíceps."
    ]
  },
  {
    "id": "0215",
    "name": "Elevação posterior sentado na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco de frente para a polia com os pés apoiados planos no chão.",
      "Segure as alças do cabo com uma pegada pronada e estenda os braços retos à sua frente.",
      "Mantenha os braços retos, eleve-os lentamente para os lados até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0861",
    "name": "Remada sentada na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se na máquina de remo com cabo com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure as alças usando uma pegada pronada, mantendo as costas retas e os ombros relaxados.",
      "Puxe as alças para o corpo, contraindo as escápulas entre si.",
      "Faça uma pausa por alguns segundos no ponto de maior contração, depois retorne lentamente as alças de volta à posição inicial."
    ]
  },
  {
    "id": "0216",
    "name": "Rotação interna de ombro sentado na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira de frente para a polia com os pés apoiados planos no chão.",
      "Segure a asa do cabo com o braço estendido reto à sua frente, paralelo ao chão.",
      "Mantenha o cotovelo levemente flexionado e as escápulas retraídos para trás e para baixo.",
      "Gire lentamente o braço para dentro, levando a asa do cabo para o centro do corpo."
    ]
  },
  {
    "id": "2399",
    "name": "Rotação de tronco sentado na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Sente-se em uma polia com os pés apoiados planos no chão e os joelhos levemente flexionados.",
      "Segure a asa do cabo com as duas mãos e estenda os braços retos à sua frente.",
      "Mantenha o core ativado, gire lentamente o tronco para um lado, puxando o cabo cruzando o corpo.",
      "Faça uma pausa por alguns segundos ao final da amplitude de movimento e depois gire lentamente de volta à posição inicial."
    ]
  },
  {
    "id": "0218",
    "name": "Remada sentado com pegada aberta na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se na máquina de remo com cabo com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure a asa com uma pegada pronada ampla, palmas voltadas para baixo.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente a partir dos quadris.",
      "Puxe a asa para a parte baixa do peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0219",
    "name": "Desenvolvimento no Pulley",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Ajuste a polia de modo que as alças fiquem à altura do ombro.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure as alças usando uma pegada pronada e leve até a altura do ombro, com os cotovelos flexionados e apontando para fora.",
      "Empurre as alças para cima até que os braços fiquem completamente estendidos acima da cabeça."
    ]
  },
  {
    "id": "0220",
    "name": "Encolhimento no Pulley",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "trapézios",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure as alças do cabo com uma pegada pronada e deixe que os braços fiquem soltos à sua frente.",
      "Mantendo os braços retos, encolha os ombros para as orelhas.",
      "Mantenha a contração por alguns segundos, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "0222",
    "name": "Inclinação lateral na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a asa do cabo com uma mão.",
      "Mantenha as costas retas e o core ativado.",
      "Flexione lentamente a cintura para um lado, baixando a asa do cabo para o joelho.",
      "Faça uma pausa breve depois volte à posição inicial."
    ]
  },
  {
    "id": "0221",
    "name": "Flexão lateral abdominal no BOSU com polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando a asa do cabo com uma mão.",
      "Coloque a outra mão no quadril.",
      "Ative o core flexione lentamente a cintura para o lado em que segure o cabo, mantendo as costas retas.",
      "Faça uma pausa breve na parte baixa do movimento, depois volte lentamente à posição inicial."
    ]
  },
  {
    "id": "0223",
    "name": "Abdominal curto lateral na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Coloque um cabo de cabo em uma polia baixa fique em pé de lado à máquina.",
      "Segure o cabo com a mão mais afastada da máquina e coloque a outra mão em suo quadril.",
      "Coloque os pés afastados na largura dos ombros e flexione ligeiramente os joelhos.",
      "Com o abdômen ativado, flexione a cintura para o lado, baixando o cotovelo para o quadril."
    ]
  },
  {
    "id": "1717",
    "name": "Agachamento com remada com corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure uma corda a uma polia à altura da cintura.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento, mantendo as costas retas e o peito erguido.",
      "Segure a corda com uma pegada pronada, com as mãos afastadas na largura dos ombros."
    ]
  },
  {
    "id": "1644",
    "name": "Rosca em agachamento na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Coloque um cabo de cabo no ajuste mais baixo de uma polia.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure o cabo do cabo com uma pegada supinada, com as palmas voltadas para cima e os braços completamente estendidos.",
      "Abaixe o corpo para uma posição de agachamento, mantendo as costas retas e os joelhos por trás das pontas dos pés."
    ]
  },
  {
    "id": "0224",
    "name": "Flexão de punhos em pé costas na polia",
    "bodyPart": "antebraços",
    "equipment": "polia",
    "target": "antebraços",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure o cabo do cabo com uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha os braços retos e os cotovelos próximos em relação ao tronco.",
      "Flexione lentamente os punhos para cima, levando o cabo do cabo para o corpo."
    ]
  },
  {
    "id": "1375",
    "name": "Elevação de panturrilha em pé na polia",
    "bodyPart": "panturrilhas",
    "equipment": "polia",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure dos cabos da polia ou coloque uma correia de tornozelo de cabo em seus tornozelos.",
      "Eleve os calcanhares do chão estendendo os tornozelos o máximo possível.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "0225",
    "name": "Crucifixo inverso em pé no cross alto",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Coloque um cabo em D em cada lado de uma polia à altura dos ombros.",
      "Fique de pé no meio da polia com os pés afastados na largura dos ombros.",
      "Segure os cabos com uma pegada pronada e estenda os braços para os lados, com as palmas voltadas para a frente.",
      "Mantenha uma leve flexão nos cotovelos e conserva as costas retas durante todo o exercício."
    ]
  },
  {
    "id": "0226",
    "name": "Abdominal em pé na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Coloque um cabo de cabo em uma polia alta e fique em pé de costas à máquina.",
      "Segure o cabo com as duas mãos e coloque por trás da cabeça, mantendo os cotovelos flexionados.",
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Com o abdômen ativado, expire e flexione o tronco para os joelhos, levando os cotovelos para as coxas."
    ]
  },
  {
    "id": "0874",
    "name": "Abdominal em pé com corda na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Segure uma corda a uma polia à altura do peito.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Segure a corda com as duas mãos e leve por trás da cabeça, mantendo os cotovelos flexionados.",
      "Ative o abdômen e flexione lentamente o tronco para a frente, levando os cotovelos para os joelhos."
    ]
  },
  {
    "id": "0227",
    "name": "Crucifixo em pé na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Coloque os cabos nos cabos à altura do peito.",
      "Fique de pé com os pés afastados na largura dos ombros, de costas à polia.",
      "Segure os cabos com uma pegada pronada, com as palmas voltadas para a frente.",
      "Dê um passo adiante para criar tensão nos cabos."
    ]
  },
  {
    "id": "0228",
    "name": "Extensão de quadril em pé na polia",
    "bodyPart": "pernas",
    "equipment": "polia",
    "target": "glúteos",
    "instructions": [
      "Segure um cabo a uma polia baixa fique em pé de costas à máquina.",
      "Coloque o cabo ao redor de seu tornozelo e fique em pé com os pés afastados na largura dos ombros.",
      "Mantenha o core ativado e as costas retas durante todo o exercício.",
      "Estenda lentamente a perna para trás, contraindo os glúteos na parte alta do movimento."
    ]
  },
  {
    "id": "0229",
    "name": "Rosca em pé interno na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure o cabo do cabo com uma pegada supinada, com as palmas voltadas para cima.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione o cabo do cabo para os ombros, contraindo os bíceps."
    ]
  },
  {
    "id": "0230",
    "name": "Elevação em pé na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure o cabo do cabo com as duas mãos e coloque à altura da cintura.",
      "Ative o core e mantenha as costas retas durante todo o exercício.",
      "Mantenha os braços retos, expire e eleve o cabo do cabo para o ombro oposto, rotacionando o tronco."
    ]
  },
  {
    "id": "0231",
    "name": "Extensão de tríceps em pé unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, de frente para a polia.",
      "Segure o cabo do cabo com a mão direita, com a palma voltada para baixo, e coloque o braço completamente estendido e paralelo ao chão.",
      "Mantenha o cotovelo imóvel e próximos ao corpo.",
      "Flexione lentamente o cotovelo, baixando o cabo do cabo para a parte de atrás da cabeça."
    ]
  },
  {
    "id": "1376",
    "name": "Elevação de panturrilhas em pé unilateral na polia",
    "bodyPart": "panturrilhas",
    "equipment": "polia",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure da polia para se apoiar.",
      "Eleve uma perna do chão e equilibre-se sobre a outra perna.",
      "Eleve lentamente o calcanhar do chão, elevando o corpo sobre as pontas dos pés."
    ]
  },
  {
    "id": "0232",
    "name": "Puxada em pé com corda na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Segure uma corda à polia no ajuste mais alto.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a corda com uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha as costas retas e o core ativado durante todo o exercício."
    ]
  },
  {
    "id": "0233",
    "name": "Remada para deltoide posterior em pé com corda na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé em frente a uma polia com os pés afastados na largura dos ombros.",
      "Segure o acessório do cabo com as duas mãos, com as palmas uma em frente à outra, e dê um passo para trás um passo para criar tensão no cabo.",
      "Mantenha as costas retas e o core ativado.",
      "Puxe o cabo para o corpo, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1727",
    "name": "Extensão de tríceps acima da cabeça em pé com pegada invertida unilateral na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Fique de pé de costas à polia com os pés afastados na largura dos ombros.",
      "Segure o cabo do cabo com uma pegada supinada e estenda o braço acima da cabeça, mantendo o cotovelo próxima à cabeça.",
      "Mantenha o braço superior imóvel e abaixe lentamente o cabo do cabo por trás da cabeça flexionando o cotovelo.",
      "Faça uma pausa breve na parte baixa, depois estenda o braço de volta à posição inicial."
    ]
  },
  {
    "id": "0234",
    "name": "Remada em pé v barra na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure o acessório em V com uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha as costas retas e o core ativado.",
      "Puxe o acessório em V para o corpo, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0235",
    "name": "Rotação externa de ombro em pé na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure o cabo do cabo com o braço estendido à sua frente, paralelo ao chão.",
      "Mantenha o cotovelo levemente flexionado e as escápulas retraídos para trás.",
      "Gire lentamente o braço para fora, afastando do corpo, mantendo o cotovelo na mesma posição."
    ]
  },
  {
    "id": "0236",
    "name": "Remada em pé com rotação e barra V na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um acessório em V em uma polia à altura do peito.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure o acessório em V com uma pegada pronada, com as palmas voltadas para baixo.",
      "Dê um passo atrás para criar tensão no cabo."
    ]
  },
  {
    "id": "1269",
    "name": "Crucifixo cruzado em pé com tronco ereto na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Fique de pé no meio de uma polia com os pés afastados na largura dos ombros.",
      "Segure os cabos dos cabos com as palmas voltadas para baixo e os braços estendidos para os lados.",
      "Mantenha os braços retos, aproxime as mãos à frente do corpo, cruzando-as uma sobre a outra.",
      "Faça uma pausa breve, depois retorne lentamente à posição inicial, mantendo os braços estendidos."
    ]
  },
  {
    "id": "0238",
    "name": "Puxada com braços estendidos na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Coloque uma barra reta na polia alta de uma polia.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada, mantendo os braços retos e as palmas voltadas para baixo.",
      "Ative os dorsais e puxe a barra para baixo, para as coxas, mantendo os braços retos durante todo o movimento."
    ]
  },
  {
    "id": "0237",
    "name": "Puxada com braços estendidos com corda na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Segure uma corda à polia no ajuste mais alto.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a corda com as duas mãos, com as palmas voltadas para baixo.",
      "Estenda completamente os braços à sua frente, mantendo os cotovelos levemente flexionados."
    ]
  },
  {
    "id": "0239",
    "name": "Remada sentada com costas retas na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se na máquina de remo com cabo com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure os cabos do cabo com uma pegada pronada, com as palmas voltadas para baixo.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente a partir dos quadris.",
      "Puxe os cabos para o corpo, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0240",
    "name": "Crucifixo inverso deitado de costas na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Coloque um cabo em D em uma polia baixa deite-se de bruços em um banco plano.",
      "Segure o cabo em D com cada mão, com as palmas voltadas para baixo, e estenda os braços à sua frente.",
      "Mantenha os braços retos, levante para os lados até que estejam paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "2464",
    "name": "Remada kayak Thibaudeau na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Coloque um cabo de cabo em uma polia baixa sente-se de frente para a máquina com os pés apoiados no chão.",
      "Segure o cabo com a mão direita e estenda completamente o braço, mantendo uma leve flexão no cotovelo.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o abdômen ativado.",
      "Puxe o cabo para seu tronco retraindo a escápula e flexionando o cotovelo, mantendo o braço próximo ao corpo."
    ]
  },
  {
    "id": "0241",
    "name": "Tríceps na polia v barra",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Coloque um acessório em V na polia no ajuste mais alto.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure o acessório em V com uma pegada pronada, com as palmas voltadas para baixo e as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "2405",
    "name": "Tríceps na polia v barra com braço blaster",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Coloque um acessório em V na polia no ajuste mais alto.",
      "Fique de pé de frente para a polia com os pés afastados na largura dos ombros.",
      "Segure o acessório em V com uma pegada pronada, com as palmas voltadas para baixo e as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício."
    ]
  },
  {
    "id": "0242",
    "name": "Abdominal reverso agrupado na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Segure um cabo a uma polia baixa deite-se de costas sobre uma colchonete.",
      "Segure o cabo com as duas mãos e estenda os braços retos acima do peito.",
      "Flexione os joelhos e eleve as pernas, levando os joelhos em direção ao peito.",
      "Ao mesmo tempo, eleve a pelve em direção ao peito, levantando os quadris do chão."
    ]
  },
  {
    "id": "0243",
    "name": "Rotação de tronco na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, de frente para a polia.",
      "Segure o cabo do cabo com as duas mãos à frente do peito, mantendo os braços levemente flexionados.",
      "Ative o core e gire o tronco para a direita, puxando o cabo através do corpo.",
      "Faça uma pausa breve ao final do movimento, sentindo a contração no abdômen e os oblíquos."
    ]
  },
  {
    "id": "0862",
    "name": "Rotação de tronco de cima para baixo na polia",
    "bodyPart": "abdômen",
    "equipment": "polia",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, de frente para a polia.",
      "Segure o cabo do cabo com as duas mãos à frente do peito, mantendo os braços levemente flexionados.",
      "Ative o core e gire lentamente o tronco para um lado, mantendo os quadris e as pernas estáveis.",
      "Faça uma pausa por alguns segundos ao final da rotação, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0244",
    "name": "Com rotação puxada na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Coloque um cabo de cabo em uma polia baixa fique em pé de frente para a máquina.",
      "Segure o cabo com a mão esquerda e afaste da máquina, estendendo completamente o braço.",
      "Coloque os pés afastados na largura dos ombros, com os joelhos levemente flexionados.",
      "Mantenha as costas retas e o core ativado durante todo o exercício."
    ]
  },
  {
    "id": "1645",
    "name": "Rosca bilateral no inclinado banco na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco inclinado com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure os cabos do cabo com uma pegada supinada, com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha os braços imóveis, expire e flexione os cabos para os ombros contraindo os bíceps.",
      "Faça uma pausa breve na parte mais alta do movimento, contraindo os bíceps."
    ]
  },
  {
    "id": "1728",
    "name": "Coice bilateral de tríceps na polia",
    "bodyPart": "braços",
    "equipment": "polia",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure o cabo do cabo em cada mão com as palmas voltadas para dentro e os braços flexionados em um ângulo de 90 graus.",
      "Mantenha os braços imóveis, estenda os antebraços para trás até que os braços estejam completamente estendidos.",
      "Faça uma pausa por alguns segundos, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0245",
    "name": "Puxada supinada na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a polia de modo que a barra de puxada fique a uma altura acima de sua cabeça.",
      "Sente-se segure a barra de puxada com uma pegada supinada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e incline-se ligeiramente para trás.",
      "Puxe a barra em direção ao peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1270",
    "name": "Crucifixo cruzado para peitoral superior na polia",
    "bodyPart": "peito",
    "equipment": "polia",
    "target": "peitorais",
    "instructions": [
      "Coloque os cabos nos cabos à altura do peito.",
      "Fique de pé no centro da polia com um pé ligeiramente adiante do outro.",
      "Segure as alças com as palmas voltadas para baixo e os braços estendidos para os lados.",
      "Mantenha uma leve flexão nos cotovelos e ative o core."
    ]
  },
  {
    "id": "1324",
    "name": "Remada alta na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "parte superior das costas",
    "instructions": [
      "Segure uma barra reta a uma polia à altura do peito.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "0246",
    "name": "Remada alta na polia",
    "bodyPart": "ombros",
    "equipment": "polia",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure o acessório do cabo com uma pegada pronada.",
      "Mantenha as costas retas e o core ativado durante todo o exercício.",
      "Puxe o acessório do cabo diretamente para cima, para seu queixo, guiando com os cotovelos.",
      "Faça uma breve pausa no ponto mais alto, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1325",
    "name": "Puxada com pegada aberta posterior atrás da nuca na polia",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a polia de modo que a barra de puxada fique a uma altura acima de sua cabeça.",
      "Sente-se segure a barra de puxada com uma pegada pronada ampla.",
      "Mantenha as costas retas e o peito erguido enquanto te reclinas ligeiramente para trás.",
      "Puxe a barra para a parte superior do peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0247",
    "name": "Flexão de Punho no Pulley",
    "bodyPart": "antebraços",
    "equipment": "polia",
    "target": "antebraços",
    "instructions": [
      "Prenda uma barra reta à polia baixa.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada supinada, com as palmas voltadas para cima e as mãos afastadas na largura dos ombros.",
      "Apoie os antebraços em um banco ou apoio acolchoado, com os punhos para fora da borda."
    ]
  },
  {
    "id": "1407",
    "name": "Alongamento de panturrilha com mãos na parede",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé de frente para uma parede com os pés separados à altura dos quadris.",
      "Coloque as mãos contra a parede à altura dos ombros.",
      "Dê um passo atrás com um pé, mantendo o calcanhar no chão e a perna reta.",
      "Flexione ligeiramente o joelho da frente incline-se para a frente, sentindo um alongamento na panturrilha."
    ]
  },
  {
    "id": "1377",
    "name": "Alongamento de panturrilhas com mãos na parede",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé de frente para uma parede com os pés separados à altura dos quadris.",
      "Coloque as mãos contra a parede à altura dos ombros.",
      "Dê um passo atrás com o pé direito, mantendo o calcanhar no chão e a perna reta.",
      "Flexione o joelho esquerdo e incline-se para a frente, mantendo a perna de atrás reta e o calcanhar no chão."
    ]
  },
  {
    "id": "1378",
    "name": "Alongamento de panturrilhas com corda",
    "bodyPart": "panturrilhas",
    "equipment": "corda",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé de frente para uma parede ou objeto firme com os pés separados à altura dos quadris.",
      "Segure os extremidades da corda com cada mão e coloque o centro da corda ao redor da planta do pé direito.",
      "Dê um passo atrás com o pé esquerdo, mantendo o calcanhar no chão e a perna reta.",
      "Incline-se para a frente, mantendo as costas retas, e puxe suavemente a corda para estendar a panturrilha."
    ]
  },
  {
    "id": "0248",
    "name": "Remada deitado com barra arqueada",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque uma barra no chão e deite-se de bruços em um banco com o peito bem na borda.",
      "Estique-se para baixo e segure a barra com uma pegada pronada, um pouco além da largura dos ombros.",
      "Com as pernas retas e os pés no chão, eleve a barra do chão estendendo os braços.",
      "Puxe a barra em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "2963",
    "name": "Elevação de pernas estendidas na cadeira romana",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se na cadeira romana com as costas apoiadas no encosto e os antebraços apoiados nos apoios acolchoados.",
      "Mantenha a parte superior do corpo estável e as costas retas.",
      "Ative o abdômen e eleve as pernas à frente, mantendo-as retas.",
      "Continue levantando até que as pernas estejam paralelas ao chão ou o mais alto que conseguir confortavelmente."
    ]
  },
  {
    "id": "1548",
    "name": "Alongamento de Perna Estendida na Cadeira",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Sente-se à beira de uma cadeira com as costas retas e os pés apoiados no chão.",
      "Estenda uma perna reta à sua frente, mantendo o calcanhar no chão.",
      "Incline-se ligeiramente para a frente, sentindo um alongamento nos quadríceps.",
      "Mantenha esta posição durante 20-30 segundos."
    ]
  },
  {
    "id": "1271",
    "name": "Alongamento do Peito e Parte Dianteira do Ombro",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Estenda os braços retos à sua frente à altura dos ombros.",
      "Cruze os braços à frente do corpo, com o braço direito sobre o braço esquerdo.",
      "Entrelace os dedos e pressione as palmas entre si."
    ]
  },
  {
    "id": "0251",
    "name": "Mergulho para peitoral",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque nas barras paralelas com os braços completamente estendidos e o corpo reto.",
      "Abaixe o corpo flexionando os cotovelos até que os ombros fiquem por embaixo dos cotovelos.",
      "Empurre-se de volta para cima à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1430",
    "name": "Mergulho para peitoral na estação de paralelas e barra fixa",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Ajuste as barras de fundos a uma altura que permita agarrá-las comodamente.",
      "Fique de pé entre as barras e coloque as mãos na cada barra, um pouco mais afastadas que a largura dos ombros.",
      "Salte e estenda os braços, sustentando o peso do corpo sobre as barras.",
      "Flexione os joelhos e cruze os tornozelos atrás do corpo."
    ]
  },
  {
    "id": "2462",
    "name": "Mergulho para peitoral na barra reta",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Segure as barras paralelas com as palmas voltadas para baixo e os braços completamente estendidos.",
      "Flexione os joelhos e cruze os tornozelos.",
      "Abaixe o corpo flexionando os braços até que os ombros fiquem por embaixo dos cotovelos.",
      "Empurre-se de volta para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "1272",
    "name": "Alongamento de peitoral na bola suíça",
    "bodyPart": "peito",
    "equipment": "bola suíça",
    "target": "peitorais",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure a bola suíça com as duas mãos e estenda os braços retos à sua frente.",
      "Leve lentamente a bola suíça para o peito, sentindo um alongamento nos músculos do peito.",
      "Mantenha o alongamento durante uns segundos, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "3216",
    "name": "Flexão de braços com toque no peitoral (masculino)",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e o corpo alinhado.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os próximos em relação ao tronco.",
      "Enquanto abaixa-se, toca o peito com a mão direita.",
      "Empurre-se de volta para cima até a posição inicial."
    ]
  },
  {
    "id": "1326",
    "name": "Barra fixa supinada",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Pendure de uma barra fixa com as palmas voltadas para você e as mãos afastadas na largura dos ombros.",
      "Ative o core puxe o corpo para cima, para a barra, guiando com o peito.",
      "Continue subindo até que o queixo fique acima da barra.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0253",
    "name": "Barra fixa supinada com pegada neutra fechada",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Pendure de uma barra fixa com uma pegada paralelo estreito, com as palmas voltadas para você.",
      "Ative os músculos das costas e puxe o corpo para cima, para a barra, mantendo os cotovelos próximos ao corpo.",
      "Continue subindo até que o queixo fique acima da barra.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0257",
    "name": "Alongamento circular do joelho",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e as mãos nos quadris.",
      "Flexione ligeiramente os joelhos e eleve os calcanhares do chão, equilibrando sobre as pontas dos pés.",
      "Mantenha os joelhos flexionados, gire os joelhos em um movimento circular, primeiro no sentido das agulhas do relógio e depois em sentido contrário.",
      "Realize o movimento o número de repetições desejado."
    ]
  },
  {
    "id": "1273",
    "name": "Flexão de braços com palma",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo o core ativado.",
      "Empurre com as palmas de forma explosiva para impulsionar seu corpo fosse do chão.",
      "Enquanto está no ar, aproxime as mãos em um aplauso antes de aterrisser de volta na posição inicial."
    ]
  },
  {
    "id": "0258",
    "name": "Flexão em Relógio",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos diretamente abaixo dos ombros e o corpo alinhado.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os próximos em relação ao tronco.",
      "Enquanto abaixa, gire o corpo para a esquerda, estendendo o braço esquerdo reto para o lado.",
      "Empurre de volta para cima até a posição inicial, enquanto gire o corpo para o centro."
    ]
  },
  {
    "id": "1327",
    "name": "Barra fixa supinada com pegada fechada",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com as palmas voltadas para você e as mãos afastadas na largura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e os pés fosse do chão.",
      "Ative os músculos das costas e puxe o corpo para cima, para a barra, mantendo os cotovelos próximos ao corpo.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "0259",
    "name": "Flexão de braços com pegada fechada",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece em posição de prancha alta com as mãos próximas, diretamente embaixo dos ombros.",
      "Ative o core abaixe o corpo em direção ao chão, mantendo os cotovelos próximos em relação ao tronco.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "2398",
    "name": "Flexão de braços com pegada fechada apoiado nos joelhos",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece apoiando sobre as mãos e os joelhos, com as mãos afastadas na largura dos ombros e os joelhos separados à altura dos quadris.",
      "Abaixe a parte superior do corpo em direção ao chão flexionando os cotovelos, mantendo-os próximos em relação ao tronco.",
      "Faça uma pausa breve quando o peito esteja logo acima do chão.",
      "Empurre com as palmas para estendar os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "0260",
    "name": "Abdominal Casulo",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1468",
    "name": "Toque nos pés em caranguejo com rotação",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece sentado no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos atrás do corpo, com os dedos apontando para os pés, e eleve os quadris do chão.",
      "Estenda uma perna reta à sua frente enquanto leve a mão contrária para os dedos do pé.",
      "Retorne à posição inicial e repita do outro lado."
    ]
  },
  {
    "id": "0262",
    "name": "Abdominal Cruzado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve a parte superior do corpo do chão e gire para levar o cotovelo direito em direção ao joelho esquerdo.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0267",
    "name": "Abdominal com Mãos Acima da Cabeça",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Estenda os braços retos acima da cabeça.",
      "Contraia o abdômen e eleve a parte superior do corpo do chão, flexionando o tronco para a frente em direção aos joelhos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0271",
    "name": "Abdominal curto na bola suíça",
    "bodyPart": "abdômen",
    "equipment": "bola suíça",
    "target": "abdômen",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Incline-se para trás sobre a bola até que a zona lombar esteja apoiada e a parte superior do corpo fique paralela ao chão.",
      "Coloque as mãos por trás da cabeça ou cruzedas sobre o peito.",
      "Ative o abdômen e eleve a parte superior do corpo para os joelhos, flexionando o tronco para a frente."
    ]
  },
  {
    "id": "0272",
    "name": "Abdominal curto na bola suíça com braços estendidos",
    "bodyPart": "abdômen",
    "equipment": "bola suíça",
    "target": "abdômen",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Incline-se para trás sobre a bola até que a zona lombar esteja apoiada e a parte superior do corpo fique paralela ao chão.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative o abdômen e eleve a parte superior do corpo da bola, flexionando os ombros para os quadris."
    ]
  },
  {
    "id": "0274",
    "name": "Abdominal curto chão",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Ative o abdômen e eleve os ombros do chão, flexionando o tronco para a frente em direção aos joelhos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "3016",
    "name": "Rosca up",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3769",
    "name": "Afundo cruzado",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Dê um passo em diagonal para trás e através do corpo com o pé direito, cruzando por trás da perna esquerda.",
      "Flexione ambas joelhos como se fizesse uma reverência, baixando o corpo em direção ao chão.",
      "Mantenha o tronco ereto e o peso sobre o pé atacante."
    ]
  },
  {
    "id": "2331",
    "name": "Bicicleta elíptica na máquina articulada",
    "bodyPart": "cardio",
    "equipment": "máquina articulada",
    "target": "sistema cardiovascular",
    "instructions": [
      "Ajuste a altura do assento e coloque na bicicleta elíptica.",
      "Coloque os pés nos pedais e segure o guidão.",
      "Comece a pedalar com um movimento suave controlado.",
      "Mantenha um ritmo constante aumenta a resistência se deseja-o."
    ]
  },
  {
    "id": "0276",
    "name": "Inseto Morto",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os braços estendidos para o teto.",
      "Flexione os joelhos e eleve as pernas do chão, formando um ângulo de 90 graus nos quadris e os joelhos.",
      "Ative o core a zona lombar para pressioner a zona lombar contra o solo.",
      "Abaixe lentamente o braço direito e a perna esquerda em direção ao chão, mantendo-os retos e logo acima do chão."
    ]
  },
  {
    "id": "0277",
    "name": "Abdominal Declinado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e os joelhos flexionados em um ângulo de 90 graus.",
      "Coloque as mãos por trás da cabeça ou cruzedas sobre o peito.",
      "Ative o abdômen e eleve a parte superior do corpo para os joelhos, flexionando o tronco.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0279",
    "name": "Flexão no Banco Declinado",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque as mãos no chão um pouco mais afastadas que a largura dos ombros, com os pés elevados sobre uma superfície estável.",
      "Mantenha o corpo alinhado da cabeça aos pés, ativando os músculos do core.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo-os próximos ao corpo.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "0282",
    "name": "Abdominal declinado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e os joelhos flexionados.",
      "Coloque as mãos por trás da cabeça ou cruzedas sobre o peito.",
      "Ative o abdômen e eleve a parte superior do corpo do banco, flexionando o tronco para a frente em direção aos joelhos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1274",
    "name": "Flexão de braços profunda com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e o corpo alinhado.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo-os próximos ao corpo.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0283",
    "name": "Flexão de braços diamante",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece em posição de prancha alta com as mãos próximas, formando uma figura de diamante com os polegares e os índices.",
      "Mantenha o corpo alinhado da cabeça aos pés, ativando o core os glúteos.",
      "Abaixe o peito para a figura de diamante formada por suas mãos, mantendo os cotovelos próximos ao corpo.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0284",
    "name": "Elevação de Panturrilha no Aparelho",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com as pontas dos pés sobre uma superfície elevada, como um degrau ou um bloco.",
      "Coloque as mãos em um suporte estável, como uma parede ou um corrimãos, para manter o equilíbrio.",
      "Eleve os calcanhares o máximo possível, elevando o peso do corpo sobre as pontas dos pés.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "1275",
    "name": "Flexão de braços com queda controlada",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Abaixe o peito em direção ao chão, mantendo os cotovelos próximos ao corpo.",
      "Uma vez que o peito esteja logo acima do chão, abaixe rapidamente os joelhos ao chão.",
      "Empurre o corpo de volta à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0285",
    "name": "Rosca Alternada com Halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "2403",
    "name": "Rosca bíceps alternado com braço blaster com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para a frente.",
      "Coloque o suporte para braços na parte superior de os braços, certificando-se de que fique bem ajustado.",
      "Mantenha os braços imóveis, expire e flexione um halter para o ombro contraindo o bíceps.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "1646",
    "name": "Rosca martelo no banco Scott alternado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com um halter em cada mão, com as palmas para sua tronco e os braços completamente estendidos.",
      "Mantenha os braços fixos e expire enquanto eleva o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "1647",
    "name": "Rosca Scott alternado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com um halter em cada mão, com as palmas voltadas para cima.",
      "Apoie a parte superior dos braços no apoio acolchoado do banco Scott, permitindo que os braços se estendam completamente.",
      "Mantenha os braços imóveis, expire e flexione o halter em sua mão direita contraindo o bíceps.",
      "Continue flexionando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "1648",
    "name": "Rosca martelo alternado sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas para sua tronco e os braços estendidos para baixo.",
      "Mantenha as costas retas e os cotovelos próximos em relação ao tronco.",
      "Expire e flexione o halter de sua mão direita para o ombro, mantendo o braço superior imóvel.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "0286",
    "name": "Desenvolvimento lateral alternado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão à altura dos ombros.",
      "Empurre um halter acima da cabeça mantendo a outro halter à altura do ombro.",
      "Abaixe o halter empurrada de volta à altura do ombro enquanto empurre a outro halter acima da cabeça.",
      "Continue alternando lados durante o número de repetições desejado."
    ]
  },
  {
    "id": "1649",
    "name": "Rosca bíceps alternada com perna elevada na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para a frente.",
      "Coloque uma bola suíça atrás do corpo e apoie um pé sobre ele, mantendo o equilíbrio.",
      "Com os braços completamente estendidos e os cotovelos próximos em relação ao tronco, flexione um halter para o ombro mantendo o braço superior imóvel.",
      "Abaixe o halter de volta à posição inicial e repita com o outro braço."
    ]
  },
  {
    "id": "1650",
    "name": "Rosca bíceps alternado sentado na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços imóveis, expire e flexione um halter enquanto gires o antebraço até que a palma fique em frente ao ombro.",
      "Inspire abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "2137",
    "name": "Desenvolvimento Arnold com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com encosto e segure um halter em cada mão à altura do ombro, com as palmas voltadas para o corpo e os cotovelos flexionados.",
      "Empurre os halteres para cima até que os braços estejam completamente estendidos e as palmas fiquem voltadas para a frente.",
      "Gire os punhos enquanto eleva, de modo que as palmas fiquem voltadas para a frente na parte alta do movimento.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0287",
    "name": "Desenvolvimento Arnold com halteres — variação 2",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com encosto e segure um halter em cada mão à altura do ombro, com as palmas voltadas para o corpo e os cotovelos flexionados.",
      "Empurre os halteres para cima até que os braços estejam completamente estendidos e as palmas fiquem voltadas para a frente.",
      "Gire os punhos enquanto eleva, de modo que as palmas terminem voltadas para a frente na parte alta do movimento.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0288",
    "name": "Pullover em arco com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco com a cabeça em um extremo e os pés firmemente apoiados no chão.",
      "Segure um halter com as duas mãos e estenda os braços retos acima do peito.",
      "Mantenha os braços retos, abaixe lentamente o halter por trás da cabeça em um movimento de arco.",
      "Faça uma pausa breve na parte baixa, depois eleve o halter de volta à posição inicial."
    ]
  },
  {
    "id": "0289",
    "name": "Supino com Halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure um halter em cada mão, com as palmas voltadas para a frente, com os braços estendidos acima do peito.",
      "Abaixe lentamente os halteres para os lados do peito, mantendo os cotovelos em um ângulo de 90 graus.",
      "Faça uma pausa breve, depois empurre os halteres de volta para cima até a posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "0290",
    "name": "Desenvolvimento sentado no banco com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, apoiadas nas coxas.",
      "Incline-se para trás para trás e coloque os halteres aos lados do peito, com as palmas voltadas para a frente.",
      "Empurre os halteres para cima até que os braços estejam completamente estendidos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0291",
    "name": "Agachamento banco com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Coloque um halter no chão de frente para um banco.",
      "Fique de pé de costas ao banco com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e os quadris para baixar para o banco, mantendo o peito erguido e as costas retas.",
      "Uma vez que os glúteos tocarem o banco, empurre com os calcanhares para voltar a ficar de pé na posição inicial."
    ]
  },
  {
    "id": "0293",
    "name": "Remada curvada com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure um halter em cada mão com as palmas voltadas para o corpo.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Deixe que os braços pendurem retos em direção ao chão, com os cotovelos levemente flexionados.",
      "Puxe os halteres para cima, em direção ao peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1651",
    "name": "Rosca bíceps com afundo e movimento de boliche com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com as palmas voltadas para a frente.",
      "Dê um passo adiante com o pé direito, flexionando o joelho direito e baixando o corpo a uma posição de afundo.",
      "Enquanto avança no afundo, flexione os halteres para os ombros, mantendo os cotovelos próximos ao corpo.",
      "Na parte baixa da afundo, gire o tronco para a direita, como em um movimento de boliche."
    ]
  },
  {
    "id": "1652",
    "name": "Rosca bíceps na bola suíça com perna elevada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Flexione lentamente os halteres para os ombros, mantendo os cotovelos próximos em relação ao tronco.",
      "Faça uma breve pausa no ponto mais alto do movimento, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1653",
    "name": "Rosca bíceps em postura unilateral com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para a frente.",
      "Estenda uma perna para trás, equilibrando sobre os dedos desse pé.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0294",
    "name": "Rosca Bíceps com Halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "2401",
    "name": "Rosca bíceps com braço blaster com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione pesos contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "1654",
    "name": "Rosca bíceps reverso com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para baixo e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "1655",
    "name": "Agachamento com rosca bíceps e halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com as palmas voltadas para a frente.",
      "Mantenha as costas retas e os cotovelos próximos em relação ao tronco, expire e flexione os halteres para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps.",
      "Inspire abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1656",
    "name": "Rosca bíceps em abdominal V no BOSU com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um BOSU com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um halter em cada mão com as palmas voltadas para a frente, com os braços completamente estendidos para baixo aos lados.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "1201",
    "name": "Burpee com halteres",
    "bodyPart": "cardio",
    "equipment": "halter",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e um halter em cada mão.",
      "Abaixe o corpo a uma posição de agachamento, colocando os halteres no chão à sua frente.",
      "Leve os pés para trás a uma posição de flexão de braços, mantendo o corpo alinhado.",
      "Realize uma flexão de braços, flexionando os cotovelos e baixando o peito em direção ao chão."
    ]
  },
  {
    "id": "0295",
    "name": "Arranco com Halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Flexione os joelhos e abaixe os quadris para uma posição de agachamento, mantendo as costas retas e o peito erguido.",
      "Estenda os quadris e os joelhos de forma explosiva, empurrando com os calcanhares para salter do chão.",
      "Enquanto salte, encolha os ombros e puxe os halteres para cima, para os ombros, mantendo-os próximos ao corpo."
    ]
  },
  {
    "id": "1731",
    "name": "Supino com pegada fechada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco plano com um halter em cada mão, apoiadas nas coxas.",
      "Usando as coxas para ajudar a levantar os halteres, eleve os halteres uma simultaneamente para poder as sustentar à sua frente à altura dos ombros.",
      "Uma vez à altura dos ombros, gire os punhos para a frente de maneira que as palmas das mãos fiquem voltadas para fora. Esta será sua posição inicial.",
      "Enquanto inspira, abaixe lentamente os halteres em direção ao lado do corpo até que fiquem aproximadamente à altura do peito."
    ]
  },
  {
    "id": "0296",
    "name": "Supino com pegada fechada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco plano com um halter em cada mão, apoiadas nas coxas.",
      "Usando as coxas para ajudar a levantar os halteres, eleve os halteres uma simultaneamente para poder as sustentar à sua frente à altura dos ombros.",
      "Uma vez à altura dos ombros, gire os punhos para a frente de maneira que as palmas das mãos fiquem voltadas para fora. Esta será sua posição inicial.",
      "Enquanto inspira, abaixe lentamente os halteres em direção ao lado do corpo até que fiquem aproximadamente à altura do peito."
    ]
  },
  {
    "id": "0297",
    "name": "Rosca concentrada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com as pernas separadas e um halter em uma mão, apoiando o cotovelo na parte interna da coxa.",
      "Estenda completamente o braço e segure o halter com uma pegada supinada.",
      "Mantenha o braço superior imóvel, expire e flexione o peso para o ombro contraindo o bíceps.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "3635",
    "name": "Afundo contralateral à frente com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Dê um passo adiante com o pé direito, mantendo as costas retas e o core ativado.",
      "Abaixe o corpo flexionando ambas joelhos até que a coxa direita fique paralelo ao chão.",
      "Empurre com o calcanhar direito para regressar à posição inicial."
    ]
  },
  {
    "id": "0298",
    "name": "Rosca martelo cruzada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione os braços contraindo os bíceps, levando os halteres cruzando o corpo para o ombro oposto.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "1657",
    "name": "Rosca martelo cruzada com halteres — variação 2",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione os braços contraindo os bíceps, aproximando os halteres o mais possível ao ombro oposto.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0299",
    "name": "Desenvolvimento cubano com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão à altura dos ombros com as palmas voltadas para baixo.",
      "Mantenha o core ativado e os cotovelos levemente flexionados, empurre os halteres acima da cabeça até que os braços fiquem completamente estendidos.",
      "Gire os punhos de maneira que as palmas fiquem voltadas para a frente.",
      "Abaixe lentamente os halteres à posição inicial, girando os punhos de volta à posição inicial ao fazer isso."
    ]
  },
  {
    "id": "2136",
    "name": "Desenvolvimento cubano com halteres — variação 2",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão à altura dos ombros com as palmas voltadas para baixo.",
      "Mantenha o core ativado e as costas retas, empurre os halteres diretamente acima da cabeça até que os braços fiquem completamente estendidos.",
      "Gire os punhos de maneira que as palmas fiquem voltadas para a frente.",
      "Abaixe os halteres de novo até a altura dos ombros, girando os punhos de volta à posição inicial."
    ]
  },
  {
    "id": "0300",
    "name": "Levantamento terra com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com as pontas dos pés apontando para a frente.",
      "Segure um halter em cada mão, com as palmas voltadas para o corpo e os braços estendidos para baixo.",
      "Flexione os quadris e os joelhos, baixando os halteres em direção ao chão mantendo as costas retas.",
      "Empurre com os calcanhares e estenda os quadris e os joelhos, levantando os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0301",
    "name": "Supino declinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e a cabeça mais baixa que os quadris.",
      "Segure um halter em cada mão e estenda os braços retos para cima acima do peito, com as palmas voltadas para a frente.",
      "Abaixe lentamente os halteres para os lados do peito, mantendo os cotovelos em um ângulo de 90 graus.",
      "Empurre os halteres de novo para cima até a posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "0302",
    "name": "Crucifixo declinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e a cabeça mais baixa que os quadris.",
      "Segure um halter em cada mão com as palmas voltadas uma para a outra e os braços estendidos acima do peito.",
      "Abaixe os halteres para os lados descrevendo um amplo arco até sentir um alongamento no peito.",
      "Faça uma pausa por alguns segundos, depois contraia os músculos do peito para levar os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0303",
    "name": "Supino com pegada neutra declinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com os pés presos e a cabeça mais baixa que os quadris.",
      "Segure um halter em cada mão com as palmas voltadas uma para a outra e os braços estendidos acima do peito.",
      "Abaixe os halteres aos lados do peito, mantendo os cotovelos levemente flexionados.",
      "Empurre os halteres de novo para cima até a posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "1276",
    "name": "Crucifixo declinado unilateral com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com um halter em uma mão, apoiando sobre a coxa.",
      "Usando a coxa para ajudar a levantar o halter, alce até a altura dos ombros com a palma voltadas para o tronco.",
      "Gire o punho de maneira que a palma da mão fique voltadas para a frente.",
      "Enquanto inspira, abaixe o halter lentamente para o lado até sentir um alongamento no peito."
    ]
  },
  {
    "id": "1617",
    "name": "Supino com pegada neutra declinado unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se em um banco declinado com um halter em uma mão, apoiada sobre o peito.",
      "Estenda o braço reto para cima, mantendo o cotovelo levemente flexionado.",
      "Abaixe o halter para o ombro, mantendo o cotovelo próximo ao corpo.",
      "Empurre o halter de novo para cima até a posição inicial."
    ]
  },
  {
    "id": "0305",
    "name": "Encolhimento de ombros declinado com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "trapézios",
    "instructions": [
      "Ajuste um banco declinado a um ângulo de 45 graus.",
      "Deite-se de bruços no banco com o peito e o abdômen apoiados contra ele.",
      "Segure um halter em cada mão com os braços completamente estendidos em direção ao chão.",
      "Mantenha os braços retos, eleve os ombros para as orelhas o máximo possível."
    ]
  },
  {
    "id": "0304",
    "name": "Encolhimento de ombros declinado com halteres — variação 2",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "trapézios",
    "instructions": [
      "Ajuste um banco declinado a um ângulo de 45 graus.",
      "Deite-se de bruços no banco com o peito e o abdômen apoiados sobre ele.",
      "Segure um halter em cada mão com as palmas voltadas uma para a outra e os braços completamente estendidos.",
      "Mantenha os braços retos, eleve os ombros o máximo possível enquanto próximas as escápulas."
    ]
  },
  {
    "id": "0306",
    "name": "Extensão de tríceps declinado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os pés e segure um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda completamente os braços, mantendo os cotovelos próxima à cabeça.",
      "Abaixe lentamente os halteres por trás da cabeça, flexionando os cotovelos.",
      "Faça uma pausa por alguns segundos, depois eleve os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0307",
    "name": "Crucifixo declinado com rotação com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os quadris.",
      "Segure um halter em cada mão com as palmas voltadas uma para a outra e os braços estendidos retos acima do peito.",
      "Abaixe os halteres para os lados descrevendo um amplo arco até sentir um alongamento no peito.",
      "Enquanto abaixa os halteres, gire os punhos de maneira que as palmas fiquem voltadas para a frente no ponto mais baixo do movimento."
    ]
  },
  {
    "id": "1437",
    "name": "Rosca de dedos com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão e as costas retas.",
      "Segure um halter em uma mão com pegada supinada, apoiando o antebraço sobre a coxa, com a palma voltada para cima.",
      "Deixe que o halter rode para as pontas dos dedos, depois flexione os dedos para voltar a enrollarla para cima.",
      "Repita o número de repetições desejado, depois mude para a outra mão."
    ]
  },
  {
    "id": "0308",
    "name": "Crucifixo com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda os braços retos acima do peito, com uma leve flexão nos cotovelos.",
      "Mantenha uma leve flexão nos cotovelos, abaixe os braços para os lados em um arco amplo até sentir um alongamento no peito.",
      "Faça uma pausa por alguns segundos, depois inverta o movimento e leve os halteres de novo para cima até a posição inicial."
    ]
  },
  {
    "id": "1277",
    "name": "Crucifixo na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça e segure um halter em cada mão.",
      "Caminhe com os pés para a frente abaixe o corpo girando até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Estenda os braços retos acima do peito, com as palmas voltadas uma para a outra.",
      "Flexione ligeiramente os cotovelos e abaixe os braços para os lados descrevendo um amplo arco até sentir um alongamento no peito."
    ]
  },
  {
    "id": "1732",
    "name": "Extensão de tríceps com afundo à frente com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo.",
      "Mantenha as costas retas e o peito erguido.",
      "Estenda os braços retos acima da cabeça, mantendo os cotovelos próximas às orelhas."
    ]
  },
  {
    "id": "0310",
    "name": "Elevação frontal com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão com as palmas para as coxas.",
      "Mantenha os braços retos, expire e eleve os halteres à sua frente até que fiquem à altura dos ombros.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0309",
    "name": "Elevação frontal com halteres — variação 2",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão com as palmas para as coxas.",
      "Mantenha as costas retas e ative o core.",
      "Eleve lentamente os halteres à sua frente, com os braços retos, até que fiquem à altura dos ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0311",
    "name": "Elevação lateral com polegares para cima e halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e ative o core.",
      "Eleve os braços para os lados, mantendo uma leve flexão nos cotovelos, até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "1760",
    "name": "Agachamento goblet com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter verticalmente contra o peito com as duas mãos.",
      "Mantenha o peito ereto e o core ativado, abaixe o corpo a uma posição de agachamento empurrando os quadris para trás e flexionando os joelhos.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "0313",
    "name": "Rosca martelo com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o tronco.",
      "Mantenha os cotovelos próximos em relação ao tronco e gire as palmas das mãos até que fiquem voltadas para a frente.",
      "Esta será sua posição inicial.",
      "Agora, mantendo os braços imóveis, expire e flexione os braços contraindo os bíceps."
    ]
  },
  {
    "id": "1659",
    "name": "Rosca martelo na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para o corpo e os braços completamente estendidos.",
      "Mantenha os braços imóveis, expire e flexione os halteres contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0312",
    "name": "Rosca martelo com halteres — variação 2",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o tronco.",
      "Mantenha os cotovelos próximos em relação ao tronco e gire as palmas das mãos até que fiquem voltadas para a frente.",
      "Esta será sua posição inicial.",
      "Agora, mantendo os braços imóveis, expire e flexione os braços contraindo os bíceps."
    ]
  },
  {
    "id": "2402",
    "name": "Rosca martelo com apoio com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o tronco.",
      "Mantenha os cotovelos próximos em relação ao tronco e gire as palmas das mãos até que fiquem voltadas para a frente.",
      "Esta será sua posição inicial.",
      "Agora, mantendo o braço superior imóvel, expire e flexione os braços contraindo os bíceps."
    ]
  },
  {
    "id": "1664",
    "name": "Rosca alta com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente.",
      "Mantenha os braços imóveis e flexione os halteres o máximo possível contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "3545",
    "name": "Supino inclinado alternado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, apoiadas sobre as coxas.",
      "Deite-se no banco e use as coxas para ajudar a levantar os halteres até a altura dos ombros, com as palmas voltadas para a frente.",
      "Uma vez à altura dos ombros, gire os punhos de maneira que as palmas das mãos fiquem voltadas para a frente.",
      "Empurre os halteres para cima com o peito e os ombros, estendendo completamente os braços."
    ]
  },
  {
    "id": "0314",
    "name": "Supino inclinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com os pés apoiados no chão e as costas firmemente apoiadas contra o banco.",
      "Segure um halter em cada mão, com as palmas para a frent, e levante até a altura dos ombros.",
      "Abaixe lentamente os halteres para os lados do peito, mantendo os cotovelos em um ângulo de 90 graus."
    ]
  },
  {
    "id": "0315",
    "name": "Rosca bíceps inclinado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0316",
    "name": "Crucifixo inclinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure um halter em cada mão com pegada pronada, com as palmas voltadas para a frente.",
      "Comece com os braços completamente estendidos, perpendiculares ao chão."
    ]
  },
  {
    "id": "0318",
    "name": "Rosca inclinado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão, com as palmas voltadas para a frente.",
      "Apoie os braços no banco inclinado e deixe que os cotovelos pendurem para baixo, estendendo completamente os braços.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0317",
    "name": "Rosca inclinado com halteres — variação 2",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0319",
    "name": "Crucifixo inclinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Deite-se no banco e empurre os halteres para cima até a posição inicial, diretamente acima do peito.",
      "Abaixe os halteres para os lados descrevendo um amplo arco até sentir um alongamento no peito."
    ]
  },
  {
    "id": "1278",
    "name": "Crucifixo inclinado na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se sobre uma bola suíça e gire para a frente até que a parte superior das costas fiquem apoiadas no banco inclinado.",
      "Segure um halter em cada mão com as palmas voltadas uma para a outra e os braços estendidos acima do peito.",
      "Abaixe os halteres para os lados descrevendo um amplo arco até sentir um alongamento no peito."
    ]
  },
  {
    "id": "0320",
    "name": "Rosca martelo inclinada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, com as palmas voltadas para o corpo e os braços completamente estendidos.",
      "Mantenha as costas contra o banco e os pés apoiados no chão.",
      "Mantenha os braços imóveis, expire e flexione os braços contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0321",
    "name": "Supino com pegada neutra inclinado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão, apoiadas sobre as coxas.",
      "Deite-se no banco e coloque os halteres à altura dos ombros com as palmas voltadas uma para a outra.",
      "Empurre os halteres para cima e afastando do corpo até que os braços fiquem completamente estendidos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1618",
    "name": "Supino com pegada neutra inclinado na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Caminhe com os pés para a frente abaixe o corpo girando sobre a bola até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Segure os halteres à altura dos ombros, com os cotovelos flexionados e apontando para os lados.",
      "Empurre os halteres para cima e ligeiramente para dentro, mantendo as palmas voltadas uma para a outra."
    ]
  },
  {
    "id": "0322",
    "name": "Rosca bíceps inclinado interno com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Apoie os braços no banco, permitindo que os cotovelos pendurem para baixo e as palmas fiquem voltadas para a frente.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "1279",
    "name": "Crucifixo inclinado unilateral com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco inclinado a um ângulo de 30-45 graus.",
      "Sente-se no banco com um halter em uma mão, apoiando sobre a coxa.",
      "Deite-se no banco, mantendo os pés apoiados no chão.",
      "Segure o halter com o braço estendido reto acima do peito."
    ]
  },
  {
    "id": "1280",
    "name": "Crucifixo inclinado unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em uma mão.",
      "Caminhe com os pés para a frente abaixe o corpo girando até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Segure o halter com o braço estendido reto acima do peito, com a palma voltada para dentro.",
      "Abaixe lentamente o halter para o lado, mantendo uma leve flexão no cotovelo."
    ]
  },
  {
    "id": "1619",
    "name": "Supino com pegada neutra inclinado unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em uma mão, apoiada sobre a coxa.",
      "Deite-se no banco e usa a coxa para ajudar a levantar o halter até a altura dos ombros.",
      "Gire o punho de maneira que a palma fique voltadas para dentro, para o corpo.",
      "Empurre o halter para cima e afastando do corpo, estendendo completamente o braço."
    ]
  },
  {
    "id": "1620",
    "name": "Supino com pegada neutra inclinado unilateral na bola suíça com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em uma mão.",
      "Caminhe com os pés para a frente abaixe o corpo girando até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Segure o halter com a palma voltada para dentro e o cotovelo flexionado em um ângulo de 90 graus.",
      "Empurre o halter para o teto, estendendo o braço."
    ]
  },
  {
    "id": "0323",
    "name": "Elevação lateral inclinado unilateral com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em uma mão, apoiando sobre a coxa.",
      "Incline-se para a frente coloque o braço superior contra a parte interna da coxa.",
      "Eleve o halter para o lado, mantendo o braço levemente flexionado e a palma voltada para baixo.",
      "Continue levantando até que o braço fique paralelo ao chão."
    ]
  },
  {
    "id": "1281",
    "name": "Supino inclinado unilateral com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em uma mão, apoiada sobre a coxa.",
      "Deite-se no banco e coloque o halter à altura do ombro, com a palma voltada para a frente.",
      "Empurre o halter para cima e ligeiramente para dentro, estendendo completamente o braço.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1282",
    "name": "Supino inclinado unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em uma mão, com os pés apoiados no chão.",
      "Caminhe lentamente com os pés para a frente, fazendo girar a bola até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Segure o halter à altura do ombro com a palma voltada para a frente.",
      "Empurre o halter para cima até que o braço fique completamente estendido."
    ]
  },
  {
    "id": "0324",
    "name": "Supino inclinado com pegada neutra com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Planta os pés firmemente no chão e mantenha as costas retas contra o banco.",
      "Comece com os halteres à altura dos ombros, com os cotovelos flexionados e as palmas voltadas uma para a outra."
    ]
  },
  {
    "id": "1283",
    "name": "Supino inclinado na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em cada mão, com as palmas voltadas para a frente.",
      "Caminhe lentamente com os pés para a frente, baixando o corpo girando sobre a bola até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Segure os halteres à altura dos ombros, com os cotovelos flexionados e apontando para os lados.",
      "Empurre os halteres para cima, estendendo completamente os braços."
    ]
  },
  {
    "id": "0325",
    "name": "Inclinado elevação com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, apoiadas sobre as coxas.",
      "Deite-se no banco e eleve os halteres até a altura dos ombros, com as palmas voltadas para a frente.",
      "Mantenha as costas contra o banco, expire e eleve os halteres acima da cabeça, estendendo completamente os braços.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à altura dos ombros."
    ]
  },
  {
    "id": "0326",
    "name": "Elevação posterior inclinado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com o peito contra o encosto e segure um halter em cada mão.",
      "Estenda os braços retos para baixo com as palmas voltadas uma para a outra.",
      "Mantenha uma leve flexão nos cotovelos, eleve os braços para os lados até que fiquem paralelos ao chão."
    ]
  },
  {
    "id": "0327",
    "name": "Remada Inclinada com Halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Segure um halter em cada mão e sente-se no banco com o peito apoiado contra a inclinação.",
      "Estenda completamente os braços, deixando que os halteres pendurem retas para baixo desde os ombros.",
      "Puxe os halteres para cima, em direção ao peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0328",
    "name": "Elevação de Ombros Inclinada com Halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "serrátil anterior",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão, com as palmas voltadas para baixo.",
      "Apoie os halteres sobre as coxas e recuéstate no banco.",
      "Use as coxas para ajudar a levantar os halteres até a altura dos ombros, depois gire os punhos de maneira que as palmas fiquem voltadas para a frente.",
      "Expire e eleve lentamente os halteres acima da cabeça, mantendo uma leve flexão nos cotovelos."
    ]
  },
  {
    "id": "0329",
    "name": "Encolhimento de ombros inclinado com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "trapézios",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão.",
      "Coloque os pés apoiados no chão e deixe que os braços pendurem retos para baixo com as palmas voltadas para o corpo.",
      "Mantendo os braços retos, encolha os ombros para as orelhas o máximo possível.",
      "Mantenha a contração por alguns segundos, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "3542",
    "name": "Inclinado t elevação com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão, com as palmas voltadas para dentro.",
      "Incline-se para a frente deixe que os braços pendurem retos para baixo, perpendiculares ao chão.",
      "Mantenha os braços retos, levante para os lados até que fiquem paralelos ao chão, formando um 'T' com o corpo.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0330",
    "name": "Extensão de tríceps inclinado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, com as palmas voltadas para dentro.",
      "Estenda completamente os braços acima da cabeça, mantendo os cotovelos próxima à cabeça.",
      "Abaixe os halteres por trás da cabeça flexionando os cotovelos, mantendo os braços imóveis.",
      "Faça uma pausa por alguns segundos, depois eleve os halteres de volta à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0331",
    "name": "Crucifixo inclinado com rotação com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Deite-se no banco e empurre os halteres para cima até a posição inicial, diretamente acima do peito, com os braços estendidos.",
      "Abaixe os halteres para os lados descrevendo um amplo arco até sentir um alongamento no peito.",
      "Enquanto abaixa os halteres, gire os punhos de maneira que as palmas fiquem voltadas para a frente no ponto mais baixo do movimento."
    ]
  },
  {
    "id": "1733",
    "name": "Inclinado bilateral extensão com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco inclinado com um halter em cada mão, apoiadas sobre as coxas.",
      "Deite-se lentamente no banco, mantendo os halteres cerca do peito.",
      "Uma vez completamente recostado, estenda os braços retos para o teto, mantendo os cotovelos levemente flexionados.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "3541",
    "name": "Inclinado y elevação com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste um banco inclinado a um ângulo de 45 graus e sente-se nele com um halter em cada mão, com as palmas voltadas para dentro.",
      "Incline-se ligeiramente para a frente deixe que os braços pendurem retos para baixo, mantendo uma leve flexão nos cotovelos.",
      "Eleve os braços para os lados e para cima formando uma E até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0332",
    "name": "Cruz de ferro com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão em relação ao tronco.",
      "Eleve os braços para os lados até que fiquem paralelos ao chão, formando um T com o corpo.",
      "Faça uma pausa por alguns segundos, depois abaixe lentamente os braços até a posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0333",
    "name": "Coice com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Acerca os braços em relação ao tronco, com os cotovelos flexionados em um ângulo de 90 graus.",
      "Estenda os braços retos para trás, contraindo os tríceps no ponto mais alto do movimento."
    ]
  },
  {
    "id": "1734",
    "name": "Coice na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para dentro e os braços flexionados em um ângulo de 90 graus.",
      "Estenda os braços retos para trás, contraindo os tríceps no ponto mais alto do movimento.",
      "Faça uma pausa por alguns segundos, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1660",
    "name": "Rosca bíceps ajoelhado na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Ajoelhe-se no chão com uma bola suíça à sua frente.",
      "Coloque os cotovelos sobre a bola suíça, sustentando um halter em cada mão com as palmas voltadas para cima.",
      "Mantenha os braços imóveis, expire e flexione os halteres contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0334",
    "name": "Elevação lateral com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e ative o core.",
      "Eleve os braços para os lados até que fiquem paralelos ao chão, mantendo uma leve flexão nos cotovelos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0335",
    "name": "Elevação frontal lateral para com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e ative o core.",
      "Eleve os braços para os lados até que fiquem paralelos ao chão, mantendo uma leve flexão nos cotovelos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0336",
    "name": "Afundo com Halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo.",
      "Mantenha as costas retas e o peito ereto enquanto abaixa o corpo.",
      "Empurre com o calcanhar direito para regressar à posição inicial."
    ]
  },
  {
    "id": "1658",
    "name": "Rosca bíceps com afundo com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com as palmas voltadas para a frente.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo. O joelho direito deve ficar flexionada em um ângulo de 90 graus e o joelho esquerdo deve ficar logo acima do chão.",
      "Enquanto avança no afundo, flexione simultaneamente os halteres para os ombros, mantendo os cotovelos próximos ao corpo.",
      "Faça uma pausa por alguns segundos na parte baixa da afundo, depois empurre com o calcanhar direito para voltar à posição inicial, baixando os halteres de novo em relação ao tronco."
    ]
  },
  {
    "id": "0337",
    "name": "Extensão de tríceps deitado cruzada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure um halter com as duas mãos e estenda os braços retos acima do peito, com as palmas voltadas uma para a outra.",
      "Mantenha os braços imóveis, abaixe lentamente o halter descrevendo um arco por trás da cabeça até que os antebraços fiquem paralelos ao chão.",
      "Faça uma pausa por alguns segundos, depois contraia os tríceps para levar o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1729",
    "name": "Deitado alternado extensão com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda os braços retos acima do peito, com uma leve flexão nos cotovelos.",
      "Abaixe um halter para a cabeça, flexionando o cotovelo, mantendo o outro braço estendido.",
      "Faça uma pausa breve na parte baixa, depois eleve o halter de volta à posição inicial."
    ]
  },
  {
    "id": "0338",
    "name": "Supino deitado com cotovelos fechados com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas uma para a outra e os braços estendidos retos acima do peito.",
      "Abaixe os halteres para os ombros flexionando os cotovelos, mantendo os braços imóveis.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre os halteres de novo para cima até a posição inicial estendendo os cotovelos.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0863",
    "name": "Rotação externa de ombro deitado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Deite-se de lado em um banco plano com o braço superior contra o lado e o cotovelo flexionado a 90 graus.",
      "Segure um halter na mão com a palma voltada para baixo.",
      "Mantenha o braço superior contra o lado, gire lentamente o antebraço para cima o mais possível.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o antebraço de volta à posição inicial."
    ]
  },
  {
    "id": "0339",
    "name": "Deitado femoral com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e um halter apoiada sobre o abdômen baixo.",
      "Flexione os joelhos e leve o halter para os glúteos, mantendo os pés apoiados no chão.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0340",
    "name": "Supino com pegada neutra deitado com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas uma para a outra e os braços estendidos retos para cima.",
      "Abaixe os halteres aos lados do peito, mantendo os cotovelos em um ângulo de 90 graus.",
      "Empurre os halteres de novo para cima até a posição inicial, estendendo completamente os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "2470",
    "name": "Elevação para deltoide posterior deitado no chão com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Deite-se de bruços no chão com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda os braços retos à sua frente, mantendo uma leve flexão nos cotovelos.",
      "Ativando os músculos dos ombros, eleve os braços para cima e para os lados, aproximando as escápulas.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0341",
    "name": "Deltoide posterior unilateral deitado com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Deite-se de bruços em um banco plano com um halter em uma mão, com a palma voltada para dentro.",
      "Estenda o braço reto em direção ao chão, mantendo-os próximos ao corpo.",
      "Eleve o braço para cima e para trás, aproximando a escápula para a coluna.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o braço de volta à posição inicial."
    ]
  },
  {
    "id": "0343",
    "name": "Supino deitado unilateral com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com um halter em uma mão e os pés apoiados no chão.",
      "Segure o halter à altura do ombro com a palma voltada para a frente.",
      "Empurre o halter para cima até que o braço fique completamente estendido.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0342",
    "name": "Supino deitado unilateral com halter — variação 2",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com as costas apoiadas e os pés apoiados no chão.",
      "Segure um halter em uma mão com a palma para os pés.",
      "Estenda o braço reto para o teto, mantendo o cotovelo levemente flexionado.",
      "Abaixe lentamente o halter em direção ao peito, mantendo o cotovelo próximo ao corpo."
    ]
  },
  {
    "id": "0344",
    "name": "Extensão de tríceps deitado unilateral pronada com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com as costas e a cabeça apoiadas, e os pés apoiados no chão.",
      "Segure um halter em uma mão com a palma voltada para baixo, e estenda o braço reto acima do ombro.",
      "Mantenha o braço superior imóvel, abaixe lentamente o halter por trás da cabeça flexionando o cotovelo.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, estenda o braço de volta à posição inicial."
    ]
  },
  {
    "id": "0345",
    "name": "Elevação Lateral Posterior com Halter Deitado Unilateral",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Deite-se de bruços em um banco plano com um halter em uma mão, pendurando em direção ao chão.",
      "Mantenha o braço reto e eleve o halter para o lado, afastando do corpo.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial.",
      "Repita o número de repetições desejado, depois muda ao outro braço."
    ]
  },
  {
    "id": "0346",
    "name": "Extensão de tríceps deitado unilateral supinada com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com as costas e a cabeça apoiadas, e os pés apoiados no chão.",
      "Segure um halter em uma mão com pegada supinada, e estenda o braço reto acima do ombro.",
      "Mantenha o braço superior imóvel, abaixe lentamente o halter por trás da cabeça flexionando o cotovelo.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, estenda o braço de volta à posição inicial."
    ]
  },
  {
    "id": "0347",
    "name": "Pronação com Halter Deitado",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Deite-se de bruços em um banco com o peito para baixo e os braços estendidos retos para baixo, sustentando um halter em cada mão.",
      "Gire as palmas de maneira que fiquem voltadas para cima.",
      "Mantenha os braços imóveis, expire e flexione os halteres enquanto gire as palmas voltadas para baixo.",
      "Inspire abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "2705",
    "name": "Pronação deitado no chão com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Deite-se de bruços no chão com os braços estendidos retos à sua frente, sustentando um halter em cada mão.",
      "Gire as palmas de maneira que fiquem voltadas em direção ao chão.",
      "Mantenha os braços retos, eleve os halteres do chão contraindo os antebraços.",
      "Continue levantando até que os antebraços estejam completamente contraídos e os halteres fiquem à altura dos ombros."
    ]
  },
  {
    "id": "1284",
    "name": "Pullover deitado na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça e gire para a frente até que a parte superior das costas fiquem apoiadas na bola.",
      "Segure um halter com as duas mãos e estenda os braços retos acima do peito.",
      "Abaixe lentamente o halter por trás da cabeça mantendo os braços retos.",
      "Faça uma pausa por alguns segundos, depois eleve o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1328",
    "name": "Remada para deltoide posterior deitado com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Deite-se de bruços em um banco plano com um halter em cada mão, com as palmas voltadas para dentro.",
      "Estenda os braços retos em direção ao chão, mantendo uma leve flexão nos cotovelos.",
      "Ativando os músculos das costas, eleve os halteres em direção ao peito, aproximando as escápulas.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0348",
    "name": "Elevação Lateral Posterior com Halteres Deitado",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Deite-se de bruços em um banco plano com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda os braços retos em direção ao chão, mantendo uma leve flexão nos cotovelos.",
      "Ativando os músculos dos ombros, eleve os braços para os lados até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "1735",
    "name": "Extensão unilateral de tríceps deitado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com um halter em uma mão e o braço completamente estendido acima do peito.",
      "Abaixe o halter de maneira controlada para a frente, mantendo o braço superior imóvel.",
      "Faça uma breve pausa no ponto mais baixo do movimento, depois estenda o braço de volta à posição inicial.",
      "Repita o número de repetições desejado, depois muda de braço."
    ]
  },
  {
    "id": "0349",
    "name": "Supinação com Halter Deitado Lateral",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão.",
      "Segure um halter em cada mão com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha os braços imóveis, flexione os halteres para os ombros contraindo os antebraços.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "2706",
    "name": "Supinação deitado no chão com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Deite-se de costas no chão com as pernas estendidas e os braços em relação ao tronco, sustentando um halter em cada mão.",
      "Gire as palmas voltadas para cima, mantendo os cotovelos próximos em relação ao tronco.",
      "Flexione lentamente os halteres para os ombros, contraindo os antebraços.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1661",
    "name": "Rosca bíceps deitado deitado de costas com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Deite-se de costas em um banco com as costas e a cabeça apoiadas, e os pés apoiados no chão.",
      "Segure um halter em cada mão com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0350",
    "name": "Rosca deitado deitado de costas com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0351",
    "name": "Tríceps testa deitado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda os braços retos acima do peito, mantendo os cotovelos próximos ao corpo.",
      "Abaixe os halteres para a frente, flexionando os cotovelos.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "1662",
    "name": "Rosca deitado com pegada aberta e halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0352",
    "name": "Supino reto com pegada neutra com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure um halter em cada mão com pegada neutro (palmas voltadas uma para a outra) e os braços estendidos retos acima do peito.",
      "Abaixe lentamente os halteres em direção ao peito, mantendo os cotovelos próximos ao corpo.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre os halteres de novo para cima até a posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "1285",
    "name": "Crucifixo unilateral banco com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se em um banco plano com um halter em uma mão, apoiando sobre a coxa.",
      "Deite-se no banco, mantendo o halter pressioneda contra a coxa.",
      "Usando a mão livre, ajuda a levantar o halter até a posição inicial.",
      "Segure o halter diretamente sobre o ombro com o braço estendido e a palma voltada para dentro."
    ]
  },
  {
    "id": "0292",
    "name": "Remada curvada unilateral com halter",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em uma mão com a palma para o corpo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Deixe que o halter pendure reta em direção ao chão, com o braço completamente estendido.",
      "Puxe o halter em direção ao peito, mantendo o cotovelo próximo ao corpo e aproximando as escápulas."
    ]
  },
  {
    "id": "1286",
    "name": "Crucifixo unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em uma mão e os pés apoiados no chão.",
      "Caminhe com os pés para a frente, fazendo girar a bola até que a parte superior das costas fiquem apoiadas na bola e a cabeça, o pescoço e os ombros fiquem fora dele.",
      "Estenda o braço com o halter reto acima do peito, com a palma voltada para dentro.",
      "Abaixe lentamente o halter para o lado, mantendo uma leve flexão no cotovelo."
    ]
  },
  {
    "id": "0353",
    "name": "Rosca concentrada unilateral na bola suíça com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um halter em uma mão com a palma voltada para cima e o braço estendido em direção ao chão.",
      "Apoie o cotovelo na parte interna da coxa, logo acima do joelho.",
      "Mantenha o braço superior imóvel, expire e flexione o halter para o ombro contraindo o bíceps."
    ]
  },
  {
    "id": "1287",
    "name": "Supino declinado unilateral com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco declinado com um halter em uma mão, apoiada sobre o peito.",
      "Coloque os pés apoiados no chão e mantenha as costas pressionadas contra o banco.",
      "Estenda o braço e empurre o halter para o teto, estendendo completamente o cotovelo.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1288",
    "name": "Crucifixo unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em uma mão e os pés apoiados no chão.",
      "Caminhe com os pés para a frente abaixe o corpo girando até que a parte superior das costas fiquem apoiadas sobre a bola suíça.",
      "Estenda o braço com o halter reto acima do peito, com a palma voltada para dentro.",
      "Abaixe lentamente o halter para o lado, mantendo uma leve flexão no cotovelo."
    ]
  },
  {
    "id": "1736",
    "name": "Tríceps francês unilateral na bola suíça com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em uma mão com a palma voltada para cima e o cotovelo flexionado em um ângulo de 90 graus.",
      "Estenda o braço reto para o teto, mantendo o cotovelo imóvel.",
      "Abaixe lentamente o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1663",
    "name": "Rosca martelo no banco Scott unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com um halter em uma mão e o braço superior apoiado sobre o apoio acolchoado.",
      "Segure o halter com pegada neutro (palmas voltadas para o corpo).",
      "Mantenha o braço superior imóvel, expire e flexione o halter para o ombro.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "1621",
    "name": "Supino com pegada neutra unilateral na bola suíça com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em uma mão com a palma voltada para dentro e o cotovelo flexionado em um ângulo de 90 graus.",
      "Coloque a outra mão no quadril para manter o equilíbrio.",
      "Empurre o halter para cima, estendendo completamente o braço."
    ]
  },
  {
    "id": "1289",
    "name": "Supino inclinado unilateral com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure um halter em uma mão com pegada pronada, apoiando sobre o ombro.",
      "Empurre o halter para cima e afastando do corpo, estendendo completamente o braço."
    ]
  },
  {
    "id": "0354",
    "name": "Coice unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter na mão direita.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Leve o cotovelo direito para o lado, mantendo-o flexionado em um ângulo de 90 graus.",
      "Estenda o braço direito reto para trás, contraindo o tríceps no ponto mais alto do movimento."
    ]
  },
  {
    "id": "0355",
    "name": "Elevação lateral unilateral com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em uma mão com a palma para o corpo.",
      "Mantenha as costas retas e o core ativado durante todo o exercício.",
      "Eleve o halter para o lado, mantendo o braço reto e a palma voltada para baixo.",
      "Continue levantando até que o braço fique paralelo ao chão."
    ]
  },
  {
    "id": "0356",
    "name": "Elevação lateral unilateral com apoio com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em uma mão, com a palma para o corpo.",
      "Coloque a outra mão sobre uma superfície estável, como um banco ou uma parede, para se apoiar.",
      "Mantenha as costas retas e ative o core.",
      "Eleve o halter para o lado, mantendo o braço reto e a palma voltada para baixo."
    ]
  },
  {
    "id": "1290",
    "name": "Supino unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um halter em uma mão e coloque à altura do ombro, com o cotovelo flexionado e a palma voltada para a frente.",
      "Empurre lentamente o halter para cima até que o braço fique completamente estendido, mantendo o core ativado e o equilíbrio sobre a bola suíça.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1665",
    "name": "Rosca unilateral de bruços com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Deite-se de bruços em um banco plano com um halter em uma mão, com a palma voltada para baixo.",
      "Estenda completamente o braço, deixando que pendure reto em direção ao chão.",
      "Mantenha o braço superior imóvel, flexione o halter para o ombro contraindo o bíceps.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1666",
    "name": "Rosca martelo unilateral de bruços com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Deite-se de bruços em um banco plano com um halter em uma mão, com a palma para o corpo e o braço completamente estendido.",
      "Mantenha o braço superior imóvel e flexione o halter para o ombro, contraindo o bíceps.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial.",
      "Repita o número de repetições desejado, depois muda de braço."
    ]
  },
  {
    "id": "1291",
    "name": "Pullover unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um halter com uma mão e estenda o braço reto acima do peito.",
      "Abaixe lentamente o halter por trás da cabeça mantendo o braço reto.",
      "Faça uma pausa por alguns segundos, depois eleve o halter de volta à posição inicial."
    ]
  },
  {
    "id": "0358",
    "name": "Extensão de punhos unilateral com halter",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão.",
      "Segure um halter em uma mão com pegada pronada, com a palma voltada para baixo.",
      "Apoie o antebraço sobre a coxa, com o punho pendurando fosse da borda.",
      "Abaixe lentamente o halter em direção ao chão flexionando o punho."
    ]
  },
  {
    "id": "0359",
    "name": "Crucifixo inverso unilateral com apoio com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em uma mão com a palma voltada para dentro.",
      "Incline-se para a frente coloque a mão livre sobre o banco para se apoiar.",
      "Mantenha o braço levemente flexionado e levante para o lado até que fique paralelo ao chão."
    ]
  },
  {
    "id": "1622",
    "name": "Supino unilateral com pegada invertida com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se em um banco plano com um halter em uma mão, com a palma para o corpo.",
      "Coloque os pés apoiados no chão e mantenha as costas retas.",
      "Eleve o halter até a altura do ombro, mantendo o cotovelo próximo ao corpo.",
      "Empurre o halter para cima até que o braço fique completamente estendido."
    ]
  },
  {
    "id": "1414",
    "name": "Rosca Scott inversa unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com o peito contra o apoio acolchoado e o braço estendido sobre a borda do banco, sustentando um halter com pegada supinada.",
      "Abaixe lentamente o halter até que o braço fique completamente estendido.",
      "Flexione o halter de novo para o ombro, mantendo o braço superior imóvel.",
      "Contraia o bíceps na parte mais alta do movimento, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1667",
    "name": "Rosca spider unilateral reverso com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em uma mão, com a palma voltada para baixo e o braço completamente estendido.",
      "Mantenha o braço superior imóvel, flexione o halter para o ombro flexionando o cotovelo.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial.",
      "Repita o número de repetições desejado, depois muda de braço."
    ]
  },
  {
    "id": "1668",
    "name": "Rosca bíceps unilateral sentado na bola suíça com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em uma mão com a palma voltada para cima e o braço completamente estendido.",
      "Mantenha o braço superior imóvel, flexione o halter para o ombro contraindo o bíceps.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1669",
    "name": "Rosca martelo unilateral sentado com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter em uma mão com pegada neutro (palmas voltadas uma para a outra).",
      "Apoie o cotovelo na parte interna da coxa, logo acima do joelho.",
      "Mantenha o braço superior imóvel, expire e flexione o halter para o ombro."
    ]
  },
  {
    "id": "1415",
    "name": "Flexão de punhos unilateral sentada neutra com halter",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em uma mão, com a palma voltada para cima.",
      "Apoie o antebraço sobre a coxa, deixando que o punho pendure fosse da borda.",
      "Mantenha o antebraço imóvel, flexione o punho para cima o mais possível.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o punho de volta à posição inicial."
    ]
  },
  {
    "id": "0361",
    "name": "Desenvolvimento de Ombros com Halter Unilateral",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em uma mão na altura do ombro, com a palma voltada para a frente.",
      "Empurre o halter para cima até que o braço fique completamente estendido acima da cabeça.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial.",
      "Repita o número de repetições desejado, depois muda ao outro braço."
    ]
  },
  {
    "id": "0360",
    "name": "Desenvolvimento de ombros unilateral com halter — variação 2",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em uma mão na altura do ombro, com a palma voltada para a frente.",
      "Ative o core e empurre o halter diretamente acima da cabeça, estendendo completamente o braço.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o halter até a altura do ombro.",
      "Repita o número de repetições desejado, depois muda ao outro braço."
    ]
  },
  {
    "id": "3888",
    "name": "Snatch unilateral com halter",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em uma mão com pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Abaixe o halter em direção ao chão, mantendo-os próximos ao corpo.",
      "Estenda de forma explosiva os quadris, os joelhos e os tornozelos, impulsionando o halter para cima em linha reta."
    ]
  },
  {
    "id": "1670",
    "name": "Rosca unilateral em pé com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em uma mão, com a palma voltada para a frente o braço completamente estendido.",
      "Mantenha o braço superior imóvel, expire e flexione o peso para cima contraindo o bíceps.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "1671",
    "name": "Rosca martelo unilateral em pé com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o tronco.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis.",
      "Expire e flexione pesos contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0362",
    "name": "Extensão de tríceps unilateral no banco com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter em uma mão e coloque a outra mão sobre o banco para se apoiar.",
      "Eleve o halter acima da cabeça, mantendo o braço superior próxima à cabeça e o cotovelo apontando para a frente.",
      "Abaixe o halter por trás da cabeça flexionando o cotovelo, mantendo o braço superior imóvel."
    ]
  },
  {
    "id": "0363",
    "name": "Remada Alta com Halter Unilateral",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em uma mão com pegada pronada.",
      "Deixe que o halter pendure à distância de um braço à frente das coxas, com a palma para o corpo.",
      "Mantenha as costas retas e o core ativado, expire e eleve o halter reta para o queixo, guiando com o cotovelo.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0364",
    "name": "Flexão de punhos unilateral com halter",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão.",
      "Segure um halter em uma mão com pegada supinada, apoiando o antebraço sobre a coxa.",
      "Permite que o punho se estenda, deixando que o halter rode para os dedos.",
      "Flexione lentamente o punho para cima, aproximando o halter para o antebraço."
    ]
  },
  {
    "id": "1672",
    "name": "Rosca Scott Zottman unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott e segure um halter em uma mão com pegada supinada.",
      "Apoie o braço superior sobre o apoio acolchoado do banco Scott, permitindo que o braço se estenda completamente.",
      "Flexione o halter de novo para o ombro, mantendo o braço superior imóvel.",
      "Na parte superior do rosca, gire o punho de maneira que a palma fique para cima."
    ]
  },
  {
    "id": "1292",
    "name": "Crucifixo unilateral na bola suíça com halter",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Coloque um pé no chão e estenda a outra perna reta para a frente.",
      "Incline-se ligeiramente para a frente leve os braços para os lados, mantendo uma leve flexão nos cotovelos.",
      "Abaixe lentamente os halteres para baixo e para os lados, sentindo um alongamento no peito."
    ]
  },
  {
    "id": "0365",
    "name": "Flexão de punhos neutra sobre o banco com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão, com as palmas voltadas para cima.",
      "Apoie os antebraços sobre o banco, deixando que os punhos pendurem da borda.",
      "Mantenha os braços imóveis, expire e flexione os halteres para os ombros.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0366",
    "name": "Flexão de punhos neutra unilateral sobre o banco com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com um halter em uma mão e o braço estendido sobre o banco, com a palma voltada para cima.",
      "Mantenha o braço superior imóvel e flexione o halter para o ombro, mantendo o punho em posição neutra.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial.",
      "Repita o número de repetições desejado, depois muda de braço."
    ]
  },
  {
    "id": "1441",
    "name": "Extensão de punhos sobre o banco unilateral com halter",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter com uma mão, com a palma voltada para baixo.",
      "Apoie o antebraço no banco com o punho para fora da borda.",
      "Flexione lentamente o punho para cima, aproximando o halter para o antebraço.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0367",
    "name": "Flexão de punhos sobre o banco unilateral com halter",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter com uma mão, com a palma voltada para baixo.",
      "Apoie o antebraço no banco com o punho para fora da borda.",
      "Flexione lentamente o punho para cima, aproximando o halter para o antebraço.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0368",
    "name": "Flexão de punhos reversa sobre o banco com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão, com as palmas voltadas para baixo.",
      "Apoie os antebraços sobre o banco, deixando que os punhos pendurem da borda.",
      "Flexione lentamente os punhos para cima, aproximando os halteres para o corpo.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0369",
    "name": "Flexão de punhos sobre o banco com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os antebraços apoiados nele as palmas voltadas para cima, segurando um halter em cada mão.",
      "Deixe que suos punhos pendurem da borda do banco.",
      "Flexione lentamente os punhos para cima, contraindo os antebraços no ponto mais alto do movimento.",
      "Faça uma pausa por alguns segundos e depois abaixe lentamente os punhos de volta à posição inicial."
    ]
  },
  {
    "id": "1329",
    "name": "Remada curvada com rotação da pegada com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e os joelhos levemente flexionados.",
      "Deixe que os braços pendurem retos para baixo, com as palmas voltadas para o corpo.",
      "Ative o core puxe os halteres para o peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "1623",
    "name": "Supino inclinado com pegada neutra com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure um halter em cada mão com pegada pronada, com as palmas voltadas para dentro.",
      "Estenda os braços retos para cima, acima do peito, mantendo uma leve flexão nos cotovelos."
    ]
  },
  {
    "id": "0370",
    "name": "Rosca martelo Scott com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o tronco.",
      "Mantenha os cotovelos próximos em relação ao tronco e gire as palmas das mãos até que fiquem voltadas para a frente.",
      "Esta será sua posição inicial.",
      "Agora, mantendo os braços imóveis, expire e flexione os braços contraindo os bíceps."
    ]
  },
  {
    "id": "0371",
    "name": "Agachamento pliométrico com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão em relação ao tronco.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Ao chegar no ponto mais baixo da agachamento, #se impulsione de forma explosiva para cima, saltando do chão.",
      "Enquanto está no ar, muda rapidamente a posição dos pés, aterrissando com o pé oposto adiante."
    ]
  },
  {
    "id": "0372",
    "name": "Rosca Scott com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com a parte superior dos braços apoiada no apoio acolchoado e o peito contra ela.",
      "Segure um halter em cada mão com as palmas voltadas para cima e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "1673",
    "name": "Rosca Scott sobre a bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter com uma mão com pegada supinada, apoiando o cotovelo sobre a bola suíça.",
      "Mantenha o braço superior imóvel, expire e flexione o halter para o ombro.",
      "Faça uma pausa por alguns segundos acima, logo inspire abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1293",
    "name": "Supino na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e um halter em cada mão, apoiadas sobre as coxas.",
      "Caminhe lentamente para a frente com os pés, fazendo girar a bola suíça até que sua zona lombar fique apoiada sobre a bola e os joelhos formem um ângulo de 90 graus.",
      "Suba os halteres até a altura dos ombros, com as palmas voltadas para a frente.",
      "Empurre os halteres para cima até que os braços estejam completamente estendidos."
    ]
  },
  {
    "id": "0373",
    "name": "Extensão de tríceps com pegada pronada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com as costas retas e os pés apoiados no chão.",
      "Segure um halter com as duas mãos, com as palmas voltadas para baixo, e estenda os braços retos acima da cabeça.",
      "Mantenha a parte superior dos braços próxima à cabeça e os cotovelos apontando para a frente, abaixe lentamente o halter por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0374",
    "name": "Rosca Inclinada com Halteres Deitado",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Ajuste o banco a uma inclinação de 45 graus.",
      "Deite-se de bruços no banco com o peito e o abdômen apoiados contra ele.",
      "Segure um halter em cada mão com as palmas voltadas para baixo e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps."
    ]
  },
  {
    "id": "1674",
    "name": "Rosca martelo inclinada de bruços com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Ajuste o banco a uma inclinação de 45 graus.",
      "Deite-se de bruços no banco com um halter em cada mão, com as palmas voltadas-se entre si.",
      "Deixe que os braços pendurem retos em direção ao chão, mantendo os cotovelos levemente flexionados.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps."
    ]
  },
  {
    "id": "0375",
    "name": "Pullover com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com a cabeça em um extremo e os pés no chão.",
      "Segure um halter com as duas mãos e estenda os braços retos acima do peito.",
      "Mantenha uma leve flexão nos cotovelos, abaixe lentamente o halter por trás da cabeça até sentir um alongamento no peito e os ombros.",
      "Faça uma pausa por alguns segundos, depois eleve o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1294",
    "name": "Extensão de quadril pullover na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e o halter apoiada sobre as coxas.",
      "Caminhe lentamente para a frente com os pés, fazendo girar a bola suíça por as costas até que a cabeça, o pescoço e a parte superior das costas fiquem apoiados sobre a bola.",
      "Segure o halter com as duas mãos e estenda os braços retos acima do peito, mantendo uma leve flexão nos cotovelos.",
      "Abaixe o halter por trás da cabeça, mantendo os braços retos e com controle total."
    ]
  },
  {
    "id": "1295",
    "name": "Pullover na bola suíça com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma bola suíça e segure um halter com as duas mãos acima do peito, com os braços estendidos.",
      "Abaixe lentamente o halter por trás da cabeça mantendo os braços retos.",
      "Faça uma pausa por alguns segundos, depois eleve o halter de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1700",
    "name": "Push press com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão à altura dos ombros.",
      "Flexione ligeiramente os joelhos e abaixe o corpo, depois estenda as pernas de forma explosiva e pressione os halteres acima da cabeça.",
      "Trave os braços no ponto mais alto do movimento, depois abaixe os halteres de volta à altura dos ombros.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0376",
    "name": "Elevação Lateral com Halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e ative o core.",
      "Eleve os braços para os lados até que fiquem paralelos ao chão, mantendo uma leve flexão nos cotovelos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "2292",
    "name": "Elevação para deltoide posterior com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para o corpo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Eleve os braços para os lados, mantendo uma leve flexão nos cotovelos, até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0377",
    "name": "Remada para deltoide posterior ombro com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure um halter em cada mão com as palmas voltadas para o corpo.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e o core ativado.",
      "Estenda os braços retos em direção ao chão, com uma leve flexão nos cotovelos."
    ]
  },
  {
    "id": "0378",
    "name": "Crucifixo posterior com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Estenda os braços retos em direção ao chão, com as palmas voltadas-se entre si.",
      "Mantenha uma leve flexão nos cotovelos, eleve os braços para os lados e contraia as escápulas entre si."
    ]
  },
  {
    "id": "0380",
    "name": "Elevação posterior com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para o corpo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Eleve os braços para os lados, mantendo uma leve flexão nos cotovelos, até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0379",
    "name": "Elevação posterior com apoio da cabeça com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Eleve os braços para os lados, mantendo uma leve flexão nos cotovelos, até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0381",
    "name": "Afundo Posterior com Halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Dê um passo para trás com o pé direito, baixando o corpo a uma posição de afundo.",
      "Flexione o joelho esquerdo e abaixe o corpo até que a coxa esquerda fique paralelo ao chão.",
      "Faça uma pausa por alguns segundos, depois empurre com o calcanhar esquerdo para voltar à posição inicial."
    ]
  },
  {
    "id": "0382",
    "name": "Rosca bíceps com pegada invertida e halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para baixo e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "1624",
    "name": "Supino reto reverso com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e os joelhos flexionados.",
      "Segure um halter em cada mão com pegada pronada, com as palmas para os pés.",
      "Estenda os braços retos para o teto, mantendo uma leve flexão nos cotovelos.",
      "Abaixe lentamente os halteres em direção ao peito, permitindo que os cotovelos se abram para os lados."
    ]
  },
  {
    "id": "0383",
    "name": "Crucifixo inverso com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Estenda os braços retos para a frente, com as palmas voltadas-se entre si.",
      "Mantenha uma leve flexão nos cotovelos, eleve os braços para os lados até que fiquem paralelos ao chão."
    ]
  },
  {
    "id": "1330",
    "name": "Remada com pegada invertida inclinado banco unilateral com halter",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Coloque um halter no chão junto ao banco.",
      "Fique de pé em frente ao banco com os pés afastados na largura dos ombros.",
      "Incline-se a partir da cintura e coloque o joelho esquerdo e a mão esquerda sobre o banco para se apoiar."
    ]
  },
  {
    "id": "1331",
    "name": "Remada com pegada invertida inclinado banco bilateral com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com o peito apoiado no encosto e os pés apoiados no chão.",
      "Segure um halter em cada mão com pegada supinada.",
      "Incline-se para a frente deixe que os braços pendurem retos para baixo, completamente estendidos."
    ]
  },
  {
    "id": "2327",
    "name": "Remada com pegada invertida com halteres (feminino)",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure um halter em cada mão com pegada pronada, com as palmas voltadas para o corpo.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e o core ativado.",
      "Deixe que os braços pendurem retos para baixo, completamente estendidos, com uma leve flexão nos cotovelos."
    ]
  },
  {
    "id": "0384",
    "name": "Rosca Scott inversa com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com os braços apoiados no almofada e o peito contra o suporte.",
      "Segure um halter em cada mão com pegada supinada, com as palmas voltadas para cima.",
      "Mantenha a parte superior dos braços fixa, expire e flexione os halteres contraindo os bíceps.",
      "Continue flexionando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "1675",
    "name": "Rosca spider reverso com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com as costas retas, com um halter em cada mão, as palmas voltadas para o corpo e os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0385",
    "name": "Extensão de punhos com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão.",
      "Segure um halter em cada mão com pegada pronada, com as palmas voltadas para baixo.",
      "Apoie os antebraços sobre as coxas, deixando que os punhos pendurem da borda.",
      "Flexione lentamente os punhos para cima, aproximando os halteres para o corpo."
    ]
  },
  {
    "id": "1459",
    "name": "Levantamento terra romeno com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Mantenha as costas retas e o core ativado, incline-se a partir dos quadris e abaixe os halteres em direção ao chão, permitindo que os joelhos se flexionem ligeiramente.",
      "Abaixe os halteres até sentir um alongamento nos posteriores das coxas, depois empurre com os calcanhares e ative os glúteos para voltar à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0386",
    "name": "Crucifixo inverso rotação com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para dentro.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Eleve os braços para os lados, mantendo uma leve flexão nos cotovelos, até que fiquem paralelos ao chão.",
      "Gire os braços de modo que as palmas fiquem voltadas para baixo."
    ]
  },
  {
    "id": "2397",
    "name": "Desenvolvimento Scott com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas voltadas para a frente.",
      "Suba os halteres até a altura dos ombros, com os cotovelos flexionados e as palmas voltadas para a frente.",
      "Empurre os halteres para cima até que os braços estejam completamente estendidos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0387",
    "name": "Elevação frontal sentado alternado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter em cada mão com as palmas voltadas para o corpo e os braços estendidos para baixo aos lados.",
      "Mantenha os braços retos, eleve um halter à sua frente até que fique paralela ao chão.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1676",
    "name": "Rosca martelo sentado alternado na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para o corpo e os braços completamente estendidos.",
      "Mantenha a parte superior dos braços fixa, expire e flexione um halter para o ombro mantendo a palma para o corpo.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "0388",
    "name": "Desenvolvimento alternado sentado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas voltadas para a frente.",
      "Suba os halteres até a altura dos ombros, com os cotovelos flexionados e as palmas voltadas para a frente.",
      "Pressione um halter para cima, acima da cabeça, estendendo completamente o braço.",
      "Abaixe o halter de volta à altura dos ombros."
    ]
  },
  {
    "id": "3546",
    "name": "Sentado alternado ombro com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter em cada mão, com as palmas voltadas para dentro, e levante à altura dos ombros.",
      "Pressione um halter para cima, acima da cabeça, mantendo a outro halter à altura dos ombros.",
      "Abaixe o halter levantada de volta à altura dos ombros enquanto pressione simultaneamente a outro halter acima da cabeça."
    ]
  },
  {
    "id": "0389",
    "name": "Sentado banco extensão com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter com as duas mãos e estenda os braços retos acima da cabeça.",
      "Abaixe lentamente o halter por trás da cabeça, mantendo os cotovelos próximas às orelhas.",
      "Faça uma pausa por alguns segundos, depois suba o halter de volta à posição inicial."
    ]
  },
  {
    "id": "2317",
    "name": "Elevação lateral sentado com braços flexionados com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter em cada mão com as palmas voltadas para o corpo e os braços flexionados em um ângulo de 90 graus.",
      "Mantenha os cotovelos flexionados, eleve os braços para os lados até que fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "1730",
    "name": "Coice sentado com o tronco inclinado alternado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas voltadas para dentro.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e paralela ao chão.",
      "Estenda um braço reto para trás, mantendo-o próximo do corpo, até que o braço esteja completamente estendido.",
      "Faça uma pausa por alguns segundos, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1737",
    "name": "Extensão de tríceps sentado com o tronco inclinado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e a cabeça ereta.",
      "Estenda os braços retos para trás, mantendo os cotovelos próxima à cabeça.",
      "Faça uma pausa por alguns segundos, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1677",
    "name": "Rosca bíceps sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão, com as palmas voltadas para cima.",
      "Mantenha as costas retas e os cotovelos próximos em relação ao tronco.",
      "Expire e flexione os halteres para os ombros, contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0390",
    "name": "Rosca bíceps sentado na bola suíça com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços imóveis, expire e flexione os halteres contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "3547",
    "name": "Rosca bíceps sentada seguida de desenvolvimento com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter em cada mão com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os cotovelos próximo de o tronco, flexione os halteres para os ombros.",
      "Uma vez que suas antebraços estejam verticais, gire os punhos de maneira que as palmas fiquem para a frente."
    ]
  },
  {
    "id": "1379",
    "name": "Elevação de panturrilha sentada com halteres",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão e um halter apoiado sobre as coxas.",
      "Coloque a ponta dos pés sobre uma superfície elevada, como um degrau ou um bloco, com os calcanhares para fora da borda.",
      "Segure o halter para manter a estabilidade.",
      "Eleve os calcanhares o máximo possível, elevando o peso do corpo sobre as pontas dos pés."
    ]
  },
  {
    "id": "0391",
    "name": "Rosca sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e um halter em cada mão, com as palmas voltadas para a frente.",
      "Mantenha as costas retas e os cotovelos próximos em relação ao tronco.",
      "Expire e flexione os halteres para os ombros, contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0392",
    "name": "Elevação frontal sentado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e um halter em cada mão, apoiadas sobre as coxas.",
      "Mantenha as costas retas e o core ativado.",
      "Eleve os halteres à sua frente, com as palmas voltadas para baixo, até que fiquem à altura dos ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1678",
    "name": "Rosca martelo sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas para sua tronco e os braços estendidos retos para baixo.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0393",
    "name": "Rosca bíceps sentado interno com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão, com as palmas voltadas para cima.",
      "Apoie a parte superior dos braços sobre as coxas, deixando que os halteres pendurem para baixo.",
      "Mantenha a parte superior dos braços fixa, flexione os halteres para os ombros contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0394",
    "name": "Coice sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Mantenha a parte superior dos braços próxima em relação ao tronco e mantenha os cotovelos flexionados em um ângulo de 90 graus.",
      "Estenda os braços retos para trás, contraindo os tríceps no ponto mais alto do movimento."
    ]
  },
  {
    "id": "0396",
    "name": "Elevação lateral sentado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e um halter em cada mão, apoiadas sobre as coxas.",
      "Mantenha as costas retas e o core ativado.",
      "Eleve os halteres para os lados com uma leve flexão nos cotovelos, até que o os braços fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0395",
    "name": "Elevação lateral sentado com halteres — variação 2",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e um halter em cada mão, apoiadas sobre as coxas.",
      "Mantenha as costas retas e o core ativado.",
      "Eleve os halteres para os lados com uma leve flexão nos cotovelos, até que o os braços fiquem paralelos ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0397",
    "name": "Flexão de punhos sentada neutra com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão, com as palmas voltadas-se entre si.",
      "Apoie os antebraços sobre as coxas, deixando que os halteres pendurem para baixo.",
      "Mantenha os punhos em posição neutra, flexione os halteres para os ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1679",
    "name": "Rosca bíceps sentada unilateral na bola suíça com perna elevada com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e as costas retas.",
      "Segure um halter em uma mão com a palma voltada para cima e o braço completamente estendido.",
      "Coloque a outra mão no quadril para manter o equilíbrio.",
      "Flexione lentamente o halter em direção ao ombro, mantendo fixa a parte superior do braço."
    ]
  },
  {
    "id": "0398",
    "name": "Coice sentado unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter com uma mão.",
      "Incline o tronco para a frente a partir da cintura, mantendo as costas retas e paralela ao chão.",
      "Estenda o braço reto para trás, mantendo o cotovelo próximo do corpo.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0399",
    "name": "Rotação unilateral sentada com halter",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com as costas retas e segure um halter com uma mão, apoiando sobre a coxa.",
      "Suba o halter até a altura do ombro, mantendo o cotovelo próximo do corpo.",
      "Gire o antebraço para fora, afastando do corpo, mantendo fixa a parte superior do braço.",
      "Faça uma breve pausa no ponto mais alto, depois gire lentamente o antebraço de volta à posição inicial."
    ]
  },
  {
    "id": "0400",
    "name": "Panturrilha Sentado com Uma Perna e Halteres",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão e um halter apoiado sobre a coxa direita.",
      "Estenda a perna esquerda reta para a frente, mantendo o pé flexionado.",
      "Coloque a ponta do pé direito sobre uma superfície elevada, como um degrau ou um disco de importância.",
      "Usando os músculos da panturrilha, eleve o calcanhar direito o máximo possível."
    ]
  },
  {
    "id": "1380",
    "name": "Elevação de panturrilha unilateral sentada com halter em pegada neutra",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com os pés apoiados no chão e um halter apoiado sobre as coxas.",
      "Coloque um pé sobre uma superfície elevada, como um degrau ou um bloco, com o calcanhar para fora da borda.",
      "Segure o halter com pegada neutro, isto é, com as palmas voltadas-se entre si e os dedos envolvando a barra.",
      "Mantenha o core ativado e as costas retas, eleve lentamente o calcanhar o máximo possível empurrando com a ponta do pé."
    ]
  },
  {
    "id": "1381",
    "name": "Elevação de panturrilha sentado unilateral com pegada supinada e halter",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se em um banco ou em uma cadeira com as costas retas e os pés apoiados no chão.",
      "Segure um halter com uma mão e coloque sobre a coxa, com a palma voltada para cima.",
      "Eleve uma perna do chão e estenda-a à sua frente, mantendo o joelho levemente flexionado.",
      "Eleve o calcanhar o máximo possível empurrando com a ponta do pé."
    ]
  },
  {
    "id": "0401",
    "name": "Flexão de punhos sentado com as palmas para cima com halteres",
    "bodyPart": "antebraços",
    "equipment": "halter",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em cada mão, com as palmas voltadas para cima.",
      "Apoie os antebraços sobre as coxas, deixando que os punhos pendurem da borda.",
      "Flexione lentamente os punhos para cima, contraindo os antebraços no ponto mais alto do movimento.",
      "Faça uma pausa por alguns segundos e depois abaixe os punhos de volta à posição inicial."
    ]
  },
  {
    "id": "0402",
    "name": "Rosca Scott sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com os pés apoiados no chão.",
      "Segure um halter com uma mão com pegada supinada, apoiando a parte superior do braço no apoio acolchoado do banco Scott.",
      "Mantenha o braço superior imóvel, expire e flexione o halter para o ombro.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0403",
    "name": "Rosca concentrada sentada com pegada invertida e halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure um halter em uma mão, com a palma voltada para cima.",
      "Apoie o cotovelo na parte interna da coxa, logo acima do joelho.",
      "Mantenha o braço superior imóvel, expire e flexione o halter para o ombro.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "1738",
    "name": "Extensão de tríceps acima da cabeça sentado com pegada invertida unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter com pegada supinada e estenda o braço reto acima da cabeça.",
      "Abaixe o halter por trás da cabeça flexionando o cotovelo, mantendo o braço superior imóvel.",
      "Faça uma pausa por alguns segundos, depois estenda o braço de volta para cima, até a posição inicial."
    ]
  },
  {
    "id": "0405",
    "name": "Desenvolvimento de ombros sentado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, apoiadas nas coxas.",
      "Suba os halteres até a altura dos ombros, com as palmas voltadas para a frente.",
      "Pressione os halteres para cima até que os braços fiquem completamente estendidos acima da cabeça.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à altura dos ombros."
    ]
  },
  {
    "id": "0404",
    "name": "Desenvolvimento de ombros sentado com pegada neutra e halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas voltadas para dentro.",
      "Suba os halteres até a altura dos ombros, com os cotovelos flexionados e as palmas voltadas para a frente.",
      "Pressione os halteres para cima até que os braços fiquem completamente estendidos acima da cabeça.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à altura dos ombros."
    ]
  },
  {
    "id": "2188",
    "name": "Extensão de tríceps sentado com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter com as duas mãos e estenda os braços retos acima da cabeça.",
      "Flexione os cotovelos e abaixe o halter por trás da cabeça, mantendo a parte superior dos braços próximas às orelhas.",
      "Faça uma pausa por alguns segundos, depois endereça os braços e volte à posição inicial."
    ]
  },
  {
    "id": "0406",
    "name": "Encolhimento de Ombros com Halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "trapézios",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão com as palmas voltadas para o corpo.",
      "Mantenha os braços retos e deixe que os halteres pendurados ao lado do o tronco.",
      "Eleve os ombros o máximo possível, como se tentasse tocar você as orelhas com eles.",
      "Mantenha a contração durante um segundo, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "0407",
    "name": "Inclinação Lateral com Halteres",
    "bodyPart": "abdômen",
    "equipment": "halter",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros, segurando um halter com uma mão e deixando que pendure ao seu lado.",
      "Mantenha as costas retas e o core ativado, incline-se lentamente para o outro lado do halter, baixando o peso o máximo que for confortável.",
      "Faça uma pausa por alguns segundos, depois retorne lentamente à posição inicial.",
      "Repita o número de repetições desejado, depois muda de lado e repita."
    ]
  },
  {
    "id": "0408",
    "name": "Elevação lateral unilateral deitado de lado com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Deite-se de lado com as pernas estendidas e a cabeça apoiada sobre o braço.",
      "Segure um halter com a mão de acima, com a palma voltada para baixo.",
      "Mantenha o braço reto, suba o halter até a altura do ombro.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "3664",
    "name": "Prancha lateral com crucifixo inverso com halteres",
    "bodyPart": "costas",
    "equipment": "halter",
    "target": "parte superior das costas",
    "instructions": [
      "Comece deitado de lado com as pernas estendidas e empilhadas uma sobre a outra.",
      "Coloque o antebraço no chão, diretamente abaixo do ombro, mantendo o cotovelo flexionado em um ângulo de 90 graus.",
      "Segure um halter com a mão de acima, com o braço estendido reto em direção ao chão.",
      "Ative o core e eleve os quadris do chão, formando uma linha reta da cabeça aos calcanhares."
    ]
  },
  {
    "id": "3548",
    "name": "Carregada unilateral acima da cabeça com halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter com uma mão.",
      "Eleve o halter acima da cabeça, estendendo completamente o braço.",
      "Ative o core e mantenha as costas retas enquanto caminhe para a frente, sustentando o halter acima da cabeça.",
      "Continue caminhando durante a distância ou o tempo desejado."
    ]
  },
  {
    "id": "0409",
    "name": "Elevação de panturrilha unilateral com halter",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé na borda de um degrau ou plataforma, com os calcanhares pendurando e a ponta dos pés sobre o degrau.",
      "Segure um halter com uma mão e coloque a outra mão sobre uma parede ou corrimão para se apoiar.",
      "Eleve o calcanhar o máximo possível, levantando o corpo sobre a ponta dos pés.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o calcanhar por embaixo do nível do degrau."
    ]
  },
  {
    "id": "1757",
    "name": "Levantamento terra unilateral com halter",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris, segurando um halter com a mão direita.",
      "Mova seu peso à perna esquerda e eleve o pé direito ligeiramente do chão.",
      "Mantenha as costas retas, incline-se para a frente a partir dos quadris e abaixe o halter em direção ao chão.",
      "Ao mesmo tempo, estenda a perna direita reta para trás, mantendo uma leve flexão no joelho esquerdo."
    ]
  },
  {
    "id": "2805",
    "name": "Levantamento terra unilateral com apoio no step e halter",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris, segurando um halter com a mão direita.",
      "Coloque o pé esquerdo sobre um cajón de step ou uma superfície elevada atrás do corpo.",
      "Mantenha as costas retas e o core ativado, incline-se para a frente a partir dos quadris, baixando o halter em direção ao chão.",
      "Enquanto abaixa o halter, eleve simultaneamente a perna esquerda atrás do corpo, mantendo uma linha reta desde a cabeça até o calcanhar."
    ]
  },
  {
    "id": "0410",
    "name": "Agachamento unilateral com base dividida com halter",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Dê um passo para a frente com um pé e coloque os pés de maneira que o pé atacante fique plano no chão e o pé posterior fique elevado sobre um banco ou degrau.",
      "Abaixe o corpo flexionando o joelho e o quadril delanteras, mantendo o joelho posterior levemente flexionada e o calcanhar posterior levantado do chão.",
      "Continue baixando até que a coxa atacante fique paralelo ao chão, depois empurre com o calcanhar atacante para voltar à posição inicial."
    ]
  },
  {
    "id": "0411",
    "name": "Agachamento unilateral com halter",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Estenda uma perna para a frente mantenla levantada do chão durante todo o exercício.",
      "Flexione a perna de apoio e abaixe o corpo como se se sentasse em uma cadeira.",
      "Mantenha o peito erguido e as costas retas."
    ]
  },
  {
    "id": "0413",
    "name": "Agachamento com Halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão em relação ao tronco.",
      "Mantenha o peito erguido e o core ativado, abaixe o corpo flexionando os joelhos e os quadris, como se se sentasse em uma cadeira.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "3560",
    "name": "Rosca martelo em pé alternada com desenvolvimento com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha os cotovelos próximos em relação ao tronco e as costas retas.",
      "Expire e flexione o halter de sua mão direita para o ombro, mantendo o braço superior imóvel.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "0414",
    "name": "Desenvolvimento acima da cabeça em pé alternado com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão à altura dos ombros, com as palmas voltadas para a frente.",
      "Pressione um halter acima da cabeça, estendendo completamente o braço.",
      "Abaixe o halter de volta à altura dos ombros.",
      "Repita com o outro braço."
    ]
  },
  {
    "id": "0415",
    "name": "Em pé alternado elevação com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão com as palmas voltadas para o corpo.",
      "Mantenha as costas retas e o core ativado.",
      "Eleve um halter para o lado, mantendo o braço reto e a palma voltada para baixo.",
      "Continue levantando até que o braço fique paralelo ao chão."
    ]
  },
  {
    "id": "1739",
    "name": "Coice de tríceps alternado em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Estenda os braços retos para trás, mantendo os cotovelos próximos ao corpo.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "2143",
    "name": "Rotação ao redor do corpo em pé com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Estenda os braços retos para os lados à altura dos ombros, com as palmas voltadas para baixo.",
      "Mantenha os braços retos, gire lentamente os braços em um movimento circular, levando os halteres à frente do corpo e depois acima da cabeça.",
      "Continue o movimento circular, baixando os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1740",
    "name": "Extensão de tríceps em pé com o tronco inclinado unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter com uma mão.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e paralela ao chão.",
      "Estenda o braço reto para trás, mantendo o cotovelo próximo do corpo.",
      "Abaixe lentamente o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1741",
    "name": "Extensão de tríceps em pé com o tronco inclinado bilateral com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e os joelhos levemente flexionados.",
      "Estenda os braços retos para trás, mantendo os cotovelos próximos ao corpo.",
      "Abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0416",
    "name": "Rosca bíceps em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente, com os braços completamente estendidos.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps."
    ]
  },
  {
    "id": "0417",
    "name": "Elevação de panturrilha em pé com halteres",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão.",
      "Eleve os calcanhares do chão o máximo possível, usando as panturrilhas.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0418",
    "name": "Rosca concentrada em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter com uma mão, com o braço completamente estendido e a palma voltada para dentro.",
      "Apoie a outra mão sobre a coxa para ter mais estabilidade.",
      "Mantenha fixa a parte superior do braço, expire e flexione o halter para o ombro contraindo o bíceps.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "0419",
    "name": "Elevação frontal em pé acima da cabeça com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Mantenha os braços retos e eleve os halteres à sua frente, elevando acima da cabeça.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "2321",
    "name": "Rosca bíceps em pé interno com halteres — variação 2",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o tronco.",
      "Mantenha os cotovelos próximos em relação ao tronco e gire as palmas das mãos até que fiquem voltadas para a frente.",
      "Mantenha fixa a parte superior dos braços, flexione os pesos contraindo os bíceps.",
      "Continue levantando pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0420",
    "name": "Coice em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Estenda os braços retos para trás, contraindo os tríceps no ponto mais alto do movimento.",
      "Faça uma pausa por alguns segundos, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0421",
    "name": "Rosca concentrada em pé unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros, segurando um halter com uma mão, com a palma voltada para cima.",
      "Coloque a mão livre sobre a coxa para se apoiar.",
      "Mantenha fixa a parte superior do braço, expire e flexione o halter para o ombro contraindo o bíceps.",
      "Continue levantando o halter até que o bíceps esteja completamente contraído e o halter esteja à altura do ombro."
    ]
  },
  {
    "id": "0422",
    "name": "Rosca unilateral em pé sobre banco inclinado com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter com uma mão, com a palma voltada para a frente.",
      "Coloque a outra mão sobre um banco inclinado para se apoiar.",
      "Mantenha fixa a parte superior do braço, expire e flexione o halter para o ombro contraindo o bíceps.",
      "Faça uma pausa por alguns segundos acima, logo inspire abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "1680",
    "name": "Rosca unilateral em pé sobre banco inclinado com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter com uma mão.",
      "Coloque a outra mão sobre um banco inclinado para se apoiar.",
      "Mantenha o braço superior imóvel, flexione o halter para o ombro contraindo o bíceps.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0423",
    "name": "Em pé unilateral extensão com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter com uma mão.",
      "Eleve o halter acima da cabeça, estendendo completamente o braço.",
      "Mantenha a parte superior do braço próxima à cabeça e perpendicular ao chão.",
      "Abaixe lentamente o halter por trás da cabeça, flexionando o cotovelo."
    ]
  },
  {
    "id": "0424",
    "name": "Desenvolvimento em pé unilateral com pegada neutra e halter",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter com uma mão na altura do ombro, com a palma voltada para dentro.",
      "Ative o core e mantenha as costas retas.",
      "Empurre o halter para cima até que o braço fique completamente estendido.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0425",
    "name": "Rosca inversa em pé unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros, segurando um halter com uma mão com pegada pronada.",
      "Mantenha o braço completamente estendido e próximos ao corpo, com a palma voltada para baixo.",
      "Flexione lentamente o halter em direção ao ombro, mantendo fixa a parte superior do braço.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o halter à posição inicial."
    ]
  },
  {
    "id": "0426",
    "name": "Desenvolvimento acima da cabeça em pé com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão à altura dos ombros, com as palmas voltadas para a frente.",
      "Pressione os halteres para cima até que os braços fiquem completamente estendidos acima da cabeça.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à altura dos ombros.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0427",
    "name": "Desenvolvimento em pé com pegada neutra e halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão à altura dos ombros, com as palmas voltadas para dentro.",
      "Mantenha o core ativado e as costas retas, pressione os halteres para cima até que os braços fiquem completamente estendidos acima da cabeça.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0428",
    "name": "Rosca Scott em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para a frente.",
      "Apoie a parte posterior da parte superior dos braços contra o banco Scott ou um banco inclinado, com os cotovelos levemente flexionados.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando os halteres até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros."
    ]
  },
  {
    "id": "0429",
    "name": "Rosca inversa em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros, segurando um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha fixa a parte superior dos braços, expire e flexione os pesos contraindo os bíceps. Continue subindo os pesos até que os bíceps estejam completamente contraídos e os halteres estejam à altura dos ombros.",
      "Mantenha a posição contraída durante uma breve pausa contraindo os bíceps.",
      "Inspire comece a baixar lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0430",
    "name": "Extensão de tríceps em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter com uma mão.",
      "Eleve o halter acima da cabeça, mantendo o braço reto.",
      "Flexione o cotovelo e abaixe o halter por trás da cabeça, mantendo fixa a parte superior do braço.",
      "Estenda o braço de volta para cima, até a posição inicial."
    ]
  },
  {
    "id": "2293",
    "name": "Rosca Scott Zottman em pé com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente.",
      "Apoie a parte superior dos braços contra o banco Scott e mantenha os cotovelos levemente flexionados.",
      "Flexione os halteres para os ombros mantendo fixa a parte superior dos braços.",
      "Na ponto mais alto do movimento, gire os punhos de maneira que as palmas fiquem para baixo."
    ]
  },
  {
    "id": "1684",
    "name": "Rosca bíceps com subida no step e equilíbrio unilateral com halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé em frente a um degrau ou plataforma com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Coloque o pé direito sobre o degrau, certificando-se de que todo o pé esteja em contato com a superfície.",
      "Ative o core e empurre com o calcanhar direito para subir o corpo sobre o degrau, levando o joelho esquerdo em direção ao peito.",
      "Na ponto mais alto do movimento, realize um rosca de bíceps flexionando os cotovelos e levando os halteres para os ombros."
    ]
  },
  {
    "id": "0431",
    "name": "Subida no step com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé de frente para um banco ou degrau com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Coloque o pé direito sobre o banco ou degrau, certificando-se de que todo o pé esteja em contato com a superfície.",
      "Empurre com o calcanhar direito e suba o corpo sobre o banco ou degrau, estendendo a perna direita.",
      "Suba o pé esquerdo até o banco ou degrau, ficando completamente ereto."
    ]
  },
  {
    "id": "2796",
    "name": "Subida no banco com afundo e halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé em frente a um degrau ou plataforma com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Coloque o pé direito sobre o degrau, certificando-se de que todo o pé esteja sobre a superfície.",
      "Empurre com o calcanhar direito e suba o corpo sobre o degrau, levando também o pé esquerdo para cima.",
      "Uma vez que ambos pés estejam sobre o degrau, abaixe o pé esquerdo de volta à posição inicial, mantendo o pé direito sobre o degrau."
    ]
  },
  {
    "id": "2812",
    "name": "Agachamento com base dividida e subida no step com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé de frente para um banco ou degrau com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Coloque o pé direito sobre o banco ou degrau, certificando-se de que todo o pé esteja em contato com a superfície.",
      "Suba ao banco ou degrau com o pé direito, empurrando com o calcanhar para levantar o corpo.",
      "Enquanto suba, eleve simultaneamente o joelho esquerdo em direção ao peito."
    ]
  },
  {
    "id": "0432",
    "name": "Levantamento terra stiff com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Mantenha as costas retas e o core ativado, incline-se a partir dos quadris e abaixe os halteres em direção ao chão, permitindo uma leve flexão nos joelhos.",
      "Abaixe os halteres até sentir um alongamento nos posteriores das coxas, depois contraia os glúteos e empurre com os calcanhares para voltar à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0433",
    "name": "Pullover com braços estendidos com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se em um banco com a cabeça em um extremo e os pés firmemente apoiados no chão.",
      "Segure um halter com as duas mãos e estenda os braços retos acima do peito.",
      "Mantenha os braços retos, abaixe lentamente o halter por trás da cabeça com um movimento em forma de arco.",
      "Faça uma pausa por alguns segundos, depois eleve o halter de volta à posição inicial."
    ]
  },
  {
    "id": "0434",
    "name": "Levantamento terra com pernas estendidas com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Mantenha as costas retas e o core ativado, incline-se a partir dos quadris e abaixe os halteres em direção ao chão, permitindo que o tronco se incline para a frente.",
      "Continue baixando os halteres até sentir um alongamento nos posteriores das coxas, mantendo os joelhos levemente flexionados.",
      "Faça uma pausa breve na posição baixa, depois ative os glúteos e os posteriores das coxas para levantar o tronco de volta à posição inicial."
    ]
  },
  {
    "id": "2808",
    "name": "Puxada sumô entre as pernas com halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés mais separados que a altura dos ombros, com as pontas dos pés para fora.",
      "Segure um halter com as duas mãos à frente do corpo, com os braços estendidos.",
      "Flexione os joelhos e abaixe os quadris até uma posição de agachamento, mantendo as costas retas.",
      "Abaixe o halter entre as pernas, mantendo os braços retos."
    ]
  },
  {
    "id": "2803",
    "name": "Agachamento com apoio e halteres",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão em relação ao tronco.",
      "Mantenha o peito erguido e o core ativado, abaixe lentamente o corpo flexionando os joelhos e empurrando os quadris para trás.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "0436",
    "name": "Extensão de tríceps Tate com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco plano com um halter em cada mão, com as palmas voltadas-se entre si.",
      "Suba os halteres até a altura dos ombros, depois gire os punhos de maneira que as palmas fiquem voltadas para fora.",
      "Pressione os halteres para cima até que os braços fiquem completamente estendidos, depois as baixe de volta à altura dos ombros.",
      "Gire os punhos de volta à posição inicial e repita o número de repetições desejado."
    ]
  },
  {
    "id": "1742",
    "name": "Coice de tríceps em postura unilateral com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter na mão direita.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Leve o cotovelo direito para o lado, mantendo-o flexionado em um ângulo de 90 graus.",
      "Estenda o braço direito reto para trás, contraindo o tríceps."
    ]
  },
  {
    "id": "1743",
    "name": "Supino reto com rotação com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure um halter em cada mão com pegada pronada, com as palmas afastadas de você.",
      "Estenda os braços retos acima do peito, com uma leve flexão nos cotovelos.",
      "Abaixe os halteres em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "0437",
    "name": "Remada alta com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Deixe que os halteres pendurem em frente a suas coxas, com os braços completamente estendidos.",
      "Mantenha as costas retas e o core ativado, expire e eleve os halteres retas para seu queixo, guiando o movimento com os cotovelos.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "1765",
    "name": "Remada alta com halteres — vista posterior",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um halter em cada mão com uma pegada pronada.",
      "Deixe que os halteres pendurem em frente a suas coxas, com os braços completamente estendidos e as palmas voltadas para o corpo.",
      "Mantenha as costas retas e o core ativado, expire e eleve os halteres retas para seu queixo, guiando o movimento com os cotovelos.",
      "Continue subindo até que os halteres estejam à altura dos ombros, com os cotovelos apontando para os lados."
    ]
  },
  {
    "id": "0864",
    "name": "Rotação externa de ombro em pé com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão com as palmas voltadas para o corpo.",
      "Eleve os braços para os lados até que fiquem paralelos ao chão, mantendo os cotovelos levemente flexionados.",
      "Gire os braços para fora, levando os halteres para a cabeça mantendo os cotovelos na mesma posição.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "5201",
    "name": "Rosca bíceps garçom com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para a frente.",
      "Mantenha a parte superior dos braços próximos ao corpo e os cotovelos colados.",
      "Flexione lentamente os halteres para os ombros, mantendo os punhos retas.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os halteres de volta à posição inicial."
    ]
  },
  {
    "id": "0438",
    "name": "Desenvolvimento em W com halteres",
    "bodyPart": "ombros",
    "equipment": "halter",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com um halter em cada mão, com as palmas voltadas para a frente.",
      "Suba os halteres até a altura dos ombros, com os cotovelos flexionados e as palmas voltadas para a frente.",
      "Pressione os halteres para cima até que os braços fiquem completamente estendidos acima da cabeça.",
      "Abaixe os halteres de volta à altura dos ombros."
    ]
  },
  {
    "id": "0439",
    "name": "Rosca Zottman com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, com as palmas voltadas para o corpo.",
      "Mantenha os cotovelos próximos em relação ao tronco e gire as palmas para que fiquem para a frente.",
      "Flexione os halteres para os ombros mantendo fixa a parte superior dos braços.",
      "Na ponto mais alto do movimento, gire os punhos de maneira que as palmas fiquem afastadas do corpo."
    ]
  },
  {
    "id": "2294",
    "name": "Rosca Scott Zottman com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com um halter em cada mão, com as palmas voltadas para cima e os cotovelos apoiados no apoio acolchoado.",
      "Flexione os halteres para os ombros, mantendo fixa a parte superior dos braços e as palmas voltadas para cima.",
      "Na parte superior do rosca, gire os punhos de maneira que as palmas fiquem para baixo.",
      "Abaixe lentamente os halteres de volta à posição inicial, girando também os punhos a sua posição original enquanto o faz."
    ]
  },
  {
    "id": "2189",
    "name": "Extensão de tríceps sentada com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um halter com as duas mãos com pegada pronada e levante acima da cabeça.",
      "Flexione os cotovelos e abaixe o halter por trás da cabeça, mantendo a parte superior dos braços próximas às orelhas.",
      "Estenda os braços e suba o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1167",
    "name": "Alongamento de peitoral dinâmico (masculino)",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Estenda os braços para os lados, paralelos ao chão.",
      "Leve lentamente os braços para a frente, cruzando à frente do corpo.",
      "Sente-se o alongamento nos músculos do peito."
    ]
  },
  {
    "id": "3287",
    "name": "Mergulho de tríceps com apoio nos cotovelos",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco ou cadeira com as mãos segurando a borda aproxime às quadris.",
      "Deslize os quadris para a frente, fora do banco, e estenda as pernas, mantendo os calcanhares no chão.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas cerca do banco.",
      "Faça uma pausa por alguns segundos na posição baixa, depois empurre com as mãos para estender os braços e levantar o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1772",
    "name": "Flexão de braços reversa com elevação do cotovelo",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Comece deitado de bruços no chão com as pernas estendidas e as mãos colocadas diretamente abaixo dos ombros.",
      "Ative o core pressione com as palmas para levantar a parte superior do corpo do chão, mantendo os cotovelos próximos em relação ao tronco.",
      "Faça uma breve pausa no ponto mais alto, contraindo os músculos das costas altas.",
      "Abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0443",
    "name": "Cotovelo no Joelho",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece deitado de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Ative o abdômen e eleve a parte superior do corpo do chão, levando o cotovelo direito em direção ao joelho esquerdo.",
      "Ao mesmo tempo, leve o joelho esquerdo para o cotovelo direito, criando um movimento de torque."
    ]
  },
  {
    "id": "3292",
    "name": "Elevador",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Coloque as mãos sobre os quadris ou cruze à frente do peito.",
      "Mantenha as costas retas, incline-se lentamente para a frente a partir da cintura, baixando a parte superior do corpo em direção ao chão.",
      "Faça uma pausa por alguns segundos na posição baixa, depois suba lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1332",
    "name": "Elevação alternada de braços na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "dorsais",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure um halter em cada mão com as palmas voltadas para dentro e os braços estendidos para baixo aos lados.",
      "Ative o core e eleve lentamente um braço para o ombro, mantendo o cotovelo levemente flexionado.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente o braço de volta à posição inicial."
    ]
  },
  {
    "id": "1333",
    "name": "Extensão lombar com braços estendidos na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Coloque a bola suíça no chão e deite-se de bruços sobre ele, com os quadris apoiadas na bola e os pés contra uma parede para ter mais estabilidade.",
      "Estenda os braços retos para a frente, com as palmas voltadas para baixo.",
      "Ative o core e eleve lentamente a parte superior do corpo da bola, mantendo as costas retas e o pescoço alinhado com a coluna.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1334",
    "name": "Extensão lombar com mãos atrás da cabeça na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Coloque a bola suíça no chão e deite-se de bruços sobre ele com os quadris apoiadas na bola.",
      "Coloque os pés contra uma parede ou outra superfície estável para se apoiar.",
      "Cruze os braços por trás da cabeça, com as mãos tocando a parte de atrás da cabeça.",
      "Ative o core e eleve lentamente a parte superior do corpo da bola, estendendo as costas até que o corpo fique alinhado desde a cabeça até os quadris."
    ]
  },
  {
    "id": "1335",
    "name": "Extensão lombar com joelhos fora do chão na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Coloque a bola suíça no chão e deite-se de bruços sobre ele, com os quadris apoiadas na bola e os pés contra uma parede para ter mais estabilidade.",
      "Coloque as mãos por trás da cabeça ou cruzedas sobre o peito.",
      "Ative o core e eleve lentamente a parte superior do corpo da bola, estendendo as costas até que o corpo fique alinhado da cabeça aos calcanhares.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1336",
    "name": "Extensão lombar com rotação na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Comece deitado de bruços sobre a bola suíça, com os quadris apoiadas na bola e os pés firmemente apoiados no chão.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative o core e eleve lentamente a parte superior do corpo da bola, estendendo as costas até que o corpo fique alinhado da cabeça aos calcanhares.",
      "Faça uma breve pausa no ponto mais alto, depois gire lentamente o tronco para um lado, mantendo os quadris e as pernas estáveis."
    ]
  },
  {
    "id": "1744",
    "name": "Mergulho na bola suíça",
    "bodyPart": "braços",
    "equipment": "bola suíça",
    "target": "tríceps",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Coloque as mãos sobre a bola aproxime às quadris, com os dedos apontando para a frente.",
      "Ative o tríceps e empurre com as mãos para levantar o corpo da bola, endereçando os braços.",
      "Abaixe o corpo flexionando os cotovelos, mantendo-os próximos em relação ao tronco."
    ]
  },
  {
    "id": "1559",
    "name": "Alongamento quadril flexor na bola suíça",
    "bodyPart": "pernas",
    "equipment": "bola suíça",
    "target": "glúteos",
    "instructions": [
      "Coloque a bola suíça no chão e ajoelhe-se em frente a ele.",
      "Coloque o pé direito sobre a bola suíça, com o joelho flexionado em um ângulo de 90 graus.",
      "Estenda a perna esquerda para trás, mantendo-a reta.",
      "Incline-se para a frente, empurrando os quadris para a bola suíça, até sentir um alongamento no flexor do quadril direito."
    ]
  },
  {
    "id": "1338",
    "name": "Hug na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure a bola suíça com as duas mãos, abraçando cerca do peito.",
      "Ative os músculos do core incline-se para trás lentamente para trás, mantendo as costas retas e os pés apoiados no chão.",
      "Continue reclinándote para trás até sentir um alongamento nos músculos das costas."
    ]
  },
  {
    "id": "1339",
    "name": "Alongamento de dorsal na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "dorsais",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure um halter com uma mão e estenda o braço reto acima da cabeça.",
      "Incline-se lentamente para o outro lado, sentindo um alongamento no músculo dorsal.",
      "Mantenha o alongamento durante 20-30 segundos, depois volte à posição inicial."
    ]
  },
  {
    "id": "1341",
    "name": "Alongamento lombar em pirâmide na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "dorsais",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Caminhe lentamente para a frente com os pés, fazendo girar a bola por as costas até que sua zona lombar fique apoiada sobre a bola.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative o core abaixe lentamente a parte superior do corpo em direção ao chão, permitindo que sua zona lombar se estique sobre a bola."
    ]
  },
  {
    "id": "1342",
    "name": "Alongamento lateral de dorsal deitado na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "dorsais",
    "instructions": [
      "Deite-se de lado com as pernas estendidas e a cabeça apoiada sobre a bola suíça.",
      "Coloque o braço de acima sobre a bola para manter a estabilidade.",
      "Estenda o braço de acima da cabeça e permite que sua tronco gire ligeiramente.",
      "Sente-se o alongamento nos músculos dorsais do lado do corpo."
    ]
  },
  {
    "id": "1382",
    "name": "Elevação de panturrilhas na parede com halteres",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com as costas contra uma parede coloque uma bola suíça entre sua zona lombar e a parede.",
      "Coloque os pés afastados na largura dos ombros, com a ponta dos pés para a frente.",
      "Segure um halter em cada mão, com os braços estendidos aos lados.",
      "Eleve os calcanhares do chão, levando o peso do corpo para a ponta dos pés."
    ]
  },
  {
    "id": "3241",
    "name": "Elevação de panturrilhas na parede com bola de tênis entre os tornozelos com halteres",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé de frente para uma parede com os pés afastados na largura dos ombros.",
      "Coloque uma bola suíça entre a parede sua zona lombar.",
      "Segure um halter em cada mão, com os braços estendidos aos lados.",
      "Coloque uma pelota de tênis entre os tornozelos."
    ]
  },
  {
    "id": "3240",
    "name": "Elevação de panturrilhas na parede com bola de tênis entre os joelhos com halteres",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com as costas contra uma parede coloque uma bola suíça entre sua zona lombar e a parede.",
      "Coloque os pés afastados na largura dos ombros e ligeiramente por adiante de você.",
      "Segure um halter em cada mão, com os braços estendidos aos lados.",
      "Coloque uma pelota de tênis entre os joelhos."
    ]
  },
  {
    "id": "1416",
    "name": "Unilateral de bruços parte inferior do corpo rotação na bola suíça",
    "bodyPart": "pernas",
    "equipment": "bola suíça",
    "target": "glúteos",
    "instructions": [
      "Deite-se de bruços sobre a bola suíça com os quadris apoiadas na bola e as pernas estendidas retas atrás do corpo.",
      "Coloque as mãos no chão à sua frente para maior apoio.",
      "Ative os glúteos e o abdômen para estabilizar o corpo.",
      "Eleve lentamente uma perna do chão, mantendo-a reta e paralela ao chão."
    ]
  },
  {
    "id": "1417",
    "name": "Flexão unilateral de joelho com chute diagonal na bola suíça",
    "bodyPart": "pernas",
    "equipment": "bola suíça",
    "target": "glúteos",
    "instructions": [
      "Comece deitado de costas com as pernas estendidas e os calcanhares apoiados sobre a bola suíça.",
      "Coloque os braços ao lado do corpo para manter o equilíbrio.",
      "Ative os glúteos e o abdômen para levantar os quadris do chão, formando uma linha reta desde os ombros até os calcanhares.",
      "Flexione o joelho direito e leve em direção ao peito, mantendo a perna esquerda estendida e o pé em flexão."
    ]
  },
  {
    "id": "1296",
    "name": "Flexão de braços carpada na bola suíça",
    "bodyPart": "peito",
    "equipment": "bola suíça",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de flexão de braços com as mãos no chão e as espinillas apoiadas sobre a bola suíça.",
      "Ative o core e eleve os quadris para o teto, fazendo girar a bola para as mãos.",
      "Mantenha as pernas retas e o corpo em posição carpada, formando um V invertido.",
      "Flexione os cotovelos e abaixe a parte superior do corpo em direção ao chão, mantendo a cabeça alinhada com as mãos."
    ]
  },
  {
    "id": "1343",
    "name": "Elevação de pernas de bruços na bola suíça",
    "bodyPart": "costas",
    "equipment": "bola suíça",
    "target": "eretores da coluna",
    "instructions": [
      "Deite-se de bruços sobre uma colchonete com as pernas estendidas e os dedos dos pés apoiados sobre a bola suíça.",
      "Coloque as mãos no chão, afastadas na largura dos ombros, e ative o abdômen.",
      "Mantenha as pernas retas, levante-as lentamente do chão, usando a zona lombar e os glúteos para elevá-las tão alto como seja possível.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1560",
    "name": "Alongamento dos posteriores das coxas sentado na bola suíça",
    "bodyPart": "pernas",
    "equipment": "bola suíça",
    "target": "posteriores das coxas",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Gire a bola lentamente para a frente, caminhando com os pés para fora até que a parte superior das costas fiquem apoiadas sobre a bola e as pernas fiquem estendidas retas à sua frente.",
      "Coloque as mãos nos quadris para maior apoio.",
      "Ative o core abaixe lentamente a parte superior do corpo em direção ao chão, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "1745",
    "name": "Alongamento de tríceps sentado na bola suíça",
    "bodyPart": "braços",
    "equipment": "bola suíça",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure um halter com uma mão e estenda o braço reto acima da cabeça.",
      "Flexione o cotovelo e abaixe o halter por trás da cabeça, mantendo o braço próxima à orelha.",
      "Mantenha o alongamento durante uns segundos, depois retorne à posição inicial."
    ]
  },
  {
    "id": "1746",
    "name": "Extensão de tríceps deitado de costas com halteres",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um halter com as duas mãos e estenda os braços retos para o teto.",
      "Abaixe lentamente o halter por trás da cabeça, mantendo os cotovelos próximas às orelhas.",
      "Faça uma pausa por alguns segundos, depois suba o halter de volta à posição inicial."
    ]
  },
  {
    "id": "1747",
    "name": "Tríceps francês com barra W na bola suíça",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Sente-se sobre uma bola suíça e segure uma barra W com pegada pronada.",
      "Estenda os braços retos para cima, mantendo os cotovelos próxima à cabeça.",
      "Abaixe lentamente a barra por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "3010",
    "name": "Pullover deitado com barra W e braços flexionados",
    "bodyPart": "costas",
    "equipment": "barra W",
    "target": "dorsais",
    "instructions": [
      "Deite-se de costas em um banco com a cabeça em um extremo e os pés no chão.",
      "Segure a barra W com pegada pronada (palmas para fora) e as mãos afastadas na largura dos ombros.",
      "Estenda os braços retos acima do peito, mantendo uma leve flexão nos cotovelos.",
      "Abaixe a barra descrevendo um arco por trás da cabeça, mantendo a ligeira flexão nos cotovelos."
    ]
  },
  {
    "id": "1748",
    "name": "Extensão de tríceps deitado com barra W e pegada fechada atrás da cabeça",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os pés apoiados no chão e a cabeça na extremidade do banco.",
      "Segure a barra W com pegada fechada, palmas voltadas para cima, e estenda os braços retos acima do peito.",
      "Mantenha os braços fixos, abaixe lentamente a barra por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa breve depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "1344",
    "name": "Remada curvada com pegada invertida ez barra com barra W",
    "bodyPart": "costas",
    "equipment": "barra W",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra W com pegada supinada, palmas voltadas para cima, e as mãos afastadas na largura dos ombros.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido, até que o tronco fique quase paralelo ao chão.",
      "Puxe a barra W para a parte baixa do peito, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "1682",
    "name": "Rosca concentrada ez barra sentado com pegada fechada com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure uma barra W com pegada supinada.",
      "Apoie o cotovelo na parte interna da coxa, logo acima do joelho.",
      "Suba a barra flexionando o braço para o ombro mantendo o braço superior imóvel.",
      "Contraia os bíceps no ponto mais alto do movimento, depois abaixe lentamente a barra à posição inicial."
    ]
  },
  {
    "id": "1749",
    "name": "Tríceps francês em pé com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada pronada.",
      "Eleve a barra acima da cabeça, estendendo completamente os braços.",
      "Mantenha os braços próxima à cabeça, abaixe lentamente a barra por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa por alguns segundos e depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0445",
    "name": "Desenvolvimento antigravidade com barra W",
    "bodyPart": "ombros",
    "equipment": "barra W",
    "target": "deltoides",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e sustentando a barra W com pegada pronada.",
      "Eleve a barra até a altura dos ombros, mantendo os cotovelos levemente flexionados e as palmas voltadas para a frente.",
      "Empurre a barra acima da cabeça, estendendo completamente os braços.",
      "Abaixe a barra de volta à altura dos ombros e repita o número de repetições desejado."
    ]
  },
  {
    "id": "1627",
    "name": "Rosca Scott com pegada fechada com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott e coloque os braços sobre o apoio acolchoado, segurando a barra W com pegada supinada.",
      "Apoie os tríceps sobre o apoio acolchoado e estenda os braços por completo, mantendo as costas retas.",
      "Suba lentamente a barra para os ombros, contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "0446",
    "name": "Rosca com pegada fechada com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o movimento.",
      "Suba a barra para os ombros, contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0447",
    "name": "Rosca com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada, palmas voltadas para cima.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o movimento.",
      "Expire enquanto eleva a barra para os ombros, contraindo os bíceps.",
      "Faça uma pausa breve na parte mais alta, depois inspire enquanto abaixa lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0448",
    "name": "Supino declinado com pegada fechada e barra W em direção ao rosto",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os pés.",
      "Segure a barra W com pegada fechada, palmas uma em frente à outra.",
      "Estenda os braços retos acima do peito, mantendo os cotovelos próximos ao corpo.",
      "Abaixe a barra em direção à testa, flexionando os cotovelos."
    ]
  },
  {
    "id": "2186",
    "name": "Extensão de tríceps declinado com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Deite-se em um banco declinado com a cabeça mais baixa que os pés e os pés presos.",
      "Segure a barra W com pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Estenda completamente os braços, mantendo os cotovelos próxima à cabeça.",
      "Abaixe a barra lentamente para a frente, flexionando os cotovelos."
    ]
  },
  {
    "id": "0449",
    "name": "Extensão de tríceps inclinado com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Sente-se no banco com as costas apoiadas no encosto e segure a barra W com pegada pronada.",
      "Estenda completamente os braços acima da cabeça, mantendo os cotovelos próxima à cabeça.",
      "Abaixe a barra por trás da cabeça flexionando os cotovelos, mantendo os braços imóveis."
    ]
  },
  {
    "id": "0450",
    "name": "Supino reto jm com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra W com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Abaixe a barra em direção ao peito, mantendo os cotovelos colados próximos ao corpo.",
      "Empurre a barra de volta à posição inicial, estendendo completamente os braços."
    ]
  },
  {
    "id": "0451",
    "name": "Rosca com pegada invertida com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o exercício.",
      "Suba a barra contraindo os bíceps, enquanto expire.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros."
    ]
  },
  {
    "id": "0452",
    "name": "Rosca Scott com pegada invertida com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco Scott com o peito apoiado no apoio acolchoado e os pés apoiados no chão.",
      "Segure a barra W com pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Apoie os braços no apoio acolchoado, deixando que os antebraços pendurem para baixo.",
      "Mantenha os braços fixos, expire e eleve a barra para os ombros."
    ]
  },
  {
    "id": "1458",
    "name": "Rosca sentada com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Sente-se em um banco com os pés apoiados planos no chão e as costas retas.",
      "Segure a barra W com pegada supinada, palmas voltadas para cima, e as mãos afastadas na largura dos ombros.",
      "Apoie os braços nas coxas, deixando que a barra W pendure à sua frente.",
      "Mantenha os braços imóveis, expire e suba a barra W para os ombros."
    ]
  },
  {
    "id": "0453",
    "name": "Extensão de tríceps sentado com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure a barra W com pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Eleve a barra acima da cabeça, estendendo completamente os braços.",
      "Mantenha os braços imóveis, abaixe a barra por trás da cabeça flexionando os cotovelos."
    ]
  },
  {
    "id": "0454",
    "name": "Rosca spider com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada, palmas voltadas para cima.",
      "Apoie os braços em um banco Scott ou em uma bola suíça, deixando que os cotovelos pendurem para baixo.",
      "Mantenha os braços fixos, expire e eleve a barra para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "1628",
    "name": "Rosca spider com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada, palmas voltadas para cima.",
      "Apoie os braços em um banco Scott ou em uma bola suíça, deixando que os cotovelos pendurem para baixo.",
      "Mantenha os braços fixos, expire e eleve a barra para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "2404",
    "name": "Rosca bíceps ez barra com braço blaster com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada, palmas voltadas para cima.",
      "Coloque os braços contra o suporte de isolamento de braços, mantendo-os imóveis durante todo o exercício.",
      "Mantenha os cotovelos próximos ao corpo, expire e suba a barra para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "2432",
    "name": "Supino com pegada fechada ez barra com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "tríceps",
    "instructions": [
      "Deite-se sobre um banco com os pés apoiados no chão e as costas pressionadas contra o banco.",
      "Segure a barra W com pegada fechada, mãos afastadas na largura dos ombros, palmas voltadas para a frente.",
      "Eleve a barra do suporte segure-a diretamente sobre o peito com os braços completamente estendidos.",
      "Abaixe a barra lentamente em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "2741",
    "name": "Rosca bíceps em pé com pegada aberta com barra W",
    "bodyPart": "braços",
    "equipment": "barra W",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra W com pegada supinada, com as mãos mais afastadas que a altura dos ombros.",
      "Mantenha os cotovelos próximos em relação ao tronco e os braços imóveis durante todo o movimento.",
      "Suba a barra para os ombros contraindo os bíceps.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "2133",
    "name": "Caminhada do Fazendeiro",
    "bodyPart": "pernas",
    "equipment": "halter",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com um halter em cada mão, palmas voltadas para o corpo.",
      "Mantenha as costas retas e os ombros para trás.",
      "Dê passos pequenos e controlados para a frente, mantendo uma postura ereta.",
      "Continue caminhando durante a distância ou o tempo desejado."
    ]
  },
  {
    "id": "0455",
    "name": "Rosca de Dedos",
    "bodyPart": "antebraços",
    "equipment": "barra",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco com os pés apoiados no chão e segure uma barra com uma pegada supinada, com as palmas voltadas para cima.",
      "Apoie os antebraços sobre as coxas, deixando que os punhos pendurem da borda.",
      "Flexione lentamente os dedos para as palmas, contraindo a barra com força.",
      "Mantenha a contração por alguns segundos, depois solte lentamente os dedos até a posição inicial."
    ]
  },
  {
    "id": "3303",
    "name": "Bandeira humana",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece segurando um mastro vertical com as duas mãos, palmas uma em frente à outra, e os braços completamente estendidos.",
      "Ative o core e eleve as pernas do chão, mantendo-as retas.",
      "Usando a força do core da parte superior do corpo, eleve as pernas até que fiquem paralelas ao chão.",
      "Mantenha esta posição o tempo todo que possa, conservando uma linha corporal reta."
    ]
  },
  {
    "id": "0456",
    "name": "Abdominal com flexão de perna e joelho flexionado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Ao mesmo tempo, eleve as pernas do chão, flexionando os joelhos e levando em direção ao peito."
    ]
  },
  {
    "id": "0457",
    "name": "Abdominal flexão perna com braços estendidos",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços retos acima da cabeça.",
      "Contraia o abdômen e eleve a parte superior do corpo do chão enquanto eleva as pernas em direção ao peito.",
      "Estenda as mãos para os dedos dos pés enquanto eleva a parte superior do corpo e as pernas.",
      "Faça uma pausa breve no ponto mais alto e, em seguida, abaixe lentamente a parte superior do corpo e as pernas à posição inicial."
    ]
  },
  {
    "id": "0458",
    "name": "Crucifixo no chão com barra",
    "bodyPart": "peito",
    "equipment": "barra",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Segure uma barra com pegada pronada, braços estendidos retos acima do peito.",
      "Abaixe lentamente a barra para os lados, mantendo uma leve flexão nos cotovelos.",
      "Abaixe a barra até que os braços fiquem paralelos ao chão, sentindo um alongamento no peito."
    ]
  },
  {
    "id": "0459",
    "name": "Chutes Alternados",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e as mãos em relação ao tronco.",
      "Ative o core e eleve as pernas do chão uns 15 centímetros.",
      "Mantenha as pernas retas, alterna levantando uma perna ligeiramente mais alto que a outra.",
      "Continue este movimento de alternado durante o número de repetições desejado."
    ]
  },
  {
    "id": "1472",
    "name": "Salto para a frente",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento.",
      "Balance os braços para trás para gerar impulso.",
      "Salte para a frente de forma explosiva, estendendo os quadris, os joelhos e os tornozelos."
    ]
  },
  {
    "id": "3470",
    "name": "Afundo à frente (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e as mãos nos quadris.",
      "Dê um passo grande para a frente com o pé direito, abaixando o corpo até a posição de afundo.",
      "Flexione o joelho direito até uns 90 graus, mantendo o joelho alinhado com o tornozelo.",
      "Empurre com o pé direito e volte à posição inicial."
    ]
  },
  {
    "id": "3194",
    "name": "Agachamento Frankenstein",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra à frente do corpo com os braços retos.",
      "Mantenha as costas retas, abaixe o corpo flexionando os joelhos e os quadris, como se fosse sentar em uma cadeira.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável.",
      "Faça uma pausa breve depois empurre com os calcanhares para voltar à posição inicial."
    ]
  },
  {
    "id": "2429",
    "name": "Abdominal curto sapo",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve a parte superior do corpo do chão, flexionando o tronco para a frente até que o tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3301",
    "name": "Planche sapo",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de flexão de braços com as mãos afastadas na largura dos ombros e os pés juntos.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas retas.",
      "Enquanto abaixa o corpo, eleve os pés do chão e leve os joelhos em direção ao peito.",
      "Mantenha esta posição durante uns segundos, depois estenda as pernas de novo e empurre-se para cima à posição inicial."
    ]
  },
  {
    "id": "3296",
    "name": "Alavanca frontal",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece pendurado de uma barra fixa com pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Ative o core e leve as escápulas para baixo e atrás.",
      "Flexione os joelhos e leve em direção ao peito.",
      "Ao mesmo tempo, eleve as pernas e estenda-as retas à sua frente, mantendo o corpo paralelo ao chão."
    ]
  },
  {
    "id": "3295",
    "name": "Repetições de alavanca frontal",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Pendure de uma barra fixa com pegada pronada, palmas para fora.",
      "Ative o core e leve as escápulas para baixo e atrás.",
      "Mantenha o corpo reto, eleve as pernas até que fiquem paralelas ao chão.",
      "Mantenha esta posição o tempo todo que possa, tentando chegar a 10-20 segundos."
    ]
  },
  {
    "id": "0464",
    "name": "Prancha frontal com rotação",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de prancha alta com as mãos diretamente embaixo dos ombros e o corpo alinhado da cabeça aos pés.",
      "Ative o core os glúteos para manter uma posição estável.",
      "Gire o tronco para a direita, levantando o braço direito e estendendo para o teto.",
      "Mantenha os quadris e as pernas estáveis enquanto gire."
    ]
  },
  {
    "id": "3315",
    "name": "Maltese completo",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e os braços estendidos retos para os lados.",
      "Incline-se lentamente para a frente, mantendo os braços retos, até que a parte superior do corpo fique paralela ao chão.",
      "Ative o core e mantenha esta posição durante uns segundos.",
      "Retorne à posição inicial empurrando com os pés e voltando a ficar de pé."
    ]
  },
  {
    "id": "3299",
    "name": "Planche completa",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de flexão de braços com as mãos afastadas na largura dos ombros e os dedos apontando para a frente.",
      "Ative o core desloca lentamente o peso para a frente, levantando os pés do chão.",
      "Continue deslocando o peso para a frente até que o corpo fique paralelo ao chão, equilibrando sobre as mãos.",
      "Mantenha esta posição o tempo todo que possa, conservando uma linha corporal reta."
    ]
  },
  {
    "id": "3327",
    "name": "Flexão de braços em planche completa",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de flexão de braços com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Ative o core abaixe o corpo em direção ao chão, mantendo os cotovelos próximos em relação ao tronco.",
      "Enquanto abaixa-se, incline o corpo para a frente eleve os pés do chão, equilibrando sobre as mãos.",
      "Continue baixando o corpo até que o peito fique logo acima do chão."
    ]
  },
  {
    "id": "0466",
    "name": "Barra Fixa no Esterno (Gironda)",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé em frente a uma barra alta com os pés afastados na largura dos ombros.",
      "Estenda os braços para cima e segure a barra com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo reto.",
      "Ative os dorsais e os bíceps para levar o peito para a barra, guiando com o esternón."
    ]
  },
  {
    "id": "3561",
    "name": "Ponte de glúteos march",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Ative os glúteos e eleve os quadris do chão, formando uma linha reta desde os joelhos até os ombros.",
      "Mantenha os quadris elevadas, eleve um pé do chão e leve o joelho em direção ao peito.",
      "Abaixe o pé de novo ao chão e repita o movimento com a outra perna."
    ]
  },
  {
    "id": "3523",
    "name": "Ponte de glúteos com duas pernas no banco (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Sente-se na borda de um banco com as costas apoiadas nele os pés apoiados no chão.",
      "Coloque as mãos no banco junto às quadris para maior apoio.",
      "Ative os glúteos e os posteriores das coxas, depois eleve os quadris do banco até que o corpo forme uma linha reta desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "3193",
    "name": "Elevação glúteo-posterior",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a máquina de extensão de glúteos e posteriores das coxas para que se adapte ao seu corpo.",
      "Coloque-se de bruços na máquina com os tornozelos presos.",
      "Coloque as mãos sobre o peito ou cruze sobre o peito.",
      "Ative os posteriores das coxas e os glúteos para levantar a parte superior do corpo para o teto."
    ]
  },
  {
    "id": "0467",
    "name": "Barra fixa supinada gorila",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure uma barra fixa com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e as palmas para fora.",
      "Ative o core puxe o corpo para a barra, levando o queixo acima da barra."
    ]
  },
  {
    "id": "0469",
    "name": "Abdominal curto para virilha",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve as pernas do chão, levando os joelhos em direção ao peito.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1383",
    "name": "Elevação de panturrilhas hack na máquina de trenó",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina de trenó a um peso adequado.",
      "Fique de pé sobre a máquina de trenó com a ponta dos pés na plataforma e os calcanhares pendurando.",
      "Segure das alças para manter o equilíbrio.",
      "Eleve os calcanhares o máximo possível empurrando com a ponta dos pés."
    ]
  },
  {
    "id": "1384",
    "name": "Elevação de panturrilhas hack unilateral na máquina de trenó",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina de trenó a um peso adequado.",
      "Fique de pé sobre a máquina de trenó com um pé, mantendo o outro pé levantado do chão.",
      "Segure das alças para manter o equilíbrio.",
      "Eleve o calcanhar o máximo possível, elevando o corpo sobre a ponta do pé."
    ]
  },
  {
    "id": "3221",
    "name": "Meia flexão de joelhos (masculino)",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo como se se fosse sentar em uma cadeira.",
      "Mantenha o peito erguido e o peso nos calcanhares.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "3202",
    "name": "Meio abdominal (masculino)",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1511",
    "name": "Alongamento de Isquiotibiais",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Dê um passo adiante com o pé direito e mova o peso para a perna direita.",
      "Mantenha as costas retas, incline-se lentamente para a frente a partir dos quadris, atingindo o pé direito com as duas mãos.",
      "Mantenha o alongamento durante 20-30 segundos, depois volte à posição inicial."
    ]
  },
  {
    "id": "2139",
    "name": "Bicicleta com apoio das mãos",
    "bodyPart": "peito",
    "equipment": "ergômetro de braços",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e a posição do guidão a um nível confortável.",
      "Sente-se no ergómetro com as costas retas e os pés sobre os pedais.",
      "Segure as alças com as mãos e coloque os braços em um ângulo de 90 graus.",
      "Comece a pedalar com as mãos, empurrando e puxando as alças com um movimento controlado."
    ]
  },
  {
    "id": "3218",
    "name": "Toque nos pés circular com mãos unidas (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e as mãos entrelazadas à frente do peito.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Abaixe as mãos para os dedos dos pés com um movimento circular, chegando tão longe como possa sem forçar.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "3215",
    "name": "Toque nos pés circular com mãos unidas invertidas (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços estendidos para os lados.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e os joelhos levemente flexionados.",
      "Estenda as mãos para baixo e entrelázalas por trás das pernas.",
      "Suba lentamente as mãos em um movimento circular acima da cabeça, mantendo as pernas retas."
    ]
  },
  {
    "id": "3302",
    "name": "Parada de mãos",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Encontre um espaço aberto com suficiente espaço para fazer um parada de mãos.",
      "Coloque as mãos no chão afastadas na largura dos ombros, com os dedos apontando para a frente.",
      "Leve as pernas para a parede, usando o core e os ombros para manter o equilíbrio.",
      "Uma vez em posição de parada de mãos, ative os tríceps para sustentar o peso corporal."
    ]
  },
  {
    "id": "0471",
    "name": "Flexões em parada de mãos",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Fique de costas para uma parede, de pé a alguns passos de distância.",
      "Coloque as mãos no chão afastadas na largura dos ombros e impulsione os pés em direção à parede, chegando a uma posição de parada de mãos.",
      "Flexione os cotovelos e abaixe a cabeça em direção ao chão, mantendo o corpo alinhado.",
      "Empurre com as mãos e estenda os braços para voltar à posição inicial."
    ]
  },
  {
    "id": "1764",
    "name": "Elevação pélvica suspenso perna",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve as pernas flexionando os quadris e os joelhos até que as coxas fiquem paralelas ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0472",
    "name": "Elevação de Pernas na Barra",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve as pernas à frente, mantendo-as retas.",
      "Continue levantando até que as pernas estejam paralelas ao chão ou o mais alto que conseguir confortavelmente.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1761",
    "name": "Elevação de joelhos suspensa oblíqua",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve os joelhos em direção ao peito, girando o tronco para um lado ao fazer isso.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial.",
      "Repita para o outro lado, girando o tronco na direção oposta."
    ]
  },
  {
    "id": "0473",
    "name": "Elevação carpada suspensa",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve as pernas para a barra, mantendo-as retas.",
      "Continue levantando até que o corpo forme um 'V', com as pernas paralelas ao chão.",
      "Mantenha a posição por alguns segundos, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0474",
    "name": "Elevação pélvica suspenso com pernas estendidas",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve as pernas para a frente até que fiquem paralelas ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0475",
    "name": "Elevação de pernas estendidas suspenso",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve as pernas à frente, mantendo-as retas.",
      "Continue levantando até que as pernas estejam paralelas ao chão ou o mais alto que conseguir confortavelmente.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0476",
    "name": "Elevação pélvica suspensa com perna estendida e rotação",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as pernas retas.",
      "Ative o core e eleve as pernas em direção ao peito, mantendo-as retas.",
      "Quando as pernas fiquem paralelas ao chão, gire os quadris para um lado, levando as pernas para esse lado.",
      "Faça uma pausa breve depois volte à posição inicial."
    ]
  },
  {
    "id": "3636",
    "name": "Elevação de joelho alto contra a parede",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé de frente para uma parede com os pés separados à altura dos quadris.",
      "Coloque as mãos na parede para maior apoio.",
      "Ative o core e eleve o joelho direito em direção ao peito, mantendo o pé esquerdo no chão.",
      "Muda rapidamente de perna, levando o joelho esquerdo em direção ao peito e baixando o pé direito de novo."
    ]
  },
  {
    "id": "0484",
    "name": "Elevação pélvica com joelho flexionado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos aos lados, com as palmas voltadas para baixo.",
      "Ative o core os glúteos, depois eleve os quadris do chão até que o corpo forme uma linha reta desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "1418",
    "name": "Joelhos abraçados ao peito",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento.",
      "Ao ficar em posição agachada, leve os joelhos em direção ao peito e abrace as pernas com os braços.",
      "Mantenha esta posição por alguns segundos, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "3234",
    "name": "Crucifixo com halteres",
    "bodyPart": "peito",
    "equipment": "halter",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas em um banco com um halter em cada mão, com as palmas voltadas uma para a outra.",
      "Estenda os braços retos acima do peito, com uma leve flexão nos cotovelos.",
      "Mantenha uma leve flexão nos cotovelos, abaixe os halteres para os lados descrevendo um amplo arco até sentir um alongamento no peito.",
      "Faça uma pausa por alguns segundos, depois inverta o movimento e leve os halteres de novo para cima até a posição inicial."
    ]
  },
  {
    "id": "0489",
    "name": "Hiperextensão lombar",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Ajuste o banco de hiperextensões para que a parte superior das coxas fique apoiada no apoio acolchoado e os pés fiquem presos.",
      "Cruze os braços sobre o peito ou coloque as mãos por trás da cabeça.",
      "Abaixe a parte superior do corpo em direção ao chão mantendo as costas retas.",
      "Faça uma pausa breve na parte baixa, depois eleve a parte superior do corpo até que fique alinhada com as pernas."
    ]
  },
  {
    "id": "0488",
    "name": "Hiperextensão lombar no banco",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Ajuste o banco de hiperextensões para que os quadris fiquem apoiados comodamente no apoio acolchoado e os pés fiquem presos.",
      "Cruze os braços sobre o peito ou coloque as mãos por trás da cabeça.",
      "Abaixe lentamente a parte superior do corpo em direção ao chão mantendo as costas retas.",
      "Faça uma pausa breve na parte baixa, depois eleve a parte superior do corpo até que fique alinhada com as pernas."
    ]
  },
  {
    "id": "3289",
    "name": "Mergulho impossível",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Coloque-se entre duas barras paralelas com os braços completamente estendidos e o corpo suspendido no ar.",
      "Flexione os joelhos e cruze os tornozelos.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Faça uma pausa breve, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "1471",
    "name": "Lagarta",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece de pé com os pés separados à altura dos quadris.",
      "Incline-se para a frente a partir da cintura e coloque as mãos no chão à sua frente.",
      "Caminhe com as mãos para a frente até ficar em posição de prancha alta, com o corpo alinhado da cabeça aos pés.",
      "Faça uma pausa breve, depois caminhe com as mãos de volta para os pés, mantendo as pernas o mais retas possível."
    ]
  },
  {
    "id": "3698",
    "name": "Caminhada com as mãos — variação 2",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece de pé com os pés separados à altura dos quadris.",
      "Incline-se para a frente a partir da cintura e coloque as mãos no chão à sua frente.",
      "Caminhe com as mãos para a frente até ficar em posição de prancha alta, com o corpo alinhado da cabeça aos pés.",
      "Mantenha as pernas retas, caminhe com os pés para as mãos, levando os quadris para o teto."
    ]
  },
  {
    "id": "0490",
    "name": "Flexão de braços com pegada fechada inclinado",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Coloque as mãos sobre uma superfície elevada, como um banco ou um degrau, ligeiramente mais afastadas que a altura dos ombros.",
      "Estenda as pernas atrás do corpo, apoiando na ponta dos pés, com o corpo formando uma linha reta da cabeça aos calcanhares.",
      "Abaixe o peito para a superfície elevada flexionando os cotovelos, mantendo-os próximos em relação ao tronco.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0491",
    "name": "Elevação pélvica inclinada com perna estendida",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se em um banco inclinado com as costas apoiadas plana no banco e as pernas estendidas retas à sua frente.",
      "Coloque as mãos aos lados do banco para se apoiar.",
      "Contraia o abdômen e eleve as pernas do banco, elevando-as o mais alto que puder mantendo-as retas.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0492",
    "name": "Salto em Profundidade com Flexão Inclinada",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Encontre uma superfície elevada, como um banco ou um degrau, e coloque as mãos afastadas na largura dos ombros na borda.",
      "Dê um passo para trás com os pés, mantendo o corpo alinhado da cabeça aos calcanhares.",
      "Abaixe o peito para a borda da superfície, flexionando os cotovelos e mantendo o corpo alinhado.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "0493",
    "name": "Flexão Inclinada",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque as mãos sobre uma superfície elevada, como um banco ou um degrau, ligeiramente mais afastadas que a altura dos ombros.",
      "Estenda as pernas atrás do corpo, apoiando na ponta dos pés, formando uma linha reta da cabeça aos calcanhares.",
      "Abaixe o peito para a superfície elevada flexionando os cotovelos, mantendo o corpo alinhado.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "3785",
    "name": "Flexão inclinada no box",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque as mãos na borda de uma caixa ou uma superfície elevada, ligeiramente mais afastadas que a altura dos ombros.",
      "Estenda as pernas atrás do corpo, apoiando na ponta dos pés, formando uma linha reta da cabeça aos calcanhares.",
      "Abaixe o peito para a caixa flexionando os cotovelos, mantendo o corpo alinhado.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0494",
    "name": "Flexão de braços inclinado com pegada invertida",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque as mãos na borda de um banco ou uma superfície elevada, ligeiramente mais afastadas que a altura dos ombros.",
      "Estenda as pernas atrás do corpo, apoiando na ponta dos pés, formando uma linha reta da cabeça aos calcanhares.",
      "Abaixe o peito para o banco flexionando os cotovelos, mantendo-os próximos em relação ao tronco.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "3011",
    "name": "Flexão de braços inclinada escapular",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "serrátil anterior",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Coloque as mãos no banco, ligeiramente mais afastadas que a altura dos ombros.",
      "Coloque os pés no chão, separados à altura dos quadris.",
      "Abaixe o peito para o banco, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "0495",
    "name": "Abdominal inclinado com rotação",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Coloque um banco inclinado a um ângulo de 45 graus.",
      "Deite-se no banco com os pés presos sob os apoios acolchoados para os pés.",
      "Coloque as mãos por trás da cabeça ou cruzedas sobre o peito.",
      "Ative o abdômen e eleve a parte superior do corpo do banco, flexionando o tronco para a frente."
    ]
  },
  {
    "id": "1564",
    "name": "Alongamento Intermediário de Flexores do Quadril e Quadríceps",
    "bodyPart": "pernas",
    "equipment": "corda",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Segure de um objeto estável para maior apoio.",
      "Flexione o joelho direito e leve o pé direito para os glúteos, segurando a corda com a mão direita.",
      "Puxe lentamente o pé direito para os glúteos, sentindo um alongamento no quadríceps direito."
    ]
  },
  {
    "id": "0496",
    "name": "Flexão nórdica assistida com apoio no banco",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de bruços em um banco com os quadris na borda e as pernas estendidas retas atrás do corpo.",
      "Segure do banco para maior apoio.",
      "Mantenha a parte superior do corpo imóvel, flexione os joelhos e flexione as pernas para os glúteos.",
      "Faça uma pausa breve no ponto mais alto e, em seguida, estenda lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "2400",
    "name": "Flexão nórdica assistida na máquina de barra fixa",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a polia para que as correias de tornozelo estejam no ajuste mais baixo.",
      "Deite-se de bruços no banco com as pernas estendidas e as correias de tornozelo segures aos pés.",
      "Segure das alças do banco para manter a estabilidade.",
      "Flexione os joelhos e flexione as pernas para os glúteos, contraindo os posteriores das coxas."
    ]
  },
  {
    "id": "0499",
    "name": "Remada Invertida",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque uma barra à altura da cintura ou usa um treinador de suspensão.",
      "Fique de pé em frente à barra ou ao treinador de suspensão, com os pés afastados na largura dos ombros.",
      "Segure a barra ou as alças com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Incline-se para trás, mantendo o corpo reto e os calcanhares no chão."
    ]
  },
  {
    "id": "2300",
    "name": "Remada invertida com joelhos flexionados",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque uma barra à altura da cintura e deite-se embaixo dela.",
      "Segure a barra com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Coloque o corpo de maneira que os calcanhares fiquem no chão e o corpo esteja reto.",
      "Puxe o peito para cima em direção à barra contraindo as escápulas entre si."
    ]
  },
  {
    "id": "2298",
    "name": "Remada invertida no banco",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um banco a uma altura que permita que o corpo pendure livremente embaixo dele.",
      "Deite-se de costas no chão com a cabeça para o banco.",
      "Estenda os braços para cima e segure o banco com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Coloque o corpo de maneira que os calcanhares fiquem no chão e os braços completamente estendidos."
    ]
  },
  {
    "id": "0497",
    "name": "Remada invertida — variação 2",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque uma barra à altura da cintura em uma máquina Smith ou usa um treinador de suspensão.",
      "Fique de pé em frente à barra ou ao treinador de suspensão e pegada-a com pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Caminhe com os pés para a frente, inclinando-se para trás até que o corpo fique em um ligeiro ângulo.",
      "Mantenha o corpo reto e puxe o peito para a barra ou as alças, contraindo as escápulas entre si."
    ]
  },
  {
    "id": "0498",
    "name": "Remada Invertida com Alças",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um treinador de suspensão ou correias à altura do peito.",
      "Fique de pé de frente para o ponto de ancoragem e segure as alças com pegada pronada.",
      "Caminhe com os pés para a frente, inclinando-se para trás até que o corpo fique em ângulo.",
      "Mantenha o corpo reto e ative o core."
    ]
  },
  {
    "id": "1419",
    "name": "Alongamento cruz de ferro",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os braços estendidos para os lados.",
      "Eleve as pernas para o teto, mantendo-as retas.",
      "Abaixe lentamente as pernas para um lado, tentando tocar o solo com os pés.",
      "Mantenha o alongamento durante uns segundos, depois retorne as pernas à posição inicial."
    ]
  },
  {
    "id": "1297",
    "name": "Compressões Isométricas do Peito",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Estenda os braços retos à sua frente, paralelos ao chão, com as palmas uma em frente à outra.",
      "Contraia os músculos do peito com a maior força possível, mantendo os braços retos.",
      "Mantenha esta posição durante uns segundos, concentrando-se em contrair os músculos do peito."
    ]
  },
  {
    "id": "0500",
    "name": "Isométrico Limpador de Para-brisa",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece deitado de costas em um colchonete ou um banco.",
      "Estenda os braços para os lados, perpendiculares ao corpo.",
      "Ative o core e eleve ambas as pernas do chão, mantendo-as próximas e retas.",
      "Abaixe lentamente as pernas para um lado, tentando tocar o solo com os pés mantendo o controle."
    ]
  },
  {
    "id": "0501",
    "name": "Burpee com polichinelo",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros.",
      "Abaixe o corpo a uma posição de agachamento, colocando as mãos no chão à sua frente.",
      "Jogue os pés para trás, aterrissando em posição de flexão de braços.",
      "Realize uma flexão de braços, baixando o peito em direção ao chão e depois empurrando de novo para cima."
    ]
  },
  {
    "id": "3224",
    "name": "Polichinelo com salto (masculino)",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés juntos e os braços em relação ao tronco.",
      "Salte, separando os pés e levantando os braços acima da cabeça.",
      "Ao aterrisser, salte rapidamente de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0507",
    "name": "Abdominal Canivete",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços acima da cabeça.",
      "Ative o core e eleve as pernas e a parte superior do corpo simultaneamente, levando as mãos para os dedos dos pés.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas e a parte superior do corpo de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0508",
    "name": "Abdominal Janda",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "2612",
    "name": "Com salto corda",
    "bodyPart": "cardio",
    "equipment": "corda",
    "target": "sistema cardiovascular",
    "instructions": [
      "Segure as alças da corda de salter com as mãos, palmas voltadas para dentro.",
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Balance a corda acima da cabeça e salte sobre ela quando se acerque aos pés.",
      "Aterrisse suavemente sobre a ponta dos pés e repita o salto quando a sensata volte a passar."
    ]
  },
  {
    "id": "0514",
    "name": "Agachamento com salto",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Salte de forma explosiva desdo chão, estendendo os quadris, os joelhos e os tornozelos.",
      "Enquanto está no ar, leve rapidamente os braços para a frente para manter o equilíbrio."
    ]
  },
  {
    "id": "0513",
    "name": "Agachamento com salto — variação 2",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Salte de forma explosiva, estendendo por completo os quadris e os joelhos.",
      "Aterrisse suavemente sobre a ponta dos pés e de imediato abaixe o corpo de novo a uma posição de agachamento."
    ]
  },
  {
    "id": "0517",
    "name": "Windmill avançado com kettlebell",
    "bodyPart": "abdômen",
    "equipment": "kettlebell",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés ligeiramente para fora.",
      "Segure um kettlebell na mano direita, com o braço estendido acima da cabeça e a palma voltada para a frente.",
      "Gire o pé esquerdo ligeiramente para a direita e mova o peso para a perna esquerda.",
      "Flexione o joelho esquerdo e flexione o quadril, baixando o tronco para o lado esquerdo."
    ]
  },
  {
    "id": "0518",
    "name": "Clean suspenso alternado com kettlebell",
    "bodyPart": "antebraços",
    "equipment": "kettlebell",
    "target": "antebraços",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão com pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Mantenha os kettlebells suspensos à frente do corpo com os braços completamente estendidos.",
      "Em um único movimento fluído, estenda os quadris de forma explosiva, encolha os ombros e puxe os kettlebells para os ombros."
    ]
  },
  {
    "id": "0520",
    "name": "Desenvolvimento alternado com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão à altura dos ombros.",
      "Empurre um kettlebell acima da cabeça, estendendo o braço por completo.",
      "Abaixe kettlebell de novo à altura dos ombros.",
      "Repita com o outro braço."
    ]
  },
  {
    "id": "0519",
    "name": "Supino alternado no chão com kettlebell",
    "bodyPart": "peito",
    "equipment": "kettlebell",
    "target": "peitorais",
    "instructions": [
      "Comece deitado de costas no chão com os joelhos flexionedos e os pés apoiados no chão.",
      "Segure um kettlebell em cada mão, com as palmas para os pés e os braços estendidos retos para o teto.",
      "Abaixe um kettlebell para o ombro mantendo a outro kettlebell estendida reta para cima.",
      "Empurre kettlebell baixada de volta para a posição inicial enquanto abaixe a outro kettlebell para o ombro."
    ]
  },
  {
    "id": "0521",
    "name": "Remada renegada alternada com kettlebell",
    "bodyPart": "costas",
    "equipment": "kettlebell",
    "target": "parte superior das costas",
    "instructions": [
      "Comece em posição de prancha alta com as mãos segurando kettlebells e os pés separados à altura dos quadris.",
      "Ative o core e mantenha o corpo alinhado da cabeça aos calcanhares.",
      "Puxe um kettlebell em direção ao peito, mantendo o cotovelo próximo ao corpo.",
      "Abaixe kettlebell de volta à posição inicial e repita com o outro braço."
    ]
  },
  {
    "id": "0522",
    "name": "Remada alternado com kettlebell",
    "bodyPart": "costas",
    "equipment": "kettlebell",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure um kettlebell em cada mão com as palmas voltadas para o corpo.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Puxe um kettlebell em direção ao peito, mantendo o cotovelo próximo ao corpo e contraindo as escápulas entre si.",
      "Abaixe kettlebell de volta à posição inicial e repita com o outro braço."
    ]
  },
  {
    "id": "0523",
    "name": "Desenvolvimento Arnold com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão à altura dos ombros com as palmas voltadas para você.",
      "Ative o core e empurre os kettlebells acima da cabeça, girando as palmas voltadas para a frente enquanto estende os braços.",
      "Faça uma pausa no ponto mais alto do movimento, depois abaixe lentamente kettlebells de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0524",
    "name": "Desenvolvimento inclinado com kettlebell",
    "bodyPart": "abdômen",
    "equipment": "kettlebell",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell na mano direita.",
      "Flexione ligeiramente os joelhos e empurre kettlebell acima da cabeça com o braço direito, mantendo o cotovelo bloqueado.",
      "Gire o tronco para a esquerda, movando seu peso ao pé esquerdo.",
      "Flexione o joelho esquerdo e abaixe o tronco em direção ao chão, mantendo o braço direito estendido acima da cabeça."
    ]
  },
  {
    "id": "0525",
    "name": "Clean com base para cima a partir da posição suspensa com kettlebell",
    "bodyPart": "braços",
    "equipment": "kettlebell",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão em pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Deixe que o kettlebell pendure entre as pernas, com o braço completamente estendido.",
      "Em um único movimento fluído, estenda de forma explosiva os quadris e os joelhos enquanto puxe o kettlebell para o ombro."
    ]
  },
  {
    "id": "0526",
    "name": "Clean suspenso duplo alternado com kettlebells",
    "bodyPart": "braços",
    "equipment": "kettlebell",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão com pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Mantenha os kettlebells suspensos retas à frente do corpo.",
      "Em um único movimento fluído, estenda de forma explosiva os quadris e os joelhos enquanto encolha os ombros."
    ]
  },
  {
    "id": "0527",
    "name": "Jerk duplo com kettlebells",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão à altura dos ombros.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Pressione kettlebells acima da cabeça, estendendo os braços por completo.",
      "Flexione os joelhos e abaixe rapidamente a uma agachamento parcial."
    ]
  },
  {
    "id": "0528",
    "name": "Push press duplo com kettlebells",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão à altura do ombro.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Inicia o movimento estendendo de forma explosiva os quadris, os joelhos e os tornozelos, impulsionando kettlebells acima da cabeça.",
      "Quando os kettlebells cheguem acima, as pressione completamente acima da cabeça, bloqueando os braços."
    ]
  },
  {
    "id": "0529",
    "name": "Snatch duplo com kettlebells",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão com o braço estendido à frente das coxas.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Em um único movimento explosivo, estenda os quadris, os joelhos e os tornozelos, e simultaneamente puxe os kettlebells para os ombros.",
      "Quando os kettlebells cheguem à altura do ombro, gire os punhos e leve os kettlebells acima da cabeça, estendendo os braços por completo."
    ]
  },
  {
    "id": "0530",
    "name": "Windmill duplo com kettlebells",
    "bodyPart": "abdômen",
    "equipment": "kettlebell",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell na mano direita.",
      "Estenda o braço direito acima da cabeça, mantendo a mirada em kettlebell.",
      "Gire o pé esquerdo 45 graus para a esquerda e o pé direito 90 graus para a direita.",
      "Flexione a cintura para a esquerda, mantendo o braço direito estendido acima da cabeça."
    ]
  },
  {
    "id": "0531",
    "name": "Supino unilateral no chão com amplitude estendida e kettlebell",
    "bodyPart": "peito",
    "equipment": "kettlebell",
    "target": "peitorais",
    "instructions": [
      "Comece deitado de costas no chão com os joelhos flexionedos e os pés apoiados no chão.",
      "Segure um kettlebell com uma mão, com a palma para os pés.",
      "Estenda o braço reto para o teto, mantendo o cotovelo bloqueado e o punho reta.",
      "Abaixe lentamente kettlebell de volta à posição inicial, mantendo o controle durante todo o movimento."
    ]
  },
  {
    "id": "0532",
    "name": "Figura 8 com Kettlebell",
    "bodyPart": "abdômen",
    "equipment": "kettlebell",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Passa kettlebell entre as pernas, mudando-a de mão ao chegar por trás das pernas.",
      "Quando o kettlebell volte para a frente, a passe à outra mão entre as pernas."
    ]
  },
  {
    "id": "0533",
    "name": "Agachamento frontal com kettlebell",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure kettlebell com as duas mãos à frente do peito, próximos ao corpo.",
      "Ative o core e mantenha o peito erguido enquanto abaixe os quadris para baixo e para trás, como se se sentasse em uma cadeira.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0534",
    "name": "Agachamento goblet com kettlebell",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell cerca do peito com as duas mãos.",
      "Mantenha o peito erguido e o core ativado, abaixe o corpo a uma posição de agachamento flexionando os joelhos e os quadris.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre com os calcanhares para regressar à posição inicial."
    ]
  },
  {
    "id": "0535",
    "name": "Clean Suspenso com Kettlebell",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "posteriores das coxas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell à frente das coxas.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Abaixe kettlebell em direção ao chão, deixando que se balance entre as pernas.",
      "Estenda rapidamente os quadris e os joelhos, usando o impulso para fazer que o kettlebell suba até a altura do ombro."
    ]
  },
  {
    "id": "0536",
    "name": "Afundo com passagem do kettlebell entre as pernas",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell à frente do peito com as duas mãos.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo.",
      "Enquanto avança no afundo, passe o kettlebell por embaixo da coxa direita e transfira para a mão esquerda.",
      "Empurre com o pé direito para voltar à posição inicial, enquanto passas kettlebell de volta a a mão direita simultaneamente."
    ]
  },
  {
    "id": "0537",
    "name": "Clean e jerk unilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão em pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se a partir dos quadris, baixando kettlebell entre as pernas.",
      "Estenda de forma explosiva os quadris, os joelhos e os tornozelos, usando o impulso para fazer que o kettlebell suba até a altura do ombro.",
      "Quando o kettlebell chegue à altura do ombro, gire o punho e leve a mão reta para cima, bloqueando o braço acima da cabeça."
    ]
  },
  {
    "id": "1298",
    "name": "Supino no chão unilateral com kettlebell",
    "bodyPart": "peito",
    "equipment": "kettlebell",
    "target": "peitorais",
    "instructions": [
      "Deite-se de costas no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Segure kettlebell com uma mão com a palma para os pés e o braço estendido reto para o teto.",
      "Abaixe lentamente kettlebell em direção ao peito flexionando o cotovelo, mantendo o braço superior próximos ao corpo.",
      "Faça uma pausa quando o kettlebell esteja justo em cima do peito, depois a empurre de volta para cima à posição inicial estendendo o cotovelo."
    ]
  },
  {
    "id": "0538",
    "name": "Jerk unilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão na altura do ombro.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Pressione kettlebell acima da cabeça em linha reta, estendendo o braço por completo.",
      "Enquanto pressione kettlebell acima da cabeça, flexione os joelhos simultaneamente estique-as rapidamente para gerar impulso."
    ]
  },
  {
    "id": "0539",
    "name": "Desenvolvimento militar unilateral para a lateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão na altura do ombro.",
      "Ative o core e mantenha as costas retas.",
      "Pressione kettlebell acima da cabeça, estendendo o braço por completo.",
      "Faça uma pausa breve no alto, depois abaixe lentamente kettlebell de volta à posição inicial."
    ]
  },
  {
    "id": "0540",
    "name": "Push press unilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão na altura do ombro.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Pressione kettlebell acima da cabeça estendendo o braço e estendendo por completo as pernas.",
      "Abaixe kettlebell de volta à posição inicial flexionando os joelhos e retornando kettlebell ao ombro."
    ]
  },
  {
    "id": "0541",
    "name": "Remada unilateral com kettlebell",
    "bodyPart": "costas",
    "equipment": "kettlebell",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão em pegada pronada.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Puxe o kettlebell em direção ao peito, mantendo o cotovelo próximo ao corpo e aproximando as escápulas.",
      "Faça uma pausa breve no alto, depois abaixe lentamente kettlebell de volta à posição inicial."
    ]
  },
  {
    "id": "0542",
    "name": "Snatch unilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão entre as pernas.",
      "Flexione ligeiramente os joelhos e incline-se a partir dos quadris, baixando kettlebell em direção ao chão.",
      "Estenda de forma explosiva os quadris e os joelhos, usando o impulso para fazer que o kettlebell suba para o ombro.",
      "Quando o kettlebell chegue à altura do ombro, gire a mão e a lance reta acima da cabeça, estendendo o braço por completo."
    ]
  },
  {
    "id": "0543",
    "name": "Desenvolvimento unilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell com uma mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Eleve kettlebell até a altura do ombro, mantendo o cotovelo próximo ao corpo.",
      "Estenda o braço por completo acima da cabeça, endereçando o cotovelo."
    ]
  },
  {
    "id": "0544",
    "name": "Agachamento Pistol com Kettlebell",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell à frente do peito com as duas mãos.",
      "Eleve o pé esquerdo do chão e estenda-o para a frente, mantendo-o paralelo ao chão.",
      "Abaixe lentamente o corpo a uma posição de agachamento, mantendo o pé direito plano no chão e a perna esquerda estendida.",
      "Faça uma pausa breve na parte baixa da agachamento, depois empurre com o calcanhar direito para voltar à posição inicial."
    ]
  },
  {
    "id": "0545",
    "name": "Flexão de braços pliométrico com kettlebell",
    "bodyPart": "peito",
    "equipment": "kettlebell",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos sobre kettlebells, afastadas na largura dos ombros.",
      "Abaixe o peito em direção ao chão, mantendo os cotovelos próximos ao corpo.",
      "Empurre com as mãos de forma explosiva, levantando-as de kettlebells e estendendo os braços por completo.",
      "Aterrisse suavemente sobre kettlebells e abaixe o peito de imediato para a seguinte repetição."
    ]
  },
  {
    "id": "0546",
    "name": "Desenvolvimento sentado com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um kettlebell em cada mão à altura do ombro, com as palmas voltadas para a frente.",
      "Pressione kettlebells acima da cabeça, estendendo os braços por completo.",
      "Abaixe kettlebells de volta à altura do ombro."
    ]
  },
  {
    "id": "1438",
    "name": "Desenvolvimento militar sentado bilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Sente-se em um banco com as costas retas e os pés apoiados no chão.",
      "Segure um kettlebell em cada mão à altura do ombro com as palmas voltadas para a frente.",
      "Pressione kettlebells acima da cabeça estendendo os braços por completo.",
      "Faça uma pausa breve no alto, depois abaixe lentamente kettlebells de volta à altura do ombro."
    ]
  },
  {
    "id": "0547",
    "name": "Desenvolvimento alternado com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão à altura dos ombros.",
      "Pressione um kettlebell acima da cabeça mantendo a outro kettlebell à altura do ombro.",
      "Abaixe kettlebell pressioneda de volta à altura do ombro enquanto pressione simultaneamente a outro kettlebell acima da cabeça.",
      "Continue alternando o movimento de pressão, criando um movimento similar a um balancín."
    ]
  },
  {
    "id": "0548",
    "name": "Puxada Alta Sumô com Kettlebell",
    "bodyPart": "costas",
    "equipment": "kettlebell",
    "target": "trapézios",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés para fora.",
      "Segure um kettlebell com as duas mãos à frente do corpo, com os braços estendidos para baixo.",
      "Flexione os joelhos e abaixe os quadris até uma posição de agachamento, mantendo as costas retas.",
      "Empurre com os calcanhares e estenda de forma explosiva os quadris e os joelhos, puxando o kettlebell em direção ao queixo."
    ]
  },
  {
    "id": "0549",
    "name": "Balanço com kettlebell",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Segure kettlebell com as duas mãos à frente do corpo, com os braços estendidos.",
      "Flexione ligeiramente os joelhos e incline-se a partir dos quadris, empurrando os glúteos para trás.",
      "Leve kettlebell para trás entre as pernas, mantendo os braços retos e as costas planas."
    ]
  },
  {
    "id": "0550",
    "name": "Thruster com Kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, segurando um kettlebell à frente do peito com as duas mãos, com as palmas uma em frente à outra.",
      "Abaixe a uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás, mantendo o peito erguido e as costas retas.",
      "Ao chegar à parte baixa da agachamento, empurre de forma explosiva com os calcanhares para ficar de pé, pressionando simultaneamente kettlebell acima da cabeça.",
      "Trave os braços na parte alta do movimento, estendendo os cotovelos por completo."
    ]
  },
  {
    "id": "0551",
    "name": "Levantada turca com kettlebell (estilo agachamento)",
    "bodyPart": "pernas",
    "equipment": "kettlebell",
    "target": "glúteos",
    "instructions": [
      "Comece deitado de costas com as pernas estendidas e kettlebell sustentada na mão direita, com o braço completamente estendido acima do ombro.",
      "Flexione o joelho direito e coloque o pé direito plano no chão, mantendo a perna esquerda estendida.",
      "Pressionendo com o pé direito, eleve os quadris do chão, chegando a uma posição de ponte.",
      "Deslize a perna esquerda por embaixo do corpo, flexionando o joelho esquerdo e colocando o pé esquerdo plano no chão."
    ]
  },
  {
    "id": "0552",
    "name": "Clean bilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell à frente das coxas com as duas mãos, com as palmas voltadas para você.",
      "Flexione ligeiramente os joelhos e incline-se a partir dos quadris, baixando kettlebell em direção ao chão.",
      "Estenda de forma explosiva os quadris e os joelhos, usando o impulso para levar o kettlebell para os ombros.",
      "Quando o kettlebell chegue à altura do ombro, gire os punhos e a atrape em posição de descanso, com os cotovelos colados ao corpo e o kettlebell apoiada na parte posterior do antebraço."
    ]
  },
  {
    "id": "0553",
    "name": "Desenvolvimento militar bilateral com kettlebell",
    "bodyPart": "ombros",
    "equipment": "kettlebell",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell em cada mão à altura do ombro com as palmas voltadas para a frente.",
      "Ative o core pressione kettlebells acima da cabeça, estendendo os braços por completo.",
      "Faça uma pausa breve no alto, depois abaixe lentamente kettlebells de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1345",
    "name": "Remada bilateral com kettlebell",
    "bodyPart": "costas",
    "equipment": "kettlebell",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure um kettlebell em cada mão com as palmas voltadas para o corpo.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o core ativado.",
      "Puxe os kettlebells em direção ao peito, aproximando as escápulas.",
      "Faça uma pausa breve no alto, depois abaixe lentamente kettlebells de volta à posição inicial."
    ]
  },
  {
    "id": "0554",
    "name": "Windmill com Kettlebell",
    "bodyPart": "abdômen",
    "equipment": "kettlebell",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, segurando um kettlebell na mano direita acima da cabeça.",
      "Gire o pé esquerdo para fora uns 45 graus e mantenha o pé direito apontando para a frente.",
      "Incline o tronco para o lado esquerdo, mantendo o braço direito estendido acima da cabeça e a mirada em kettlebell.",
      "Abaixe o tronco o máximo que puder mantendo o braço direito reto e o braço esquerdo estendido para o lado."
    ]
  },
  {
    "id": "0555",
    "name": "Sentado com chute para fora",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Sente-se na borda de um banco ou uma cadeira com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Incline-se ligeiramente para trás e coloque as mãos na borda do banco ou a cadeira como apoio.",
      "Ativando os posteriores das coxas, eleve os pés do chão e estenda as pernas retas para a frente.",
      "Faça uma pausa breve no alto, depois flexione lentamente os joelhos e leve os pés de volta para o corpo."
    ]
  },
  {
    "id": "0558",
    "name": "Muscle Up com Kipping",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Comece pendurando de uma barra fixa com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Ative o core usa um movimento de balanço para gerar impulso.",
      "Enquanto balance-se para a frente, puxe o peito para a barra, usando os dorsais e os bíceps para iniciar o movimento.",
      "Continue o movimento crescente até que o peito chegue à barra, depois passa a uma posição de fundos empurrando para baixo na barra e estendendo os braços."
    ]
  },
  {
    "id": "3640",
    "name": "Abdominal curto tocando o joelho",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve as escápulas do chão e estenda a mão direita em direção ao joelho esquerdo.",
      "Volte à posição inicial e repita, desta vez estendendo a mão esquerda em direção ao joelho direito."
    ]
  },
  {
    "id": "1420",
    "name": "Agachamento com Salto Ajoelhado",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "glúteos",
    "instructions": [
      "Comece ajoelhado no chão com os pés separados à altura dos quadris e as pontas dos pés apontando para a frente.",
      "Segure uma barra sobre a parte superior das costas, apoiando nos ombros.",
      "Ative o core os glúteos, depois salte de forma explosiva para cima, estendendo os quadris e os joelhos.",
      "Enquanto salte, empurre com os dedos dos pés e estenda por completo os tornozelos, os joelhos e os quadris."
    ]
  },
  {
    "id": "1346",
    "name": "Alongamento de dorsal ajoelhado",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Ajoelhe-se no chão com os joelhos separados à altura dos quadris e as pontas dos pés apontando para trás.",
      "Estenda os braços acima da cabeça e entrelaza os dedos.",
      "Mantenha as costas retas, incline-se lentamente para o lado direito, sentindo um alongamento no dorsal esquerdo.",
      "Mantenha o alongamento durante 20-30 segundos, depois volte à posição inicial."
    ]
  },
  {
    "id": "3239",
    "name": "Prancha ajoelhada com toque no ombro (masculino)",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de joelhos com as mãos no chão, afastadas na largura dos ombros.",
      "Estenda as pernas para trás, apoiando nos dedos dos pés, e eleve o corpo a uma posição de prancha.",
      "Mantenha o core ativado e os quadris estáveis, eleve uma mão do chão e toca o ombro oposto.",
      "Retorne a mão ao chão e repita com a outra mão."
    ]
  },
  {
    "id": "3211",
    "name": "Flexão de braços ajoelhado (masculino)",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece ajoelhado no chão com as mãos afastadas na largura dos ombros, os dedos apontando para a frente.",
      "Estenda as pernas para trás, apoiando na ponta dos pés, de maneira que o corpo fique alinhado da cabeça aos calcanhares.",
      "Ative o core abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os próximos em relação ao tronco.",
      "Continue baixando até que o peito esteja justo em cima do chão, depois empurre para cima à posição inicial endereçando os braços."
    ]
  },
  {
    "id": "3288",
    "name": "Mergulho coreano",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque-se entre duas barras paralelas com os braços estendidos sustentando o peso do corpo.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Faça uma pausa breve, depois empurre o corpo novamente para cima à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "3418",
    "name": "Barra fixa pronada l",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada pronada, um pouco mais largo que a altura dos ombros.",
      "Pendure com os braços completamente estendidos e o corpo reto.",
      "Ative os dorsais e os bíceps para levar o corpo para cima em direção à barra, mantendo os cotovelos próximos ao corpo.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "3419",
    "name": "L-sit no chão",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Coloque as mãos no chão junto às quadris, com os dedos apontando para a frente.",
      "Ative o core e eleve as pernas do chão, mantendo-as retas.",
      "Tenta levar as pernas paralelas ao chão, formando um 'L' com o corpo."
    ]
  },
  {
    "id": "0562",
    "name": "Landmine 180's",
    "bodyPart": "abdômen",
    "equipment": "barra",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra com as duas mãos à frente do peito.",
      "Flexione ligeiramente os joelhos e gire o tronco para a direita, levando a barra para o quadril direito.",
      "Ao chegar à parte baixa do movimento, inverta rapidamente o movimento e gire o tronco para a esquerda, levando a barra para cima e cruzando o corpo em direção ao ombro esquerdo.",
      "Continue este movimento de giro, alternando lados, durante o número de repetições desejado."
    ]
  },
  {
    "id": "3237",
    "name": "Elevação lateral landmine com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com uma pegada pronada, apoiando na parte da frente dos ombros.",
      "Mantenha o core ativado e as costas retas, eleve a barra afastando do corpo, elevando até a altura do ombro.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "3300",
    "name": "Planche inclinada",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em uma posição de flexão com as mãos afastadas na largura dos ombros e o corpo reto.",
      "Ative o core e mova lentamente o peso para a frente, levando os ombros para além das mãos.",
      "Mantenha os cotovelos levemente flexionados e o corpo reto enquanto incline-se para a frente.",
      "Mantenha esta posição durante uns segundos, depois volte lentamente à posição inicial."
    ]
  },
  {
    "id": "2271",
    "name": "Gancho esquerdo no boxe",
    "bodyPart": "ombros",
    "equipment": "peso corporal",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Mantenha a mão esquerda acima para proteger o rosto e a mão direita junto à queixo.",
      "Gire os quadris e pívota sobre o pé esquerdo enquanto estende o braço esquerdo para a frente com um movimento inesperadamente.",
      "Gire o tronco e ative os músculos do core para gerar potência no golpe."
    ]
  },
  {
    "id": "0570",
    "name": "Puxada de pernas no banco reto",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se em um banco plano com as pernas estendidas retas para a frente.",
      "Coloque as mãos no banco junto às quadris para maior apoio.",
      "Ative o abdômen e eleve as pernas do chão, levando os joelhos em direção ao peito.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1576",
    "name": "Alongamento de Isquiotibiais com Perna Elevada",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de costas com as pernas estendidas.",
      "Flexione um joelho e leve em direção ao peito, segurando da coxa ou a espinilla.",
      "Estenda a perna o máximo possível mantendo-a elevada.",
      "Mantenha o alongamento durante 20-30 segundos."
    ]
  },
  {
    "id": "2287",
    "name": "Leg press alternado na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "quadríceps",
    "instructions": [
      "Ajuste o assento e a plataforma para os pés da máquina de alavanca à posição desejada.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés sobre a plataforma para os pés.",
      "Coloque as mãos nas alças ou nos lados da máquina para ter mais estabilidade.",
      "Empurre um pé contra a plataforma para os pés, estendendo a perna até que esteja quase totalmente estendida."
    ]
  },
  {
    "id": "0571",
    "name": "Remada sentada alternada com pegada fechada na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e a posição da placa para os pés para assegurar um alinhamento correto.",
      "Sente-se na máquina com as costas retas e os pés apoiados sobre a placa para os pés.",
      "Segure as alças usando uma pegada estreito, com as palmas uma em frente à outra.",
      "Mantenha o peito erguido e os ombros para trás durante todo o exercício."
    ]
  },
  {
    "id": "0572",
    "name": "Barra fixa supinada assistido na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste a máquina de alavanca ao nível de resistência desejado.",
      "Suba à plataforma para os pés e segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Pendure com os braços completamente estendidos, mantendo o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para cima em direção às alças, liderando com o peito."
    ]
  },
  {
    "id": "0573",
    "name": "Extensão lombar na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "eretores da coluna",
    "instructions": [
      "Ajuste a máquina ao tamanho do seu corpo e sua faixa de movimento.",
      "Sente-se na máquina com as costas apoiadas no apoio acolchoado e os pés presos.",
      "Coloque as mãos nas alças ou nas barras de pegada.",
      "Ative o core incline-se lentamente para a frente, permitindo que as costas se arredonde ligeiramente."
    ]
  },
  {
    "id": "0574",
    "name": "Remada curvada com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e o peito erguido.",
      "Puxe a barra para a parte inferior do peito, aproximando as escápulas."
    ]
  },
  {
    "id": "3200",
    "name": "Remada curvada com v barra na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e coloque de frente para a máquina.",
      "Segure a barra em V com uma pegada pronada, mantendo as costas retas e os joelhos levemente flexionados.",
      "Puxe a barra em V para o abdômen, aproximando as escápulas.",
      "Faça uma breve pausa no ponto mais alto do movimento, depois solte lentamente o peso de volta à posição inicial."
    ]
  },
  {
    "id": "0575",
    "name": "Rosca bíceps na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "bíceps",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada supinada, com as palmas voltadas para cima, e mantenha os cotovelos cerca do tronco.",
      "Expire e flexione as alças para cima, contraindo os bíceps.",
      "Faça uma pausa breve na parte mais alta do movimento, contraindo os bíceps."
    ]
  },
  {
    "id": "2289",
    "name": "Elevação de panturrilhas na máquina articulada",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste o assento da máquina de alavanca de maneira que os ombros fiquem alinhados com o apoio acolchoado da alavanca.",
      "Coloque os dedos dos pés sobre o apoio acolchoado da alavanca, com os calcanhares pendurando fosse da borda.",
      "Segure as alças ou suporte-os laterais para ter mais estabilidade.",
      "Empurre o apoio acolchoado da alavanca para baixo estendendo os tornozelos, contraindo os músculos das panturrilhas."
    ]
  },
  {
    "id": "0577",
    "name": "Supino na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas totalmente apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e coloque os cotovelos em um ângulo de 90 graus.",
      "Empurre as alças para a frente até que os braços fiquem completamente estendidos, expirando ao realizar o movimento.",
      "Faça uma pausa breve ao final do movimento, depois volte lentamente à posição inicial, inspirando ao fazer isso."
    ]
  },
  {
    "id": "0576",
    "name": "Supino na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas totalmente apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e coloque os cotovelos em um ângulo de 90 graus.",
      "Empurre as alças para a frente até que os braços fiquem completamente estendidos, expirando ao realizar o movimento.",
      "Faça uma pausa breve ao final do movimento, depois volte lentamente à posição inicial, inspirando ao fazer isso."
    ]
  },
  {
    "id": "0578",
    "name": "Levantamento terra na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "glúteos",
    "instructions": [
      "Ajuste a altura do assento e a plataforma para os pés à posição desejada.",
      "Sente-se na máquina com as costas apoiadas no apoio acolchoado e os pés apoiados sobre a plataforma para os pés.",
      "Segure as alças ou os lados do assento para ter mais estabilidade.",
      "Ative os glúteos e os posteriores das coxas, e empurre com os calcanhares para levantar o peso."
    ]
  },
  {
    "id": "1300",
    "name": "Supino declinado na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e o encosto da máquina de alavanca a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e coloque as mãos um pouco além da largura dos ombros.",
      "Empurre as alças para a frente afastando do corpo até que os braços fiquem completamente estendidos."
    ]
  },
  {
    "id": "1253",
    "name": "Elevação de panturrilha estilo burrinho na máquina articulada",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina de alavanca à altura adequada para o corpo.",
      "Coloque-se de de frente para a máquina, com os dedos dos pés na plataforma e os calcanhares pendurando fosse da borda.",
      "Coloque as mãos nas alças ou nas barras de suporte para ter mais estabilidade.",
      "Ative as panturrilhas e eleve os calcanhares tão alto como seja possível, usando a parte da frente dos pés."
    ]
  },
  {
    "id": "0579",
    "name": "Puxada frontal na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os joelhos embaixo dos apoios acolchoados e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Sente-se ereto com o peito erguido e os ombros para trás, mantendo um ligeiro arco na zona lombar.",
      "Ative os dorsais e puxe as alças em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "0580",
    "name": "Encolhimento de ombros sem pegada na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "trapézios",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina de alavanca.",
      "Segure as alças com as palmas voltadas para dentro e os braços completamente estendidos.",
      "Mantenha as costas retas, expire e eleve os ombros tão alto como seja possível.",
      "Mantenha a contração por alguns segundos breve, logo inspire abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "1439",
    "name": "Encolhimento de ombros sem pegada na máquina articulada — variação 2",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "trapézios",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no apoio acolchoado.",
      "Segure as alças ou barras com uma pegada pronada, mantendo os braços retos.",
      "Mantenha as costas retas, eleve os ombros para as orelhas tão alto como seja possível.",
      "Mantenha a contração por alguns segundos, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "2288",
    "name": "Pegada de mãos na máquina articulada",
    "bodyPart": "antebraços",
    "equipment": "máquina articulada",
    "target": "antebraços",
    "instructions": [
      "Ajuste a altura do assento e segure as alças da máquina de alavanca.",
      "Mantenha as costas retas e os pés apoiados no chão.",
      "Expire e contraia as alças, contraindo os antebraços.",
      "Mantenha a contração durante um segundo, depois solte lentamente volte à posição inicial."
    ]
  },
  {
    "id": "1615",
    "name": "Rosca Scott com pegada neutra na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "bíceps",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina de alavanca.",
      "Coloque os braços sobre o apoio acolchoado de Scott, certificando-se de que o peito fique apoiado contra ela.",
      "Segure as alças com pegada neutro (palmas uma em frente à outra).",
      "Mantenha os braços imóveis, expire e flexione as alças para os ombros."
    ]
  },
  {
    "id": "0581",
    "name": "Remada alta na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e a plataforma para os pés a uma posição confortável.",
      "Sente-se na máquina com o peito contra o apoio acolchoado e os pés apoiados sobre a plataforma para os pés.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e ative o core."
    ]
  },
  {
    "id": "2286",
    "name": "Extensão de quadril na máquina articulada — variação 2",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina ao seu corpo e sente-se nela com as costas apoiadas no encosto.",
      "Coloque os pés nos apoio para os pés e segure as alças para ter mais estabilidade.",
      "Ative os glúteos e os posteriores das coxas, depois empurre contra os apoio para os pés para estender os quadris e levantar as pernas para trás.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "2611",
    "name": "Leg press horizontal unilateral na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "glúteos",
    "instructions": [
      "Ajuste o assento da máquina de maneira que os joelhos fiquem em um ângulo de 90 graus quando os pés estejam sobre a placa para os pés.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés afastados na largura dos ombros sobre a placa para os pés.",
      "Coloque as mãos nas alças ou nos lados da máquina para ter mais estabilidade.",
      "Empurre a placa para os pés afastando do corpo estendendo a perna, mantendo as costas apoiadas no encosto."
    ]
  },
  {
    "id": "1299",
    "name": "Supino inclinado na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste o assento e o encosto da máquina de alavanca a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e coloque as mãos um pouco além da largura dos ombros.",
      "Empurre as alças para a frente afastando do corpo até que os braços fiquem completamente estendidos."
    ]
  },
  {
    "id": "1479",
    "name": "Supino inclinado na máquina articulada — variação 2",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e o ângulo do encosto da máquina de alavanca a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e coloque as mãos um pouco além da largura dos ombros.",
      "Empurre as alças para a frente afastando do corpo até que os braços fiquem totalmente estendidos, sem travar os cotovelos."
    ]
  },
  {
    "id": "0582",
    "name": "Flexão de joelhos ajoelhado na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a máquina ao seu corpo e selecione o peso desejado.",
      "Ajoelhe-se na máquina voltado para baixo, com os joelhos apoiados no apoio acolchoado e os pés presos sob os apoios acolchoados para os pés.",
      "Segure as alças ou os lados da máquina para ter mais estabilidade.",
      "Mantenha imóvel a parte superior do corpo, expire e flexione as pernas para os glúteos flexionando os joelhos."
    ]
  },
  {
    "id": "0583",
    "name": "Rotação de tronco ajoelhado na máquina articulada",
    "bodyPart": "abdômen",
    "equipment": "máquina articulada",
    "target": "abdômen",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os joelhos apoiados nos apoios acolchoados e a parte superior do corpo voltada para a frente.",
      "Segure as alças ou os lados da máquina para ter mais estabilidade.",
      "Mantenha o core ativado, gire o tronco para um lado o máximo que for confortável.",
      "Faça uma pausa por alguns segundos, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0584",
    "name": "Elevação lateral na máquina articulada",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e mantenha os braços retos.",
      "Expire e eleve os braços para os lados até que fiquem paralelos ao chão.",
      "Faça uma pausa breve no alto, logo inspire abaixe lentamente os braços até a posição inicial."
    ]
  },
  {
    "id": "0585",
    "name": "Cadeira extensora na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "quadríceps",
    "instructions": [
      "Ajuste a altura do assento e o encosto da máquina ao seu corpo.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés sobre o apoio acolchoado para os pés.",
      "Segure as alças ou varra-as laterais para ter mais estabilidade.",
      "Estenda as pernas para a frente endereçando os joelhos, levantando o peso."
    ]
  },
  {
    "id": "0586",
    "name": "Mesa flexora na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a máquina ao seu corpo e selecione o peso desejado.",
      "Deite-se de bruços na máquina com as pernas retas e os calcanhares contra a alavanca acolchoada.",
      "Segure as alças ou os lados da máquina para ter mais estabilidade.",
      "Mantenha a parte superior do corpo imóvel, expire e flexione as pernas para cima o máximo possível sem levantar os quadris do apoio acolchoado."
    ]
  },
  {
    "id": "3195",
    "name": "Mesa flexora bilateral com fase unilateral na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a máquina ao seu corpo e sente-se nela com as costas apoiadas no encosto.",
      "Coloque as pernas sobre o apoio acolchoado da alavanca, justo em cima dos tornozelos.",
      "Segure as alças aos lados da máquina para maior apoio.",
      "Mantenha a parte superior do corpo imóvel, expire e flexione as pernas para os glúteos."
    ]
  },
  {
    "id": "0587",
    "name": "Desenvolvimento militar na máquina articulada",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no encosto.",
      "Segure as alças usando uma pegada pronada e coloque as mãos um pouco além da largura dos ombros.",
      "Empurre as alças para cima até que os braços fiquem totalmente estendidos, sem travar os cotovelos.",
      "Faça uma pausa breve no alto, depois abaixe lentamente as alças de volta à posição inicial."
    ]
  },
  {
    "id": "0588",
    "name": "Remada sentada com pegada fechada na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e os apoio para os pés para assegurar uma postura correta.",
      "Sente-se na máquina com os pés apoiados sobre os apoio para os pés e os joelhos levemente flexionados.",
      "Segure as alças usando uma pegada estreito, com as palmas uma em frente à outra.",
      "Mantenha as costas retas e incline-se ligeiramente para a frente."
    ]
  },
  {
    "id": "0589",
    "name": "Remada curvada unilateral com barra",
    "bodyPart": "costas",
    "equipment": "barra",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure uma barra com pegada pronada.",
      "Incline-se para a frente a partir dos quadris, mantendo as costas retas e a cabeça ereta.",
      "Deixe que a barra pendure à sua frente com os braços completamente estendidos.",
      "Puxe a barra em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "1356",
    "name": "Remada alta unilateral lateral na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e coloque de frente para a máquina.",
      "Segure o alça com uma mão e mantenha as costas retas.",
      "Puxe a alça para o corpo, mantendo o cotovelo cerca do lado.",
      "Contraia os músculos das costas no ponto mais alto do movimento."
    ]
  },
  {
    "id": "1347",
    "name": "Puxada unilateral lateral com pegada aberta na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com o peito contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure o alça com uma pegada pronada e estenda o braço por completo, mantendo uma leve flexão no cotovelo.",
      "Puxe a alça para baixo e cruzando o corpo em direção ao quadril oposto, contraindo o dorsal no ponto mais baixo do movimento.",
      "Retorne lentamente o alça à posição inicial, estendendo o braço por completo."
    ]
  },
  {
    "id": "0590",
    "name": "Desenvolvimento de ombros unilateral na máquina articulada",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no apoio acolchoado.",
      "Segure o alça da alavanca com uma mão e coloque o cotovelo em um ângulo de 90 graus.",
      "Pressione a alavanca para cima até que o braço fique completamente estendido acima da cabeça.",
      "Faça uma pausa breve na parte mais alta, depois abaixe lentamente a asa de volta à posição inicial."
    ]
  },
  {
    "id": "0591",
    "name": "Mergulho para tríceps com pegada pronada na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "tríceps",
    "instructions": [
      "Ajuste a máquina à altura adequada e estabilize o corpo em posição.",
      "Segure as alças usando uma pegada pronada e coloque o corpo de maneira que os braços fiquem completamente estendidos.",
      "Abaixe o corpo flexionando os cotovelos, mantendo os braços cerca do tronco.",
      "Continue baixando até que os braços fiquem paralelos ao chão."
    ]
  },
  {
    "id": "0592",
    "name": "Rosca Scott na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "bíceps",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina de alavanca.",
      "Coloque os braços no apoio acolchoado e segure as alças usando uma pegada supinada.",
      "Mantenha as costas retas e os cotovelos colocados sobre o apoio acolchoado.",
      "Expire e flexione os antebraços para os braços, contraindo os bíceps."
    ]
  },
  {
    "id": "1614",
    "name": "Rosca Scott na máquina articulada — variação 2",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "bíceps",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os braços apoiados no apoio acolchoado e o peito contra o suporte.",
      "Segure as alças usando uma pegada supinada, um pouco além da largura dos ombros.",
      "Mantenha os braços imóveis e expire enquanto flexione as alças para os ombros, contraindo os bíceps.",
      "Faça uma pausa breve na parte mais alta do movimento, contraindo os bíceps."
    ]
  },
  {
    "id": "2285",
    "name": "Pullover na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste o assento e as alças da máquina de alavanca a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no apoio acolchoado e segure as alças usando uma pegada pronada.",
      "Mantenha os braços levemente flexionados e o core ativado.",
      "Puxe lentamente as alças em direção ao peito, contraindo os dorsais."
    ]
  },
  {
    "id": "2736",
    "name": "Puxada lateral com pegada invertida na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os joelhos embaixo dos apoios acolchoados e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Sente-se ereto com o peito para fora e os ombros para trás, mantendo um ligeiro arco na zona lombar.",
      "Puxe as alças em direção ao peito, liderando com os cotovelos e aproximando as escápulas."
    ]
  },
  {
    "id": "1616",
    "name": "Rosca Scott com pegada invertida na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "bíceps",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina de alavanca.",
      "Segure as alças usando uma pegada supinada, com as palmas voltadas para cima.",
      "Apoie os braços sobre o apoio acolchoado de Scott, certificando-se de que os cotovelos fiquem completamente estendidos.",
      "Mantenha os braços imóveis, expire e flexione as alças para os ombros."
    ]
  },
  {
    "id": "1348",
    "name": "Remada com pegada invertida vertical na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e a posição da placa para os pés para assegurar um alinhamento correto.",
      "Sente-se na máquina com o peito contra o apoio acolchoado e os pés apoiados sobre a placa para os pés.",
      "Segure as alças usando uma pegada supinada, com as palmas voltadas para cima.",
      "Mantenha as costas retas e ative o core."
    ]
  },
  {
    "id": "0593",
    "name": "Hiperextensão lombar reverso na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina de alavanca ao seu corpo e prenda os pés nos apoios acolchoados para os pés.",
      "Deite-se de bruços na máquina com a parte superior do corpo pendurando fosse da borda e os quadris apoiadas no apoio acolchoado.",
      "Cruze os braços sobre o peito ou coloque por trás da cabeça.",
      "Ative os glúteos e os posteriores das coxas para levantar as pernas para cima até que fiquem paralelas ao chão."
    ]
  },
  {
    "id": "1349",
    "name": "Remada cavalinho reverso na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e a posição da placa para os pés na máquina de alavanca.",
      "Sente-se na máquina com o peito contra o apoio acolchoado e os pés apoiados sobre a placa para os pés.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e ative o core."
    ]
  },
  {
    "id": "2315",
    "name": "Panturrilha rotativa na máquina articulada",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a altura do assento de modo que os joelhos fiquem levemente flexionados e os pés fiquem planos sobre a placa para os pés.",
      "Coloque os dedos dos pés sobre a placa para os pés, com os calcanhares pendurando fosse da borda.",
      "Segure as alças ou os lados da máquina para ter mais estabilidade.",
      "Empurre com a parte da frente dos pés, elevando os calcanhares tão alto como seja possível."
    ]
  },
  {
    "id": "2335",
    "name": "Elevação de panturrilhas sentado na máquina articulada",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste o assento da máquina de maneira que os ombros fiquem alinhados com o apoio acolchoado da alavanca.",
      "Coloque os dedos dos pés na parte inferior da plataforma e posiciona os joelhos embaixo do apoio acolchoado da alavanca.",
      "Segure as alças aos lados do assento para ter mais estabilidade.",
      "Pressione o apoio acolchoado da alavanca para baixo estendendo os tornozelos, elevando os calcanhares tão alto como seja possível."
    ]
  },
  {
    "id": "0594",
    "name": "Elevação de panturrilha sentada na máquina articulada",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a altura do assento de modo que os joelhos fiquem levemente flexionados e os pés fiquem planos sobre a placa para os pés.",
      "Coloque os dedos dos pés sobre a placa para os pés, com os calcanhares pendurando fosse da borda.",
      "Segure as alças ou os lados do assento para ter mais estabilidade.",
      "Empurre com a parte da frente dos pés para elever os calcanhares tão alto como seja possível."
    ]
  },
  {
    "id": "1452",
    "name": "Abdominal curto sentado na máquina articulada",
    "bodyPart": "abdômen",
    "equipment": "máquina articulada",
    "target": "abdômen",
    "instructions": [
      "Sente-se na máquina de alavanca com as costas apoiadas no apoio acolchoado e os pés apoiados no chão.",
      "Segure as alças ou coloque as mãos sobre os apoios acolchoados laterais para maior apoio.",
      "Ative o abdômen e incline-se lentamente para trás, deixando que o apoio acolchoado se mova com você.",
      "Quando a parte superior do corpo esteja em um ângulo de 45 graus, contraia o abdômen e faça um crunch para a frente, levando o peito para os joelhos."
    ]
  },
  {
    "id": "0595",
    "name": "Abdominal curto sentado peitoral pad na máquina articulada",
    "bodyPart": "abdômen",
    "equipment": "máquina articulada",
    "target": "abdômen",
    "instructions": [
      "Ajuste a altura do assento e a posição do apoio acolchoado em direção ao peito segundo sua comodidade.",
      "Sente-se na máquina com as costas apoiadas no apoio acolchoado em direção ao peito e os pés apoiados no chão.",
      "Segure as alças ou varra-as laterais para ter mais estabilidade.",
      "Ative o abdômen e incline-se para trás lentamente para trás, permitindo que o encosto se mova com você."
    ]
  },
  {
    "id": "3760",
    "name": "Abdominal curto sentado na máquina articulada — variação 2",
    "bodyPart": "abdômen",
    "equipment": "máquina articulada",
    "target": "abdômen",
    "instructions": [
      "Sente-se na máquina de alavanca com as costas apoiadas no encosto e os pés presos sob os apoios acolchoados.",
      "Coloque as mãos nas alças ou nos lados do assento para maior apoio.",
      "Ative o abdômen e flexione lentamente o tronco para a frente, levando o peito para os joelhos.",
      "Faça uma pausa por alguns segundos no ponto mais alto do movimento, contraindo o abdômen."
    ]
  },
  {
    "id": "1451",
    "name": "Mergulho sentado na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "tríceps",
    "instructions": [
      "Ajuste a altura do assento de maneira que os pés fiquem planos no chão e os joelhos formem um ângulo de 90 graus.",
      "Segure as alças da máquina de alavanca com as palmas voltadas para baixo e os braços completamente estendidos.",
      "Abaixe lentamente o corpo flexionando os cotovelos até que o os braços fiquem paralelos ao chão.",
      "Faça uma pausa breve, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0596",
    "name": "Crucifixo sentado na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e mantenha os cotovelos levemente flexionados.",
      "Expire e empurre as alças para a frente, aproximando à frente do o peito.",
      "Faça uma pausa por alguns segundos, contraindo os músculos do peito."
    ]
  },
  {
    "id": "3759",
    "name": "Bom dia sentado na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "glúteos",
    "instructions": [
      "Ajuste a altura do assento de maneira que os quadris fiquem um pouco mais altas que os joelhos.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados sobre os apoio para os pés.",
      "Segure as alças ou os lados do assento para ter mais estabilidade.",
      "Mantenha as costas retas, incline-se lentamente para a frente a partir dos quadris até que a parte superior do corpo fique paralela ao chão."
    ]
  },
  {
    "id": "0597",
    "name": "Abdução de quadril sentado na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "abdutores",
    "instructions": [
      "Ajuste a altura do assento de maneira que os joelhos formem um ângulo de 90 graus.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés sobre os apoio para os pés.",
      "Coloque as mãos nas alças laterais para ter mais estabilidade.",
      "Ative os abdutores e empurre lentamente as pernas para fora, afastando da linha média do corpo."
    ]
  },
  {
    "id": "0598",
    "name": "Adução de quadril sentado na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "adutores",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no encosto.",
      "Coloque os pés sobre os apoio para os pés e segure as alças para ter mais estabilidade.",
      "Ative os adutores e aproxime lentamente as pernas, contraindo a parte interna das coxas.",
      "Faça uma pausa breve no ponto máximo de contração, depois volte lentamente à posição inicial."
    ]
  },
  {
    "id": "0599",
    "name": "Cadeira flexora na máquina articulada",
    "bodyPart": "pernas",
    "equipment": "máquina articulada",
    "target": "posteriores das coxas",
    "instructions": [
      "Ajuste a máquina ao seu corpo e sente-se nela com as costas apoiadas no encosto.",
      "Coloque a parte baixa das pernas embaixo da alavanca acolchoada, logo acima dos tornozelos.",
      "Segure as alças aos lados da máquina para maior apoio.",
      "Mantenha a parte superior das pernas imóvel, expire e flexione as pernas para cima todo o que possa."
    ]
  },
  {
    "id": "0600",
    "name": "Elevação de pernas com abdominal curto sentado na máquina articulada",
    "bodyPart": "abdômen",
    "equipment": "máquina articulada",
    "target": "abdômen",
    "instructions": [
      "Sente-se na máquina de alavanca com as costas apoiadas no encosto e os pés sobre os apoio para os pés.",
      "Segure as alças ou varra-as laterais para ter mais estabilidade.",
      "Ative o abdômen e eleve lentamente as pernas em direção ao peito, enquanto flexiones o tronco para a frente simultaneamente.",
      "Faça uma pausa por alguns segundos na parte alta e depois abaixe lentamente as pernas e o tronco à posição inicial."
    ]
  },
  {
    "id": "0602",
    "name": "Crucifixo inverso sentado na máquina articulada",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com o peito contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e mantenha os braços levemente flexionados.",
      "Expire e aproxime as escápulas enquanto leve as alças para trás e para fora, afastando do corpo.",
      "Faça uma pausa breve no ponto máximo de contração, logo inspire volte lentamente à posição inicial."
    ]
  },
  {
    "id": "0601",
    "name": "Crucifixo inverso sentado com pegada neutra na máquina articulada",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com o peito contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure as alças usando uma pegada paralelo, com as palmas voltadas uma para a outra, e mantenha os braços levemente flexionados.",
      "Expire e aproxime as escápulas enquanto leve as alças para trás e para fora, afastando do corpo.",
      "Faça uma pausa breve no ponto máximo de contração, logo inspire volte lentamente à posição inicial."
    ]
  },
  {
    "id": "1350",
    "name": "Remada sentada na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e os apoio para os pés a uma posição confortável.",
      "Sente-se na máquina com o peito apoiado no apoio acolchoado e os pés sobre os apoio para os pés.",
      "Segure as alças usando uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "1385",
    "name": "Elevação de panturrilhas sentada na máquina leg press",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste o assento da máquina de imprensa de pernas de maneira que os joelhos fiquem levemente flexionados quando os pés estejam sobre a plataforma.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados sobre a plataforma, afastados na largura dos ombros.",
      "Coloque os dedos e a planta dos pés sobre a plataforma, mantendo os calcanhares afastados da borda.",
      "Solte as alavancas de segurança e empurre a plataforma afastando-a do corpo estendendo os joelhos."
    ]
  },
  {
    "id": "0603",
    "name": "Desenvolvimento de ombros na máquina articulada",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no encosto.",
      "Segure as alças usando uma pegada pronada e posicione as mãos na altura dos ombros.",
      "Empurre as alças para cima até que os braços fiquem totalmente estendidos, sem travar os cotovelos.",
      "Faça uma pausa breve no alto, depois abaixe lentamente as alças de volta à posição inicial."
    ]
  },
  {
    "id": "0869",
    "name": "Desenvolvimento de ombros na máquina articulada — variação 2",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e o encosto da máquina de alavanca a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure as alças da máquina com uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Empurre as alças para cima e para a frente até que os braços fiquem totalmente estendidos, sem travar os cotovelos."
    ]
  },
  {
    "id": "2318",
    "name": "Desenvolvimento de ombros na máquina articulada — variação 3",
    "bodyPart": "ombros",
    "equipment": "máquina articulada",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e o encosto da máquina de alavanca a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure as alças da máquina com uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Empurre as alças para cima e para a frente até que os braços fiquem totalmente estendidos, sem travar os cotovelos."
    ]
  },
  {
    "id": "0604",
    "name": "Encolhimento de ombros na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "trapézios",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina de alavanca com as costas apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e mantenha os braços retos.",
      "Mantenha as costas retas, eleve os ombros para as orelhas tão alto como seja possível.",
      "Mantenha a contração por alguns segundos, depois abaixe lentamente os ombros de volta à posição inicial."
    ]
  },
  {
    "id": "0605",
    "name": "Elevação de panturrilha em pé na máquina articulada",
    "bodyPart": "panturrilhas",
    "equipment": "máquina articulada",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina a sua altura e fique em pé com os pés afastados na largura dos ombros.",
      "Coloque os ombros embaixo dos apoios acolchoados e segure das alças para ter mais estabilidade.",
      "Eleve os calcanhares o mais alto que puder estendendo os tornozelos.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "3758",
    "name": "Supino em pé na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e coloque as mãos à altura do peito.",
      "Empurre as alças para a frente até que os braços fiquem completamente estendidos, mantendo os cotovelos levemente flexionados.",
      "Faça uma pausa por alguns segundos e depois leve lentamente as alças de volta em direção ao peito, mantendo o controle durante todo o movimento."
    ]
  },
  {
    "id": "0606",
    "name": "Remada cavalinho na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e a posição da placa para os pés para assegurar um alinhamento correto.",
      "Sente-se na máquina com o peito contra o apoio acolchoado e os pés apoiados sobre a placa para os pés.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e ative o core."
    ]
  },
  {
    "id": "1351",
    "name": "Remada t barra com pegada invertida na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com o peito contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e ative o core.",
      "Puxe as alças em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "0607",
    "name": "Extensão de tríceps na máquina articulada",
    "bodyPart": "braços",
    "equipment": "máquina articulada",
    "target": "tríceps",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e estenda completamente os braços à sua frente.",
      "Mantenha a parte superior dos braços imóvel, abaixe lentamente as alças para sua frente flexionando os cotovelos.",
      "Faça uma pausa por alguns segundos na parte baixa depois empurre as alças de volta para cima até a posição inicial estendendo os braços."
    ]
  },
  {
    "id": "1313",
    "name": "Remada unilateral na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e coloque de frente para a máquina.",
      "Segure as alças usando uma pegada pronada e mantenha as costas retas.",
      "Puxe as alças para o corpo, contraindo as escápulas entre si.",
      "Faça uma pausa no ponto de maior contração e depois solte lentamente, estendendo os braços de volta à posição inicial."
    ]
  },
  {
    "id": "0609",
    "name": "Pontes de Londres",
    "bodyPart": "costas",
    "equipment": "corda",
    "target": "parte superior das costas",
    "instructions": [
      "Segure a corda a um ponto de ancoragem alta.",
      "Fique de pé de costas para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure a corda com uma pegada pronada, com as palmas voltadas para baixo.",
      "Incline-se ligeiramente para a frente, mantendo as costas retas e o core ativado."
    ]
  },
  {
    "id": "3013",
    "name": "Ponte de glúteos baixo no chão",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque os braços ao lado do corpo, com as palmas voltadas para baixo.",
      "Ative os glúteos e o cor, e depois eleve os quadris do chão até que o corpo fique alinhado desde os joelhos até os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os glúteos."
    ]
  },
  {
    "id": "1352",
    "name": "Flexão lombar",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Deite-se de bruços com as pernas estendidas e os braços ao lado do corpo.",
      "Ative os glúteos e os posteriores das coxas, e eleve lentamente a parte superior do corpo do chão, flexionando as costas para cima.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "3582",
    "name": "Afundo com salto",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo.",
      "Empurre com o pé direito e salte ao ar, mudando a posição dos pés em pleno vôo.",
      "Aterrisse suavemente com o pé esquerdo para a frente abaixe imediatamente o corpo a uma posição de afundo."
    ]
  },
  {
    "id": "1688",
    "name": "Afundo com rotação",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo.",
      "Ao fazer a afundo, gire o tronco para a direita, levando o cotovelo esquerdo em direção ao joelho direito.",
      "Faça uma pausa breve depois volte à posição inicial."
    ]
  },
  {
    "id": "0613",
    "name": "Alongamento de quadríceps deitado lateral",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Deite-se de lado com as pernas retas.",
      "Flexione a perna de acima e segure seu tornozelo ou pé com a mão.",
      "Puxe suavemente do tornozelo ou do pé para os glúteos até sentir um alongamento nos quadríceps.",
      "Mantenha o alongamento durante 20-30 segundos."
    ]
  },
  {
    "id": "2312",
    "name": "Deitado com cotovelo em direção ao joelho",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Ative o abdômen e eleve a parte superior do corpo do chão, levando o cotovelo direito em direção ao joelho esquerdo.",
      "Ao mesmo tempo, estenda a perna direita em linha reta e levante do chão."
    ]
  },
  {
    "id": "0620",
    "name": "Elevação de pernas deitado no banco reto",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se em um banco plano com as costas pressionadas contra ele.",
      "Coloque as mãos embaixo dos glúteos como apoio.",
      "Mantenha as pernas retas e próximas, e eleve para o teto.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0865",
    "name": "Elevação pélvica deitado perna",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços aos lados.",
      "Coloque as mãos embaixo dos glúteos como apoio.",
      "Ative o core e eleve as pernas do chão, elevando para o teto.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1301",
    "name": "Supino máquina interno na máquina articulada",
    "bodyPart": "peito",
    "equipment": "máquina articulada",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com as costas totalmente apoiadas no apoio acolchoado.",
      "Segure as alças usando uma pegada pronada e coloque os cotovelos em um ângulo de 90 graus.",
      "Empurre as alças para a frente até que os braços fiquem completamente estendidos, expirando ao realizar o movimento.",
      "Faça uma pausa ao final do movimento e depois volte lentamente à posição inicial, inspirando ao fazer isso."
    ]
  },
  {
    "id": "0624",
    "name": "Marcha sentada na parede",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com as costas contra uma parede os pés separados à altura dos quadris.",
      "Deslize lentamente as costas para baixo pela parede até que os joelhos formem um ângulo de 90 graus.",
      "Eleve o pé direito do chão e leve o joelho em direção ao peito.",
      "Abaixe o pé direito de novo e eleve o pé esquerdo do chão, levando o joelho em direção ao peito."
    ]
  },
  {
    "id": "1353",
    "name": "Recepção e arremesso acima da cabeça com bola medicinal",
    "bodyPart": "costas",
    "equipment": "bola medicinal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando uma bola medicinal com as duas mãos à altura do peito.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Abaixe o corpo a uma posição de agachamento, mantendo as costas retas e o peito para cima.",
      "Estenda de forma explosiva os quadris e as pernas, enquanto arremesse simultaneamente a bola medicinal acima da cabeça."
    ]
  },
  {
    "id": "1302",
    "name": "Arremesso de bola medicinal no peito",
    "bodyPart": "peito",
    "equipment": "bola medicinal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando a bola medicinal à altura do peito.",
      "Estenda os braços para a frente, empurrando a bola medicinal com força para afastar do peito.",
      "Ao soltar a bola, continue o movimento com os braços e o tronco, transferindo o peso do pé de atrás ao pé de adiante.",
      "Pegue a bola quando quicar na parede ou em outra pessoa, e repita o movimento de imediato."
    ]
  },
  {
    "id": "1303",
    "name": "Empurrada peitoral a partir de apoio de três pontos com bola medicinal",
    "bodyPart": "peito",
    "equipment": "bola medicinal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de apoio de 3 pontos com uma mão sobre a bola medicinal e a outra no chão.",
      "Estenda as pernas e coloque o corpo em linha reta.",
      "Abaixe o peito em direção ao chão mantendo as costas retas.",
      "Empurre a bola medicinal afastando do corpo, estendendo completamente o braço."
    ]
  },
  {
    "id": "1304",
    "name": "Empurrada peitoral com resposta múltipla e bola medicinal",
    "bodyPart": "peito",
    "equipment": "bola medicinal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando uma bola medicinal à altura do peito.",
      "Estenda os braços para a frente, afastando a bola medicinal do peito.",
      "Faça uma pausa por alguns segundos e depois leve lentamente a bola medicinal de volta ao peito.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1305",
    "name": "Empurrada peitoral com resposta única e bola medicinal",
    "bodyPart": "peito",
    "equipment": "bola medicinal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando a bola medicinal à altura do peito.",
      "Estenda os braços para a frente, afastando a bola medicinal do peito.",
      "Faça uma pausa por alguns segundos e depois leve lentamente a bola medicinal de volta ao peito.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1312",
    "name": "Empurrada peitoral com corrida e soltura com bola medicinal",
    "bodyPart": "peito",
    "equipment": "bola medicinal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando uma bola medicinal à altura do peito.",
      "Dê um passo adiante com o pé direito e, simultaneamente, empurre a bola medicinal para a frente, estendendo completamente os braços.",
      "Enquanto empurre a bola para a frente, solte-a e deixe-a girar.",
      "Corra rapidamente para a frente pegue a bola antes de que toque o solo."
    ]
  },
  {
    "id": "1701",
    "name": "Flexão de braços com pegada fechada com bola medicinal",
    "bodyPart": "braços",
    "equipment": "bola medicinal",
    "target": "tríceps",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos sobre a bola medicinal, afastadas na largura dos ombros.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os cerca do tronco.",
      "Empurre de volta até a posição inicial, estendendo completamente os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1354",
    "name": "Arremesso ao chão acima da cabeça com bola medicinal",
    "bodyPart": "costas",
    "equipment": "bola medicinal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando uma bola medicinal com as duas mãos acima da cabeça.",
      "Ative o core e mantenha as costas retas.",
      "Flexione ligeiramente os joelhos e arremesse com força a bola medicinal contra o solo à sua frente.",
      "Ao arremessar a bola ao chão, use todo o corpo para gerar potência, incluídos os ombros e o core."
    ]
  },
  {
    "id": "1750",
    "name": "Arremesso peitoral deitado de costas com bola medicinal",
    "bodyPart": "braços",
    "equipment": "bola medicinal",
    "target": "tríceps",
    "instructions": [
      "Deite-se de costas em um banco com os joelhos flexionados e os pés apoiados no chão.",
      "Segure a bola medicinal com as duas mãos, estendendo os braços retos acima do peito.",
      "Abaixe a bola medicinal em direção ao peito, mantendo os cotovelos próximos ao corpo.",
      "Empurre a bola medicinal de forma explosiva para cima, estendendo completamente os braços e arremessando a bola o máximo possível."
    ]
  },
  {
    "id": "0627",
    "name": "Barra fixa supinada com pegada mista",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada supinada (as palmas voltadas para você) e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e os pés fosse do chão.",
      "Ative os músculos das costas e puxe o corpo para a barra, levando o peito à frente.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "3217",
    "name": "Flexão hindu modificada (masculino)",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e os pés separados à altura dos quadris.",
      "Abaixe o corpo em direção ao chão, flexionando os cotovelos e mantendo o core ativado.",
      "Enquanto abaixa o corpo, desloque o peso para trás e eleve os quadris para o teto, formando um V invertido com seu corpo.",
      "Continue baixando o corpo até que o peito fique logo acima do chão e depois inverta o movimento, empurrando os quadris para baixo e estendendo os braços para voltar à posição inicial."
    ]
  },
  {
    "id": "1421",
    "name": "Flexão de braços modificada para antebraços",
    "bodyPart": "antebraços",
    "equipment": "peso corporal",
    "target": "antebraços",
    "instructions": [
      "Comece em posição de flexão com as mãos diretamente embaixo dos ombros e o corpo alinhado.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os cerca de seu lado.",
      "Quando os cotovelos formem um ângulo de 90 graus, abaixe os antebraços até o solo, mantendo os cotovelos diretamente abaixo dos ombros.",
      "Faça uma pausa por alguns segundos e depois empurre com as palmas para levar os antebraços de volta à posição inicial."
    ]
  },
  {
    "id": "0628",
    "name": "Caminhada de Monstro",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Coloque uma faixa elástica ao redor dos tornozelos.",
      "Coloque os pés afastados na largura dos ombros e flexione ligeiramente os joelhos.",
      "Dê um passo para o lado com o pé direito, mantendo a tensão na faixa elástica.",
      "Continue com o pé esquerdo, dando um passo lateral para voltar à posição inicial."
    ]
  },
  {
    "id": "0630",
    "name": "Escalador",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos diretamente abaixo dos ombros e o corpo alinhado.",
      "Ative o core e leve o joelho direito em direção ao peito, depois alterne rapidamente, levando o joelho esquerdo em direção ao peito.",
      "Continue alternando as pernas com um movimento de corrida, mantendo os quadris baixos e o core ativado.",
      "Mantenha um ritmo constante respire de forma regular durante todo o exercício."
    ]
  },
  {
    "id": "0631",
    "name": "Muscle Up",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Comece pendurando de uma barra fixa com as palmas para fora e os braços completamente estendidos.",
      "Ative o core puxe o corpo para cima, para a barra, guiando com o peito.",
      "Ao chegar à parte alta do movimento, mude a pegada de modo que as palmas fiquem para você.",
      "Continue puxando o corpo para cima até que o peito fique acima da barra e os braços estejam completamente flexionados."
    ]
  },
  {
    "id": "1401",
    "name": "Muscle up na barra vertical",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Comece pendurando de uma barra vertical com as palmas para fora e os braços completamente estendidos.",
      "Ative o core puxe o corpo para cima, para a barra, guiando com o peito.",
      "Ao subir o corpo, incline-se ligeiramente para trás e leve os cotovelos para o tronco.",
      "Continue puxando o corpo até que o peito chegue à barra e os cotovelos estejam completamente flexionados."
    ]
  },
  {
    "id": "2328",
    "name": "Flexão de braços com pegada fechada na bola suíça",
    "bodyPart": "braços",
    "equipment": "bola suíça",
    "target": "tríceps",
    "instructions": [
      "Coloque a bola suíça no chão e fique em posição de flexão com as mãos sobre a bola, um pouco mais próximas que a largura dos ombros.",
      "Ative o core e mantenha o corpo alinhado da cabeça aos pés.",
      "Abaixe o peito para a bola flexionando os cotovelos, mantendo-os próximos ao corpo.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "1403",
    "name": "Alongamento lateral do pescoço",
    "bodyPart": "pescoço",
    "equipment": "peso corporal",
    "target": "levantador da escápula",
    "instructions": [
      "Fique de pé ou sente-se ereto com os ombros relaxados.",
      "Incline a cabeça para um lado, levando a orelha para o ombro.",
      "Mantenha o alongamento durante 15-30 segundos.",
      "Repita do outro lado."
    ]
  },
  {
    "id": "0634",
    "name": "Abdominal curto negativo",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1495",
    "name": "Abdominal curto oblíquo — variação 2",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative o abdômen e eleve as escápulas do chão, rotacionando o tronco para um lado.",
      "Faça uma pausa por alguns segundos e depois abaixe as escápulas de volta à posição inicial."
    ]
  },
  {
    "id": "0635",
    "name": "Abdominal oblíquo no chão",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative o abdômen e eleve as escápulas do chão, rotacionando o tronco para um lado.",
      "Faça uma pausa por alguns segundos e depois abaixe as escápulas de novo até o solo."
    ]
  },
  {
    "id": "0636",
    "name": "Rosca martelo com barra olímpica",
    "bodyPart": "braços",
    "equipment": "barra olímpica",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure uma barra olímpica com uma pegada pronada.",
      "Deixe que a barra pendure à altura dos braços em frente a suas coxas, com as palmas voltadas para o corpo.",
      "Mantenha os braços fixos, expire e eleve o peso contraindo os bíceps.",
      "Continue levantando a barra até que os bíceps estejam completamente contraídos e a barra esteja à altura dos ombros."
    ]
  },
  {
    "id": "0637",
    "name": "Extensão de tríceps com barra olímpica",
    "bodyPart": "braços",
    "equipment": "barra olímpica",
    "target": "tríceps",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e sustentando a barra com uma pegada pronada.",
      "Eleve a barra acima da cabeça, estendendo completamente os braços.",
      "Mantenha os braços cerca da cabeça, abaixe lentamente a barra por trás da cabeça flexionando os cotovelos.",
      "Faça uma pausa por alguns segundos e depois estenda os braços de volta à posição inicial."
    ]
  },
  {
    "id": "1355",
    "name": "Um Braço Contra a Parede",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé de frente para uma parede com os pés afastados na largura dos ombros.",
      "Estenda um braço reto para a frente coloque a palma contra a parede.",
      "Ative o core incline o corpo para a frente, mantendo o braço reto e as costas planas.",
      "Empurre lentamente a parede com a palma, ativando os dorsais."
    ]
  },
  {
    "id": "0638",
    "name": "Barra Fixa com uma Mão",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé em frente a uma barra fixa com os pés afastados na largura dos ombros.",
      "Estique-se segure a barra com uma pegada supinada, com uma mão segurando a barra e a outra sustentando o punho como apoio.",
      "Pendure da barra com o braço completamente estendido, mantendo o corpo reto e o core ativado.",
      "Puxe o corpo para a barra flexionando o cotovelo e contraindo os músculos das costas."
    ]
  },
  {
    "id": "0639",
    "name": "Mergulho unilateral",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Fique de pé de costas a um banco ou cadeira, com os pés afastados na largura dos ombros.",
      "Coloque uma mão no banco ou cadeira atrás do corpo, com os dedos apontando para o corpo.",
      "Estenda as pernas para a frente, mantendo os calcanhares no chão.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas cerca do banco ou cadeira."
    ]
  },
  {
    "id": "0640",
    "name": "Arremesso ao chão unilateral com bola medicinal",
    "bodyPart": "abdômen",
    "equipment": "bola medicinal",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando a bola medicinal com uma mão em frente à cintura.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Eleve a bola medicinal acima da cabeça, estendendo completamente o braço.",
      "Arremesse com força a bola medicinal contra o solo, usando o core e os ombros para gerar potência."
    ]
  },
  {
    "id": "1773",
    "name": "Remada unilateral com toalha",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os joelhos levemente flexionados, e segure uma toalha com uma mão.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e o core ativado.",
      "Estenda completamente o braço, deixando que a toalha pendure à sua frente.",
      "Puxe a toalha em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "1386",
    "name": "Elevação de panturrilha estilo burrinho unilateral",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com as pontas dos pés apontando para a frente.",
      "Coloque as mãos sobre uma superfície estável para se apoiar, como uma parede ou uma barra.",
      "Eleve uma perna do chão, mantendo o joelho levemente flexionado.",
      "Eleve o calcanhar o máximo possível, usando os músculos da panturrilha."
    ]
  },
  {
    "id": "1387",
    "name": "Elevação de panturrilhas unilateral chão",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e coloque as mãos em uma parede ou objeto firme para manter o equilíbrio.",
      "Eleve um pé do chão e mantenha o equilíbrio sobre o outro pé.",
      "Eleve lentamente o calcanhar do chão, elevando o corpo sobre as pontas dos pés.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o calcanhar de volta à posição inicial."
    ]
  },
  {
    "id": "1476",
    "name": "Agachamento unilateral",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Estenda uma perna para a frente, mantendo-a elevada do chão.",
      "Flexione a perna de apoio e abaixe o corpo como se se sentasse em uma cadeira.",
      "Mantenha o peito erguido e as costas retas."
    ]
  },
  {
    "id": "0641",
    "name": "Otis-Up",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0642",
    "name": "Flexão de braços com chute externo da perna",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo as costas retas e o core ativado.",
      "Ao empurrar de volta para cima, lance uma perna para o lado, estendendo-a completamente ativando os glúteos.",
      "Volte a colocar a perna na posição inicial e repita a flexão, alternando as pernas em cada repetição."
    ]
  },
  {
    "id": "0643",
    "name": "Alongamento de tríceps acima da cabeça",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Fique de pé ou sente-se ereto com os pés afastados na largura dos ombros.",
      "Estenda um braço acima da cabeça, flexionando o cotovelo de modo que a mão chegue para a escápula oposta.",
      "Com a outra mão, puxe suavemente do cotovelo do braço estendido para o outro lado da cabeça, sentindo um alongamento no tríceps.",
      "Mantenha o alongamento durante 15-30 segundos, depois solte."
    ]
  },
  {
    "id": "3147",
    "name": "Inclinação pélvica",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos ao lado do corpo.",
      "Ative o abdômen e incline a pelve para cima, pressionando a zona lombar contra o solo.",
      "Mantenha esta posição durante uns segundos, concentrando-se em contrair o abdômen."
    ]
  },
  {
    "id": "1422",
    "name": "Inclinação Pélvica para Ponte",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque os braços ao lado do corpo com as palmas voltadas para baixo.",
      "Ative os glúteos e os músculos do core.",
      "Incline a pelve para cima, levantando os quadris do chão."
    ]
  },
  {
    "id": "1388",
    "name": "Alongamento dos Fibulares",
    "bodyPart": "panturrilhas",
    "equipment": "corda",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Enrole a corda ao redor da planta do pé e segure os extremidades da corda com as mãos.",
      "Puxe suavemente a corda para você, flexionando o pé e estendendo os músculos da panturrilha.",
      "Mantenha o alongamento durante 15-30 segundos."
    ]
  },
  {
    "id": "3662",
    "name": "Flexão de braços carpada para cobra",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Ative o core e eleve os quadris para o teto, formando um V invertido com seu corpo.",
      "Abaixe a parte superior do corpo em direção ao chão flexionando os cotovelos, mantendo-os próximos ao corpo.",
      "Ao baixar, desloque o peso para a frente faça a transição a uma postura de cobra estendendo os braços e elevando o peito."
    ]
  },
  {
    "id": "1306",
    "name": "Flexão Plyométrica",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo o corpo alinhado.",
      "Empurre de forma explosiva contra o solo, usando os músculos do peito para impulsionar a parte superior do corpo fosse do chão.",
      "Aterrisse suavemente com as mãos de volta na posição inicial."
    ]
  },
  {
    "id": "1687",
    "name": "Passo posterior com alcance acima da cabeça",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e os braços ao lado do corpo.",
      "Dê um passo para trás com o pé direito, apoiando na ponta do pé.",
      "Flexione o joelho esquerdo e abaixe o corpo a uma posição de afundo.",
      "Enquanto abaixa à afundo, leve simultaneamente os braços acima da cabeça."
    ]
  },
  {
    "id": "1389",
    "name": "Alongamento do Tibial Posterior",
    "bodyPart": "panturrilhas",
    "equipment": "corda",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Enrole a corda ao redor da planta do pé e segure os extremidades da corda com as mãos.",
      "Puxe suavemente a corda para você, flexionando o pé e estendendo os músculos da panturrilha.",
      "Mantenha o alongamento durante 20-30 segundos."
    ]
  },
  {
    "id": "3119",
    "name": "Agachamento profundo",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os dedos dos pés ligeiramente para fora.",
      "Abaixe o corpo flexionando os joelhos e empurrando os quadris para trás como se sentasse-se em uma cadeira.",
      "Mantenha o peito para cima e as costas retas durante todo o movimento.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde possa chegar comodamente."
    ]
  },
  {
    "id": "3132",
    "name": "Agachamento profundo com apoio",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os dedos dos pés ligeiramente para fora.",
      "Segure de um apoio estável, como uma cadeira ou uma parede, para manter o equilíbrio.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Mantenha o peito para cima e as costas retas durante todo o movimento."
    ]
  },
  {
    "id": "0648",
    "name": "Clean de potência",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "posteriores das coxas",
    "instructions": [
      "Comece com a barra no chão à sua frente, com os pés afastados na largura dos ombros.",
      "Agache-se segure a barra com uma pegada pronada, um pouco além da largura dos ombros.",
      "Mantenha as costas retas e o peito para cima ao levantar a barra do chão, estendendo os quadris e os joelhos.",
      "Quando a barra chegue à metade da coxa, puxe a barra de forma explosiva para cima, encolhendo os ombros e levando os cotovelos para cima e para os lados."
    ]
  },
  {
    "id": "3665",
    "name": "Prancha com ponto de força",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de prancha alta com as mãos diretamente embaixo dos ombros e o corpo alinhado da cabeça aos pés.",
      "Ative o core contraia os glúteos para manter uma posição estável.",
      "Abaixe o corpo até os antebraços, um braço simultaneamente, mantendo uma linha reta da cabeça aos pés.",
      "Mantenha esta posição durante o tempo desejado, com o core os glúteos ativados."
    ]
  },
  {
    "id": "3203",
    "name": "Meio abdominal prisioneiro (masculino)",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1707",
    "name": "Rotação de tronco de bruços na bola suíça",
    "bodyPart": "abdômen",
    "equipment": "bola suíça",
    "target": "abdômen",
    "instructions": [
      "Comece deitando-se de bruços sobre uma bola suíça com os pés afastados na largura dos ombros e os dedos dos pés tocando o solo.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative os músculos do core eleve lentamente a parte superior do corpo da bola, mantendo as costas retas.",
      "Gire o tronco para um lado, levando o ombro para o quadril. Mantenha os quadris e as pernas estáveis durante todo o movimento."
    ]
  },
  {
    "id": "0651",
    "name": "Barra fixa pronada com pegada neutra",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Pendure de uma barra fixa com uma pegada neutro (as palmas voltadas uma para a outra) e os braços completamente estendidos.",
      "Ative o core e aproxime as escápulas.",
      "Puxe o corpo para a barra flexionando os cotovelos e levando-os para os quadris.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "0650",
    "name": "Puxada na bola suíça",
    "bodyPart": "abdômen",
    "equipment": "bola suíça",
    "target": "abdômen",
    "instructions": [
      "Comece sentando na bola suíça com os pés apoiados no chão e os joelhos flexionados a um ângulo de 90 graus.",
      "Coloque as mãos aos lados da bola suíça para maior apoio.",
      "Ative o abdômen e gire lentamente os quadris para a frente, levando os joelhos em direção ao peito.",
      "Faça uma pausa por alguns segundos na parte alta do movimento e depois estenda lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0652",
    "name": "Barra fixa pronada",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Pendure de uma barra fixa com as palmas para fora e os braços completamente estendidos.",
      "Ative o core e aproxime as escápulas.",
      "Puxe o corpo para a barra flexionando os cotovelos e levando o peito para a barra.",
      "Faça uma pausa na parte alta do movimento e depois abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1689",
    "name": "Empurrada e puxada com peso corporal",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e o corpo alinhado.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo o corpo reto.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial.",
      "Desde a posição de flexão, puxe o peito em direção ao chão flexionando os cotovelos, mantendo o corpo reto."
    ]
  },
  {
    "id": "3638",
    "name": "Empurrada para corrida",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece em posição de flexão com as mãos afastadas na largura dos ombros e o corpo alinhado.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo o corpo reto.",
      "Empurre com as mãos para estender os braços e voltar à posição inicial.",
      "Leve rapidamente um joelho em direção ao peito, depois alterne rapidamente, levando o outro joelho em direção ao peito."
    ]
  },
  {
    "id": "1307",
    "name": "Flexão de braços no BOSU",
    "bodyPart": "peito",
    "equipment": "BOSU",
    "target": "peitorais",
    "instructions": [
      "Coloque o BOSU no chão com o lado plano para cima.",
      "Coloque-se em posição de flexão com as mãos nas bordas exteriores do BOSU.",
      "Ative o core abaixe o corpo para o BOSU flexionando os cotovelos.",
      "Empurre o corpo de volta à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0662",
    "name": "Flexão de braços",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Ative o core abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo o corpo alinhado.",
      "Faça uma pausa quando o peito esteja logo acima do chão e depois se empurre de volta à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0653",
    "name": "Flexão de braços no BOSU",
    "bodyPart": "peito",
    "equipment": "BOSU",
    "target": "peitorais",
    "instructions": [
      "Coloque o BOSU no chão com o lado plano para cima.",
      "Coloque-se em posição de flexão com as mãos nas bordas exteriores do BOSU.",
      "Ative o core abaixe o corpo para o BOSU flexionando os cotovelos.",
      "Empurre o corpo de volta à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0655",
    "name": "Flexão de braços na bola suíça",
    "bodyPart": "peito",
    "equipment": "bola suíça",
    "target": "peitorais",
    "instructions": [
      "Coloque a bola suíça no chão e fique de bruços com as mãos sobre a bola, afastadas na largura dos ombros.",
      "Estenda as pernas retas atrás do corpo, equilibrando sobre os dedos dos pés.",
      "Ative o core abaixe o peito para a bola flexionando os cotovelos, mantendo o corpo alinhado.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0656",
    "name": "Flexão de braços na bola suíça",
    "bodyPart": "peito",
    "equipment": "bola suíça",
    "target": "peitorais",
    "instructions": [
      "Coloque a bola suíça no chão e fique de bruços com as mãos sobre a bola, afastadas na largura dos ombros.",
      "Estenda as pernas retas atrás do corpo, equilibrando sobre os dedos dos pés.",
      "Ative o core abaixe o peito para a bola flexionando os cotovelos, mantendo o corpo alinhado.",
      "Faça uma pausa breve na parte baixa, depois empurre o corpo novamente para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "0659",
    "name": "Flexão de braços na parede",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé de frente para uma parede, a uma distância aproximada de um braço.",
      "Coloque as mãos na parede à altura dos ombros, um pouco mais afastadas que a largura dos ombros.",
      "Dê um passo atrás, mantendo o corpo reto e os pés separados à altura dos quadris.",
      "Flexione os cotovelos e abaixe o peito para a parede, mantendo o corpo alinhado."
    ]
  },
  {
    "id": "0658",
    "name": "Flexão de braços na parede — variação 2",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Fique de pé de frente para uma parede, a uma distância aproximada de um braço.",
      "Coloque as mãos na parede à altura dos ombros, um pouco mais afastadas que a largura dos ombros.",
      "Dê um passo para trás com os pés, mantendo-os separados à altura dos quadris.",
      "Ative o core e mantenha o corpo alinhado da cabeça aos calcanhares."
    ]
  },
  {
    "id": "0660",
    "name": "Flexão de braços com pegada fechada apoiada em halter",
    "bodyPart": "braços",
    "equipment": "halter",
    "target": "tríceps",
    "instructions": [
      "Comece em posição de flexão com as mãos próximas, diretamente embaixo dos ombros.",
      "Segure um halter em cada mão, apoiando no chão.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os cerca do tronco.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "0661",
    "name": "Flexão de braços com chute interno da perna",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo as costas retas e o core ativado.",
      "Ao empurrar de volta para cima, eleve uma perna do chão e lance para o lado, mantendo-a reta.",
      "Abaixe a perna de novo e repita a flexão, depois mude para a outra perna."
    ]
  },
  {
    "id": "0663",
    "name": "Flexão de braços com bola medicinal",
    "bodyPart": "peito",
    "equipment": "bola medicinal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos sobre a bola medicinal, afastadas na largura dos ombros.",
      "Ative o core abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo as costas retas.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1467",
    "name": "Flexão de braços nos antebraços",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece em posição de prancha com os antebraços no chão e os cotovelos diretamente embaixo dos ombros.",
      "Ative o core e mantenha o corpo alinhado da cabeça aos pés.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo-os próximos ao corpo.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3145",
    "name": "Flexão de braços com protração escapular",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e o corpo alinhado da cabeça aos calcanhares.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os cerca do tronco.",
      "Quando o peito esteja logo acima do chão, empurre com as mãos para estender os braços e levantar a parte superior do corpo.",
      "Na parte alta do movimento, separa as escápulas empurrando a parte superior das costas para o teto."
    ]
  },
  {
    "id": "0664",
    "name": "Flexão para Prancha Lateral",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de flexão com as mãos afastadas na largura dos ombros e o corpo alinhado.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo o core ativado.",
      "Empurre para cima para voltar à posição inicial.",
      "Desloca o peso para a mão esquerda e gire o corpo para a direita, elevando o braço direito para o teto."
    ]
  },
  {
    "id": "3533",
    "name": "Quadríceps",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Abaixe o corpo flexionando os joelhos e empurrando os quadris para trás como se sentasse-se em uma cadeira.",
      "Mantenha o peito erguido e as costas retas.",
      "Abaixe até que as coxas fiquem paralelas ao chão."
    ]
  },
  {
    "id": "3201",
    "name": "Abdominal curto parcial",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3552",
    "name": "Pés rápidos — variação 2",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços em relação ao tronco.",
      "Comece movando os pés rapidamente para cima e para baixo, como se estivesse correndo no lugar.",
      "Mantenha os movimentos rápidos e ligeiros, concentrando-se em ficar sobre a ponta dos pés.",
      "Continue durante o tempo ou o número de repetições desejado."
    ]
  },
  {
    "id": "0666",
    "name": "Flexão unilateral elevação",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Estenda um braço para o lado, paralelo ao chão.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo as costas retas e o core ativado.",
      "Empurre de volta à posição inicial, usando os músculos do peito para elever o corpo."
    ]
  },
  {
    "id": "0668",
    "name": "Ponte posterior declinada",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os pés apoiados no chão e os joelhos flexionados.",
      "Coloque os braços ao lado do corpo com as palmas voltadas para baixo.",
      "Ative os glúteos e os posteriores das coxas, e eleve os quadris do chão até que o corpo fique alinhado desde os joelhos até os ombros.",
      "Mantenha esta posição durante uns segundos e depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "0669",
    "name": "Alongamento posterior do deltoide",
    "bodyPart": "ombros",
    "equipment": "peso corporal",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Estenda o braço direito através do peito, colocando a mão esquerda sobre o cotovelo direito.",
      "Puxe suavemente do braço direito para o ombro esquerdo, sentindo um alongamento no ombro direito.",
      "Mantenha o alongamento durante 15-30 segundos, depois solte."
    ]
  },
  {
    "id": "0670",
    "name": "Barra fixa pronada posterior",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada pronada, um pouco mais largo que a altura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para cima, para a barra, mantendo os cotovelos próximos ao corpo.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "1582",
    "name": "Postura reclinada segurando o dedão com corda",
    "bodyPart": "pernas",
    "equipment": "corda",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços aos lados.",
      "Enrole a corda ao redor da planta do pé direito e segure os extremidades da corda com as mãos.",
      "Eleve lentamente a perna direita em direção ao peito, mantendo o joelho reto e o pé flexionado.",
      "Mantenha o alongamento durante uns segundos e depois abaixe lentamente a perna de volta à posição inicial."
    ]
  },
  {
    "id": "3236",
    "name": "Elevação de quadril ajoelhada com faixa elástica (feminino)",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "glúteos",
    "instructions": [
      "Comece ajoelhando no chão com os joelhos separados à altura dos quadris e os pés flexionados.",
      "Envolva a faixa elástica ao redor das coxas, logo acima dos joelhos.",
      "Coloque as mãos nos quadris ou estenda-as à sua frente para manter o equilíbrio.",
      "Ative os glúteos e os músculos do core."
    ]
  },
  {
    "id": "3007",
    "name": "Cadeira extensora com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "quadríceps",
    "instructions": [
      "Segure a faixa elástica a um ponto de ancoragem firme assegure-a ao redor de seu tornozelo.",
      "Fique de pé de frente para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Mantenha o core ativado e a parte superior do corpo estável, estenda a perna reta à sua frente.",
      "Faça uma pausa por alguns segundos na parte alta e depois volte lentamente a perna à posição inicial."
    ]
  },
  {
    "id": "3123",
    "name": "Rosca bíceps sentado com faixa elástica",
    "bodyPart": "braços",
    "equipment": "faixa elástica",
    "target": "bíceps",
    "instructions": [
      "Sente-se em uma cadeira ou banco com as costas retas e os pés apoiados no chão.",
      "Segure a faixa elástica com uma pegada supinada, com as palmas voltadas para cima e os braços estendidos ao lado do corpo.",
      "Mantenha a parte superior dos braços imóvel, expire e flexione a faixa elástica para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "3124",
    "name": "Supino sentado com faixa elástica",
    "bodyPart": "peito",
    "equipment": "faixa elástica",
    "target": "peitorais",
    "instructions": [
      "Sente-se em uma cadeira ou banco com as costas retas e os pés apoiados no chão.",
      "Segure as alças da faixa elástica em cada mão, com as palmas voltadas para baixo e os cotovelos flexionados em um ângulo de 90 graus.",
      "Estenda os braços para a frente, afastando a faixa elástica do peito.",
      "Faça uma pausa por alguns segundos ao final do movimento, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "3006",
    "name": "Abdução de quadril sentado com faixa elástica",
    "bodyPart": "pernas",
    "equipment": "faixa elástica",
    "target": "abdutores",
    "instructions": [
      "Sente-se em uma cadeira ou banco com as costas retas e os pés apoiados no chão.",
      "Envolva a faixa elástica ao redor das coxas, logo acima dos joelhos.",
      "Coloque as mãos nos lados da cadeira ou o banco para maior apoio.",
      "Ative os abdutores (os músculos externos da coxa) e empurre lentamente os joelhos para fora, contra a resistência da faixa elástica."
    ]
  },
  {
    "id": "3122",
    "name": "Desenvolvimento de ombros sentado com faixa elástica",
    "bodyPart": "ombros",
    "equipment": "faixa elástica",
    "target": "deltoides",
    "instructions": [
      "Sente-se em uma cadeira ou banco com as costas retas e os pés apoiados no chão.",
      "Segure a faixa elástica com as duas mãos, com as palmas para a frent, e eleve até a altura dos ombros.",
      "Empurre a faixa elástica acima da cabeça, estendendo completamente os braços.",
      "Faça uma pausa por alguns segundos na parte alta e depois abaixe lentamente a faixa elástica até a altura dos ombros."
    ]
  },
  {
    "id": "3144",
    "name": "Remada sentada com costas retas e faixa elástica",
    "bodyPart": "costas",
    "equipment": "faixa elástica",
    "target": "parte superior das costas",
    "instructions": [
      "Sente-se no chão com as pernas estendidas e enrole a faixa elástica ao redor dos pés.",
      "Segure os extremos da faixa elástica com as mãos, com as palmas voltadas uma para a outra.",
      "Mantenha as costas retas e incline-se ligeiramente para trás, ativando o core.",
      "Puxe a faixa elástica em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "0872",
    "name": "Abdominal Inverso",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os braços estendidos ao lado do corpo.",
      "Flexione os joelhos e eleve os pés do chão, levando as coxas perpendiculares ao chão.",
      "Contraia o abdômen e eleve os quadris do chão, levando os joelhos em direção ao peito.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "0672",
    "name": "Mergulho reverso",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Coloque-se entre duas barras paralelas com os braços completamente estendidos e o corpo reto.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Faça uma pausa breve, depois empurre o corpo novamente para cima à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0673",
    "name": "Puxada alta com pegada invertida máquina na máquina articulada",
    "bodyPart": "costas",
    "equipment": "máquina articulada",
    "target": "dorsais",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os joelhos embaixo dos apoios acolchoados e os pés apoiados no chão.",
      "Segure as alças usando uma pegada supinada, um pouco além da largura dos ombros.",
      "Sente-se ereto com o peito para fora e os ombros para trás, mantendo um ligeiro arco na zona lombar.",
      "Puxe as alças em direção ao peito, aproximando as escápulas."
    ]
  },
  {
    "id": "0674",
    "name": "Barra fixa pronada com pegada invertida",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para a barra, levando o peito à frente.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "0675",
    "name": "Hiperextensão reversa na bola suíça",
    "bodyPart": "pernas",
    "equipment": "bola suíça",
    "target": "glúteos",
    "instructions": [
      "Deite-se de bruços sobre uma bola suíça com os quadris apoiadas na bola e as pernas estendidas retas atrás do corpo.",
      "Coloque as mãos no chão à sua frente para ter mais estabilidade.",
      "Ativando os glúteos e os posteriores das coxas, eleve as pernas para o teto o mais alto que puder.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1423",
    "name": "Hiperextensão reversa no banco reto",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de bruços em um banco plano com os quadris na borda e as pernas pendurando do banco.",
      "Segure do banco para manter a estabilidade.",
      "Mantenha as pernas retas, eleve para o teto o mais alto que puder.",
      "Contraia os glúteos na parte alta do movimento."
    ]
  },
  {
    "id": "3663",
    "name": "Prancha reversa com elevação de perna",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente as mãos apoiadas no chão atrás do corpo, com os dedos apontando para os pés.",
      "Pressione com as mãos e eleve os quadris do chão, chegando a uma posição de prancha inverso.",
      "Ative o core e eleve uma perna do chão, estendendo-a reta para o teto.",
      "Mantenha a posição por alguns segundos e depois abaixe a perna de novo."
    ]
  },
  {
    "id": "0677",
    "name": "Mergulho nas Argolas",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece pendurando dos anéis com os braços completamente estendidos e o corpo reto.",
      "Abaixe o corpo flexionando os cotovelos até que os ombros fiquem por embaixo dos cotovelos.",
      "Empurre-se de volta para cima à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "2571",
    "name": "Alongamento sapo com balanço",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece ajoelhando no chão com os joelhos separados à altura dos quadris.",
      "Coloque as mãos no chão à sua frente para maior apoio.",
      "Incline-se lentamente para a frente, deslocando o peso para as mãos e estendendo as pernas atrás do corpo.",
      "Mantenha as costas retas e ative os glúteos enquanto empurre os quadris para trás e para cima em direção ao teto."
    ]
  },
  {
    "id": "0678",
    "name": "Barra fixa/Pulldown Rocky",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé em frente a uma barra fixa com os pés afastados na largura dos ombros.",
      "Estenda os braços para cima e segure a barra com pegada pronada, ligeiramente mais largo que a altura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para a barra, levando o peito à frente."
    ]
  },
  {
    "id": "2208",
    "name": "Alongamento das costas com rolo",
    "bodyPart": "costas",
    "equipment": "rolo",
    "target": "eretores da coluna",
    "instructions": [
      "Comece sentando no chão com as pernas estendidas à sua frente.",
      "Coloque o rolo perpendicular ao corpo, diretamente abaixo dos glúteos.",
      "Gire lentamente o corpo para trás, deixando que o rolo se desloque para cima por as costas.",
      "Continue girando até que o rolo chegue à parte superior de as costas."
    ]
  },
  {
    "id": "2204",
    "name": "Prancha serrote com rolo",
    "bodyPart": "abdômen",
    "equipment": "rolo",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de prancha com os antebraços sobre o rolo e o corpo alinhado.",
      "Ative o core e gire lentamente o rolo para a frente, estendendo o corpo o máximo que puder mantendo o controle.",
      "Faça uma pausa por alguns segundos no ponto mais longínquo e depois gire lentamente o rolo de volta para sua posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "2205",
    "name": "Alongamento lateral do quadril com rolo",
    "bodyPart": "pernas",
    "equipment": "rolo",
    "target": "glúteos",
    "instructions": [
      "Comece ajoelhando no chão com o rolo colocado embaixo dos quadris.",
      "Coloque as mãos sobre o rolo para maior apoio.",
      "Gire lentamente o rolo para a frente, estendendo os quadris e estendendo os glúteos.",
      "Mantenha o alongamento durante uns segundos, depois retorne à posição inicial."
    ]
  },
  {
    "id": "2202",
    "name": "Alongamento quadril com rolo",
    "bodyPart": "pernas",
    "equipment": "rolo",
    "target": "glúteos",
    "instructions": [
      "Comece sentando no chão com as pernas estendidas à sua frente.",
      "Coloque o rolo embaixo dos glúteos, logo acima dos joelhos.",
      "Incline-se para trás e coloque as mãos no chão atrás do corpo para se apoiar.",
      "Ative os glúteos e gire lentamente o rolo para a frente, flexionando os joelhos e levando em direção ao peito."
    ]
  },
  {
    "id": "2206",
    "name": "Abdominal reverso com rolo",
    "bodyPart": "abdômen",
    "equipment": "rolo",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os braços estendidos retos acima da cabeça e as pernas retas à sua frente.",
      "Coloque o rolo entre os pés e segure com os dedos dos pés.",
      "Contraia o abdômen e eleve as pernas do chão e flexione os joelhos em direção ao peito, girando o rolo para o corpo.",
      "Faça uma pausa por alguns segundos na parte alta e depois abaixe lentamente as pernas de volta à posição inicial, girando o rolo afastando do corpo."
    ]
  },
  {
    "id": "2203",
    "name": "Flexor, depressor e retrator de ombro sentado com rolo",
    "bodyPart": "peito",
    "equipment": "rolo",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma superfície plana com as pernas estendidas à sua frente.",
      "Segure o rolo com as duas mãos, com as palmas voltadas para baixo, e coloque sobre suas coxas.",
      "Incline-se ligeiramente para a frente afasta o rolo do corpo, estendendo os braços retos à sua frente.",
      "Faça uma pausa por alguns segundos, depois gire o rolo lentamente de volta para o corpo, flexionando os braços e trazendo-o de novo para as coxas."
    ]
  },
  {
    "id": "2209",
    "name": "Flexor, depressor e retrator de ombro unilateral sentado com rolo",
    "bodyPart": "peito",
    "equipment": "rolo",
    "target": "peitorais",
    "instructions": [
      "Sente-se sobre uma superfície plana com as pernas estendidas à sua frente.",
      "Segure o rolo com as duas mãos, com as palmas voltadas para baixo, e coloque sobre suas coxas.",
      "Incline-se ligeiramente para trás e contraia os músculos do core.",
      "Eleve o rolo até a altura dos ombros, mantendo os braços retos."
    ]
  },
  {
    "id": "2207",
    "name": "Alongamento lateral de dorsal com rolo",
    "bodyPart": "costas",
    "equipment": "rolo",
    "target": "dorsais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure o rolo com as duas mãos à frente do corpo.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Estenda os braços para a frente gire o rolo para os pés, sentindo um alongamento nos dorsais.",
      "Mantenha o alongamento durante uns segundos, depois gire o rolo lentamente de volta à posição inicial."
    ]
  },
  {
    "id": "0680",
    "name": "Escalada de Corda",
    "bodyPart": "costas",
    "equipment": "corda",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé em frente à corda com os pés afastados na largura dos ombros.",
      "Segure a corda com as duas mãos, com as palmas voltadas para você.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Comece a subir pela corda alternando os movimentos das mãos."
    ]
  },
  {
    "id": "0685",
    "name": "Corrida",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece de pé com os pés separados à altura do quadril.",
      "Ative o core e mantenha a parte superior do corpo relaxada.",
      "Comece a correr em ritmo leve no lugar, levantando os joelhos em direção ao peito e aterrissando suavemente sobre a ponta dos pés.",
      "Mantenha um ritmo constante continue correndo em ritmo leve durante a duração ou distância desejada."
    ]
  },
  {
    "id": "0684",
    "name": "Corrida com equipamento",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece de pé com os pés separados à altura do quadril.",
      "Ative o core e mantenha a parte superior do corpo relaxada.",
      "Comece a correr em ritmo leve no lugar, levantando os joelhos em direção ao peito e aterrissando suavemente sobre a ponta dos pés.",
      "Mantenha um ritmo constante continue correndo em ritmo leve durante a duração ou distância desejada."
    ]
  },
  {
    "id": "1585",
    "name": "Alongamento de Corredor",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Fique de pé com os pés separados à altura do quadril.",
      "Dê um passo para a frente com o pé direito, mantendo o pé esquerdo firme no chão.",
      "Flexione o joelho direito e abaixe o corpo, mantendo a perna esquerda reta.",
      "Coloque as mãos sobre a coxa direita para se apoiar."
    ]
  },
  {
    "id": "0687",
    "name": "Rotação russa",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Incline-se ligeiramente para trás mantendo as costas retas e o core ativado.",
      "Aproxime as mãos à frente do peito ou segure um peso se desejar.",
      "Eleve os pés do chão, equilibrando-se sobre os isquiones."
    ]
  },
  {
    "id": "3012",
    "name": "Mergulho escapular",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "trapézios",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e os braços estendidos à sua frente.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Abaixe o corpo flexionando os cotovelos e retraindo as escápulas, como se tentasse contrair um lápis entre elas.",
      "Faça uma pausa por alguns segundos na posição abaixe, depois empurre com as mãos para estender os cotovelos e voltar à posição inicial."
    ]
  },
  {
    "id": "3021",
    "name": "Flexão de braços escapular",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "serrátil anterior",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos diretamente abaixo dos ombros e o corpo alinhado.",
      "Abaixe o peito em direção ao chão, mantendo os cotovelos próximos ao corpo.",
      "À medida que abaixa, aproxime as escápulas e empurre o peito para a frente.",
      "Faça uma pausa por alguns segundos na posição abaixe, depois empurre de novo para cima até a posição inicial."
    ]
  },
  {
    "id": "0688",
    "name": "Puxada Escapular",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "trapézios",
    "instructions": [
      "Comece pendurando de uma barra fixa com as palmas para fora e os braços completamente estendidos.",
      "Retrae as escápulas levando-as para baixo e atrás.",
      "Ative os músculos das costas e puxe o corpo para a barra, concentrando-se em aproximar as escápulas.",
      "Faça uma pausa breve no ponto mais alto do movimento, depois abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3219",
    "name": "Saltos tesoura (masculino)",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Salte do chão e simultaneamente cruze a perna direita por adiante da perna esquerda.",
      "Ao aterrisser, muda rapidamente de perna, cruzando a perna esquerda por adiante da perna direita.",
      "Continue alternando as pernas e saltando o mais rápido possível."
    ]
  },
  {
    "id": "1390",
    "name": "Alongamento de panturrilhas sentado (masculino)",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se na borda de uma cadeira ou banco com os pés apoiados no chão.",
      "Estenda uma perna reta à sua frente, mantendo o calcanhar no chão.",
      "Incline-se ligeiramente para a frente, sentindo um alongamento na panturrilha.",
      "Mantenha o alongamento durante 20-30 segundos."
    ]
  },
  {
    "id": "1424",
    "name": "Alongamento de glúteo sentado",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Flexione o joelho direito e cruze o tornozelo direito sobre a coxa esquerda.",
      "Coloque a mão direita no chão atrás do corpo para se apoiar.",
      "Com a mão esquerda, pressione suavemente o joelho direito para aprofundar o alongamento."
    ]
  },
  {
    "id": "0689",
    "name": "Elevação de pernas sentado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se em um banco plano com as costas retas e os pés apoiados no chão.",
      "Coloque as mãos aos lados do banco para se apoiar.",
      "Mantenha as pernas retas, levante-as lentamente à sua frente até que fiquem paralelas ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0690",
    "name": "Alongamento lombar sentado",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Sente-se na borda de uma cadeira com os pés apoiados no chão.",
      "Coloque as mãos sobre as coxas ou aos lados da cadeira para se apoiar.",
      "Incline-se lentamente para a frente desdo quadril, mantendo as costas retas.",
      "Sente-se o alongamento na zona lombar e mantenha a posição durante 20-30 segundos."
    ]
  },
  {
    "id": "2567",
    "name": "Alongamento sentado do piriforme",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Flexione o joelho direito e coloque o pé direito na parte exterior do joelho esquerdo.",
      "Coloque o cotovelo esquerdo na parte exterior do joelho direito e gire suavemente o tronco para a direita.",
      "Mantenha o alongamento durante 20-30 segundos, depois muda de lado e repita."
    ]
  },
  {
    "id": "0691",
    "name": "Abdominal curto lateral sentado na parede",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com as costas contra uma parede as pernas estendidas à sua frente.",
      "Flexione os joelhos e coloque os pés apoiados no chão, separados à altura do quadril.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e incline para um lado, levando o cotovelo para o quadril."
    ]
  },
  {
    "id": "1587",
    "name": "Sequência sentada em ângulo aberto",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Sente-se no chão com as pernas estendidas formando um ângulo amplo.",
      "Flexione os pés e contraia os quadríceps.",
      "Coloque as mãos no chão atrás do corpo para se apoiar.",
      "Mantenha as costas retas, incline-se para a frente desdo quadril."
    ]
  },
  {
    "id": "0697",
    "name": "Flexão nórdica autoassistida",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de costas sobre uma colchonete ou banco com as pernas estendidas.",
      "Coloque as mãos aos lados ou embaixo dos glúteos para se apoiar.",
      "Flexione os joelhos e eleve os pés do chão, levando as coxas em direção ao peito.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "1766",
    "name": "Flexão nórdica autoassistida",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de bruços em uma máquina de rosca femoral com as pernas estendidas e os tornozelos enganchados baixo a alavanca acolchoada.",
      "Coloque as mãos nas alças laterais da máquina para se apoiar.",
      "Mantenha a parte superior do corpo imóvel, expire e flexione as pernas para cima o mais possível.",
      "Mantenha a posição contraída durante uma pausa breve contraindo os posteriores das coxas."
    ]
  },
  {
    "id": "0696",
    "name": "Flexão nórdica autoassistida no chão",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços aos lados.",
      "Flexione os joelhos e coloque os pés apoiados no chão, separados à altura do quadril.",
      "Eleve os quadris do chão, ativando os glúteos e os posteriores das coxas.",
      "Flexione lentamente as pernas para os glúteos, mantendo os quadris elevadas."
    ]
  },
  {
    "id": "3222",
    "name": "Agachamento semi com salto (masculino)",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Flexione os joelhos e abaixe o corpo para uma posição de agachamento.",
      "Salte de forma explosiva, estendendo os quadris e os joelhos enquanto balance os braços para gerar impulso.",
      "Aterrisse suavemente sobre a ponta dos pés e passa de imediato à seguinte repetição."
    ]
  },
  {
    "id": "3656",
    "name": "Corrida com passada curta",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Encontre um espaço aberto ou uma fita de correr para realizar o exercício.",
      "Fique de pé com os pés separados à altura do quadril.",
      "Comece a correr em ritmo leve no lugar, levantando os joelhos alto e movando os braços.",
      "Após uns segundos, comece a dar passos curtos para a frente, mantendo um ritmo rápido."
    ]
  },
  {
    "id": "1763",
    "name": "Barra fixa com pegada na largura dos ombros",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada à altura dos ombros, com as palmas voltadas para fora.",
      "Pendure-se livremente com os braços completamente estendidos.",
      "Ative os músculos das costas e puxe o corpo para a barra até que o queixo fique acima dela.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3699",
    "name": "Toque no ombro",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos diretamente abaixo dos ombros e o corpo alinhado.",
      "Ative o core e eleve a mão direita do chão, estendendo-a para tocar o ombro esquerdo.",
      "Coloque a mão direita de novo no chão e repita tocando o ombro direito com a mão esquerda.",
      "Continue alternando os toques de ombro mantendo os quadris e o tronco estáveis."
    ]
  },
  {
    "id": "0699",
    "name": "Flexão de braços com toque no ombro",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e o corpo alinhado da cabeça aos calcanhares.",
      "Abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo-os cerca do tronco.",
      "Enquanto empurre para cima, eleve a mão direita do chão e toca o ombro esquerdo.",
      "Volte a colocar a mão direita no chão e repita a flexão, desta vez levantando a mão esquerda e tocando o ombro direito."
    ]
  },
  {
    "id": "1774",
    "name": "Abdução de quadril em ponte lateral",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "abdutores",
    "instructions": [
      "Deite-se de lado com as pernas estendidas e uma sobre a outra.",
      "Apoie-se sobre o antebraço, mantendo o cotovelo diretamente embaixo do ombro.",
      "Ative o core e eleve os quadris do chão, formando uma linha reta desde a cabeça até os pés.",
      "Mantenha o core ativado, eleve a perna superior o máximo possível sem rotacionar os quadris."
    ]
  },
  {
    "id": "0705",
    "name": "Prancha lateral — variação 2",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de lado com as pernas estendidas e uma sobre a outra.",
      "Coloque o antebraço no chão diretamente abaixo do ombro, com o cotovelo flexionado em um ângulo de 90 graus.",
      "Ative o core e eleve os quadris do chão, formando uma linha reta desde a cabeça até os pés.",
      "Mantenha esta posição durante o tempo desejado."
    ]
  },
  {
    "id": "0709",
    "name": "Elevação lateral de quadril nas barras paralelas",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique de pé entre duas barras paralelas com os pés afastados na largura dos ombros.",
      "Coloque as mãos sobre as barras e eleve o corpo do chão, apoiando seu peso nos braços.",
      "Contraia o abdômen e eleve lentamente as pernas para o lado, mantendo-as retas.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0710",
    "name": "Abdução de quadril lateral",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "abdutores",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e as mãos nos quadris.",
      "Mova o peso a uma perna e eleve a perna oposta para o lado, mantendo-a reta.",
      "Faça uma pausa por alguns segundos na posição alta, depois abaixe lentamente a perna de volta à posição inicial.",
      "Repita do outro lado."
    ]
  },
  {
    "id": "1358",
    "name": "Alongamento Lateral no Chão",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Deite-se de lado com as pernas retas e o braço de abaixo estendido reto acima da cabeça.",
      "Flexione o joelho de acima e coloque o pé no chão em frente à perna de abaixo.",
      "Estenda o braço de acima da cabeça e segure-se a algo estável, como uma parede ou um móvel.",
      "Eleve lentamente a perna de abaixo do chão, mantendo-a reta, até sentir um alongamento no lado."
    ]
  },
  {
    "id": "3667",
    "name": "Adução de quadril lateral deitado (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "adutores",
    "instructions": [
      "Deite-se de lado com as pernas retas e empilhadas uma sobre a outra.",
      "Coloque o braço de abaixo baixo a cabeça para se apoiar.",
      "Ative os adutores e eleve a perna de acima o máximo possível sem rotacionar os quadris nem inclinar-se para trás.",
      "Faça uma pausa por alguns segundos na posição alta, depois abaixe lentamente a perna de volta à posição inicial."
    ]
  },
  {
    "id": "1775",
    "name": "Adução de quadril em prancha lateral",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "adutores",
    "instructions": [
      "Comece deitado de lado com as pernas estendidas e empilhadas uma sobre a outra.",
      "Apoie-se sobre o antebraço, mantendo o cotovelo diretamente embaixo do ombro.",
      "Ative o core e eleve os quadris do chão, formando uma linha reta desde a cabeça até os pés.",
      "Mantenha a posição de prancha lateral, eleve a perna de acima para o teto, mantendo-a reta."
    ]
  },
  {
    "id": "0716",
    "name": "Alongamento lateral do pescoço com pressão",
    "bodyPart": "pescoço",
    "equipment": "peso corporal",
    "target": "levantador da escápula",
    "instructions": [
      "Fique de pé ou sente-se ereto com os ombros relaxados.",
      "Incline a cabeça para a direita, levando a orelha direita para o ombro direito.",
      "Coloque a mão direita no lado esquerdo da cabeça e aplica uma pressão suave para aumentar o alongamento.",
      "Mantenha o alongamento durante 15-30 segundos."
    ]
  },
  {
    "id": "0717",
    "name": "Flexão de braços lateral",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece deitado de lado com as pernas estendidas e empilhadas uma sobre a outra.",
      "Coloque a mão de abaixo no chão diretamente embaixo do ombro, com os dedos apontando para a frente.",
      "Empurre com a mão de abaixo para levantar o corpo do chão, mantendo as pernas retas e o core ativado.",
      "Estenda o braço de acima reto para o teto, formando uma linha reta da cabeça aos calcanhares."
    ]
  },
  {
    "id": "0721",
    "name": "Alongamento lateral do punho com puxada",
    "bodyPart": "antebraços",
    "equipment": "peso corporal",
    "target": "antebraços",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços estendidos à sua frente.",
      "Estenda o braço direito para o lado, paralelo ao chão, com a palma voltada para baixo.",
      "Com a mão esquerda, segure a mão direita e puxe-a suavemente para o corpo, sentindo um alongamento no antebraço direito.",
      "Mantenha o alongamento durante 15-30 segundos, depois solte."
    ]
  },
  {
    "id": "0720",
    "name": "Barra Fixa Lateral",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure uma barra fixa com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo relaxado.",
      "Levante-se flexionando os cotovelos e levando o queixo para a barra, mantendo o corpo reto."
    ]
  },
  {
    "id": "3213",
    "name": "Toque nos pés lateral para lateral (masculino)",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços estendidos para os lados.",
      "Flexione a cintura para a direita, levando a mão direita para o pé direito mantendo a mão esquerda estendida para o lado.",
      "Volte à posição inicial e depois flexione a cintura para a esquerda, levando a mão esquerda para o pé esquerdo mantendo a mão direita estendida para o lado.",
      "Repita o movimento de flexão lateral o número de repetições desejado."
    ]
  },
  {
    "id": "0725",
    "name": "Flexão Unilateral",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em posição de flexão com as mãos afastadas na largura dos ombros e uma mão colocada um pouco mais larga que a outra.",
      "Ative o core abaixe o corpo em direção ao chão flexionando os cotovelos, mantendo as costas retas.",
      "Ao baixar, mova o peso para um lado e eleve o braço oposto do chão, estendendo-o reto para o lado.",
      "Empurre com o peito e os tríceps para subir o corpo de volta à posição inicial, enquanto abaixa simultaneamente o braço estendido de volta ao chão."
    ]
  },
  {
    "id": "3645",
    "name": "Ponte unilateral com perna estendida",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Estenda uma perna reta para a frente.",
      "Ative os glúteos e eleve os quadris do chão, formando uma linha reta desde os joelhos até os ombros.",
      "Mantenha a posição alta por alguns segundos, depois abaixe lentamente os quadris de volta à posição inicial."
    ]
  },
  {
    "id": "0727",
    "name": "Elevação de panturrilha unilateral sobre um halter",
    "bodyPart": "panturrilhas",
    "equipment": "halter",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés separados à altura do quadril e segure um halter em uma mão.",
      "Eleve um pé do chão e mantenha o equilíbrio sobre o outro pé.",
      "Eleve lentamente o calcanhar o máximo possível, usando os músculos da panturrilha.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o calcanhar de volta para baixo."
    ]
  },
  {
    "id": "0730",
    "name": "Deslizamento unilateral na plataforma",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Comece de pé com um pé sobre uma plataforma ou tabela deslizente.",
      "Flexione ligeiramente o joelho e deslize o pé sobre a plataforma para trás, estendendo a perna.",
      "Mantenha o core ativado e conserva uma postura reta durante todo o movimento.",
      "Volte lentamente à posição inicial deslizando o pé de regresso à posição inicial."
    ]
  },
  {
    "id": "1759",
    "name": "Agachamento unilateral pistol (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços estendidos à sua frente.",
      "Eleve o pé direito do chão e estenda-o para a frente.",
      "Abaixe lentamente o corpo flexionando o joelho esquerdo e empurrando os quadris para trás.",
      "Mantenha o peito erguido e as costas retas enquanto abaixa o corpo."
    ]
  },
  {
    "id": "1489",
    "name": "Agachamento sissy",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure de um objeto estável para manter o equilíbrio se necessário.",
      "Abaixe lentamente o corpo flexionando os joelhos e inclinando-se para trás, mantendo o tronco ereto.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou tão longe como possa chegar comodamente."
    ]
  },
  {
    "id": "0735",
    "name": "Abdominal — variação 2",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve lentamente a parte superior do corpo do chão, flexionando o tronco para a frente até que o seu tronco forme um ângulo de 45 graus.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3679",
    "name": "Abdominal com braços no peitoral",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Cruze os braços sobre o peito.",
      "Contraindo o abdômen, eleve a parte superior do corpo do chão para os joelhos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3361",
    "name": "Saltos de patinador",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e salte para a direita, aterrissando sobre o pé direito.",
      "Ao aterrisser, balance a perna esquerda por trás da perna direita e toca o solo com os dedos do pé esquerdo.",
      "Salte imediatamente para a esquerda, aterrissando sobre o pé esquerdo."
    ]
  },
  {
    "id": "2142",
    "name": "Ergômetro de esqui",
    "bodyPart": "braços",
    "equipment": "SkiErg",
    "target": "tríceps",
    "instructions": [
      "Ajuste a altura do assento e os apoio para os pés a uma posição confortável.",
      "Segure as alças usando uma pegada pronada, com as palmas voltadas para baixo.",
      "Sente-se ereto com os pés apoiados sobre os apoio para os pés.",
      "Estenda os braços retos à sua frente, mantendo os cotovelos levemente flexionados."
    ]
  },
  {
    "id": "3671",
    "name": "Ski passo",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e mantenha as costas retas.",
      "Salte para a direita, aterrissando sobre o pé direito enquanto balance a perna esquerda por trás da perna direita.",
      "Salte imediatamente para a esquerda, aterrissando sobre o pé esquerdo enquanto balance a perna direita por trás da perna esquerda."
    ]
  },
  {
    "id": "3304",
    "name": "Giro na barra",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Comece pendurando de uma barra com os braços completamente estendidos e o corpo relaxado.",
      "Ative o core e eleve as pernas, levando os joelhos em direção ao peito.",
      "Continue levantando as pernas acima da cabeça, permitindo que o corpo passe entre os braços.",
      "Uma vez que as pernas estejam completamente estendidas acima da cabeça, comece às baixar de novo para a posição inicial."
    ]
  },
  {
    "id": "1425",
    "name": "Leg press 45° unilateral na máquina de trenó",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina de trenó a um ângulo de 45 graus.",
      "Sente-se na máquina de trenó com as costas contra o encosto e os pés sobre a placa.",
      "Coloque um pé sobre a placa e estenda a perna, empurrando o trenó afastando-o do corpo.",
      "Flexione lentamente o joelho e abaixe o trenó de volta à posição inicial."
    ]
  },
  {
    "id": "0738",
    "name": "Elevação de panturrilhas no leg press 45°",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina de trenó a um ângulo de 45 graus.",
      "Coloque os pés sobre a plataforma do trenó com as pontas dos pés apontando para a frente.",
      "Empurre a plataforma do trenó afastando-a do corpo estendendo os tornozelos e as panturrilhas.",
      "Faça uma pausa por alguns segundos na posição alta, depois abaixe lentamente a plataforma do trenó de volta à posição inicial."
    ]
  },
  {
    "id": "0739",
    "name": "Leg press 45° na máquina de trenó",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste o assento e a placa da máquina de trenó a uma posição confortável.",
      "Sente-se na máquina de trenó com as costas contra o encosto e os pés afastados na largura dos ombros sobre a placa.",
      "Segure as alças aos lados do assento para ter mais estabilidade.",
      "Empurre a placa afastando do corpo estendendo as pernas, mantendo os calcanhares sobre a placa."
    ]
  },
  {
    "id": "1464",
    "name": "Leg press 45° na máquina de trenó — vista posterior",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste o assento da máquina de trenó de modo que os joelhos fiquem em um ângulo de 45 graus.",
      "Sente-se na máquina de trenó com as costas contra o encosto e os pés afastados na largura dos ombros sobre a placa.",
      "Segure as alças aos lados do assento para ter mais estabilidade.",
      "Empurre a placa afastando do corpo estendendo as pernas, mantendo os calcanhares sobre a placa."
    ]
  },
  {
    "id": "1463",
    "name": "Leg press 45° na máquina de trenó — vista lateral",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste o assento da máquina de trenó de modo que os joelhos fiquem em um ângulo de 90 graus quando os pés estejam sobre a placa.",
      "Sente-se na máquina de trenó com as costas apoiadas no encosto e os pés afastados na largura dos ombros sobre a placa.",
      "Segure as alças aos lados do assento para ter mais estabilidade.",
      "Empurre contra a placa para estender as pernas, estendendo-as por completo."
    ]
  },
  {
    "id": "0740",
    "name": "Leg press 45° com base aberta na máquina de trenó",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina de trenó a um ângulo de 45 graus.",
      "Sente-se na máquina de trenó com as costas contra o encosto e os pés sobre a plataforma.",
      "Coloque os pés mais afastados que a largura dos ombros.",
      "Empurre contra a plataforma para estender as pernas e alinhar os joelhos."
    ]
  },
  {
    "id": "1391",
    "name": "Elevação de panturrilhas no leg press",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste o assento da máquina de imprensa de pernas de maneira que os joelhos fiquem levemente flexionados quando os pés estejam sobre o trenó.",
      "Coloque os pés afastados na largura dos ombros sobre o trenó, com as pontas dos pés apontando para a frente.",
      "Solte as alças de segurança e empurre o trenó afastando-o do corpo estendendo os joelhos e os tornozelos.",
      "Faça uma pausa por alguns segundos na parte alta do movimento, depois abaixe lentamente o trenó flexionando os joelhos e os tornozelos."
    ]
  },
  {
    "id": "0741",
    "name": "Agachamento hack com base fechada na máquina de trenó",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina de trenó a um peso confortável e coloque com as costas contra o encosto.",
      "Coloque os pés afastados na largura dos ombros sobre a plataforma, com os dedos dos pés ligeiramente apontando para fora.",
      "Segure as alças aos lados da máquina para ter mais estabilidade.",
      "Ative o core abaixe lentamente o corpo flexionando os joelhos e os quadris, mantendo as costas retas."
    ]
  },
  {
    "id": "0742",
    "name": "Elevação de panturrilhas inclinada para frente na máquina de trenó",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina de trenó a um peso confortável e posicione-se na máquina com a ponta dos pés sobre a plataforma e os calcanhares pendurando.",
      "Coloque as mãos nas alças ou aos lados da máquina para se apoiar.",
      "Ative as panturrilhas e eleve lentamente os calcanhares o máximo possível, empurrando contra a resistência do trenó.",
      "Faça uma breve pausa no ponto mais alto do movimento, depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "0743",
    "name": "Agachamento hack na máquina de trenó",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina de trenó a uma posição confortável segundo sua altura.",
      "Fique de pé com os pés afastados na largura dos ombros sobre a plataforma, com os dedos dos pés ligeiramente apontando para fora.",
      "Segure das alças ou barras para ter mais estabilidade.",
      "Abaixe o corpo flexionando os joelhos e os quadris, mantendo as costas retas e o peito erguido."
    ]
  },
  {
    "id": "2334",
    "name": "Elevação de panturrilhas deitado na máquina de trenó",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a máquina de trenó a um peso adequado.",
      "Sente-se na máquina de trenó com as costas contra o encosto e os pés sobre a plataforma.",
      "Coloque a ponta e o apoio acolchoado dos pés na borda da plataforma, com os calcanhares pendurando.",
      "Empurre a plataforma afastando-a do corpo estendendo os tornozelos, mantendo os joelhos levemente flexionados."
    ]
  },
  {
    "id": "0744",
    "name": "Agachamento deitado na máquina de trenó",
    "bodyPart": "pernas",
    "equipment": "máquina de trenó",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina de trenó a um peso adequado.",
      "Deite-se de costas na máquina de trenó com os pés sobre a placa.",
      "Coloque os pés afastados na largura dos ombros e ligeiramente angulados para fora.",
      "Segure as alças da máquina de trenó para ter mais estabilidade."
    ]
  },
  {
    "id": "1392",
    "name": "Elevação de panturrilha unilateral no leg press",
    "bodyPart": "panturrilhas",
    "equipment": "máquina de trenó",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste o assento da máquina de imprensa de pernas de maneira que os joelhos fiquem levemente flexionados quando os pés estejam sobre o trenó.",
      "Sente-se na máquina com as costas contra o encosto e os pés sobre o trenó, afastados na largura dos ombros.",
      "Coloque a ponta e o apoio acolchoado dos pés sobre o trenó, mantendo os calcanhares levantados.",
      "Empurre o trenó para a frente estendendo os tornozelos, mantendo os joelhos levemente flexionados."
    ]
  },
  {
    "id": "1496",
    "name": "Marreta",
    "bodyPart": "abdômen",
    "equipment": "marreta",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure o marreta com as duas mãos.",
      "Ative o core e mantenha as costas retas.",
      "Balance o marreta em direção ao chão, usando a força do core da parte superior do corpo.",
      "Enquanto balance para baixo, gire os quadris e transfere a força ao marreta."
    ]
  },
  {
    "id": "0746",
    "name": "Encolhimento de ombros costas na máquina Smith",
    "bodyPart": "costas",
    "equipment": "máquina Smith",
    "target": "trapézios",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha os braços retos e deixe que a barra pendure à frente das coxas.",
      "Eleve os ombros diretamente para as orelhas, contraindo os trapézios na parte alta."
    ]
  },
  {
    "id": "0747",
    "name": "Desenvolvimento atrás da nuca na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento da máquina Smith de modo que a barra fique à altura dos ombros.",
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Eleve a barra do suporte dê um passo atrás, mantendo uma postura estável."
    ]
  },
  {
    "id": "0748",
    "name": "Supino reto na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura da barra da máquina Smith à altura do peito.",
      "Deite-se no banco com os pés firmemente apoiados no chão.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Solte a barra do suporte baixe em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "0749",
    "name": "Bom dia com joelhos flexionados na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros, com as pontas dos pés apontando para a frente.",
      "Coloque a barra sobre a parte superior das costas, apoiando-a nos trapézios.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Abaixe o tronco até que fique paralelo ao chão, sentindo um alongamento nos posteriores das coxas."
    ]
  },
  {
    "id": "1359",
    "name": "Remada curvada na máquina Smith",
    "bodyPart": "costas",
    "equipment": "máquina Smith",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a máquina Smith com a barra à altura do quadril.",
      "Fique de pé em frente à barra com os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros."
    ]
  },
  {
    "id": "0750",
    "name": "Agachamento na cadeira na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "quadríceps",
    "instructions": [
      "Ajuste a altura da barra da máquina Smith a uma posição confortável.",
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Coloque a barra sobre a parte superior das costas, apoiando-a nos trapézios.",
      "Ative o core e mantenha o peito erguido enquanto abaixa lentamente o corpo flexionando os joelhos e os quadris."
    ]
  },
  {
    "id": "0751",
    "name": "Supino com pegada fechada na máquina Smith",
    "bodyPart": "braços",
    "equipment": "máquina Smith",
    "target": "tríceps",
    "instructions": [
      "Ajuste a altura do assento e coloque no banco com os pés apoiados no chão.",
      "Segure a barra com uma pegada fechada, um pouco mais estreito que a largura dos ombros.",
      "Abaixe a barra em direção ao peito, mantendo os cotovelos colados próximos ao corpo.",
      "Faça uma pausa breve na parte baixa depois empurre a barra de volta à posição inicial."
    ]
  },
  {
    "id": "0752",
    "name": "Levantamento terra na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra à altura do quadril.",
      "Fique de pé com os pés afastados na largura dos ombros, os dedos dos pés ligeiramente para fora.",
      "Flexione os quadris e os joelhos, mantendo as costas retas e o peito erguido, e segure a barra com uma pegada pronada um pouco mais largo que os ombros.",
      "Ative o core e eleve a barra estendendo os quadris e os joelhos, mantendo a barra próximos ao corpo."
    ]
  },
  {
    "id": "0753",
    "name": "Supino declinado na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco declinado ao ângulo desejado.",
      "Deite-se no banco com os pés presos sob os apoios acolchoados para os pés.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "0754",
    "name": "Supino declinado com pegada invertida na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste a máquina Smith a uma posição declinada.",
      "Deite-se no banco com os pés presos sob os apoios acolchoados para os pés.",
      "Segure a barra com uma pegada invertida, mãos um pouco mais afastadas que a largura dos ombros.",
      "Solte a barra e baixe em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "1433",
    "name": "Agachamento frontal com pegada de clean na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra na altura dos ombros.",
      "Fique de pé em frente à barra com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Dê um passo atrás e coloque a barra sobre os ombros atacantes, apoiando-a na clavícula e os deltoides."
    ]
  },
  {
    "id": "3281",
    "name": "Agachamento completo na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra na altura dos ombros.",
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Coloque embaixo da barra e posicione sobre a parte alta das costas, apoiando-a nos trapézios.",
      "Segure a barra com as mãos um pouco mais afastadas que a largura dos ombros."
    ]
  },
  {
    "id": "0755",
    "name": "Agachamento hack na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a barra da máquina Smith a uma altura adequada ao seu corpo.",
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Coloque embaixo da barra, apoiando na parte alta dos trapézios e os ombros.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros."
    ]
  },
  {
    "id": "0756",
    "name": "Elevação pélvica na máquina Smith",
    "bodyPart": "abdômen",
    "equipment": "máquina Smith",
    "target": "abdômen",
    "instructions": [
      "Coloque na máquina Smith com as costas contra o apoio acolchoado e os pés afastados na largura dos ombros.",
      "Coloque as mãos na barra, um pouco mais afastadas que a largura dos ombros.",
      "Ative o core os glúteos, depois empurre com os calcanhares para levantar os quadris do chão.",
      "Continue levantando até que o corpo forme uma linha reta desde os joelhos até os ombros."
    ]
  },
  {
    "id": "0757",
    "name": "Supino inclinado na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco a uma inclinação de 30-45 graus.",
      "Sente-se no banco com as costas apoiadas no apoio acolchoado e os pés firmemente apoiados no chão.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Destrave a barra e baixe-a lentamente para a parte alta do peito, mantendo os cotovelos ligeiramente colados ao corpo."
    ]
  },
  {
    "id": "0758",
    "name": "Supino inclinado com pegada invertida na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste o assento da máquina Smith a um ângulo de inclinação confortável.",
      "Sente-se na máquina com as costas contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Destrave a barra e baixe-a lentamente em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "0759",
    "name": "Elevação de Ombros no Smith em Banco Inclinado",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "serrátil anterior",
    "instructions": [
      "Ajuste a máquina Smith a uma posição inclinada.",
      "Fique de pé de frente para a máquina com os pés afastados na largura dos ombros.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Mantenha as costas retas e o core ativado."
    ]
  },
  {
    "id": "0760",
    "name": "Leg press na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste o assento e a placa para os pés da máquina Smith a uma posição confortável.",
      "Sente-se na máquina com as costas apoiadas no encosto e os pés afastados na largura dos ombros sobre a placa para os pés.",
      "Segure as alças ou os lados da máquina para ter mais estabilidade.",
      "Empurre a placa afastando-a do corpo estendendo as pernas, mantendo as costas contra o encosto."
    ]
  },
  {
    "id": "1434",
    "name": "Agachamento baixo barra na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra a uma altura que permita apoiá-la comodamente na parte alta das costas.",
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Coloque embaixo da barra e posicione sobre a parte alta das costas, apoiando-a nos trapézios.",
      "Segure a barra com as mãos um pouco mais afastadas que a largura dos ombros."
    ]
  },
  {
    "id": "1683",
    "name": "Rosca bíceps na máquina Smith",
    "bodyPart": "braços",
    "equipment": "máquina Smith",
    "target": "bíceps",
    "instructions": [
      "Ajuste a altura da barra da máquina Smith à altura da cintura.",
      "Fique de pé de frente para a máquina Smith com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada supinada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha os cotovelos cerca do tronco e os braços imóveis."
    ]
  },
  {
    "id": "1625",
    "name": "Supino com pegada fechada declinado na máquina Smith",
    "bodyPart": "braços",
    "equipment": "máquina Smith",
    "target": "tríceps",
    "instructions": [
      "Ajuste o banco da máquina Smith a uma posição declinada.",
      "Deite-se no banco com os pés firmemente apoiados no chão.",
      "Segure a barra com uma pegada fechada, um pouco mais estreito que a largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos próximos ao corpo."
    ]
  },
  {
    "id": "1752",
    "name": "Extensão de tríceps inclinado na máquina Smith",
    "bodyPart": "braços",
    "equipment": "máquina Smith",
    "target": "tríceps",
    "instructions": [
      "Ajuste o assento da máquina Smith de modo que a barra fique à altura dos ombros.",
      "Sente-se no banco com as costas apoiadas no encosto e os pés apoiados no chão.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Estenda os braços por completo, levantando a barra do suporte sustentando-a diretamente sobre o peito."
    ]
  },
  {
    "id": "1626",
    "name": "Supino com pegada fechada reverso declinado na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste a máquina Smith a uma posição declinada.",
      "Deite-se no banco com os pés presos sob os apoios acolchoados para os pés.",
      "Segure a barra com uma pegada fechada, um pouco mais estreito que a largura dos ombros.",
      "Retire a barra do suporte e baixe-a lentamente em direção ao peito, mantendo os cotovelos colados ao corpo."
    ]
  },
  {
    "id": "0761",
    "name": "Remada com pegada fechada na máquina Smith",
    "bodyPart": "costas",
    "equipment": "máquina Smith",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada, um pouco mais estreito que a largura dos ombros.",
      "Mantenha as costas retas e o peito erguido enquanto puxe as alças em direção ao corpo, aproximando as escápulas.",
      "Faça uma pausa por alguns segundos no ponto de maior contração, depois retorne lentamente as alças de volta à posição inicial."
    ]
  },
  {
    "id": "1360",
    "name": "Remada unilateral na máquina Smith",
    "bodyPart": "costas",
    "equipment": "máquina Smith",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a altura da barra da máquina Smith à altura da cintura.",
      "Fique de pé de frente para a máquina Smith com os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Segure a barra com uma mão usando um pegada pronada, com a palma voltada para baixo."
    ]
  },
  {
    "id": "1393",
    "name": "Elevação de panturrilhas unilateral chão na máquina Smith",
    "bodyPart": "panturrilhas",
    "equipment": "máquina Smith",
    "target": "panturrilhas",
    "instructions": [
      "Coloque no chão embaixo da barra da máquina Smith, olhando em direção contrária à máquina.",
      "Coloque a ponta dos pés sobre uma superfície elevada, como um disco de importância ou um bloco.",
      "Coloque a barra da máquina Smith sobre a parte baixa das pernas, logo acima dos tornozelos.",
      "Segure a barra com as mãos para ter mais estabilidade."
    ]
  },
  {
    "id": "0762",
    "name": "Remada para deltoide posterior na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina com o peito contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada, um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e o core ativado enquanto puxe as alças em direção ao peito, aproximando as escápulas.",
      "Faça uma pausa por alguns segundos na parte alta do movimento, depois retorne lentamente as alças de volta à posição inicial."
    ]
  },
  {
    "id": "0763",
    "name": "Elevação reversa de panturrilhas na máquina Smith",
    "bodyPart": "panturrilhas",
    "equipment": "máquina Smith",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a barra da máquina Smith a uma altura diretamente abaixo dos ombros.",
      "Fique de pé em frente à barra com os pés separados à altura do quadril e as pontas dos pés apontando para a frente.",
      "Coloque a ponta dos pés na borda de um degrau ou plataforma, com os calcanhares pendurando.",
      "Segure a barra para se apoiar, mantendo as costas retas e o core ativado."
    ]
  },
  {
    "id": "1394",
    "name": "Elevação reversa de panturrilhas na máquina Smith",
    "bodyPart": "panturrilhas",
    "equipment": "máquina Smith",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a barra da máquina Smith a uma altura diretamente abaixo dos ombros.",
      "Fique de pé em frente à barra com os pés separados à altura do quadril e as pontas dos pés apontando para a frente.",
      "Coloque a ponta dos pés na borda de um degrau ou plataforma, com os calcanhares pendurando.",
      "Segure a barra para se apoiar."
    ]
  },
  {
    "id": "1361",
    "name": "Remada curvada com pegada invertida na máquina Smith",
    "bodyPart": "costas",
    "equipment": "máquina Smith",
    "target": "parte superior das costas",
    "instructions": [
      "Ajuste a máquina Smith com a barra à altura do quadril.",
      "Fique de pé em frente à barra com os pés afastados na largura dos ombros.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Segure a barra com pegada supinada, com as mãos afastadas na largura dos ombros."
    ]
  },
  {
    "id": "0764",
    "name": "Supino com pegada invertida na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste a altura da barra da máquina Smith à altura do peito.",
      "Fique de pé em frente à barra com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Dê um passo atrás e coloque-se com uma leve flexão nos joelhos."
    ]
  },
  {
    "id": "1395",
    "name": "Elevação de panturrilhas sentado unilateral na máquina Smith",
    "bodyPart": "panturrilhas",
    "equipment": "máquina Smith",
    "target": "panturrilhas",
    "instructions": [
      "Sente-se na máquina com as costas contra o apoio acolchoado e os pés sobre o apoio para os pés.",
      "Coloque uma perna sobre o apoio para os pés e mantenha a outra perna fora dele.",
      "Eleve o calcanhar o máximo possível, usando os músculos da panturrilha.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente o calcanhar de volta à posição inicial."
    ]
  },
  {
    "id": "0765",
    "name": "Desenvolvimento de ombros sentado na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento de modo que as alças fiquem à altura dos ombros.",
      "Sente-se na máquina com as costas contra o apoio acolchoado e os pés apoiados no chão.",
      "Segure as alças usando uma pegada pronada e levante-as de suporte-os, estendendo os braços por completo.",
      "Abaixe as alças até a altura dos ombros, mantendo os cotovelos levemente flexionados."
    ]
  },
  {
    "id": "1426",
    "name": "Flexão de punhos sentado na máquina Smith",
    "bodyPart": "antebraços",
    "equipment": "máquina Smith",
    "target": "antebraços",
    "instructions": [
      "Sente-se em um banco em frente a uma máquina Smith com os pés apoiados no chão.",
      "Segure a barra com uma pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Apoie os antebraços sobre as coxas, permitindo que os punhos pendurem.",
      "Flexione lentamente os punhos para cima, levando a barra para os antebraços."
    ]
  },
  {
    "id": "0766",
    "name": "Desenvolvimento de ombros na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento e posicione-se na máquina Smith com os pés afastados na largura dos ombros.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Retire a barra do suporte e coloque-a à altura dos ombros, com os cotovelos flexionados e as palmas voltadas para a frente.",
      "Empurre a barra para cima até que os braços fiquem completamente estendidos acima da cabeça."
    ]
  },
  {
    "id": "0767",
    "name": "Encolhimento de ombros na máquina Smith",
    "bodyPart": "costas",
    "equipment": "máquina Smith",
    "target": "trapézios",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha os braços retos e os ombros relaxados.",
      "Eleve os ombros para as orelhas, contraindo os trapézios na parte alta."
    ]
  },
  {
    "id": "0768",
    "name": "Agachamento Búlgaro no Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé de frente para a máquina Smith com os pés afastados na largura dos ombros.",
      "Coloque um pé atrás do corpo sobre um banco ou degrau, com a ponta do pé apontando para a frente.",
      "Segure a barra da máquina Smith para ter mais estabilidade.",
      "Flexione o joelho da frente abaixe o corpo para uma posição de afundo, mantendo as costas retas."
    ]
  },
  {
    "id": "0769",
    "name": "Afundo sprint na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra à altura do quadril.",
      "Fique de pé de costas à máquina com os pés afastados na largura dos ombros.",
      "Dê um passo atrás com o pé direito e coloque sobre a barra, apoiando a parte superior do pé nela.",
      "Flexione o joelho esquerdo e abaixe o corpo para uma posição de afundo, mantendo as costas retas."
    ]
  },
  {
    "id": "0770",
    "name": "Agachamento na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra a uma altura adequada para sua agachamento.",
      "Fique de pé com os pés afastados na largura dos ombros, com os dedos dos pés ligeiramente para fora.",
      "Coloque embaixo da barra, apoiando na parte alta dos trapézios e os ombros.",
      "Segure a barra com uma pegada amplo, um pouco além da largura dos ombros."
    ]
  },
  {
    "id": "0771",
    "name": "Flexão de punhos em pé costas na máquina Smith",
    "bodyPart": "antebraços",
    "equipment": "máquina Smith",
    "target": "antebraços",
    "instructions": [
      "Fique de pé de frente para a máquina Smith com os pés afastados na largura dos ombros.",
      "Segure a barra com uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Mantenha as costas retas e os cotovelos próximos ao corpo.",
      "Flexione lentamente os punhos para cima, levando a barra para o corpo."
    ]
  },
  {
    "id": "0772",
    "name": "Desenvolvimento militar em pé atrás da nuca na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Ajuste a altura do assento da máquina Smith de modo que a barra fique à altura dos ombros.",
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros.",
      "Eleve a barra do suporte dê um passo atrás, mantendo uma postura estável."
    ]
  },
  {
    "id": "0773",
    "name": "Elevação de panturrilhas em pé perna na máquina Smith",
    "bodyPart": "panturrilhas",
    "equipment": "máquina Smith",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a barra da máquina Smith a uma altura que permita ficar de pé com os pés apoiados no chão e os ombros embaixo da barra.",
      "Coloque embaixo da barra com os pés afastados na largura dos ombros e as pontas dos pés apontando para a frente.",
      "Coloque as mãos sobre a barra para ter mais estabilidade.",
      "Ative as panturrilhas e eleve lentamente os calcanhares do chão, elevando o corpo sobre a ponta dos pés."
    ]
  },
  {
    "id": "0774",
    "name": "Desenvolvimento militar em pé na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Segure a barra com uma pegada pronada um pouco além da largura dos ombros.",
      "Retire a barra do suporte e baixe-a até a altura dos ombros, com as palmas voltadas para a frente.",
      "Empurre a barra para cima até que o os braços fiquem completamente estendidos acima da cabeça."
    ]
  },
  {
    "id": "3142",
    "name": "Agachamento sumô na máquina Smith",
    "bodyPart": "pernas",
    "equipment": "máquina Smith",
    "target": "glúteos",
    "instructions": [
      "Ajuste a máquina Smith com a barra à altura do quadril.",
      "Fique de pé com os pés mais afastados que a largura dos ombros, com as pontas dos pés para fora.",
      "Coloque embaixo da barra, apoiando sobre a parte superior das costas e os ombros.",
      "Ative o core e mantenha o peito erguido enquanto abaixa o corpo para uma posição de agachamento, empurrando os quadris para trás e flexionando os joelhos."
    ]
  },
  {
    "id": "1396",
    "name": "Elevação na ponta dos pés na máquina Smith",
    "bodyPart": "panturrilhas",
    "equipment": "máquina Smith",
    "target": "panturrilhas",
    "instructions": [
      "Ajuste a barra da máquina Smith a uma altura que permita ficar em pé confortavelmente com os pés apoiados no chão.",
      "Coloque embaixo da barra com os ombros diretamente abaixo dela e os pés afastados na largura dos ombros.",
      "Coloque a planta dos pés sobre uma plataforma elevada ou discos de importância, deixando os calcanhares pendurando fosse da borda.",
      "Segure a barra com pegada pronada, um pouco além da largura dos ombros."
    ]
  },
  {
    "id": "0775",
    "name": "Remada alta na máquina Smith",
    "bodyPart": "ombros",
    "equipment": "máquina Smith",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, de de frente para a máquina Smith.",
      "Segure a barra com uma pegada pronada, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha as costas retas e o core ativado.",
      "Puxe a barra para seu queixo, guiando o movimento com os cotovelos."
    ]
  },
  {
    "id": "1308",
    "name": "Supino com pegada aberta na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco a uma posição confortável na máquina Smith.",
      "Deite-se no banco com os pés apoiados no chão.",
      "Segure a barra com uma pegada amplo, um pouco além da largura dos ombros.",
      "Destrave a barra e baixe-a lentamente para o peito, mantendo os cotovelos para fora em relação ao tronco."
    ]
  },
  {
    "id": "1309",
    "name": "Supino declinado com pegada aberta na máquina Smith",
    "bodyPart": "peito",
    "equipment": "máquina Smith",
    "target": "peitorais",
    "instructions": [
      "Ajuste o banco declinado ao ângulo desejado.",
      "Deite-se no banco com os pés presos sob os apoios acolchoados para os pés.",
      "Segure a barra com uma pegada amplo, um pouco além da largura dos ombros.",
      "Destrave a barra e baixe-a lentamente para o peito, mantendo os cotovelos apontando para fora."
    ]
  },
  {
    "id": "0776",
    "name": "Puxada de Arranco",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e a barra no chão à sua frente.",
      "Flexione os joelhos e flexione os quadris para baixar a uma posição de agachamento, agarrando a barra com uma pegada pronada.",
      "Mantenha as costas retas e o peito erguido enquanto empurre com os calcanhares para levantar a barra do chão, estendendo os quadris e os joelhos.",
      "Quando a barra chegue à altura do quadril, puxe a barra para cima de forma explosiva, encolhendo os ombros e levando os cotovelos altos e para os lados."
    ]
  },
  {
    "id": "0777",
    "name": "Lançador de Feitiço",
    "bodyPart": "abdômen",
    "equipment": "halter",
    "target": "abdômen",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter com uma mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir da cintura, mantendo as costas retas.",
      "Estenda o braço com o halter para o pé oposto, rotacionando o tronco ao fazer isso.",
      "Retorne à posição inicial e repita do outro lado."
    ]
  },
  {
    "id": "1362",
    "name": "Esfinge",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Deite-se de bruços no chão com os antebraços planos sobre o chão e os cotovelos diretamente abaixo dos ombros.",
      "Ative o core e eleve o peito do chão, mantendo os antebraços e os dedos dos pés no chão.",
      "Mantenha esta posição durante uns segundos, certificando-se de manter o pescoço em uma posição neutra.",
      "Abaixe lentamente o peito de volta à posição inicial."
    ]
  },
  {
    "id": "0778",
    "name": "Flexão de braços com caminhada aranha",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Comece em posição de flexão com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Leve o joelho direito para o cotovelo direito, mantendo-a elevada do chão.",
      "Enquanto leve o joelho direito para trás, abaixe simultaneamente o corpo em direção ao chão flexionando os cotovelos.",
      "Empurre de novo para cima à posição inicial e repita levando o joelho esquerdo para o cotovelo esquerdo."
    ]
  },
  {
    "id": "1363",
    "name": "Alongamento da coluna",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Coloque as mãos no chão atrás do corpo, com os dedos apontando para o corpo.",
      "Ative o core incline-se lentamente para trás, mantendo as costas retas.",
      "Continue inclinando-se para trás até que sinta um alongamento na coluna."
    ]
  },
  {
    "id": "2329",
    "name": "Rotação da coluna",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Flexione os joelhos e coloque os pés apoiados no chão, separados à altura do quadril.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Ative o abdômen e gire lentamente o tronco para a direita, levando o cotovelo direito em direção ao joelho esquerdo."
    ]
  },
  {
    "id": "2368",
    "name": "Afundos com Salto",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Dê um passo adiante com um pé e coloque-o aproximadamente a dois pés de distância por adiante do outro pé.",
      "Abaixe o corpo flexionando os joelhos e os quadris, mantendo as costas retas.",
      "Continue baixando até que a coxa atacante fique paralelo ao chão e o joelho posterior fique logo acima do chão."
    ]
  },
  {
    "id": "0786",
    "name": "Arremesso em Agachamento",
    "bodyPart": "pernas",
    "equipment": "barra",
    "target": "quadríceps",
    "instructions": [
      "Comece com a barra apoiada sobre os ombros e os pés afastados na largura dos ombros.",
      "Abaixe o corpo a uma posição de agachamento, mantendo o peito erguido e os joelhos alinhados com a ponta dos pés.",
      "Ao chegar no ponto mais baixo da agachamento, empurre com força através das pernas e eleve a barra acima da cabeça.",
      "Quando a barra atinja seu ponto mais alto, abaixe rapidamente a uma posição de afundo dividida, com um pé adiante outro atrás."
    ]
  },
  {
    "id": "1705",
    "name": "Agachamento no BOSU",
    "bodyPart": "pernas",
    "equipment": "BOSU",
    "target": "quadríceps",
    "instructions": [
      "Coloque o BOSU no chão com o lado plano para cima.",
      "Fique de pé com os pés afastados na largura dos ombros e coloque-se em cima do BOSU.",
      "Abaixe o corpo flexionando os joelhos e os quadris, como se se sentasse em uma cadeira.",
      "Mantenha o peito erguido e o peso nos calcanhares."
    ]
  },
  {
    "id": "1685",
    "name": "Agachamento com alcance acima da cabeça",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Enquanto eleve-se da agachamento, estenda os braços acima da cabeça, atingindo para o teto.",
      "Volte à posição inicial baixando os braços e flexionando os joelhos para voltar a fazer a agachamento."
    ]
  },
  {
    "id": "1686",
    "name": "Agachamento com alcance acima da cabeça e rotação",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Abaixe o corpo para uma posição de agachamento flexionando os joelhos e empurrando os quadris para trás.",
      "Enquanto eleve-se da agachamento, eleve os braços acima da cabeça e gire o tronco para um lado.",
      "Volte à posição inicial e repita a agachamento, desta vez girando o tronco para o outro lado."
    ]
  },
  {
    "id": "2297",
    "name": "Abdominal curto com amplitude completa e mãos atrás da cabeça na bola suíça",
    "bodyPart": "abdômen",
    "equipment": "bola suíça",
    "target": "abdômen",
    "instructions": [
      "Sente-se na bola suíça com os pés apoiados no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e, flexione lentamente a parte superior do corpo para a frente, levando o peito para os joelhos.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3291",
    "name": "Press Stalder",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Comece de pé com os pés afastados na largura dos ombros e os braços estendidos acima da cabeça.",
      "Flexione ligeiramente os joelhos e ative o core.",
      "Abaixe o corpo a uma posição de agachamento mantendo os braços estendidos acima da cabeça.",
      "Enquanto abaixa na agachamento, empurre os braços em direção ao chão, ativando os tríceps."
    ]
  },
  {
    "id": "3669",
    "name": "Arqueiro em pé",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Estenda os braços retos para a frente à altura dos ombros, paralelos ao chão.",
      "Gire o tronco para a direita, mantendo os braços estendidos e as costas retas.",
      "Enquanto gire, estenda o braço direito para a frente o braço esquerdo para trás, imitando o movimento de tensar um arco."
    ]
  },
  {
    "id": "0788",
    "name": "Desenvolvimento em pé atrás da nuca com barra",
    "bodyPart": "ombros",
    "equipment": "barra",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure a barra por trás do pescoço com uma pegada pronada.",
      "Mantenha as costas retas e o core ativado.",
      "Empurre a barra acima da cabeça estendendo os braços, estendendo completamente os cotovelos.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente a barra de volta à posição inicial."
    ]
  },
  {
    "id": "1490",
    "name": "Elevação de panturrilha em pé na escada",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé na borda de um degrau ou uma plataforma firme, com os calcanhares pendurando e a ponta dos pés sobre o degrau.",
      "Segure-se de uma corrimão ou parede para manter o equilíbrio se necessário.",
      "Eleve lentamente os calcanhares o máximo possível, elevando o peso do corpo sobre a ponta dos pés.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "1397",
    "name": "Panturrilhas em pé",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, com as pontas dos pés apontando para a frente.",
      "Eleve os calcanhares do chão o máximo possível, apoiando sobre a ponta dos pés.",
      "Mantenha a posição por alguns segundos e depois abaixe lentamente os calcanhares de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "1398",
    "name": "Alongamento de panturrilhas em pé",
    "bodyPart": "panturrilhas",
    "equipment": "peso corporal",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé de frente para uma parede ou objeto firme, a uma distância aproximada de um braço.",
      "Coloque as mãos sobre a parede ou o objeto à altura dos ombros.",
      "Dê um passo para trás com um pé, mantendo o calcanhar plano no chão.",
      "Flexione ligeiramente o joelho da frente incline-se para a frente, mantendo a perna posterior reta."
    ]
  },
  {
    "id": "1599",
    "name": "Alongamento em pé de panturrilhas e posteriores com corda",
    "bodyPart": "pernas",
    "equipment": "corda",
    "target": "posteriores das coxas",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Segure a correia com as duas mãos e a coloque ao redor da parte anterior da planta do pé.",
      "Mantenha a perna reta e incline-se lentamente para a frente a partir dos quadris, mantendo as costas retas.",
      "Sente-se o alongamento nos posteriores das coxas e nos músculos da panturrilha."
    ]
  },
  {
    "id": "0794",
    "name": "Alongamento Lateral em Pé",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Estenda os braços para os lados, paralelos ao chão.",
      "Incline lentamente a parte superior do corpo para um lado, sentindo um alongamento no lado e os dorsais.",
      "Mantenha o alongamento durante 15-30 segundos."
    ]
  },
  {
    "id": "1364",
    "name": "Inclinação Pélvica em Pé",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Coloque as mãos sobre os quadris ou deixe-as pendurar aos lados.",
      "Ative os músculos do core incline a pelve para a frente, empurrando a zona lombar para a parede atrás do corpo.",
      "Mantenha a posição durante uns segundos, depois solte volte à posição inicial."
    ]
  },
  {
    "id": "0795",
    "name": "Flexão unilateral de joelho em pé",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Fique de pé com os pés separados à altura dos quadris e as mãos nos quadris.",
      "Mova seu peso à perna esquerda e eleve o pé direito do chão, flexionando o joelho.",
      "Flexione lentamente o calcanhar direito para os glúteos, contraindo o isquiotibial.",
      "Faça uma pausa de um momento na parte superior e depois abaixe lentamente o pé direito de volta à posição inicial."
    ]
  },
  {
    "id": "0796",
    "name": "Abdominal em pé com roda abdominal",
    "bodyPart": "abdômen",
    "equipment": "roda abdominal",
    "target": "abdômen",
    "instructions": [
      "Comece de pé, ereto, com os pés afastados na largura dos ombros e o rolo à sua frente.",
      "Flexione a cintura e gire lentamente o rolo para a frente, mantendo as costas retas e o core ativado.",
      "Continue girando para a frente até sentir um alongamento no abdômen e que o corpo esteja estendido o máximo possível.",
      "Faça uma pausa de um momento, depois gire lentamente o rolo de regresso para o corpo, voltando à posição inicial."
    ]
  },
  {
    "id": "3223",
    "name": "Salto estrela (masculino)",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços em relação ao tronco.",
      "Flexione ligeiramente os joelhos e salte para cima de forma explosiva.",
      "Enquanto salte, separa as pernas e estenda os braços para os lados, formando uma figura de estrela com seu corpo.",
      "Aterrisse suavemente sobre a ponta dos pés com os joelhos levemente flexionados."
    ]
  },
  {
    "id": "2138",
    "name": "Corrida na bicicleta ergométrica — variação 3",
    "bodyPart": "cardio",
    "equipment": "bicicleta ergométrica",
    "target": "sistema cardiovascular",
    "instructions": [
      "Ajuste a altura e a posição do assento para assegurar um alinhamento correto.",
      "Coloque os pés sobre os pedais e segure com as correias se estão disponíveis.",
      "Comece a pedalar a um ritmo confortável.",
      "Mantenha um ritmo constante aumenta a resistência segundo deseje-o."
    ]
  },
  {
    "id": "0798",
    "name": "Bicicleta ergométrica",
    "bodyPart": "cardio",
    "equipment": "máquina articulada",
    "target": "sistema cardiovascular",
    "instructions": [
      "Ajuste a altura e a posição do assento na bicicleta estática para assegurar um alinhamento correto.",
      "Coloque os pés sobre os pedais e segure com as correias se estão disponíveis.",
      "Comece a pedalar a um ritmo confortável, mantendo as costas retas e o core ativado.",
      "Mantenha um ritmo constante aumenta o nível de resistência se deseja-o."
    ]
  },
  {
    "id": "3314",
    "name": "Maltese com pernas afastadas",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece pendurando de um par de anéis com os braços completamente estendidos e o corpo alinhado.",
      "Separa bem as pernas, formando uma posição a horcajadas.",
      "Ative o core abaixe lentamente o corpo até que os braços fiquem paralelos ao chão.",
      "Mantenha esta posição durante uns segundos, depois empurre o corpo novamente para cima à posição inicial."
    ]
  },
  {
    "id": "3298",
    "name": "Planche com pernas afastadas",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Comece em posição de flexão com as mãos afastadas na largura dos ombros e os pés bem separados.",
      "Ative o core e mova lentamente seu peso para a frente, levando os ombros acima das mãos.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo os cotovelos cerca do tronco.",
      "Faça uma pausa por alguns segundos na posição baixa, depois empurre com as mãos para estender os braços e levantar o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1427",
    "name": "Abdutor externo de quadril com pernas estendidas",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "abdutores",
    "instructions": [
      "Deite-se de lado com as pernas retas e empilhadas uma sobre a outra.",
      "Coloque o braço de abaixo baixo a cabeça para se apoiar.",
      "Ative o core e eleve a perna superior o máximo possível sem rotacionar os quadris nem inclinar-se para trás.",
      "Faça uma pausa por alguns segundos na posição alta, depois abaixe lentamente a perna de volta à posição inicial."
    ]
  },
  {
    "id": "0803",
    "name": "Flexão de braços super-homem",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Ative o core abaixe o corpo em direção ao chão, mantendo os cotovelos cerca do tronco.",
      "Enquanto abaixa o corpo, eleve simultaneamente o braço direito e a perna esquerda do chão, estendendo-os completamente.",
      "Faça uma pausa de um momento no ponto mais alto e, em seguida, abaixe o braço e a perna enquanto empurre o corpo novamente para cima à posição inicial."
    ]
  },
  {
    "id": "0805",
    "name": "Abdominal suspenso com queda controlada",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Segure um treinador de suspensão a um ponto de ancoragem alta e ajuste as correias à altura da cintura.",
      "Fique de pé de costas para o ponto de ancoragem e segure as alças com os braços estendidos à sua frente.",
      "Incline-se para a frente a partir da cintura, mantendo o corpo reto e o core ativado.",
      "Abaixe o corpo todo o que possa mantendo o controle a tensão no abdômen."
    ]
  },
  {
    "id": "0806",
    "name": "Flexão Suspensa",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Encontre um treinador de suspensão e ajuste a uma altura adequada.",
      "Fique de pé de costas para o ponto de ancoragem e segure as alças usando uma pegada pronada.",
      "Caminhe para a frente com os pés, inclinando o corpo para a frente até que o seu peso fique sustentado pelo treinador de suspensão.",
      "Mantenha o corpo reto da cabeça aos calcanhares, ative o core abaixe o peito para as alças."
    ]
  },
  {
    "id": "0807",
    "name": "Abdominal Invertido Suspenso",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core suba os joelhos em direção ao peito, flexionando a pelve para a caixa torácica.",
      "Faça uma pausa de um momento no ponto mais alto e, em seguida, abaixe lentamente os joelhos de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0808",
    "name": "Remada Suspensa",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Coloque um treinador de suspensão a uma altura adequada.",
      "Fique de pé de frente para o ponto de ancoragem com os pés afastados na largura dos ombros.",
      "Segure as alças usando uma pegada pronada, com as palmas voltadas-se entre si.",
      "Incline-se para trás, mantendo o corpo reto e os calcanhares no chão."
    ]
  },
  {
    "id": "0809",
    "name": "Agachamento Búlgaro Suspenso",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé de costas a um treinador de suspensão com os pés afastados na largura dos ombros.",
      "Estenda uma perna para a frente coloque o empeine do pé no suporte para pé do treinador de suspensão.",
      "Flexione a perna de apoio e abaixe o corpo a uma posição de afundo, mantendo o peito erguido e o joelho alinhado com a ponta do pé.",
      "Empurre com o calcanhar para regressar à posição inicial."
    ]
  },
  {
    "id": "3433",
    "name": "Chutes de nadador (masculino) — variação 2",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de bruços sobre uma colchonete com os braços estendidos acima da cabeça.",
      "Ative o core e eleve o peito e as pernas do chão simultaneamente.",
      "Mova as pernas para cima e para baixo com um movimento de alternado, como se estivesse nadando.",
      "Continue o movimento de chute o número de repetições desejado."
    ]
  },
  {
    "id": "3318",
    "name": "Balanço 360",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Mantenha os braços estendidos retos à sua frente, paralelos ao chão.",
      "Ative o core e mova os braços em um movimento circular, rotacionando o tronco ao fazer isso.",
      "Continue o movimento circular, movando os braços e rotacionando o tronco o número de repetições desejado."
    ]
  },
  {
    "id": "1753",
    "name": "Mergulho em três bancos",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as mãos agarrando a borda, os dedos apontando para a frente.",
      "Deslize os glúteos fosse do banco, sustentando seu peso com as mãos.",
      "Flexione os cotovelos e abaixe o corpo até que a parte superior dos braços fiquem paralela ao chão.",
      "Empurre-se de volta para cima até a posição inicial."
    ]
  },
  {
    "id": "2459",
    "name": "Virada de Pneu",
    "bodyPart": "pernas",
    "equipment": "pneu",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, de em frente ao pneu.",
      "Flexione os joelhos e flexione os quadris, baixando a uma posição de agachamento.",
      "Agache-se segure a borda inferior do pneu com as duas mãos, com os dedos apontando para você.",
      "Ative os glúteos e os músculos das pernas, e empurre com força através das pernas para levantar o pneu do chão."
    ]
  },
  {
    "id": "0811",
    "name": "Levantamento Terra com Barra Hexagonal",
    "bodyPart": "pernas",
    "equipment": "barra hexagonal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e a barra hexagonal no chão à sua frente.",
      "Flexione os quadris e os joelhos para baixar e segure as alças da barra hexagonal com uma pegada pronada.",
      "Mantenha as costas retas e o peito erguido ao iniciar o levantamento da barra hexagonal do chão estendendo os quadris e os joelhos.",
      "Ao levantar, concentre-se em empurrar com os calcanhares e contrair os glúteos no ponto mais alto do movimento."
    ]
  },
  {
    "id": "0814",
    "name": "Mergulho para tríceps",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco ou cadeira com as mãos segurando a borda, os dedos apontando para a frente.",
      "Deslize os glúteos fosse do banco, sustentando seu peso com as mãos.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas cerca do banco.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0812",
    "name": "Mergulho para tríceps banco perna",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco com as mãos agarrando a borda, os dedos apontando para a frente.",
      "Caminhe com os pés para a frente, deslizando os glúteos fosse do banco, e estenda os braços.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas cerca do banco.",
      "Empurre com as palmas para estendar os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "0813",
    "name": "Mergulho para tríceps entre bancos",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as mãos agarrando a borda do banco, os dedos apontando para a frente.",
      "Deslize os glúteos fosse do banco, sustentando seu peso com as mãos.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo as costas cerca do banco.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0815",
    "name": "Mergulho de tríceps no chão",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de uma cadeira ou banco com as mãos junto às quadris, os dedos apontando para a frente.",
      "Deslize os glúteos fosse da frente da cadeira com as pernas estendidas à sua frente.",
      "Estenda os braços, mantendo uma leve flexão nos cotovelos para conservar a tensão nos tríceps e aliviar nas articulações do cotovelo.",
      "Flexione lentamente os cotovelos para baixar o corpo em direção ao chão até que os cotovelos formem um ângulo de aproximadamente 90 graus."
    ]
  },
  {
    "id": "0816",
    "name": "Extensão de tríceps",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os joelhos levemente flexionados.",
      "Estenda os braços retos à sua frente, paralelos ao chão.",
      "Flexione os cotovelos e abaixe o corpo em direção ao chão, mantendo a parte superior dos braços cerca do tronco.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0817",
    "name": "Alongamento de Tríceps",
    "bodyPart": "braços",
    "equipment": "peso corporal",
    "target": "tríceps",
    "instructions": [
      "Fique de pé ou sente-se ereto com as costas retas.",
      "Estenda um braço acima da cabeça, flexionando pelo cotovelo.",
      "Coloque a mão oposta sobre o cotovelo flexionado e puxe-o suavemente para sua cabeça.",
      "Mantenha o alongamento de 15 a 30 segundos, sentindo um alongamento suave no tríceps."
    ]
  },
  {
    "id": "0871",
    "name": "Abdominal Agrupado",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos por trás da cabeça com os cotovelos apontando para fora.",
      "Contraia o abdômen e eleve as escápulas do chão e leve os joelhos em direção ao peito, flexionando simultaneamente a parte superior do corpo para os joelhos.",
      "Faça uma pausa de um momento no ponto mais alto e, em seguida, abaixe lentamente as escápulas e estenda as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0818",
    "name": "Puxada alta com pegada neutra em alças duplas",
    "bodyPart": "costas",
    "equipment": "polia",
    "target": "dorsais",
    "instructions": [
      "Ajuste a altura do assento e coloque-se de de frente para a polia.",
      "Segure as alças usando uma pegada pronada, com as mãos afastadas na largura dos ombros.",
      "Sente-se e coloque as coxas embaixo dos apoios acolchoados para coxas, mantendo os pés apoiados no chão.",
      "Incline-se ligeiramente para trás e mantenha o peito erguido, conservando uma coluna neutra."
    ]
  },
  {
    "id": "1466",
    "name": "Elevação pélvica com rotação",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Coloque as mãos aos lados para maior apoio.",
      "Ative os glúteos e eleve os quadris do chão, formando uma linha reta desde os joelhos até os ombros.",
      "Mantenha os quadris elevadas, gire a parte inferior do corpo para o lado direito, levando os joelhos em direção ao chão."
    ]
  },
  {
    "id": "2802",
    "name": "Elevação de pernas com rotação",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços aos lados.",
      "Coloque as mãos embaixo dos glúteos como apoio.",
      "Ative o abdômen e eleve ambas as pernas do chão, mantendo-as retas.",
      "Enquanto eleve as pernas, gire os quadris para um lado, levando as pernas para o ombro oposto."
    ]
  },
  {
    "id": "2801",
    "name": "Elevação de pernas com rotação (feminino)",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com as pernas estendidas e os braços aos lados.",
      "Flexione os joelhos e eleve as pernas do chão, levando em direção ao peito.",
      "Enquanto eleve as pernas, gire os quadris para um lado, levando os joelhos para o ombro oposto.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "3231",
    "name": "Toque nos pés duplo (masculino)",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os braços estendidos para os lados.",
      "Incline-se para a frente a partir da cintura, mantendo as costas retas e os joelhos levemente flexionados.",
      "Estenda os braços para a ponta dos pés com as duas mãos, mantendo as pernas retas.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "1365",
    "name": "Alongamento da Parte Superior das Costas",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "parte superior das costas",
    "instructions": [
      "Fique de pé com as costas retas e os pés afastados na largura dos ombros.",
      "Estenda os braços retos à sua frente, paralelos ao chão.",
      "Entrelace os dedos e gire as palmas afastando do corpo.",
      "Eleve lentamente os braços acima da cabeça, mantendo-os retos e paralelos entre si."
    ]
  },
  {
    "id": "1366",
    "name": "Cachorro olhando para cima",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "eretores da coluna",
    "instructions": [
      "Deite-se de bruços no chão com as pernas estendidas atrás do corpo.",
      "Coloque as mãos no chão junto às costelas inferiores, com os dedos apontando para a frente.",
      "Pressione as mãos firmemente contra o solo e estenda os braços, levantando o tronco e as coxas do chão.",
      "Leve os ombros para trás e para baixo, abrindo o peito e elevando a mirada para o teto."
    ]
  },
  {
    "id": "3420",
    "name": "Abdominal em V no chão",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com as pernas estendidas à sua frente.",
      "Incline-se ligeiramente para trás e eleve as pernas do chão, mantendo-as retas.",
      "Ao mesmo tempo, eleve a parte superior do corpo do chão e estenda os braços para as pernas.",
      "Mantenha esta posição durante uns segundos, depois abaixe lentamente a parte superior do corpo e as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0826",
    "name": "Elevação vertical de pernas nas barras paralelas",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Pendure das barras paralelas com os braços completamente estendidos e o corpo reto.",
      "Ative o core e eleve as pernas à frente, mantendo-as retas.",
      "Continue levantando até que as pernas fiquem paralelas ao chão ou um pouco mais acima.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "2141",
    "name": "Caminhada no elíptico",
    "bodyPart": "cardio",
    "equipment": "aparelho elíptico",
    "target": "sistema cardiovascular",
    "instructions": [
      "Ajuste o nível de resistência e a inclinação da máquina elíptica aos valores desejados.",
      "Suba aos pedais da máquina e segure as alças com macieza.",
      "Comece empurrando para baixo com os pés e puxando as alças em direção ao corpo.",
      "Continue com este movimento, alternando entre empurrar e puxar, para simular um movimento de caminhar ou correr."
    ]
  },
  {
    "id": "3655",
    "name": "Afundo caminhando com joelhos altos",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Fique de pé com os pés separados à altura do quadril.",
      "Eleve o joelho direito em direção ao peito o mais alto que possa mantendo o equilíbrio sobre a perna esquerda.",
      "Dê um passo adiante com o pé direito e abaixe o corpo a uma posição de afundo, flexionando ambas joelhos a um ângulo de 90 graus.",
      "Empurre com o pé direito e leve o joelho esquerdo em direção ao peito."
    ]
  },
  {
    "id": "1460",
    "name": "Afundo caminhando",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Dê um passo adiante com a perna direita, baixando o corpo a uma posição de afundo.",
      "Mantenha o tronco ereto e o joelho da frente alinhada com o tornozelo.",
      "Empurre com o pé direito e leve o pé esquerdo para a frente, entrando em uma posição de afundo com a perna esquerda."
    ]
  },
  {
    "id": "3666",
    "name": "Caminhada na esteira inclinada",
    "bodyPart": "cardio",
    "equipment": "máquina articulada",
    "target": "sistema cardiovascular",
    "instructions": [
      "Ajuste o nível de inclinação da fita de correr à intensidade desejada.",
      "Fique de pé sobre a fita de correr com os pés afastados na largura dos ombros.",
      "Comece a caminhar a um ritmo confortável, certificando-se de manter uma forma correta.",
      "Ative os músculos do core mantenha as costas retas durante todo o exercício."
    ]
  },
  {
    "id": "2311",
    "name": "Caminhada no simulador de escada",
    "bodyPart": "cardio",
    "equipment": "simulador de escada",
    "target": "sistema cardiovascular",
    "instructions": [
      "Ajuste a máquina de degraus a um nível confortável.",
      "Suba à máquina e coloque as mãos sobre os corrimãos para se apoiar.",
      "Comece a caminhar colocando um pé em um degrau e depois o outro, alternando entre as pernas.",
      "Mantenha uma postura ereta e ative os músculos do core."
    ]
  },
  {
    "id": "0830",
    "name": "Mergulho no Banco com Peso",
    "bodyPart": "braços",
    "equipment": "peso adicional",
    "target": "tríceps",
    "instructions": [
      "Sente-se em um banco com as mãos agarrando a borda, os dedos apontando para a frente.",
      "Deslize os glúteos fosse do banco, sustentando seu peso com as mãos.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Empurre-se de volta para cima à posição inicial estendendo os braços."
    ]
  },
  {
    "id": "2987",
    "name": "Barra fixa supinada com pegada fechada na estação de paralelas com peso adicional",
    "bodyPart": "costas",
    "equipment": "peso adicional",
    "target": "dorsais",
    "instructions": [
      "Fique de pé em frente à jaula de fundos e segure as barras paralelas com uma pegada supinada, com as mãos afastadas na largura dos ombros.",
      "Pendure das barras com os braços completamente estendidos, os pés levantados do chão e o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para cima em direção às barras, mantendo os cotovelos cerca do tronco.",
      "Continue puxando o corpo até que o seu queixo fique acima das barras, depois faça uma pausa de um momento."
    ]
  },
  {
    "id": "3643",
    "name": "Agachamento cossaco com peso adicional (masculino)",
    "bodyPart": "pernas",
    "equipment": "peso adicional",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés mais afastados que a largura dos ombros e a ponta dos pés apontando ligeiramente para fora.",
      "Segure um peso à frente do peito com as duas mãos.",
      "Mova seu peso para um lado e abaixe o corpo flexionando o joelho do lado para o que se inclinou, mantendo a outra perna reta.",
      "Abaixe todo o que possa mantendo o equilíbrio e o peito erguido."
    ]
  },
  {
    "id": "0832",
    "name": "Abdominal curto com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.",
      "Segure um disco de importância ou um halter sobre o peito.",
      "Ative o abdômen e eleve a parte superior do corpo do chão, flexionando o tronco para a frente até que as escápulas se separem do chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3670",
    "name": "Abdominal declinado com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Deite-se de costas em um banco declinado com os pés presos embaixo dos apoios acolchoados para os pés.",
      "Coloque as mãos por trás da cabeça ou cruzedas sobre o peito.",
      "Ative o abdômen e eleve lentamente a parte superior do corpo do banco, flexionando o tronco para a frente até que o tronco fique perpendicular ao chão.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "0833",
    "name": "Elevação de panturrilha estilo burrinho com peso adicional",
    "bodyPart": "panturrilhas",
    "equipment": "peso adicional",
    "target": "panturrilhas",
    "instructions": [
      "Fique de pé sobre uma plataforma elevada com a ponta dos pés na borda e os calcanhares pendurando.",
      "Segure de um objeto estável para maior apoio.",
      "Eleve os calcanhares o mais alto que puder estendendo os tornozelos.",
      "Faça uma breve pausa no ponto mais alto e depois abaixe lentamente os calcanhares até a posição inicial."
    ]
  },
  {
    "id": "1310",
    "name": "Flexão de braços com queda controlada e peso adicional",
    "bodyPart": "peito",
    "equipment": "peso adicional",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos um pouco mais afastadas que a largura dos ombros e os pés juntos.",
      "Abaixe o peito em direção ao chão, mantendo os cotovelos próximos ao corpo.",
      "Quando o peito esteja logo acima do chão, se empurre para cima de forma explosiva, levantando as mãos do chão.",
      "Enquanto empurre-se para cima, mova rapidamente as mãos para os lados e um pouco para a frente, permitindo que o corpo caia em direção ao chão."
    ]
  },
  {
    "id": "2135",
    "name": "Prancha frontal com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Comece deitando-se de bruços no chão.",
      "Coloque os antebraços no chão, com os cotovelos diretamente abaixo dos ombros.",
      "Estenda as pernas retas para trás, com a ponta dos pés no chão.",
      "Ative o core e eleve o corpo do chão, equilibrando-se sobre os antebraços e a ponta dos pés."
    ]
  },
  {
    "id": "0834",
    "name": "Elevação frontal com peso adicional",
    "bodyPart": "ombros",
    "equipment": "peso adicional",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um halter em cada mão com as palmas para as coxas.",
      "Mantenha os braços retos, expire e eleve os halteres à sua frente até que fiquem à altura dos ombros.",
      "Faça uma breve pausa no ponto mais alto, logo inspire abaixe lentamente os halteres de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0866",
    "name": "Elevação pélvica suspenso perna com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Pendure de uma barra fixa com os braços completamente estendidos e as palmas voltadas para fora.",
      "Ative o core e eleve as pernas à frente, mantendo-as retas.",
      "Continue levantando até que as pernas fiquem paralelas ao chão ou um pouco mais acima.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente as pernas de volta à posição inicial."
    ]
  },
  {
    "id": "0835",
    "name": "Hiperextensão lombar na bola suíça com peso adicional",
    "bodyPart": "costas",
    "equipment": "peso adicional",
    "target": "eretores da coluna",
    "instructions": [
      "Coloque-se de bruços sobre uma bola suíça com os quadris apoiadas na bola e os pés contra uma parede para ter mais estabilidade.",
      "Coloque as mãos por trás da cabeça ou cruze sobre o peito.",
      "Ative o core e eleve lentamente a parte superior do corpo da bola, estendendo as costas até que o corpo fique alinhado.",
      "Faça uma breve pausa no ponto mais alto, depois abaixe lentamente a parte superior do corpo de volta à posição inicial."
    ]
  },
  {
    "id": "3641",
    "name": "Balanço ajoelhado no step com peso adicional",
    "bodyPart": "ombros",
    "equipment": "peso adicional",
    "target": "deltoides",
    "instructions": [
      "Comece em posição de joelhos com os joelhos separados à altura dos quadris e as costas retas.",
      "Segure um peso em cada mão, com os braços estendidos retos para baixo à sua frente.",
      "Ative o core balance os pesos para cima e acima da cabeça, mantendo os braços retos.",
      "Abaixe os pesos de volta à posição inicial e repita o número de repetições desejado."
    ]
  },
  {
    "id": "3644",
    "name": "Afundo com balanço e peso adicional",
    "bodyPart": "pernas",
    "equipment": "peso adicional",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, sustentando um peso em cada mão.",
      "Dê um passo adiante com o pé direito, abaixando o corpo até a posição de afundo.",
      "Enquanto avança no afundo, balance os pesos para a frente para cima, mantendo os braços retos.",
      "Empurre com o pé direito e volte à posição inicial, balançando os pesos de novo para baixo."
    ]
  },
  {
    "id": "3286",
    "name": "Muscle up com peso adicional",
    "bodyPart": "costas",
    "equipment": "peso adicional",
    "target": "dorsais",
    "instructions": [
      "Comece pendurando de uma barra fixa com as palmas voltadas para fora e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Ative o core puxe o corpo para cima, para a barra, guiando com o peito.",
      "Ao chegar à parte alta do movimento, mude a pegada de modo que as palmas fiquem para você.",
      "Continue subindo até que o peito chegue à barra, depois faça uma pausa de um momento."
    ]
  },
  {
    "id": "3312",
    "name": "Muscle up no barra com peso adicional",
    "bodyPart": "costas",
    "equipment": "peso adicional",
    "target": "dorsais",
    "instructions": [
      "Comece pendurando de uma barra fixa com as palmas voltadas para fora e as mãos um pouco mais afastadas que a largura dos ombros.",
      "Ative o core e leve as escápulas para baixo e atrás.",
      "Flexione os cotovelos e puxe o peito para a barra, mantendo o corpo reto.",
      "Quando o peito chegue à barra, empurre para baixo com as mãos e leve os cotovelos para trás, elevando o corpo acima da barra."
    ]
  },
  {
    "id": "3290",
    "name": "Barra fixa unilateral com peso adicional",
    "bodyPart": "costas",
    "equipment": "peso adicional",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada pronada, um pouco mais largo que a altura dos ombros.",
      "Pendure da barra com um braço completamente estendido e o corpo reto.",
      "Ative o core puxe o corpo para cima em direção à barra flexionando o cotovelo e contraindo os músculos das costas.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "0840",
    "name": "Abdominal curto acima da cabeça na bola suíça com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um disco de importância ou um halter com as duas mãos e estenda os braços acima da cabeça.",
      "Ative o abdômen e flexione lentamente o tronco para a frente, levando o peito para os joelhos.",
      "Faça uma pausa de um momento no ponto mais alto e, em seguida, abaixe lentamente o tronco de volta à posição inicial."
    ]
  },
  {
    "id": "0841",
    "name": "Barra Fixa com Peso",
    "bodyPart": "costas",
    "equipment": "peso adicional",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada pronada, um pouco mais largo que a altura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para cima, para a barra, mantendo os cotovelos próximos ao corpo.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "0844",
    "name": "Círculos com os braços e peso adicional",
    "bodyPart": "ombros",
    "equipment": "peso adicional",
    "target": "deltoides",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão.",
      "Flexione ligeiramente os joelhos e incline-se para a frente a partir dos quadris, mantendo as costas retas.",
      "Eleve os braços para os lados, mantendo uma leve flexão nos cotovelos.",
      "Continue elevando os braços até que fiquem paralelos ao chão."
    ]
  },
  {
    "id": "0846",
    "name": "Rotação russa com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Segure um peso ou uma bola medicinal com as duas mãos à frente do peito.",
      "Incline-se ligeiramente para trás, mantendo as costas retas e o core ativado.",
      "Gire lentamente o tronco para a direita, levando o peso ou a bola medicinal em direção ao chão ao seu lado direito."
    ]
  },
  {
    "id": "0845",
    "name": "Rotação russa com pernas elevadas e peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com os joelhos flexionados e os pés levantados do chão, mantendo as pernas próximas.",
      "Segure o peso com as duas mãos à frente do peito, mantendo os cotovelos levemente flexionados.",
      "Incline-se ligeiramente para trás para ativar os músculos do core.",
      "Gire o tronco para a direita, levando o peso em direção ao chão ao seu lado direito."
    ]
  },
  {
    "id": "2371",
    "name": "Rotação russa com peso adicional — variação 2",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Sente-se no chão com os joelhos flexionados e os pés apoiados no chão.",
      "Segure o peso com as duas mãos à frente do peito.",
      "Incline-se ligeiramente para trás para ativar os músculos do core.",
      "Gire o tronco para a direita, levando o peso para o lado direito do corpo."
    ]
  },
  {
    "id": "0847",
    "name": "Rosca bíceps sentado na bola suíça com bola medicinal",
    "bodyPart": "braços",
    "equipment": "bola medicinal",
    "target": "bíceps",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados no chão e as costas retas.",
      "Segure uma bola medicinal com uma pegada supinada, as palmas voltadas para cima, e deixe que os braços pendurem aos lados.",
      "Mantenha a parte superior dos braços imóvel, expire e flexione a bola medicinal para os ombros.",
      "Faça uma breve pausa no ponto mais alto, contraindo os bíceps."
    ]
  },
  {
    "id": "0849",
    "name": "Rotação de tronco sentado na bola suíça com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés apoiados planos no chão e os joelhos flexionados em um ângulo de 90 graus.",
      "Segure um disco de importância ou um halter com as duas mãos cerca do peito.",
      "Ative o core gire lentamente o tronco para um lado, mantendo os quadris estáveis.",
      "Faça uma pausa por alguns segundos ao final da rotação, depois retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0850",
    "name": "Inclinação lateral na bola suíça com peso adicional",
    "bodyPart": "abdômen",
    "equipment": "peso adicional",
    "target": "abdômen",
    "instructions": [
      "Sente-se sobre uma bola suíça com os pés afastados na largura dos ombros e planos no chão.",
      "Segure um peso em uma mão e coloque a outra mão sobre o quadril.",
      "Ative o core incline-se lentamente para o lado do peso, mantendo as costas retas.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, retorne lentamente à posição inicial."
    ]
  },
  {
    "id": "0851",
    "name": "Agachamento Sissy com Peso",
    "bodyPart": "pernas",
    "equipment": "peso adicional",
    "target": "quadríceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e os dedos dos pés ligeiramente para fora.",
      "Segure um peso à frente do peito com as duas mãos, ou coloque uma barra sobre a parte superior das costas.",
      "Mantenha o peito erguido e o core ativado, abaixe lentamente o corpo flexionando os joelhos e os quadris.",
      "Continue baixando até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0852",
    "name": "Agachamento com Peso",
    "bodyPart": "pernas",
    "equipment": "peso adicional",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros, os dedos dos pés ligeiramente para fora.",
      "Segure um peso à frente do peito ou sobre os ombros.",
      "Ative o core e mantenha o peito erguido enquanto abaixe os quadris para baixo e para trás, como se se sentasse em uma cadeira.",
      "Abaixe até que as coxas fiquem paralelas ao chão ou até onde for confortável."
    ]
  },
  {
    "id": "0853",
    "name": "Rosca em pé com peso adicional",
    "bodyPart": "braços",
    "equipment": "peso adicional",
    "target": "bíceps",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um halter em cada mão, com as palmas voltadas para a frente.",
      "Mantenha os cotovelos próximos em relação ao tronco e expire enquanto flexiones os pesos até a altura dos ombros.",
      "Faça uma pausa de um momento na parte superior, logo inspire enquanto abaixa lentamente os pesos de volta à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0854",
    "name": "Aperto de mão em pé com peso adicional",
    "bodyPart": "antebraços",
    "equipment": "peso adicional",
    "target": "antebraços",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um peso em cada mão.",
      "Estenda os braços retos para a frente, com as palmas voltadas-se entre si.",
      "Contraia as mãos entre si com a maior força possível, ativando os antebraços.",
      "Mantenha a contração durante uns segundos e depois solte."
    ]
  },
  {
    "id": "3313",
    "name": "Mergulho na barra reta com peso adicional",
    "bodyPart": "peito",
    "equipment": "peso adicional",
    "target": "peitorais",
    "instructions": [
      "Coloque entre as barras paralelas com os braços completamente estendidos e o corpo reto.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão.",
      "Faça uma pausa breve, depois empurre o corpo novamente para cima à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "3642",
    "name": "Alongamento em afundo com peso adicional",
    "bodyPart": "pernas",
    "equipment": "peso adicional",
    "target": "glúteos",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros.",
      "Dê um passo adiante com o pé direito, mantendo as costas retas.",
      "Abaixe o corpo flexionando os joelhos até que a coxa direita fique paralelo ao chão.",
      "Empurre com o calcanhar direito para regressar à posição inicial."
    ]
  },
  {
    "id": "0856",
    "name": "Press Svend com peso adicional",
    "bodyPart": "peito",
    "equipment": "peso adicional",
    "target": "peitorais",
    "instructions": [
      "Fique de pé com os pés afastados na largura dos ombros e segure um disco de importância à frente do peito com as duas mãos.",
      "Mantenha os cotovelos levemente flexionados e as palmas voltadas-se entre si.",
      "Empurre o disco de importância reto para a frente, estendendo completamente os braços.",
      "Faça uma pausa de um momento ao final do movimento, depois leve lentamente o disco de importância de volta à posição inicial."
    ]
  },
  {
    "id": "1754",
    "name": "Mergulho em três bancos com peso adicional",
    "bodyPart": "braços",
    "equipment": "peso adicional",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco com as mãos agarrando a borda, os dedos apontando para a frente.",
      "Caminhe com os pés para a frente, deslizando os glúteos fosse do banco e sustentando seu peso com os braços.",
      "Abaixe o corpo flexionando os cotovelos, mantendo as costas cerca do banco.",
      "Faça uma pausa por alguns segundos no ponto mais baixo e, em seguida, empurre o corpo de volta à posição inicial."
    ]
  },
  {
    "id": "1755",
    "name": "Mergulho de tríceps com peso adicional",
    "bodyPart": "braços",
    "equipment": "peso adicional",
    "target": "tríceps",
    "instructions": [
      "Sente-se na borda de um banco ou cadeira com as mãos segurando a borda aproxime às quadris.",
      "Deslize os glúteos fosse da frente do banco com as pernas estendidas à sua frente.",
      "Mantenha as costas cerca do banco e os cotovelos levemente flexionados.",
      "Abaixe o corpo flexionando os cotovelos até que os braços fiquem paralelos ao chão."
    ]
  },
  {
    "id": "1767",
    "name": "Mergulho para tríceps nas barras paralelas altas com peso adicional",
    "bodyPart": "braços",
    "equipment": "peso adicional",
    "target": "tríceps",
    "instructions": [
      "Coloque-se entre duas barras paralelas com as mãos agarrando as barras e os braços completamente estendidos.",
      "Flexione os cotovelos e abaixe o corpo até que a parte superior dos braços fiquem paralela ao chão.",
      "Faça uma pausa de um momento, depois empurre com as palmas para estendar os braços e voltar à posição inicial.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0857",
    "name": "Abdominal com roda abdominal",
    "bodyPart": "abdômen",
    "equipment": "roda abdominal",
    "target": "abdômen",
    "instructions": [
      "Ajoelhe-se no chão e coloque o rolo à sua frente.",
      "Coloque as mãos nas alças do rolo e estenda os braços retos para a frente.",
      "Ative os músculos do core gire lentamente o rolo para a frente, mantendo as costas retas e o abdômen contraído.",
      "Continue girando para a frente até que o corpo esteja completamente estendido e os braços acima da cabeça."
    ]
  },
  {
    "id": "3637",
    "name": "Corrida com roda abdominal",
    "bodyPart": "cardio",
    "equipment": "peso corporal",
    "target": "sistema cardiovascular",
    "instructions": [
      "Comece em posição de prancha com as mãos sobre o rolo e o corpo reto.",
      "Ative o core comece a fazer girar o rolo para a frente estendendo os braços.",
      "Continue girando até que o corpo fique completamente estendido e os braços acima da cabeça.",
      "Inverta o movimento puxando o rolo de volta para o corpo, usando o core e os braços."
    ]
  },
  {
    "id": "1429",
    "name": "Barra fixa com pegada aberta",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Pendure de uma barra fixa com as palmas voltadas para fora e as mãos mais afastadas que a largura dos ombros.",
      "Ative o core e aproxime as escápulas.",
      "Puxe o corpo para cima em direção à barra até que seu queixo fique acima da barra.",
      "Abaixe o corpo de volta à posição inicial com controle."
    ]
  },
  {
    "id": "1367",
    "name": "Barra Fixa Atrás da Nuca com Pegada Larga",
    "bodyPart": "costas",
    "equipment": "peso corporal",
    "target": "dorsais",
    "instructions": [
      "Segure a barra fixa com uma pegada pronada ampla, as mãos um pouco mais afastadas que a largura dos ombros.",
      "Pendure da barra com os braços completamente estendidos e o corpo reto.",
      "Ative os músculos das costas e puxe o corpo para a barra, levando o peito à frente.",
      "Continue subindo até que o queixo fique acima da barra."
    ]
  },
  {
    "id": "1311",
    "name": "Flexão de braços com mãos bem afastadas",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Comece em uma posição de prancha alta com as mãos mais afastadas que a largura dos ombros.",
      "Mantenha o corpo alinhado da cabeça aos pés.",
      "Abaixe o peito em direção ao chão flexionando os cotovelos, mantendo-os cerca do tronco.",
      "Empurre com as palmas para estender os braços e regressar à posição inicial."
    ]
  },
  {
    "id": "2363",
    "name": "Mergulho para peitoral com pegada aberta nas barras paralelas altas",
    "bodyPart": "peito",
    "equipment": "peso corporal",
    "target": "peitorais",
    "instructions": [
      "Coloque sobre as barras paralelas com os braços completamente estendidos e o corpo suspendido no ar.",
      "Incline-se ligeiramente para a frente abaixe o corpo flexionando os cotovelos até que o peito fique logo acima das barras.",
      "Faça uma pausa breve, depois empurre o corpo novamente para cima à posição inicial estendendo os braços.",
      "Repita o número de repetições desejado."
    ]
  },
  {
    "id": "0858",
    "name": "Sprints Suspensos",
    "bodyPart": "abdômen",
    "equipment": "peso corporal",
    "target": "abdômen",
    "instructions": [
      "Encontre um espaço aberto ou uma pista para realizar o exercício.",
      "Comece de pé com os pés afastados na largura dos ombros.",
      "Comece a correr o mais rápido que possa, bombeando os braços e elevando os joelhos.",
      "Continue o sprint durante uma distância ou período de tempo específico."
    ]
  },
  {
    "id": "1604",
    "name": "Alongamento Mais Completo do Mundo",
    "bodyPart": "pernas",
    "equipment": "peso corporal",
    "target": "posteriores das coxas",
    "instructions": [
      "Comece em posição de afundo com o pé direito adiante o pé esquerdo atrás.",
      "Coloque as mãos no chão a ambos lados de seu pé direito.",
      "Abaixe o joelho esquerdo em direção ao chão e estenda a perna direita, mantendo o pé direito plano no chão.",
      "Gire o tronco para a direita, estendendo o braço direito para o teto."
    ]
  },
  {
    "id": "1428",
    "name": "Círculos com os Punhos",
    "bodyPart": "antebraços",
    "equipment": "peso corporal",
    "target": "antebraços",
    "instructions": [
      "Estenda os braços retos à sua frente.",
      "Fecha ambas mãos em um punho.",
      "Gire os punhos em um movimento circular, mantendo os braços imóveis.",
      "Continue os círculos com os punhos pelo número de repetições desejado."
    ]
  },
  {
    "id": "0859",
    "name": "Rolo de punho",
    "bodyPart": "antebraços",
    "equipment": "peso adicional",
    "target": "antebraços",
    "instructions": [
      "Segure um peso em uma extremidade de uma corda ou barra.",
      "Segure a outra extremidade da corda ou barra com as duas mãos, com as palmas voltadas para baixo.",
      "Fique de pé com os pés afastados na largura dos ombros e os braços completamente estendidos à sua frente.",
      "Enrole lentamente o peso para as mãos flexionando os punhos."
    ]
  }
];
