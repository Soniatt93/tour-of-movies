import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
        { id: 11, title: 'El Señor de los Anillos: la comunidad del anillo', genres: 'Fantasía/Acción', year: 2001, synopsis: 'Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo.', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUj6odS4H_Pl6TLfCnzBYDWlvBPy2drmqo5dTh0eWYw5P6mR1a' },
        { id: 12, title: 'El corredor del Laberinto', genres: 'Ciencia ficción', year: 2014, synopsis: 'Thomas es un adolescente cuya memoria fue borrada y que ha sido encerrado junto a otros chicos de su edad en un laberinto plagado de monstruos y misterios. Para sobrevivir, tendrá que adaptarse a las normas y a los demás habitantes del laberinto.', image: 'https://es.web.img3.acsta.net/pictures/14/07/31/11/02/134907.jpg' },
        { id: 13, title: 'Los Vengadores: Endgames', genres: 'Fantasía/Ciencia ficción', year: 2019, synopsis: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.', image: 'https://i.pinimg.com/564x/9a/d4/a8/9ad4a868526c5d6fe5de205d3287122e.jpg' },
        { id: 14, title: 'Divergente', genres: 'Ciencia ficción', year: 2014, synopsis: 'En una sociedad futura, la gente está dividida entre facciones basadas en sus personalidades. Después de que una joven descubre que ella es una Divergente y nunca será de algún grupo, descubre un complot para destruir a quienes con como ella.', image: 'https://es.web.img3.acsta.net/pictures/210/581/21058113_20131115104650328.jpg' },
        { id: 15, title: 'Escuadron suicida', genres: 'Fantasía/Ciencia ficción', year: 2016, synopsis: 'Los peores villanos de las cárceles y hospitales psiquiátricos, todos poseedores de cualidades especiales, son liberados por el gobierno para conformar un equipo de luchadores de élite y detener a una misteriosa y poderosa entidad. Mientras tanto, el Joker actúa por su cuenta, sembrando el caos a su paso.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SwkoeAk1LZqg9VJ1pmQz_pUVCi-3UryzzqDJNcsQOZy-iG9O' },
        { id: 16, title: 'Joker', genres: 'Dramático/Suspense', year: 2019, synopsis: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrGZ9MLLOUkK5Fa-5-zxfyqNdE15-p52rm3ahwac1PSNdfqnxm' },
        { id: 17, title: 'Deadpool', genres: 'Ciencia ficción/Acción', year: 2016, synopsis: 'Un exmercenario quien, tras haber sido sometido a un cruel experimento, adquiere el superpoder de sanar rápidamente y pretende vengarse del hombre que destrozó su vida.', image: 'https://es.web.img2.acsta.net/r_1280_720/pictures/15/12/04/10/48/099822.jpg' },
        { id: 18, title: 'Spider-Man: Lejos de casa', genres: 'Fantasía/Ciencia ficción', year: 2019, synopsis: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.', image: 'https://es.web.img3.acsta.net/pictures/19/06/04/09/41/5108791.jpg' },
        { id: 19, title: 'Aladin', genres: 'Fantasía/Romántico', year: 2019, synopsis: 'Aladdin es un ladronzuelo que se enamora de la hija del Sultán, la princesa Jasmine. Para poder conquistarla aceptará un desafío de Jafar. Aladdín tendrá que entrar en una cueva en mitad del desierto y conseguir una lámpara mágica que contiene al Genio que será el encargado de concederle todos sus deseos.', image: 'https://es.web.img3.acsta.net/pictures/19/05/08/16/59/2526525.jpg' },
        { id: 20, title: 'Minions', genres: 'Animación/Aventura', year: 2015, synopsis: 'Los minions, ingenuos y torpes, buscan un verdadero villano al que servir. A lo largo de una evolución de millones de años, los minions se han puesto al servicio de los amos más despreciables. Kevin, acompañado por el rebelde Stuart y el adorable Bob, emprende un emocionante viaje para conseguir una jefa a quien servir, la terrible Scarlet Overkill.', image: 'https://es.web.img3.acsta.net/pictures/15/02/04/12/29/183973.jpg' }
    ];
    return {movies};
  }


  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}