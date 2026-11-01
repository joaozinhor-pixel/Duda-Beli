const R={
  lov:{e:'💜',n:'Lover',cor:'#f6b3d6',t:'Romântica e sonhadora: você vê o lado cor-de-rosa da vida.'},
  fol:{e:'🌲',n:'folklore',cor:'#a7b0aa',t:'Sensível e criativa: você ama um cantinho tranquilo e boas histórias.'},
  a89:{e:'✨',n:'1989',cor:'#8fcdf0',t:'Animada e cheia de energia: você curte a vida e as novidades.'},
  mid:{e:'🌙',n:'Midnights',cor:'#2b2d6e',t:'Pensativa e misteriosa: suas melhores ideias vêm de madrugada.'},
  red:{e:'❤️',n:'Red',cor:'#b3202f',t:'Intensa e apaixonada: você sente tudo com muita força.'}
};
const Q=[
  ['Como seria o seu sábado perfeito?',[['Passear pela cidade','a89'],['Jantar a dois','lov'],['Filme em casa no cobertor','fol'],['Ficar acordada até tarde','mid'],['Aventura com as amigas','red']]],
  ['Qual cor você prefere?',[['Azul-claro','a89'],['Rosa','lov'],['Verde acinzentado','fol'],['Azul-escuro','mid'],['Vermelho','red']]],
  ['Qual clima combina com você?',[['Dia de sol','a89'],['Pôr do sol','lov'],['Chuva fina','fol'],['Noite estrelada','mid'],['Outono','red']]],
  ['Como você se descreve?',[['Animada','a89'],['Romântica','lov'],['Sensível','fol'],['Pensativa','mid'],['Intensa','red']]],
  ['Qual lugar você escolhe?',[['Cidade grande','a89'],['Jardim florido','lov'],['Floresta','fol'],['Terraço à noite','mid'],['Cafeteria no outono','red']]]
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const caixa=document.getElementById('caixa'),prog=document.getElementById('prog');
let i=0,pts={};
function mostrar(){
  if(i>=Q.length)return fim();
  prog.textContent='Pergunta '+(i+1)+' de '+Q.length;
  caixa.innerHTML='<h2>'+Q[i][0]+'</h2>';
  Q[i][1].forEach(([t,k])=>{
    const b=document.createElement('button');
    b.className='opcao';b.textContent=t;
    b.onclick=()=>{pts[k]=(pts[k]||0)+1;i++;mostrar();};
    caixa.appendChild(b);
  });
}
function fim(){
  const k=Object.keys(pts).sort((a,b)=>pts[b]-pts[a])[0],r=R[k];
  prog.textContent='';
  caixa.innerHTML='<div class="resultado" style="background:'+r.cor+';color:'+txt(r.cor)+'"><div class="grande">'+r.e+'</div><h2>Você é a era '+r.n+'!</h2><p>'+r.t+'</p></div><p><button class="btn" id="refazer">Refazer o quiz</button></p>';
  document.getElementById('refazer').onclick=()=>{i=0;pts={};mostrar();};
}
mostrar();
