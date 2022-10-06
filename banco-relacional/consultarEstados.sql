--comando para consulta geral (todas as colunas)
select * from estados

--filtrando algumas colunas
select sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul'

select nome, regiao, populacao
from estados
where populacao >= 10
order by populacao desc