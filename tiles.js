// Sample content for the portfolio activities
const activities = {
  1: {
    title: "e-Portfolio 1: Introduction to Machine Learning",
    content: `I explored the transformative impact of Industry 4.0 and 5.0 on South Africa’s defence sector. Industry 4.0, characterized by technologies such as AI, IoT, and big data analytics, is revolutionizing defence logistics and manufacturing by enabling predictive maintenance and real-time decision-making (Metcalf, 2024). Industry 5.0 emphasizes human-machine collaboration, integrating robotics while maintaining critical human oversight, which raises important ethical considerations (Metcalf, 2024).The unit highlighted cybersecurity threats associated with these advancements, exemplified by the 2021 Transnet cyberattack, which disrupted port operations and underscored vulnerabilities in critical infrastructure (ISS Africa, 2021). Recognizing these risks emphasizes the need for robust cyber resilience strategies in defence, combining technological innovation with strong security measures, to support national security and economic stability.
      References
              ISS Africa (2021) Cyber attacks expose the vulnerability of South Africa’s ports. Available at: https://issafrica.org/iss-today/cyber-attacks-expose-the-vulnerability-of-south-africas-ports (Accessed: 10 June 2024).
              Metcalf, J. (2024) ‘Industry 5.0 and the future of defence manufacturing’, Defence Technology Review, 12(3), pp. 45–60.`
 },
  2: {
    title: "e-Portfolio 2: Data Preprocessing",
    content: `The unit focused on the foundational concepts of data science and machine learning (ML). The focus was on understanding the importance of data pre-processing, feature selection, and the difference between supervised and unsupervised learning. I learned that quality data and proper preprocessing are crucial for building effective ML models, which directly impacts their accuracy and reliability (Hastie, Tibshirani & Friedman, 2009). The distinction between classification, regression, clustering, and dimensionality reduction provided me with a clearer view of the versatile applications of ML in real-world scenarios, including healthcare and finance. This foundational knowledge is vital for progressing into more advanced ML topics and developing effective predictive models in my future studies and projects.
      References
             Hastie, T., Tibshirani, R., & Friedman, J. (2009) The Elements of Statistical Learning. Springer.`
  },
  3: {
    title: "e-Portfolio 3: Regression Models",
    content: `In this unit, I examined various machine learning algorithms, including decision trees, k-nearest neighbors (k-NN), and support vector machines (SVM). I learned that choosing the right algorithm depends on the specific problem, data type, and desired outcome. For example, decision trees provide interpretability, making them suitable for understanding feature importance, whereas SVMs excel with high-dimensional data and complex boundaries (Cortes & Vapnik, 1995). I also explored how these algorithms can be applied in real-world contexts like medical diagnosis, fraud detection, and customer segmentation. Understanding their strengths and limitations will assist me in selecting appropriate models for future projects. The practical insight gained emphasizes the importance of algorithm understanding in developing effective machine learning solutions.
      References
      Cortes, C., & Vapnik, V. (1995) ‘Support-Vector Networks’, Machine Learning, 20(3), pp. 273–297.`
  },
  4: {
    title: "e-Portfolio 4: Classification Models",
    content: `I explored methods to evaluate machine learning models to ensure their effectiveness. I learned that metrics such as accuracy, precision, recall, F1 score, and ROC-AUC are essential for assessing models, especially in classification tasks. I understood that choosing the appropriate metric depends on the problem context—for example, precision and recall are critical when false positives or negatives carry significant implications, such as in medical diagnosis. The concept of cross-validation was also emphasized, highlighting its role in preventing overfitting and providing a more reliable estimate of model performance (Hastie, Tibshirani & Friedman, 2009). Through practical exercises, I realized that model evaluation is a vital step before deploying any machine learning solution, as it directly influences the trustworthiness of predictions and subsequent decision-making.
     References
            Hastie, T., Tibshirani, R., & Friedman, J. (2009) The Elements of Statistical Learning. Springer.`
  },
  5: {
    title: "e-Portfolio 5: Clustering Techniques",
    content: `Studying this unit improved my understanding of how clustering algorithms, particularly k-means, are used to identify patterns within data, as illustrated by Harris (2021). Visualizing the clustering process helped clarify how data points are grouped based on similarity, making complex data more interpretable. I felt intrigued by the potential of these techniques in decision-making, especially in applications like customer segmentation or anomaly detection. However, I also recognized the importance of choosing the right number of clusters and preprocessing data correctly, as poor choices can lead to misleading results. This experience emphasized that visualization enhances understanding but must be combined with proper algorithm selection and validation to derive meaningful insights.
References:
Harris, N. (2021). Visualizing K-means clustering. Naftali Harris Blog. Available at: https://www.naftaliharris.com/blog/visualizing-k-means-clustering/ (Accessed: 1 June 2025).`
  },
  6: {
    title: "e-Portfolio 6: Neural Network Fundamentals",
    content: `This unit highlighted the critical role of data visualisation in transforming raw data into actionable insights.I learned that effective visualisation techniques, like scatter plots and histograms, are essential for exploring data, identifying patterns, and communicating findings clearly (Kirk, 2012).I felt empowered by the ability to use tools like Micorosft's PowerBI to create insightful dashboards, enabling better-informed decision-making.However, I realised the ethical implications of data presentation and the importance of avoiding misleading or biased visualisations (Cairo, 2016).This emphasised the need for a rigorous and responsible approach to data storytelling. Moving forward, I aim to refine my data visualisation skills,focusing on creating ethical and impactful visualisations for effective communication.

References:
Cairo, A. (2016). The truthful art: Data, charts, and maps for communication. New Riders.
Kirk, A. (2012). Data visualization: a successful design process. Packt Publishing Ltd.`
  },
  7: {
    title: "e-Portfolio 7: Convolutional Neural Networks",
    content: `In this unit, I explored the fundamentals of neural networks, including their structure, activation functions, and learning processes.Understanding how neurons connect and adjust weights to learn patterns was insightful (Goodfellow et al., 2016). I felt challenged by the complexity of backpropagation but also intrigued by the potential for neural networks to solve complex problems like image recognition and natural language processing. Learning about overfitting and regularization emphasized the importance of careful model training and validation (Srivastava et al., 2014). This unit highlighted the power of neural networks but also the need for rigorous design and evaluation.I plan to delve deeper into specific neural network architectures and applications to strengthen my understanding.

References:
Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT press.
Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. (2014). Dropout: A simple way to prevent neural networks from overfitting. Journal of Machine Learning Research, 15(56), 1929-1958.`
  },
  8: {
    title: "e-Portfolio 8: Sequence Modeling",
    content: `This unit explored the benefits and risks of AI writing tools, including efficiency gains in administrative tasks but potential deskilling and bias introduction (Dellermann et al., 2019; Ferrara, 2023). I felt cautious about the loss of authenticity reported by authors using AI assistance (Epstein et al., 2023) and recognized the importance of addressing issues like factual inaccuracies and copyright violations (Ji et al., 2023; Sarikaya, 2022). Emphasizing application-specific safeguards and human-AI feedback loops is crucial to balancing productivity with ethical integrity and preserving human agency (Weidinger et al., 2022; Dumbuya, 2025). Moving forward,I aim to advocate for AI governance frameworks that prioritize fairness, transparency, and accountability in AI applications.

References:

Dellermann, D. et al. (2019) ‘Hybrid intelligence', Business & Information Systems Engineering, 61(5), pp. 637-643.
Dumbuya, E. (2025) Artificial Intelligence and Education: Preserving Human Agency in the World of Automation. [Online].
Epstein, Z. et al. (2023) ‘Art and the science of generative Al’, Science, 379(6630), pp. 1110-1112.
Ferrara, E. (2023) ‘Fairness and bias in artificial intelligence', Nature Reviews Materials, 6(1), pp. 1–14.
Ji, Z. et al. (2023) ‘Survey of hallucination in natural language generation', ACM Computing Surveys, 55(12), pp. 1–38.
Sarikaya, R. (2022) ‘The copyright implications of generative Al', Harvard Journal of Law & Technology, 36(1), pp. 217–245.
Weidinger, L. et al. (2022) ‘Ethical and social risks of harm from language models', arXiv preprint, arXiv:2112.04359.`
  },
  9: {
    title: "e-Portfolio 9: Natural Language Processing",
    content: `This unit involved analyzing the ethical implications of CNN-based facial recognition technology, as highlighted in the BBC report (Wall, 2019). Experimenting with the object recognition model revealed potential biases based on image variations. I felt uneasy about the potential for unlawful use by police forces, as the technology’s accuracy and transparency remain questionable. This experience raised concerns about privacy, surveillance, and potential discrimination. Understanding these ethical and legal dimensions underscores the need for robust regulatory frameworks and stringent oversight. Moving forward, I aim to advocate for transparent and accountable use of AI in law enforcement to safeguard individual rights.

Reference:

Wall, M. (2019). Facial recognition: Are police forces using it unlawfully? BBC News. Retrieved from https://www.bbc.com/news/business-48842750`
  },
  10: {
    title: "e-Portfolio 10: Reinforcement Learning",
    content: "This unit explored Markov decision processes, Q-learning, policy gradients, and deep Q-networks. We implemented agents for environments like CartPole and MountainCar. The tradeoffs between exploration and exploitation were examined through multi-armed bandit problems. The final project involved training an agent to play a simplified version of Atari's Pong, demonstrating practical RL implementation."
  },
  11: {
    title: "e-Portfolio 11: Model Evaluation & Validation",
    content: "Comprehensive coverage of evaluation methodologies included cross-validation strategies, hyperparameter tuning, and statistical tests for model comparison. We learned to diagnose underfitting/overfitting and address them through regularization and ensemble methods. The importance of considering business metrics alongside statistical metrics was emphasized through case studies."
  },
  12: {
    title: "e-Portfolio 12: AI Ethics & Future Directions",
    content: "This capstone unit examined ethical considerations in AI deployment, including bias mitigation, fairness metrics, and explainability techniques. We discussed societal impacts and regulatory frameworks. The final project involved auditing an ML model for fairness across demographic groups. Looking forward, we explored emerging areas like federated learning, AI safety, and the future of human-AI collaboration."
  }
};

// Initialize tile content
document.addEventListener('DOMContentLoaded', () => {
  for(let i = 1; i <= 12; i++) {
    const shortDesc = document.getElementById(`short${i}`);
    if(shortDesc) {
      // Get first 10 words
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
  
  // Check if in author mode
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
  
  activities[id].content = newContent;
  document.getElementById('modalDesc').textContent = newContent;
  
  // Update short description
  const shortDesc = document.getElementById(`short${id}`);
  const words = newContent.split(' ').slice(0, 10).join(' ');
  shortDesc.textContent = words + (newContent.split(' ').length > 10 ? '...' : '');
  
  closeModal();
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if(event.target == modal) {
    closeModal();
  }
};
