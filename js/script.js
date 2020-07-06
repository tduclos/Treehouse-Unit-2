/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

   //Global Variables

//contains every li in an array
const listItems = document.querySelector('.student-list').children; 

//the max number of elements in a page
const pageSize = 10;


/*** 
  showPage is a function to show the page a user clicks on. It will show pageSize elements per page.
  @param list- An array of items in the UL
  @param page- the number of the page to show
  
  A quick note- I didn't read ahead in the instructions and ended up making my 'if' statement very differently than what was intended! I'm confident in the logic behind it, but feedback on it is appreciated.
***/

function showPage(list, page){
        for(let i=0; i<list.length;i++){
          if((Math.floor(i/pageSize)+1)===page){
             list[i].style.display = '';
             }else{
             list[i].style.display = 'none';    
             };
        };
};


/*** 
   appendPageLinks is a function to add numbered buttons to the bottom of the page, each corresponding to a page the user can view
   @param list- An array of items in the UL
***/

function appendPageLinks(list){
    const mainDiv = document.querySelector('.page'); //the main div
    const linkDiv = document.createElement('div'); //the div the buttons will go into
        linkDiv.className = 'pagination';
    const ul = document.createElement('ul');         //buttons go in a list here
    const totalPages = Math.ceil(list.length/pageSize); //How many buttons we need
    
    //appends a div with an empty ul to the main div
    mainDiv.appendChild(linkDiv);
    linkDiv.appendChild(ul);
    
    //adds a numbered button into the ul for every page
    for(let i = 1; i<=totalPages; i++) { 
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.textContent = i;
        li.appendChild(link);
        ul.appendChild(li);
        //adds class to the first active page
        if(i === 1) {
            link.className = 'active';
        }
    }
    
};

//show page 1
showPage(listItems, 1);
//append page with pagination buttons
appendPageLinks(listItems);