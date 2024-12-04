document.getElementById('plannerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    const output = `Your colorful journey to ${destination} is planned for ${date}. Get ready for an adventure!`;
    document.getElementById('plannerOutput').textContent = output;
  });
  
  function scrollToPlanner() {
    document.getElementById('planner').scrollIntoView({ behavior: 'smooth' });
  }
  