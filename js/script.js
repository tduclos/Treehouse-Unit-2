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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(){
    
};

showPage(listItems, 1);

// Remember to delete the comments that came with this file, and replace them with your own code comments.