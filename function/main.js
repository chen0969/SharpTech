    const openIg = () => {
      window.open('https://www.instagram.com/sharpfle_ca?utm_source=ig_web_button_share_sheet&igsh=MW8ydTBobzdma21jMw==', '_blank');
    };

    document.getElementById('logo').addEventListener('click', openIg);


    // ai

    const aiTopics = [
      "What’s the coolest AI you’ve seen?",
      "Would you trust an AI doctor?",
      "Do you think AI can be creative?",
      "What job will AI never replace?",
      "Have you used ChatGPT before?",
      "Can AI fall in love?",
      "Should AI have emotions?",
      "Is AI smarter than humans?",
      "Would you let AI drive your car?",
      "What scares you about AI?",
      "Can AI help solve climate change?",
      "Would you date an AI?",
      "Is AI good or bad for education?",
      "Who should control AI?",
      "What’s your dream AI assistant like?"
    ];

    const showRandomTopics = () => {
      const shuffled = aiTopics.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      document.getElementById('topics').innerHTML = selected.map(t => `
        <div class="card shadow p-3 animate__animated animate__fadeInUp" style="width: 18rem;">
          <div class="card-body">
            <p class="card-text topic__style">${t}</p>
          </div>
        </div>
      `).join('');
    };

    showRandomTopics(); // show first set immediately
    setInterval(showRandomTopics, 60000); // every minute