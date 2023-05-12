export interface favorite{

    Isim:string,
    Satis:string,
    Alis:string
    
};

export type favoriteContextType={
    favs:favorite[];
    saveFav:(fav:favorite)=>void
}