// Store progress bar in var
const progressBar = document.querySelector('.progress-bar');

// Create function to set the progress of
// progress bar
const setProgress = () => {
    const scrollHeight = document.body.scrollHeight;
    const viewPortHeight = window.innerHeight;
    const maxScrollHeight = scrollHeight - viewPortHeight;
    
    const percentage = (window.scrollY / maxScrollHeight) * 100;
    progressBar.style.width = `${percentage}%`;
    
};

// Call function on page scroll
window.addEventListener("scroll", () => {
    setProgress();
})

// resolve resize break
