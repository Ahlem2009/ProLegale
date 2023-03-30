export class Tag{  
  id?: number ;
    label:string='';
    url:string='';
  }
export class Article{
  
    id?: number ;
    titre:string='';
    ref: string='';
    // etat:string;
    date_publication : string='';
    abstract:string='';
    tags :Tag[]=[];

    // nature:string;

  }