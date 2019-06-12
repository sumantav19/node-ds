let quickSort = module.exports = ([pivot,...rest])=>{
  if(pivot){
    return quickSort(rest.filter((curr)=> curr < pivot))
    .concat(pivot)
    .concat(quickSort(rest.filter((curr)=> curr >= pivot)))
  }
  return [];
}