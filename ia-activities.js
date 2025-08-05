// ia-activities.js - Intelligent Agents Activities
const activities = {
  1: {
    title: "e-Portfolio 1: Agent Fundamentals",
    content: `This portfolio introduces the fundamental concepts of intelligent agents...`
    // Add your IA content here
  },
  2: {
    title: "e-Portfolio 2: Agent Architectures",
    content: `This entry examines different architectures for building intelligent agents...`
  },
  // Add activities 3-12 with your IA content
};

// Initialize tile content
document.addEventListener('DOMContentLoaded', () => {
  for(let i = 1; i <= 12; i++) {
    const shortDesc = document.getElementById(`short${i}`);
    if(shortDesc && activities[i]) {
      const words = activities[i].content.split(' ').slice(0, 12).join(' ');
      shortDesc.textContent = words + (activities[i].content.split(' ').length > 12 ? '...' : '');
    }
  }
  
  // Add Author Mode indicator if enabled
  const urlParams = new URLSearchParams(window.location.search);
  const isAuthor = urlParams.has('edit') && urlParams.get('edit') === 'EssexML2025';
  
  if(isAuthor) {
    const authorIndicator = document.createElement('span');
    authorIndicator.style.cssText = 'color:#ffd180; margin-left:15px;';
    authorIndicator.textContent = '🔓 Author Mode';
    document.querySelector('nav').appendChild(authorIndicator);
  }
});

// Reuse the same showActivity, closeModal, saveDesc functions from ml-activities.js
// ... (Copy the functions from ml-activities.js)
