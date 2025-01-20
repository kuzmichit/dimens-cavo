const rows = document.querySelectorAll('tr');

const tabellaCDTUnitaria = [];

let swapIndex = 0;
let swap = null;
rows.forEach( (row,index) => {
  const key = row.firstElementChild.textContent.trim();
  const value = row.lastElementChild.textContent.trim();

  if(!(index % 8) ) { 
    if(index !== 0) tabellaCDTUnitaria.push(swap);
    swap = {};
  }

  swap[key] = value	
  swapIndex++;
} )
	
if (Object.keys(swap).length > 0) {
  tabellaCDTUnitaria.push(swap);
}
