// Sample content for the portfolio activities
const activities = {
  1: {
    title: "e-Portfolio 1: Introduction to Machine Learning",
    content: `Unit 1 Reflection: Applying Gibbs’ Cycle

Description: I analysed Industry 4.0/5.0 impacts (AI, IoT, big data) on SA's defence sector, including cybersecurity risks like the Transnet attack (Metcalf, 2024; ISS Africa, 2021).
Feelings: Initially optimistic about efficiency gains, I grew concerned about cyber vulnerability.
Evaluation: Positives: enhanced operational capabilities (Metcalf, 2024). Negatives: critical infrastructure risks emphasised by peers (Alzaabi, 2025; Korimbocus, 2025).
Analysis: The Transnet breach (ISS Africa, 2021) confirmed human oversight (Industry 5.0) and infrastructure protection (Addis & Resch, 2022) are essential. Peers identified policy-budget gaps (Alzaabi, 2025).
Conclusion: Cybersecurity is fundamental to defence modernisation.
Action Plan: Advocate for integrated cyber-resilient frameworks (e.g., edge computing: Fraga-Lamas, Barros and Fernández-Caramés, 2022) and policy-driven budget allocations.

References
Addis, S. and Resch, M. (2022) ‘Cyber-attack implications for maritime critical infrastructure: A review’, Maritime Security Journal, 12(4), pp. 290–308.
Alzaabi, J. (2025) Online Forum Post, 19 May.
Fraga-Lamas, P., Barros, D. and Fernández-Caramés, T.M. (2022) ‘Mist and Edge Computing Cyber-Physical Human-Centered Systems for Industry 5.0’.
ISS Africa (2021) Cyber attacks expose the vulnerability of South Africa’s ports. Available at: https://issafrica.org/iss-today/cyber-attacks-expose-the-vulnerability-of-south-africas-ports (Accessed: 10 June 2024).
Korimbocus, H. (2025) Online Forum Post, 19 June.
Metcalf, J. (2024) ‘Industry 5.0 and the future of defence manufacturing’, Defence Technology Review, 12(3), pp. 45–60.`
  },
  2: {
    title: "e-Portfolio 2: Data Preprocessing",
    content: "Focusing on data preparation techniques, this unit covered essential steps in the ML pipeline. We learned about handling missing data, outlier detection, feature scaling, and encoding categorical variables. Feature engineering strategies and dimensionality reduction methods like PCA were particularly valuable. Hands-on labs with Pandas and Scikit-learn helped solidify these concepts. I now appreciate how data quality directly impacts model performance."
  },
  // ... (other portfolio entries remain unchanged)
  12: {
    title: "e-Portfolio 12: AI Ethics & Future Directions",
    content: "This capstone unit examined ethical considerations in AI deployment, including bias mitigation, fairness metrics, and explainability techniques. We discussed societal impacts and regulatory frameworks. The final project involved auditing an ML model for fairness across demographic groups. Looking forward, we explored emerging areas like federated learning, AI safety, and the future of human-AI collaboration."
  }
};

// Rest of the JavaScript code remains unchanged
document.addEventListener('DOMContentLoaded', () => {
  for(let i = 1; i <= 12; i++) {
    const shortDesc = document.getElementById(`short${i}`);
    if(shortDesc) {
      const words = activities[i].content.split(' ').slice(0, 10).join(' ');
      shortDesc.textContent = words + (activities[i].content.split(' ').length > 10 ? '...' : '');
    }
  }
});

function showActivity(id) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalDescEdit = document.getElementById('modalDescEdit');
  const editControls = document.getElementById('editControls');
  
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

// ... (rest of the functions remain unchanged)
