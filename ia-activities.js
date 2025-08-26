// ia-activities.js - Intelligent Agents Activities
const activities = {
  1: {
    title: "Critical Engagement with Agent-Based Systems",
    content: `Description
This task involved critically analysing agent-based systems (ABS) by synthesising academic literature and peer discussions. The focus was on differentiating architectures, evaluating applications in uncertain environments, and considering implementation issues within a virtual team.

Feelings
Initially, I was confident about ABS's theoretical capacity to model emergent phenomena (Bonabeau, 2009). However, encountering literature on computational limitations and validation challenges (Davis et al., 2007; Heath, Hill and Ciarallo, 2009) introduced necessary complexity. Virtual collaboration provoked both anxiety and excitement about achieving consensus through diverse perspectives.

Evaluation
The experience enabled effective differentiation between pure ABS and hybrid architectures that address scalability (Davis et al., 2007). Applying these concepts to real-world problems like supply chain resilience highlighted how architectural choices manage technical risk. The difficulty of agent calibration revealed the gap between theoretical models and reliable implementation (Heath, Hill and Ciarallo, 2009).

Analysis
I gained crucial insights into how decentralised architectures enhance—but don't guarantee—resilience, due to persistent networked risks (Davis et al., 2007). Evaluating tools required considering legal and ethical issues alongside functionality. Team collaboration in a virtual environment developed professional skills, mirroring real-world development practices and reinforcing the need for methodological rigour.

Conclusion
I learned that critical ABS understanding requires confronting implementation challenges, where architectural choice and validation are pivotal. Effective development is socio-technical, demanding teamwork and ethical consideration.

Action Plan
I will: 1) Use NetLogo to build a model, focusing on calibration; 2) Research hybrid modelling case studies; 3) Develop an ethical checklist for ABS projects; 4) Seek further virtual team opportunities to develop leadership skills.
References

Bonabeau, E. (2009) 'Decisions 2.0: The Power of Collective Intelligence', MIT Sloan Management Review, 50(2), pp. 45-52.

Davis, P.K., et al. (2007) 'Equilibration of agent-based models: Pitfalls and solutions', Operations Research, 55(5), pp. 849-865. DOI: 10.1287/opre.1070.0438.

Heath, B., Hill, R. and Ciarallo, F. (2009) 'A survey of agent-based modeling practices', Journal of Systems Science, 40(10), pp. 983-998. DOI: 10.1080/00207720903353653.`
   
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
