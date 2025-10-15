// ia-activities.js - Intelligent Agents Activities
const activities = {
  1: {
    title: "Critical Engagement with Agent-Based Systems",
    content: `
Description
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
    title: "Reflecting on Agent-Based System Design and AI Ethics",
    content: `
Description
Our team (Group G) designed the architecture for an academic paper scraper using a multi-agent system. This design phase applied agent communication principles (Unit 5) and coordination frameworks (Unit 6), while parallel studies covered AI ethics and NLP (Unit 7).
<img src="images/agentsDesign.png" alt="Agent Communication Flow" width="400" height="400">

Feelings
I was confident when designing the agent architecture, however, during this planning stage, I became concerned about the ethical implications of such systems, particularly on how agent coordination could be repurposed for harmful activities.

Evaluation
The positive outcome was creating a coherent design integrating agent protocols. The main challenge emerged from recognising that the very architectures enabling efficient coordination could also potentially facilitate disinformation campaigns.

Analysis
Research confirms that AI systems can significantly amplify misinformation propagation (Bovet & Makse, 2019). Furthermore, studies indicate that advanced AI capabilities create substantial dual-use concerns (Bommasani et al., 2021). This reveals an inherent duality in AI system design.

Conclusion
I should have more critically evaluated potential misuse cases during this initial design phase. Ethical considerations warrant equal importance to technical architecture from the earliest planning stages.

Action Plan
Future projects will incorporate formal ethical risk assessments during initial design. I will prioritize engaging with AI safety research to better anticipate societal impacts during system architecture planning.

Reference List
Bommasani, R. et al. (2021) 'On the opportunities and risks of foundation models', arXiv. Available at: https://doi.org/10.48550/arXiv.2108.07258
Bovet, A. & Makse, H.A. (2019) 'Influence of fake news in Twitter during the 2016 US presidential election', Nature Communications, 10(1), p. 7. Available at: https://doi.org/10.1038/s41467-018-07761-2
`
  },

   3: {
    title: "Agent Communication for Stock Procurement",
    content: `
Description
This activity involved designing a KQML/KIF dialogue between two agents: Alice (procurement) and Bob (warehouse stock control). The dialogue required Alice to query stock levels of 50-inch televisions and their HDMI specifications.

Feelings
Initially confident about implementing basic query-response patterns, I found the ontology design challenging. Creating meaningful KIF expressions required careful consideration of how to represent product specifications in machine-readable format.

Evaluation
The successful aspect was implementing core KQML performatives like ask-one and tell. The main difficulty was designing sufficiently expressive KIF statements while maintaining semantic clarity. This reflects broader challenges in agent communication where ontology alignment is crucial for effective interoperability (Staab & Studer, 2009).

Analysis
Research shows that standardized agent communication languages significantly improve multi-agent system coordination and reliability (Finin et al., 2019). The dialogue demonstrated how KQML's speech-act theory foundation enables clear communicative intent, while KIF provides formal semantics for knowledge exchange.

Conclusion
The exercise highlighted that successful agent communication depends equally on protocol adherence and shared ontological understanding. Future designs should incorporate more sophisticated ontology mapping techniques.

Action Plan
I will explore OWL-based ontologies for more complex inventory systems and study fault-tolerant communication patterns for production-level multi-agent systems.

Reference List
Finin, T. et al. (2019) 'Specification of the KQML agent-communication language', Journal of Autonomous Agents and Multi-Agent Systems, 32(3), pp. 315-331.
Staab, S. & Studer, R. (2009) Handbook on ontologies. 2nd edn. Berlin: Springer.

Appendix: Agent Dialogue
text
(ask-one
:receiver Bob
:content (exists (?x) (and (Television ?x) 
                          (hasSize ?x "50 inch")
                          (stockLevel ?x ?q)))
:ontology Warehouse
:language KIF)

(tell
:receiver Alice
:content (and (Television TV123)
             (hasSize TV123 "50 inch")
             (stockLevel TV123 150)
             (hasHDMIports TV123 4))
:ontology Warehouse
:language KIF)
`
  },
 4: {
    title: "Constituency Parsing in Natural Language Processing",
    content: `
Description
This activity involved creating constituency-based parse trees for three English sentences to analyse their syntactic structure. The sentences were: "The government raised interest rates," "The internet gives everyone a voice," and "The man saw the dog with the telescope."

Feelings
I found this exercise challenging yet enlightening. While understanding basic sentence structure was straightforward, accurately representing the hierarchical phrase structure required careful attention to syntactic rules and potential ambiguities.

Evaluation
The positive aspect was successfully identifying core noun phrases (NP) and verb phrases (VP). The main difficulty emerged in handling prepositional phrase attachment in the third sentence, where "with the telescope" could modify either "the dog" or "saw." Research indicates such structural ambiguities represent fundamental challenges in computational parsing (Manning & Carpenter, 2020).

Analysis
Constituency parsing reveals how meaning derives from hierarchical structure rather than linear word order. The parse trees demonstrate how syntactic rules systematically combine words into phrases and sentences (Carnie, 2021). This formal approach provides the foundation for natural language understanding in computational systems.

Conclusion
I should have more carefully considered alternative parse structures for the ambiguous sentence. Multiple valid interpretations often exist for syntactically complex constructions.

Action Plan
I will practice with more complex syntactic structures and explore how probabilistic parsing models handle structural ambiguity in real-world applications.

Reference List
Carnie, A. (2021) Syntax: A generative introduction. 4th edn. Hoboken: Wiley-Blackwell.
Manning, C. D. & Carpenter, B. (2020) 'Constituency parsing with self-attention', Computational Linguistics, 46(2), pp. 345-373.

Appendix: Parse Trees
1.	The government raised interest rates
text
[S [NP [Det The] [N government]] [VP [V raised] [NP [N interest] [N rates]]]]
2.	The internet gives everyone a voice
text
[S [NP [Det The] [N internet]] [VP [V gives] [NP [N everyone]] [NP [Det a] [N voice]]]]
3.	The man saw the dog with the telescope
text
[S [NP [Det The] [N man]] [VP [V saw] [NP [NP [Det the] [N dog]] [PP [P with] [NP [Det the] [N telescope]]]]]
`
  },
   5: {
    title: "Integrating Advanced AI Technologies in Modern Applications",
    content: `
Description
These units explored the progression from fundamental adaptive algorithms (Unit 9) to their practical implementation in deep learning systems (Unit 10) and eventual integration within intelligent agent frameworks in Industry 4.0 and FinTech contexts (Unit 11). This comprehensive overview connected theoretical foundations with real-world applications.

Feelings
I was excited by the technological potential of deep learning architectures, though this enthusiasm became tempered by recognising the significant ethical implications discussed in Unit 10. The synthesis of these technologies in Unit 11 revealed both the sophistication and complexity of modern AI systems.

Evaluation
The strongest aspect was understanding how neural networks form the foundation for increasingly autonomous systems. However, grappling with the socio-economic implications of deeply embedded AI systems presented significant challenges, particularly regarding accountability and transparency in automated decision-making.

Analysis
Research indicates that deep learning's effectiveness stems from its hierarchical feature learning capabilities (LeCun et al., 2015), which enable the complex pattern recognition required for industrial automation and financial forecasting. However, studies also highlight that the opacity of these systems creates substantial governance challenges in critical applications (Zhang et al., 2021), particularly when deployed within multi-agent architectures.

Conclusion
I initially underestimated the importance of explainability in AI systems. The units demonstrated that technical efficacy alone is insufficient. Systems must be designed with the appropriate oversight mechanisms, especially when deployed in financial or manufacturing contexts where decisions have significant consequences.

Action Plan
I will focus on understanding methods for improving AI transparency, such as explainable AI (XAI) techniques. Future projects will incorporate ethical impact assessments alongside technical specifications, particularly for applications involving autonomous decision-making.

Reference List
LeCun, Y., Bengio, Y. & Hinton, G. (2015) 'Deep learning', Nature, 521(7553), pp. 436-444.
Zhang, D., Mishra, S., Brynjolfsson, E. & Etchemendy, J. (2021) 'The AI index 2021 annual report', AI Index Steering Committee, 3(1), pp. 45-68.
`
  },
   6: {
    title: "Deep Learning Application - Synthetic Media (Deepfakes)",
    content: `
Description
This activity required researching a deep learning application with significant societal impact. I investigated synthetic media generation (commonly known as "deepfakes") - systems capable of creating highly realistic, artificial audio, image, and video content using generative adversarial networks (GANs) and autoencoders (Westerlund, 2019).

Feelings
I found this research both fascinating and concerning. The technological achievement is remarkable, yet the potential for misuse created significant unease. This represents a clear case where technological advancement outpaces our ethical and regulatory frameworks.

Evaluation
The positive aspects include legitimate applications in film production, accessibility, and education. However, the negative implications are substantial, particularly regarding non-consensual intimate imagery, political disinformation, and fraud. The accessibility of these tools creates unprecedented scalability for harm (Chesney & Citron, 2019).

Analysis
Deepfakes typically use face-swapping autoencoders or GANs that train on source and target images to map facial features. The technology's impact extends beyond mere misinformation to fundamentally challenging our reliance on audio-visual evidence (Vaccari & Chadwick, 2020). This erosion of epistemic security could undermine journalistic integrity, legal proceedings, and social trust.

Conclusion
I underestimated how quickly this technology would become democratized. The societal implications are more profound than I initially recognized, affecting everything from individual privacy to national security.

Action Plan
I will monitor developments in deepfake detection technologies and support digital literacy initiatives. Future work involving generative AI will include explicit consideration of potential malicious uses and appropriate safeguards.

Reference List
Chesney, R. & Citron, D. (2019) 'Deep fakes: A looming challenge for privacy, democracy, and national security', Lawfare Research Paper Series, 1(1), pp. 1-25.
Vaccari, C. & Chadwick, A. (2020) 'Deepfakes and disinformation: Exploring the impact of synthetic political video on deception, uncertainty, and trust in news', Social Media + Society, 6(1), pp. 1-13.
Westerlund, M. (2019) 'The emergence of deepfake technology: A review', Technology Innovation Management Review, 9(11), pp. 39-52.

`
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
