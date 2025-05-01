const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-a');
const menuUl = document.querySelector('.menu-ul');

const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const skills = document.querySelector('.skills');
const hExperience = document.querySelector('.h-experience');
const hEducation = document.querySelector('.h-education');
const hSkills = document.querySelector('.h-skills');



menu.addEventListener('click', ()=> {
  menuUl.style.display = 'flex';
});

menuLink.forEach(link => {
 link.addEventListener('click', ()=> {
  menuUl.style.display = 'none';
 })
});

// .experience, .education, .skills

hExperience.addEventListener('click', ()=> {
  education.style.display = 'none';
  skills.style.display = 'none';
  experience.style.display = 'block';
  hExperience.classList.add('pp');
  hEducation.classList.remove('pp');
  hSkills.classList.remove('pp');
});

hEducation.addEventListener('click', ()=> {
  education.style.display = 'block';
  skills.style.display = 'none';
  experience.style.display = 'none';
  hEducation.classList.add('pp');
  hExperience.classList.remove('pp');
  hSkills.classList.remove('pp')
});

hSkills.addEventListener('click', ()=> {
  education.style.display = 'none';
  skills.style.display = 'block';
  experience.style.display = 'none';
  hSkills.classList.add('pp')
  hEducation.classList.remove('pp');
  hExperience.classList.remove('pp');
});

