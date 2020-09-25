export const sorting = (movies, flag, sortFlag) =>{
    const copy = [...movies];
    if(!flag){
        copy.sort(function(a, b){
            return b[sortFlag] - a[sortFlag]
        })
    }else{
        copy.reverse();
    }
    return copy;
};







