// script.js

// Categorias padrão
const categorias = [
  'Eletricista', 'Gesseiro', 'Encanador',
  'Fotógrafo', 'Pintor', 'Acompanhante de hospital',
  'Motoboy', 'Servente'
];

const listaCategorias = document.getElementById('lista-categorias');

// Renderiza lista de categorias
categorias.forEach(cat => {
  const li = document.createElement('li');
  li.textContent = cat;
  listaCategorias.appendChild(li);
});

// Postagens simuladas
const posts = [
  {
    nome: 'Nomám',
    tempo: 'há 2 h',
    texto: 'Preciso de um eletricista para consertar uma tomada com mau contato',
    imagem: null
  },
  {
    nome: 'Nomám',
    tempo: 'há 4 h',
    texto: 'Sou eletricista qualificado! Instalações e reparos elétricos em geral',
    imagem: 'assets/post.jpg'
  }
];

const postsContainer = document.getElementById('posts-container');

// Renderiza os posts
posts.forEach(p => {
  const div = document.createElement('div');
  div.className = 'post';

  div.innerHTML = `
    <p><strong>${p.nome}</strong> <span style="color: #666">${p.tempo}</span></p>
    <p>${p.texto}</p>
    ${p.imagem ? `<img src="${p.imagem}" alt="imagem do post">` : ''}
    <div style="margin-top:10px">
      <button>Curtir</button>
      <button>💬 Comentar</button>
    </div>
  `;

  postsContainer.appendChild(div);
});
