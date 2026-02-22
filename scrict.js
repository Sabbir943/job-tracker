const totalCount=document.getElementById('total');
const interviewCount=document.getElementById('interview');
const rejectCount=document.getElementById('rejected');
const upperAllBtn=document.getElementById('all-btn');
const upperInterviewBtn=document.getElementById('interview-btn');
const upperRejectBtn=document.getElementById('rejected-btn');
const allJobCart=document.getElementById('all-cart');
const addNewDiv=document.getElementById('job-fillter');
let interviewList=[];
let rejectList=[];
let currentFilter="all";
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

document.getElementById('mainContainer')
.addEventListener('click',function(event){
 if(event.target.classList.contains('interview')){
    // console.log('hello bangladesh')
    const parentNode=event.target.closest('.jobs');
    // console.log(parentNode);
    if(!parentNode) return;
    const companyName=parentNode.querySelector('.company-name').innerText;
    const companyPosition=parentNode.querySelector('.empoloye-pos').innerText;
    const empoloyeWork=parentNode.querySelector('.empoloye-work').innerText;
    const applyBtn=parentNode.querySelector('.apply');
    applyBtn.innerText='Interview';
    applyBtn.classList.remove('bg-base-200');
    applyBtn.classList.add('bg-green-400','text-black');
    applyBtn.classList.remove('bg-red-400','text-white');
    const notes=parentNode.querySelector('.notes').innerText;
   
    const jobInfo={
        companyName,
        companyPosition,
        empoloyeWork,
        applyBtn:'Interview',
        notes,
        interview:'Interview',
        rejected:'Rejected'
    }
    const interviewExit=interviewList.find(item=>item.companyName===jobInfo.companyName);

    if(!interviewExit){
        interviewList.push(jobInfo);
    }
    
    const rejectList=rejectList.filter(item=>item.companyName!=jobInfo.companyName);
    calculateCount();
 }

 else if(event.target.classList.contains('rejected')){
    // console.log('hello programmer');
    const parentNode=event.target.closest('.jobs');
    // console.log(parentNode);

    const companyName=parentNode.querySelector('.company-name').innerText;
    const companyPosition=parentNode.querySelector('.empoloye-pos').innerText;
    const empoloyeWork=parentNode.querySelector('.empoloye-work').innerText;
    const applyBtn=parentNode.querySelector('.apply');
    applyBtn.innerText='Rejected';
    applyBtn.classList.remove('bg-base-200');
    applyBtn.classList.add('bg-red-400','text-black');
    applyBtn.classList.remove('bg-green-400','text-white');
    const notes=parentNode.querySelector('.notes').innerText;

    const jobInfo={
        companyName,
        companyPosition,
        empoloyeWork,
        applyBtn:'Rejected',
        notes,
        interview:'Interview',
        rejected:'Rejected'
    }

    const rejectExit=rejectList.find(item=>item.companyName===jobInfo.companyName);
    if(!rejectExit){
        rejectList.push(jobInfo);
    }

    const interviewList=interviewList.filter(item=>item.companyName!=jobInfo.companyName);
    calculateCount();

 }
})



function showAllCart(){
addNewDiv.classList.add('hidden');
allJobCart.classList.remove('hidden');
}

function renderInterview(){
    addNewDiv.classList.remove('hidden');
    allJobCart.classList.add('hidden');

    addNewDiv.innerHTML='';
    if (interviewList.length === 0) {
        addNewDiv.innerHTML = '<div id="" class="space-y-3 mb-[20] flex flex-col justify-center items-center text-center border p-5 shadow rounded-md "><img class="" src="jobs.png" alt=""><p class="text-[#002C5C]  text-[22px] font-bold">No jobs available</p><p class="text-neutral/50">Check back soon for new job opportunities</p></div>'
        
        return;
    }

    for(const job of interviewList){
        const div=document.createElement('div');
        div.classList.add('flex' ,'flex-row', 'justify-between',' border p-5', 'shadow', 'rounded-md ','mb-[40px]');
        div.innerHTML=`
           <div>
                    <h1  class="company-name text-[20px] text-[#002C5C] font-bold">${job.companyName}</h1>

                    <p class="empoloye-pos text-neutral/50 mt-2 mb-2 font-bold ">${job.companyPosition}</p>

                    <p class="empoloye-work text-neutral/50 font-bold">${job.empoloyeWork}</p>

                    <div class="mt-2 mb-2">
                        <button class="apply text-[#002C5C] p-2 rounded text-neutral/50 border font-bold bg-base-200">${job.applyBtn}</button>
                    </div>


                    <p class="notes mt-3 mb-3 text-neutral/50">${job.notes}</p>


                    <button class="interview btn btn-outline btn-success font-bold">Interview</button>

                    <button class="rejected btn btn-outline btn-secondary font-bold">Rejected</button>

                </div>

        `
        addNewDiv.appendChild(div);
    }


}

function renderRejected(){
    addNewDiv.classList.remove('hidden');
    allJobCart.classList.add('hidden');

    addNewDiv.innerHTML='';
    if (rejectList.length === 0) {
        addNewDiv.innerHTML = '<div id="" class="space-y-3 mb-[20] flex flex-col justify-center items-center text-center border p-5 shadow rounded-md "><img class="" src="jobs.png" alt=""><p class="text-[#002C5C]  text-[22px] font-bold">No jobs available</p><p class="text-neutral/50">Check back soon for new job opportunities</p></div>'
        
        return;
    }

    for(const job of rejectList){
        const div=document.createElement('div');
        div.classList.add('flex' ,'flex-row', 'justify-between',' border p-5', 'shadow', 'rounded-md ','mb-[40px]');
        div.innerHTML=`
           <div>
                    <h1  class="company-name text-[20px] text-[#002C5C] font-bold">${job.companyName}</h1>

                    <p class="empoloye-pos text-neutral/50 mt-2 mb-2 font-bold ">${job.companyPosition}</p>

                    <p class="empoloye-work text-neutral/50 font-bold">${job.empoloyeWork}</p>

                    <div class="mt-2 mb-2">
                        <button class="apply text-[#002C5C] p-2 rounded text-neutral/50 border font-bold bg-base-200">${job.applyBtn}</button>
                    </div>


                    <p class="notes mt-3 mb-3 text-neutral/50">${job.notes}</p>


                    <button class="interview btn btn-outline btn-success font-bold">Interview</button>

                    <button class="rejected btn btn-outline btn-secondary font-bold">Rejected</button>

                </div>

        `
        addNewDiv.appendChild(div);
    }


}


