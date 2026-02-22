const allCart = document.getElementById('all-cart');
const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');
const jobFilter = document.getElementById('job-fillter');
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectBtn = document.getElementById('rejected-btn');

let interviewList = [];
let rejectList = [];
let currentFilter = 'all'; // Track current filter

// Calculate and update stats
function calculate() {
    total.innerText = allCart.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectList.length;
}
calculate();

// Toggle filter button styles
function toggleStyle(id) {
    // Remove blue styles from all buttons
    allBtn.classList.remove('bg-blue-500', 'text-white');
    interviewBtn.classList.remove('bg-blue-500', 'text-white');
    rejectBtn.classList.remove('bg-blue-500', 'text-white');
    
    // Add gray styles to all buttons
    allBtn.classList.add('bg-gray-200', 'text-black');
    interviewBtn.classList.add('bg-gray-200', 'text-black');
    rejectBtn.classList.add('bg-gray-200', 'text-black');
    
    // Add blue style to selected button
    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-200', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');
    
    // Update current filter and render accordingly
    if (id === 'all-btn') {
        currentFilter = 'all';
        showAllJobs();
    } else if (id === 'interview-btn') {
        currentFilter = 'interview';
        renderInterview();
    } else if (id === 'rejected-btn') {
        currentFilter = 'rejected';
        renderReject();
    }
}

// Show all jobs
function showAllJobs() {
    jobFilter.classList.add('hidden');
    allCart.classList.remove('hidden');
}

// Handle main container clicks
document.getElementById('mainContainer')
.addEventListener('click', function(event) {
    // Handle Interview button click
    if (event.target.classList.contains('interview')) {
        const parentRoot = event.target.closest('.flex.flex-row');
        if (!parentRoot) return;
        
        const companyName = parentRoot.querySelector('.company-name').innerText;
        const companyPosition = parentRoot.querySelector('.empoloye-pos').innerText;
        const employeWork = parentRoot.querySelector('.empoloye-work').innerText;
        const notes = parentRoot.querySelector('.notes').innerText;
        
        // Update the apply button text
        const applyBtn = parentRoot.querySelector('.apply');
        applyBtn.innerText = 'Interview';
        applyBtn.classList.remove('bg-base-200');
        applyBtn.classList.add('bg-green-100', 'text-green-700');
        applyBtn.classList.remove('bg-red-500','text-white');
        
        const jobInfo = {
            companyName,
            companyPosition,
            employeWork,
            apply: 'Interview',
            notes,
            interview: 'Interview',
            rejected: 'Rejected'
        };
        
        // Add to interview list if not already there
        const interviewExists = interviewList.find(item => item.companyName === jobInfo.companyName);
        if (!interviewExists) {
            interviewList.push(jobInfo);
        }
        
        // Remove from reject list if present
        rejectList = rejectList.filter(item => item.companyName !== jobInfo.companyName);
        
        // Update stats
        calculate();
        
        // Re-render current filter view
        if (currentFilter === 'interview') {
            renderInterview();
        } else if (currentFilter === 'rejected') {
            renderReject();
        }
    }
    
    // Handle Rejected button click
    else if (event.target.classList.contains('rejected')) {
        const parentRoot = event.target.closest('.flex.flex-row');
        if (!parentRoot) return;
        
        const companyName = parentRoot.querySelector('.company-name').innerText;
        const companyPosition = parentRoot.querySelector('.empoloye-pos').innerText;
        const employeWork = parentRoot.querySelector('.empoloye-work').innerText;
        const notes = parentRoot.querySelector('.notes').innerText;
        
        // Update the apply button text
        const applyBtn = parentRoot.querySelector('.apply');
        applyBtn.innerText = 'Rejected';
        applyBtn.classList.remove('bg-base-200');
        applyBtn.classList.add('bg-red-500', 'text-white');
         applyBtn.classList.remove('bg-green-100', 'text-green-700');
        
        const jobInfo = {
            companyName,
            companyPosition,
            employeWork,
            apply: 'Rejected',
            notes,
            interview: 'Interview',
            rejected: 'Rejected'
        };
        
        // Add to reject list if not already there
        const rejectExists = rejectList.find(item => item.companyName === jobInfo.companyName);
        if (!rejectExists) {
            rejectList.push(jobInfo);
        }
        
        // Remove from interview list if present
        interviewList = interviewList.filter(item => item.companyName !== jobInfo.companyName);
        
        // Update stats
        calculate();
        
        // Re-render current filter view
        if (currentFilter === 'interview') {
            renderInterview();
        } else if (currentFilter === 'rejected') {
            renderReject();
        }
    }
    
    // Handle Delete button click
    else if (event.target.closest('.fa-trash-can')) {
        const parentRoot = event.target.closest('.flex.flex-row');
        if (!parentRoot) return;
        
        const companyName = parentRoot.querySelector('.company-name').innerText;
        
        // Remove from all lists
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectList = rejectList.filter(item => item.companyName !== companyName);
        
        // Remove from DOM
        parentRoot.remove();
        
        // Update stats
        calculate();
        
        // Re-render current filter view
        if (currentFilter === 'interview') {
            renderInterview();
        } else if (currentFilter === 'rejected') {
            renderReject();
        }
    }
});

// Render interview jobs
function renderInterview() {
    jobFilter.classList.remove('hidden');
    allCart.classList.add('hidden');
    jobFilter.innerHTML = '';
    
    if (interviewList.length === 0) {
        jobFilter.innerHTML = '<div id="" class="space-y-3 mb-[20px] flex flex-col justify-center items-center text-center border p-5 shadow rounded-md "><img class="" src="jobs.png" alt=""><p class="text-[#002C5C]  text-[22px] font-bold">No jobs available</p><p class="text-neutral/50">Check back soon for new job opportunities</p></div>';
        return;
    }
    
    for (let job of interviewList) {
        let div = document.createElement('div');
        div.classList.add('flex', 'flex-row', 'justify-between', 'border', 'p-5', 'shadow', 'rounded-md', 'mb-[40px]');
        div.innerHTML = `
            <div>
                <h1 class="company-name text-[20px] text-[#002C5C] font-bold">${job.companyName}</h1>
                <p class="empoloye-pos text-neutral/50 mt-2 mb-2 font-bold">${job.companyPosition}</p>
                <p class="empoloye-work text-neutral/50 font-bold">${job.employeWork}</p>
                <div class="mt-2 mb-2">
                    <button class="apply text-[#002C5C] p-2 rounded text-neutral/50 border font-bold bg-green-100 text-green-700">${job.apply}</button>
                </div>
                <p class="notes mt-3 mb-3 text-neutral/50">${job.notes}</p>
                <button class="interview btn btn-outline btn-success font-bold">Interview</button>
                <button class="rejected btn btn-outline btn-secondary font-bold">Rejected</button>
            </div>
            <div>
                <span class="border rounded-full p-1 bg-base-200 cursor-pointer"><i class="fa-regular fa-trash-can"></i></span>
            </div>
        `;
        jobFilter.appendChild(div);
    }
}

// Render rejected jobs
function renderReject() {
    jobFilter.classList.remove('hidden');
    allCart.classList.add('hidden');
    jobFilter.innerHTML = '';
    
    if (rejectList.length === 0) {
        jobFilter.innerHTML = '<div id="" class="space-y-3 mb-[20px] flex flex-col justify-center items-center text-center border p-5 shadow rounded-md "><img class="" src="jobs.png" alt=""><p class="text-[#002C5C]  text-[22px] font-bold">No jobs available</p><p class="text-neutral/50">Check back soon for new job opportunities</p></div>';
        return;
    }
    
    for (let job of rejectList) {
        let div = document.createElement('div');
        div.classList.add('flex', 'flex-row', 'justify-between', 'border', 'p-5', 'shadow', 'rounded-md', 'mb-[40px]');
        div.innerHTML = `
            <div>
                <h1 class="company-name text-[20px] text-[#002C5C] font-bold">${job.companyName}</h1>
                <p class="empoloye-pos text-neutral/50 mt-2 mb-2 font-bold">${job.companyPosition}</p>
                <p class="empoloye-work text-neutral/50 font-bold">${job.employeWork}</p>
                <div class="mt-2 mb-2">
                    <button class="apply text-[#002C5C] p-2 rounded text-neutral/50 border font-bold bg-red-100 text-red-700">${job.apply}</button>
                </div>
                <p class="notes mt-3 mb-3 text-neutral/50">${job.notes}</p>
                <button class="interview btn btn-outline btn-success font-bold">Interview</button>
                <button class="rejected btn btn-outline btn-secondary font-bold">Rejected</button>
            </div>
            <div>
                <span class="border rounded-full p-1 bg-base-200 cursor-pointer"><i class="fa-regular fa-trash-can"></i></span>
            </div>
        `;
        jobFilter.appendChild(div);
    }
}
//for available jobs count;
const availableJob=document.getElementById('available-job');
document.getElementById('interview-btn')
.addEventListener('click',function(){
    availableJob.innerText=`${interviewList.length} of ${allCart.children.length} jobs`;
})
document.getElementById('rejected-btn')
.addEventListener('click',function(){
    availableJob.innerText=`${rejectList.length} of ${allCart.children.length} jobs`;
})
document.getElementById('all-btn')
.addEventListener('click',function(){
    availableJob.innerText=`${allCart.children.length} jobs`;
})





