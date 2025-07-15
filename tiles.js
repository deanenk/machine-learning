// Sample content for the portfolio activities
const activities = {
  1: {
    title: "e-Portfolio 1: Introduction to Machine Learning",
    content: "Focusing on data preparation techniques, this unit covered essential steps in the ML pipeline. We learned about handling missing data, outlier detection, feature scaling, and encoding categorical variables. Feature engineering strategies and dimensionality reduction methods like PCA were particularly valuable. Hands-on labs with Pandas and Scikit-learn helped solidify these concepts. I now appreciate how data quality directly impacts model performance."
  },
  2: {
    title: "e-Portfolio 2: Data Preprocessing",
    content: "Focusing on data preparation techniques, this unit covered essential steps in the ML pipeline. We learned about handling missing data, outlier detection, feature scaling, and encoding categorical variables. Feature engineering strategies and dimensionality reduction methods like PCA were particularly valuable. Hands-on labs with Pandas and Scikit-learn helped solidify these concepts. I now appreciate how data quality directly impacts model performance."
  },
  3: {
    title: "e-Portfolio 3: Regression Models",
    content: "This deep dive into regression techniques covered linear regression, polynomial regression, and regularization methods (Ridge, Lasso). We explored model evaluation metrics like MSE, RMSE, and R-squared. Practical implementation in Python helped me understand hyperparameter tuning and the importance of feature selection. The case study on housing price prediction demonstrated real-world application of these techniques."
  },
  4: {
    title: "e-Portfolio 4: Classification Models",
    content: "Classification algorithms including logistic regression, SVM, decision trees, and ensemble methods were the focus. We learned about evaluation metrics like precision, recall, F1-score, and ROC curves. The unit highlighted the tradeoffs between different algorithms and when to use each. The project on credit risk assessment helped me understand how to handle imbalanced datasets and business constraints in model selection."
  },
  5: {
    title: "e-Portfolio 5: Clustering Techniques",
    content: "Unsupervised learning through clustering algorithms was explored in depth. We implemented K-means, hierarchical clustering, and DBSCAN, learning their strengths and weaknesses. The unit covered cluster evaluation metrics and practical applications in customer segmentation. I gained insights into how clustering can reveal hidden patterns in unlabeled data, which I applied in my market basket analysis project."
  },
  6: {
    title: "e-Portfolio 6: Neural Network Fundamentals",
    content: "This unit introduced neural networks from first principles. We built perceptrons from scratch, then progressed to multi-layer networks and backpropagation. Activation functions, loss functions, and optimization algorithms were covered in detail. Implementing a neural network without frameworks gave me a deeper understanding of how they work internally, which will be invaluable for debugging complex models."
  },
  7: {
    title: "e-Portfolio 7: Convolutional Neural Networks",
    content: "Focusing on computer vision, we studied CNNs and their components - convolutions, pooling, and fully connected layers. Architectures like LeNet, AlexNet, and ResNet were analyzed. Transfer learning and data augmentation techniques were particularly valuable. My final project involved building an image classifier that achieved 92% accuracy on CIFAR-10, demonstrating practical mastery of these concepts."
  },
  8: {
    title: "e-Portfolio 8: Sequence Modeling",
    content: "RNNs, LSTMs, and GRUs were covered for sequence data processing. We applied these to time series forecasting and text generation tasks. Attention mechanisms and their evolution into transformers were introduced. The unit culminated in a sentiment analysis project using IMDb reviews, where I learned to handle variable-length sequences and manage vanishing gradient problems."
  },
  9: {
    title: "e-Portfolio 9: Natural Language Processing",
    content: "NLP techniques from tokenization to transformer models were covered. We implemented word embeddings (Word2Vec, GloVe), then progressed to state-of-the-art models like BERT. Named entity recognition, sentiment analysis, and text summarization projects provided hands-on experience. I gained appreciation for the challenges in language understanding and the power of transfer learning in NLP."
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
