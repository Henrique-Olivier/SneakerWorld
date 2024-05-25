create database SneakerWorld;

use SneakerWorld;

create table marca (
idMarca int primary key auto_increment,
nome varchar(15)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(264) unique,
fkMarcaFavorita int,
constraint fkMarcaUsuario foreign key (fkMarcaFavorita) references marca(idMarca),
senha varchar(45)
);

create table registroJogo (
idJogo int primary key auto_increment,
TempoEmSegundos Varchar(45),
movimentos int 
);

create table ranking (
fkUsuario int,
constraint fkRankingUsuario foreign key (fkusuario) references usuario(idusuario),
fkRegistro int,
dtJogo date,
constraint fkRankingRegistro foreign key (fkRegistro) references registroJogo(idJogo),
primary key (fkusuario, fkregistro)
);

insert into marca values
(default, 'Nike'),
(default, 'Adidas'),
(default, 'Vans'),
(default, 'Puma'),
(default, 'OUS');

select * from usuario;

select registroJogo.tempoEmSegundos, DATE_FORMAT(dtJogo, '%d/%m/%Y') as data from registroJogo join ranking on ranking.fkregistro = registrojogo.idjogo where fkUsuario = 1 order by registrojogo.idjogo desc limit 7;

INSERT INTO usuario (nome, sobrenome, email, fkMarcaFavorita, senha) VALUES
('João', 'Silva', 'joao.silva1@example.com', 3, 'senha123'),
('Maria', 'Oliveira', 'maria.oliveira1@example.com', 2, 'senha123'),
('Pedro', 'Souza', 'pedro.souza1@example.com', 3, 'senha123'),
('Ana', 'Costa', 'ana.costa1@example.com', 4, 'senha123'),
('Lucas', 'Santos', 'lucas.santos1@example.com', 5, 'senha123'),
('Julia', 'Lima', 'julia.lima1@example.com', 3, 'senha123'),
('Marcos', 'Pereira', 'marcos.pereira1@example.com', 1, 'senha123'),
('Fernanda', 'Ferreira', 'fernanda.ferreira1@example.com', 3, 'senha123'),
('Rafael', 'Almeida', 'rafael.almeida1@example.com', 2, 'senha123'),
('Beatriz', 'Nascimento', 'beatriz.nascimento1@example.com', 3, 'senha123'),
('Gabriel', 'Mendes', 'gabriel.mendes1@example.com', 5, 'senha123'),
('Leticia', 'Barbosa', 'leticia.barbosa1@example.com', 3, 'senha123'),
('Bruno', 'Ribeiro', 'bruno.ribeiro1@example.com', 4, 'senha123'),
('Patricia', 'Martins', 'patricia.martins1@example.com', 3, 'senha123'),
('Thiago', 'Carvalho', 'thiago.carvalho1@example.com', 1, 'senha123'),
('Larissa', 'Gomes', 'larissa.gomes1@example.com', 2, 'senha123'),
('Rodrigo', 'Rocha', 'rodrigo.rocha1@example.com', 3, 'senha123'),
('Camila', 'Dias', 'camila.dias1@example.com', 5, 'senha123'),
('Andre', 'Teixeira', 'andre.teixeira1@example.com', 3, 'senha123'),
('Aline', 'Moura', 'aline.moura1@example.com', 4, 'senha123');