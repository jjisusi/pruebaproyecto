import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  imagenes = [
    "https://image.freepik.com/free-vector/vector-illustration-cosmonaut_1441-11.jpg",
    "https://image.freepik.com/free-vector/polygonal-lion-head_23-2147495868.jpg",
    "https://image.freepik.com/free-vector/hand-painted-steampunk-man-illustration_23-2147537528.jpg",
    "https://image.freepik.com/free-vector/analytical-and-creative-brain_23-2147506845.jpg",
    "https://image.freepik.com/free-vector/abstract-floral-background_1005-10.jpg",
    "https://image.freepik.com/free-vector/thank-you-composition-in-comic-style_23-2147831785.jpg",
    "https://media.giphy.com/media/3ornk2zKMUgETO4aMo/giphy.gif"
  ]

  constructor() { }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomDistribution(): number[] {
    let orderedList = []
    for (let i = 0; i < this.imagenes.length; i++) {
      orderedList.push(i)
      orderedList.push(i)
    }
    console.log(orderedList)
    let unorderedList = []
    let iter = 2 * this.imagenes.length;
    let _iter = iter
    for (let i = 0; i < iter; i++) {
      let index = this.randomIntFromInterval(0, _iter - 1)
      unorderedList.push(orderedList[index])
      _iter--
      orderedList.splice(index, 1);
    }
    return unorderedList
  }
}
