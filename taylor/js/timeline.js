const ALBUNS=[
  [2006,'🤠','Taylor Swift','#4fb3a5','O primeiro álbum, lançado quando ela tinha 16 anos.'],
  [2008,'🎻','Fearless','#d4a640','Ganhou o Grammy de Álbum do Ano.'],
  [2010,'💜','Speak Now','#7b3f9e','Ela escreveu todas as músicas sozinha.'],
  [2012,'❤️','Red','#b3202f','Mistura country e pop, e tem "All Too Well".'],
  [2014,'✨','1989','#8fcdf0','Primeiro álbum totalmente pop. O nome é o ano em que ela nasceu.'],
  [2017,'🐍','reputation','#1c1c1c','Visual sombrio, com a cobra como símbolo.'],
  [2019,'🌈','Lover','#f6b3d6','Paleta pastel de rosa e azul.'],
  [2020,'🌲','folklore','#a7b0aa','Lançado de surpresa, em julho de 2020, com som indie folk.'],
  [2020,'🍂','evermore','#b5651d','O "álbum irmão" do folklore, lançado em dezembro de 2020.'],
  [2022,'🌙','Midnights','#2b2d6e','Álbum sobre treze noites sem dormir.'],
  [2024,'🪶','The Tortured Poets Department','#d9d2c5','Lançado em abril de 2024.']
];
function txt(h){const n=parseInt(h.slice(1),16),l=((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000;return l>140?'#222':'#fff';}
const lista=document.getElementById('lista');
ALBUNS.forEach(([ano,e,nome,cor,c])=>{
  const b=document.createElement('button');
  b.className='album';b.setAttribute('aria-expanded','false');
  b.style.setProperty('--c',cor);b.style.setProperty('--t',txt(cor));
  b.innerHTML=e+' <b>'+nome+'</b> ('+ano+')<small>'+c+'</small>';
  b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')==='false');
  lista.appendChild(b);
});
