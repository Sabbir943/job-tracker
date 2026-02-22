const totalCount=document.getElementById('total');
const interviewCount=document.getElementById('interview');
const rejectCount=document.getElementById('rejected');
const upperAllBtn=document.getElementById('all-btn');
const upperInterviewBtn=document.getElementById('interview-btn');
const upperRejectBtn=document.getElementById('rejected-btn');
const allJobCart=document.getElementById('all-cart');
let interviewList=[];
let rejectList=[];
function calculateCount(){
    totalCount.innerText=allJobCart.children.length;
    interviewCount.innerText=interviewList.length;
    rejectCount.innerText=rejectList.length;
}
calculateCount();


function toggleStyle(id){
    upperAllBtn.classList.remove('bg-blue-500','text-white');
    upperInterviewBtn.classList.remove('bg-blue-500','text-white');
    upperRejectBtn.classList.remove('bg-blue-500','text-white');

    upperAllBtn.classList.add('bg-gray-200','text-black');
    upperInterviewBtn.classList.add('bg-gray-200','text-black');
    upperRejectBtn.classList.add ('bg-gray-200','text-black');

    const selected=document.getElementById(id);
    selected.classList.remove('bg-gray-200','text-black')
    selected.classList.add('bg-blue-500','text-white');
 


}