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
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
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