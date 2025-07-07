// Lista de categorias
const categorias = [
  'Eletricista', 'Gesseiro', 'Encanador',
  'Fotógrafo', 'Pintor', 'Acompanhante de hospital',
  'Motoboy', 'Servente'
];

const listaCategorias = document.getElementById('lista-categorias');
const postsContainer = document.getElementById('posts-container');

// Postagens simuladas
const posts = [
  {
    nome: 'Maria',
    tempo: 'há 2 h',
    texto: 'Preciso de um eletricista para instalar um chuveiro.',
    imagem: null,
    categoria: 'Eletricista',
    tipo: 'cliente'
  },
  {
    nome: 'João',
    tempo: 'há 3 h',
    texto: 'Sou eletricista com 10 anos de experiência.',
    imagem: null,
    categoria: 'Eletricista',
    tipo: 'trabalhador'
  },
  {
    nome: 'Ana',
    tempo: 'há 4 h',
    texto: 'Procuro fotógrafo para casamento.',
    imagem: null,
    categoria: 'Fotógrafo',
    tipo: 'cliente'
  },
  {
    nome: 'Carlos',
    tempo: 'há 1 h',
    texto: 'Sou fotógrafo profissional, atendo eventos!',
    imagem: 'assets/post.jpg',
    categoria: 'Fotógrafo',
    tipo: 'trabalhador'
  }
];

// Renderiza categorias com opções de filtro
categorias.forEach(cat => {
  const li = document.createElement('li');
  li.className = 'categoria-item';

  li.innerHTML = `
    <div class="categoria-nome">
      ${cat} <span class="seta">🢇</span>
    </div>
    <div class="opcoes oculto">
      <button onclick="filtrarFeed('${cat}', 'cliente')">👤 Precisa de um Serviço</button>
      <button onclick="filtrarFeed('${cat}', 'Oferece um Trabalho')">🛠️ Sou Trabalhador</button>
      <button onclick="filtrarFeed('${cat}', 'todos')">👁️ Ver Todos</button>
    </div>
  `;

  li.querySelector('.categoria-nome').addEventListener('click', (e) => {
    e.stopPropagation();

    // Fecha todas as outras opções abertas
    document.querySelectorAll('.categoria-item').forEach(item => {
      if (item !== li) {
        item.classList.remove('expandida');
        item.querySelector('.opcoes')?.classList.add('oculto');
      }
    });

    // Alterna esta
    const opcoes = li.querySelector('.opcoes');
    opcoes.classList.toggle('oculto');
    li.classList.toggle('expandida');
  });

  listaCategorias.appendChild(li);
});

// Renderiza os posts
function renderPosts(filtroCategoria = null, filtroTipo = null) {
  postsContainer.innerHTML = '';

  const filtrados = posts.filter(p => {
    const porCategoria = !filtroCategoria || p.categoria === filtroCategoria;
    const porTipo = !filtroTipo || filtroTipo === 'todos' || p.tipo === filtroTipo;
    return porCategoria && porTipo;
  });

  if (filtrados.length === 0) {
    postsContainer.innerHTML = '<p style="color:gray">Nenhuma publicação encontrada.</p>';
    return;
  }

  filtrados.forEach(p => {
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
}

// Aplica o filtro
function filtrarFeed(categoria, tipo) {
  console.log(`Filtrando: ${categoria} | ${tipo}`);
  renderPosts(categoria, tipo);

  // Fecha os menus
  document.querySelectorAll('.opcoes').forEach(op => op.classList.add('oculto'));
  document.querySelectorAll('.categoria-item').forEach(item => item.classList.remove('expandida'));
}

// Inicializa com todos os posts
renderPosts();

// Fecha dropdown ao clicar fora
document.addEventListener('click', e => {
  if (!e.target.closest('.categoria-item')) {
    document.querySelectorAll('.opcoes').forEach(op => op.classList.add('oculto'));
    document.querySelectorAll('.categoria-item').forEach(item => item.classList.remove('expandida'));
  }
});
