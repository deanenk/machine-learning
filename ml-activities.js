// Sample content for the portfolio activities
const activities = {
  1: {
    title: "unit 1: Introduction to Machine Learning",
    content: `I explored the transformative impact of Industry 4.0 and 5.0 on South Africa’s defence sector. Industry 4.0, characterised by technologies such as AI, IoT, and big data analytics, is revolutionising defence logistics and manufacturing by enabling predictive maintenance and real-time decision-making (Metcalf, 2024). Industry 5.0 emphasizes human-machine collaboration, integrating robotics while maintaining critical human oversight, which raises important ethical considerations (Metcalf, 2024).The unit highlighted cybersecurity threats associated with these advancements, exemplified by the 2021 Transnet cyberattack, which disrupted port operations and underscored vulnerabilities in critical infrastructure (ISS Africa, 2021). Recognising these risks emphasises the need for robust cyber resilience strategies in defence, combining technological innovation with strong security measures, to support national security and economic stability.
     
      References
              ISS Africa (2021) Cyber attacks expose the vulnerability of South Africa’s ports. Available at: https://issafrica.org/iss-today/cyber-attacks-expose-the-vulnerability-of-south-africas-ports (Accessed: 10 June 2024).
              Metcalf, J. (2024) ‘Industry 5.0 and the future of defence manufacturing’, Defence Technology Review, 12(3), pp. 45–60.`
 },
  2: {
    title: "unit 2: Data Preprocessing",
    content: `The unit focused on the foundational concepts of data science and machine learning (ML). The focus was on understanding the importance of data pre-processing, feature selection, and the difference between supervised and unsupervised learning. I learned that quality data and proper preprocessing are crucial for building effective ML models, which directly impacts their accuracy and reliability (Hastie, Tibshirani & Friedman, 2009). The distinction between classification, regression, clustering, and dimensionality reduction provided me with a clearer view of the versatile applications of ML in real-world scenarios, including healthcare and finance. This foundational knowledge is vital for progressing into more advanced ML topics and developing effective predictive models in my future studies and projects.
       
       References
             Hastie, T., Tibshirani, R., & Friedman, J. (2009) The Elements of Statistical Learning. Springer.`
  },
  3: {
    title: "unit 3: Regression Models",
    content: `In this unit, I examined various machine learning algorithms, including decision trees, k-nearest neighbors (k-NN), and support vector machines (SVM). I learned that choosing the right algorithm depends on the specific problem, data type, and desired outcome. For example, decision trees provide interpretability, making them suitable for understanding feature importance, whereas SVMs excel with high-dimensional data and complex boundaries (Cortes & Vapnik, 1995). I also explored how these algorithms can be applied in real-world contexts like medical diagnosis, fraud detection, and customer segmentation. Understanding their strengths and limitations will assist me in selecting appropriate models for future projects. The practical insight gained emphasises the importance of algorithm understanding in developing effective machine learning solutions.
     
      References
      Cortes, C., & Vapnik, V. (1995) ‘Support-Vector Networks’, Machine Learning, 20(3), pp. 273–297.`
  },
  4: {
    title: "unit 4: Classification Models",
    content: `I explored methods to evaluate machine learning models to ensure their effectiveness. I learned that metrics such as accuracy, precision, recall, F1 score, and ROC-AUC are essential for assessing models, especially in classification tasks. I understood that choosing the appropriate metric depends on the problem context,for example, precision and recall are critical when false positives or negatives carry significant implications, such as in medical diagnosis. The concept of cross-validation was also emphasised, highlighting its role in preventing overfitting and providing a more reliable estimate of model performance (Hastie, Tibshirani & Friedman, 2009). Through practical exercises, I realised that model evaluation is a vital step before deploying any machine learning solution, as it directly influences the trustworthiness of predictions and subsequently, decision making.
     
     References
            Hastie, T., Tibshirani, R., & Friedman, J. (2009) The Elements of Statistical Learning. Springer.`
  },
  5: {
    title: "unit 5: Clustering Techniques",
    content: `Studying this unit improved my understanding of how clustering algorithms, particularly k-means, are used to identify patterns within data, as illustrated by Harris (2021). Visualising the clustering process helped clarify how data points are grouped based on similarity, making complex data more interpretable. I felt intrigued by the potential of these techniques in decision-making, especially in applications like customer segmentation or anomaly detection. However, I also recognised the importance of choosing the right number of clusters and preprocessing data correctly, as poor choices can lead to misleading results. This experience emphasised that visualisation enhances understanding, but must be combined with proper algorithm selection and validation to derive meaningful insights.

References:
Harris, N. (2021). Visualizing K-means clustering. Naftali Harris Blog. Available at: https://www.naftaliharris.com/blog/visualizing-k-means-clustering/ (Accessed: 1 June 2025).`
  },
  6: {
    title: "unit 6: Neural Network Fundamentals",
    content: `This unit highlighted the critical role of data visualisation in transforming raw data into actionable insights.I learned that effective visualisation techniques, like scatter plots and histograms, are essential for exploring data, identifying patterns, and communicating findings clearly (Kirk, 2012).I felt empowered by the ability to use tools like Micorosft's PowerBI to create insightful dashboards, enabling better-informed decision-making.However, I realised the ethical implications of data presentation and the importance of avoiding misleading or biased visualisations (Cairo, 2016).This emphasised the need for a rigorous and responsible approach to data storytelling. Moving forward, I aim to refine my data visualisation skills,focusing on creating ethical and impactful visualisations for effective communication.

References:
Cairo, A. (2016). The truthful art: Data, charts, and maps for communication. New Riders.
Kirk, A. (2012). Data visualization: a successful design process. Packt Publishing Ltd.`
  },
  7: {
    title: "unit 7: Convolutional Neural Networks",
    content: `In this unit, I explored the fundamentals of neural networks, including their structure, activation functions, and learning processes.Understanding how neurons connect and adjust weights to learn patterns was insightful (Goodfellow et al., 2016). I felt challenged by the complexity of backpropagation but also intrigued by the potential for neural networks to solve complex problems like image recognition and natural language processing. Learning about overfitting and regularisation emphasised the importance of careful model training and validation (Srivastava et al., 2014). This unit highlighted the power of neural networks, but also the need for rigorous design and evaluation.I plan to delve deeper into specific neural network architectures and applications to strengthen my understanding.

References:
Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT press.
Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., & Salakhutdinov, R. (2014). Dropout: A simple way to prevent neural networks from overfitting. Journal of Machine Learning Research, 15(56), 1929-1958.`
  },
  8: {
    title: "unit 8: Sequence Modeling",
    content: `This unit explored the benefits and risks of AI writing tools, including efficiency gains in administrative tasks but potential deskilling and bias introduction (Dellermann et al., 2019; Ferrara, 2023). I felt cautious about the loss of authenticity reported by authors using AI assistance (Epstein et al., 2023) and recognised the importance of addressing issues like factual inaccuracies and copyright violations (Ji et al., 2023; Sarikaya, 2022). Emphasising application-specific safeguards and human-AI feedback loops is crucial to balancing productivity with ethical integrity, and preserving human agency (Weidinger et al., 2022; Dumbuya, 2025). Moving forward,I aim to embrace AI governance frameworks that prioritise fairness, transparency, and accountability in AI applications.

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
    title: "unit 9: Natural Language Processing",
    content: `This unit involved analysing the ethical implications of CNN-based facial recognition technology, as highlighted in the BBC report (Wall, 2019). Experimenting with the object recognition model revealed potential biases based on image variations. I felt uneasy about the potential for unlawful use by police forces, as the technology’s accuracy and transparency remain questionable. This experience raised concerns about privacy, surveillance, and potential discrimination. Understanding these ethical and legal dimensions underscores the need for robust regulatory frameworks and stringent oversight. Moving forward, I will support the application of transparent and accountable AI in law enforcement to safeguard individual rights.

Reference:
Wall, M. (2019). Facial recognition: Are police forces using it unlawfully? BBC News. Retrieved from https://www.bbc.com/news/business-48842750`
  },
  10: {
    title: "unit 10: Reinforcement Learning",
    content: `Exploring deep learning from Bishop & Bishop (2024) alongside the ethical concerns raised in the BBC's report on facial recognition (Wall, 2019) was insightful. While deep learning provides powerful tools for pattern recognition, the potential for misuse, bias, and lack of transparency in facial recognition systems raises serious concerns. I felt challenged to reconcile the benefits of advanced technology with the need to protect individual rights and privacy. This emphasised the importance of understanding both the technical foundations and the ethical implications. Moving forward, I plan to advocate for responsible AI development, emphasising transparency, accountability, and fairness in deep learning applications.

References:
Bishop, C., & Bishop, H. (2024). Deep Learning: Foundations and Concepts (Chapters 5 & 10). Cambridge University Press, Cambridge.
Wall, M. (2019). Facial recognition: Are police forces using it unlawfully? BBC News. Retrieved from https://www.bbc.com/news/business-48842750`
  },
  11: {
    title: "unit 11: Model Evaluation & Validation",
    content: `This unit delved into evaluating machine learning models, combining insights from Jordan's article (n.d.) with deep learning concepts from Bishop & Bishop (2024). I learned that robust evaluation goes beyond simple accuracy, necessitating a comprehensive understanding of metrics like precision, recall, and F1-score to avoid biased interpretations. I felt challenged to consider the trade-offs between different evaluation metrics in specific contexts and the limitations of current evaluation techniques. This unit emphasised that model evaluation is crucial for deploying reliable and trustworthy systems, requiring careful selection of metrics and validation strategies. Moving forward, I aim to refine my evaluation skills and advocate for rigorous testing in machine learning deployments.

References:
Bishop, C., & Bishop, H. (2024). Deep Learning: Foundations and Concepts (Chapter 18). Cambridge University Press, Cambridge.
Jordan, J. (n.d.). Evaluating a machine learning model. Retrieved from https://www.jeremyjordan.me/evaluating-a-machine-learning-model/`
  },
  12: {
    title: "unit 12: AI Ethics & Future Directions",
    content: `This unit explored the dual-edged nature of deep learning through deepfakes (Vincent, 2018), synthetic faces (ThisPersonDoesNotExist.com), and image generation (DALL-E), highlighting their potential for both creativity and harm (Bishop & Bishop, 2024). I felt uneasy recognising their capacity for disinformation (CDEI, 2024) and manipulation, as well as AI's role in generating new media (Jaiswal et al., 2024). This underscored the need for ethical frameworks. It's essential to balance innovation with responsible safeguards. Moving forward, I aim to develop AI literacy, embrface ethical guidelines, and promote critical consumption of digital media.

References:
Bishop, C., & Bishop, H. (2024). Deep Learning: Foundations and Concepts (Chapter 20). Cambridge University Press, Cambridge.
CDEI. (2024). Snapshot paper: Deepfakes and audiovisual disinformation. Gov.uk. Retrieved from https://www.gov.uk/government/publications/cdei-publishes-its-first-series-of-three-snapshot-papers-ethical-issues-in-ai/snapshot-paper-deepfakes-and-audiovisual-disinformation
Jaiswal, K., Gupta, P., Jain, V., & Kumar, A. (2024). Deepfake detection methods: A comprehensive review. In Advances in Smart Systems and Computing. Springer, Singapore.
OpenAI. (n.d.). DALL-E. Retrieved from https://openai.com/index/dall-e/
This Person Does Not Exist. (n.d.). Retrieved from https://this-person-does-not-exist.com/en
Vincent, J. (2018). Deepfakes: The dark origins of fake videos and their potential to wreak havoc. Discover Magazine. Retrieved from https://www.discovermagazine.com/technology/deepfakes-the-dark-origins-of-fake-videos-and-their-potential-to-wreak-havoc`
  }
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
