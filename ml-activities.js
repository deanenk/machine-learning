// ml-activities.js - Machine Learning Activities
const activities = {
  1: {
    title: "unit 1: Introduction to Machine Learning",
    content: `I explored the transformative impact of Industry 4.0 and 5.0 on South Africa's defence sector...` 
    // Keep original content
  },
  // Keep all other activities (2-12) with original content
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

function showActivity(id) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDescEdit = document.getElementById('modalDescEdit');
  const editControls = document.getElementById('editControls');
  
  if(activities[id]) {
    modalTitle.textContent = activities[id].title;
    modalDesc.innerHTML = activities[id].content.replace(/\n/g, '<br>');
    
    const urlParams = new URLSearchParams(window.location.search);
    const isAuthor = urlParams.has('edit') && urlParams.get('edit') === 'EssexML2025';
    
    if(isAuthor) {
      modalDescEdit.value = activities[id].content;
      editControls.style.display = 'block';
    } else {
      editControls.style.display = 'none';
    }
    
    modal.style.display = 'block';
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function saveDesc() {
  const id = document.getElementById('modalTitle').textContent.split(' ')[1].replace(':', '');
  const newContent = document.getElementById('modalDescEdit').value;
  
  if(newContent.split(' ').length > 300) {
    alert('Content exceeds 300 word limit!');
    return;
  }
  
  if(activities[id]) {
    activities[id].content = newContent;
    document.getElementById('modalDesc').textContent = newContent;
    
    // Update short description
    const shortDesc = document.getElementById(`short${id}`);
    if(shortDesc) {
      const words = newContent.split(' ').slice(0, 12).join(' ');
      shortDesc.textContent = words + (newContent.split(' ').length > 12 ? '...' : '');
    }
    
    alert('Description updated successfully!');
  }
  
  closeModal();
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if(event.target == modal) {
    closeModal();
  }
};
