update estados 
set nome = 'Maranhão'
where sigla = 'MA'

--checando se foi alterado
select nome from estados where sigla = 'MA'
select est.nome from estados est where sigla = 'MA'

--filtrando p fazer alteração apenas onde quero
update estados
set nome = 'Paraná', 
    populacao = 11.32
where sigla = 'PR'

select 
    est.nome, 
    sigla, 
    populacao
from estados est 
where sigla = 'PR'