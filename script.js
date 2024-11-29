$(document).ready(function () {
  // Menu toggle and smooth scrolling logic
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // Smooth scrolling for anchor links
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });

  // Trait toggle logic
  document.querySelectorAll('.trait').forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Chatbox functionality
  const chatboxToggle = document.querySelector('.chatbox-icon');
  const chatbox = document.querySelector('.chatbox');
  const chatboxMessages = document.querySelector('.chatbox-messages');
  const chatInput = document.querySelector('.chatbox-input input');
  const sendBtn = document.querySelector('.chatbox-input button');
  const closeBtn = document.querySelector('.close-btn');

  // Function to clear the chat messages
  function clearChat() {
    chatboxMessages.innerHTML = ''; // Clears all messages in the chatbox
  }

  // Toggle Chatbox Visibility
  chatboxToggle.addEventListener('click', () => {
    chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'none';
  });

  // Close Chatbox and clear the chat
  closeBtn.addEventListener('click', () => {
    chatbox.style.display = 'none';
    clearChat(); // Clear messages when closing the chatbox
  });

  // Function to add messages to the chatbox
  function addMessage(content, type) {
    const message = document.createElement('div');
    message.className = type === 'sent' ? 'message-sent' : 'message-received';
    message.textContent = content;
    chatboxMessages.appendChild(message);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight; // Auto-scroll
  }

  // Conversation Logic: Questions related to portfolio and greetings
  function getPortfolioResponse(userMessage) {
    const responses = {
      hi: 'Hello! How can I assist you with my portfolio today?',
      hello: 'Hi there! What would you like to know about my portfolio?',
      'how are you': "I'm just a bot, but I'm here to help! What can I do for you?",
      hey: 'Hey there! Feel free to ask me about my skills, experience, or projects.',
      skills: 'I am skilled in Python, PHP, Flutter, HTML5, CSS3, and JavaScript.',
      experience: 'I have 1 year of experience as a PHP Backend Developer at Mukuru.',
      projects: 'I have worked on several projects, including ride-sharing apps, subscription systems, and gym management apps.',
      education: 'I hold a Diploma in Computer System Engineering, which I completed in 2020.',
      school: 'I attended Hlanganani Secondary School from 2011 to 2015, where I focused on subjects such as mathematics, science.',
      university: 'I completed my Diploma at Tshwane University of Technology, where I majored in Computer System Engineering and gained a strong foundation in software development and problem-solving.',
      portfolio: 'My portfolio showcases my expertise in web and mobile development. Let me know if you’d like more details on specific projects!',
      about: `Here are a few things about me:
        1. Curiosity - I am open to new ideas and fresh perspectives.
        2. I am always ready to challenge myself. I never stop improving and learning.
        3. Accountability - Constantly striving for excellence, I take ownership and responsibility.
        4. Communication - I believe that communication is at the heart of collaboration.`,
      certificates:  "I have completed certifications in HTML5, CSS5, Global HealhCare Hackathon(2nd place), and Python development, among others",
      location: "I am based in Guaten 1632 Midrand 1121 Kaalfontain Ext2 Glassnose Street.",
      address: "I am based in Guaten 1632 Midrand 1121 Kaalfontain Ext2 Glassnose Street.",
      license: "I hold a valid professional license in software development."

    };
    

    // Check if userMessage matches a valid question or greeting
    userMessage = userMessage.toLowerCase(); // Convert input to lowercase for matching
    for (const keyword in responses) {
      if (userMessage.includes(keyword)) {
        return responses[keyword]; // Return the matching response
      }
    }
    // Fallback response for invalid questions
    return "I'm sorry, I can only answer questions related to my portfolio. Please ask about my skills, projects, experience, education, or more about me.";
  }

  // Handle Send Button Click
  sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, 'sent'); // Add sent message
      chatInput.value = ''; // Clear input

      // Generate and add bot response
      setTimeout(() => {
        const botResponse = getPortfolioResponse(userMessage);
        addMessage(botResponse, 'received');
      }, 1000);
    }
  });

  // Handle Enter Key Press
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });
});
