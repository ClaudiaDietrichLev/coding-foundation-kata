function filterApiData(apiData, mandatoryKeys) {
  //Data in an 2nd array for the filter
  let filteredData = apiData;

  //for each key the filter will be applied, to have
  // an "and" search, the filteredData will be used for the 
  //  the  check.
  for (let key of mandatoryKeys){
    filteredData = filteredData.filter(function(dataObj){
      return  dataObj.hasOwnProperty(key);
    })
    
  }
  return filteredData;
}
