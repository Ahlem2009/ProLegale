import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

 // Retourne les comptes à afficher pour la page courante
 getObjectsToShow(page:number,pageSize:number,object:any): [] {
  const startIndex = (page - 1) * pageSize;
  return object.slice(startIndex, startIndex + pageSize);
}

// Passe à la page suivante
next(page:number,pageCount:number): number {
  if (page < pageCount) {
    return page++;
  }
}

// Passe à la page précédente
prev(page:number): number {
  if (page > 1) {
    return page--;
  }
}

// Retourne le nombre total de pages
getpageCount(object:any,pageSize:number): number {
  return Math.ceil(object.length / pageSize);
}









}
