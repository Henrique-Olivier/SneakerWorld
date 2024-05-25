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