const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks! Your message is ready to be sent.');
    form.reset();
  });
}

const chatLauncher = document.getElementById('chatLauncher');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

const chatResponses = [
  {
    match: /\b(hello|hi|hey|hey there)\b/i,
    reply: 'Hello! I am Matru’s assistant. Ask me about DB workflows, Airflow, Snowflake, AWS, or project support.'
  },
  {
    match: /\b(airflow|etl|pipeline|workflow)\b/i,
    reply: 'I can help explain Airflow pipeline design, DAG scheduling, retries, and data orchestration best practices.'
  },
  {
    match: /\b(snowflake|snowpro)\b/i,
    reply: 'Snowflake is great for analytics and scalable data warehousing. I use SnowPro-certified design patterns for secure data models.'
  },
  {
    match: /\b(aws|cloud practitioner|cloud|lambda|s3|redshift)\b/i,
    reply: 'AWS is part of my toolset for deployment and data processing. I work with AWS services and cloud-ready database architectures.'
  },
  {
    match: /\b(java|python|db|database|sql)\b/i,
    reply: 'I build database solutions with Python, Java, and SQL for reliable data access, automation, and analytics pipelines.'
  },
  {
    match: /\b(contact|hire|project|work together|join)\b/i,
    reply: 'If you want to collaborate, send a message through the contact form or ask me what details you need to share for your DB project.'
  }
];

const getChatResponse = (message) => {
  const text = message.trim();
  if (!text) {
    return 'Please type a question so I can help you today.';
  }
  const response = chatResponses.find((item) => item.match.test(text));
  return response
    ? response.reply
    : 'I’m here to help with database development, Airflow, Snowflake, AWS, and project guidance. Can you ask me a specific question?';
};

const addChatMessage = (text, sender) => {
  const message = document.createElement('div');
  message.className = `chat-message ${sender}`;
  message.innerHTML = `<p>${text}</p>`;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

if (chatLauncher && chatPanel && chatClose && chatForm && chatInput && chatMessages) {
  const toggleChat = (open) => {
    const isOpen = chatPanel.classList.contains('open');
    if (open === undefined) {
      open = !isOpen;
    }
    chatPanel.classList.toggle('open', open);
    chatPanel.setAttribute('aria-hidden', !open);
    if (open) {
      chatInput.focus();
    }
  };

  chatLauncher.addEventListener('click', () => toggleChat(true));
  chatClose.addEventListener('click', () => toggleChat(false));

  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;
    addChatMessage(message, 'user');
    chatInput.value = '';
    setTimeout(() => {
      addChatMessage(getChatResponse(message), 'bot');
    }, 400);
  });

  const interactiveItems = document.querySelectorAll('.button, .project-card, .skill-card, .about-card, .chat-launcher');
  interactiveItems.forEach((item) => {
    item.addEventListener('pointerdown', () => item.classList.add('tap-feedback'));
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(eventType => {
      item.addEventListener(eventType, () => item.classList.remove('tap-feedback'));
    });
  });

  // Scroll Spy for Navigation Links
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  if (sections.length > 0 && navItems.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }
}
